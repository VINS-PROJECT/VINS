"use client";

import { motion } from "framer-motion";
import { Clock, Sparkles, CheckCircle, TrendingUp } from "lucide-react";

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
      progress: 30,
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
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Coming Soon":
        return "text-blue-300";
      case "In Progress":
        return "text-yellow-300";
      case "Finished":
        return "text-green-400";
      default:
        return "text-gray-400";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Coming Soon":
        return <Clock className="w-4 h-4" />;
      case "In Progress":
        return <TrendingUp className="w-4 h-4" />;
      case "Finished":
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <main
      className="
      min-h-screen pt-28 pb-24 relative overflow-hidden
      bg-[var(--background)] text-[var(--foreground)]
      transition-colors duration-500
    "
    >
      {/* Ambient Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
           radial-gradient(circle at 30% 20%, var(--accent)15, transparent 65%),
           radial-gradient(circle at 80% 80%, var(--accent)10, transparent 60%)
          `,
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <Sparkles className="w-14 h-14 mx-auto mb-4 text-[var(--accent)]" />

          <h1
            className="
              text-4xl md:text-5xl font-extrabold tracking-tight
              bg-clip-text text-transparent
            "
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--accent), var(--accent-dark))",
            }}
          >
            Next Project
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-2xl mx-auto text-lg leading-relaxed">
            Upcoming project releases and innovations under development for VINS+.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {nextProjects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="
                rounded-2xl p-6 md:p-7
                bg-[var(--card)]
                border border-[var(--border)]
                shadow-md
                hover:border-[var(--accent)]/40
                hover:shadow-[0_0_18px_rgba(216,199,154,0.25)]
                transition-all duration-300
              "
            >
              {/* Title */}
              <h3 className="text-xl font-bold mb-2 text-[var(--foreground)] leading-snug">
                {proj.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">
                {proj.desc}
              </p>

              {/* Status */}
              <div className="flex items-center gap-2 mb-3">
                <span className={`${getStatusColor(proj.status)}`}>
                  {getStatusIcon(proj.status)}
                </span>
                <span className={`text-sm font-medium ${getStatusColor(proj.status)}`}>
                  {proj.status}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-300/30 dark:bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${proj.progress}%` }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="h-full rounded-full"
                  style={{ background: BRAND }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-20">
          <p className="text-sm opacity-60">
            All upcoming project developments will be announced soon.
          </p>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none" />
    </main>
  );
}
