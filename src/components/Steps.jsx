"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

/* ======================================
   WAVE HIGHLIGHT (CONSISTENT STYLE)
====================================== */
function WaveHighlight({ children }) {
  return (
    <span className="relative inline-block leading-tight">
      <span
        className="relative z-10 bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--accent) 10%, var(--accent-dark) 90%)",
          WebkitTextFillColor: "transparent",
        }}
      >
        {children}
      </span>

      <svg
        className="absolute left-0 bottom-0 w-full h-[8px]"
        viewBox="0 0 200 20"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 10 Q 25 6 50 10 T 100 10 T 150 10 T 200 10"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={{ pathOffset: [0, 1] }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </svg>
    </span>
  );
}

export default function PortfolioSection() {
  const [active, setActive] = useState(0);
  const [flip, setFlip] = useState(false);

  const sections = [
    {
      title: "Projects Delivered",
      desc: "Structured delivery of digital solutions with measurable impact and consistency.",
    },
    {
      title: "Creative Portfolio",
      desc: "A curated body of work focused on usability, aesthetics, and scalability.",
    },
    {
      title: "Design Philosophy",
      desc: "Grounded in clarity, empathy, and long-term value rather than trends.",
    },
    {
      title: "Innovation & Ideas",
      desc: "Transforming abstract ideas into practical, business-ready solutions.",
    },
    {
      title: "Collaboration",
      desc: "Partnering with cross-functional teams to achieve aligned outcomes.",
    },
  ];

  return (
    <section className="relative py-28 md:py-32 bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      {/* BACKDROP */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 18% 30%, var(--accent)/0.08, transparent 60%),
            radial-gradient(circle at 82% 70%, var(--accent-dark)/0.1, transparent 65%)
          `,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:grid md:grid-cols-2 md:gap-20 items-center">

        {/* ================= LEFT — FLIP CARD ================= */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start"
        >
          <div
            className="relative w-72 h-80 md:w-80 md:h-[22rem] cursor-pointer [perspective:1600px]"
            onClick={() => setFlip(!flip)}
          >
            <motion.div
              animate={{ rotateY: flip ? 180 : 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full [transform-style:preserve-3d]"
            >
              {/* FRONT */}
              <div
                className="
                  absolute inset-0 rounded-3xl overflow-hidden
                  backdrop-blur-xl
                  bg-white/45 dark:bg-white/5
                  border border-white/20 dark:border-white/10
                  shadow-[0_12px_45px_rgba(0,0,0,0.14)]
                  [backface-visibility:hidden]
                "
              >
                <img
                  src="/KVNS.jpg"
                  alt="Kevin Simorangkir"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* BACK */}
              <div
                className="
                  absolute inset-0 rotate-y-180 rounded-3xl
                  backdrop-blur-xl
                  bg-white/55 dark:bg-white/6
                  border border-white/20 dark:border-white/10
                  flex items-center justify-center px-6 text-center
                  [backface-visibility:hidden]
                "
              >
                <p className="text-lg font-medium text-[var(--foreground)]/85 leading-relaxed">
                  “Design is not just how it looks —
                  <span className="block mt-1 font-semibold">
                    <WaveHighlight>it’s how it works.</WaveHighlight>
                  </span>”
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
            className="mt-8 text-lg md:text-xl font-medium italic text-[var(--accent)]"
          >
            — Kevin Simorangkir
          </motion.p>
        </motion.div>

        {/* ================= RIGHT — INTERACTIVE LIST ================= */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-16 md:mt-0 flex flex-col gap-4"
        >
          {sections.map((sec, i) => {
            const isActive = active === i;

            return (
              <motion.button
                key={sec.title}
                onClick={() => setActive(i)}
                className={`
                  relative w-full text-left p-6 rounded-2xl
                  backdrop-blur-xl transition-all
                  border
                  ${
                    isActive
                      ? "bg-white/55 dark:bg-white/6 border-[var(--accent)]/40"
                      : "bg-white/40 dark:bg-white/4 border-white/20 dark:border-white/10 hover:bg-white/55"
                  }
                `}
                whileHover={{
                  y: -4,
                  transition: { type: "spring", stiffness: 220, damping: 20 },
                }}
              >
                {/* ACTIVE RAIL */}
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-[var(--accent)]"
                  />
                )}

                <div className="flex items-center justify-between">
                  <h3
                    className={`text-base md:text-lg font-semibold ${
                      isActive
                        ? "text-[var(--accent)]"
                        : "text-[var(--foreground)]"
                    }`}
                  >
                    {sec.title}
                  </h3>

                  <motion.div
                    animate={{
                      rotate: isActive ? 45 : 0,
                      opacity: isActive ? 1 : 0.6,
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

                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="mt-3 text-sm text-[var(--foreground)]/75"
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
