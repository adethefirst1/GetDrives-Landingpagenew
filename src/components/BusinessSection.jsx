import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TagRow from "./TagRow";
import { useAccessibleMotion } from "../motionPresets";

const MotionLink = motion(Link);

const businessTags = [
  "CORPORATE ACCOUNTS",
  "TEAM TRAVEL",
  "MONTHLY INVOICING",
  "USAGE REPORT",
];

export default function BusinessSection() {
  const m = useAccessibleMotion();

  return (
    <section id="business" className="py-16 md:py-24">
      <div className="mx-auto grid min-w-0 max-w-7xl items-stretch gap-0 px-6 md:px-8 lg:grid-cols-2">
        <motion.div
          className="order-2 flex min-h-[240px] items-center justify-center overflow-hidden bg-brand-bg lg:order-1 lg:min-h-[420px]"
          {...m.splitImageLeft}
        >
          <img
            src="/business-flow-story.png"
            alt="Travel with the app, track spending and reports, and align your team"
            className="h-auto w-full max-w-[520px] object-contain px-4 py-8 lg:max-w-none"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        <motion.div
          className="order-1 flex flex-col justify-center space-y-6 bg-black px-6 py-10 md:px-8 md:py-14 lg:order-2 lg:px-12 lg:py-16 xl:px-16"
          {...m.splitText}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
            03 · BUSINESS SOLUTIONS
          </p>
          <h2 className="font-extrabold uppercase leading-[0.95] tracking-tighter text-[clamp(1.75rem,4vw,2.75rem)] text-white">
            <span className="block">MANAGE TRAVEL.</span>
            <span className="block">CONTROL COST.</span>
            <span className="block">SCALE TEAMS.</span>
          </h2>
          <p className="w-full max-w-xl text-base leading-relaxed text-brand-gray">
            Corporate accounts with centralised billing, usage reports, and a
            dedicated account manager. Built for the Nigerian business
            environment.
          </p>
          <TagRow tags={businessTags} />
          <MotionLink
            to="/about#contact"
            className="mt-2 inline-flex w-full max-w-md items-center justify-center rounded-none bg-brand-orange px-6 py-3.5 text-center text-sm font-bold uppercase tracking-[0.2em] text-white"
            {...m.buttonHoverProps}
          >
            SET UP BUSINESS ACCOUNT
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
}
