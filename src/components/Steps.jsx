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
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start"
        >
          <div
            className="relative w-72 h-80 md:w-80 md:h-[22rem] perspective cursor-pointer"
            onClick={() => setFlip(!flip)}
          >
            <motion.div
              animate={{ rotateY: flip ? 180 : 0 }}
              transition={{ duration: 0.8 }}
              style={{ transformStyle: "preserve-3d" }}
              className="w-full h-full"
            >
              {/* FRONT */}
              <div
                className="absolute inset-0 rounded-3xl overflow-hidden border border-[var(--accent)]/30 
                shadow-lg bg-[var(--background)]/80 backface-hidden"
                style={{ WebkitBackfaceVisibility: "hidden" }}
              >
                <img
                  src="/KVNS.jpg"
                  alt="Kevin Simorangkir"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* BACK */}
              <div
                className="absolute inset-0 rotate-y-180 rounded-3xl border border-[var(--accent)]/35
                flex items-center justify-center px-6 text-center
                bg-[var(--background)]/90 shadow-lg backface-hidden"
                style={{ WebkitBackfaceVisibility: "hidden" }}
              >
                <p className="text-lg font-medium text-[var(--accent)] leading-relaxed italic">
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
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 text-xl md:text-2xl font-signature italic text-[var(--accent)]"
          >
            — Kevin Simorangkir
          </motion.p>
        </motion.div>

        {/* RIGHT — INTERACTION */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-14 md:mt-0 flex flex-col gap-5"
        >
          {sections.map((sec, i) => {
            const isActive = active === i;
            return (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                className="
                  w-full text-left p-6 rounded-2xl border backdrop-blur-xl transition-all duration-500
                  focus:outline-none
                "
                style={{
                  background: isActive
                    ? "color-mix(in srgb, var(--accent), transparent 88%)"
                    : "color-mix(in srgb, var(--background) 85%, transparent)",
                  borderColor: isActive ? "var(--accent)" : "var(--border)",
                  color: isActive ? "var(--accent)" : "var(--foreground)",
                  boxShadow: isActive ? "0 0 14px -2px var(--accent)" : "none",
                }}
                whileHover={{ scale: isActive ? 1.01 : 1.02 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-wide">
                    {sec.title}
                  </h3>

                  {isActive ? (
                    <ArrowUpRight className="w-5" />
                  ) : (
                    <ArrowRight className="w-4 opacity-70" />
                  )}
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="mt-3 text-sm leading-relaxed opacity-90"
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
