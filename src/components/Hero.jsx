"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  const GOLD = "var(--accent)";

  const t = {
    title1: "Empowering the Future of Indonesia’s Creator Economy",
    desc: "I help brands, startups, and creators build meaningful digital identities through intentional design, modern development, and elevated user experience.",
    btn1: "Contact Me",
    btn2: "View Portfolio",
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="
          relative overflow-hidden py-28 flex items-center 
          transition-colors duration-500
          bg-[var(--background)] text-[var(--foreground)]
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

            <div className="flex flex-wrap gap-4 pt-2">

              <Link href="/contact" className="btn-gold">
                {t.btn1}
              </Link>

              {/* OPEN MODAL */}
              <button onClick={() => setOpen(true)} className="btn-gold-outline">
                {t.btn2}
              </button>

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

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 160 }}
              className="
                relative z-10 w-[90%] max-w-2xl
                bg-[var(--card)] border border-[var(--border)]
                rounded-2xl p-6 shadow-xl 
              "
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="
                  absolute right-4 top-4 p-2 rounded-full 
                  bg-[var(--background)] border border-[var(--border)]
                  hover:bg-[var(--accent)]/20 transition
                "
              >
                <X className="w-4 h-4" />
              </button>

              {/* TITLE */}
              <h2
                className="
                  text-2xl font-bold mb-6
                  bg-clip-text text-transparent
                "
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--accent), var(--accent-dark))",
                }}
              >
                Select Portfolio Category
              </h2>

              {/* CARDS */}
              <div className="grid sm:grid-cols-2 gap-5">

                {/* UI/UX CARD */}
                <Link href="/portfolio/uiux" onClick={() => setOpen(false)}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="
                      p-6 rounded-xl cursor-pointer
                      bg-[var(--background)]/40
                      border border-[var(--border)]
                      hover:border-[var(--accent)]
                      transition shadow-sm
                    "
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      UI/UX Designer
                    </h3>
                    <p className="text-sm opacity-70 leading-relaxed">
                      Collection of modern interface designs, prototypes, and user experience projects.
                    </p>
                  </motion.div>
                </Link>

                {/* DATA ANALYTICS CARD */}
                <Link href="/portfolio/data" onClick={() => setOpen(false)}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="
                      p-6 rounded-xl cursor-pointer
                      bg-[var(--background)]/40
                      border border-[var(--border)]
                      hover:border-[var(--accent)]
                      transition shadow-sm
                    "
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      Data Analytics
                    </h3>
                    <p className="text-sm opacity-70 leading-relaxed">
                      Dashboards, data visualizations, forecasting models, and analytical case studies.
                    </p>
                  </motion.div>
                </Link>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
