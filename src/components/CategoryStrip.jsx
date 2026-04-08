const simpleItems = [
  "CITY RIDES",
  "PREMIUM RIDES",
  "LOGISTICS & DELIVERY",
  "CORPORATE ACCOUNTS",
  "INTERCITY TRIPS",
  "NO SURGE PRICING",
  "SET YOUR FARE",
];

/** Drive page: auto-scrolling ticker; copy and colors match UI mock. */
const driveMarqueeItems = [
  "CITY RIDES",
  "PREMIUM RIDES",
  "LOGISTICS & DELIVERY",
  "CORPORATE ACCOUNTS",
  "INTERCITY TRIPS",
  "NO SURGE PRICING",
  "SET YOUR OWN PRICE",
];

const items = [
  { label: "CITY RIDES", Icon: IconCar },
  { label: "PREMIUM RIDES", Icon: IconCrown },
  { label: "DELIVERY SERVICES", Icon: IconBox },
  { label: "BUSINESS SOLUTIONS", Icon: IconBrief },
  { label: "COURIER SERVICES", Icon: IconTruck },
  { label: "24/7 SUPPORT", Icon: IconHeadset },
];

function IconCar({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 17h8M5 17h1a2 2 0 002-2V9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 002 2h1M5 17a2 2 0 100 4h14a2 2 0 100-4"
      />
    </svg>
  );
}

function IconCrown({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 3l2.5 7L12 6l4.5 4L19 3M5 21h14"
      />
    </svg>
  );
}

function IconBox({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
      />
    </svg>
  );
}

function IconBrief({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function IconTruck({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10h2m8 0h2m-8 0H4m9-4h6l4 4v2h-3"
      />
    </svg>
  );
}

function IconHeadset({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function MarqueeSegment({ label }) {
  return (
    <span className="inline-flex items-center gap-3 whitespace-nowrap">
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF5722]"
        aria-hidden
      />
      <span className="text-[10px] font-semibold uppercase leading-none tracking-[0.2em] text-[#666666] sm:text-[11px]">
        {label}
      </span>
    </span>
  );
}

export default function CategoryStrip({ variant = "icons" }) {
  if (variant === "marquee") {
    return (
      <section
        className="bg-black py-8 md:py-10"
        aria-label="Service highlights"
      >
        <div className="mx-auto hidden max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-6 motion-reduce:flex sm:gap-x-8 md:gap-x-10">
          {driveMarqueeItems.map((label) => (
            <MarqueeSegment key={label} label={label} />
          ))}
        </div>
        <div className="relative overflow-hidden motion-reduce:hidden">
          <div className="flex w-max motion-safe:animate-driver-marquee">
            {[0, 1].map((dup) => (
              <div
                key={dup}
                className="flex shrink-0 items-center gap-x-10 pr-10 sm:gap-x-12 sm:pr-12 md:gap-x-14 md:pr-14"
                aria-hidden={dup === 1}
              >
                {driveMarqueeItems.map((label) => (
                  <MarqueeSegment key={`${dup}-${label}`} label={label} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "simple") {
    return (
      <section
        className="border-b border-white/[0.06] bg-brand-bg py-8 md:py-12"
        aria-label="Service highlights"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2.5 sm:gap-x-5 md:gap-x-6">
            {simpleItems.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 whitespace-nowrap font-semibold uppercase leading-none tracking-[0.18em] text-brand-gray text-[10px] sm:text-[11px]"
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange"
                  aria-hidden
                />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-white/[0.06] bg-brand-bg py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 md:justify-between md:gap-x-6">
          {items.map(({ label, Icon }, i) => (
            <span
              key={label}
              className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white md:text-[11px]"
            >
              {i > 0 && (
                <span className="hidden text-brand-orange md:inline" aria-hidden>
                  ·
                </span>
              )}
              <Icon className="h-4 w-4 shrink-0 text-brand-orange" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
