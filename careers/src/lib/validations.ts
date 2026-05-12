import { z } from "zod";

const optionalHttpUrl = z
  .string()
  .trim()
  .transform((s) => (s === "" ? undefined : s))
  .pipe(z.string().url().optional());

export const YEARS_OPTIONS = [
  { value: "0-1", label: "0–1 years" },
  { value: "2-3", label: "2–3 years" },
  { value: "4-6", label: "4–6 years" },
  { value: "7-10", label: "7–10 years" },
  { value: "10+", label: "10+ years" },
] as const;

export const STARTUP_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "prefer_not", label: "Prefer not to say" },
] as const;

const YEARS = ["0-1", "2-3", "4-6", "7-10", "10+"] as const;
const STARTUP = ["yes", "no", "prefer_not"] as const;

export const applicationSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name"),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().min(8, "Enter a reachable phone number"),
  location: z.string().trim().min(2, "Where are you based?"),
  roleId: z.string().min(1, "Choose a role"),
  linkedInUrl: optionalHttpUrl,
  portfolioUrl: optionalHttpUrl,
  yearsExperience: z
    .string()
    .refine((v) => (YEARS as readonly string[]).includes(v), "Select your experience range"),
  workedWithStartups: z
    .string()
    .refine((v) => (STARTUP as readonly string[]).includes(v), "Please answer this question"),
  campaignsDescription: z
    .string()
    .trim()
    .min(40, "Share more detail (at least ~40 characters)"),
  whyGetDrives: z.string().trim().min(40, "Tell us more (at least ~40 characters)"),
  cvUrl: z.string().url("Upload your CV"),
  introVideoUrl: optionalHttpUrl,
});

export type ApplicationInput = z.infer<typeof applicationSchema>;
