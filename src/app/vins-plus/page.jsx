"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  PanelsTopLeft,
  Briefcase,
  BadgeCheck,
  FileUser,
  Rocket,
  Landmark,
} from "lucide-react";
import { useState } from "react";

const iconProps = {
  size: 26,
  strokeWidth: 1.25,
  absoluteStrokeWidth: true,
};

export default function VinsPlusPage() {
  const [active, setActive] = useState(null);
  const reduceMotion = useReducedMotion();

  const items = [
    {
      title: "Portfolio",
      desc: "Explore curated works and design systems.",
      href: "/vins-plus/portfolio",
      icon: PanelsTopLeft,
    },
    {
      title: "Project",
      desc: "Detailed case studies and executions.",
      href: "/vins-plus/project",
      icon: Briefcase,
    },
    {
      title: "Certificate",
      desc: "Verified achievements and credentials.",
      href: "/vins-plus/certificate",
      icon: BadgeCheck,
    },
    {
      title: "Resume",
      desc: "Professional journey and capabilities.",
      href: "/vins-plus/resume",
      icon: FileUser,
    },
    {
      title: "Next Project",
      desc: "Upcoming explorations and experiments.",
      href: "/vins-plus/next-project",
      icon: Rocket,
    },
    {
      title: "Experience",
      desc: "Timeline of roles and collaborations.",
      href: "/vins-plus/experience",
      icon: Landmark,
    },
  ];

  return (
    <section className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            VINS<span className="text-[var(--accent)]">+</span>
          </h1>
          <p className="text-sm opacity-60 mt-2 font-mono">
            Product Hub / Resources
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            const isActive = active === i;

            return (
              <Link key={item.title} href={item.href}>
                <motion.div
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={
                    reduceMotion
                      ? {}
                      : { scale: 1.03 }
                  }
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`
                    relative overflow-hidden
                    rounded-3xl
                    border border-[var(--border)]
                    bg-[var(--background)]/70 backdrop-blur-xl
                    transition-all duration-300

                    ${isActive
                      ? "lg:col-span-2 lg:row-span-2 p-8 shadow-xl border-[var(--accent)]"
                      : "p-6 hover:border-[var(--accent)]/40"}
                  `}
                >
                  {/* glow */}
                  <div className="absolute inset-0 bg-[var(--accent)]/5 opacity-0 hover:opacity-100 transition" />

                  <div className="relative flex flex-col h-full">
                    {/* ICON */}
                    <div className="w-12 h-12 mb-4 rounded-xl flex items-center justify-center bg-[var(--accent)]/15 text-[var(--accent)]">
                      <Icon {...iconProps} />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>

                    {/* DESC */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isActive ? 1 : 0 }}
                      className="mt-3 text-sm text-[var(--foreground)]/70 max-w-sm"
                    >
                      {item.desc}
                    </motion.p>

                    <div className="flex-1" />

                    {/* HINT */}
                    <span className="text-xs opacity-40 mt-4">
                      View details →
                    </span>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}