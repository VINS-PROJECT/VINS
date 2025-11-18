"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle, History, Timer } from "lucide-react";
import { useEffect, useState } from "react";

export default function ChangelogPage() {

  // === COUNTDOWN TARGET ===
  const targetDate = new Date("2025-11-19T00:00:00").getTime();
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
      version: "v0.0.2",
      date: "19 November 2025",
      comingSoon: true,
      changes: [
        "Revamped navigation structure for better accessibility and UX.",
        "Fixed several UI/UX bugs across multiple pages.",
        "Added some information",
        "Creating another new feature, please wait for it soon"
      ],
    },
    {
      version: "v0.0.1",
      date: "16 November 2025",
      changes: [
        "Initial project setup started.",
        "Preparing full system for portfolio, certificates, articles, and site structure.",
        "Core architecture planning for upcoming modules.",
      ],
    },
  ];

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

        {/* === Page Header === */}
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
            Updated timeline of features, improvements, and development progress.
          </p>
        </motion.div>

        {/* === Timeline === */}
        <div className="relative space-y-16">

          {/* Line */}
          <div
            className="
              absolute left-4 md:left-6 top-0 
              w-[3px] h-full 
              bg-[var(--accent)]/20 
              rounded-full
            "
          />

          {changelogs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-12 md:pl-16"
            >
              {/* Node */}
              <motion.div
                className="
                  absolute left-0 md:left-2 
                  w-6 h-6 rounded-full
                  border-2 border-[var(--accent)]
                  bg-[var(--accent)]/20
                  shadow-[0_0_12px_var(--accent)]
                "
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Card */}
              <div
                className="
                  rounded-xl p-7 backdrop-blur-md
                  transition-all shadow-[0_0_20px_rgba(0,0,0,0.15)]
                  bg-[var(--card)]
                  border border-[var(--border)]
                  hover:border-[var(--accent)]/40
                  hover:bg-[var(--accent)]/5
                "
              >
                {/* Version + Date + Countdown */}
                <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
                  <span className="text-2xl font-bold text-[var(--accent)] tracking-wide">
                    {log.version}
                  </span>

                  {log.comingSoon ? (
                    <div className="flex flex-col items-end text-right">
                      <span className="flex items-center gap-2 text-sm text-[var(--accent)] font-medium">
                        <Calendar className="w-4 h-4" /> {log.date}
                      </span>

                      {/* Countdown */}
                      <span className="flex items-center gap-2 mt-1 text-xs opacity-80">
                        <Timer className="w-3 h-3 text-[var(--accent)]" />
                        {timeLeft.d}d : {timeLeft.h}h : {timeLeft.m}m : {timeLeft.s}s
                      </span>
                    </div>
                  ) : (
                    <span className="flex items-center gap-2 text-sm opacity-75">
                      <Calendar className="w-4 h-4 text-[var(--accent)]" />
                      {log.date}
                    </span>
                  )}
                </div>

                {/* Change Items */}
                <ul className="space-y-3">
                  {log.changes.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-[var(--foreground)]/85 text-[15px] leading-relaxed"
                    >
                      <CheckCircle className="w-4 h-4 mt-1 text-[var(--accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}

        </div>
      </div>

      {/* Bottom Fade */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-28 
          bg-gradient-to-t 
          from-[var(--background)] 
          to-transparent 
          pointer-events-none
        "
      />
    </main>
  );
}
