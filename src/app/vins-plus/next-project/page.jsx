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
            relative overflow-hidden
            p-10 rounded-3xl
            border border-[var(--accent)]
            bg-[var(--accent)]/10
            backdrop-blur-xl
            "
          >

            {/* glow */}

            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--accent)]/20 blur-3xl rounded-full"/>

            <div className="relative">

              <span className="text-xs uppercase opacity-60">
                Featured Project
              </span>

              <h2 className="text-3xl font-semibold mt-2">
                {featured.title}
              </h2>

              <p className="mt-4 max-w-xl opacity-70">
                {featured.desc}
              </p>


              {/* progress */}

              <div className="mt-6">

                <div className="h-2 rounded-full bg-[var(--border)] overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${featured.progress}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-[var(--accent)]"
                  />

                </div>

                <span className="text-xs opacity-60 mt-2 block">
                  {featured.progress}% completed
                </span>

              </div>

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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={!reduceMotion ? { y: -6 } : {}}
                className="
                group
                p-6 rounded-2xl
                border border-[var(--border)]
                bg-[var(--background)]/70 backdrop-blur-xl
                hover:border-[var(--accent)]
                transition
                "
              >

                <h3 className="font-semibold group-hover:text-[var(--accent)] transition">
                  {p.title}
                </h3>

                <p className="text-sm opacity-60 mt-2">
                  {p.desc}
                </p>


                {/* STATUS */}

                <div
                  className={`
                  mt-4 inline-flex items-center gap-2
                  px-3 py-1 rounded-full text-xs border
                  ${cfg.class}
                  `}
                >

                  <Icon icon={cfg.icon} width="16"/>

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