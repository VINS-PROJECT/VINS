"use client";

import { motion, useAnimation } from "framer-motion";

/* ======================================
   WAVE HIGHLIGHT — SUBTLE
====================================== */
function WaveHighlight({ children }) {
  return (
    <span className="relative inline-block">
      <span
        className="relative z-10 bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--accent), var(--accent-dark))",
          WebkitTextFillColor: "transparent",
        }}
      >
        {children}
      </span>

      <svg
        className="absolute left-0 -bottom-1 w-full h-[6px]"
        viewBox="0 0 200 20"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 10 Q 30 6 60 10 T 120 10 T 180 10"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ pathOffset: [0, 1] }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </svg>
    </span>
  );
}

export default function WorkWith() {
  const controls = useAnimation();

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
        relative py-28
        bg-[var(--background)]
        text-[var(--foreground)]
        overflow-hidden
      "
    >
      {/* ================= BACKDROP ================= */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 22% 28%, var(--accent)/0.08, transparent 60%),
            radial-gradient(circle at 82% 72%, var(--accent-dark)/0.10, transparent 65%)
          `,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* ================= TITLE ================= */}
        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          Work & <WaveHighlight>Organizational Partners</WaveHighlight>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          viewport={{ once: true }}
          className="mt-4 mb-16 max-w-xl mx-auto text-[var(--foreground)]/75"
        >
          Trusted collaborations with organizations, brands, and professional
          teams across diverse industries.
        </motion.p>

        {/* ================= LOGO MARQUEE ================= */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() =>
            controls.start({
              x: ["0%", "-50%"],
              transition: {
                duration: 28,
                ease: "linear",
                repeat: Infinity,
              },
            })
          }
        >
          {/* Edge fade */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />

          <motion.div
            className="flex items-center gap-16 md:gap-24"
            animate={controls}
            initial={{
              x: ["0%", "-50%"],
              transition: {
                duration: 28,
                ease: "linear",
                repeat: Infinity,
              },
            }}
          >
            {[...partners, ...partners].map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="
                  relative flex-shrink-0
                  px-6 py-5
                  rounded-2xl
                  backdrop-blur-xl
                  bg-white/50 dark:bg-white/5
                  border border-white/20 dark:border-white/10
                  shadow-[0_10px_30px_rgba(0,0,0,0.1)]
                "
              >
                <img
                  src={logo}
                  alt="Partner logo"
                  className="
                    h-12 md:h-14 object-contain
                    opacity-80 hover:opacity-100
                    transition-opacity duration-300
                  "
                />

                {/* Top highlight */}
                <span
                  aria-hidden
                  className="
                    absolute inset-x-0 top-0 h-px
                    bg-gradient-to-r
                    from-transparent via-white/40 to-transparent
                  "
                />

                {/* Hover glow */}
                <span
                  aria-hidden
                  className="
                    absolute inset-0 rounded-2xl -z-10
                    bg-[var(--accent)]/12 blur-2xl
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  "
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ================= BOTTOM FADE ================= */}
      <div
        aria-hidden
        className="
          absolute bottom-0 left-0 w-full h-32
          bg-gradient-to-t from-[var(--background)] to-transparent
          pointer-events-none
        "
      />
    </section>
  );
}
