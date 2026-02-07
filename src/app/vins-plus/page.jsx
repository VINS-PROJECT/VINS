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

/* ================= ICON STYLE ================= */
const iconProps = {
  size: 26,
  strokeWidth: 1.25,
  absoluteStrokeWidth: true,
};

export default function VinsPlusPage() {
  const [showPopup, setShowPopup] = useState(false);
  const modalRef = useRef(null);
  const reduceMotion = useReducedMotion();

  /* ================= ITEMS ================= */
  const items = [
    { title: "Portfolio", href: "/vins-plus/portfolio", icon: PanelsTopLeft },
    { title: "Project", href: "/vins-plus/project", icon: Briefcase },
    { title: "Certificate", href: "/vins-plus/certificate", icon: BadgeCheck },
    { title: "Resume", href: "/vins-plus/resume", icon: FileUser },
    { title: "Next Project", href: "/vins-plus/next-project", icon: Rocket },
    { title: "Experience", href: "/vins-plus/experience", icon: Landmark },
  ];

  /* ================= ESC TO CLOSE ================= */
  useEffect(() => {
    if (!showPopup) return;
    const onKey = (e) => e.key === "Escape" && setShowPopup(false);
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
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-md"
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
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="
                w-[90%] max-w-sm rounded-3xl p-8 text-center
                bg-white/60 dark:bg-white/6
                backdrop-blur-xl
                border border-white/25 dark:border-white/10
                shadow-2xl
                outline-none
              "
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 opacity-60 hover:opacity-100"
              >
                <X size={18} />
              </button>

              <div className="mx-auto w-14 h-14 mb-5 rounded-2xl flex items-center justify-center bg-[var(--accent)]/15 text-[var(--accent)]">
                <Lock size={26} />
              </div>

              <h3 className="text-lg font-semibold">Feature Locked</h3>
              <p className="mt-2 text-sm text-[var(--foreground)]/70">
                This feature is currently under development.
              </p>

              <button
                onClick={() => setShowPopup(false)}
                className="
                  mt-7 px-6 py-2.5 rounded-xl
                  bg-[var(--accent)] text-black
                  font-semibold hover:opacity-90
                "
              >
                Understood
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MAIN ================= */}
      <section className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        
        {/* ================= HEADER (LOCAL BACKGROUND) ================= */}
        <div className="relative overflow-hidden mb-24">
          {/* Gold diagonal */}
          <div
            aria-hidden
            className="
              absolute inset-0
              bg-gradient-to-br
              from-[var(--accent)]/25
              via-[var(--accent)]/10
              to-transparent
              -skew-y-6
              origin-top-left
            "
          />

          {/* Fade to content */}
          <div
            aria-hidden
            className="
              absolute bottom-0 left-0 w-full h-24
              bg-gradient-to-t from-[var(--background)] to-transparent
            "
          />

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative py-32 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              VINS<span className="text-[var(--accent)]">+</span>
            </h1>
            <span className="mt-2 block text-sm font-mono text-[var(--foreground)]/50">
              /VINS+
            </span>
          </motion.div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="px-6 pb-32 flex justify-center">
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
                  className="
                    p-8 rounded-3xl
                    bg-white/55 dark:bg-white/5
                    backdrop-blur-xl
                    border border-white/25 dark:border-white/10
                    shadow-lg
                    hover:border-[var(--accent)]/40
                    transition
                  "
                >
                  <div className="w-14 h-14 mb-6 rounded-2xl flex items-center justify-center bg-[var(--accent)]/15 text-[var(--accent)]">
                    <Icon {...iconProps} />
                  </div>

                  <h3 className="text-lg font-semibold mb-1">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[var(--foreground)]/70">
                    Access {item.title} resources.
                  </p>
                </motion.div>
              );

              return (
                <Link key={item.title} href={item.href}>
                  {Card}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
