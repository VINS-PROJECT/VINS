"use client";

import { motion, AnimatePresence, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const stats = [
    { label: "Projects Completed", value: 10 },
    { label: "Happy Clients", value: 10 },
    { label: "Certificates Earned", value: 12 },
    { label: "Years of Experience", value: 1 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [confetti, setConfetti] = useState([]);

  /* === Counter Animation === */
  useEffect(() => {
    if (!isInView) return;
    controls.start("visible");

    let start = performance.now();
    const duration = 1500;

    const easeOutQuad = (t) => 1 - (1 - t) * (1 - t);

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = easeOutQuad(progress);

      setCounts(stats.map((s) => Math.floor(s.value * eased)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        triggerConfetti();
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, controls]);

  /* === Confetti Burst === */
  const triggerConfetti = () => {
    const items = Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      rotate: Math.random() * 180 - 90,
      delay: Math.random() * 0.2,
      duration: 1.3 + Math.random() * 0.6,
    }));

    setConfetti(items);
    setTimeout(() => setConfetti([]), 2000);
  };

  const cardAnim = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 md:py-20 flex flex-col items-center justify-center bg-[var(--background)] text-[var(--foreground)]"
    >
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3, scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 22% 30%, var(--accent)/0.15 0%, transparent 65%),
            radial-gradient(circle at 82% 75%, var(--accent-dark)/0.22 0%, transparent 70%)
          `,
        }}
      />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="text-center z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(to right, var(--accent), var(--accent-dark))`,
          }}
        >
          Impact & Achievements
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-[var(--foreground)]/85">
          A measurable track record built through craftsmanship, consistency,
          and meaningful collaboration.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full px-6 z-10">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            variants={cardAnim}
            initial="hidden"
            animate={controls}
            custom={i}
            whileHover={{
              y: -8,
              scale: 1.04,
              transition: { type: "spring", stiffness: 240, damping: 22 },
            }}
            className="group p-8 rounded-2xl text-center backdrop-blur-xl bg-[var(--background)]/50 border border-[var(--border)] shadow-lg"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.38, scale: 1.08 }}
              transition={{ duration: 0.8 }}
              className="absolute -inset-14 -z-10 bg-[var(--accent)]/18 blur-2xl rounded-full"
            />

            <motion.h3
              key={counts[i]}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 420, damping: 24 }}
              className="text-5xl font-extrabold text-[var(--accent)]"
            >
              {counts[i]}
              {item.label.includes("Years") ? "+" : ""}
            </motion.h3>

            <p className="mt-3 text-sm text-[var(--foreground)]/75">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Confetti */}
      <AnimatePresence>
        {confetti.map((c) => (
          <motion.span
            key={c.id}
            initial={{
              opacity: 0,
              y: -20,
              x: `${c.x}%`,
              rotate: 0,
            }}
            animate={{
              opacity: [1, 1, 0],
              y: [0, 150],
              rotate: c.rotate,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: c.duration, delay: c.delay, ease: "easeOut" }}
            className="absolute top-0 w-2 h-2 rounded-sm"
            style={{
              background: `hsl(${Math.random() * 360}, 85%, 60%)`,
            }}
          />
        ))}
      </AnimatePresence>
    </section>
  );
}
