"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const stats = [
    { label: "Projects Completed", value: 128 },
    { label: "Happy Clients", value: 46 },
    { label: "Certificates Earned", value: 12 },
    { label: "Years of Experience", value: 5 },
  ];

  // === Counter Animation ===
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      const interval = setInterval(() => {
        setCounts((prev) =>
          prev.map((num, i) => {
            const target = stats[i].value;
            if (num < target) {
              return Math.min(num + Math.ceil(target / 50), target);
            }
            return num;
          })
        );
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="
        relative overflow-hidden
        py-32 md:py-16
        bg-black
        text-white flex flex-col items-center justify-center
      "
    >
      {/* === Overlay transition from Hero === */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />

      {/* === Title & Description === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-center relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#E2C07C]">
          Impact & Achievements
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
          Every project, design, and collaboration adds value — here’s what I’ve
          built and achieved through experience and dedication.
        </p>
      </motion.div>

      {/* === Stats Grid === */}
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
              p-8 rounded-2xl text-center
              bg-[#111]/70 border border-[#E2C07C]/20
              hover:border-[#E2C07C]/50 hover:bg-[#E2C07C]/5
              transition-all duration-500 ease-out
              hover:scale-[1.04]
            "
          >
            <h3 className="text-5xl font-extrabold text-[#E2C07C]">
              {counts[i]}
              {item.label.includes("Years") ? "+" : ""}
            </h3>
            <p className="mt-3 text-gray-400 text-sm tracking-wide">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* === Bottom Gradient Transition === */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
