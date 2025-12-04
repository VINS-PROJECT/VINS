"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Wrench,
  Award,
  FileUser,
  Rocket,
  BriefcaseBusiness,
  Lock,
} from "lucide-react";
import { useState } from "react";

export default function VinsPlusPage() {
  const [showPopup, setShowPopup] = useState(false);

  const items = [
    {
      title: "Portfolio",
      href: "/portfolio",
      locked: true,
      icon: BadgeCheck,
    },
    {
      title: "Project",
      href: "/vins-plus/project",
      locked: false,
      icon: Wrench,
    },
    {
      title: "Certificate",
      href: "/vins-plus/certificate",
      locked: false,
      icon: Award,
    },
    {
      title: "Resume",
      href: "/resume",
      locked: true,
      icon: FileUser,
    },
    {
      title: "Next Project",
      href: "/vins-plus/next-project",
      locked: false,
      icon: Rocket,
    },
    {
      title: "Experience",
      href: "/experience",
      locked: true,
      icon: BriefcaseBusiness,
    },
  ];

  const getIcon = (Icon, locked) => (
    <Icon
      size={28}
      strokeWidth={locked ? 2 : 1.8}
      fill={locked ? "var(--accent)" : "none"}
      className="transition-all"
    />
  );

  const handleClick = (e, item) => {
    if (item.locked) {
      e.preventDefault();
      setShowPopup(true);
    }
  };

  return (
    <>
      {/* Popup: Locked */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="bg-white dark:bg-neutral-950 p-7 rounded-3xl shadow-2xl max-w-sm w-[85%] text-center border border-white/20"
          >
            <Lock className="mx-auto mb-4 w-11 h-11 text-[var(--accent)]" />
            <h2 className="text-xl font-bold mb-2">Fitur Dalam Pengembangan</h2>
            <p className="opacity-70 mb-6 text-sm">
              Kami sedang menyiapkan fitur ini agar jauh lebih baik.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="px-5 py-2 bg-[var(--accent)] text-black rounded-xl font-semibold hover:opacity-90 transition"
            >
              Mengerti
            </button>
          </motion.div>
        </div>
      )}

      {/* Main */}
      <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-24 relative bg-[var(--background)] text-[var(--foreground)]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_20%,var(--accent)/35,transparent_70%)]"
        />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight text-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--accent), var(--accent-dark))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          VINS+
        </motion.h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-5xl">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="relative"
              >
                {item.locked && (
                  <div className="absolute top-4 right-4 bg-[var(--accent)] text-black p-1.5 rounded-full shadow">
                    <Lock size={14} strokeWidth={2.3} />
                  </div>
                )}

                <Link
                  href={item.href}
                  onClick={(e) => handleClick(e, item)}
                  className="group block p-7 rounded-2xl border border-white/10 
                  bg-white/5 dark:bg-neutral-900/40
                  backdrop-blur-xl shadow-xl hover:shadow-[0_12px_28px_rgba(0,0,0,0.28)]
                  transition-all duration-300 hover:scale-[1.03]"
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.08 }}
                    className="w-14 h-14 mb-5 rounded-xl flex items-center justify-center
                    bg-[var(--accent)]/20 text-[var(--accent)]
                    border border-[var(--accent)]/40 group-hover:bg-[var(--accent)]
                    group-hover:text-black transition-all"
                  >
                    {getIcon(Icon, item.locked)}
                  </motion.div>

                  <h3 className="text-xl font-bold mb-1 group-hover:text-[var(--accent)] transition-all">
                    {item.title}
                  </h3>

                  <p className="text-sm opacity-70 group-hover:opacity-100 transition-all">
                    {item.title === "Next Project"
                      ? "Upcoming features and creative plans."
                      : `Explore ${item.title}`}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
