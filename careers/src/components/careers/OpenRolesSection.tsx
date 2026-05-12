"use client";

import { motion } from "framer-motion";

import { ROLE_DETAILS, type RoleSlug } from "@/content/roles";
import { inView, useAccessibleMotion } from "@/lib/motion";

export type RoleRow = {
  id: string;
  slug: string;
  title: string;
  summary: string | null;
};

type Props = {
  roles: RoleRow[];
  onApply: (roleId: string) => void;
};

function detailFor(slug: string) {
  return slug in ROLE_DETAILS ? ROLE_DETAILS[slug as RoleSlug] : null;
}

export function OpenRolesSection({ roles, onApply }: Props) {
  const m = useAccessibleMotion();

  return (
    <section id="roles" className="scroll-mt-28 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...m.fadeUp}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-orange">
            Open roles
          </p>
          <h2 className="mt-4 font-extrabold uppercase leading-[0.95] tracking-tighter text-[clamp(1.75rem,4vw,3rem)] text-white">
            <span className="block">Two seats.</span>
            <span className="block text-brand-orange">High leverage.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-brand-gray md:text-base">
            We move fast and document faster. Expect crisp communication, weekly retros, and decisions anchored in field truth — not buzzwords.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10"
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={m.staggerContainer}
        >
          {roles.map((role) => {
            const detail = detailFor(role.slug);
            return (
              <motion.article
                key={role.id}
                variants={m.staggerItem}
                className="flex flex-col border border-white/[0.06] bg-white/[0.02] p-7 backdrop-blur-sm transition-all duration-300 hover:border-brand-orange/45 hover:shadow-glow-orange md:p-9"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-orange">
                  {role.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-brand-gray">
                  {detail?.description ?? role.summary ?? ""}
                </p>

                <div className="mt-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    Responsibilities
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-brand-gray">
                    {(detail?.responsibilities ?? []).map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-orange" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    Ideal profile
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-brand-gray">
                    {(detail?.idealCandidate ?? []).map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-6 text-xs leading-relaxed text-white/55">
                  <span className="font-semibold uppercase tracking-[0.15em] text-white/70">
                    Experience:{" "}
                  </span>
                  {detail?.experiencePreference ?? "See role fit above."}
                </p>

                <motion.button
                  type="button"
                  className="mt-10 inline-flex min-h-[48px] w-full items-center justify-center rounded-md bg-brand-orange px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white sm:w-auto"
                  {...m.buttonHover}
                  onClick={() => onApply(role.id)}
                >
                  APPLY FOR THIS ROLE →
                </motion.button>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
