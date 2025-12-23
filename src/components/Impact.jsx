"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const stats = [
    { label: "Projects Delivered", value: 10 },
    { label: "Active Clients", value: 10 },
    { label: "Professional Certificates", value: 12 },
    { label: "Years in Practice", value: 1 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  /* ================= COUNTER ================= */
  useEffect(() => {
    if (!isInView) return;

    const duration = 1400;
    const start = performance.now();

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = easeOut(progress);

      setCounts(stats.map((s) => Math.round(s.value * eased)));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
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
      {/* ================= SOFT BACKDROP ================= */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 25%, var(--accent)/0.08, transparent 60%),
            radial-gradient(circle at 80% 75%, var(--accent-dark)/0.10, transparent 65%)
          `,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold tracking-wide text-[var(--accent)] uppercase">
            Impact
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
            Trusted Results,
            <br className="hidden md:block" /> Measured Transparently
          </h2>

          <p className="mt-4 text-[var(--foreground)]/75">
            Key performance indicators reflecting long-term collaboration,
            delivery consistency, and professional accountability.
          </p>
        </motion.div>

        {/* ================= GLASS CARDS ================= */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.15 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 220, damping: 22 },
              }}
              className="
                relative p-6 md:p-8
                rounded-2xl
                backdrop-blur-xl
                bg-white/50 dark:bg-white/5
                border border-white/20 dark:border-white/10
                shadow-[0_8px_30px_rgba(0,0,0,0.08)]
              "
            >
              {/* subtle glass highlight */}
              <span
                aria-hidden
                className="
                  absolute inset-x-0 top-0 h-px
                  bg-gradient-to-r
                  from-transparent via-white/40 to-transparent
                "
              />

              <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">
                {counts[i]}
                {item.label.includes("Years") && "+"}
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
