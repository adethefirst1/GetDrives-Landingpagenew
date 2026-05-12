"use client";

import { motion } from "framer-motion";

import { inView, useAccessibleMotion } from "@/lib/motion";

const pillars = [
  {
    title: "Mission you can defend",
    body: "Riders propose fares. Drivers keep earnings that stay honest. We exist to make everyday movement across Nigeria less fragile — one corridor at a time.",
  },
  {
    title: "Ownership over theatre",
    body: "Roadmaps are earned in weekly reviews, not slide decks. If you optimize for clarity over credit, you’ll fit.",
  },
  {
    title: "Execution beats rhetoric",
    body: "Launch cadence matters more than taglines. We bias toward shipping experiments with measurable pickup quality and payout transparency.",
  },
  {
    title: "Infrastructure mindset",
    body: "We’re not chasing vanity downloads — we’re building liquidity, trust, and ops playbooks that survive scale.",
  },
];

export function CultureSection() {
  const m = useAccessibleMotion();

  return (
    <section id="culture" className="border-y border-white/[0.06] bg-black/50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...m.fadeUp}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-orange">
            Culture
          </p>
          <h2 className="mt-4 max-w-4xl font-extrabold uppercase leading-[0.95] tracking-tighter text-[clamp(1.75rem,4vw,3rem)] text-white">
            <span className="block">Built for operators</span>
            <span className="block text-brand-orange">who finish.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-brand-gray">
            GetDrives runs lean: small senior pods, sharp rituals, and zero tolerance for ambiguity that slows riders or drivers down. If you thrive where accountability is real and feedback is fast, this is your lane.
          </p>
        </motion.div>

        <motion.ul
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:gap-10"
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={m.staggerContainer}
        >
          {pillars.map((p) => (
            <motion.li
              key={p.title}
              variants={m.staggerItem}
              className="border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-brand-orange/40 md:p-8"
            >
              <h3 className="font-bold uppercase tracking-tight text-white">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-brand-gray">{p.body}</p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          className="mt-12 max-w-3xl border-l-2 border-brand-orange pl-5 text-sm leading-relaxed text-white/75"
          {...m.fadeUp}
        >
          Growth here means owning outcomes — rider wait times, driver payouts, partner SLAs — not vanity impressions. We reward people who make the network healthier every sprint.
        </motion.p>
      </div>
    </section>
  );
}
