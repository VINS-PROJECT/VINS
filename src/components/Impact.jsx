"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Impact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  const stats = [
    { value: "10+", label: "Projects Delivered" },
    { value: "5+", label: "Happy Clients" },
    { value: "2+", label: "Years Experience" },
  ];

  return (
    <section
      ref={ref}
      className="
        relative py-28 overflow-hidden
        bg-[var(--background)]
        text-[var(--foreground)]
      "
    >
      {/* ===== CREAM BACKGROUND LAYER ===== */}
      <div className="absolute inset-0 -z-10">
        {/* base cream */}
        <div className="absolute inset-0 bg-[var(--accent)]/20" />

        {/* gradient depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/30 via-transparent to-transparent" />

        {/* glow */}
        <div className="absolute w-[500px] h-[500px] bg-[var(--accent)]/30 blur-[140px] rounded-full top-[-120px] left-[-120px]" />
        <div className="absolute w-[400px] h-[400px] bg-[var(--accent)]/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />
      </div>

      {/* divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-[var(--border)]/60" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm tracking-widest text-[var(--accent)]">
            IMPACT
          </span>

          <h3 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Results that speak for themselves
          </h3>

          <p className="mt-4 text-lg text-[var(--foreground)]/70">
            Every project is crafted with purpose — combining design,
            performance, and measurable outcomes.
          </p>
        </motion.div>

        {/* ===== STATS GRID ===== */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="
                relative
                rounded-2xl
                border border-[var(--border)]
                bg-[var(--background)]/70
                backdrop-blur-xl

                p-8
                text-center

                transition-all duration-300
                hover:border-[var(--accent)]
                hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]
              "
            >
              {/* hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-[var(--accent)]/10 opacity-0 hover:opacity-100 transition" />

              <div className="relative">
                <div className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--accent)]">
                  {stat.value}
                </div>

                <div className="mt-2 text-sm md:text-base text-[var(--foreground)]/70">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}