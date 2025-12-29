import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* left content */}
          <div className="text-center sm:text-left">
            <div className="mb-3">
              <span className="font-semibold tracking-wider mb-4 bg-linear-to-bl from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text">
                Eveify
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-[0.95] tracking-tight">
              Where{" "}
              <span className="bg-linear-to-r from-blue-400 via-purple-600 to-rose-400 bg-clip-text text-transparent">
                Moments
              </span>{" "}
              <br />
              turn into
              <br />
              <span className="bg-linear-to-r from-blue-400 via-purple-600 to-rose-400 bg-clip-text text-transparent">
                Events.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-lg font-light">
              Whether you’re organizing or attending, Eveify turns every
              gathering into a memorable experience. Get started today.
            </p>

            <Link href="/explore">
              <Button
                size="xl"
                className={
                  "rounded-full md:hover:scale-95 md:hover:bg-gray-300"
                }
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          {/* right content */}
          <div className="relative block">
            
            <video
              width="100%"
              height="100%"
              loop
              playsInline
              autoPlay
              muted
              className="w-full h-auto"
            >
              <source
                src="https://cdn.lu.ma/landing/phone-dark.mp4"
                type="video/mp4;codecs=hvc1"
              />
              <source
                src="https://cdn.lu.ma/landing/phone-dark.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}
