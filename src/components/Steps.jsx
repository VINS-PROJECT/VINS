"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Lightbulb, Users } from "lucide-react";

export default function PortfolioSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  const items = [
    {
      title: "Projects Delivered",
      desc: "End-to-end digital products built with clarity and long-term maintainability.",
      icon: Code,
    },
    {
      title: "Creative Portfolio",
      desc: "Balanced work combining usability, aesthetics, and scalability.",
      icon: Palette,
    },
    {
      title: "Design Philosophy",
      desc: "Design decisions driven by purpose, not trends.",
      icon: Lightbulb,
    },
    {
      title: "Collaboration",
      desc: "Working closely with teams to deliver aligned outcomes.",
      icon: Users,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-32 bg-[var(--background)] text-[var(--foreground)]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <span className="text-sm tracking-widest text-[var(--accent)]">
            PORTFOLIO
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            Thoughtful work,
            <br />
            <span className="text-[var(--accent)]">built to last.</span>
          </h2>

          <p className="mt-6 text-lg text-[var(--foreground)]/70">
            Every project is crafted with intention — focusing on clarity,
            usability, and measurable impact beyond visuals.
          </p>
        </motion.div>

        {/* ================= LIST ================= */}
        <div className="divide-y divide-[var(--border)]">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="
                  group
                  py-8
                  flex flex-col md:flex-row md:items-center
                  md:justify-between
                  gap-6
                "
              >
                {/* LEFT */}
                <div className="flex items-center gap-4">
                  <div
                    className="
                      w-12 h-12
                      rounded-xl
                      border border-[var(--border)]
                      flex items-center justify-center
                      transition-all duration-300
                      group-hover:border-[var(--accent)]
                      group-hover:bg-[var(--accent)]/10
                    "
                  >
                    <Icon
                      size={20}
                      className="text-[var(--accent)]"
                    />
                  </div>

                  <h3 className="text-lg font-medium">
                    {item.title}
                  </h3>
                </div>

                {/* RIGHT */}
                <p className="
                  max-w-md
                  text-[var(--foreground)]/70
                  text-sm md:text-base
                ">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}