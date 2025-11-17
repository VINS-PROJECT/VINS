"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const stats = [
    { label: "Projects Completed", value: 10 },
    { label: "Happy Clients", value: 10 },
    { label: "Certificates Earned", value: 12 },
    { label: "Years of Experience", value: 1 },
  ];

  // Counter Animation Fix
  useEffect(() => {
    if (!isInView) return;

    controls.start("visible");

    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((num, i) => {
          const target = Number(stats[i].value); // FIXED: ensure number
          if (num < target) {
            return Math.min(num + Math.ceil(target / 50), target);
          }
          return num;
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, controls]); // FIXED: controls added

  return (
    <section
      ref={ref}
      className="
        relative overflow-hidden
        py-24 md:py-20
        flex flex-col items-center justify-center
        bg-[var(--background)] text-[var(--foreground)]
        transition-colors duration-500
      "
    >
      {/* === PREMIUM GLOW BG === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 22% 30%, var(--accent)/0.30 0%, transparent 60%),
            radial-gradient(circle at 85% 75%, var(--accent-dark)/0.25 0%, transparent 65%)
          `,
        }}
      />

      {/* TOP FADE */}
      <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-[var(--background)] to-transparent" />

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="text-center relative z-10"
      >
        <h2
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(to right, var(--accent), var(--accent-dark))`,
          }}
        >
          Impact & Achievements
        </h2>

        <p className="mt-4 max-w-2xl mx-auto leading-relaxed text-[var(--foreground)]/70">
          A measurable track record built through craftsmanship, consistency,
          and meaningful collaboration.
        </p>
      </motion.div>

      {/* === GRID === */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full px-6 relative z-10">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 0.6,
              delay: i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              group p-8 rounded-2xl text-center backdrop-blur-xl
              
              /* CARD PREMIUM */
              bg-[var(--foreground)]/[0.03]
              border border-[var(--foreground)]/10
              shadow-[0_4px_22px_-6px_rgba(0,0,0,0.15)]

              /* HOVER */
              hover:-translate-y-1.5
              hover:shadow-[0_8px_32px_-4px_var(--accent)]
              hover:border-[var(--accent)]/40
              hover:bg-[var(--accent)]/[0.06]

              transition-all duration-500
            "
          >
            <h3 className="text-5xl font-extrabold tracking-tight" style={{ color: "var(--accent)" }}>
              {counts[i]}
              {item.label.includes("Years") ? "+" : ""}
            </h3>

            <p className="mt-3 text-sm tracking-wide text-[var(--foreground)]/70">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
    </section>
  );
}
