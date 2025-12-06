"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
    { title: "Portfolio", href: "/portfolio", locked: true, icon: BadgeCheck },
    { title: "Project", href: "/vins-plus/project", locked: false, icon: Wrench },
    { title: "Certificate", href: "/vins-plus/certificate", locked: false, icon: Award },
    { title: "Resume", href: "/resume", locked: true, icon: FileUser },
    { title: "Next Project", href: "/vins-plus/next-project", locked: false, icon: Rocket },
    { title: "Experience", href: "/experience", locked: false, icon: BriefcaseBusiness },
  ];

  const handleLockedClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <>
      {/* ====================== POPUP LOCKED ====================== */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-[1000] bg-black/60 dark:bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[var(--background)] border border-[var(--border)]
              rounded-2xl max-w-sm w-[88%] p-8 text-center shadow-xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
            >
              <div className="mx-auto w-14 h-14 rounded-full bg-[var(--accent)]/20 text-[var(--accent)] flex items-center justify-center mb-4">
                <Lock size={28} />
              </div>
              <h3 className="text-lg font-bold">Fitur dalam Pengembangan</h3>
              <p className="text-[var(--foreground)]/70 mt-2 text-sm">
                Kami sedang menyiapkan fitur ini agar lebih powerfull.
              </p>

              <button
                onClick={() => setShowPopup(false)}
                className="mt-6 px-6 py-2 bg-[var(--accent)] text-black rounded-xl font-semibold transition hover:opacity-90"
              >
                Mengerti
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ====================== MAIN ====================== */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-28 bg-[var(--background)] text-[var(--foreground)] relative">

        {/* BG Glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.22 }}
          transition={{ duration: 1.5 }}
          style={{
            background:
              "radial-gradient(circle at 50% 25%, var(--accent)/30 0%, transparent 70%)",
          }}
        />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent mb-14"
          style={{
            WebkitTextFillColor: "transparent",
            backgroundImage:
              "linear-gradient(to right,var(--accent), var(--accent-dark))",
          }}
        >
          VINS+
        </motion.h1>

        {/* ===== GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
          {items.map((item, i) => {
            const Icon = item.icon;
            const locked = item.locked;

            const iconNode = (
              <Icon
                size={30}
                strokeWidth={locked ? 3.2 : 2}
                className={`transition-all ${
                  locked ? "opacity-75" : "opacity-100"
                }`}
              />
            );

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="relative"
              >
                {/* Badge Lock */}
                {locked && (
                  <motion.div
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute top-4 right-4 bg-[var(--accent)] text-black p-1.5 rounded-full shadow-md"
                  >
                    <Lock size={14} />
                  </motion.div>
                )}

                <Link
                  href={item.href}
                  onClick={locked ? handleLockedClick : undefined}
                  className="
                    block p-8 rounded-3xl border border-[var(--border)]
                    bg-[var(--background)]/60 backdrop-blur-xl
                    shadow-[0_8px_24px_rgba(0,0,0,0.12)]
                    transition-all 
                    hover:shadow-[0_16px_42px_-8px_var(--accent)/45]
                    hover:border-[var(--accent)]
                    group
                  "
                >
                  {/* ICON */}
                  <motion.div
                    whileHover={{ rotate: locked ? 0 : 6, scale: 1.12 }}
                    className="
                      w-16 h-16 mb-6 rounded-2xl flex items-center justify-center
                      bg-[var(--accent)]/18 border border-[var(--accent)]/35
                      text-[var(--accent)] transition-all
                      group-hover:bg-[var(--accent)]
                      group-hover:text-black
                    "
                  >
                    {iconNode}
                  </motion.div>

                  {/* TITLE */}
                  <h3 className="text-xl font-bold mb-1 text-[var(--foreground)] group-hover:text-[var(--accent)] transition">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-sm text-[var(--foreground)]/70 group-hover:text-[var(--foreground)]/95 transition">
                    {locked
                      ? "Segera hadir — Stay tuned!"
                      : item.title === "Next Project"
                      ? "Upcoming plans & creative ideas."
                      : `Explore ${item.title}`}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
