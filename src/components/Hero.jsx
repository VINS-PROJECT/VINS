"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        relative overflow-hidden
        py-28 md:py-32
        bg-[var(--background)] text-[var(--foreground)]
        transition-colors duration-500
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* ================= LEFT TEXT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-7"
        >
          <h1
            className="
              font-elektrakution
              text-4xl sm:text-5xl md:text-6xl
              leading-tight tracking-tight
            "
          >
            Empowering{" "}
            <span
              className="
                bg-clip-text text-transparent
                bg-gradient-to-r
                from-[var(--accent)]
                to-[var(--accent-dark)]
              "
            >
              Indonesia’s Creators
            </span>
          </h1>

          <p className="max-w-lg text-lg leading-relaxed opacity-85">
            I help brands, startups, and creators build meaningful digital
            identities through intentional design, modern development, and
            elevated user experience.
          </p>

          {/* CTA */}
          <div className="pt-3">
            <Link
              href="/contact"
              className="
                inline-flex items-center justify-center
                px-7 py-3.5 rounded-xl
                font-semibold

                text-black bg-[var(--accent)]
                shadow-[0_12px_30px_-10px_var(--accent)]

                transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_var(--accent)]

                active:translate-y-0
                active:scale-[0.97]

                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[var(--accent)]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[var(--background)]

                select-none
              "
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="relative flex justify-center md:justify-end"
        >
          {/* Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.28 }}
            transition={{ duration: 1.6, delay: 0.4 }}
            className="
              absolute -z-10 top-1/2 right-1/2
              translate-x-1/2 -translate-y-1/2
              w-[520px] h-[520px]
              rounded-full blur-[140px]
              bg-[var(--accent)]/30
            "
          />

          <Image
            src="/Collage.png"
            alt="Creative Collage"
            width={720}
            height={720}
            priority
            className="
              object-contain
              w-full max-w-xl
              drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]
            "
          />
        </motion.div>

      </div>
    </section>
  );
}
