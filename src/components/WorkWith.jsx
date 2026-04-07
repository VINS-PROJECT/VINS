"use client";

import {
  motion,
  useInView,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Award, TrendingUp, Zap } from "lucide-react";

export default function WorkWith() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Users, label: "Clients", value: 30, suffix: "+" },
    { icon: Award, label: "Projects", value: 50, suffix: "+" },
    { icon: TrendingUp, label: "Success Rate", value: 98, suffix: "%" },
    { icon: Zap, label: "Experience", value: 5, suffix: "+ Years" },
  ];

  const partners = [
    { src: "/Medsel.svg", name: "Medsel" },
    { src: "/DC.svg", name: "DC" },
    { src: "/YTZ.svg", name: "YTZ" },
    { src: "/RO.svg", name: "RO" },
    { src: "/LLF.svg", name: "LLF" },
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
      {/* ===== BACKGROUND (CLEAN) ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[var(--accent)]/10" />
        <div className="absolute w-[400px] h-[400px] bg-[var(--accent)]/20 blur-[120px] rounded-full top-[-120px] left-[-120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-20">

        {/* ================= TOP ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-sm tracking-widest text-[var(--accent)]">
              TRUSTED PARTNERSHIPS
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              Trusted by teams
              <br />
              across organizations
            </h2>

            <p className="text-lg text-[var(--foreground)]/70 max-w-md">
              Long-term collaborations built on clarity, reliability,
              and shared outcomes — not just delivery.
            </p>
          </motion.div>

          {/* RIGHT (STATS) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              grid grid-cols-2 gap-6
              border border-[var(--border)]
              rounded-2xl p-6
              bg-white/70 backdrop-blur-xl
            "
          >
            {stats.map((stat, i) => (
              <StatItem key={i} stat={stat} inView={inView} />
            ))}
          </motion.div>
        </div>

        {/* ================= LOGO MARQUEE ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-wide text-[var(--foreground)]/50 text-center">
            Worked with
          </p>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-16 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...partners, ...partners].map((p, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center h-16 w-32 opacity-60 hover:opacity-100 transition"
                >
                  <img
                    src={p.src}
                    alt={p.name}
                    className="h-10 object-contain"
                  />
                </div>
              ))}
            </motion.div>

            {/* fade edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--background)] to-transparent" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--background)] to-transparent" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* ================= STAT ITEM ================= */
function StatItem({ stat, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = stat.value;
    const duration = 1000;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [inView, stat.value]);

  const Icon = stat.icon;

  return (
    <div
      className="
        group space-y-2
        transition-all duration-300
        hover:translate-y-[-2px]
      "
    >
      <Icon size={18} className="text-[var(--accent)]" />

      <div className="text-2xl font-semibold">
        {count}
        {stat.suffix}
      </div>

      <div className="text-xs text-[var(--foreground)]/60">
        {stat.label}
      </div>
    </div>
  );
}