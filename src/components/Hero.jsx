"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const GOLD = "var(--accent)";

  const t = {
    title1: "Empowering the Future of Indonesia’s Creator Economy",
    desc: "I help brands, startups, and creators build meaningful digital identities through intentional design, modern development, and elevated user experience.",
    btn1: "Contact Me",
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
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--accent), var(--accent-dark))",
              }}
            >
              {t.title1}
            </span>
          </h1>

          <p className="max-w-lg text-lg leading-relaxed opacity-90">
            {t.desc}
          </p>

          {/* ONLY ONE ACTION BUTTON */}
          <div className="pt-2">
            <Link href="/contact" className="btn-gold">
              {t.btn1}
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ duration: 1.5 }}
            className="
              absolute -z-10 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2
              w-[480px] h-[480px] rounded-full blur-[120px]
              bg-[var(--accent)]/25
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
