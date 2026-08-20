export const BRAND = {
  name: "All Author Collective",
  tagline: "Where Every Author Belongs",
  email: "infotheauthorcollective@gmail.com",
  whatsapp: "https://wa.me/10000000000",
  telegram: "https://t.me/allauthorcollective",
};

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Case Studies" },
  { to: "/process", label: "Process" },
  { to: "/pricing", label: "Investment" },
  { to: "/blog", label: "Resources" },
  { to: "/contact", label: "Contact" },
] as const;

export const STATS = [
  { value: 50, suffix: "+", label: "Books Promoted" },
  { value: 30, suffix: "+", label: "Authors Served" },
  { value: 15, suffix: "+", label: "Genres Covered" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export const SERVICE_CATEGORIES = [
  {
    id: "visual-branding",
    title: "Visual Branding",
    blurb: "The first impression a reader ever has of your book.",
    services: [
      {
        name: "Ebook Cover Design",
        description:
          "Covers built on genre research, not guesswork. We design the shelf presence your story deserves, tested at thumbnail size where buying decisions are actually made.",
      },
      {
        name: "Book Mockup Creation",
        description:
          "Photorealistic 3D mockups for your store pages, press kit and socials. Your book looks published, professional and real before a single copy ships.",
      },
      {
        name: "Book Presentational Banner",
        description:
          "Launch banners for Amazon, your website and every social profile. One cohesive visual language across every place a reader might find you.",
      },
      {
        name: "Book Video Trailer",
        description:
          "Cinematic 20–45 second trailers written to stop the scroll. Motion, sound and pacing built for the platforms where readers discover their next read.",
      },
    ],
  },
  {
    id: "amazon-platform",
    title: "Amazon & Platform Optimization",
    blurb: "Where discovery becomes sales.",
    services: [
      {
        name: "Amazon KDP Ads Setup & Management",
        description:
          "Keyword and category research, campaign structure and daily bid management. We optimise toward profitable ACOS, not vanity impressions.",
      },
      {
        name: "Amazon Author Profile Optimization",
        description:
          "A profile that converts browsers into followers. Bio, imagery, series linking and follow prompts, all tuned for the algorithm and the human reading it.",
      },
      {
        name: "Amazon A+ Content Creation",
        description:
          "Rich modules that answer objections before they arise. A+ Content routinely lifts conversion on the page you already worked hard to earn traffic to.",
      },
      {
        name: "Goodreads Ads Setup & Management",
        description:
          "Reach dedicated readers where reviews are born. Targeted campaigns, giveaway strategy and review-velocity planning for your launch window.",
      },
    ],
  },
  {
    id: "social-community",
    title: "Social & Community",
    blurb: "Readers gather. We make sure your book is in the room.",
    services: [
      {
        name: "BookTok Content Management",
        description:
          "A month-by-month content engine of hooks, trends and edits made for your genre. We script, produce and publish so you can keep writing.",
      },
      {
        name: "Social Media Management",
        description:
          "Facebook, Instagram and Threads handled end to end — calendar, creative, captions and community replies in your authentic author voice.",
      },
      {
        name: "Meta Ads Setup & Management",
        description:
          "Cold-to-warm funnels that turn scrolling into sample downloads and sales. Creative testing, audience building and weekly performance reporting.",
      },
    ],
  },
  {
    id: "author-platform",
    title: "Author Platform",
    blurb: "The asset you own, for every book you'll ever write.",
    services: [
      {
        name: "Author Website Design",
        description:
          "From a focused launch landing page to a full author website with book catalogue, blog and newsletter capture. Fast, elegant and unmistakably yours.",
      },
      {
        name: "Email Marketing Setup & Management",
        description:
          "Lead magnet, welcome sequence, launch sequence and ongoing broadcasts. Your list is the one channel no platform can take away from you.",
      },
      {
        name: "Book Coaching & Mentorship",
        description:
          "One-to-one sessions on positioning, launch planning and long-term career strategy. Clarity from someone who has done it alongside dozens of authors.",
      },
    ],
  },
  {
    id: "promotion-campaigns",
    title: "Promotion Campaigns",
    blurb: "Sustained visibility, not a one-day spike.",
    services: [
      {
        name: "Organic Promotion (7, 14, 30 days)",
        description:
          "Daily placement across reader communities, newsletters and niche groups. Steady, compounding exposure that keeps your ranking climbing.",
      },
      {
        name: "Sales Funnel Generation",
        description:
          "A complete path from first impression to purchase to review request. Every step measured, every drop-off addressed.",
      },
      {
        name: "Amazon Campaign Management",
        description:
          "Full-service launch and evergreen campaign management across ads, pricing strategy, category placement and review generation.",
      },
    ],
  },
];

export const ALL_SERVICE_NAMES = SERVICE_CATEGORIES.flatMap((c) => c.services.map((s) => s.name));

export const TESTIMONIALS = [
  {
    quote:
      "I had written what I believed was a good book and sold eleven copies in four months. Mia's team rebuilt the cover, the blurb and the ad structure. Ninety days later I was in the top 100 of my category.",
    name: "Elena Marsh",
    role: "Author, The Salt Harbour",
    rating: 5,
  },
  {
    quote:
      "What struck me was how much they cared about the story itself. The BookTok campaign felt like it came from a reader, not an agency. My series pre-orders tripled.",
    name: "Daniel Okonkwo",
    role: "Author, Ash & Iron series",
    rating: 5,
  },
  {
    quote:
      "As an indie publisher I have worked with four agencies. All Author Collective is the only one that sent honest reporting, including the weeks that underperformed. That is why I stayed.",
    name: "Priya Raghavan",
    role: "Founder, Lantern Press",
    rating: 5,
  },
  {
    quote:
      "I was invisible. Not a bad writer — invisible. They gave my book a face and a voice and suddenly readers were emailing me about my characters.",
    name: "Harriet Coles",
    role: "Author, Every Quiet Thing",
    rating: 5,
  },
];

export const CASE_STUDIES = [
  {
    author: "Elena Marsh",
    book: "The Salt Harbour",
    genre: "Literary Fiction",
    challenge:
      "A beautifully written debut with an amateur cover, no keyword strategy and eleven lifetime sales in four months.",
    solution:
      "Full cover rebuild against genre benchmarks, rewritten blurb and A+ Content, plus a structured KDP ads launch across 42 tested keywords.",
    results: [
      { before: "11 copies", after: "2,400 copies", metric: "Sales in 90 days" },
      { before: "#412,000", after: "#84", metric: "Category rank" },
      { before: "3 reviews", after: "168 reviews", metric: "Verified reviews" },
    ],
    quote:
      "They treated my book like it mattered before it had any proof that it did. That changed everything.",
  },
  {
    author: "Daniel Okonkwo",
    book: "Ash & Iron",
    genre: "Epic Fantasy",
    challenge:
      "Strong book one, no audience carry-over into book two, and a launch date eight weeks away with no runway.",
    solution:
      "A 30-day BookTok content engine, cinematic trailer, series-linked Amazon profile and a pre-order email sequence to a rebuilt list.",
    results: [
      { before: "190 subs", after: "4,100 subs", metric: "Email list" },
      { before: "62", after: "1,880", metric: "Pre-orders" },
      { before: "0", after: "1.9M", metric: "BookTok views" },
    ],
    quote: "The trailer alone sold more copies than my entire first launch.",
  },
  {
    author: "Priya Raghavan",
    book: "Lantern Press catalogue",
    genre: "Indie Publisher — 9 titles",
    challenge:
      "A promising catalogue with inconsistent branding across titles and ad spend that had never been profitable.",
    solution:
      "Unified visual system across all nine titles, restructured Meta and Amazon campaigns, and a shared reader funnel feeding the whole imprint.",
    results: [
      { before: "142% ACOS", after: "31% ACOS", metric: "Ad efficiency" },
      { before: "$3.1k", after: "$27.4k", metric: "Monthly revenue" },
      { before: "1 title", after: "6 titles", metric: "Bestseller badges" },
    ],
    quote: "Honest reporting, real strategy, and a team that understands publishing — not just ads.",
  },
  {
    author: "Harriet Coles",
    book: "Every Quiet Thing",
    genre: "Contemporary Romance",
    challenge:
      "Loyal but tiny readership, no author platform, and no way to reach readers between releases.",
    solution:
      "Author website, lead magnet novella, welcome and launch sequences, plus a 14-day organic promotion campaign at release.",
    results: [
      { before: "0", after: "9,300", metric: "Newsletter readers" },
      { before: "18%", after: "54%", metric: "Open rate" },
      { before: "$0", after: "$11.2k", metric: "Launch week revenue" },
    ],
    quote: "I finally own my audience. That is worth more than any single launch.",
  },
];

export const PACKAGES = [
  {
    name: "Essential",
    price: "From $450",
    summary: "For first-time authors preparing a confident debut.",
    features: [
      "Ebook cover design",
      "Book mockup set",
      "Amazon listing & keyword optimisation",
      "Author profile setup",
      "7-day organic promotion",
      "Launch checklist & guidance call",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "From $1,200",
    summary: "For authors ready to run a real, measurable launch.",
    features: [
      "Everything in Essential",
      "Book video trailer",
      "Amazon A+ Content",
      "KDP ads setup & 60-day management",
      "BookTok content (12 pieces)",
      "Email list setup & launch sequence",
      "14-day organic promotion",
      "Bi-weekly performance reporting",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "From $2,900",
    summary: "For serial authors and indie publishers building a catalogue.",
    features: [
      "Everything in Pro",
      "Full author website",
      "Meta & Goodreads ad management",
      "Complete sales funnel build",
      "30-day organic promotion",
      "Ongoing social media management",
      "Monthly coaching & strategy sessions",
      "Dedicated account lead",
    ],
    featured: false,
  },
];

export const POSTS = [
  {
    title: "How to Launch Your Book on Amazon KDP",
    excerpt:
      "The 21-day launch runway we use with every client — from keyword research to review velocity — written as a step-by-step plan you can run yourself.",
    tag: "Amazon",
    date: "Coming soon",
  },
  {
    title: "5 BookTok Strategies That Actually Work",
    excerpt:
      "Most author BookTok fails for the same three reasons. Here is what we film instead, and the hook formulas that consistently pass 100k views.",
    tag: "Social",
    date: "Coming soon",
  },
  {
    title: "Why Your Cover Is Costing You Sales",
    excerpt:
      "A cover is not art, it is a promise about genre. Learn to read the shelf the way a browsing reader does — in under two seconds.",
    tag: "Branding",
    date: "Coming soon",
  },
  {
    title: "Building an Email List Before You Publish",
    excerpt:
      "The lead magnet, the sequence and the cadence that turn strangers into launch-day buyers, even when your first book is not finished yet.",
    tag: "Platform",
    date: "Coming soon",
  },
];
