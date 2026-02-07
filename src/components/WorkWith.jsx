"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Award, TrendingUp, Zap } from "lucide-react";

export default function WorkWith() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  const stats = [
    { icon: Users, label: "Clients", value: "30+" },
    { icon: Award, label: "Projects", value: "50+" },
    { icon: TrendingUp, label: "Success Rate", value: "98%" },
    { icon: Zap, label: "Experience", value: "5+ Years" },
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
      className="py-28 bg-[var(--background)] text-[var(--foreground)]"
    >
      <div className="max-w-5xl mx-auto px-6 text-center space-y-16">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="text-sm font-medium tracking-wide text-[var(--accent)]">
            Trusted Partnerships
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Trusted by teams
            <br />
            <span className="text-[var(--accent)]">
              across organizations
            </span>
          </h2>

          <div className="mx-auto h-[3px] w-20 bg-[var(--accent)] rounded-full" />

          <p className="max-w-2xl mx-auto text-lg text-[var(--foreground)]/70">
            Long-term collaborations built on clarity, reliability,
            and shared outcomes — not just delivery.
          </p>
        </motion.div>

        {/* ================= STATS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)]"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/15 flex items-center justify-center">
                    <Icon size={20} className="text-[var(--accent)]" />
                  </div>
                </div>

                <div className="text-3xl font-semibold text-[var(--accent)]">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--foreground)]/60 mt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* ================= PARTNERS (LEFT–RIGHT MOTION) ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-wide text-[var(--foreground)]/50">
            Worked with
          </p>

          <div className="flex flex-wrap justify-center gap-10 overflow-hidden">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + i * 0.08,
                }}
                whileHover={{ scale: 1.05 }}
                className="
                  flex items-center justify-center
                  h-16 w-32
                  opacity-70 hover:opacity-100
                  transition-opacity
                "
              >
                <motion.img
                  src={p.src}
                  alt={p.name}
                  className="h-12 object-contain"
                  animate={{
                    x: [-8, 8, -8],
                  }}
                  transition={{
                    duration: 6 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
