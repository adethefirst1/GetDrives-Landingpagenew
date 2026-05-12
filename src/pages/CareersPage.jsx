import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { DOCUMENT_TITLES, useDocumentTitle } from "../useDocumentTitle";
import { trackEvent } from "../lib/analytics";
import { inView, useAccessibleMotion } from "../motionPresets";
import { CAREERS_PILLARS, CAREERS_ROLES } from "../data/careersContent";

const CONTACT_EMAIL = "hello@getdrives.com";

export default function CareersPage() {
  useDocumentTitle(DOCUMENT_TITLES.careers);
  const m = useAccessibleMotion();
  const [selectedRoleTitle, setSelectedRoleTitle] = useState(null);

  const mailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    selectedRoleTitle
      ? `Careers application: ${selectedRoleTitle}`
      : "Careers inquiry: GetDrives",
  )}`;

  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <main id="main-content">
        <section className="relative overflow-hidden py-16 md:py-24 lg:py-28">
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[560px] w-[900px] -translate-x-1/2 -translate-y-[45%] rounded-full bg-brand-orange/[0.09] blur-[110px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-[320px] w-[420px] rounded-full bg-brand-orange/[0.05] blur-[90px]"
            aria-hidden
          />

          <div className="mx-auto max-w-7xl px-6">
            <motion.div {...m.heroTextBlock}>
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
                GetDrives is peer-to-peer mobility built for Nigerian streets with transparent pricing,
                verified drivers, and operations that survive rush hour. We&apos;re hiring operators who
                treat cities like products and launches like marathons.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <motion.a
                  href="#roles"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-brand-orange px-8 py-3.5 text-center text-xs font-bold uppercase tracking-[0.2em] text-white shadow-glow-orange transition hover:opacity-95"
                  {...m.buttonHoverProps}
                  onClick={() => trackEvent("nav_click", { label: "CAREERS_OPEN_ROLES" })}
                >
                  VIEW OPEN ROLES →
                </motion.a>
                <motion.a
                  href="#culture"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-white/25 bg-transparent px-8 py-3.5 text-center text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/5 hover:shadow-glow-white"
                  {...m.buttonHoverProps}
                >
                  WHY GETDRIVES
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="culture" className="scroll-mt-28 border-y border-white/[0.06] bg-black/50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div {...m.splitText}>
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
              variants={m.cardListVariants}
            >
              {CAREERS_PILLARS.map((p) => (
                <motion.li
                  key={p.title}
                  variants={m.cardItemVariants}
                  className="border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-brand-orange/40 md:p-8"
                >
                  <h3 className="font-bold uppercase tracking-tight text-white">{p.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-brand-gray">{p.body}</p>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              className="mt-12 max-w-3xl border-l-2 border-brand-orange pl-5 text-sm leading-relaxed text-white/75"
              {...m.splitText}
            >
              Growth here means owning outcomes like rider wait times, driver payouts, and partner SLAs, not vanity impressions. We reward people who make the network healthier every sprint.
            </motion.p>
          </div>
        </section>

        <section id="roles" className="scroll-mt-28 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div {...m.splitText}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-orange">
                Open roles
              </p>
              <h2 className="mt-4 font-extrabold uppercase leading-[0.95] tracking-tighter text-[clamp(1.75rem,4vw,3rem)] text-white">
                <span className="block">Two seats.</span>
                <span className="block text-brand-orange">High leverage.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-brand-gray md:text-base">
                We move fast and document faster. Expect crisp communication, weekly retros, and decisions anchored in field truth, not buzzwords.
              </p>
            </motion.div>

            <motion.div
              className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10"
              initial="hidden"
              whileInView="show"
              viewport={inView}
              variants={m.cardListVariants}
            >
              {CAREERS_ROLES.map((role) => (
                <motion.article
                  key={role.id}
                  variants={m.cardItemVariants}
                  className="flex flex-col border border-white/[0.06] bg-white/[0.02] p-7 backdrop-blur-sm transition-all duration-300 hover:border-brand-orange/45 hover:shadow-glow-orange md:p-9"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-orange">
                    {role.title}
                  </p>
                  <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-brand-gray">{role.description}</p>

                  <div className="mt-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                      Responsibilities
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-brand-gray">
                      {role.responsibilities.map((item) => (
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
                      {role.idealCandidate.map((item) => (
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
                    {role.experiencePreference}
                  </p>

                  <motion.button
                    type="button"
                    className="mt-10 inline-flex min-h-[48px] w-full items-center justify-center rounded-md bg-brand-orange px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white sm:w-auto"
                    {...m.buttonHoverProps}
                    onClick={() => {
                      setSelectedRoleTitle(role.title);
                      trackEvent("careers_apply_click", { role: role.id });
                      document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    APPLY FOR THIS ROLE →
                  </motion.button>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="apply" className="scroll-mt-28 border-t border-white/[0.06] bg-black/40 py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6 text-left">
            <motion.div {...m.splitText}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-orange">
                Apply
              </p>
              <h2 className="mt-4 font-extrabold uppercase leading-[0.95] tracking-tighter text-[clamp(1.65rem,3.6vw,2.5rem)] text-white">
                Tell us how you ship.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-gray md:text-base">
                Send your CV, portfolio links, and a short note on relevant launches or campaigns to{" "}
                <span className="text-white">{CONTACT_EMAIL}</span>
                {selectedRoleTitle ? (
                  <>
                    {" "}
                    (We&apos;ve prefilled the role you selected:{" "}
                    <span className="text-brand-orange">{selectedRoleTitle}</span>
                    ).
                  </>
                ) : (
                  ". Mention which role you&apos;re pursuing in the subject line."
                )}
              </p>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
              {...m.splitText}
            >
              <motion.a
                href={mailHref}
                className="inline-flex min-h-[52px] items-center justify-center rounded-md bg-brand-orange px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:opacity-95"
                {...m.buttonHoverProps}
                onClick={() => trackEvent("careers_email_click", { role: selectedRoleTitle ?? "general" })}
              >
                OPEN EMAIL DRAFT →
              </motion.a>
              <button
                type="button"
                className="inline-flex min-h-[52px] items-center justify-center rounded-md border border-white/20 bg-transparent px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/5"
                onClick={() => setSelectedRoleTitle(null)}
              >
                Clear role selection
              </button>
            </motion.div>
          </div>
        </section>

        <CTASection variant="services" />
      </main>
      <Footer variant="home" />
    </div>
  );
}
