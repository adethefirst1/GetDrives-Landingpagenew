import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAccessibleMotion } from "../motionPresets";

export default function NotFoundPage() {
  const m = useAccessibleMotion();
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0B] text-white">
      <Navbar />
      <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-6">
        <motion.div
          initial={m.heroTextBlock.initial}
          animate={m.heroTextBlock.animate}
          transition={m.heroTextBlock.transition}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 border border-white/10 text-white/50">
            <svg
              className="w-12 h-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Page Not Found
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-10 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on the right path.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors w-full sm:w-auto"
            >
              Return Home
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full hover:bg-white/10 transition-colors border border-white/10 w-full sm:w-auto"
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
