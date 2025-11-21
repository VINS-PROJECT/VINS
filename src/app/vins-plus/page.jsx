"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FolderKanban,
  Layers,
  Award,
  FileText,
  Sparkles,
  Briefcase,
} from "lucide-react";
import { useState } from "react";

export default function VinsPlusPage() {
  const [showPopup, setShowPopup] = useState(false);

  // ITEMS — locked = tampilkan popup, unlocked = bisa diklik normal
  const items = [
    {
      title: "Portfolio",
      href: "/portfolio",
      locked: true,
      icon: <Layers className="w-6 h-6" />,
    },
    {
      title: "Project",
      href: "/project",
      locked: true,
      icon: <FolderKanban className="w-6 h-6" />,
    },
    {
      title: "Certificate",
      href: "/vins-plus/certificate",
      locked: false,
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Resume",
      href: "/resume",
      locked: true,
      icon: <FileText className="w-6 h-6" />,
    },
    // Locked
    {
      title: "Next Project",
      href: "/vins+/next-project",
      locked: false,
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: "Experience",
      href: "/experience",
      locked: true,
      icon: <Briefcase className="w-6 h-6" />,
    },
  ];

  // Klik handler — hanya blokir ketika item.locked === true
  const handleClick = (e, item) => {
    if (item.locked) {
      e.preventDefault();
      setShowPopup(true);
    }
  };

  return (
    <>
      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-black p-6 rounded-2xl shadow-xl w-[85%] max-w-sm text-center">
            <h2 className="text-lg font-semibold mb-3">Sedang Ada Penyesuaian Fitur</h2>
            <p className="opacity-70 mb-6">Fitur ini belum dapat diakses untuk sementara.</p>

            <button
              onClick={() => setShowPopup(false)}
              className="px-5 py-2 bg-[var(--accent)] text-black rounded-xl font-semibold hover:opacity-90 transition"
            >
              Oke
            </button>
          </div>
        </div>
      )}

      {/* PAGE */}
      <div
        className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-24 relative bg-[var(--background)] text-[var(--foreground)]"
      >
        {/* Background Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.22 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_18%,var(--accent)18,transparent_70%)]"
        />

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/3 right-20 w-40 h-40 rounded-full bg-[var(--accent)]/6 blur-3xl"
          animate={{ y: [0, -12, 0], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-12 w-32 h-32 rounded-full bg-[var(--accent)]/8 blur-3xl"
          animate={{ y: [0, 14, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 7, repeat: Infinity }}
        />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold tracking-wide mb-14 text-center bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--accent), var(--accent-dark))",
          }}
        >
          VINS+
        </motion.h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6, rotateX: 3, rotateY: -3 }}
            >
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item)}
                className="group block p-7 rounded-2xl border border-[var(--border)] bg-[var(--card)]/60 backdrop-blur-2xl shadow-[0_0_18px_rgba(0,0,0,0.10)] hover:shadow-[0_12px_26px_rgba(0,0,0,0.20)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[var(--accent)]/15 border border-[var(--accent)]/30 text-[var(--accent)] transition-all group-hover:bg-[var(--accent)] group-hover:text-black"
                >
                  {item.icon}
                </div>

                <div className="text-xl font-semibold mb-2 group-hover:text-[var(--accent)] transition">
                  {item.title}
                </div>

                <p className="text-sm opacity-70 group-hover:opacity-90 transition">
                  {item.title === "Next Project"
                    ? "Upcoming features & innovations."
                    : item.title === "Experience"
                    ? "Explore professional background & achievements."
                    : item.title === "Resume"
                    ? "View full professional CV document."
                    : `Explore ${item.title}`}
                </p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}