"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ======================================
   WAVE HIGHLIGHT (FIXED & STABLE)
====================================== */
function WaveHighlight({ children }) {
  return (
    <span className="relative inline-block leading-tight">
      {/* TEXT WITH GRADIENT */}
      <span
        className="relative z-10 bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--accent) 10%, var(--accent-dark) 90%)",
          WebkitTextFillColor: "transparent",
        }}
      >
        {children}
      </span>

      {/* WAVE UNDERLINE */}
      <svg
        className="absolute left-0 bottom-0 w-full h-[10px]"
        viewBox="0 0 200 20"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 10 Q 25 5 50 10 T 100 10 T 150 10 T 200 10"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ pathOffset: [0, 1] }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </svg>
    </span>
  );
}

export default function Hero() {
  const t = {
    title: (
      <>
        Empowering the Future of{" "}
        <WaveHighlight>Indonesia’s Creator Economy</WaveHighlight>
      </>
    ),
    desc: "I help brands, startups, and creators build meaningful digital identities through intentional design, modern development, and elevated user experience.",
    btn: "Contact Me",
  };

  return (
    <section
      className="
        relative overflow-hidden py-28 flex items-center
        bg-[var(--background)] text-[var(--foreground)]
        transition-colors duration-500
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            {t.title}
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-[var(--foreground)]">
            {t.desc}
          </p>

          {/* ACTION */}
          <div className="pt-2">
            <Link
              href="/contact"
              className="
                inline-block px-6 py-3 rounded-lg font-semibold
                text-black bg-[var(--accent)]
                hover:opacity-90 transition shadow-lg
              "
            >
              {t.btn}
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative flex justify-center md:justify-end"
        >
          {/* GLOW */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            transition={{ duration: 1.5 }}
            className="
              absolute -z-10 top-1/2 right-1/2
              translate-x-1/2 -translate-y-1/2
              w-[480px] h-[480px]
              rounded-full blur-[120px]
              bg-[var(--accent)]/30
            "
          />

          <Image
            src="/Combine.png"
            alt="Collage"
            width={700}
            height={700}
            className="object-contain w-full max-w-xl"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}
