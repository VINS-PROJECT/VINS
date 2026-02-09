"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
        min-h-screen
        flex items-start md:items-center
        pt-28 md:pt-0
        bg-[var(--background)]
        text-[var(--foreground)]
      "
    >
      <div
        className="
          w-full max-w-7xl mx-auto
          px-6 lg:px-12
          grid md:grid-cols-2
          gap-10 md:gap-14
          items-center
        "
      >
        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6 order-1"
        >
          {/* Eyebrow */}
          <span
            className="
              inline-block
              text-sm font-medium
              tracking-wide
              text-[var(--accent)]
            "
          >
            Creative Technologist
          </span>

          {/* Headline */}
          <h1 className="font-semibold tracking-tight">
            <span className="block text-3xl sm:text-5xl md:text-6xl leading-tight">
              Building Digital
            </span>

            <span className="block text-3xl sm:text-5xl md:text-6xl leading-tight text-[var(--accent)]">
              Experiences
            </span>

            <span className="block text-3xl sm:text-5xl md:text-6xl leading-tight">
              That Matter
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-xl text-base lg:text-lg text-[var(--foreground)]/70">
            I design and build thoughtful digital products for brands, startups,
            and creators.
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

    transition-all duration-200 ease-out

    hover:bg-black
    hover:text-[var(--accent)]

    focus-visible:bg-black
    focus-visible:text-[var(--accent)]
    focus-visible:outline-none
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
          className="
            flex justify-center md:justify-end
            mt-8 md:mt-0
            order-2 md:order-none
          "
        >
          <Image
            src="/Combine.png"
            alt="Creative Collage"
            width={640}
            height={640}
            priority
            className="
              w-full
              max-w-xs sm:max-w-md md:max-w-lg
              object-contain
            "
          />
        </motion.div>
      </div>
    </section>
  );
}
