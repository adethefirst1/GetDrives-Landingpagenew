import { motion } from "framer-motion";

/**
 * Lightweight full-viewport placeholder shown while lazy route chunks load.
 * Features a delayed fade-in to prevent flashing on fast networks.
 */
export default function RouteFallback() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center gap-4 bg-brand-bg"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="flex flex-col items-center gap-4"
      >
        <div
          className="h-9 w-9 animate-spin rounded-full border-2 border-white/15 border-t-brand-orange"
          aria-hidden
        />
        <span className="sr-only">Loading page</span>
      </motion.div>
    </div>
  );
}
