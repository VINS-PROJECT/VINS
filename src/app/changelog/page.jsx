"use client";

import { motion } from "framer-motion";
import { CalendarDays, Sparkle, Hammer, Bug } from "lucide-react";

/* ================= ICON STYLE ================= */
const iconProps = {
  size: 14,
  strokeWidth: 1.25,
  absoluteStrokeWidth: true,
};

/* ================= DATA ================= */
const CHANGELOGS = [
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
    <main className="min-h-screen pt-28 pb-32 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-3xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <header className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Changelog
          </h1>
          <p className="mt-3 text-sm opacity-65 max-w-lg">
            A simple record of updates, improvements, and fixes.
          </p>
        </header>

        {/* ================= TIMELINE ================= */}
        <div className="relative space-y-16">
          <div className="absolute left-2 top-0 w-px h-full bg-[var(--border)]" />

          {CHANGELOGS.map((log) => (
            <div key={log.version} className="relative pl-10">

              {/* DOT */}
              <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[var(--accent)]" />

              {/* CARD */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="
                  p-6 rounded-xl
                  bg-white dark:bg-white/5
                  border border-white/20 dark:border-white/10
                "
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-lg">
                    {log.version}
                  </span>

                  <span className="text-xs opacity-60 flex items-center gap-2">
                    <CalendarDays {...iconProps} />
                    {log.date}
                  </span>
                </div>

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
                        <span className="text-sm leading-relaxed opacity-80">
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
    </main>
  );
}
