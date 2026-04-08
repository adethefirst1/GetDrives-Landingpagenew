import { motion } from "framer-motion";
import { inView, useAccessibleMotion } from "../motionPresets";

const iconClass =
  "h-10 w-10 shrink-0 text-white [shape-rendering:geometricPrecision]";

function IconAlarmClock({ className = iconClass }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle
        cx="12"
        cy="14"
        r="7"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 11v3.5l2.5 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 3L5.5 1.5M17 3l1.5-1.5M9 2h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMoneyBag({ className = iconClass }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 3c-1.5 0-3 .8-3 2.2V7h6V5.2C15 3.8 13.5 3 12 3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M6 7h12v2c0 4.5-2.5 8-6 8s-6-3.5-6-8V7z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 9.2v3.6M10.1 11h3.8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconShield({ className = iconClass }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 21s8-4 8-10V5l-8-3-8 3v6c0 6 8 10 8 10z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSmartphoneApps({ className = iconClass }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="6"
        y="2"
        width="12"
        height="20"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M9 18h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="8.5" y="5" width="2.5" height="2.5" rx="0.4" stroke="currentColor" strokeWidth="1.2" />
      <rect x="12" y="5" width="2.5" height="2.5" rx="0.4" stroke="currentColor" strokeWidth="1.2" />
      <rect x="8.5" y="8.5" width="2.5" height="2.5" rx="0.4" stroke="currentColor" strokeWidth="1.2" />
      <rect x="12" y="8.5" width="2.5" height="2.5" rx="0.4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function IconGift({ className = iconClass }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 9h16v3H4V9zM12 9V21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 9c0-2 1.5-4 4-4s4 2 4 4M8 9c0 2 1.5 4 4 4s4-2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12h16v10H4V12z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconHandshake({ className = iconClass }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M11 14l-2-2a2 2 0 00-2.8 0h-.1a2 2 0 000 2.8l3 3a2 2 0 002.8 0L18 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 11l2-2a2 2 0 012.8 0h.1a2 2 0 010 2.8l-3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10V8a2 2 0 012-2h1M16 10V8a2 2 0 00-2-2h-1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const benefits = [
  {
    title: "FLEXIBLE HOURS",
    body: "Drive whenever suits you, full-time, part-time, mornings or nights. No minimum hours, no scheduling pressure.",
    Icon: IconAlarmClock,
  },
  {
    title: "FAIR EARNINGS",
    body: "Nigeria's lowest commission rates. See exactly what you'll earn before accepting every single trip, with no surprises.",
    Icon: IconMoneyBag,
  },
  {
    title: "FULL INSURANCE",
    body: "Every trip covered by comprehensive insurance. You and your passenger are protected on every journey.",
    Icon: IconShield,
  },
  {
    title: "SMART DRIVER APP",
    body: "Navigation, earnings tracker, and 24/7 support, all in one intuitive driver interface built for Nigerian roads.",
    Icon: IconSmartphoneApps,
  },
  {
    title: "BONUSES & REWARDS",
    body: "Peak-hour bonuses, trip milestone rewards, and a performance program that actually pays out consistently.",
    Icon: IconGift,
  },
  {
    title: "REAL SUPPORT",
    body: "Human support agents available around the clock. When something goes wrong, a real person is there to fix it.",
    Icon: IconHandshake,
  },
];

export default function BenefitsSection() {
  const m = useAccessibleMotion();

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <p className="text-left text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
          WHY DRIVE WITH US
        </p>
        <h2 className="mt-4 text-left font-extrabold uppercase leading-[0.95] tracking-tighter text-[clamp(1.75rem,4vw,2.75rem)] text-white">
          <span className="block">EVERYTHING YOU NEED</span>
          <span className="block">TO SUCCEED.</span>
        </h2>

        <motion.div
          className="mt-10 md:mt-14"
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={m.cardListVariants}
        >
          <div className="grid grid-cols-1 gap-px bg-[#333333] sm:grid-cols-2">
            {benefits.map(({ title, body, Icon }) => (
              <motion.article
                key={title}
                className="flex min-h-0 flex-col bg-black px-8 py-10 text-left md:px-10 md:py-12"
                variants={m.cardItemVariants}
              >
                <Icon />
                <h3 className="mt-6 font-bold uppercase leading-snug tracking-wide text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-[#BBBBBB]">
                  {body}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
