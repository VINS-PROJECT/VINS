"use client";
import { motion } from "framer-motion";

export default function WorkWith() {
  const partners = [
    "/Medsel.svg",
    "/DC.svg",
    "/YTZ.svg",
    "/RO.svg",
    "/LLF.svg",
  ];

  return (
    <section
      className="
        relative py-16 md:py-20
        bg-black text-white
        overflow-hidden
      "
    >
      {/* === Soft Gold Glow Background === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 2 }}
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_30%_30%,rgba(226,192,124,0.12),transparent_70%),
          radial-gradient(circle_at_70%_80%,rgba(209,170,96,0.1),transparent_60%)]
        "
      />

      {/* === CONTENT === */}
      <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            text-3xl md:text-4xl font-extrabold
            bg-gradient-to-r from-[#E2C07C] via-[#d6b270] to-[#b99a5e]
            bg-clip-text text-transparent
          "
        >
          Work & Organizational Partners
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 mt-4 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Collaborating with outstanding brands and creative partners worldwide.
        </motion.p>

        {/* === Auto-scroll Logo Reel === */}
        <div className="overflow-hidden relative">
          {/* Edge gradient fade */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

          {/* Continuous Scroll Animation */}
          <motion.div
            className="flex items-center gap-16 md:gap-24"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 22,
              repeat: Infinity,
            }}
          >
            {[...partners, ...partners].map((logo, i) => (
              <div key={i} className="flex-shrink-0">
                <img
                  src={logo}
                  alt="Logo Partner"
                  className="
                    h-10 md:h-12 object-contain
                    grayscale opacity-60
                    hover:grayscale-0 hover:opacity-100 hover:brightness-110
                    transition-all duration-300 ease-out
                  "
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* === Bottom Gradient Transition === */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
