"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  Stars,
  Hammer,
  Bug,
  Sparkle,
  History,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function ChangelogPage() {
  const ref = useRef(null);
  const [confetti, setConfetti] = useState([]);
  const [animateNumbers, setAnimateNumbers] = useState(false);

  /* === Countdown System === */
  const targetDate = new Date("2026-01-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const update = () => {
      const diff = targetDate - Date.now();
      if (diff <= 0) return;

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

  /* === Confetti Trigger === */
  const triggerConfetti = () => {
    const items = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      rotate: Math.random() * 180 - 90,
      delay: Math.random() * 0.25,
      duration: 1.3 + Math.random() * 0.7,
    }));

    setConfetti(items);
    setTimeout(() => setConfetti([]), 2000);
  };

  /* === Scroll Reveal to Trigger Everything === */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateNumbers(true);
          triggerConfetti();
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  /* === Animate Numbers === */
  const animTime = (value) => (animateNumbers ? value : 0);

  /* === Changelog Data === */
  const changelogs = [
    {
      version: "v2.0.0",
      date: "1 January 2026",
      comingSoon: true,
      changes: [
        { text: "Major overhaul → Version 2.0.0 launch.", type: "update" },
        { text: "Introduced AI-powered chat features.", type: "update" },
        { text: "Enhanced security protocols.", type: "update" },
        { text: "Fixed sync issues across devices.", type: "fix" },
        { text: "Resolved memory leak in background processes.", type: "bug" },
      ],
    },
    {
      version: "v1.1.0",
      date: "8 December 2025",
      changes: [
        { text: "Added notifications system.", type: "update" },
        { text: "Integrated third-party plugins support.", type: "update" },
        { text: "Optimized load times for large datasets.", type: "update" },
      ],
    },
    {
      version: "v1.0.0",
      date: "6 December 2025",
      comingSoon: false,
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
    <main ref={ref} className="min-h-screen pt-28 pb-24 relative overflow-hidden">

      {/* Animated Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.24, scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 35% 18%, var(--accent)/0.17 0%, transparent 70%),
            radial-gradient(circle at 80% 75%, var(--accent-dark)/0.18 0%, transparent 75%)
          `,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <History className="w-14 h-14 text-[var(--accent)] mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--accent), var(--accent-dark))",
            }}>
            Changelog
          </h1>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-20 text-center"
        >
          <p className="opacity-80 mb-3">Until Version 2.0.0 Release</p>

          <div className="flex justify-center gap-4">
            {Object.entries(timeLeft).map(([label, val], i) => (
              <motion.div
                key={i}
                animate={{ scale: animateNumbers ? 1 : 0.7 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-[var(--background)]/60 backdrop-blur-xl border border-[var(--border)] px-4 py-3 rounded-xl"
              >
                <span className="text-3xl font-bold text-[var(--accent)]">
                  {animTime(val)}
                </span>
                <p className="text-[10px] uppercase opacity-70 mt-1">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute left-6 w-[3px] bg-[var(--accent)]/30 rounded-full h-full"
        />

        <div className="space-y-16 relative">
          {changelogs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative pl-12"
            >
              {/* Node */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.45 }}
                className={`absolute left-0 top-2 w-9 h-9 rounded-full flex items-center justify-center
                ${log.comingSoon
                    ? "bg-[var(--accent)] text-black shadow-[0_0_18px_var(--accent)/50]"
                    : "bg-[var(--accent)]/15 text-[var(--accent)]"
                }`}
              >
                <Stars className="w-4" />
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -3,
                  transition: { type: "spring", stiffness: 240, damping: 20 },
                }}
                className={`p-7 rounded-2xl backdrop-blur-xl border bg-[var(--background)]/60
                ${log.comingSoon && "border-[var(--accent)] shadow-[0_12px_35px_-8px_var(--accent)/45]"}
                `}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-extrabold text-[var(--accent)]">{log.version}</span>
                  <span className="text-sm opacity-75 flex items-center gap-2">
                    <CalendarDays size={15}/> {log.date}
                  </span>
                </div>

                <ul className="space-y-3">
                  {log.changes.map((c, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="flex gap-3 text-[15px]"
                    >
                      {c.type === "bug" && <Bug className={`${badgeColor(c.type)} w-5`} />}
                      {c.type === "fix" && <Hammer className={`${badgeColor(c.type)} w-5`} />}
                      {c.type === "update" && <Sparkle className={`${badgeColor(c.type)} w-5`} />}
                      <span>{c.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CONFETTI */}
        <AnimatePresence>
          {confetti.map((c) => (
            <motion.span
              key={c.id}
              initial={{ opacity: 0, y: -20, x: `${c.x}%`, rotate: 0 }}
              animate={{ opacity: [1, 1, 0], y: [0, 180], rotate: c.rotate }}
              exit={{ opacity: 0 }}
              transition={{ duration: c.duration, delay: c.delay }}
              className="absolute top-0 w-2 h-2 rounded-sm"
              style={{
                background: `hsl(${Math.random() * 360}, 85%, 60%)`,
              }}
            />
          ))}
        </AnimatePresence>

      </div>
    </main>
  );
}
