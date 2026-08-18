import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { DOCUMENT_TITLES, useDocumentTitle } from "../useDocumentTitle";

const FAQ_DATA = [
  {
    category: "General",
    questions: [
      {
        id: "gen-1",
        q: "How do I book a ride?",
        a: "Booking a ride is simple. Open the GetDrives app, enter your destination in the 'Where to?' field, select your preferred ride type, and confirm your pickup location. You'll be matched with a nearby driver in seconds.",
      },
      {
        id: "gen-2",
        q: "Is GetDrives available in my city?",
        a: "GetDrives is currently available in major cities across Nigeria. We are constantly expanding, so check the app or our website for the most up-to-date list of active cities.",
      },
      {
        id: "gen-3",
        q: "What should I do if I lose an item?",
        a: "If you leave an item in a GetDrives vehicle, you can contact your driver directly through the app up to 24 hours after the trip. If you need further assistance, our support team is available 24/7.",
      },
    ],
  },
  {
    category: "Riders",
    questions: [
      {
        id: "rid-1",
        q: "How are fares calculated?",
        a: "Fares are calculated based on a base rate, time, and distance of your route. During times of high demand, dynamic pricing may apply to ensure reliable pickups. You'll always see an estimated fare before you confirm your request.",
      },
      {
        id: "rid-2",
        q: "Can I schedule rides in advance?",
        a: "Yes! GetDrives allows you to schedule rides up to 7 days in advance. Simply tap the calendar icon next to the 'Where to?' box and choose your preferred pickup date and time.",
      },
      {
        id: "rid-3",
        q: "How do I cancel a ride?",
        a: "You can cancel your ride request at any time before the driver arrives. Please note that a cancellation fee may apply if you cancel more than 3 minutes after a driver has accepted your request.",
      },
    ],
  },
  {
    category: "Drivers",
    questions: [
      {
        id: "drv-1",
        q: "How do I become a driver?",
        a: "Join the driver waitlist on our Drive With Us page. Tell us your city, vehicle, and when you could start. We'll reach out when GetDrives begins onboarding in your area. No app to download yet. Document checks happen when your city opens.",
      },
      {
        id: "drv-2",
        q: "How does driver verification work?",
        a: "Safety is our priority. Every GetDrives driver undergoes a comprehensive background check, identity verification, and vehicle inspection before they are approved to accept rides on the platform.",
      },
      {
        id: "drv-3",
        q: "How and when do I get paid?",
        a: "Drivers get paid weekly directly into their provided bank accounts. You can also use our Instant Pay feature to cash out your earnings up to 3 times a day for a small fee.",
      },
    ],
  },
  {
    category: "Payments",
    questions: [
      {
        id: "pay-1",
        q: "What payment methods are accepted?",
        a: "GetDrives accepts major credit and debit cards, secure mobile money wallets, and in some regions, cash payments. You can securely store your payment information within the app.",
      },
      {
        id: "pay-2",
        q: "Are there cancellation fees?",
        a: "Yes, to fairly compensate our drivers for their time, a small cancellation fee is charged if you cancel a trip after the driver has made significant progress toward your location.",
      },
    ],
  },
  {
    category: "Safety",
    questions: [
      {
        id: "saf-1",
        q: "What safety measures are in place?",
        a: "Our app includes safety features like an in-app emergency button, the ability to share your trip details with loved ones, 24/7 incident support, and GPS tracking for every ride.",
      },
      {
        id: "saf-2",
        q: "How do you vet your drivers?",
        a: "All drivers must pass rigorous background checks and submit valid documentation before they can join the platform. We also actively monitor driver ratings and feedback to ensure high safety standards.",
      },
    ],
  },
  {
    category: "Logistics & Deliveries",
    questions: [
      {
        id: "log-1",
        q: "How do I track my delivery?",
        a: "You can track your delivery in real-time through the GetDrives app. Once your item is picked up, you'll see the courier's location on the map and receive updates until it reaches its destination.",
      },
      {
        id: "log-2",
        q: "Can businesses use GetDrives for logistics?",
        a: "Absolutely. We offer a dedicated GetDrives for Business portal that allows companies to manage multiple deliveries, track expenses, and access priority support.",
      },
      {
        id: "log-3",
        q: "What are the size limits for deliveries?",
        a: "Delivery limits depend on the type of vehicle you select. Motorbikes are great for small parcels, while cars and vans can accommodate larger boxes. Detailed dimensions are provided in the app.",
      },
    ],
  },
];

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
              Everything you need to know about using GetDrives. Can't find the answer you're looking for? Reach out to our support team.
            </motion.p>
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
