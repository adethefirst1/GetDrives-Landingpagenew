import Link from "next/link";

const mainSite =
  process.env.NEXT_PUBLIC_MAIN_SITE_URL ?? "https://getdrives.com";

export function CareersFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-bg py-12 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-xs uppercase tracking-[0.2em] text-[#444444]">
          © {new Date().getFullYear()} GetDrives · Careers
        </p>
        <Link
          href={mainSite}
          className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange hover:text-white"
        >
          ← Back to GetDrives
        </Link>
      </div>
    </footer>
  );
}
