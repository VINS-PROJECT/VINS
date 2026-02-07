"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Activity,
  X,
} from "lucide-react";

/* ================= DATA (API-READY) ================= */
const services = [
  {
    name: "Website",
    status: "Operational",
    description: "All systems running normally.",
    detail: "Main frontend website is fully operational.",
  },
  {
    name: "API Server",
    status: "Degraded",
    description: "Some endpoints slightly delayed.",
    detail: "Latency increased in auth & analytics endpoints.",
  },
  {
    name: "Database",
    status: "Operational",
    description: "Healthy query performance.",
    detail: "No replication lag detected.",
  },
  {
    name: "CDN",
    status: "Operational",
    description: "Global delivery optimal.",
    detail: "Assets cached in all regions.",
  },
  {
    name: "Email Delivery",
    status: "Outage",
    description: "Email sending temporarily unavailable.",
    detail: "SMTP server under scheduled maintenance.",
  },
];

/* ================= STATUS CONFIG ================= */
const STATUS = {
  Operational: {
    icon: CheckCircle,
    tone: "var(--accent)",
    label: "Operational",
  },
  Degraded: {
    icon: AlertTriangle,
    tone: "var(--accent-dark)",
    label: "Degraded",
  },
  Outage: {
    icon: XCircle,
    tone: "#ef4444",
    label: "Outage",
  },
};

export default function StatusPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  /* ================= DERIVED ================= */
  const filtered = useMemo(() => {
    if (filter === "All") return services;
    return services.filter((s) => s.status === filter);
  }, [filter]);

  const globalStatus = useMemo(() => {
    if (services.some((s) => s.status === "Outage")) return "Outage";
    if (services.some((s) => s.status === "Degraded")) return "Degraded";
    return "Operational";
  }, []);

  const counters = useMemo(
    () => ({
      Operational: services.filter((s) => s.status === "Operational").length,
      Degraded: services.filter((s) => s.status === "Degraded").length,
      Outage: services.filter((s) => s.status === "Outage").length,
    }),
    []
  );

  const GlobalIcon = STATUS[globalStatus].icon;

  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">

      {/* ================= GOLD DIAGONAL HEADER ================= */}
      <div
        aria-hidden
        className="
          absolute top-0 left-0 w-full
          h-[420px]
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
          absolute top-[360px] left-0 w-full h-40
          bg-gradient-to-b from-transparent to-[var(--background)]
          pointer-events-none
        "
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 pt-36 pb-32">
        <div className="max-w-7xl mx-auto px-6">

          {/* ================= HEADER ================= */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <div
              className="
                mx-auto w-16 h-16 rounded-2xl
                flex items-center justify-center
                backdrop-blur-xl
                bg-white/55 dark:bg-white/5
                border border-white/25 dark:border-white/10
                text-[var(--accent)]
                mb-6
              "
            >
              <Activity className="w-8 h-8" />
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              System <span className="text-[var(--accent)]">Status</span>
            </h1>

            <p className="opacity-70 max-w-xl mx-auto">
              Real-time operational overview of VINS+ infrastructure.
            </p>
          </motion.div>

          {/* ================= GLOBAL STATUS ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-20 flex justify-center"
          >
            <div
              className="
                inline-flex items-center gap-3 px-7 py-4 rounded-2xl
                backdrop-blur-xl
                bg-white/60 dark:bg-white/5
                border border-white/25 dark:border-white/10
                shadow-[0_20px_50px_rgba(0,0,0,0.25)]
              "
            >
              <GlobalIcon
                size={22}
                style={{ color: STATUS[globalStatus].tone }}
                className="motion-safe:animate-pulse"
              />
              <span className="font-semibold">
                {globalStatus === "Operational" && "All Systems Operational"}
                {globalStatus === "Degraded" && "Partial Service Degradation"}
                {globalStatus === "Outage" && "Service Outage Detected"}
              </span>
            </div>
          </motion.div>

          {/* ================= KPI ================= */}
          <div className="grid grid-cols-3 gap-5 max-w-xl mx-auto mb-20">
            {["Operational", "Degraded", "Outage"].map((k) => (
              <div
                key={k}
                className="
                  text-center p-5 rounded-2xl
                  backdrop-blur-xl
                  bg-white/55 dark:bg-white/5
                  border border-white/25 dark:border-white/10
                "
              >
                <span className="block text-3xl font-bold">
                  {counters[k]}
                </span>
                <span className="text-xs opacity-70">{k}</span>
              </div>
            ))}
          </div>

          {/* ================= FILTER ================= */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {["All", "Operational", "Degraded", "Outage"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`
                  px-5 py-2 rounded-xl text-sm font-semibold
                  backdrop-blur-xl border transition
                  ${
                    filter === f
                      ? "bg-[var(--accent)] text-black border-[var(--accent)]"
                      : "bg-white/55 dark:bg-white/5 border-white/25 dark:border-white/10"
                  }
                `}
              >
                {f}
              </button>
            ))}
          </div>

          {/* ================= SERVICE GRID ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((s, i) => {
              const cfg = STATUS[s.status];
              const Icon = cfg.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelected(s)}
                  className="
                    cursor-pointer p-7 rounded-2xl
                    backdrop-blur-xl
                    bg-white/60 dark:bg-white/5
                    border border-white/25 dark:border-white/10
                    shadow-[0_14px_40px_rgba(0,0,0,0.22)]
                    hover:border-[var(--accent)]/40
                  "
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {s.name}
                  </h3>

                  <p className="text-sm opacity-70 mb-4">
                    {s.description}
                  </p>

                  <div className="flex items-center gap-2">
                    <Icon size={18} style={{ color: cfg.tone }} />
                    <span
                      className="font-semibold text-sm"
                      style={{ color: cfg.tone }}
                    >
                      {cfg.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= DETAIL MODAL ================= */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-[100]
              flex items-center justify-center p-6
              bg-black/40 backdrop-blur-sm
            "
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="
                w-full max-w-lg p-7 rounded-2xl
                backdrop-blur-xl
                bg-white/65 dark:bg-white/6
                border border-white/25 dark:border-white/10
                shadow-[0_24px_70px_rgba(0,0,0,0.35)]
              "
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-2xl font-semibold">
                  {selected.name}
                </h3>
                <button onClick={() => setSelected(null)}>
                  <X className="opacity-70 hover:opacity-100" />
                </button>
              </div>

              <p className="opacity-80 leading-relaxed">
                {selected.detail}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
