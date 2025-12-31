"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import {
  LoaderCircle,
  CheckCircle2,
  Lightbulb,
  LayoutGrid,
  List,
} from "lucide-react";

/* ================= WAVE HIGHLIGHT ================= */
function WaveHighlight({ children }) {
  return (
    <span className="relative inline-block leading-tight">
      <span
        className="relative z-10 bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--accent) 10%, var(--accent-dark) 90%)",
          WebkitTextFillColor: "transparent",
        }}
      >
        {children}
      </span>
      <svg
        className="absolute left-0 bottom-0 w-full h-[8px]"
        viewBox="0 0 200 20"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 10 Q 25 6 50 10 T 100 10 T 150 10 T 200 10"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={{ pathOffset: [0, 1] }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </svg>
    </span>
  );
}

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
      "Real estate platform for Namura Property: listings, inquiries, and client management.",
    status: "Finished",
    progress: 100,
  },
];

/* ================= STATUS CONFIG ================= */
const statusConfig = {
  "In Progress": {
    icon: (
      <LoaderCircle className="w-3.5 h-3.5 motion-safe:animate-spin" />
    ),
  },
  "Coming Soon": {
    icon: <Lightbulb className="w-3.5 h-3.5" />,
  },
  Finished: {
    icon: <CheckCircle2 className="w-3.5 h-3.5" />,
  },
};

/* ================= COMPONENTS ================= */
function ProgressBar({ value }) {
  return (
    <div className="mt-4">
      <div className="w-full h-2 rounded-lg overflow-hidden bg-[var(--border)]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="h-full bg-[var(--accent)] rounded-lg"
        />
      </div>
      <span className="block text-[11px] mt-1 opacity-70">
        Progress {value}%
      </span>
    </div>
  );
}

function Card({ proj }) {
  const cfg = statusConfig[proj.status];

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.45 }}
      className="
        relative p-7 rounded-3xl
        backdrop-blur-xl
        bg-white/55 dark:bg-white/5
        border border-white/25 dark:border-white/10
        shadow-[0_14px_40px_rgba(0,0,0,0.14)]
        hover:border-[var(--accent)]/40
        transition-all
      "
    >
      <span className="absolute top-4 right-4 px-3 py-1 text-[10px] font-semibold rounded-full bg-[var(--accent)] text-black">
        {proj.status}
      </span>

      <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
      <p className="text-sm opacity-70 leading-relaxed mb-5">
        {proj.desc}
      </p>

      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30">
        {cfg.icon}
        {proj.status}
      </span>

      <ProgressBar value={proj.progress} />
    </motion.article>
  );
}

function TimelineItem({ proj }) {
  const cfg = statusConfig[proj.status];

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="relative pl-12 pb-14"
    >
      <span className="absolute left-5 top-0 h-full w-[2px] bg-[var(--border)]" />
      <span className="absolute left-3 top-1.5 w-6 h-6 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]" />

      <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/55 dark:bg-white/5 border border-white/25 dark:border-white/10">
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--accent)] mb-2">
          {cfg.icon}
          {proj.status}
        </span>
        <h3 className="text-lg font-bold">{proj.title}</h3>
        <p className="text-sm opacity-70 mt-1">{proj.desc}</p>
        <ProgressBar value={proj.progress} />
      </div>
    </motion.div>
  );
}

/* ================= PAGE ================= */
export default function NextProjectPage() {
  const [view, setView] = useState("grid");
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    if (filter === "All") return nextProjects;
    return nextProjects.filter((p) => p.status === filter);
  }, [filter]);

  return (
    <main className="relative min-h-screen pt-28 pb-24 bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      {/* BACKDROP */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 25% 20%, var(--accent)/0.18, transparent 60%),
            radial-gradient(circle at 80% 80%, var(--accent-dark)/0.18, transparent 60%)
          `,
        }}
      />

      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 mb-14 text-center">
        <Lightbulb className="w-14 h-14 mx-auto text-[var(--accent)] mb-4" />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <WaveHighlight>Next Projects</WaveHighlight>
        </h1>
        <p className="opacity-70 mt-3">
          Product roadmap & idea exploration
        </p>
      </div>

      {/* CONTROLS */}
      <div className="max-w-6xl mx-auto px-6 mb-12 flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2">
          {["All", "In Progress", "Coming Soon", "Finished"].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold border transition ${
                filter === s
                  ? "bg-[var(--accent)] text-black border-[var(--accent)]"
                  : "border-[var(--border)] hover:border-[var(--accent)]/60"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-xl border ${
              view === "grid"
                ? "bg-[var(--accent)] text-black border-[var(--accent)]"
                : "border-[var(--border)]"
            }`}
          >
            <LayoutGrid size={18} />
          </button>
          <button
            onClick={() => setView("timeline")}
            className={`p-2 rounded-xl border ${
              view === "timeline"
                ? "bg-[var(--accent)] text-black border-[var(--accent)]"
                : "border-[var(--border)]"
            }`}
          >
            <List size={18} />
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {view === "grid" ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 gap-10"
            >
              {filtered.map((p, i) => (
                <Card key={i} proj={p} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="timeline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filtered.map((p, i) => (
                <TimelineItem key={i} proj={p} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
