"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">

      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[var(--accent)]/10" />
        <div className="absolute w-[500px] h-[500px] bg-[var(--accent)]/20 blur-[140px] rounded-full top-[-120px] left-[-120px]" />
      </div>

      {/* ================= HEADER ================= */}
      <section className="pt-32 pb-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight"
        >
          Portfolio
        </motion.h1>

        <p className="mt-4 max-w-xl mx-auto text-sm opacity-60">
          A curated collection of selected works, case studies,
          and product-focused implementations.
        </p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Explore My Work
              </h2>

              <p className="text-[var(--foreground)]/70 leading-relaxed max-w-md">
                Each project is built with intention — balancing
                usability, performance, and real-world constraints.
              </p>
            </div>

            {/* FEATURE CARD */}
            <div
              className="
                p-6 rounded-2xl
                border border-[var(--border)]
                bg-[var(--background)]/60 backdrop-blur-xl
                transition hover:border-[var(--accent)]
              "
            >
              <h3 className="font-medium mb-2">
                UI/UX Case Studies
              </h3>
              <p className="text-sm text-[var(--foreground)]/70">
                Deep dive into product thinking, design decisions,
                and implementation strategy.
              </p>
            </div>

            <div
              className="
                p-6 rounded-2xl
                border border-[var(--border)]
                bg-[var(--background)]/60 backdrop-blur-xl
                transition hover:border-[var(--accent)]
              "
            >
              <h3 className="font-medium mb-2">
                Frontend Engineering
              </h3>
              <p className="text-sm text-[var(--foreground)]/70">
                Scalable components, clean architecture, and
                performance-focused builds.
              </p>
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">

              {/* floating glow */}
              <div className="absolute inset-0 bg-[var(--accent)]/20 blur-[80px] rounded-3xl" />

              {/* QR CARD */}
              <motion.div
                whileHover={{ scale: 1.05 }}
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
                  className="object-contain"
                />

                <span className="block text-center mt-3 text-xs opacity-60">
                  Scan to explore
                </span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}