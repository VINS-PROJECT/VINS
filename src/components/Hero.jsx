"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex items-center
        bg-[var(--background)]
        text-[var(--foreground)]
        overflow-hidden
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* Soft glow */}
        <div className="absolute w-[500px] h-[500px] bg-[var(--accent)]/20 blur-[140px] rounded-full top-[-120px] left-[-120px]" />
        <div className="absolute w-[400px] h-[400px] bg-[var(--accent)]/10 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="w-full max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Eyebrow */}
          <span className="inline-block text-sm tracking-widest text-[var(--accent)]">
            ✦ Creative Technologist
          </span>

          {/* Headline */}
          <h1 className="font-semibold tracking-tight leading-[1.1]">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Building Digital
            </span>

            <span
              className="
                block
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                text-transparent bg-clip-text
                bg-gradient-to-r from-[var(--accent)] to-[#f5e6ca]
              "
            >
              Experiences
            </span>

            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              That Matter
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-xl mx-auto text-base sm:text-lg text-[var(--foreground)]/70">
            I design and build thoughtful digital products for brands,
            startups, and creators. Focused on performance, aesthetics, and
            impact.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="
                group
                inline-flex items-center gap-2
                px-7 py-4 rounded-xl
                font-medium

                bg-[var(--accent)]
                text-black

                transition-all duration-300

                hover:bg-black
                hover:text-[var(--accent)]
                hover:shadow-[0_0_25px_rgba(230,211,163,0.4)]
              "
            >
              Start a Project
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/vins-plus/portfolio"
              className="
                group
                inline-flex items-center gap-2
                px-6 py-4 rounded-xl
                font-medium
                border border-[var(--border)]
                text-[var(--foreground)]/70

                transition-all duration-300

                hover:text-[var(--foreground)]
                hover:border-[var(--accent)]
              "
            >
              <Play
                size={16}
                className="transition-transform group-hover:scale-110"
              />
              View Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}