import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PATH_DRIVE_WITH_US } from "../ctaCopy";
import { trackEvent } from "../lib/analytics";
import ResponsivePicture from "./ResponsivePicture";
import { useAccessibleMotion } from "../motionPresets";

const MotionLink = motion(Link);

const tags = [
  "LOW COMMISSION",
  "FLEXIBLE HOURS",
  "INSTANT PAYOUTS",
  "24/7 SUPPORT",
];

export default function DriverFeature() {
  const m = useAccessibleMotion();

  return (
    <section id="drivers" className="py-16 md:py-24">
      <div className="mx-auto grid min-w-0 max-w-7xl items-center gap-8 px-6 md:gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div className="space-y-6" {...m.splitText}>
          <h2 className="font-extrabold uppercase leading-[0.95] tracking-tighter text-white text-[clamp(1.75rem,4vw,2.75rem)]">
            <span className="block">Earn on your own</span>
            <span className="block text-brand-orange">terms.</span>
          </h2>
          <p className="w-full max-w-[90%] text-base leading-relaxed sm:max-w-xl text-brand-gray">
            Drive when it suits you and earn without pressure. Simple, flexible, and
            built around you.
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-sm border border-gray-700 px-3 py-1.5 text-[11px] font-medium uppercase text-white"
              >
                {t}
              </span>
            ))}
          </div>
          <MotionLink
            to={PATH_DRIVE_WITH_US}
            className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-brand-orange px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white hover:opacity-95 md:w-auto md:max-w-sm"
            {...m.buttonHoverProps}
            onClick={() => trackEvent("cta_drive_click")}
          >
            START DRIVING
          </MotionLink>
          <p className="w-full max-w-[90%] text-sm leading-relaxed text-brand-gray/80 sm:max-w-xl">
            No complicated setup. Get started quickly, wherever you are.
          </p>
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-xl lg:max-w-none lg:w-[min(100%,520px)] lg:translate-x-4 xl:translate-x-8"
          {...m.splitImageRight}
        >
          <ResponsivePicture
            base="/homepage-woman"
            ext="png"
            alt="Passenger smiling by the car window in golden light"
            responsive
            loading="lazy"
            decoding="async"
            sizes="(max-width: 1024px) 100vw, min(520px, 50vw)"
            className="aspect-[4/3] w-full object-cover object-center md:aspect-[5/4]"
          />
        </motion.div>
      </div>
    </section>
  );
}
