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
        relative py-28
        bg-[var(--background)]
        text-[var(--foreground)]
        overflow-hidden
      "
    >
      {/* ================= SUBTLE GLASS BACKDROP ================= */}
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="
            text-4xl md:text-5xl font-bold tracking-tight
            bg-clip-text text-transparent
          "
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--accent), var(--accent-dark))",
          }}
        >
          Work & Organizational Partners
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
        <div className="relative overflow-hidden">
          {/* Edge fade */}
          <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />

          <motion.div
            className="flex items-center gap-16 md:gap-24"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 26,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...partners, ...partners].map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="
                  relative flex-shrink-0
                  px-6 py-5
                  rounded-2xl
                  backdrop-blur-xl
                  bg-white/45 dark:bg-white/5
                  border border-white/20 dark:border-white/10
                  shadow-[0_8px_28px_rgba(0,0,0,0.08)]
                "
              >
                <img
                  src={logo}
                  alt="Partner logo"
                  className="
                    h-12 md:h-14 object-contain
                    opacity-80
                    transition-opacity duration-300
                    group-hover:opacity-100
                  "
                />

                {/* subtle highlight */}
                <span
                  aria-hidden
                  className="
                    absolute inset-x-0 top-0 h-px
                    bg-gradient-to-r
                    from-transparent via-white/40 to-transparent
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
