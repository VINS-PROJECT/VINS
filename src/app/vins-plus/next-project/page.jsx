"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import {
  LoaderCircle,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";

const iconProps = {
  size: 16,
  strokeWidth: 1.25,
  absoluteStrokeWidth: true,
};

const nextProjects = [
  {
    title: "VINSGawe",
    desc:
      "Management platform for VINS community events, collaborations, and networking.",
    status: "In Progress",
    progress: 90,
    featured: true,
  },
  {
    title: "SiapMagang",
    desc:
      "Unified monitoring system for internship progress and collaboration.",
    status: "Coming Soon",
    progress: 0,
  },
  {
    title: "B2F World Roblox",
    desc:
      "Virtual world for events and immersive interaction.",
    status: "Coming Soon",
    progress: 0,
  },
  {
    title: "Exam Prep Website",
    desc: "Exam preparation tools with analytics.",
    status: "Coming Soon",
    progress: 0,
  },
  {
    title: "Portfolio 2026",
    desc: "Next generation portfolio system.",
    status: "Finished",
    progress: 100,
  },
];

const statusConfig = {
  "In Progress": {
    icon: <LoaderCircle {...iconProps} className="animate-spin" />,
  },
  "Coming Soon": {
    icon: <Lightbulb {...iconProps} />,
  },
  Finished: {
    icon: <CheckCircle2 {...iconProps} />,
  },
};

export default function NextProjectPage() {
  const reduceMotion = useReducedMotion();

  const featured = nextProjects.find((p) => p.featured);
  const rest = nextProjects.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-24 px-6">

      <div className="max-w-6xl mx-auto space-y-20">

        {/* HEADER */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Next Projects
          </h1>
          <p className="text-sm opacity-60">
            Roadmap of upcoming and evolving products.
          </p>
        </div>

        {/* FEATURED */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              p-10 rounded-3xl
              border border-[var(--accent)]
              bg-[var(--accent)]/10
              backdrop-blur-xl
              shadow-xl
            "
          >
            <span className="text-xs uppercase opacity-60">
              Featured Project
            </span>

            <h2 className="text-3xl font-semibold mt-2">
              {featured.title}
            </h2>

            <p className="mt-4 max-w-xl text-[var(--foreground)]/70">
              {featured.desc}
            </p>

            {/* progress */}
            <div className="mt-6">
              <div className="h-2 rounded-full bg-[var(--border)] overflow-hidden">
                <div
                  className="h-full bg-[var(--accent)]"
                  style={{ width: `${featured.progress}%` }}
                />
              </div>
              <span className="text-xs opacity-50 mt-2 block">
                {featured.progress}% completed
              </span>
            </div>
          </motion.div>
        )}

        {/* LIST */}
        <div className="space-y-6">
          {rest.map((p, i) => {
            const cfg = statusConfig[p.status];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="
                  flex items-start justify-between
                  gap-6
                  border-b border-[var(--border)]
                  pb-6
                "
              >
                <div>
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="text-sm opacity-60 max-w-md">
                    {p.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs opacity-70">
                  {cfg.icon}
                  {p.status}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </main>
  );
}