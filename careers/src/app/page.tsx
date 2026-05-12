import { CareersShell } from "@/components/careers/CareersShell";
import type { RoleRow } from "@/components/careers/OpenRolesSection";
import { listRoles } from "@/services/applicant.service";

/** Careers listing is loaded from Postgres — never prerender without DB */
export const dynamic = "force-dynamic";

export default async function CareersPage() {
  const rolesRaw = await listRoles();
  const roles: RoleRow[] = rolesRaw.map((r) => ({
    id: r.id,
    slug: r.slug,
    title: r.title,
    summary: r.summary,
  }));

  return <CareersShell roles={roles} />;
}
