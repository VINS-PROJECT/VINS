"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Icon } from "@iconify/react";

const nextProjects = [
  {
    title: "VINSGawe",
    desc:
      "Management platform for VINS community events, collaborations, and networking.",
    status: "In Progress",
    progress: 90,
    version: "v0.9 beta",
    milestones: ["Plan", "Dev", "Beta", "Launch"],
    featured: true,
  },
  {
    title: "SiapMagang",
    desc:
      "Unified monitoring system for internship progress and collaboration.",
    status: "Coming Soon",
    version: "v0.1",
  },
  {
    title: "B2F World Roblox",
    desc: "Virtual world for events and immersive interaction.",
    status: "Coming Soon",
    version: "Concept",
  },
  {
    title: "Exam Prep Website",
    desc: "Exam preparation tools with analytics.",
    status: "Coming Soon",
    version: "v0.2",
  },
  {
    title: "Portfolio 2026",
    desc: "Next generation portfolio system.",
    status: "Finished",
    version: "v1.0",
  },
];

const statusConfig = {
  "In Progress": {
    icon: "solar:refresh-outline",
    class: "bg-yellow-500/10 text-yellow-500 border-yellow-500/30",
  },
  "Coming Soon": {
    icon: "solar:lightbulb-line-duotone",
    class: "bg-blue-500/10 text-blue-500 border-blue-500/30",
  },
  Finished: {
    icon: "solar:check-circle-line-duotone",
    class: "bg-green-500/10 text-green-500 border-green-500/30",
  },
};

export default function NextProjectPage() {

  const reduceMotion = useReducedMotion();

  const featured = nextProjects.find((p) => p.featured);
  const rest = nextProjects.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-36 pb-24 px-6">

      <div className="max-w-4xl mx-auto space-y-20">

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
            p-8 rounded-2xl
            border border-[var(--accent)]
            bg-[var(--accent)]/10
            space-y-6
            "
          >

            <span className="text-xs uppercase opacity-60">
              Featured Project
            </span>

            <h2 className="text-2xl font-semibold">
              {featured.title}
            </h2>

            <p className="opacity-70 max-w-xl">
              {featured.desc}
            </p>


            {/* VERSION */}

            <span className="
              inline-flex items-center gap-2
              px-3 py-1 rounded-full
              text-xs border border-[var(--border)]
            ">
              Release {featured.version}
            </span>


            {/* PROGRESS BAR */}

            <div>

              <div className="h-2 rounded-full bg-[var(--border)] overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${featured.progress}%` }}
                  transition={{ duration: 1.2 }}
                  className="h-full bg-[var(--accent)]"
                />

              </div>

              <span className="text-xs opacity-60 mt-2 block">
                {featured.progress}% completed
              </span>

            </div>


            {/* MILESTONES */}

            <div className="flex justify-between text-xs opacity-70">

              {featured.milestones.map((m, i) => (

                <div key={i} className="flex flex-col items-center gap-1">

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="
                    w-3 h-3 rounded-full
                    bg-[var(--accent)]
                    "
                  />

                  {m}

                </div>

              ))}

            </div>

          </motion.div>

        )}


        {/* PROJECT GRID */}

        <div className="grid sm:grid-cols-2 gap-6">

          {rest.map((p, i) => {

            const cfg = statusConfig[p.status];

            return (

              <motion.div
                key={i}
                whileHover={!reduceMotion ? { y: -4 } : {}}
                className="
                p-6 rounded-2xl
                border border-[var(--border)]
                hover:border-[var(--accent)]
                transition
                "
              >

                <h3 className="font-semibold">
                  {p.title}
                </h3>

                <p className="text-sm opacity-60 mt-2">
                  {p.desc}
                </p>

                <div className="flex items-center justify-between mt-4">

                  <div
                    className={`
                    inline-flex items-center gap-2
                    px-3 py-1 rounded-full text-xs border
                    ${cfg.class}
                    `}
                  >
                    <Icon icon={cfg.icon} width="16"/>
                    {p.status}
                  </div>

                  <span className="text-xs opacity-60">
                    {p.version}
                  </span>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </main>
  );
}