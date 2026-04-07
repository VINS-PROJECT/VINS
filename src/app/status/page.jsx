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

/* DATA */
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
    detail: "SMTP server under maintenance.",
  },
];

const STATUS = {
  Operational: {
    icon: CheckCircle,
    color: "text-emerald-500",
  },
  Degraded: {
    icon: AlertTriangle,
    color: "text-yellow-500",
  },
  Outage: {
    icon: XCircle,
    color: "text-red-500",
  },
};

export default function StatusPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (filter === "All") return services;
    return services.filter((s) => s.status === filter);
  }, [filter]);

  const globalStatus = useMemo(() => {
    if (services.some((s) => s.status === "Outage")) return "Outage";
    if (services.some((s) => s.status === "Degraded")) return "Degraded";
    return "Operational";
  }, []);

  const counters = {
    Operational: services.filter((s) => s.status === "Operational").length,
    Degraded: services.filter((s) => s.status === "Degraded").length,
    Outage: services.filter((s) => s.status === "Outage").length,
  };

  const GlobalIcon = STATUS[globalStatus].icon;

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-28 pb-28">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[400px] h-[400px] bg-[var(--accent)]/10 blur-[120px] top-[-100px] left-1/2 -translate-x-1/2 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-16">

        {/* HEADER */}
        <div className="text-center space-y-3">
          <Activity className="mx-auto text-[var(--accent)]" />
          <h1 className="text-4xl md:text-5xl font-semibold">
            System Status
          </h1>
          <p className="text-sm opacity-60">
            Real-time infrastructure monitoring
          </p>
        </div>

        {/* GLOBAL STATUS */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="
            mx-auto flex items-center gap-3
            px-6 py-4 rounded-2xl
            border border-[var(--border)]
            bg-[var(--background)]/60 backdrop-blur-xl
            shadow-lg
          "
        >
          <GlobalIcon className={STATUS[globalStatus].color} size={20} />
          <span className="text-sm font-medium">
            {globalStatus === "Operational" && "All Systems Operational"}
            {globalStatus === "Degraded" && "Partial Degradation"}
            {globalStatus === "Outage" && "Service Outage"}
          </span>
        </motion.div>

        {/* KPI */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          {Object.entries(counters).map(([k, v]) => (
            <div
              key={k}
              className="
                p-4 text-center rounded-xl
                border border-[var(--border)]
                bg-[var(--background)]/50 backdrop-blur
              "
            >
              <span className="text-xl font-semibold">{v}</span>
              <p className="text-xs opacity-60">{k}</p>
            </div>
          ))}
        </div>

        {/* FILTER */}
        <div className="flex justify-center gap-2 flex-wrap">
          {["All", "Operational", "Degraded", "Outage"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`
                px-4 py-2 rounded-lg text-sm border transition
                ${
                  filter === f
                    ? "bg-[var(--accent)] text-black border-[var(--accent)]"
                    : "border-[var(--border)] hover:border-[var(--accent)]"
                }
              `}
            >
              {f}
            </button>
          ))}
        </div>

        {/* SERVICES */}
        <div className="grid md:grid-cols-2 gap-5">
          {filtered.map((s, i) => {
            const cfg = STATUS[s.status];
            const Icon = cfg.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={() => setSelected(s)}
                className="
                  group cursor-pointer p-5 rounded-xl
                  border border-[var(--border)]
                  bg-[var(--background)]/60 backdrop-blur-xl
                  transition-all duration-300
                  hover:border-[var(--accent)]
                "
              >
                {/* glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[var(--accent)]/5 rounded-xl transition" />

                <div className="relative">
                  <h3 className="font-medium">{s.name}</h3>
                  <p className="text-sm opacity-60 mt-1">
                    {s.description}
                  </p>

                  <div className="flex items-center gap-2 mt-3 text-sm">
                    <Icon className={cfg.color} size={16} />
                    <span className={cfg.color}>{s.status}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="
                w-full max-w-md p-6 rounded-2xl
                bg-[var(--background)]/90 backdrop-blur-xl
                border border-[var(--border)]
                shadow-xl
              "
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-lg">
                  {selected.name}
                </h3>
                <button onClick={() => setSelected(null)}>
                  <X size={18} />
                </button>
              </div>

              <p className="text-sm opacity-70">
                {selected.detail}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}