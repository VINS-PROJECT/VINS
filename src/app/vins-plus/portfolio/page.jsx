"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">

      {/* ================= HEADER (VINS+ STYLE) ================= */}
      <section className="relative overflow-hidden">
        {/* Diagonal gold */}
        <div
          aria-hidden
          className="
            absolute inset-0
            bg-gradient-to-br
            from-[var(--accent)]/25
            via-[var(--accent)]/10
            to-transparent
            -skew-y-6
            origin-top-left
          "
        />

        {/* Fade bottom */}
        <div
          aria-hidden
          className="
            absolute bottom-0 left-0 w-full h-28
            bg-gradient-to-t from-[var(--background)] to-transparent
          "
        />

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative pt-32 pb-24 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Portfolio
          </h1>

          <span className="mt-2 block text-sm font-mono text-[var(--foreground)]/50">
            /vins+/portfolio
          </span>

          <p className="mt-4 max-w-xl mx-auto text-sm opacity-65 leading-relaxed">
            A curated collection of selected works, case studies,
            and real-world projects across design and development.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="relative max-w-6xl mx-auto px-6 pb-28">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT : TEXT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Explore My Work
            </h2>

            <p className="text-base opacity-80 leading-relaxed max-w-md">
              Scan the QR code to explore selected UI/UX case studies,
              frontend projects, and product-focused implementations
              built with real constraints and goals.
            </p>

            <p className="text-sm opacity-60">
              Focused on clarity, usability, and long-term scalability.
            </p>
          </motion.div>

          {/* ================= RIGHT : QR ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">

              {/* Pulse ring */}
              <motion.div
                aria-hidden
                className="
                  absolute inset-0 rounded-3xl
                  border border-[var(--accent)]/40
                "
                animate={{
                  scale: [1, 1.15],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 2.2,
                  ease: "easeOut",
                  repeat: Infinity,
                }}
              />

              {/* Second pulse */}
              <motion.div
                aria-hidden
                className="
                  absolute inset-0 rounded-3xl
                  border border-[var(--accent)]/25
                "
                animate={{
                  scale: [1, 1.3],
                  opacity: [0.4, 0],
                }}
                transition={{
                  duration: 2.6,
                  ease: "easeOut",
                  repeat: Infinity,
                  delay: 1,
                }}
              />

              {/* QR box */}
              <div
                className="
                  relative z-10 p-6 rounded-3xl
                  bg-white dark:bg-white/5
                  border border-white/20 dark:border-white/10
                  shadow-[0_20px_50px_rgba(0,0,0,0.18)]
                "
              >
                <Image
                  src="/QR/PortfolioVINS.png"
                  alt="Portfolio QR Code"
                  width={240}
                  height={240}
                  priority
                  className="object-contain"
                />

                <span className="block text-center mt-3 text-xs opacity-60">
                  Scan to view portfolio
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
