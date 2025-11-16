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
        relative py-18 md:py-18 
        transition-colors duration-500
        bg-[var(--background)] text-[var(--foreground)]
        overflow-hidden
      "
    >
      {/* === Gold Glow Background (Light/Dark) === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 2 }}
        className="
          absolute inset-0
          pointer-events-none
        "
        style={{
          background: `
            radial-gradient(circle at 25% 25%, var(--accent)15 0%, transparent 70%),
            radial-gradient(circle at 80% 70%, var(--accent-dark)10 0%, transparent 65%)
          `,
        }}
      />

      {/* === CONTENT === */}
      <div className="max-w-6xl mx-auto text-center px-6 relative z-10">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            text-3xl md:text-4xl font-extrabold tracking-wide
            bg-gradient-to-r from-[var(--accent)] via-[var(--accent-dark)] to-[var(--accent)]
            bg-clip-text text-transparent
          "
        >
          Work & Organizational Partners
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="
            mt-4 mb-14 max-w-2xl mx-auto leading-relaxed
            text-[var(--foreground)]/65
          "
        >
          Collaborating with trusted brands, creative teams, and powerful communities worldwide.
        </motion.p>

        {/* === Logo Auto Scroll === */}
        <div className="overflow-hidden relative">

          {/* Edge Fade — follow theme */}
          <div className="
            absolute left-0 top-0 h-full w-24 
            bg-gradient-to-r 
            from-[var(--background)] 
            to-transparent 
            z-20
          " />
          <div className="
            absolute right-0 top-0 h-full w-24 
            bg-gradient-to-l 
            from-[var(--background)] 
            to-transparent 
            z-20
          " />

          {/* Continuous Loop Motion */}
          <motion.div
            className="flex items-center gap-16 md:gap-24"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {[...partners, ...partners].map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={logo}
                  alt="Partner Logo"
                  className="
                    h-10 md:h-12 object-contain
                    grayscale opacity-60
                    hover:grayscale-0 hover:opacity-100 hover:brightness-110
                    transition-all duration-300 ease-out
                    hover:drop-shadow-[0_0_12px_var(--accent)]
                  "
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* Bottom Fade – follow theme */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-32 
          bg-gradient-to-t 
          from-[var(--background)] 
          to-transparent 
          pointer-events-none
        "
      />
    </section>
  );
}
