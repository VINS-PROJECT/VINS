"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
        min-h-screen flex items-center
        bg-[var(--background)] text-[var(--foreground)]
      "
    >
      <div
        className="
          w-full max-w-7xl mx-auto
          px-6 lg:px-12
          grid md:grid-cols-2 gap-14
          items-center
        "
      >
        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Eyebrow */}
          <span
            className="
              inline-block text-sm font-medium
              text-[var(--accent)]
              tracking-wide
            "
          >
            Creative Technologist
          </span>

          {/* Headline */}
          <h1 className="font-semibold leading-tight tracking-tight">
            <span className="block text-4xl sm:text-5xl md:text-6xl">
              Building Digital
            </span>

            <span className="block text-4xl sm:text-5xl md:text-6xl text-[var(--accent)]">
              Experiences
            </span>

            <span className="block text-4xl sm:text-5xl md:text-6xl">
              That Matter
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-xl text-base lg:text-lg text-[var(--foreground)]/70">
            I design and build thoughtful digital products for brands,
            startups, and creators.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="
                inline-flex items-center gap-2
                px-7 py-4 rounded-xl
                font-medium
                bg-[var(--accent)]
                text-black
                transition
                hover:brightness-110
              "
            >
              Start a Project
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/vins-plus/portfolio"
              className="
                inline-flex items-center gap-2
                px-6 py-4 rounded-xl
                font-medium
                border border-[var(--border)]
                text-[var(--foreground)]/70
                hover:text-[var(--foreground)]
                transition
              "
            >
              <Play size={16} />
              View Work
            </Link>
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/Combine.png"
            alt="Creative Collage"
            width={640}
            height={640}
            priority
            className="w-full max-w-lg object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
