import { motion } from "framer-motion";
import { inView, useAccessibleMotion } from "../motionPresets";

function PersonIcon({ className = "h-14 w-14" }) {
  return (
    <svg
      className={`text-white ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );
}

const team = [
  {
    name: "Oluwatobi Julius Ogunjide",
    role: "Founder & CEO",
    bio: "Leads company strategy and partnerships, focused on scaling safe, affordable mobility across Nigeria.",
  },
  {
    name: "Joshua Ali",
    role: "Co-Founder",
    bio: "Helps shape the company vision and growth strategy across rider and driver experiences.",
  },
  {
    name: "Clement Hunsu",
    role: "Head of Operations",
    bio: "Runs on-the-ground operations and support, keeping quality high as we grow city by city.",
  },
  {
    name: "Cletus Olamilekan",
    role: "CTO",
    bio: "Owns the product and engineering roadmap, shipping a platform riders and drivers can rely on every day.",
  },
];

export default function TeamSection() {
  const m = useAccessibleMotion();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-orange">
          THE TEAM
        </p>
        <h2 className="mt-4 max-w-3xl font-extrabold uppercase leading-[0.95] tracking-tighter text-white text-[clamp(1.75rem,4vw,2.75rem)]">
          <span className="block">PEOPLE BEHIND</span>
          <span className="block">GETDRIVES.</span>
        </h2>

        <motion.div
          className="mt-10 grid gap-8 md:mt-12 md:grid-cols-2 md:gap-12 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={m.cardListVariants}
        >
          {team.map((member) => (
            <motion.article
              key={member.name}
              className="flex h-full flex-col rounded-xl border border-white/[0.06] bg-brand-bg p-6"
              variants={m.cardItemVariants}
            >
              <PersonIcon />
              <h3 className="mt-5 font-bold uppercase tracking-tight text-white">
                {member.name}
              </h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                {member.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-brand-gray">
                {member.bio}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
