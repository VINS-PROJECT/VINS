"use client";

import { motion } from "framer-motion";
import { CalendarDays, Sparkle, Hammer, Bug } from "lucide-react";
import { version } from "react";

/* ================= ICON STYLE ================= */
const iconProps = {
  size: 14,
  strokeWidth: 1.25,
  absoluteStrokeWidth: true,
};

/* ================= DATA ================= */
const CHANGELOGS = [
  {
    version: "v3.0.0",
    date: "2026-02-07",
    changes: [
      { text: " Revamped UI with new VINS design.", type: "update" },
      { text: " Adding Item and Update VINS+ Menu", type: "update" },
      { text: " Fixed bugs in project detail pages.", type: "fix" },
    ],
  },
  {
    version: "v2.1.0",
    date: "2026-01-15",
    changes: [
      { text: "Added new feature : Porfolio and Resume pages.", type: "update" },
      { text: "Added new articles.", type: "update" },
      { text: "Upgrade navigation bar design.", type: "update" },
      { text: "Fixed minor bugs in user interface.", type: "fix" },
    ],
  },
  {
    version: "v2.0.0",
    date: "2025-12-20",
    changes: [
      { text: "Major platform overhaul and V2 launch.", type: "update" },
      { text: "Cross-device sync issues resolved.", type: "fix" },
      { text: "Memory leak fixed in background services.", type: "bug" },
    ],
  },
  {
    version: "v1.1.0",
    date: "2025-12-08",
    changes: [
      { text: "Notification system released.", type: "update" },
      { text: "Third-party plugin support added.", type: "update" },
      { text: "Improved performance on large datasets.", type: "update" },
    ],
  },
  {
    version: "v1.0.0",
    date: "2025-12-06",
    changes: [
      { text: "Initial UI milestone release.", type: "update" },
      { text: "Mobile stability improvements.", type: "fix" },
    ],
  },
];

const TYPE_ICON = {
  update: Sparkle,
  fix: Hammer,
  bug: Bug,
};

export default function ChangelogPage() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">

      {/* ================= GOLD DIAGONAL HEADER ================= */}
      <div
        aria-hidden
        className="
          absolute top-0 left-0 w-full
          h-[360px]
          bg-gradient-to-br
          from-[var(--accent)]/25
          via-[var(--accent)]/12
          to-transparent
          -skew-y-6
          origin-top-left
          pointer-events-none
        "
      />

      {/* CUT FADE */}
      <div
        aria-hidden
        className="
          absolute top-[300px] left-0 w-full h-32
          bg-gradient-to-b from-transparent to-[var(--background)]
          pointer-events-none
        "
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 pt-32 pb-32">
        <div className="max-w-3xl mx-auto px-6">

          {/* ================= HEADER ================= */}
          <motion.header
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-24"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Change<span className="text-[var(--accent)]">log</span>
            </h1>

            <p className="mt-4 text-[var(--foreground)]/70 max-w-lg">
              A transparent record of updates, improvements, and fixes across
              the VINS+ platform.
            </p>
          </motion.header>

          {/* ================= TIMELINE ================= */}
          <div className="relative space-y-20">

            {/* VERTICAL LINE */}
            <div className="absolute left-[7px] top-0 w-px h-full bg-[var(--border)]" />

            {CHANGELOGS.map((log, i) => (
              <div key={log.version} className="relative pl-12">

                {/* DOT */}
                <span
                  className="
                    absolute left-0 top-2
                    w-4 h-4 rounded-full
                    bg-[var(--accent)]
                    shadow-[0_0_0_6px_rgba(216,199,154,0.15)]
                  "
                />

                {/* CARD */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="
                    p-6 rounded-2xl
                    backdrop-blur-xl
                    bg-[var(--card)]
                    border border-[var(--border)]
                    shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                  "
                >
                  {/* HEADER */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-lg font-semibold tracking-tight">
                      {log.version}
                    </span>

                    <span className="flex items-center gap-2 text-xs text-[var(--foreground)]/60">
                      <CalendarDays {...iconProps} />
                      {log.date}
                    </span>
                  </div>

                  {/* LIST */}
                  <ul className="space-y-3">
                    {log.changes.map((c, idx) => {
                      const Icon = TYPE_ICON[c.type];
                      return (
                        <li key={idx} className="flex gap-3 items-start">
                          <Icon
                            {...iconProps}
                            className={
                              c.type === "bug"
                                ? "text-red-400"
                                : c.type === "fix"
                                ? "text-emerald-400"
                                : "text-[var(--accent)]"
                            }
                          />
                          <span className="text-sm leading-relaxed text-[var(--foreground)]/80">
                            {c.text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
