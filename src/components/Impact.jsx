"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ======================================
   WAVE HIGHLIGHT — CLEAN & SUBTLE
====================================== */
function WaveHighlight({ children }) {
  return (
    <span className="relative inline-block">
      <span
        className="relative z-10 bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--accent), var(--accent-dark))",
          WebkitTextFillColor: "transparent",
        }}
      >
        {children}
      </span>

      <svg
        className="absolute left-0 -bottom-1 w-full h-[6px]"
        viewBox="0 0 200 20"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 10 Q 30 6 60 10 T 120 10 T 180 10"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ pathOffset: [0, 1] }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </svg>
    </span>
  );
}

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const stats = [
    { label: "Projects Delivered", value: 10 },
    { label: "Active Clients", value: 10 },
    { label: "Professional Certificates", value: 12 },
    { label: "Years in Practice", value: 1, suffix: "+" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  /* ================= COUNTER (SMOOTH) ================= */
  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const start = performance.now();

    const easeOut = (t) => 1 - Math.pow(1 - t, 4);

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = easeOut(progress);

      setCounts(stats.map((s) => Math.round(s.value * eased)));

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="
        relative py-28
        bg-[var(--background)]
        text-[var(--foreground)]
        overflow-hidden
      "
    >
      {/* ================= BACKDROP ================= */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 15% 25%, var(--accent)/0.08, transparent 60%),
            radial-gradient(circle at 85% 70%, var(--accent-dark)/0.10, transparent 65%)
          `,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold tracking-wide uppercase text-[var(--accent)]">
            Impact
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
            Trusted Results,{" "}
            <WaveHighlight>Measured Transparently</WaveHighlight>
          </h2>

          <p className="mt-4 text-[var(--foreground)]/75">
            Clear indicators that reflect delivery consistency, professional
            growth, and long-term collaboration.
          </p>
        </motion.div>

        {/* ================= STATS ================= */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.15 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 180, damping: 20 },
              }}
              className="
                group relative
                p-6 md:p-8
                rounded-2xl
                backdrop-blur-xl
                bg-white/60 dark:bg-white/5
                border border-white/20 dark:border-white/10
                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              "
            >
              {/* Glass top line */}
              <span
                aria-hidden
                className="
                  absolute inset-x-0 top-0 h-px
                  bg-gradient-to-r
                  from-transparent via-white/40 to-transparent
                "
              />

              {/* Hover glow */}
              <span
                aria-hidden
                className="
                  absolute -z-10 inset-0 rounded-2xl
                  bg-[var(--accent)]/15 blur-2xl
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "
              />

              <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">
                {counts[i]}
                {item.suffix}
              </div>

              <div className="mt-2 text-sm text-[var(--foreground)]/70">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
