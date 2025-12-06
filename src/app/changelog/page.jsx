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
  const targetDate = new Date("2025-12-06T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const update = () => {
      const diff = targetDate - Date.now();
      if (diff <= 0) return setTimeLeft({ d: 0, h: 0, m: 0, s: 0 });

      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
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
        { text: "Revamped UI → Version 1.0.0 milestone launch.", type: "update" },
        { text: "Added advanced motion system.", type: "update" },
        { text: "Dynamic API connection planned.", type: "update" },
        { text: "Fix navigation inconsistencies.", type: "fix" },
        { text: "Improve stability mobile renders.", type: "fix" },
      ],
    },
    {
      version: "v0.0.3",
      date: "24 November 2025",
      changes: [
        { text: "Completed VINS+ menu architecture.", type: "update" },
        { text: "Project detail pages polished.", type: "update" },
        { text: "Minor bug fixes & refactor.", type: "fix" },
      ],
    },
    {
      version: "v0.0.2",
      date: "21 November 2025",
      changes: [
        { text: "Navbar revamp full UX upgrade.", type: "update" },
        { text: "Improved routing structure.", type: "update" },
        { text: "Fixed flickering on mobile.", type: "fix" },
        { text: "Found performance regression case.", type: "bug" },
      ],
    },
    {
      version: "v0.0.1",
      date: "16 November 2025",
      changes: [
        { text: "Initial build established.", type: "update" },
        { text: "VINS core design language.", type: "update" },
      ],
    },
  ];

  const badgeColor = (type) =>
    type === "fix"
      ? "text-green-400"
      : type === "bug"
      ? "text-red-400"
      : "text-[var(--accent)]";

  return (
    <main
      className="
        min-h-screen pt-28 pb-24 relative overflow-hidden
        bg-[var(--background)] text-[var(--foreground)]
        transition-colors duration-500
      "
    >
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.22 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 35% 18%, var(--accent)/0.18 0%, transparent 70%),
            radial-gradient(circle at 80% 75%, var(--accent-dark)/0.18 0%, transparent 75%)
          `,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <History className="w-14 h-14 text-[var(--accent)] mx-auto mb-4" />

          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent"
            style={{
              WebkitTextFillColor: "transparent",
              backgroundImage:
                "linear-gradient(to right, var(--accent), var(--accent-dark))",
            }}
          >
            Changelog
          </h1>

          <p className="opacity-70 mt-4">
            Every improvement and upgrade along the journey.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-14">
          <div className="absolute left-6 top-0 w-[3px] h-full bg-[var(--accent)]/25 rounded-full" />

          {changelogs.map((log, i) => {
            const coming = log.comingSoon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative pl-12"
              >
                {/* Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className={`
                    absolute left-0 top-2 w-8 h-8 rounded-full
                    flex items-center justify-center border-2
                    ${
                      coming
                        ? "bg-[var(--accent)] text-black border-[var(--accent)]"
                        : "bg-[var(--accent)]/15 text-[var(--accent)] border-[var(--accent)]"
                    }
                  `}
                >
                  <Stars className="w-4" />
                </motion.div>

                {/* Card */}
                <div
                  className={`
                    p-7 rounded-2xl backdrop-blur-xl border transition
                    bg-[var(--background)]/70 shadow-[0_8px_22px_-6px_rgba(0,0,0,0.2)]
                    ${
                      coming &&
                      "shadow-[0_8px_28px_-6px_var(--accent)]/50 border-[var(--accent)]"
                    }
                  `}
                >
                  {/* Version */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold text-[var(--accent)]">
                      {log.version}
                    </span>
                    <span className="text-sm opacity-75 flex items-center gap-2">
                      <CalendarDays size={15} />
                      {log.date}
                    </span>
                  </div>

                  {/* Changes */}
                  <ul className="space-y-3">
                    {log.changes?.map((c, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-[15px] leading-relaxed"
                      >
                        {c.type === "bug" && (
                          <Bug size={17} className={`${badgeColor(c.type)} mt-0.5`} />
                        )}
                        {c.type === "fix" && (
                          <Hammer size={17} className={`${badgeColor(c.type)} mt-0.5`} />
                        )}
                        {c.type === "update" && (
                          <Sparkle size={17} className={`${badgeColor(c.type)} mt-0.5`} />
                        )}

                        <span className="opacity-90">{c.text}</span>
                      </li>
                    ))}
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
