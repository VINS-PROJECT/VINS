"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">

      {/* ================= HERO DIAGONAL (LIMITED HEIGHT) ================= */}
      <div
        aria-hidden
        className="
          absolute top-0 left-0 w-full
          h-[520px] md:h-[560px]
          bg-gradient-to-br
          from-[var(--accent)]/25
          via-[var(--accent)]/12
          to-transparent
          -skew-y-6
          origin-top-left
          pointer-events-none
        "
      />

      {/* FADE OUT (SMOOTH CUT) */}
      <div
        aria-hidden
        className="
          absolute top-[460px] md:top-[500px]
          left-0 w-full h-32
          bg-gradient-to-b from-transparent to-[var(--background)]
          pointer-events-none
        "
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 pt-36 pb-36">
        <div className="max-w-5xl mx-auto px-6">

          {/* ================= HERO ================= */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-32"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              About <span className="text-[var(--accent)]">Me</span>
            </h1>

            <p className="mt-6 text-xl font-light leading-relaxed text-[var(--foreground)]/70">
              I design and engineer digital experiences with a focus on clarity,
              performance, and meaningful interactions — blending structured
              thinking with intentional design.
            </p>
          </motion.section>

          {/* ================= PROFILE (CLEAN, NO DIAGONAL) ================= */}
          <section className="mb-28">
            <h2 className="text-2xl font-semibold mb-8">
              Personal <span className="text-[var(--accent)]">Profile</span>
            </h2>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)]">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ["Full Name", "Kevin Simorangkir"],
                    ["Specialization", "UI/UX Design, Project Management, Data Analysis"],
                    ["Education", "S.Kom – Informatics Engineering"],
                    ["Location", "Lampung, Indonesia"],
                    ["Experience", "1+ Years in Product Development"],
                    ["Focus Area", "Design Systems, Web Engineering, UX Flow Architecture"],
                  ].map(([label, value]) => (
                    <tr
                      key={label}
                      className="border-b last:border-b-0 border-[var(--border)]"
                    >
                      <td className="py-4 px-6 text-[var(--accent)] font-medium w-48">
                        {label}
                      </td>
                      <td className="py-4 px-6 text-[var(--foreground)]/80">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ================= CTA ================= */}
          <section className="rounded-2xl p-12 text-center border border-[var(--border)] bg-[var(--card)]">
            <Mail className="w-9 h-9 text-[var(--accent)] mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3">
              Let’s Build Something Meaningful
            </h3>
            <p className="text-[var(--foreground)]/70 mb-8">
              I’m open to collaborations where design, engineering, and clarity truly matter.
            </p>
            <Link
              href="/contact"
              className="px-7 py-3 rounded-xl font-medium text-black"
              style={{ background: "var(--accent)" }}
            >
              Contact Me
            </Link>
          </section>

        </div>
      </div>
    </main>
  );
}
