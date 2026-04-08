import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PATH_DOWNLOAD } from "../ctaCopy";
import { trackEvent } from "../lib/analytics";
import ResponsivePicture from "./ResponsivePicture";
import TagRow from "./TagRow";
import { useAccessibleMotion } from "../motionPresets";

const MotionLink = motion(Link);

const rideTags = [
  "STANDARD",
  "PLUS",
  "PREMIUM",
  "SHARED RIDES",
  "AIRPORT TRANSFERS APP",
];

export default function RideSection() {
  const m = useAccessibleMotion();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid min-w-0 max-w-7xl items-stretch gap-0 px-6 md:px-8 lg:grid-cols-2">
        <motion.div
          className="order-2 overflow-hidden lg:order-1"
          {...m.splitImageLeft}
        >
          <ResponsivePicture
            base="/ride-hero"
            ext="png"
            alt="Passenger entering a vehicle with pickup confirmed in the GetDrives app"
            responsive
            loading="lazy"
            decoding="async"
            sizes="(max-width: 1024px) 100vw, min(520px, 50vw)"
            className="h-full min-h-[240px] w-full object-cover object-center lg:min-h-[420px]"
          />
        </motion.div>

        <motion.div
          className="order-1 flex flex-col justify-center space-y-6 bg-black px-6 py-10 md:px-8 md:py-14 lg:order-2 lg:px-12 lg:py-16 xl:px-16"
          {...m.splitText}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
            01 · RIDE SERVICES
          </p>
          <h2 className="font-extrabold uppercase leading-[0.95] tracking-tighter text-[clamp(1.75rem,4vw,2.75rem)] text-white">
            <span className="block">Getting around shouldn&apos;t be</span>
            <span className="block text-brand-orange">stressful</span>
          </h2>
          <p className="w-full max-w-xl text-base leading-relaxed text-brand-gray">
            Choose your ride, set your fare, and move without the usual back and
            forth.
          </p>
          <p className="w-full max-w-xl text-sm leading-relaxed text-brand-gray/80">
            Simple, reliable, and built for everyday movement in Nigeria.
          </p>
          <TagRow tags={rideTags} />
          <MotionLink
            to={PATH_DOWNLOAD}
            className="mt-2 inline-flex w-full max-w-md items-center justify-center rounded-none bg-brand-orange px-6 py-3.5 text-center text-sm font-bold uppercase tracking-[0.2em] text-white"
            {...m.buttonHoverProps}
            onClick={() => trackEvent("cta_download_click")}
          >
            BOOK A RIDE
          </MotionLink>
          <p className="w-full max-w-xl text-sm leading-relaxed text-brand-gray/80">
            Takes less than a minute to get started.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
