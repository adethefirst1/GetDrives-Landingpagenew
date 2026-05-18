import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PATH_DOWNLOAD, PATH_DRIVE_WITH_US } from "../ctaCopy";
import { trackEvent } from "../lib/analytics";
import { useAccessibleMotion } from "../motionPresets";

const MotionLink = motion(Link);

export default function CTASection({ variant = "services" }) {
  const m = useAccessibleMotion();

  if (variant === "about") {
    return (
      <motion.section
        className="border-y-[10px] border-black bg-[#FF5500] py-12 md:border-y-[12px] md:py-16"
        {...m.ctaSection}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-stretch justify-between gap-8 px-6 lg:flex-row lg:items-center lg:gap-12">
          <h2 className="max-w-3xl text-left font-extrabold uppercase leading-[0.9] tracking-tighter">
            <span className="block text-[clamp(2.25rem,6vw,4rem)] text-white">
              JOIN THE
            </span>
            <span className="block text-[clamp(2.75rem,7vw,5rem)] leading-[0.95] text-white/55">
              MOVEMENT
            </span>
          </h2>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-end lg:w-auto lg:shrink-0 lg:gap-3">
            <MotionLink
              to={PATH_DOWNLOAD}
              className="inline-flex min-h-[48px] items-center justify-center rounded-none bg-white px-6 py-3.5 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#FF5500] hover:opacity-95"
              {...m.buttonHoverProps}
              onClick={() => trackEvent("cta_download_click")}
            >
              DOWNLOAD THE APP
            </MotionLink>
            <MotionLink
              to={PATH_DRIVE_WITH_US}
              className="inline-flex min-h-[48px] items-center justify-center rounded-none bg-[#B23B00] px-6 py-3.5 text-center text-xs font-bold uppercase tracking-[0.2em] text-white hover:opacity-95"
              {...m.buttonHoverProps}
              onClick={() => trackEvent("cta_drive_click")}
            >
              DRIVE WITH US
            </MotionLink>
          </div>
        </div>
      </motion.section>
    );
  }

  if (variant === "driver") {
    return (
      <motion.section
        className="bg-[#FF5500] py-14 md:py-20 lg:py-24"
        {...m.ctaSection}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-10 px-6 sm:px-8 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-12 xl:gap-20">
          <h2 className="max-w-xl text-left font-extrabold uppercase tracking-tighter text-[clamp(2.25rem,6vw,4rem)] leading-[0.82] lg:max-w-2xl">
            <span className="block text-white">APPLY TODAY.</span>
            <span className="block text-[#FF9E7D]">TAKE 5 MINUTES.</span>
          </h2>
          <div className="flex w-full flex-col gap-3.5 sm:flex-row sm:justify-end sm:gap-4 lg:w-auto lg:shrink-0">
            <MotionLink
              to={`${PATH_DRIVE_WITH_US}#driver-steps`}
              className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-none bg-white px-8 py-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#FF5500] hover:opacity-95 sm:flex-initial sm:min-w-[12rem] md:px-10"
              {...m.buttonHoverProps}
              onClick={() => trackEvent("cta_drive_click")}
            >
              APPLY TO DRIVE NOW
            </MotionLink>
            <motion.a
              href="mailto:hello@getdrives.com"
              className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-none bg-[#B33C00] px-8 py-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-white hover:opacity-95 sm:flex-initial sm:min-w-[12rem] md:px-10"
              {...m.buttonHoverProps}
            >
              CONTACT SUPPORT
            </motion.a>
          </div>
        </div>
      </motion.section>
    );
  }

  if (variant === "landing") {
    return (
      <motion.section
        className="border-y border-black bg-brand-orange py-12 md:py-16"
        {...m.ctaSection}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-stretch justify-between gap-8 px-6 lg:flex-row lg:items-center lg:gap-12">
          <h2 className="max-w-xl text-left font-extrabold uppercase leading-[0.9] tracking-tighter text-[clamp(2.25rem,6vw,4rem)]">
            <span className="block text-white">READY TO</span>
            <span className="block text-white/65">RIDE SMARTER?</span>
          </h2>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-end lg:w-auto lg:shrink-0 lg:gap-3">
            <MotionLink
              to={PATH_DOWNLOAD}
              className="inline-flex min-h-[48px] items-center justify-center rounded-none bg-white px-6 py-3.5 text-center text-xs font-bold uppercase tracking-[0.2em] text-brand-orange hover:opacity-95"
              {...m.buttonHoverProps}
              onClick={() => trackEvent("cta_download_click")}
            >
              DOWNLOAD THE APP
            </MotionLink>
            <MotionLink
              to={PATH_DRIVE_WITH_US}
              className="inline-flex min-h-[48px] items-center justify-center rounded-none bg-[#B23B00] px-6 py-3.5 text-center text-xs font-bold uppercase tracking-[0.2em] text-white hover:opacity-95"
              {...m.buttonHoverProps}
              onClick={() => trackEvent("cta_drive_click")}
            >
              DRIVE WITH GETDRIVES
            </MotionLink>
          </div>
        </div>
      </motion.section>
    );
  }

  if (variant === "faq") {
    return (
      <motion.section className="bg-brand-orange py-14 md:py-20 lg:py-24" {...m.ctaSection}>
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-10 px-6 sm:px-8 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-12 xl:gap-20">
          <div className="max-w-xl text-left lg:max-w-2xl">
            <h2 className="font-extrabold uppercase tracking-tighter text-[clamp(2.25rem,6vw,4rem)] leading-[0.82]">
              <span className="block text-white">STILL HAVE</span>
              <span className="block text-white/65">QUESTIONS?</span>
            </h2>
            <p className="mt-4 text-sm font-medium text-white/90 md:text-base">
              Our support team is ready to help you anytime.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-end lg:w-auto lg:shrink-0 lg:gap-3">
            <motion.a
              href="mailto:hello@getdrives.com"
              className="inline-flex min-h-[48px] items-center justify-center rounded-none bg-white px-6 py-3.5 text-center text-xs font-bold uppercase tracking-[0.2em] text-brand-orange hover:opacity-95"
              {...m.buttonHoverProps}
            >
              CONTACT SUPPORT
            </motion.a>
            <MotionLink
              to={PATH_DRIVE_WITH_US}
              className="inline-flex min-h-[48px] items-center justify-center rounded-none bg-[#B23B00] px-6 py-3.5 text-center text-xs font-bold uppercase tracking-[0.2em] text-white hover:opacity-95"
              {...m.buttonHoverProps}
            >
              BECOME A DRIVER
            </MotionLink>
          </div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section className="bg-brand-orange py-12 md:py-16" {...m.ctaSection}>
      <div className="mx-auto flex max-w-7xl flex-col items-stretch justify-between gap-8 px-6 lg:flex-row lg:items-center lg:gap-12">
        <h2 className="max-w-xl text-left font-extrabold uppercase leading-[0.9] tracking-tighter text-[clamp(2.25rem,6vw,4rem)]">
          <span className="block text-white">READY TO.</span>
          <span className="block text-white/65">MOVE SMARTER?</span>
        </h2>
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-end lg:w-auto lg:shrink-0 lg:gap-3">
          <MotionLink
            to={PATH_DOWNLOAD}
            className="inline-flex min-h-[48px] items-center justify-center rounded-none bg-white px-6 py-3.5 text-center text-xs font-bold uppercase tracking-[0.2em] text-brand-orange hover:opacity-95"
            {...m.buttonHoverProps}
            onClick={() => trackEvent("cta_download_click")}
          >
            GET THE APP
          </MotionLink>
          <MotionLink
            to="/about#contact"
            className="inline-flex min-h-[48px] items-center justify-center rounded-none border border-white bg-transparent px-6 py-3.5 text-center text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white/10"
            {...m.buttonHoverProps}
            onClick={() => trackEvent("nav_click", { label: "CONTACT" })}
          >
            TALK TO US
          </MotionLink>
        </div>
      </div>
    </motion.section>
  );
}
