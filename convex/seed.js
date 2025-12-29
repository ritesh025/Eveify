import { internalMutation } from "./_generated/server";

// Sample events data with Unsplash images
const SAMPLE_EVENTS = [
  {
    title: "Midnight LAN Party – CS2 & FIFA",
    description: `An overnight LAN gaming experience for true gamers!

Games lineup:
- Counter-Strike 2 (5v5 competitive)
- FIFA 24 knockout matches
- Casual free-play zones
- Live leaderboard & shoutcasting

Bring your squad or come solo — teams will be formed on the spot. High-performance PCs, stable network, and gaming peripherals provided.

Snacks, energy drinks, and chill zones available throughout the night.`,
    category: "gaming",
    tags: ["gaming", "lan", "cs2", "fifa", "esports"],
    city: "Bangalore",
    state: "Karnataka",
    venue: "https://maps.google.com/?q=Play+Arena+Bangalore",
    address: "Play Arena, Sarjapur Road, Bangalore",
    capacity: 64,
    ticketType: "paid",
    ticketPrice: 599,
    coverImage:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80",
    themeColor: "#7f1d1d",
  },
  {
    title: "Indie Music Night: Live & Unplugged",
    description: `Experience soulful live performances by emerging indie artists in an intimate setting.

Highlights:
- Acoustic and unplugged sets
- Original compositions and covers
- Open mic session at the end
- Cozy café vibes

Perfect for music lovers looking to discover fresh talent and unwind with good sound.`,
    category: "music",
    tags: ["music", "live", "indie", "concert"],
    city: "Pune",
    state: "Maharashtra",
    venue: "https://maps.google.com/?q=High+Spirits+Cafe+Pune",
    address: "High Spirits Café, Koregaon Park, Pune",
    capacity: 120,
    ticketType: "paid",
    ticketPrice: 250,
    coverImage:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=1200&q=80",
    themeColor: "#1e293b",
  },
  {
    title: "AI & Future Tech Meetup",
    description: `A community-driven meetup focused on Artificial Intelligence and emerging technologies.

Agenda:
- AI use cases in real-world products
- Panel discussion with startup founders
- Networking with developers & engineers
- Q&A session

Ideal for students, developers, and tech enthusiasts curious about the future.`,
    category: "tech",
    tags: ["tech", "ai", "meetup", "startup"],
    city: "Hyderabad",
    state: "Telangana",
    venue: "https://maps.google.com/?q=T-Hub+Hyderabad",
    address: "T-Hub, HITEC City, Hyderabad",
    capacity: 100,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1581091215367-59ab6b9d1f5e?w=1200&q=80",
    themeColor: "#0f172a",
  },
  {
    title: "Startup Growth & Funding Masterclass",
    description: `Learn how to scale your startup and attract investors from industry experts.

Topics covered:
- Building investor-ready pitch decks
- Growth strategies for early startups
- Common funding mistakes
- Live case studies

A must-attend for founders, entrepreneurs, and business leaders.`,
    category: "business",
    tags: ["business", "startup", "funding", "entrepreneurship"],
    city: "Delhi",
    state: "Delhi",
    venue: "https://maps.google.com/?q=91Springboard+Delhi",
    address: "91Springboard, Connaught Place, Delhi",
    capacity: 70,
    ticketType: "paid",
    ticketPrice: 499,
    coverImage:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80",
    themeColor: "#064e3b",
  },
  {
    title: "Art & Illustration Exhibition",
    description: `Explore contemporary artworks and illustrations by local artists.

Features:
- Original paintings and digital art
- Artist interaction sessions
- Live sketching demos
- Art prints for sale

A creative evening celebrating imagination and expression.`,
    category: "art",
    tags: ["art", "exhibition", "illustration", "creative"],
    city: "Jaipur",
    state: "Rajasthan",
    venue: "https://maps.google.com/?q=Jawahar+Kala+Kendra+Jaipur",
    address: "Jawahar Kala Kendra, Jaipur",
    capacity: 150,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?w=1200&q=80",
    themeColor: "#78350f",
  },
  {
    title: "Career Guidance Seminar for Students",
    description: `A practical seminar helping students make informed career decisions.

Sessions include:
- Career options after graduation
- Skill-based learning paths
- Study abroad insights
- Expert Q&A

Perfect for college students and fresh graduates.`,
    category: "education",
    tags: ["education", "career", "students", "guidance"],
    city: "Chennai",
    state: "Tamil Nadu",
    venue: "https://maps.google.com/?q=IIT+Madras",
    address: "IIT Madras Campus, Chennai",
    capacity: 200,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    themeColor: "#1e40af",
  },

  {
    title: "Weekend Cricket League",
    description: `Join a friendly yet competitive weekend cricket league.

Details:
- Team-based league format
- Umpires and scorers provided
- Trophies and medals
- Open to amateurs

Bring your team spirit and enjoy the game!`,
    category: "sports",
    tags: ["sports", "cricket", "league", "outdoor"],
    city: "Ahmedabad",
    state: "Gujarat",
    venue: "https://maps.google.com/?q=Riverfront+Sports+Park+Ahmedabad",
    address: "Sabarmati Riverfront Sports Park",
    capacity: 120,
    ticketType: "paid",
    ticketPrice: 150,
    coverImage:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80",
    themeColor: "#14532d",
  },
  {
    title: "Street Food Festival",
    description: `Taste the best street food from across the city in one place.

What’s inside:
- Multiple food stalls
- Live cooking counters
- Music and seating area
- Family-friendly event

Come hungry and leave happy!`,
    category: "food",
    tags: ["food", "festival", "street-food"],
    city: "Indore",
    state: "Madhya Pradesh",
    venue: "https://maps.google.com/?q=Chappan+Dukan+Indore",
    address: "56 Dukan, Indore",
    capacity: 300,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    themeColor: "#7c2d12",
  },
  {
    title: "Morning Yoga & Wellness Session",
    description: `Start your day with guided yoga and mindfulness practices.

Includes:
- Breathing exercises
- Beginner-friendly yoga
- Mental wellness tips
- Calm outdoor environment

Open to all age groups.`,
    category: "health",
    tags: ["health", "yoga", "wellness", "fitness"],
    city: "Rishikesh",
    state: "Uttarakhand",
    venue: "https://maps.google.com/?q=Ganga+Ghat+Rishikesh",
    address: "Ganga Ghat, Rishikesh",
    capacity: 80,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=1200&q=80",
    themeColor: "#065f46",
  },

  {
    title: "Professional Networking Mixer",
    description: `Meet professionals from tech, business, and creative industries.

Highlights:
- Speed networking rounds
- Ice-breaker activities
- Refreshments included
- Opportunity to collaborate

Build meaningful connections beyond LinkedIn.`,
    category: "networking",
    tags: ["networking", "professionals", "meetup"],
    city: "Gurgaon",
    state: "Haryana",
    venue: "https://maps.google.com/?q=Cyber+Hub+Gurgaon",
    address: "Cyber Hub, Gurgaon",
    capacity: 100,
    ticketType: "paid",
    ticketPrice: 350,
    coverImage:
      "https://images.unsplash.com/photo-1515169067865-5387ec356754?w=1200&q=80",
    themeColor: "#312e81",
  },
  {
    title: "Sunrise Trek & Nature Walk",
    description: `A guided sunrise trek followed by a peaceful nature walk.

What to expect:
- Easy-moderate trek
- Scenic viewpoints
- Group activities
- Refreshments after trek

Reconnect with nature and meet fellow explorers.`,
    category: "outdoor",
    tags: ["outdoor", "trekking", "nature"],
    city: "Lonavala",
    state: "Maharashtra",
    venue: "https://maps.google.com/?q=Rajmachi+Trek",
    address: "Rajmachi Trek Point, Lonavala",
    capacity: 50,
    ticketType: "paid",
    ticketPrice: 400,
    coverImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
    themeColor: "#365314",
  },
  {
    title: "Community Clean-Up Drive",
    description: `Join hands with local volunteers to make our neighborhood cleaner.

Activities:
- Area clean-up
- Waste segregation awareness
- Free refreshments
- Volunteer certificates

Let’s create impact together.`,
    category: "community",
    tags: ["community", "volunteering", "social"],
    city: "Kochi",
    state: "Kerala",
    venue: "https://maps.google.com/?q=Marine+Drive+Kochi",
    address: "Marine Drive, Kochi",
    capacity: 100,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200&q=80",
    themeColor: "#064e3b",
  },
  {
    title: "Web Dev Meetup – Modern Frontend Stack",
    description: `A developer-focused meetup exploring modern frontend tools and workflows.

Talk highlights:
- React Server Components in practice
- Tailwind CSS at scale
- State management in 2025
- Performance optimization tips

Includes lightning talks, open discussion, and networking with fellow developers. Ideal for frontend engineers and students alike.

Snacks and refreshments provided.`,
    category: "tech",
    tags: ["tech", "web", "frontend", "react"],
    city: "Ahmedabad",
    state: "Gujarat",
    venue: "https://maps.google.com/?q=DevX+Ahmedabad",
    address: "DevX Coworking, Prahlad Nagar, Ahmedabad",
    capacity: 80,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    themeColor: "#0f172a",
  },
  {
    title: "Mindfulness & Stress Management Workshop",
    description: `A guided workshop focused on mental wellness and stress management.

Session includes:
- Mindfulness techniques
- Breathing exercises
- Stress coping strategies
- Guided meditation

Designed for working professionals, students, and anyone seeking balance in daily life. No prior experience required.

Comfortable seating provided.`,
    category: "health",
    tags: ["health", "mindfulness", "mental-health", "wellness"],
    city: "Jaipur",
    state: "Rajasthan",
    venue: "https://maps.google.com/?q=Jawahar+Circle+Jaipur",
    address: "Community Hall, Jawahar Circle, Jaipur",
    capacity: 60,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Local Community Open Mic Night",
    description: `An open platform for poetry, storytelling, comedy, and music.

Event flow:
- Pre-registered performances
- Open mic slots
- Audience interaction
- Community networking

Whether you want to perform or just enjoy local talent, this event celebrates creativity and expression in a friendly environment.

Family-friendly and welcoming to all.`,
    category: "community",
    tags: ["community", "open-mic", "local-talent"],
    city: "Bhopal",
    state: "Madhya Pradesh",
    venue: "https://maps.google.com/?q=Bharat+Bhavan+Bhopal",
    address: "Bharat Bhavan Amphitheatre, Bhopal",
    capacity: 100,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200&q=80",
    themeColor: "#064e3b",
  },
  {
    title: "Regional Street Food Pop-Up",
    description: `Discover authentic regional street food from different Indian states.

Food lineup:
- North & South Indian snacks
- Live cooking counters
- Fusion street food
- Dessert specials

A casual evening perfect for families, foodies, and anyone who loves exploring flavors.

Limited seating available.`,
    category: "food",
    tags: ["food", "street-food", "festival", "pop-up"],
    city: "Nagpur",
    state: "Maharashtra",
    venue: "https://maps.google.com/?q=Futala+Lake+Nagpur",
    address: "Futala Lake Food Zone, Nagpur",
    capacity: 200,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    themeColor: "#7c2d12",
  },
  {
    title: "Jazz & Blues Evening – Live Sessions",
    description: `An elegant evening of smooth jazz and blues performances by seasoned musicians.

What to expect:
- Live jazz quartet
- Blues improvisation sets
- Cozy lounge atmosphere
- Audience interaction between sets

Perfect for music lovers who enjoy mellow rhythms, live instruments, and relaxed conversations over great music.

Food and drinks available at the venue.`,
    category: "music",
    tags: ["music", "jazz", "blues", "live"],
    city: "Bangalore",
    state: "Karnataka",
    venue: "https://maps.google.com/?q=Blue+Frog+Bangalore",
    address: "Blue Frog Lounge, Indiranagar, Bangalore",
    capacity: 100,
    ticketType: "paid",
    ticketPrice: 699,
    coverImage:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&q=80",
    themeColor: "#1e293b",
  },
  {
    title: "Small Business Branding Workshop",
    description: `Learn how to build a strong brand identity for your business.

Workshop highlights:
- Brand positioning fundamentals
- Visual identity basics
- Social media branding tips
- Real-world case studies

Designed for small business owners, freelancers, and early-stage founders looking to stand out in competitive markets.

Workbook and templates included.`,
    category: "business",
    tags: ["business", "branding", "marketing", "entrepreneur"],
    city: "Surat",
    state: "Gujarat",
    venue: "https://maps.google.com/?q=iStart+Surat",
    address: "iStart Incubation Center, Surat",
    capacity: 45,
    ticketType: "paid",
    ticketPrice: 399,
    coverImage:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80",
    themeColor: "#064e3b",
  },
  {
    title: "Intro to Cybersecurity – Hands-on Session",
    description: `Understand the basics of cybersecurity and online safety through practical demonstrations.

Topics covered:
- Common cyber threats
- Password & data protection
- Ethical hacking basics
- Career paths in cybersecurity

Ideal for students, IT professionals, and beginners interested in security fundamentals.

Laptop recommended.`,
    category: "tech",
    tags: ["tech", "cybersecurity", "security", "workshop"],
    city: "Kochi",
    state: "Kerala",
    venue: "https://maps.google.com/?q=Infopark+Kochi",
    address: "Infopark Phase 1, Kochi",
    capacity: 60,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
    themeColor: "#020617",
  },
  {
    title: "Public Speaking & Communication Skills",
    description: `Improve your confidence and communication skills through interactive exercises.

Session includes:
- Overcoming stage fear
- Body language tips
- Speech structuring
- Live practice sessions

Suitable for students, professionals, and anyone looking to improve public speaking abilities.

Participation certificates provided.`,
    category: "education",
    tags: ["education", "communication", "public-speaking"],
    city: "Lucknow",
    state: "Uttar Pradesh",
    venue: "https://maps.google.com/?q=IIM+Lucknow",
    address: "IIM Lucknow Campus",
    capacity: 80,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    themeColor: "#1e3a8a",
  },
  {
    title: "Badminton Doubles Championship",
    description: `A competitive badminton tournament for amateur and intermediate players.

Tournament details:
- Doubles format
- League + knockout rounds
- Medals and cash prizes
- Certified referees

Register with your partner or we’ll help pair you with one.

Indoor courts with proper lighting and flooring.`,
    category: "sports",
    tags: ["sports", "badminton", "tournament", "fitness"],
    city: "Gurgaon",
    state: "Haryana",
    venue: "https://maps.google.com/?q=Fitso+Gurgaon",
    address: "Fitso Sports Arena, Gurgaon",
    capacity: 48,
    ticketType: "paid",
    ticketPrice: 499,
    coverImage:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07d?w=1200&q=80",
    themeColor: "#14532d",
  },
  {
    title: "Valley of Flowers Trek – Monsoon Special",
    description: `Witness one of India's most beautiful alpine flower valleys in full bloom!

Trek plan:
- Day 1: Rishikesh to Govindghat (overnight stay)
- Day 2: Govindghat to Ghangaria trek
- Day 3: Valley of Flowers exploration
- Day 4: Hemkund Sahib visit & return

Package includes:
- Certified trek guide
- Accommodation (guesthouse & camps)
- All meals during trek
- Forest permits & entry fees
- Safety & first-aid support

Moderate fitness required. Ideal for nature lovers and photographers.

Transportation from Rishikesh included.`,
    category: "outdoor",
    tags: ["outdoor", "trekking", "himalayas", "nature"],
    city: "Joshimath",
    state: "Uttarakhand",
    venue: "https://maps.google.com/?q=Govindghat",
    address: "Govindghat Base Camp, Uttarakhand",
    capacity: 18,
    ticketType: "paid",
    ticketPrice: 8500,
    coverImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
    themeColor: "#065f46",
  },
  {
    title: "Startup Pitch Day – Early Stage Founders",
    description: `Present your startup idea to a panel of investors and mentors.

Event format:
- 3-minute startup pitches
- Live feedback from investors
- Panel discussion on fundraising
- Networking session with founders
- Best pitch awards

Open to idea-stage and early-revenue startups. Bring your pitch deck and be ready to answer tough questions.

Great opportunity to validate ideas and build investor connections.`,
    category: "business",
    tags: ["business", "startup", "pitching", "funding"],
    city: "Bangalore",
    state: "Karnataka",
    venue: "https://maps.google.com/?q=WeWork+Koramangala",
    address: "WeWork, Koramangala, Bangalore",
    capacity: 60,
    ticketType: "paid",
    ticketPrice: 499,
    coverImage:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80",
    themeColor: "#064e3b",
  },
  {
    title: "UI/UX Design Bootcamp – Hands-on Edition",
    description: `Learn modern UI/UX design through practical projects.

Curriculum includes:
- Design thinking fundamentals
- User research & personas
- Wireframing & prototyping
- Figma hands-on practice
- Design systems & accessibility
- Portfolio review

Designed for beginners and aspiring designers. No prior design experience required.

Laptop mandatory. Design resources and templates included.`,
    category: "tech",
    tags: ["tech", "uiux", "design", "figma"],
    city: "Hyderabad",
    state: "Telangana",
    venue: "https://maps.google.com/?q=IIIT+Hyderabad",
    address: "IIIT Hyderabad Campus",
    capacity: 45,
    ticketType: "paid",
    ticketPrice: 1999,
    coverImage:
      "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=1200&q=80",
    themeColor: "#1e293b",
  },
  {
    title: "Community Blood Donation Camp",
    description: `Be a hero by donating blood and saving lives.

Event flow:
- Health check-up
- Blood donation process
- Doctor consultation
- Awareness session
- Refreshments post donation

Organized in collaboration with certified medical professionals. Open to healthy adults aged 18–60.

Donation certificates provided.`,
    category: "community",
    tags: ["community", "health", "volunteer", "blood-donation"],
    city: "Nagpur",
    state: "Maharashtra",
    venue: "https://maps.google.com/?q=Government+Medical+College+Nagpur",
    address: "GMC Auditorium, Nagpur",
    capacity: 150,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
    themeColor: "#1e3a8a",
  },
  {
    title: "College Esports Open – Friendly Tournament",
    description: `A free-to-enter esports event designed especially for college students.

Event format:
- Open registration (solo & teams)
- Friendly competitive matches
- Games announced on event day
- No elimination stress — focus on learning & fun

A great opportunity to experience esports, meet fellow gamers, and build your campus gaming community.

College ID required for entry.`,
    category: "gaming",
    tags: ["gaming", "esports", "college", "free"],
    city: "Kolkata",
    state: "West Bengal",
    venue: "https://maps.google.com/?q=Jadavpur+University",
    address: "Jadavpur University Student Activity Center, Kolkata",
    capacity: 120,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80",
    themeColor: "#7c2d12",
  },
  {
    title: "Amateur T20 Cricket Tournament – City League",
    description: `A competitive T20 cricket tournament designed for amateur and semi-professional players.

Tournament format:
- 8 teams
- T20 matches (20 overs per side)
- League stage followed by semi-finals & final
- Certified umpires and scorers
- Man of the Match & Best Player awards

Teams must register with 11 players + 2 substitutes. All matches will be played with leather balls.

Water, first-aid support, and shaded rest areas provided. Bring your team spirit and play hard!`,
    category: "sports",
    tags: ["sports", "cricket", "t20", "tournament"],
    city: "Kanpur",
    state: "Uttar Pradesh",
    venue: "https://maps.google.com/?q=Green+Park+Stadium+Kanpur",
    address: "Green Park Practice Ground, Kanpur",
    capacity: 120,
    ticketType: "paid",
    ticketPrice: 300,
    coverImage:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80",
    themeColor: "#14532d",
  },
  {
    title: "Food & Drinks Carnival – Taste the City",
    description: `An all-day food and drinks carnival bringing together the best flavors from across the city.

What’s included:
- 20+ food stalls (street food, fusion & desserts)
- Fresh mocktails, coolers & craft beverages
- Live cooking demonstrations
- Music & seating zones
- Family-friendly atmosphere

Whether you're a hardcore foodie or just looking to hang out with friends over great food and drinks, this carnival has something for everyone.

Pay per stall. Entry is free.`,
    category: "food",
    tags: ["food", "drinks", "festival", "street-food"],
    city: "Chandigarh",
    state: "Chandigarh",
    venue: "https://maps.google.com/?q=Sector+17+Plaza+Chandigarh",
    address: "Sector 17 Plaza, Chandigarh",
    capacity: 300,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    themeColor: "#7c2d12",
  },
  {
    title: "Corporate Cricket League – Inter-Company Tournament",
    description: `A professionally organized cricket tournament exclusively for corporate teams.

Tournament format:
- Corporate teams only (employees & contractors)
- T20 matches
- League stage + knockout rounds
- Certified umpires and scorers
- Team jerseys & match balls provided
- Corporate trophies and individual awards

Each team must register with 11 players + 3 substitutes. Ideal for team bonding, leadership building, and healthy competition outside the workplace.

Water, refreshments, medical support, and shaded dugouts provided.`,
    category: "sports",
    tags: ["sports", "cricket", "corporate", "tournament", "team-building"],
    city: "Bangalore",
    state: "Karnataka",
    venue:
      "https://maps.google.com/?q=Karnataka+State+Cricket+Association+Ground",
    address: "KSCA Practice Grounds, Bangalore",
    capacity: 160,
    ticketType: "paid",
    ticketPrice: 2500,
    coverImage:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80",
    themeColor: "#14532d",
  },
  {
    title: "Free Fire Max Tournament – Battle Royale Showdown",
    description: `Get ready for an intense Free Fire Max battle royale tournament!

Tournament format:
- Squad matches (4v4)
- Multiple qualifying rounds
- Custom rooms with fair-play rules
- Grand finale with top squads
- MVP & Best Fragger awards

Bring your own mobile device and headphones. Stable Wi-Fi, charging points, and match moderators provided at the venue.

Open to all skill levels. Exciting prizes and certificates for top performers.`,
    category: "gaming",
    tags: ["gaming", "freefire", "battle-royale", "mobile", "esports"],
    city: "Ranchi",
    state: "Jharkhand",
    venue: "https://maps.google.com/?q=Nucleus+Mall+Ranchi",
    address: "Nucleus Mall Gaming Zone, Ranchi",
    capacity: 100,
    ticketType: "paid",
    ticketPrice: 199,
    coverImage:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1200&q=80",
    themeColor: "#7f1d1d",
  },
  {
    title: "Weekend Buildathon – Innovate & Create",
    description: `A high-energy weekend event where developers, designers, and problem-solvers come together to build real solutions.

Event format:
- Team-based (2–4 members)
- 24-hour build window
- Problem statements provided on day one
- Mentor check-ins throughout the event
- Final demos & judging panel

Focus areas include web apps, mobile apps, AI tools, and social impact solutions.

Open to students and working professionals. Bring your own laptop and enthusiasm.

Meals, snacks, swag, and participation certificates included.`,
    category: "tech",
    tags: ["tech", "buildathon", "coding", "innovation", "competition"],
    city: "Jaipur",
    state: "Rajasthan",
    venue: "https://maps.google.com/?q=Rajasthan+University",
    address: "University of Rajasthan Campus, Jaipur",
    capacity: 120,
    ticketType: "free",
    coverImage:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80",
    themeColor: "#020617",
  },
  {
    title: "Mobile Gaming Showdown – BGMI Squad Battles",
    description: `A high-energy mobile esports event focused on BGMI squad matches!

Match format:
- Squad-based battles (4v4)
- Multiple qualifying rounds
- Custom rooms with fair play rules
- Final showdown with top squads

Bring your own device and headphones. Stable Wi-Fi, charging stations, and match referees provided.

Exciting prizes for top teams and MVP players. Live leaderboard updates throughout the event.`,
    category: "gaming",
    tags: ["gaming", "mobile", "bgmi", "esports", "tournament"],
    city: "Patna",
    state: "Bihar",
    venue: "https://maps.google.com/?q=City+Centre+Mall+Patna",
    address: "City Centre Mall, Patna",
    capacity: 80,
    ticketType: "paid",
    ticketPrice: 199,
    coverImage:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1200&q=80",
    themeColor: "#7f1d1d",
  },
];

