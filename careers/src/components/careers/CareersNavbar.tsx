import Link from "next/link";

const mainSite =
  process.env.NEXT_PUBLIC_MAIN_SITE_URL ?? "https://getdrives.com";

export function CareersNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0B0B]/65 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href={mainSite}
          className="text-lg font-extrabold uppercase tracking-tight text-white transition-colors hover:text-brand-orange"
        >
          GetDrives
        </Link>
        <nav
          className="flex items-center gap-8 text-[11px] font-semibold tracking-[0.2em]"
          aria-label="Careers"
        >
          <a href="#culture" className="hidden text-white/90 transition-colors hover:text-brand-orange sm:inline">
            CULTURE
          </a>
          <a href="#roles" className="hidden text-white/90 transition-colors hover:text-brand-orange sm:inline">
            ROLES
          </a>
          <a
            href="#apply"
            className="rounded-md bg-brand-orange px-5 py-3 text-white transition-opacity hover:opacity-95"
          >
            APPLY
          </a>
        </nav>
      </div>
    </header>
  );
}
