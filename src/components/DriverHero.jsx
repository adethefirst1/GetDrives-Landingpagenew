import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PATH_DRIVE_WITH_US } from "../ctaCopy";
import { trackEvent } from "../lib/analytics";
import { useAccessibleMotion } from "../motionPresets";

const MotionLink = motion(Link);

const accent = "#FF4500";

const chartRows = [
  { day: "MON", pct: 39, amount: "₦3,100" },
  { day: "TUE", pct: 48, amount: "₦3,800" },
  { day: "WED", pct: 33, amount: "₦2,600" },
  { day: "THU", pct: 61, amount: "₦4,900" },
  { day: "FRI", pct: 100, amount: "₦8,000" },
];

const driveHeroStats = [
  { kind: "plus", main: "50K", label: "ACTIVE RIDERS" },
  { kind: "plus", main: "8K", label: "PARTNER DRIVERS" },
  { kind: "star", main: "4.9", label: "AVERAGE RATING" },
];

function StatValue({ kind, main }) {
  if (kind === "star") {
    return (
      <>
        <span className="text-white">{main}</span>
        <span className="text-[#FF4500]" aria-hidden>
          {" "}
          ★
        </span>
      </>
    );
  }
  return (
    <>
      <span className="text-white">{main}</span>
      <span className="text-[#FF4500]">+</span>
    </>
  );
}

export default function DriverHero() {
  const m = useAccessibleMotion();

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="mx-auto min-w-0 max-w-7xl px-6">
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...m.splitText}>
            <div className="mb-6 flex items-center gap-3">
              <span
                className="h-px w-8 shrink-0 bg-[#FF4500]"
                aria-hidden
              />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#BBBBBB]">
                DRIVE WITH GETDRIVES
              </p>
            </div>
            <h1 className="font-extrabold uppercase leading-[0.95] tracking-tighter text-[clamp(2.25rem,6vw,4rem)]">
              <span className="block text-white">Earn on your own</span>
              <span className="block text-[#FF4500]">terms.</span>
            </h1>
            <p className="mt-8 w-full max-w-xl text-base leading-relaxed text-[#BBBBBB]">
              No fixed schedule, no pressure. Just drive when it works for you and
              earn at your pace.
            </p>
            <p className="mt-3 w-full max-w-xl text-sm leading-relaxed text-[#BBBBBB]/70">
              Whether it&apos;s full-time or just extra income, you stay in control.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
              <MotionLink
                to="/services"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-none bg-[#FF4500] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white hover:opacity-95 sm:w-auto"
                {...m.buttonHoverProps}
                onClick={() => trackEvent("nav_click", { label: "SERVICES" })}
              >
                EXPLORE SERVICES
                <span aria-hidden className="text-base leading-none">
                  →
                </span>
              </MotionLink>
              <MotionLink
                to={PATH_DRIVE_WITH_US}
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-none border border-white bg-transparent px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white/5 sm:w-auto"
                {...m.buttonHoverProps}
                onClick={() => trackEvent("cta_drive_click")}
              >
                DRIVE WITH US
              </MotionLink>
            </div>
          </motion.div>

          <motion.div
            className="min-w-0 w-full lg:justify-self-end"
            {...m.splitImageRight}
          >
            <div className="mx-auto w-full max-w-md rounded-xl border border-white/[0.08] bg-[#121212] p-6 md:p-8">
              <div className="flex items-start justify-between gap-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#888888]">
                  WEEKLY EARNINGS
                </p>
                <span className="inline-flex items-center rounded-full bg-[#22C55E] px-2.5 py-1 text-[10px] font-semibold text-white">
                  ↑ 12% this week
                </span>
              </div>

              <div className="mt-6 flex items-baseline gap-1">
                <span
                  className="text-3xl font-extrabold md:text-4xl"
                  style={{ color: accent }}
                >
                  ₦
                </span>
                <span className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                  22,400
                </span>
              </div>
              <p className="mt-2 text-xs text-[#888888]">
                43 trips completed this week
              </p>

              <div className="mt-8 space-y-4">
                {chartRows.map((row) => (
                  <div key={row.day} className="flex items-center gap-3">
                    <span className="w-9 shrink-0 text-[10px] font-semibold uppercase tracking-wide text-[#888888]">
                      {row.day}
                    </span>
                    <div className="relative h-2.5 min-w-0 flex-1 overflow-hidden rounded-full bg-[#1A1A1A]">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${row.pct}%`,
                          backgroundColor: accent,
                        }}
                      />
                    </div>
                    <span className="w-[4.5rem] shrink-0 text-right text-xs font-semibold text-white">
                      {row.amount}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 border-t border-white/[0.08] pt-6 sm:grid-cols-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-[#888888]">
                    PEAK BONUS
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    +₦1,200
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-[#888888]">
                    ACCEPTANCE
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">94%</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-[#888888]">
                    RATING
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    4.92 ★
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 border-t border-white/[0.08] pt-12 md:mt-20 md:pt-14">
          <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:gap-8 md:gap-12">
            {driveHeroStats.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <p className="font-black uppercase leading-none tracking-tighter text-[clamp(2.25rem,5vw,3.25rem)] tabular-nums">
                  <StatValue kind={s.kind} main={s.main} />
                </p>
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-[#888888]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
