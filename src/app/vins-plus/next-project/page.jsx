"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  BadgeCheck,
  Rocket,
} from "lucide-react";

export default function NextProjectPage() {
  const BRAND = "var(--accent)";

  const nextProjects = [
    {
      title: "Pantau Bersama MagangHub (PBM)",
      desc: "A unified monitoring system for internship progress, reporting, and mentor–student collaboration.",
      status: "Coming Soon",
      progress: 0,
    },
    {
      title: "VINS MagangIn",
      desc: "An internship management platform connecting students with companies, tracking applications, and facilitating communication.",
      status: "In Progress",
      progress: 50,
    },
    {
      title: "B2F World Roblox",
      desc: "A virtual world on Roblox for social interaction, events, and immersive experiences.",
      status: "Coming Soon",
      progress: 0,
    },
    {
      title: "Exam Prep Website",
      desc: "A comprehensive exam preparation website with practice tests, study resources, and performance tracking.",
      status: "Coming Soon",
      progress: 0,
    },
    {
      title: "VINS Portfolio v3",
      desc: "A complete redesign with AI features, analytics, and custom personalization.",
      status: "Finished",
      progress: 100,
    },
  ];

  const statusConfig = {
    "Coming Soon": {
      color: "text-blue-300",
      glow: "shadow-[0_0_18px_rgba(96,165,250,0.5)]",
      chip: "bg-blue-300/10 border border-blue-300/20",
      progress: "bg-gradient-to-r from-blue-300 via-[var(--accent)] to-blue-400",
      icon: <Rocket className="w-3.5 h-3.5" />,
      ribbon: "bg-blue-500 text-black",
      ribbonText: "Future",
    },
    "In Progress": {
      color: "text-yellow-300",
      glow: "shadow-[0_0_18px_rgba(250,204,21,0.5)]",
      chip: "bg-yellow-300/10 border border-yellow-300/20",
      progress:
        "bg-gradient-to-r from-yellow-300 via-[var(--accent)] to-yellow-400",
      icon: (
        <Wrench className="w-3.5 h-3.5 motion-safe:animate-pulse" />
      ),
      ribbon: "bg-yellow-400 text-black",
      ribbonText: "Working",
    },
    Finished: {
      color: "text-green-300",
      glow: "shadow-[0_0_22px_rgba(74,222,128,0.5)]",
      chip: "bg-green-300/10 border border-green-300/20",
      progress:
        "bg-gradient-to-r from-green-300 via-[var(--accent)] to-green-400",
      icon: <BadgeCheck className="w-3.5 h-3.5" />,
      ribbon: "bg-green-400 text-black",
      ribbonText: "Done",
    },
  };

  const Section = ({ title, icon, projects }) => (
    <div className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="flex items-center gap-4 mb-10"
      >
        <motion.div
          whileHover={{ rotate: [0, -7, 7, 0] }}
          transition={{ duration: 0.6 }}
          className="p-3 rounded-xl bg-[var(--card)] border border-[var(--border)]"
        >
          {icon}
        </motion.div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((proj, i) => {
          const cfg = statusConfig[proj.status];

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: i * 0.12,
                type: "spring",
                stiffness: 180,
              }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              className={`
                relative rounded-2xl p-7
                bg-[var(--card)]/80 backdrop-blur-xl
                border border-[var(--border)]
                hover:shadow-xl hover:${cfg.glow}
                transition-all duration-300
              `}
            >
              {/* Ribbon */}
              <div
                className={`
                  absolute -top-3 -left-3 px-3 py-1 text-[10px]
                  rounded-full font-bold shadow-md
                  ${cfg.ribbon}
                `}
              >
                {cfg.ribbonText}
              </div>

              <motion.h3
                whileHover={{ x: 4 }}
                className="text-xl font-bold mb-2"
              >
                {proj.title}
              </motion.h3>

              <motion.p
                whileHover={{ x: 4 }}
                className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5"
              >
                {proj.desc}
              </motion.p>

              {/* Status Chip */}
              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4 ${cfg.chip} ${cfg.color}`}
              >
                {cfg.icon}
                {proj.status}
              </div>

              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${proj.progress}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-full rounded-full ${cfg.progress} animate-pulse`}
                />
              </div>

              {/* Glow */}
              <motion.div
                className="absolute inset-0 -z-10 bg-[var(--accent)]/10 blur-[50px] rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen pt-28 pb-24 relative bg-[var(--background)] text-[var(--foreground)]">

      {/* Page Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 30% 18%, var(--accent)18, transparent 60%),
            radial-gradient(circle at 80% 80%, var(--accent)10, transparent 60%)
          `,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center mb-16">
        <motion.div
          initial={{ rotate: -8, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Rocket className="w-16 h-16 mx-auto mb-4 text-[var(--accent)]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Next Project
        </motion.h1>
        <p className="opacity-60 mt-3">
          Project categorized by development stage.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Section
          title="In Progress"
          icon={<Wrench className="w-7 h-7 text-yellow-300 motion-safe:animate-pulse" />}
          projects={nextProjects.filter((p) => p.status === "In Progress")}
        />
        <Section
          title="Coming Soon"
          icon={<Rocket className="w-7 h-7 text-blue-300" />}
          projects={nextProjects.filter((p) => p.status === "Coming Soon")}
        />
        <Section
          title="Finished"
          icon={<BadgeCheck className="w-7 h-7 text-green-300" />}
          projects={nextProjects.filter((p) => p.status === "Finished")}
        />
      </div>
    </main>
  );
}
