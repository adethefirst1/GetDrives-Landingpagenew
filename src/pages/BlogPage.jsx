import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { DOCUMENT_TITLES, useDocumentTitle } from "../useDocumentTitle";
import { trackEvent } from "../lib/analytics";
import { inView, useAccessibleMotion } from "../motionPresets";
import {
  BLOG_CATEGORIES,
  formatPostDate,
  getAllPosts,
  getFeaturedPost,
} from "../data/blogPosts";

const MotionLink = motion(Link);

export default function BlogPage() {
  useDocumentTitle(DOCUMENT_TITLES.blog);
  const m = useAccessibleMotion();
  const [category, setCategory] = useState("All");

  const featured = getFeaturedPost();
  const filtered = useMemo(() => {
    const rest = getAllPosts().filter((p) => p.slug !== featured.slug);
    if (category === "All") return rest;
    return rest.filter((p) => p.category === category);
  }, [category, featured.slug]);

  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <main id="main-content">
        <section className="relative overflow-hidden py-16 md:py-24 lg:py-28">
          <div
            className="pointer-events-none absolute right-0 top-0 -z-10 h-[560px] w-[min(90vw,640px)] translate-x-1/4 -translate-y-1/3 rounded-full bg-brand-orange/[0.07] blur-[120px]"
            aria-hidden
          />
          <div className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-[380px] w-[480px] rounded-full bg-brand-orange/[0.04] blur-[100px]" aria-hidden />

          <div className="mx-auto max-w-7xl px-6">
            <motion.div {...m.heroTextBlock}>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-brand-orange" aria-hidden />
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-orange">
                  Newsroom
                </p>
              </div>
              <h1 className="max-w-5xl font-extrabold uppercase leading-[0.95] tracking-tighter text-[clamp(2.5rem,8vw,5.5rem)]">
                <span className="block text-white">The future of mobility,</span>
                <span className="block text-brand-orange">explained clearly.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-brand-gray">
                Product milestones, operational learnings, and market context from
                the team building peer-to-peer movement across Nigeria—and beyond.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] bg-black/40 pb-16 md:pb-24">
          <div className="mx-auto max-w-7xl px-6 pt-14 md:pt-20">
            <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,340px)] lg:items-start lg:gap-14 xl:gap-20">
              <motion.article
                className="group relative overflow-hidden border border-white/[0.08] bg-gradient-to-br from-white/[0.04] via-brand-bg to-brand-orange/[0.06] p-8 backdrop-blur-sm transition-all duration-300 hover:border-brand-orange/45 hover:shadow-glow-orange md:p-10 lg:p-12"
                initial={m.splitText.initial}
                whileInView={m.splitText.whileInView}
                viewport={inView}
                transition={m.splitText.transition}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 top-12 h-64 w-64 rounded-full bg-brand-orange/[0.12] blur-3xl transition-opacity duration-500 group-hover:opacity-90"
                />
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-orange">
                  Featured insight
                </p>
                <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                  {featured.category}
                </p>
                <h2 className="mt-3 font-extrabold uppercase leading-[1.05] tracking-tighter text-[clamp(1.65rem,3.8vw,2.75rem)] text-white">
                  {featured.title}
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-brand-gray md:text-base">
                  {featured.excerpt}
                </p>
                <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
                  <span>{formatPostDate(featured.date)}</span>
                  <span className="text-white/25" aria-hidden>
                    ·
                  </span>
                  <span>{featured.readTimeMin} min read</span>
                </p>
                <MotionLink
                  to={`/blog/${featured.slug}`}
                  className="mt-10 inline-flex min-h-[48px] items-center justify-center rounded-md bg-brand-orange px-6 py-3.5 text-center text-xs font-bold uppercase tracking-[0.2em] text-white transition-shadow hover:shadow-glow-orange"
                  {...m.buttonHoverProps}
                  onClick={() =>
                    trackEvent("newsroom_article_open", {
                      slug: featured.slug,
                      placement: "featured",
                    })
                  }
                >
                  READ STORY →
                </MotionLink>
              </motion.article>

              <motion.aside
                className="border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm md:p-8"
                initial={m.splitImageRight.initial}
                whileInView={m.splitImageRight.whileInView}
                viewport={inView}
                transition={m.splitImageRight.transition}
              >
                <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                  Signals
                </h3>
                <ul className="mt-8 space-y-6 text-sm leading-relaxed text-brand-gray">
                  <li className="border-l-2 border-brand-orange/70 pl-4">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-white/85">
                          Operator notes
                        </span>
                        <span className="mt-2 block">
                          Density-first expansion, transparent earnings, and
                          verification loops that compound trust.
                        </span>
                  </li>
                  <li className="border-l border-white/15 pl-4">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-white/85">
                          For readers
                        </span>
                        <span className="mt-2 block">
                          Quarterly updates complement these essays—follow GetDrives
                          on LinkedIn for launch cadence.
                        </span>
                  </li>
                  <li className="border-l border-white/15 pl-4">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-white/85">
                          Press
                        </span>
                        <span className="mt-2 block">
                          Reach the team anytime at{" "}
                          <a
                            href="mailto:hello@getdrives.com"
                            className="text-white underline-offset-4 transition-colors hover:text-brand-orange hover:underline"
                          >
                            hello@getdrives.com
                          </a>
                          .
                        </span>
                  </li>
                </ul>
              </motion.aside>
            </div>

            <div className="mt-16 md:mt-24">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="font-extrabold uppercase leading-[0.95] tracking-tighter text-white text-[clamp(1.5rem,3.5vw,2.25rem)]">
                    <span className="block">Latest</span>
                    <span className="block text-brand-orange">analysis</span>
                  </h2>
                  <p className="mt-3 max-w-lg text-sm text-brand-gray">
                    Filters apply to editorial below—the featured spotlight stays pinned
                    for context.
                  </p>
                </div>
              </div>

              <div
                className="mt-8 flex flex-wrap gap-2"
                role="toolbar"
                aria-label="Filter by topic"
              >
                {BLOG_CATEGORIES.map((cat) => {
                  const active = category === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      className={`rounded-none border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg ${
                        active
                          ? "border-brand-orange text-brand-orange"
                          : "border-[#555555] text-white hover:border-brand-orange/50 hover:text-white"
                      }`}
                      aria-pressed={active}
                      onClick={() => {
                        setCategory(cat);
                        trackEvent("newsroom_filter", { category: cat });
                      }}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              <motion.div
                className="mt-10 grid gap-8 sm:grid-cols-2 lg:gap-10 xl:grid-cols-3"
                initial="hidden"
                whileInView="show"
                viewport={inView}
                variants={m.cardListVariants}
              >
                {filtered.map((post) => (
                  <motion.article
                    key={post.slug}
                    className="flex flex-col border border-white/[0.06] bg-white/[0.01] p-6 backdrop-blur-sm transition-all duration-300 hover:border-brand-orange/50 hover:bg-white/[0.02] hover:shadow-glow-orange md:p-7"
                    variants={m.cardItemVariants}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                        {post.category}
                      </p>
                      <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/35">
                        {post.readTimeMin} min
                      </span>
                    </div>
                    <h3 className="mt-6 flex-grow font-bold uppercase leading-snug tracking-tight text-white">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                      {post.excerpt}
                    </p>
                    <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
                      {formatPostDate(post.date)}
                    </p>
                    <MotionLink
                      to={`/blog/${post.slug}`}
                      className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-white/20 bg-transparent py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-white/5 hover:shadow-glow-white md:w-auto md:justify-start md:border-0 md:bg-transparent md:py-0 md:hover:bg-transparent md:hover:shadow-none"
                      {...m.buttonHoverProps}
                      onClick={() =>
                        trackEvent("newsroom_article_open", {
                          slug: post.slug,
                          placement: "grid",
                        })
                      }
                    >
                      READ →
                    </MotionLink>
                  </motion.article>
                ))}
              </motion.div>

              {filtered.length === 0 && (
                <p className="mt-12 text-center text-sm text-brand-gray">
                  Nothing in this topic yet—try another filter or revisit the featured
                  story above.
                </p>
              )}
            </div>
          </div>
        </section>

        <CTASection variant="services" />
      </main>
      <Footer variant="home" />
    </div>
  );
}
