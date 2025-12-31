"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Stars,
  Hammer,
  Bug,
  Sparkle,
  History,
  Mail,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

/* ================= WAVE HIGHLIGHT ================= */
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

/* ================= CHANGELOG DATA ================= */
const CHANGELOGS = [
  {
    version: "v3.0.0",
    date: "2026-01-01",
    highlight: true,
    changes: [
      { text: "Launch of V3 with new features and improvements.", type: "update" },
      { text: "Resolved critical security vulnerabilities.", type: "fix" },
      { text: "Uptodate content migration completed.", type: "update" },
      { text: "Add pop up notifications for important updates.", type: "update" },
      { text: "Add Chatbot support for user assistance.", type: "update" },
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
  const ref = useRef(null);

  /* ================= FILTER ================= */
  const [typeFilter, setTypeFilter] = useState("All");
  const [versionFilter, setVersionFilter] = useState("All");

  /* ================= LAST VISIT ================= */
  const [lastVisit, setLastVisit] = useState(null);

  useEffect(() => {
    const last = localStorage.getItem("lastVisit");
    setLastVisit(last ? new Date(last) : null);
    localStorage.setItem("lastVisit", new Date().toISOString());
  }, []);

  const isNew = (date) => lastVisit && new Date(date) > lastVisit;

  /* ================= COUNTDOWN ================= */
  const targetDate = new Date("2026-01-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = targetDate - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  /* ================= FILTERED DATA ================= */
  const versions = ["All", ...CHANGELOGS.map((l) => l.version)];

  const filteredLogs = CHANGELOGS
    .filter((l) => versionFilter === "All" || l.version === versionFilter)
    .map((l) => ({
      ...l,
      changes:
        typeFilter === "All"
          ? l.changes
          : l.changes.filter((c) => c.type === typeFilter),
    }))
    .filter((l) => l.changes.length > 0);

  /* ================= SUBSCRIBE ================= */
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
    setSubscribed(true);
  };

  return (
    <main
      ref={ref}
      className="relative min-h-screen pt-28 pb-32 bg-[var(--background)] text-[var(--foreground)] overflow-hidden"
    >
      {/* BACKDROP */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, var(--accent)/0.08, transparent 60%),
            radial-gradient(circle at 80% 75%, var(--accent-dark)/0.10, transparent 65%)
          `,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="mx-auto w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-xl bg-white/45 dark:bg-white/5 border border-white/25 dark:border-white/10 text-[var(--accent)] mb-5">
            <History />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">
            <WaveHighlight>Changelog</WaveHighlight>
          </h1>
        </div>

        {/* COUNTDOWN */}
        <div className="text-center mb-20">
          <p className="opacity-70 mb-4">Next major release</p>
          <div className="flex justify-center gap-4">
            {Object.entries(timeLeft).map(([k, v]) => (
              <div
                key={k}
                className="px-4 py-3 rounded-xl backdrop-blur-xl bg-white/55 dark:bg-white/5 border border-white/25 dark:border-white/10"
              >
                <span className="block text-3xl font-bold text-[var(--accent)]">
                  {v}
                </span>
                <span className="text-[10px] uppercase opacity-70">{k}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {["All", "update", "fix", "bug"].map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold backdrop-blur-xl border ${
                typeFilter === t
                  ? "bg-[var(--accent)] text-black border-[var(--accent)]"
                  : "bg-white/45 dark:bg-white/5 border-white/25 dark:border-white/10"
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}

          <select
            value={versionFilter}
            onChange={(e) => setVersionFilter(e.target.value)}
            className="px-4 py-2 rounded-xl backdrop-blur-xl bg-white/45 dark:bg-white/5 border border-white/25 dark:border-white/10"
          >
            {versions.map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </div>

        {/* TIMELINE */}
        <div className="relative space-y-16">
          <div className="absolute left-6 top-0 w-[2px] h-full bg-[var(--accent)]/25 rounded-full" />

          {filteredLogs.map((log) => (
            <div key={log.version} className="relative pl-14">
              {/* NODE */}
              <div
                className={`absolute left-0 top-2 w-9 h-9 rounded-full flex items-center justify-center ${
                  log.highlight
                    ? "bg-[var(--accent)] text-black"
                    : "bg-[var(--accent)]/15 text-[var(--accent)]"
                }`}
              >
                <Stars size={15} />
              </div>

              {/* CARD */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className={`p-7 rounded-2xl backdrop-blur-xl bg-white/55 dark:bg-white/5 border border-white/25 dark:border-white/10 ${
                  log.highlight
                    ? "shadow-[0_18px_48px_rgba(0,0,0,0.18)]"
                    : ""
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-[var(--accent)]">
                    {log.version}
                    {isNew(log.date) && (
                      <span className="ml-3 px-2 py-1 text-[10px] rounded-full bg-[var(--accent)] text-black font-semibold">
                        NEW
                      </span>
                    )}
                  </span>

                  <span className="text-sm opacity-70 flex items-center gap-2">
                    <CalendarDays size={14} />
                    {log.date}
                  </span>
                </div>

                <ul className="space-y-3">
                  {log.changes.map((c, idx) => {
                    const Icon = TYPE_ICON[c.type];
                    return (
                      <li key={idx} className="flex gap-3 items-start">
                        <Icon
                          className={`w-4 mt-0.5 ${
                            c.type === "bug"
                              ? "text-red-400"
                              : c.type === "fix"
                              ? "text-green-400"
                              : "text-[var(--accent)]"
                          }`}
                        />
                        <span className="text-sm">{c.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* SUBSCRIBE */}
        <div className="mt-28 text-center max-w-md mx-auto">
          <div className="mx-auto w-12 h-12 mb-4 rounded-xl flex items-center justify-center backdrop-blur-xl bg-white/45 dark:bg-white/5 border border-white/25 dark:border-white/10 text-[var(--accent)]">
            <Mail />
          </div>

          <h3 className="text-lg font-semibold mb-2">Stay informed</h3>

          <p className="opacity-70 mb-5">
            Receive notifications when new updates are released.
          </p>

          {subscribed ? (
            <p className="text-[var(--accent)] font-semibold">
              You’re subscribed ✓
            </p>
          ) : (
            <form onSubmit={subscribe} className="flex gap-3">
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl backdrop-blur-xl bg-white/55 dark:bg-white/5 border border-white/25 dark:border-white/10"
              />
              <button className="px-5 py-3 rounded-xl bg-[var(--accent)] text-black font-semibold">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
