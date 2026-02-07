"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Impact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      ref={ref}
      className="
        relative py-28 overflow-hidden
        bg-[var(--background)]
        text-[var(--foreground)]
      "
    >
      {/* ===== GOLD DIAGONAL BACKGROUND ===== */}
      <div
        aria-hidden
        className="
          absolute inset-0
          bg-[var(--accent)]
          opacity-15
          transform -skew-y-3
          origin-top-left
        "
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT : IMPACT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <span className="text-sm font-medium text-[var(--accent)] tracking-wide">
              Impact
            </span>

            <div className="flex items-baseline gap-3">
              <span className="text-7xl md:text-8xl font-bold text-[var(--accent)]">
                10+
              </span>
              <span className="text-xl font-medium">
                Projects Delivered
              </span>
            </div>

            <p className="text-[var(--foreground)]/70 max-w-sm">
              Each project focuses on clarity, usability, and measurable
              outcomes — not just visuals.
            </p>
          </motion.div>

          {/* ================= RIGHT : TEXT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
              Design that proves its value
            </h3>

            <p className="text-lg text-[var(--foreground)]/70 leading-relaxed">
              I work closely with brands and teams to build digital products
              that are not only visually refined, but also deliver real,
              long-term value.
            </p>

            <p className="text-lg text-[var(--foreground)]/70 leading-relaxed">
              From strategy to execution, every decision is intentional
              and results-driven.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
