"use client";

import { motion } from "framer-motion";
import { Wrench, BadgeCheck, Rocket } from "lucide-react";

export default function NextProjectPage() {
  const nextProjects = [
    {
      title: "Pantau Bersama MagangHub (PBM)",
      desc: "A unified monitoring system for internship progress, reporting, and mentor–student collaboration.",
      status: "Coming Soon",
      progress: 0,
    },
    {
      title: "VINS MagangIn",
      desc: "Internship management connecting students with companies, tracking progress and communication.",
      status: "In Progress",
      progress: 50,
    },
    {
      title: "B2F World Roblox",
      desc: "A virtual world on Roblox for events, interaction, and immersive experiences.",
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
      title: "VINS Portfolio v3",
      desc: "A complete redesign with analytics & personalization.",
      status: "Finished",
      progress: 100,
    },
  ];

  const statusConfig = {
    "Coming Soon": {
      color: "text-blue-400",
      chip: "bg-blue-400/10 border-blue-400/30",
      progress: "bg-blue-400",
      icon: <Rocket className="w-3.5 h-3.5" />,
    },
    "In Progress": {
      color: "text-yellow-400",
      chip: "bg-yellow-400/10 border-yellow-400/30",
      progress: "bg-yellow-400",
      icon: <Wrench className="w-3.5 h-3.5 motion-safe:animate-spin" />,
    },
    Finished: {
      color: "text-green-400",
      chip: "bg-green-400/10 border-green-400/30",
      progress: "bg-green-400",
      icon: <BadgeCheck className="w-3.5 h-3.5" />,
    },
  };

  const Section = ({ title, icon, projects }) => (
    <div className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-10"
      >
        <div className="p-3 rounded-xl bg-[var(--card)] border border-[var(--border)]">
          {icon}
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </motion.div>

      {projects.length === 0 ? (
        <p className="opacity-60 italic">No project available.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((proj, i) => {
            const cfg = statusConfig[proj.status];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                className="
                  relative p-7 rounded-2xl border bg-[var(--card)]
                  border-[var(--border)] shadow
                "
              >
                {/* Ribbon */}
                <span
                  className="
                    absolute top-3 right-3 px-3 py-1 text-[10px] font-bold 
                    rounded-full bg-[var(--accent)] text-black
                  "
                >
                  {proj.status}
                </span>

                <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed mb-4">
                  {proj.desc}
                </p>

                {/* Status Chip */}
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border ${cfg.chip} ${cfg.color}`}
                >
                  {cfg.icon}
                  {proj.status}
                </span>

                {/* Progress Bar */}
                <div className="w-full h-2 mt-4 bg-white/10 rounded-lg overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${proj.progress}%` }}
                    className={`${cfg.progress} rounded-lg`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );

  return (
    <main
      className="
        min-h-screen pt-28 pb-24
        bg-[var(--background)]
        text-[var(--foreground)]
        transition-colors
      "
    >
      {/* Glow Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 25% 20%, var(--accent)22, transparent 60%),
            radial-gradient(circle at 80% 80%, var(--accent)18, transparent 60%)
          `,
        }}
      />

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <Rocket className="w-14 h-14 mx-auto text-[var(--accent)] mb-3" />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Next Projects
        </h1>
        <p className="opacity-70 mt-2">
          Roadmap and progress for upcoming innovations 🚀
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-6">
        <Section
          title="In Progress"
          icon={<Wrench className="w-7 h-7 text-yellow-400 motion-safe:animate-pulse" />}
          projects={nextProjects.filter((p) => p.status === "In Progress")}
        />
        <Section
          title="Coming Soon"
          icon={<Rocket className="w-7 h-7 text-blue-400" />}
          projects={nextProjects.filter((p) => p.status === "Coming Soon")}
        />
        <Section
          title="Finished"
          icon={<BadgeCheck className="w-7 h-7 text-green-400" />}
          projects={nextProjects.filter((p) => p.status === "Finished")}
        />
      </div>
    </main>
  );
}
