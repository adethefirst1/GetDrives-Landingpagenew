"use client";

import { motion } from "framer-motion";

import { useAccessibleMotion } from "@/lib/motion";

export function CareersHero() {
  const m = useAccessibleMotion();

  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[560px] w-[900px] -translate-x-1/2 -translate-y-[45%] rounded-full bg-brand-orange/[0.09] blur-[110px]"
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-[320px] w-[420px] rounded-full bg-brand-orange/[0.05] blur-[90px]" aria-hidden />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...m.heroBlock}>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-brand-orange" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-orange">
              Careers · Lagos-first, Nigeria-wide
            </p>
          </div>
          <h1 className="font-extrabold uppercase leading-[0.95] tracking-tighter text-[clamp(2.25rem,7vw,4.25rem)] text-white">
            <span className="block">Ship density.</span>
            <span className="block text-brand-orange">Own the rollout.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-brand-gray md:text-lg">
            GetDrives is peer-to-peer mobility built for Nigerian streets — transparent pricing,
            verified drivers, operations that survive rush hour. We&apos;re hiring operators who
            treat cities like products and launches like marathons.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <motion.a
              href="#roles"
              className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-brand-orange px-8 py-3.5 text-center text-xs font-bold uppercase tracking-[0.2em] text-white shadow-glow-orange transition hover:opacity-95"
              {...m.buttonHover}
            >
              VIEW OPEN ROLES →
            </motion.a>
            <motion.a
              href="#culture"
              className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-white/25 bg-transparent px-8 py-3.5 text-center text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/5 hover:shadow-glow-white"
              {...m.buttonHover}
            >
              WHY GETDRIVES
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
