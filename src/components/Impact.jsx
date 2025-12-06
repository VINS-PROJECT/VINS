"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const stats = [
    { label: "Projects Completed", value: 10 },
    { label: "Happy Clients", value: 10 },
    { label: "Certificates Earned", value: 12 },
    { label: "Years of Experience", value: 1 },
  ];

  useEffect(() => {
    if (!isInView) return;

    controls.start("visible");
    const interval = setInterval(() => {
      setCounts(prev =>
        prev.map((num, i) => {
          const target = stats[i].value;
          return num < target ? Math.min(num + Math.ceil(target / 50), target) : num;
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      className="
        relative overflow-hidden
        py-24 md:py-20
        flex flex-col items-center justify-center
        bg-[var(--background)] text-[var(--foreground)]
        transition-colors duration-500
      "
    >

      {/* BG Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.28 }}
        transition={{ duration: 1.8 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 22% 30%, var(--accent)/0.22 0%, transparent 65%),
            radial-gradient(circle at 80% 70%, var(--accent-dark)/0.25 0%, transparent 75%)
          `,
        }}
      />

      {/* Fade top */}
      <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-[var(--background)] to-transparent" />

      {/* TITLE SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="text-center relative z-10"
      >
        <h2
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(to right, var(--accent), var(--accent-dark))`,
            WebkitTextFillColor: "transparent",
          }}
        >
          Impact & Achievements
        </h2>

        <p className="mt-4 max-w-2xl mx-auto leading-relaxed text-[var(--foreground)]/85">
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
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 0.6,
              delay: i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              group p-8 rounded-2xl text-center relative overflow-hidden

              /* GLASS */
              backdrop-blur-xl
              bg-[var(--background)]/50
              border border-[var(--border)]

              /* SHADOW */
              shadow-[0_8px_25px_-10px_rgba(0,0,0,0.35)]

              /* HOVER */
              hover:-translate-y-2
              hover:bg-[var(--accent)]/[0.12]
              hover:border-[var(--accent)]/50
              hover:shadow-[0_12px_45px_-6px_var(--accent)/38]
              hover:backdrop-saturate-200

              transition-all duration-500 ease-out
            "
            style={{
              WebkitBackdropFilter: "blur(18px)",
              backdropFilter: "blur(18px)",
            }}
          >
            {/* Highlight reflection */}
            <span
              className="
                absolute inset-0 pointer-events-none
                bg-gradient-to-t from-transparent via-white/[0.10] dark:via-white/[0.04] to-transparent
                opacity-0 group-hover:opacity-100
                blur-xl transition-opacity duration-700
              "
            />

            {/* Glow Behind */}
            <span
              className="
                absolute -inset-10 -z-10 
                bg-[var(--accent)]/16 dark:bg-[var(--accent)]/12 
                rounded-full blur-2xl
                opacity-0 group-hover:opacity-40
                transition-all duration-700
              "
            />

            <h3 className="text-5xl font-extrabold tracking-tight text-[var(--accent)]">
              {counts[i]}
              {item.label.includes("Years") ? "+" : ""}
            </h3>

            <p className="mt-3 text-sm tracking-wide text-[var(--foreground)]/75">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Fade bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
    </section>
  );
}
