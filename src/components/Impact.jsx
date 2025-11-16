"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const GOLD = "var(--accent)";

  const stats = [
    { label: "Projects Completed", value: "10" },
    { label: "Happy Clients", value: "10" },
    { label: "Certificates Earned", value: "12" },
    { label: "Years of Experience", value: "1" },
  ];

  // Counter animation
  useEffect(() => {
    if (!isInView) return;

    controls.start("visible");

    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((num, i) => {
          const target = stats[i].value;
          if (num < target) {
            return Math.min(num + Math.ceil(target / 60), target);
          }
          return num;
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="
        relative overflow-hidden 
        py-20 md:py-12 
        flex flex-col items-center justify-center
        bg-[var(--background)] text-[var(--foreground)]
        transition-colors duration-500
      "
    >
      {/* BACKGROUND GLOW */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, ${GOLD}33 0%, transparent 60%),
            radial-gradient(circle at 80% 70%, ${GOLD}22 0%, transparent 65%)
          `,
        }}
      />

      {/* TOP FADE */}
      <div
        className="
          absolute top-0 left-0 w-full h-32 
          bg-gradient-to-b 
          from-[var(--background)] 
          to-transparent 
          pointer-events-none
        "
      />

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="text-center relative z-10"
      >
        <h2
          className="
            text-4xl md:text-5xl font-extrabold
            bg-clip-text text-transparent
          "
          style={{
            backgroundImage: `linear-gradient(to right, var(--accent), var(--accent-dark))`,
          }}
        >
          Impact & Achievements
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          A measurable track record built through craftsmanship, consistency,
          and meaningful collaboration.
        </p>
      </motion.div>

      {/* STATS GRID */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full px-6 relative z-10">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="
              group p-8 rounded-2xl text-center
              backdrop-blur-xl

              /* CARD */
              bg-white/40 dark:bg-white/5
              border border-[var(--border)] dark:border-white/10
              shadow-sm

              /* HOVER EFFECT */
              hover:shadow-[0_0_26px_-4px_var(--accent)]
              hover:border-[var(--accent)]/50
              hover:bg-[var(--accent)]/8
              hover:-translate-y-1

              transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
            "
          >
            <h3
              className="text-5xl font-extrabold"
              style={{ color: "var(--accent)" }}
            >
              {counts[i]}
              {item.label.includes("Years") ? "+" : ""}
            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm tracking-wide">
              {item.label}
            </p>
          </motion.div>
        ))}
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
