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
        relative py-24
        bg-[var(--background)] text-[var(--foreground)]
        transition-colors duration-500
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.22 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, var(--accent)/0.22 0%, transparent 65%),
            radial-gradient(circle at 85% 70%, var(--accent-dark)/0.20 0%, transparent 75%)
          `,
        }}
      />

      <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            text-4xl md:text-5xl font-extrabold tracking-tight
            bg-gradient-to-r from-[var(--accent)] via-[var(--accent-dark)] to-[var(--accent)]
            bg-clip-text text-transparent
          "
        >
          Work & Organizational Partners
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-4 mb-14 max-w-xl mx-auto text-[var(--foreground)]/65"
        >
          Collaborating with trusted brands, creative teams, and global communities.
        </motion.p>

        <div className="overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-20" />
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-20" />

          {/* Loop motion */}
          <motion.div
            className="flex items-center gap-20 md:gap-28"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          >
            {[...partners, ...partners].map((logo, index) => (
              <div key={index} className="flex-shrink-0 group relative">
                <img
                  src={logo}
                  alt="Partner Logo"
                  className="
                    h-14 md:h-16 object-contain
                    opacity-80
                    transition-all duration-500

                    /* Hover: logo highlight, NO recolor */
                    group-hover:opacity-100
                    group-hover:drop-shadow-[0_0_14px_var(--accent)/65]
                  "
                />

                {/* Soft glow under logo (theme adaptive only) */}
                <span
                  className="
                    absolute inset-0 mx-auto pointer-events-none
                    bg-[var(--accent)]/25 blur-xl rounded-full
                    opacity-0 group-hover:opacity-40
                    transition-all duration-500
                  "
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none" />
    </section>
  );
}
