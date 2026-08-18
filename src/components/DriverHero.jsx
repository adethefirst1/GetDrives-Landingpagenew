import { motion } from "framer-motion";
import DriverWaitlistForm from "./DriverWaitlistForm";
import { useAccessibleMotion } from "../motionPresets";

const promises = [
  {
    title: "No fee to join",
    body: "Free waitlist. You only start driving when we launch in your city.",
  },
  {
    title: "We'll reach out",
    body: "When your city opens, we contact the number you give us. Nothing to download yet.",
  },
  {
    title: "Priority at launch",
    body: "Early names get first access to onboarding when GetDrives goes live nearby.",
  },
];

const strip = [
  { main: "1 MIN", label: "TO JOIN" },
  { main: "₦0", label: "TO SIGN UP" },
  { main: "REACH OUT", label: "WHEN WE LAUNCH" },
];

function PromiseList({ className = "" }) {
  return (
    <ul className={className}>
      {promises.map((item) => (
        <li key={item.title} className="flex gap-4">
          <span
            className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange"
            aria-hidden
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              {item.title}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-[#888888]">{item.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function DriverHero() {
  const m = useAccessibleMotion();

  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-24">
      <div
        className="pointer-events-none absolute left-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-brand-orange/[0.14] blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[-8%] bottom-[-24%] h-[420px] w-[420px] rounded-full bg-brand-orange/[0.08] blur-[110px]"
        aria-hidden
      />

      <div className="relative mx-auto min-w-0 max-w-7xl px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_minmax(0,32rem)]">
          <motion.div className="order-1" {...m.heroTextBlock}>
            <div className="mb-6 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-orange" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-orange">
                Driver waitlist · Early access
              </p>
            </div>

            <h1 className="font-extrabold uppercase leading-[0.92] tracking-tighter text-[clamp(2.35rem,7vw,4.5rem)]">
              <span className="block text-white">Be first</span>
              <span className="block text-white">to drive.</span>
              <span className="block text-brand-orange">Earn on your terms.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-[#BBBBBB] md:text-lg">
              We&apos;re signing up drivers before we launch in each city. Join the
              waitlist today. It&apos;s free, and there&apos;s no app to download yet.
              We&apos;ll reach out when GetDrives goes live where you are.
            </p>

            <PromiseList className="mt-10 hidden space-y-6 lg:block" />
          </motion.div>

          <motion.div
            id="waitlist"
            className="order-2 scroll-mt-28 min-w-0 w-full lg:justify-self-end"
            {...m.heroImageBlock}
          >
            <DriverWaitlistForm />
          </motion.div>

          <PromiseList className="order-3 space-y-6 lg:hidden" />
        </div>

        <div className="mt-16 border-t border-white/[0.08] pt-12 md:mt-20 md:pt-14">
          <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:gap-8">
            {strip.map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <p className="font-black uppercase leading-none tracking-tighter text-[clamp(1.75rem,4vw,2.75rem)] text-white">
                  {item.main}
                  {item.main !== "REACH OUT" ? (
                    <span className="text-brand-orange">.</span>
                  ) : null}
                </p>
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-[#888888]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
