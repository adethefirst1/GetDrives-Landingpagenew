import type { Applicant, Role } from "@prisma/client";
import type { ApplicationInput } from "@/lib/validations";
import { prisma } from "@/lib/prisma";

export type ApplicantWithRole = Applicant & { role: Role };

/** Persists application — called only after Zod validation & upload URL confirmed */
export async function createApplicant(
  input: ApplicationInput,
): Promise<ApplicantWithRole> {
  const applicant = await prisma.applicant.create({
    data: {
      fullName: input.fullName,
      email: input.email,
      phone: input.phone,
      location: input.location,
      roleId: input.roleId,
      linkedInUrl: input.linkedInUrl ?? null,
      portfolioUrl: input.portfolioUrl ?? null,
      yearsExperience: input.yearsExperience,
      workedWithStartups: input.workedWithStartups,
      campaignsDescription: input.campaignsDescription,
      whyGetDrives: input.whyGetDrives,
      cvUrl: input.cvUrl,
      introVideoUrl: input.introVideoUrl ?? null,
    },
    include: { role: true },
  });

  return applicant;
}

/** Lists roles for dropdowns and cards — excludes heavy logic */
export async function listRoles() {
  return prisma.role.findMany({
    orderBy: { title: "asc" },
  });
}
