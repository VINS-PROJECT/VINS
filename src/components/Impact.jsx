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

  // === 🔢 Counter Animasi ===
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
        py-32 md:py-40
        bg-gradient-to-b from-[#0b0f15] via-[#070b11] to-[#06090e]
        text-white flex flex-col items-center justify-center
      "
    >
      {/* === Gradients & Glows === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 2 }}
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_30%_30%,rgba(0,180,255,0.15),transparent_70%),
          radial-gradient(circle_at_70%_80%,rgba(0,255,200,0.12),transparent_60%)]
        "
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-full blur-[180px] opacity-25"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-[220px] opacity-25"
      />

      {/* === Overlay untuk nyatu dengan hero === */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0b0f15] to-transparent pointer-events-none" />

      {/* === Title & Description === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-center relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Impact & Achievements
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
          Every project, design, and collaboration adds value — here’s what I’ve
          built and achieved so far through experience and passion.
        </p>
      </motion.div>

      {/* === Stat Cards === */}
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
              bg-white/5 border border-white/10 backdrop-blur-lg
              hover:scale-[1.05] hover:border-cyan-400/40
              transition-all duration-500 ease-out
              shadow-[0_0_40px_rgba(59,130,246,0.05)]
            "
          >
            <h3 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]">
              {counts[i]}
              {item.label.includes("Years") ? "+" : ""}
            </h3>
            <p className="mt-3 text-gray-400 text-sm tracking-wide">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* === Gradient bawah biar transisi ke section selanjutnya halus === */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#06090e] to-transparent pointer-events-none" />
    </section>
  );
}
