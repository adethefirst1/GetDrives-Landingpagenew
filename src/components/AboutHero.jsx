import { motion } from "framer-motion";
import { useAccessibleMotion } from "../motionPresets";

export default function AboutHero() {
  const m = useAccessibleMotion();

  return (
    <section className="bg-black py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 text-left md:px-8 lg:px-12">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
          ABOUT GETDRIVES
        </p>
        <h1 className="max-w-5xl font-extrabold uppercase leading-[0.95] tracking-tighter text-[clamp(2.5rem,8vw,5.5rem)]">
          <span className="block text-white">BUILT FOR</span>
          <span className="block text-brand-orange">AFRICAN CITIES.</span>
        </h1>
        <p className="mt-8 w-full max-w-2xl text-base leading-relaxed text-[#999999] md:max-w-[min(42rem,50%)]">
          GetDrives was born from a simple frustration: getting around Nigerian
          cities was harder than it needed to be. We set out to build a platform
          where riders set fair prices and drivers keep fair earnings, one trip
          at a time.
        </p>
        <motion.a
          href="#contact"
          className="mt-10 inline-flex items-center justify-center rounded-none bg-brand-orange px-5 py-2.5 text-center text-xs font-bold uppercase tracking-[0.2em] text-white hover:opacity-95"
          {...m.buttonHoverProps}
        >
          GET IN TOUCH
        </motion.a>
      </div>
    </section>
  );
}
