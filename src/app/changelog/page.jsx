"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle, History, Timer, Sparkles, Wrench, Bug } from "lucide-react";
import { useEffect, useState } from "react";

export default function ChangelogPage() {
  // === COUNTDOWN TARGET ===
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

  // ============================================================
  //           🔥 CHANGELOG DATA WITH FIX & BUG TYPE
  // ============================================================
  const changelogs = [
    {
      version: "v0.0.3",
      date: "24 November 2025",
      comingSoon: true,
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

  // ============================================================

  return (
    <main
      className="
        min-h-screen 
        pt-28 pb-24 relative overflow-hidden
        bg-[var(--background)] text-[var(--foreground)]
        transition-colors
      "
    >
      {/* === Background Glow === */}
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
        {/* === Header === */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <History className="w-14 h-14 text-[var(--accent)] mx-auto mb-4" />

          <h1
            className="
              text-4xl md:text-5xl font-extrabold
              bg-clip-text text-transparent
            "
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--accent), var(--accent-dark))",
            }}
          >
            Changelog
          </h1>

          <p className="opacity-70 mt-4 max-w-xl mx-auto leading-relaxed">
            Updated timeline of features, improvements, and progress.
          </p>
        </motion.div>

        {/* === Timeline === */}
        <div className="relative space-y-16">
          {/* Vertical Line */}
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
                {/* TIMELINE NODE */}
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
                  {isSoon && <Sparkles className="w-4 h-4" />}
                </motion.div>

                {/* CARD */}
                <div
                  className={`
                    rounded-xl p-7 backdrop-blur-md transition-all
                    bg-[var(--card)]
                    ${
                      isSoon
                        ? "border-[var(--accent)]/60 shadow-[0_0_18px_var(--accent)]/20"
                        : "border border-[var(--border)] shadow-md"
                    }
                    hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/5
                  `}
                >
                  {/* Version & Date */}
                  <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-[var(--accent)] tracking-wide">
                        {log.version}
                      </span>

                      {isSoon && (
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[var(--accent)] text-black">
                          IN PROGRESS
                        </span>
                      )}
                    </div>

                    <span className="flex items-center gap-2 text-sm text-[var(--accent)]">
                      <Calendar className="w-4 h-4" />
                      {log.date}
                    </span>
                  </div>

                  {/* ================================
                      CHANGE ITEMS WITH FIX + BUG TAG
                  ================================= */}
                  <ul className="space-y-3">
                    {log.changes.map((item, idx) => {
                      const isFix = item.type === "fix";
                      const isBug = item.type === "bug";
                      const isUpdate = item.type === "update";

                      return (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-[var(--foreground)]/85 text-[15px]"
                        >
                          {/* ICON */}
                          {isFix && <Wrench className="w-4 h-4 mt-1 text-yellow-400" />}
                          {isBug && <Bug className="w-4 h-4 mt-1 text-red-400" />}
                          {isUpdate && <CheckCircle className="w-4 h-4 mt-1 text-[var(--accent)]" />}

                          <div className="flex flex-col gap-1">
                            <span>{item.text}</span>

                            {/* TAG BUTTON */}
                            <span
                              className={`
                                inline-flex items-center gap-1 px-2.5 py-0.5 text-[10px] rounded-full font-semibold w-fit
                                ${
                                  isFix
                                    ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/40"
                                    : isBug
                                    ? "bg-red-500/20 text-red-300 border border-red-500/40"
                                    : "bg-[var(--accent)]/20 text-[var(--accent)] border border-[var(--accent)]/40"
                                }
                              `}
                            >
                              {isFix && "FIX"}
                              {isBug && "BUG"}
                              {isUpdate && "UPDATE"}
                            </span>
                          </div>
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
