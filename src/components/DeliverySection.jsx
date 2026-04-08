import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PATH_DOWNLOAD } from "../ctaCopy";
import { trackEvent } from "../lib/analytics";
import TagRow from "./TagRow";
import { useAccessibleMotion } from "../motionPresets";

const MotionLink = motion(Link);

const deliveryTags = [
  "SAME-DAY",
  "SCHEDULED PICKUP",
  "BULK SHIPMENT",
  "LIVE TRACKING",
];

export default function DeliverySection() {
  const m = useAccessibleMotion();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid min-w-0 max-w-7xl items-stretch gap-0 px-6 md:px-8 lg:grid-cols-2">
        <motion.div
          className="flex flex-col justify-center space-y-6 bg-black px-6 py-10 md:px-8 md:py-14 lg:px-12 lg:py-16 xl:px-16"
          {...m.splitText}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
            02 · LOGISTICS & DELIVERY
          </p>
          <h2 className="font-extrabold uppercase leading-[0.95] tracking-tighter text-[clamp(1.75rem,4vw,2.75rem)] text-white">
            <span className="block">SEND IT.</span>
            <span className="block">TRACK IT.</span>
            <span className="block">DONE.</span>
          </h2>
          <p className="w-full max-w-xl text-base leading-relaxed text-brand-gray">
            Door-to-door same-day delivery. Set your price, watch it move in real
            time, and get confirmation the moment it arrives.
          </p>
          <TagRow tags={deliveryTags} />
          <MotionLink
            to={PATH_DOWNLOAD}
            className="mt-2 inline-flex w-full max-w-md items-center justify-center rounded-none bg-brand-orange px-6 py-3.5 text-center text-sm font-bold uppercase tracking-[0.2em] text-white"
            {...m.buttonHoverProps}
            onClick={() => trackEvent("cta_download_click")}
          >
            SEND A PACKAGE
          </MotionLink>
        </motion.div>

        <motion.div
          className="relative flex min-h-[240px] items-center justify-center lg:min-h-[420px]"
          {...m.splitImageRight}
        >
          <img
            src="/delivery-flow-story.png"
            alt="Send a package, track delivery on your phone, and receive at the door"
            className="h-auto w-full max-w-[520px] object-contain px-4 py-4 lg:max-w-none"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  );
}
