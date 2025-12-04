"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Stars,
  Hammer,
  Bug,
  Sparkle,
  History,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function ChangelogPage() {
  const targetDate = new Date("2025-11-24T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const update = () => {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ d: 0, h: 0, m: 0, s: 0 });
        return;
      }

      setTimeLeft({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff / (1000 * 60 * 60)) % 24),
        m: Math.floor((diff / (1000 * 60)) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const changelogs = [
    {
      version: "v1.0.0",
      date: "6 December 2025",
      comingSoon: true,
      changes: [
        { text: "Revamped user interface for better experience to Version 1.0.0.", type: "update" },
        { text: "Implement countdown timer for upcoming features.", type: "update" },
        { text: "Connect website to VINS API for dynamic content.", type: "update" },
        { text: "Fixed navigation bugs in previous versions.", type: "bug" },
        { text: "Addressed performance issues on mobile devices.", type: "fix" },
      ],
    },
    {
      version: "v0.0.3",
      date: "24 November 2025",
      comingSoon: false,
      changes: [
        { text: "Complete VINS+ Menu structure.", type: "update" },
        { text: "Added project detail pages for VINS+ projects.", type: "update" },
        { text: "Fixed minor bugs in project listing page.", type: "fix" },
        { text: "Optimized loading performance for project images.", type: "fix" },
      ],
    },
    {
      version: "v0.0.2",
      date: "21 November 2025",
      comingSoon: false,
      changes: [
        { text: "Revamped navigation bar for VINS+.", type: "fix" },
        { text: "Revamped navigation structure for better UX.", type: "update" },
        { text: "Fixed several UI/UX bugs across pages.", type: "fix" },
        { text: "Detected UI flickering issue on mobile.", type: "bug" },
        { text: "Creating new feature, stay tuned.", type: "update" },
      ],
    },
    {
      version: "v0.0.1",
      date: "16 November 2025",
      changes: [
        { text: "Initial project setup started.", type: "update" },
        { text: "Preparing system for portfolio and articles.", type: "update" },
        { text: "Core architecture planning.", type: "update" },
      ],
    },
  ];

  return (
    <main className="
      min-h-screen pt-28 pb-24 relative overflow-hidden
      bg-[var(--background)] text-[var(--foreground)]
      transition-colors
    ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, var(--accent)20, transparent 70%),
            radial-gradient(circle at 85% 75%, var(--accent)15, transparent 65%)
          `,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <History className="w-14 h-14 text-[var(--accent)] mx-auto mb-4" />

          <h1
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--accent), var(--accent-dark))",
            }}
          >
            Changelog
          </h1>

          <p className="opacity-70 mt-4">
            Updated timeline of features, improvements, and progress.
          </p>
        </motion.div>

        <div className="relative space-y-16">
          <div className="absolute left-4 md:left-6 top-0 w-[3px] h-full bg-[var(--accent)]/20 rounded-full" />

          {changelogs.map((log, i) => {
            const isSoon = log.comingSoon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-12 md:pl-16"
              >
                <motion.div
                  className={`
                    absolute left-0 md:left-2 w-7 h-7 rounded-full flex items-center justify-center
                    border-2 shadow-[0_0_12px_var(--accent)]
                    ${
                      isSoon
                        ? "border-[var(--accent)] bg-[var(--accent)] text-black"
                        : "border-[var(--accent)] bg-[var(--accent)]/20"
                    }
                  `}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Stars className="w-4 h-4" />
                </motion.div>

                <div className={`
                  rounded-xl p-7 backdrop-blur-md transition-all
                  bg-[var(--card)]
                  ${
                    isSoon
                      ? "border-[var(--accent)]/60 shadow-[0_0_18px_var(--accent)]/20"
                      : "border border-[var(--border)] shadow-md"
                  }
                  hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/5
                `}>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-[var(--accent)]">
                        {log.version}
                      </span>

                      {isSoon && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--accent)] text-black">
                          IN PROGRESS
                        </span>
                      )}
                    </div>

                    <span className="flex items-center gap-2 text-sm text-[var(--accent)]">
                      <CalendarDays className="w-4 h-4" />
                      {log.date}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {log.changes.map((item, idx) => {
                      const isFix = item.type === "fix";
                      const isBug = item.type === "bug";
                      const isUpdate = item.type === "update";

                      return (
                        <li key={idx} className="flex items-start gap-3 text-[15px] opacity-90">
                          {isFix && <Hammer className="w-4 h-4 mt-1 text-green-300" />}
                          {isBug && <Bug className="w-4 h-4 mt-1 text-red-400 motion-safe:animate-pulse" />}
                          {isUpdate && <Sparkle className="w-4 h-4 mt-1 text-[var(--accent)]" />}

                          <span>{item.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
