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
      className="py-28 bg-[var(--background)] text-[var(--foreground)]"
    >
      <div className="max-w-4xl mx-auto px-6 text-center space-y-10">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="text-sm font-medium tracking-wide text-[var(--accent)]">
            Portfolio
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Thoughtful work,
            <br />
            <span className="text-[var(--accent)]">built to last.</span>
          </h2>

          {/* Gold divider */}
          <div className="mx-auto h-[3px] w-20 bg-[var(--accent)] rounded-full" />

          <p className="text-lg text-[var(--foreground)]/70 max-w-2xl mx-auto">
            Every project is crafted with intention — focusing on clarity,
            usability, and measurable impact beyond visuals.
          </p>
        </motion.div>

        {/* ================= ITEMS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="
                  p-6 rounded-2xl
                  border border-[var(--border)]
                  bg-[var(--card)]
                  text-center
                "
              >
                <div
                  className="
                    w-12 h-12 mx-auto mb-4
                    rounded-xl
                    bg-[var(--accent)]/15
                    flex items-center justify-center
                  "
                >
                  <Icon size={20} className="text-[var(--accent)]" />
                </div>

                <h3 className="font-medium mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--foreground)]/65">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
