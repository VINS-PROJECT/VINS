"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ResumePage() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">

      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[var(--accent)]/10" />
        <div className="absolute w-[500px] h-[500px] bg-[var(--accent)]/20 blur-[140px] rounded-full top-[-120px] right-[-120px]" />
      </div>

      {/* ================= HEADER ================= */}
      <section className="pt-32 pb-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight"
        >
          Resume
        </motion.h1>

        <p className="mt-4 max-w-xl mx-auto text-sm opacity-60">
          A concise overview of my professional experience,
          technical skills, and selected projects.
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
            <h2 className="text-2xl md:text-3xl font-semibold">
              Professional Overview
            </h2>

            <p className="text-[var(--foreground)]/70 leading-relaxed max-w-md">
              Structured for clarity and impact — highlighting real-world
              experience, technical capabilities, and product thinking.
            </p>

            {/* HIGHLIGHTS */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-[var(--border)]">
                <p className="text-sm">
                  ✔ Frontend Development (React, Next.js)
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[var(--border)]">
                <p className="text-sm">
                  ✔ UI/UX & Product Design Thinking
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[var(--border)]">
                <p className="text-sm">
                  ✔ Scalable & Maintainable Systems
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="/resume.pdf"
              className="
                inline-block mt-4 px-6 py-3 rounded-xl
                bg-[var(--accent)] text-black font-medium
                transition hover:bg-black hover:text-[var(--accent)]
              "
            >
              Download Resume
            </a>
          </motion.div>

          {/* ================= RIGHT ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">

              {/* glow */}
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
                  src="/QR/ResumeQR.png"
                  alt="Resume QR Code"
                  width={240}
                  height={240}
                  className="object-contain"
                />

                <span className="block text-center mt-3 text-xs opacity-60">
                  Scan to open
                </span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}