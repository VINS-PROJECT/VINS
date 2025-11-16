"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function PortfolioSection() {
  const [active, setActive] = useState(0);
  const [flip, setFlip] = useState(false);

  const GOLD = "var(--accent)";
  const BORDER = "var(--border)";

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
    <section
      className="
        relative overflow-hidden 
        py-28 md:py-32
        bg-[var(--background)] text-[var(--foreground)]
        transition-colors duration-500
      "
    >
      <div className="max-w-6xl mx-auto px-6 md:flex md:items-center md:gap-16 relative z-10">

        {/* === LEFT: FLIP PHOTO === */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-80 h-96 perspective cursor-pointer"
            onClick={() => setFlip(!flip)}
          >
            <div
              className={`
                relative w-full h-full duration-700 transform-style-preserve-3d
                ${flip ? "rotate-y-180" : ""}
              `}
            >
              {/* FRONT */}
              <div
                className="
                  absolute inset-0 backface-hidden rounded-[2.5rem] overflow-hidden
                  border border-[var(--accent)]/35 bg-[var(--background)]/90
                  shadow-[0_8px_40px_-10px_rgba(0,0,0,0.25)]
                "
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-10" />
                <img
                  src="/KVNS.jpg"
                  alt="Kevin Simorangkir"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* BACK */}
              <div
                className="
                  absolute inset-0 rotate-y-180 backface-hidden rounded-[2.5rem]
                  bg-[var(--background)]/90 border border-[var(--accent)]/35 p-6 
                  flex items-center justify-center text-center
                  shadow-[0_8px_40px_-10px_rgba(0,0,0,0.25)]
                "
              >
                <p className="text-lg font-medium text-[var(--accent)] leading-relaxed italic">
                  “Design is not just what it looks like —  
                  <span className="font-semibold"> it’s how it works.</span>”
                </p>
              </div>
            </div>
          </motion.div>

          {/* SIGNATURE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 text-2xl font-signature text-[var(--accent)] italic"
          >
            — Kevin Simorangkir
          </motion.p>
        </motion.div>

        {/* === RIGHT: ACCORDION === */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-0 md:w-1/2 flex flex-col gap-6"
        >
          {sections.map((sec, i) => (
            <motion.div
              key={i}
              onClick={() => setActive(i)}
              whileHover={{ scale: active === i ? 1 : 1.015 }}
              className={`
                cursor-pointer p-6 rounded-2xl border transition-all duration-400
                backdrop-blur-xl
                ${
                  active === i
                    ? `
                      bg-[var(--accent)]/18 
                      border-[var(--accent)]/50 
                      shadow-[0_0_20px_-4px_var(--accent)]
                      text-[var(--accent)]
                      `
                    : `
                      bg-[var(--background)]/40 dark:bg-black/40 
                      border border-[var(--border)] dark:border-white/10 
                      text-[var(--foreground)]/70
                      hover:bg-[var(--accent)]/12 
                      hover:border-[var(--accent)]/40
                      hover:shadow-[0_0_18px_-4px_var(--accent)]
                      `
                }
              `}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold tracking-wide">
                  {sec.title}
                </h3>

                {active === i ? (
                  <ArrowUpRight className="w-5 h-5 text-[var(--accent)]" />
                ) : (
                  <ArrowRight className="w-4 h-4 text-[var(--accent)]/70" />
                )}
              </div>

              {active === i && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-sm leading-relaxed text-[var(--accent)]/90"
                >
                  {sec.desc}
                </motion.p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* BOTTOM FADE */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-24 
          bg-gradient-to-t 
          from-[var(--background)] 
          to-transparent 
          pointer-events-none
        "
      />
    </section>
  );
}
