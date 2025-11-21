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

  const inProgress = nextProjects.filter((p) => p.status === "In Progress");
  const comingSoon = nextProjects.filter((p) => p.status === "Coming Soon");
  const finished = nextProjects.filter((p) => p.status === "Finished");

  const getStatusUI = (status) => {
    switch (status) {
      case "Coming Soon":
        return {
          color: "text-blue-300",
          chip: "bg-blue-300/10 border border-blue-300/30",
          icon: <Clock className="w-3.5 h-3.5" />,
        };
      case "In Progress":
        return {
          color: "text-yellow-300",
          chip: "bg-yellow-300/10 border border-yellow-300/30",
          icon: <TrendingUp className="w-3.5 h-3.5" />,
        };
      case "Finished":
        return {
          color: "text-green-300",
          chip: "bg-green-300/10 border border-green-300/30",
          icon: <CheckCircle className="w-3.5 h-3.5" />,
        };
      default:
        return {
          color: "text-gray-400",
          chip: "bg-gray-400/10 border border-gray-400/20",
          icon: <Clock className="w-3.5 h-3.5" />,
        };
    }
  };

  const Section = ({ title, icon, projects }) => (
    <div className="mb-20">
      {/* Professional Header */}
      <div className="flex items-center gap-4 mb-8">
        <div
          className="
            p-3 rounded-xl 
            bg-[var(--card)] border border-[var(--border)]
            shadow-sm
          "
        >
          {icon}
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      {projects.length === 0 ? (
        <p className="opacity-40 text-sm">No project available.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => {
            const statusUI = getStatusUI(proj.status);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  rounded-2xl p-6 md:p-7 relative
                  bg-[var(--card)]/70 backdrop-blur-xl
                  border border-[var(--border)]
                  shadow-[0_4px_20px_rgba(0,0,0,0.15)]
                  transition-all duration-300
                  hover:shadow-[0_0_20px_var(--accent)]
                "
              >
                {/* Title */}
                <h3 className="text-xl font-bold mb-2">
                  {proj.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">
                  {proj.desc}
                </p>

                {/* Status Chip */}
                <div
                  className={`
                    inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                    text-xs font-medium mb-4 ${statusUI.chip} ${statusUI.color}
                  `}
                >
                  {statusUI.icon}
                  {proj.status}
                </div>

                {/* Progress */}
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${proj.progress}%` }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full"
                    style={{ background: BRAND }}
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
        min-h-screen pt-28 pb-24 relative
        bg-[var(--background)] text-[var(--foreground)]
      "
    >
      {/* Soft Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 30% 18%, var(--accent)18, transparent 60%),
            radial-gradient(circle at 80% 80%, var(--accent)10, transparent 60%)
          `,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Sparkles className="w-14 h-14 mx-auto mb-4 text-[var(--accent)]" />
          <h1 className="text-4xl md:text-5xl font-extrabold">Next Project</h1>
          <p className="opacity-60 mt-3">Project categorized by development stage.</p>
        </div>

        {/* Sections with professional icons */}
        <Section
          title="In Progress"
          icon={<TrendingUp className="w-7 h-7 text-yellow-300" />}
          projects={inProgress}
        />

        <Section
          title="Coming Soon"
          icon={<Clock className="w-7 h-7 text-blue-300" />}
          projects={comingSoon}
        />

        <Section
          title="Finished"
          icon={<CheckCircle className="w-7 h-7 text-green-300" />}
          projects={finished}
        />
      </div>
    </main>
  );
}
