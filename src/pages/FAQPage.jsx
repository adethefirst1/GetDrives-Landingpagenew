import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { DOCUMENT_TITLES, useDocumentTitle } from "../useDocumentTitle";
import { FAQ_DATA } from "../data/faqContent";

function FAQAccordion({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-white md:text-lg">
          {question}
        </span>
        <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-brand-orange transition-transform duration-300">
          <motion.svg
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-10 text-sm leading-relaxed text-[#AAAAAA] md:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  useDocumentTitle(DOCUMENT_TITLES.faq);

  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState(null);

  // Filter categories and questions based on search query
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return FAQ_DATA;

    const query = searchQuery.toLowerCase();
    return FAQ_DATA.map((category) => {
      const filteredQuestions = category.questions.filter(
        (q) => q.q.toLowerCase().includes(query) || q.a.toLowerCase().includes(query)
      );
      return { ...category, questions: filteredQuestions };
    }).filter((category) => category.questions.length > 0);
  }, [searchQuery]);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative px-6 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold uppercase leading-[0.9] tracking-tighter text-white"
            >
              FREQUENTLY ASKED
              <span className="block text-brand-orange">QUESTIONS</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mt-6 max-w-2xl text-base font-normal leading-relaxed text-[#AAAAAA] md:text-lg"
            >
              Practical answers for riders and drivers. Full rules live in our{" "}
              <Link to="/terms" className="text-brand-orange hover:underline">
                Rider Terms
              </Link>
              ,{" "}
              <Link to="/cancellation" className="text-brand-orange hover:underline">
                Cancellation Policy
              </Link>
              , and{" "}
              <Link to="/privacy" className="text-brand-orange hover:underline">
                Privacy Policy
              </Link>
              . Can&apos;t find what you need? Contact support in the app or at{" "}
              <a href="mailto:riders@getdrives.com" className="text-brand-orange hover:underline">
                riders@getdrives.com
              </a>
              .
            </motion.p>
            <p className="mx-auto mt-3 max-w-2xl text-xs text-[#666666]">
              Effective October 1, 2026 · Version 1.0
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="px-6 pb-12">
          <div className="mx-auto max-w-2xl">
            <div className="relative flex items-center">
              <svg
                className="absolute left-4 h-5 w-5 text-[#666666]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-[#1A1A1A] py-4 pl-12 pr-4 text-white placeholder-[#666666] outline-none transition-colors focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
              />
            </div>
          </div>
        </section>

        {/* FAQ Categories & Questions */}
        <section className="px-6 pb-24 md:pb-32">
          <div className="mx-auto max-w-3xl">
            {filteredData.length === 0 ? (
              <div className="py-12 text-center text-[#AAAAAA]">
                <p>No results found for "{searchQuery}".</p>
                <p className="mt-2 text-sm">Please try a different search term or check our categories.</p>
              </div>
            ) : (
              <div className="space-y-16">
                {filteredData.map((categorySection) => (
                  <motion.div
                    key={categorySection.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="mb-6 text-xl font-bold uppercase tracking-widest text-brand-orange">
                      {categorySection.category}
                    </h2>
                    <div className="flex flex-col">
                      {categorySection.questions.map((q) => (
                        <FAQAccordion
                          key={q.id}
                          question={q.q}
                          answer={q.a}
                          isOpen={openId === q.id}
                          onClick={() => handleToggle(q.id)}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <CTASection variant="faq" />
      </main>
      <Footer variant="home" />
    </div>
  );
}
