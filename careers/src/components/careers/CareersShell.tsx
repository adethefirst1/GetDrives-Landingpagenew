"use client";

import { useState } from "react";

import { ApplicationForm } from "./ApplicationForm";
import { CareersFooter } from "./CareersFooter";
import { CareersHero } from "./CareersHero";
import { CareersNavbar } from "./CareersNavbar";
import { CultureSection } from "./CultureSection";
import type { RoleRow } from "./OpenRolesSection";
import { OpenRolesSection } from "./OpenRolesSection";

export function CareersShell({ roles }: { roles: RoleRow[] }) {
  const [preferredRoleId, setPreferredRoleId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-brand-bg">
      <CareersNavbar />
      <main id="main-content">
        <CareersHero />
        <CultureSection />
        <OpenRolesSection
          roles={roles}
          onApply={(id) => {
            setPreferredRoleId(id);
            document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <ApplicationForm roles={roles} preferredRoleId={preferredRoleId} />
      </main>
      <CareersFooter />
    </div>
  );
}
