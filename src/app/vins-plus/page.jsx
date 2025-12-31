"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutGrid,
  FolderKanban,
  GraduationCap,
  FileText,
  Lightbulb,
  Building2,
  Lock,
} from "lucide-react";
import { useState } from "react";

/* ======================================
   WAVE HIGHLIGHT (GLOBAL CONSISTENT)
====================================== */
function WaveHighlight({ children }) {
  return (
    <span className="relative inline-block leading-tight">
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

      <svg
        className="absolute left-0 bottom-0 w-full h-[8px]"
        viewBox="0 0 200 20"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 10 Q 25 6 50 10 T 100 10 T 150 10 T 200 10"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={{ pathOffset: [0, 1] }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </svg>
    </span>
  );
}

export default function VinsPlusPage() {
  const [showPopup, setShowPopup] = useState(false);

  const items = [
    { title: "Portfolio", href: "/portfolio", locked: true, icon: LayoutGrid },
    { title: "Project", href: "/vins-plus/project", locked: false, icon: FolderKanban },
    { title: "Certificate", href: "/vins-plus/certificate", locked: false, icon: GraduationCap },
    { title: "Resume", href: "/resume", locked: true, icon: FileText },
    { title: "Next Project", href: "/vins-plus/next-project", locked: false, icon: Lightbulb },
    { title: "Experience", href: "/experience", locked: false, icon: Building2 },
  ];

  const handleLockedClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <>
      {/* ================= LOCKED MODAL ================= */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/55 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="
                relative max-w-sm w-[90%]
                rounded-3xl p-8 text-center
                backdrop-blur-xl
                bg-white/60 dark:bg-white/6
                border border-white/25 dark:border-white/10
                shadow-[0_20px_60px_rgba(0,0,0,0.18)]
              "
            >
              <div
                className="
                  mx-auto w-14 h-14 mb-5
                  rounded-2xl flex items-center justify-center
                  bg-[var(--accent)]/15 text-[var(--accent)]
                "
              >
                <Lock size={26} />
              </div>

              <h3 className="text-lg font-semibold tracking-tight">
                Feature Locked
              </h3>

              <p className="mt-2 text-sm text-[var(--foreground)]/70 leading-relaxed">
                This feature is currently under active development to ensure
                stability and professional readiness.
              </p>

              <button
                onClick={() => setShowPopup(false)}
                className="
                  mt-7 px-6 py-2.5 rounded-xl
                  bg-[var(--accent)] text-black
                  font-semibold transition hover:opacity-90
                "
              >
                Understood
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MAIN ================= */}
      <section
        className="
          relative min-h-screen
          flex flex-col items-center justify-center
          px-6 py-28
          bg-[var(--background)]
          text-[var(--foreground)]
          overflow-hidden
        "
      >
        {/* BACKDROP */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 50% 20%, var(--accent)/0.12, transparent 65%)
            `,
          }}
        />

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-16"
        >
          <WaveHighlight>VINS+</WaveHighlight>
        </motion.h1>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
          {items.map((item, i) => {
            const Icon = item.icon;
            const locked = item.locked;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="relative"
              >
                {/* LOCK BADGE */}
                {locked && (
                  <div
                    className="
                      absolute top-4 right-4 z-10
                      p-1.5 rounded-full
                      bg-[var(--accent)]/20
                      text-[var(--accent)]
                    "
                  >
                    <Lock size={14} />
                  </div>
                )}

                <Link
                  href={item.href}
                  onClick={locked ? handleLockedClick : undefined}
                  className="
                    group block h-full
                    p-8 rounded-3xl
                    backdrop-blur-xl
                    bg-white/55 dark:bg-white/5
                    border border-white/25 dark:border-white/10
                    shadow-[0_14px_40px_rgba(0,0,0,0.14)]
                    transition-all duration-400
                    hover:border-[var(--accent)]/40
                  "
                >
                  {/* ICON */}
                  <div
                    className="
                      w-14 h-14 mb-6 rounded-2xl
                      flex items-center justify-center
                      bg-[var(--accent)]/15
                      text-[var(--accent)]
                    "
                  >
                    <Icon
                      size={26}
                      strokeWidth={locked ? 3 : 2}
                      className={locked ? "opacity-60" : "opacity-100"}
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold mb-1">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-sm text-[var(--foreground)]/70 leading-relaxed">
                    {locked
                      ? "Feature currently unavailable."
                      : item.title === "Next Project"
                      ? "Upcoming initiatives and explorations."
                      : `Access ${item.title} resources.`}
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
