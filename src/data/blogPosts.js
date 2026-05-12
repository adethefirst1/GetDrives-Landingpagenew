/** Editorial content for Newsroom — static placeholders, swap for CMS later */

export const BLOG_CATEGORIES = [
  "All",
  "Company",
  "Product",
  "Drivers",
  "Markets",
  "Partners",
];

const posts = [
  {
    slug: "scaling-verified-driver-network-across-african-cities",
    title: "How we scale verified driver coverage without compromising trust",
    excerpt:
      "Verification, onboarding, and in-trip safety signals are the backbone of peer pricing. Here's how GetDrives keeps quality high while cities expand.",
    category: "Company",
    date: "2026-03-18",
    readTimeMin: 6,
    featured: true,
    body: [
      "Peer pricing only works when both sides trust the platform. That's why verification isn't a checklist — it's an operating loop.",
      "We pair document checks with continuous signals: completion quality, rider feedback patterns, and platform policy adherence. The goal isn't perfection on day one; it's predictable improvement city by city.",
      "As we open new corridors, we scale with local partners and calibrated density targets — enough supply for fast pickup times, without sacrificing the rider experience.",
    ],
  },
  {
    slug: "what-peer-pricing-means-for-everyday-riders",
    title: "What peer pricing means for everyday riders (in plain English)",
    excerpt:
      "No surge gymnastics. Riders propose fair fares and drivers decide when it makes sense. Here's how negotiation stays fast, respectful, and mobile-first.",
    category: "Product",
    date: "2026-02-06",
    readTimeMin: 4,
    body: [
      "Traditional surge models optimize for scarcity. Peer pricing optimizes for alignment — riders and drivers meet in the middle faster when both sides share context.",
      "The app keeps the negotiation lightweight: propose, counter, confirm. Riders always see transparent driver responses, so there's no ambiguity at pickup.",
      "Behind the scenes, we guide fair ranges using distance, traffic conditions, and local patterns — premium mobility without premium confusion.",
    ],
  },
  {
    slug: "driver-earnings-calculator-behind-scenes",
    title: "How driver earnings transparency became a core product pillar",
    excerpt:
      "Predictable payouts and clear trip economics help drivers treat GetDrives like real infrastructure — not a black box tied to hourly promotions.",
    category: "Drivers",
    date: "2026-01-22",
    readTimeMin: 5,
    body: [
      "Drivers shouldn't need a spreadsheet to understand a trip's value. We've invested in payout clarity upfront: fares, deductions, and net earnings before accept.",
      "Transparency isn't just UI — it's incentive design. When drivers trust the ledger, utilization improves without aggressive discounting.",
      "We're iterating with driver councils in Lagos and Abuja so the roadmap reflects how people actually earn, not how pricing models look on a whiteboard.",
    ],
  },
  {
    slug: "getdrives-b2b-mobility-pilots",
    title: "GetDrives for Business: why we're piloting managed mobility stacks",
    excerpt:
      "Enterprises still move people and parcels through fragmented workflows. Early B2B pilots focus on invoicing reliability, SLA reporting, and driver quality.",
    category: "Partners",
    date: "2025-12-09",
    readTimeMin: 7,
    body: [
      "Corporate fleets and last-mile hubs need the same cleanliness as premium consumer apps — with controls that Finance and Ops can defend.",
      "Our pilots prioritize predictable billing, escalation paths when trips deviate, and analytics that quantify time saved versus admin overhead.",
      "If you're evaluating transportation partners in African cities, start with uptime and dispute resolution speed — cosmetics can't cover operational gaps.",
    ],
  },
  {
    slug: "intercity-rollout-city-by-city-lessons",
    title: "Intercity expansion: density, corridors, and the art of phased rollout",
    excerpt:
      "Opening a new corridor isn't a billboard moment — it's a logistics decision. Geography, choke points, and driver home bases drive go-live sequencing.",
    category: "Markets",
    date: "2025-11-02",
    readTimeMin: 6,
    body: [
      "We optimize for sustainable repeat trips, not headline coverage maps. Density beats sprawl.",
      "Phased rollout pairs marketing with grounded operations: onboarding squads on the ground, route validation, and early rider subsidies only where liquidity needs a nudge.",
      "Lesson learned everywhere: localize support playbooks early. Great product marketing can't replace clear incident handling during week one liquidity formation.",
    ],
  },
  {
    slug: "weekly-ops-pulse-reliability-metrics",
    title: "Reliability metrics we watch every week (and why riders feel them first)",
    excerpt:
      "Pickup success rate, ETA drift, and payout dispute volume tell us more than vanity downloads. A quick look at operating cadence.",
    category: "Company",
    date: "2025-09-30",
    readTimeMin: 3,
    body: [
      "We run a tight weekly review: cities, teams, and finance in the same room discussing levers, not vanity billboards.",
      "Riders experience reliability before they read a press release — if wait times wobble, cohort retention shows it within days.",
      "Internal north star: predictable trips at honest prices. Everything else is narration.",
    ],
  },
  {
    slug: "mobility-ai-without-bs",
    title: "Practical automation in mobility — without vaporware hype",
    excerpt:
      "Dispatch suggestions, ETA smoothing, and risk scoring can quietly improve throughput. Here's how we prioritize AI roadmap items investor decks skip.",
    category: "Product",
    date: "2025-10-17",
    readTimeMin: 5,
    body: [
      "Mobility startups don't need GPT-powered ride haikus. They need systems that shorten wait times and reduce cancellations.",
      "We're selective: models that degrade gracefully, respect privacy, and show measurable uplift in cohort metrics — retention, ETA accuracy, payout disputes.",
      "Anything that obscures fares or hides driver economics is offline by default. Transparency remains the product wedge.",
    ],
  },
];

export function getFeaturedPost() {
  return posts.find((p) => p.featured) ?? posts[0];
}

export function getAllPosts() {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) ?? null;
}

export function formatPostDate(isoDate) {
  return new Date(isoDate).toLocaleDateString("en-NG", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
