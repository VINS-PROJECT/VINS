"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function PortfolioSection() {
  const [active, setActive] = useState(0);
  const [flip, setFlip] = useState(false);

  const sections = [
    {
      title: "Projects Delivered",
      desc: "Crafting meaningful designs that bring ideas to life and create lasting impact.",
    },
    {
      title: "Creative Portfolio",
      desc: "Showcasing innovative digital experiences that blend aesthetics and usability.",
    },
    {
      title: "Design Philosophy",
      desc: "Centering empathy, clarity, and timeless principles in every design decision.",
    },
    {
      title: "Innovation & Ideas",
      desc: "Turning conceptual thoughts into tangible solutions that inspire and connect.",
    },
    {
      title: "Collaboration",
      desc: "Working closely with teams to transform visions into powerful outcomes.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-6 md:grid md:grid-cols-2 md:gap-16 items-center">

        {/* LEFT — FLIP CARD */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start"
        >
          <div
            className="relative w-72 h-80 md:w-80 md:h-[22rem] cursor-pointer [perspective:1300px]"
            onClick={() => setFlip(!flip)}
          >
            <motion.div
              animate={{ rotateY: flip ? 180 : 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full [transform-style:preserve-3d]"
            >
              {/* FRONT */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="absolute inset-0 rounded-3xl overflow-hidden
                border border-[var(--border)]
                shadow-[0_10px_35px_-5px_rgba(0,0,0,0.35)]
                [backface-visibility:hidden]"
              >
                <img
                  src="/KVNS.jpg"
                  alt="Kevin Simorangkir"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* BACK */}
              <div className="
                absolute inset-0 rotate-y-180 rounded-3xl
                border border-[var(--border)] flex items-center justify-center
                px-6 text-center bg-[var(--background)]
                [backface-visibility:hidden]
              ">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2, scale: 1.08 }}
                  className="absolute inset-0 bg-[var(--accent)]/10 blur-2xl"
                />
                <p className="relative text-lg font-medium text-[var(--accent)] leading-relaxed italic">
                  “Design is not just what it looks like —   
                  <span className="font-semibold"> it’s how it works.</span>”
                </p>
              </div>
            </motion.div>
          </div>

          {/* SIGNATURE */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-8 text-xl md:text-2xl font-signature italic text-[var(--accent)]"
          >
            — Kevin Simorangkir
          </motion.p>
        </motion.div>

        {/* RIGHT — INTERACTION */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-14 md:mt-0 flex flex-col gap-5"
        >
          {sections.map((sec, i) => {
            const isActive = active === i;

            return (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                className={`
                  group w-full text-left p-6 rounded-2xl border
                  backdrop-blur-xl transition-all duration-500
                  flex flex-col gap-2
                  ${
                    isActive
                      ? "bg-[var(--accent)]/18 border-[var(--accent)] text-[var(--accent)] shadow-[0_10px_40px_-8px_var(--accent)/35]"
                      : "bg-[var(--background)]/40 border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--accent)]/12 hover:border-[var(--accent)]/35"
                  }
                `}
                whileHover={{
                  scale: isActive ? 1.02 : 1.05,
                  x: isActive ? 6 : 10,
                  transition: { type: "spring", stiffness: 220, damping: 18 },
                }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-wide">
                    {sec.title}
                  </h3>
                  <motion.div
                    animate={{
                      rotate: isActive ? 45 : 0,
                      opacity: isActive ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    {isActive ? (
                      <ArrowUpRight className="w-5" />
                    ) : (
                      <ArrowRight className="w-4" />
                    )}
                  </motion.div>
                </div>

                {/* DESCRIPTION */}
                <AnimatePresence mode="popLayout">
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="text-sm opacity-90"
                    >
                      {sec.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