// Helper functions
function getRandomFutureDate(minDays = 7, maxDays = 90) {
  const now = Date.now();
  const randomDays = Math.floor(Math.random() * (maxDays - minDays) + minDays);
  return now + randomDays * 24 * 60 * 60 * 1000;
}

function getEventEndTime(startTime) {
  const durationHours = Math.floor(Math.random() * 3) + 2;
  return startTime + durationHours * 60 * 60 * 1000;
}

function generateSlug(title) {
  return (
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") +
    `-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`
  );
}

// RUN THIS DIRECTLY FROM CONVEX DASHBOARD
// Go to Dashboard > Functions > seed:run > Run
export const run = internalMutation({
  handler: async (ctx) => {
    // First, get or create a default organizer user
    let organizer = await ctx.db.query("users").first();

    if (!organizer) {
      // Create a default organizer if no users exist
      const organizerId = await ctx.db.insert("users", {
        email: "organizer@eventhub.com",
        tokenIdentifier: "seed-user-token",
        name: "EventHub Team",
        hasCompletedOnboarding: true,
        location: {
          city: "Bangalore",
          state: "Karnataka",
          country: "India",
        },
        interests: ["tech", "music", "business"],
        freeEventsCreated: 0,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
      organizer = await ctx.db.get(organizerId);
    }

    const createdEvents = [];

    for (const eventData of SAMPLE_EVENTS) {
      const startDate = getRandomFutureDate();
      const endDate = getEventEndTime(startDate);
      const registrationCount = Math.floor(
        Math.random() * eventData.capacity * 0.7
      );

      const event = {
        ...eventData,
        slug: generateSlug(eventData.title),
        organizerId: organizer._id,
        organizerName: organizer.name,
        startDate,
        endDate,
        timezone: "Asia/Kolkata",
        locationType: "physical",
        country: "India",
        registrationCount,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

      const eventId = await ctx.db.insert("events", event);
      createdEvents.push(eventData.title);
    }

    console.log(`✅ Successfully seeded ${createdEvents.length} events!`);
    return {
      success: true,
      count: createdEvents.length,
      events: createdEvents,
    };
  },
});

// Optional: Clear all events
export const clear = internalMutation({
  handler: async (ctx) => {
    const events = await ctx.db.query("events").collect();
    let count = 0;

    for (const event of events) {
      const regs = await ctx.db
        .query("registrations")
        .withIndex("by_event", (q) => q.eq("eventId", event._id))
        .collect();

      for (const reg of regs) {
        await ctx.db.delete(reg._id);
      }

      await ctx.db.delete(event._id);
      count++;
    }

    console.log(`🗑️ Cleared ${count} events`);
    return { success: true, deleted: count };
  },
});
