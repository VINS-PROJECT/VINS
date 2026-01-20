"use client";

import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  PanelsTopLeft,
  Briefcase,
  BadgeCheck,
  FileUser,
  Rocket,
  Landmark,
  Lock,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ======================================
   ICON STYLE
====================================== */
const iconProps = {
  size: 26,
  strokeWidth: 1.25,
  absoluteStrokeWidth: true,
};

export default function VinsPlusPage() {
  const [showPopup, setShowPopup] = useState(false);
  const modalRef = useRef(null);
  const reduceMotion = useReducedMotion();

  /* ===============================
     ITEMS
  =============================== */
  const items = [
    {
      title: "Portfolio",
      href: "/vins-plus/portfolio",
      locked: false,
      icon: PanelsTopLeft,
    },
    {
      title: "Project",
      href: "/vins-plus/project",
      locked: false,
      icon: Briefcase,
    },
    {
      title: "Certificate",
      href: "/vins-plus/certificate",
      locked: false,
      icon: BadgeCheck,
    },
    {
      title: "Resume",
      href: "/vins-plus/resume",
      locked: false,
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
      locked: false,
      icon: Landmark,
    },
  ];

  /* ===============================
     ESC TO CLOSE
  =============================== */
  useEffect(() => {
    if (!showPopup) return;

    const onKey = (e) => {
      if (e.key === "Escape") setShowPopup(false);
    };

    document.addEventListener("keydown", onKey);
    modalRef.current?.focus();

    return () => document.removeEventListener("keydown", onKey);
  }, [showPopup]);

  return (
    <>
      {/* ================= LOCKED MODAL ================= */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/55 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              ref={modalRef}
              tabIndex={-1}
              onClick={(e) => e.stopPropagation()}
              initial={{ y: reduceMotion ? 0 : 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="
                relative max-w-sm w-[90%]
                rounded-3xl p-8 text-center
                backdrop-blur-xl
                bg-white/60 dark:bg-white/6
                border border-white/25 dark:border-white/10
                shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                outline-none
              "
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 opacity-60 hover:opacity-100 transition"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div
                className="
                  mx-auto w-14 h-14 mb-5
                  rounded-2xl flex items-center justify-center
                  bg-[var(--accent)]/15 text-[var(--accent)]
                "
              >
                <Lock size={26} strokeWidth={1.5} />
              </div>

              <h3 className="text-lg font-semibold tracking-tight">
                Feature Locked
              </h3>

              <p className="mt-2 text-sm text-[var(--foreground)]/70 leading-relaxed">
                This feature is currently under development to ensure stability
                and professional readiness.
              </p>

              <button
                onClick={() => setShowPopup(false)}
                className="
                  mt-7 px-6 py-2.5 rounded-xl
                  bg-[var(--accent)] text-black
                  font-semibold transition hover:opacity-90
                  focus:outline-none focus:ring-2 focus:ring-[var(--accent)]
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
        "
      >
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-16"
        >
          VINS<span className="text-[var(--accent)]">+</span>
        </motion.h1>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
          {items.map((item, i) => {
            const Icon = item.icon;

            const Card = (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                whileHover={reduceMotion ? {} : { y: -6 }}
                className="relative h-full"
              >
                {item.locked && (
                  <div
                    className="
                      absolute top-4 right-4 z-10
                      p-1.5 rounded-full
                      bg-[var(--accent)]/20
                      text-[var(--accent)]
                    "
                  >
                    <Lock size={14} strokeWidth={1.5} />
                  </div>
                )}

                <div
                  className="
                    group h-full
                    p-8 rounded-3xl
                    backdrop-blur-xl
                    bg-white/55 dark:bg-white/5
                    border border-white/25 dark:border-white/10
                    shadow-[0_14px_40px_rgba(0,0,0,0.14)]
                    transition
                    hover:border-[var(--accent)]/40
                  "
                >
                  <div
                    className="
                      w-14 h-14 mb-6 rounded-2xl
                      flex items-center justify-center
                      bg-[var(--accent)]/15
                      text-[var(--accent)]
                      transition-transform
                      group-hover:scale-[1.06]
                    "
                  >
                    <Icon
                      {...iconProps}
                      className={item.locked ? "opacity-50" : "opacity-100"}
                    />
                  </div>

                  <h3 className="text-lg font-semibold mb-1">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[var(--foreground)]/70 leading-relaxed">
                    {item.locked
                      ? "Feature currently unavailable."
                      : item.title === "Next Project"
                      ? "Upcoming initiatives and explorations."
                      : `Access ${item.title} resources.`}
                  </p>
                </div>
              </motion.div>
            );

            return item.locked ? (
              <button
                key={item.title}
                onClick={() => setShowPopup(true)}
                className="text-left"
                aria-disabled
              >
                {Card}
              </button>
            ) : (
              <Link key={item.title} href={item.href}>
                {Card}
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
