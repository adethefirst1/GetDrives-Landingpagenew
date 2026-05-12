import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { useDocumentTitle } from "../useDocumentTitle";
import { trackEvent } from "../lib/analytics";
import { inView, useAccessibleMotion } from "../motionPresets";
import {
  formatPostDate,
  getPostBySlug,
  getAllPosts,
} from "../data/blogPosts";

const MotionLink = motion(Link);

export default function BlogPostPage() {
  const { slug } = useParams();
  const m = useAccessibleMotion();
  const post = slug ? getPostBySlug(slug) : null;

  const related = useMemo(() => {
    if (!post) return [];
    return getAllPosts()
      .filter((p) => p.slug !== post.slug)
      .slice(0, 3);
  }, [post]);

  useDocumentTitle(post ? `${post.title} | GetDrives Newsroom` : "Newsroom");

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <main id="main-content">
        <article>
          <header className="relative overflow-hidden border-b border-white/[0.06] py-14 md:py-20 lg:py-24">
            <div
              className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 -translate-y-2/3 rounded-full bg-brand-orange/[0.07] blur-[110px]"
              aria-hidden
            />
            <div className="mx-auto max-w-7xl px-6">
              <motion.div {...m.heroTextBlock}>
                <MotionLink
                  to="/blog"
                  className="inline-flex text-[10px] font-bold uppercase tracking-[0.28em] text-brand-orange transition-colors hover:text-white"
                  {...m.buttonHoverProps}
                  onClick={() =>
                    trackEvent("nav_click", { label: "NEWSROOM_BACK" })
                  }
                >
                  ← Newsroom
                </MotionLink>
                <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-orange">
                  {post.category}
                </p>
                <h1 className="mt-4 max-w-4xl font-extrabold uppercase leading-[0.97] tracking-tighter text-[clamp(1.85rem,5vw,3.25rem)] text-white">
                  {post.title}
                </h1>
                <p className="mt-8 max-w-3xl text-base leading-relaxed text-brand-gray">
                  {post.excerpt}
                </p>
                <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
                  <span>{formatPostDate(post.date)}</span>
                  <span className="text-white/25" aria-hidden>
                    ·
                  </span>
                  <span>{post.readTimeMin} min read</span>
                </p>
              </motion.div>
            </div>
          </header>

          <motion.div
            className="mx-auto max-w-3xl px-6 py-12 md:py-16 lg:py-20"
            initial={m.splitText.initial}
            whileInView={m.splitText.whileInView}
            viewport={inView}
            transition={m.splitText.transition}
          >
            <div className="space-y-6 border-l border-white/[0.08] pl-6 md:space-y-7 md:pl-8">
              {post.body.map((paragraph, i) => (
                <p
                  key={`${post.slug}-${i}`}
                  className="text-base leading-relaxed text-brand-gray md:text-[1.0625rem] md:leading-[1.7]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {related.length > 0 && (
            <section className="border-t border-white/[0.06] bg-black/30 py-14 md:py-20">
              <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <h2 className="font-extrabold uppercase leading-none tracking-tighter text-xl text-white md:text-2xl">
                    Continue<span className="text-brand-orange"> exploring</span>
                  </h2>
                  <Link
                    to="/blog"
                    className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-orange hover:text-white"
                  >
                    VIEW ALL →
                  </Link>
                </div>
                <motion.div
                  className="mt-10 grid gap-8 sm:grid-cols-3"
                  initial="hidden"
                  whileInView="show"
                  viewport={inView}
                  variants={m.cardListVariants}
                >
                  {related.map((p) => (
                    <motion.article
                      key={p.slug}
                      className="flex flex-col border border-white/[0.06] bg-white/[0.02] p-5 backdrop-blur-sm transition-all duration-300 hover:border-brand-orange/45 hover:shadow-glow-orange"
                      variants={m.cardItemVariants}
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                        {p.category}
                      </p>
                      <h3 className="mt-5 font-bold uppercase leading-snug tracking-tight text-white">
                        {p.title}
                      </h3>
                      <MotionLink
                        to={`/blog/${p.slug}`}
                        className="mt-auto inline-flex pt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-brand-orange"
                        {...m.buttonHoverProps}
                        onClick={() =>
                          trackEvent("newsroom_article_open", {
                            slug: p.slug,
                            placement: "related",
                          })
                        }
                      >
                        OPEN →
                      </MotionLink>
                    </motion.article>
                  ))}
                </motion.div>
              </div>
            </section>
          )}
        </article>

        <CTASection variant="services" />
      </main>
      <Footer variant="home" />
    </div>
  );
}
