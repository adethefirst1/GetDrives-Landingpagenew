import React from "react";
import * as Sentry from "@sentry/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function FallbackComponent({ error, componentStack, resetError }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0B] text-white">
      <Navbar />
      <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-500/10 border border-red-500/20 text-red-500">
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
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Something went wrong
          </h1>
          <p className="text-lg text-white/60 mb-10 leading-relaxed">
            An unexpected error occurred. Our team has been notified. 
            Please try refreshing the page or returning home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={resetError}
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors w-full sm:w-auto"
            >
              Try Again
            </button>
            <a
              href="/"
              className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full hover:bg-white/10 transition-colors border border-white/10 w-full sm:w-auto"
            >
              Return Home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function ErrorBoundary({ children }) {
  return (
    <Sentry.ErrorBoundary fallback={FallbackComponent}>
      {children}
    </Sentry.ErrorBoundary>
  );
}
