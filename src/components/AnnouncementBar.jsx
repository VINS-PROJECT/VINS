"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bell, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

/* ================= TEXT REVEAL ================= */
function TextReveal({ text, className = "" }) {
  const letters = text.split("");

  return (
    <motion.span
      initial="hidden"
      animate="show"
      className={`inline-block ${className}`}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.03 } },
      }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
            show: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.5 },
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* ================= ANNOUNCEMENT ================= */
function Announcement() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("announcement_closed");
    if (!dismissed) setVisible(true);
  }, []);

  const handleClose = () => {
    localStorage.setItem("announcement_closed", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          className="pt-24 px-6"
        >
          <div className="
            relative max-w-5xl mx-auto
            flex items-center gap-4
            p-4 rounded-2xl
            bg-white/10 backdrop-blur-xl
            border border-white/20
          ">
            {/* ICON */}
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Bell size={18} />
            </div>

            {/* CONTENT */}
            <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2 py-0.5 rounded-full bg-green-400/20 text-green-400">
                  INFORMASI
                </span>
                <span className="text-white/50">30 Nov 2025</span>
              </div>

              <p className="text-sm text-white/80">
                📢 Segera Hadir, Update Maganghub Batch 1 - 2026 ·{" "}
                <span className="text-white/60">
                  Consider Donasi untuk support
                </span>{" "}
                🙏
                <Link
                  href="#"
                  className="ml-1 text-[var(--accent)] font-medium hover:underline"
                >
                  Klik Disini
                </Link>
              </p>
            </div>

            {/* CLOSE */}
            <button
              onClick={handleClose}
              className="
                absolute top-3 right-3
                p-1 rounded-md
                text-white/60 hover:text-white
                transition
              "
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ================= HERO ================= */
export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* ANNOUNCEMENT */}
        <Announcement />

        {/* HERO TEXT */}
        <div className="flex items-end flex-1 pb-16">
          <div className="w-full max-w-6xl mx-auto px-6 lg:px-12">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <span className="text-xs tracking-[0.3em] text-white/60 uppercase">
                Portfolio 2026
              </span>

              <h1 className="font-semibold leading-[0.95] tracking-tight text-white">

                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px]">
                  <TextReveal text="I Create" />
                </div>

                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[#f5e6ca]">
                  <TextReveal text="Digital Work" />
                </div>

                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px]">
                  <TextReveal text="That Hits." />
                </div>
              </h1>

              <p className="max-w-lg text-sm sm:text-base text-white/70">
                Crafting high-impact digital experiences for brands and
                startups. Focused on clarity, emotion, and performance.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <Link
                  href="/vins-plus/portfolio"
                  className="
                    group inline-flex items-center gap-2
                    px-6 py-3 rounded-full
                    bg-white text-black font-medium
                    hover:bg-[var(--accent)]
                    transition
                  "
                >
                  View Portfolio
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="
                    text-white/70 text-sm underline
                    hover:text-white transition
                  "
                >
                  Let’s Work Together
                </Link>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}