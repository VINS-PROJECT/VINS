"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  LoaderCircle,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";

/* ================= ICON STYLE ================= */
const iconProps = {
  size: 16,
  strokeWidth: 1.25,
  absoluteStrokeWidth: true,
};

/* ================= MOTION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.35 } },
};

/* ================= DATA ================= */
const nextProjects = [
  {
    title: "SiapMagang",
    desc:
      "Unified monitoring system for internship progress, reporting, and mentor–student collaboration.",
    status: "Coming Soon",
    progress: 0,
  },
  {
    title: "VINSGawe",
    desc:
      "Management platform for VINS community events, collaborations, and networking.",
    status: "In Progress",
    progress: 90,
  },
  {
    title: "B2F World Roblox",
    desc:
      "Virtual world on Roblox for events, interaction, and immersive experiences.",
    status: "Coming Soon",
    progress: 0,
  },
  {
    title: "Exam Prep Website",
    desc: "Exam preparation tools: tests, learning path, analytics.",
    status: "Coming Soon",
    progress: 0,
  },
  {
    title: "VINS Portfolio 2026",
    desc: "Complete redesign with analytics & personalization.",
    status: "Finished",
    progress: 100,
  },
  {
    title: "Ambis Bareng Recruitment Website",
    desc:
      "Community platform for Ambis Bareng members: events, forums, resources, recruitment.",
    status: "Coming Soon",
    progress: 0,
  },
  {
    title: "Namura Property Website",
    desc:
      "Real estate platform: listings, inquiries, and client management.",
    status: "Finished",
    progress: 100,
  },
];

/* ================= STATUS CONFIG ================= */
const statusConfig = {
  "In Progress": {
    icon: <LoaderCircle {...iconProps} className="animate-spin" />,
    badge: "bg-[var(--accent)] text-black border-[var(--accent)]",
    bar: "bg-[var(--accent)]",
  },
  "Coming Soon": {
    icon: <Lightbulb {...iconProps} />,
    badge:
      "bg-[var(--accent)]/15 text-[var(--accent)] border-[var(--accent)]/40",
    bar: "bg-[var(--accent)]",
  },
  Finished: {
    icon: <CheckCircle2 {...iconProps} />,
    badge:
      "bg-[var(--accent-dark)] text-white border-[var(--accent-dark)]",
    bar: "bg-[var(--accent-dark)]",
  },
};

/* ================= PROGRESS BAR ================= */
function ProgressBar({ value, color, reduceMotion }) {
  return (
    <div className="mt-4">
      <div className="h-1.5 rounded-full overflow-hidden bg-[var(--border)]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.7, ease: "easeOut" }
          }
          className={`h-full ${color}`}
        />
      </div>
      <span className="block text-[11px] mt-1 opacity-50">
        {value}% completed
      </span>
    </div>
  );
}

/* ================= CARD ================= */
function Card({ proj, reduceMotion }) {
  const cfg = statusConfig[proj.status];

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className="
        relative p-7 rounded-3xl
        backdrop-blur-xl
        bg-white/60 dark:bg-white/5
        border border-white/20 dark:border-white/10
        shadow-[0_10px_36px_rgba(0,0,0,0.12)]
        transition
      "
    >
      <span
        className={`inline-flex items-center gap-2 text-xs font-semibold mb-3 border px-3 py-1 rounded-full ${cfg.badge}`}
      >
        {cfg.icon}
        {proj.status}
      </span>

      <h3 className="text-xl font-bold tracking-tight mb-2">
        {proj.title}
      </h3>

      <p className="text-sm opacity-70 leading-relaxed">
        {proj.desc}
      </p>

      <ProgressBar
        value={proj.progress}
        color={cfg.bar}
        reduceMotion={reduceMotion}
      />
    </motion.article>
  );
}

/* ================= PAGE ================= */
export default function NextProjectPage() {
  const reduceMotion = useReducedMotion();
  const [filter] = useState("All");

  const filtered = useMemo(() => {
    if (filter === "All") return nextProjects;
    return nextProjects.filter((p) => p.status === filter);
  }, [filter]);

  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      
      {/* ================= HEADER (VINS+ STYLE) ================= */}
      <section className="relative overflow-hidden">
        {/* Diagonal gold */}
        <div
          aria-hidden
          className="
            absolute inset-0
            bg-gradient-to-br
            from-[var(--accent)]/25
            via-[var(--accent)]/10
            to-transparent
            -skew-y-6
            origin-top-left
          "
        />

        {/* Fade to background */}
        <div
          aria-hidden
          className="
            absolute bottom-0 left-0 w-full h-28
            bg-gradient-to-t from-[var(--background)] to-transparent
          "
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative pt-32 pb-24 text-center"
        >
          {/* Icon */}
          <div
            className="
              mx-auto mb-5
              w-16 h-16 rounded-2xl
              flex items-center justify-center
              bg-[var(--accent)]/15
              text-[var(--accent)]
              shadow-[0_10px_30px_rgba(216,199,154,0.35)]
            "
          >
            <Lightbulb size={30} strokeWidth={1.4} />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            NEXT <span className="text-[var(--accent)]">PROJECT</span>
          </h1>

          {/* Path */}
          <span className="mt-2 block text-sm font-mono text-[var(--foreground)]/50">
            /vins+/nextproject
          </span>
        </motion.div>
      </section>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key="grid"
            variants={fade}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid md:grid-cols-2 gap-10"
          >
            {filtered.map((p, i) => (
              <Card key={i} proj={p} reduceMotion={reduceMotion} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
