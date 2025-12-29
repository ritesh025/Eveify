"use client";

import { useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Calendar, MapPin, Users, ArrowRight, Loader2 } from "lucide-react";
import { format } from "date-fns";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { useConvexQuery } from "@/hooks/use-convex-query";
import { api } from "@/convex/_generated/api";
import { createLocationSlug } from "@/lib/location-utils";
import { CATEGORIES } from "@/lib/data";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import EventCard from "@/components/event-card";

/* Interest-based prioritizer (FIXED) */
function prioritizeEventsByInterest(events = [], interests = []) {
  if (!events?.length || !interests?.length) return events;

  const interestSet = new Set(
    interests.map((i) => i.toLowerCase().trim())
  );

  const matched = [];
  const others = [];

  events.forEach((event) => {
    const category = event.category?.toLowerCase().trim();

    if (interestSet.has(category)) {
      matched.push(event);
    } else {
      others.push(event);
    }
  });

  return [...matched, ...others];
}


export default function ExplorePage() {
  const router = useRouter();
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  /* Data Fetching*/
  const { data: currentUser } = useConvexQuery(api.users.getCurrentUser);

  const { data: featuredEvents, isLoading: loadingFeatured } = useConvexQuery(
    api.explore.getFeaturedEvents,
    { limit: 6 }
  );

  const { data: localEvents, isLoading: loadingLocal } = useConvexQuery(
    api.explore.getEventsByLocation,
    {
      city: currentUser?.location?.city || "",
      state: currentUser?.location?.state || "",
      limit: 4,
    }
  );

  const { data: popularEvents, isLoading: loadingPopular } = useConvexQuery(
    api.explore.getPopularEvents,
    { limit: 9 }
  );

  const { data: categoryCounts } = useConvexQuery(
    api.explore.getCategoryCounts
  );

  /*Personalization*/
  /* Personalization (FIXED) */
  const userInterests = useMemo(
    () => currentUser?.interests ?? [],
    [currentUser?.interests]
  );

  const prioritizedLocalEvents = useMemo(
    () => prioritizeEventsByInterest(localEvents, userInterests),
    [localEvents, userInterests]
  );

  const prioritizedPopularEvents = useMemo(
    () => prioritizeEventsByInterest(popularEvents, userInterests),
    [popularEvents, userInterests]
  );

  const categoriesWithCounts = CATEGORIES.map((cat) => ({
    ...cat,
    count: categoryCounts?.[cat.id] || 0,
  }));

  const isLoading = loadingFeatured || loadingLocal || loadingPopular;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-rose-500" />
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <div className="pb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Discover Events</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover featured events, see what’s happening near you, or explore
          celebrations across India.
        </p>
      </div>

      {/* Featured Carousel */}
      {featuredEvents?.length > 0 && (
        <div className="mb-16">
          <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {featuredEvents.map((event) => (
                <CarouselItem key={event._id}>
                  <div
                    className="relative h-96 rounded-xl overflow-hidden cursor-pointer"
                    onClick={() => router.push(`/events/${event.slug}`)}
                  >
                    {event.coverImage ? (
                      <Image
                        src={event.coverImage}
                        alt={event.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    ) : (
                      <div
                        className="absolute inset-0"
                        style={{ backgroundColor: event.themeColor }}
                      />
                    )}

                    <div className="absolute inset-0 bg-black/60" />

                    <div className="relative h-full flex flex-col justify-end p-8">
                      <Badge className="mb-3 w-fit" variant="secondary">
                        {event.city}, {event.state || event.country}
                      </Badge>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {event.title}
                      </h2>
                      <p className="text-white/90 line-clamp-2 mb-4">
                        {event.description}
                      </p>

                      <div className="flex gap-4 text-white/80 text-sm">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {format(event.startDate, "PPP")}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {event.registrationCount} registered
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}

      {/* Events Near You (Interest First) */}
      {prioritizedLocalEvents?.length > 0 && (
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-1">Events Near You</h2>
              <p className="text-muted-foreground">
                Happening in {currentUser?.location?.city || "your area"}
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                const slug = createLocationSlug(
                  currentUser?.location?.city || "",
                  currentUser?.location?.state || ""
                );
                router.push(`/explore/${slug}`);
              }}
            >
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {prioritizedLocalEvents.map((event) => (
              <EventCard
                key={event._id}
                event={event}
                variant="compact"
                onClick={() => router.push(`/events/${event.slug}`)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Browse by Category (UNCHANGED) */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Browse by Category</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {categoriesWithCounts.map((category) => (
            <Card
              key={category.id}
              className="py-2 group cursor-pointer hover:shadow-lg transition-all hover:border-purple-500/50"
              onClick={() => router.push(`/explore/${category.id}`)}
            >
              <CardContent className="px-3 sm:p-6 flex items-center gap-3">
                <div className="text-3xl sm:text-4xl">{category.icon}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-1 group-hover:text-purple-400 transition-colors">
                    {category.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count} Event
                    {category.count !== 1 ? "s" : ""}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Popular Events (Interest First) */}
      {prioritizedPopularEvents?.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-1">Popular Across India</h2>
          <p className="text-muted-foreground mb-6">
            Trending events nationwide
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {prioritizedPopularEvents.map((event) => (
              <EventCard
                key={event._id}
                event={event}
                variant="list"
                onClick={() => router.push(`/events/${event.slug}`)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
