import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { trackEvent } from "../lib/analytics";
import { inView, useAccessibleMotion } from "../motionPresets";

const MotionLink = motion(Link);

function IconCity({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
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

function IconBriefcase({ className }) {
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

const cards = [
  {
    title: "Ride anywhere with ease",
    desc: "Book rides, set your fare, and move without stress.",
    support:
      "Perfect for daily trips, work, or getting around town.",
    Icon: IconCity,
  },
  {
    title: "Send items quickly and safely",
    desc: "Deliver packages across town without the usual delays.",
    support: "From documents to everyday items, we've got you covered.",
    Icon: IconBox,
  },
  {
    title: "Earn by driving on your terms",
    desc: "Accept trips, work when you want, and earn at your pace.",
    support: "No fixed schedule, no pressure.",
    Icon: IconBriefcase,
  },
];

export default function ServicesOverview() {
  const m = useAccessibleMotion();

  return (
    <section id="browse-services" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end md:gap-12">
          <div className="min-w-0">
            <h2 className="font-extrabold uppercase leading-[0.95] tracking-tighter text-white text-[clamp(2rem,5vw,3.5rem)]">
              <span className="block">ONE APP.</span>
              <span className="block">EVERY JOURNEY.</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-brand-gray/80">
              Built for everyday movement across Nigeria.
            </p>
          </div>
          <MotionLink
            to="/services"
            className="w-full shrink-0 self-start text-center text-sm font-bold uppercase tracking-wide text-white hover:text-brand-orange md:w-auto md:self-auto md:text-left"
            {...m.buttonHoverProps}
            onClick={() => trackEvent("nav_click", { label: "SERVICES" })}
          >
            VIEW SERVICES →
          </MotionLink>
        </div>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 sm:gap-10 md:gap-12 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={m.cardListVariants}
        >
          {cards.map(({ title, desc, support, Icon }) => (
            <motion.article
              key={title}
              className="border border-white/[0.06] bg-white/[0.01] p-6 backdrop-blur-sm transition-all duration-300 hover:border-brand-orange/50 hover:bg-white/[0.02] hover:shadow-glow-orange"
              variants={m.cardItemVariants}
            >
              <Icon className="h-8 w-8 text-white" />
              <h3 className="mt-6 font-bold uppercase tracking-tight text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-gray">{desc}</p>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray/80">
                {support}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
