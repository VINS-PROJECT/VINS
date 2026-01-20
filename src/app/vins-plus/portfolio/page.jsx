"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  return (
    <main
      className="
        relative min-h-screen
        flex items-center
        bg-[var(--background)]
        text-[var(--foreground)]
        transition-colors
        overflow-hidden
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-28 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT : TEXT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Portfolio
            </h1>

            <p className="text-lg opacity-80 leading-relaxed max-w-md">
              Scan the QR code to explore my selected works, case studies,
              and real-world projects across design and development.
            </p>

            <p className="text-sm opacity-60">
              Showcasing UI/UX, frontend development, and product thinking.
            </p>
          </motion.div>

          {/* ================= RIGHT : QR ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">

              {/* PULSE RING */}
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

              {/* SECOND PULSE */}
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

              {/* QR CONTAINER */}
              <div
                className="
                  relative z-10 p-6 rounded-3xl
                  bg-white dark:bg-white/5
                  border border-white/20 dark:border-white/10
                  shadow-[0_20px_50px_rgba(0,0,0,0.18)]
                "
              >
                <Image
                  src="/qr-portfolio.png" // ⬅️ ganti dengan QR portfolio kamu
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
      </div>
    </main>
  );
}
