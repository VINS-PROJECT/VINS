"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">

      {/* ===== SOFT BACKGROUND (NO DIAGONAL) ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-[var(--accent)]/10 blur-[140px] rounded-full top-[-120px] left-[-120px]" />
      </div>

      <div className="relative z-10 pt-32 pb-32">
        <div className="max-w-5xl mx-auto px-6 space-y-28">

          {/* ================= HERO ================= */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
              About <span className="text-[var(--accent)]">Me</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-[var(--foreground)]/70">
              I design and engineer digital experiences with a focus on clarity,
              performance, and meaningful interactions — combining structured thinking
              with intentional design.
            </p>
          </motion.section>

          {/* ================= PROFILE (GRID, NOT TABLE) ================= */}
          <section>
            <h2 className="text-2xl font-semibold mb-10">
              Personal <span className="text-[var(--accent)]">Profile</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ["Full Name", "Kevin Simorangkir"],
                ["Specialization", "UI/UX, Project Management"],
                ["Education", "S.Kom – Informatics"],
                ["Location", "Lampung, Indonesia"],
                ["Experience", "1+ Years"],
                ["Focus", "Design Systems & UX Architecture"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="
                    p-5 rounded-xl
                    border border-[var(--border)]
                    bg-[var(--card)]
                    hover:border-[var(--accent)]
                    transition
                  "
                >
                  <p className="text-xs text-[var(--accent)] mb-1">
                    {label}
                  </p>
                  <p className="text-sm text-[var(--foreground)]/80">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ================= HIGHLIGHT ================= */}
          <section className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-6">
              What I Focus On
            </h2>

            <p className="text-[var(--foreground)]/70 leading-relaxed">
              I focus on building digital systems that are not only visually
              refined but also scalable, maintainable, and impactful. Every
              decision is guided by clarity — from design systems to engineering
              structure.
            </p>
          </section>

          {/* ================= CTA ================= */}
          <section className="
            rounded-2xl p-10 text-center
            border border-[var(--border)]
            bg-[var(--card)]
          ">
            <Mail className="w-8 h-8 text-[var(--accent)] mx-auto mb-4" />

            <h3 className="text-xl font-semibold mb-2">
              Let’s Build Something Meaningful
            </h3>

            <p className="text-[var(--foreground)]/70 mb-6">
              Open for collaborations where design and engineering meet clarity.
            </p>

            <Link
              href="/contact"
              className="
                inline-block px-6 py-3 rounded-xl font-medium
                bg-[var(--accent)] text-black
                hover:brightness-90 transition
              "
            >
              Contact Me
            </Link>
          </section>

        </div>
      </div>
    </main>
  );
}