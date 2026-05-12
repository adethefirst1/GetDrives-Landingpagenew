/** Rich copy for open roles — keyed to Prisma `Role.slug` after seeding */

export type RoleSlug = "growth-launch-manager" | "social-content-lead";

export type RoleDetail = {
  slug: RoleSlug;
  description: string;
  responsibilities: string[];
  idealCandidate: string[];
  experiencePreference: string;
};

export const ROLE_DETAILS: Record<RoleSlug, RoleDetail> = {
  "growth-launch-manager": {
    slug: "growth-launch-manager",
    description:
      "We're looking for a Growth / Launch Manager to help coordinate GetDrives' transition from development stage into active market rollout, visibility, and user growth. This role is heavily execution-focused. We need someone who understands how to build traction, coordinate campaigns, drive adoption, and help position GetDrives within the Nigerian mobility and logistics market.",
    responsibilities: [
      "Coordinate launch planning and rollout activities",
      "Develop and execute rider and driver acquisition strategies",
      "Identify and coordinate strategic partnerships and collaborations",
      "Assist with market penetration and growth campaigns",
      "Coordinate community, campus, and local activations where necessary",
      "Help structure referral, onboarding, and engagement initiatives",
      "Track campaign performance, growth metrics, and user traction",
      "Work closely with product, operations, and content teams",
      "Assist in building repeatable growth systems and processes",
      "Ensure execution timelines and launch objectives are properly managed",
    ],
    idealCandidate: [
      "Strong understanding of the Nigerian market and digital landscape",
      "Startup or early-stage company experience preferred",
      "Strong execution and coordination ability",
      "Able to think strategically while handling day-to-day execution",
      "Comfortable working in fast-moving environments",
      "Strong communication and organizational skills",
      "Results-driven and growth-oriented mindset",
    ],
    experiencePreference:
      "2–5+ years in growth, operations, marketing, expansion, startup operations, or launch-related roles. Experience in mobility, logistics, fintech, marketplaces, or consumer tech is a strong advantage.",
  },
  "social-content-lead": {
    slug: "social-content-lead",
    description:
      "You’ll translate GetDrives into stories people share—sharp visuals, credible tone, and campaigns that feel native to how Nigeria moves online.",
    responsibilities: [
      "Social strategy aligned with launch milestones",
      "Content creation across formats",
      "Storytelling that clarifies product truth",
      "Community building and moderation cadence",
      "Campaign execution with measurable CTAs",
      "Brand voice documentation and guardrails",
    ],
    idealCandidate: [
      "Reads internet culture fluently—without chasing gimmicks",
      "Understands Nigerian audience nuance across cities",
      "Portfolio that demonstrates craft and range",
      "Creative thinker grounded in shipping deadlines",
      "Startup branding experience or adjacent agency work",
    ],
    experiencePreference: "3+ years in social, content, or brand roles; portfolio required.",
  },
};
