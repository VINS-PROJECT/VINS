"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Activity,
  X,
} from "lucide-react";

export default function StatusPage() {
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
      detail: "Assets cached in 100% regions.",
    },
    {
      name: "Email Delivery",
      status: "Outage",
      description: "Email sending temporarily unavailable.",
      detail: "SMTP server under maintenance.",
    },
  ];

  const getStatus = (status) =>
    status === "Operational"
      ? { icon: CheckCircle, class: "text-green-500" }
      : status === "Degraded"
      ? { icon: AlertTriangle, class: "text-amber-400" }
      : { icon: XCircle, class: "text-red-500" };

  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    filter === "All"
      ? services
      : services.filter((s) => s.status === filter);

  const globalStatus = services.find((s) => s.status === "Outage")
    ? "Outage"
    : services.find((s) => s.status === "Degraded")
    ? "Degraded"
    : "Operational";

  const global = getStatus(globalStatus);

  return (
    <main className="
      min-h-screen pt-32 pb-32 relative overflow-hidden
      bg-[var(--background)] text-[var(--foreground)]
      transition-colors
    ">
      {/* Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 40% 15%, var(--accent)/0.22 0%, transparent 72%),
            radial-gradient(circle at 75% 85%, var(--accent-dark)/0.22 0%, transparent 75%)
          `,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Activity className={`w-16 h-16 mx-auto mb-4 ${global.class}`} />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            System Status
          </h1>
          <p className="opacity-70 max-w-xl mx-auto">
            Real-time health check of all VINS infrastructure.
          </p>
        </motion.div>

        {/* GLOBAL STATUS */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl
            border border-[var(--border)]
            backdrop-blur-xl bg-[var(--background)]/60
            shadow-[0_6px_18px_rgba(0,0,0,0.15)]
          ">
            {(() => {
              const Icon = global.icon;
              return <Icon size={20} className={global.class} />;
            })()}
            <span className={`font-semibold ${global.class}`}>
              {globalStatus === "Operational"
                ? "All Systems Operational"
                : globalStatus === "Degraded"
                ? "Some Systems Degraded"
                : "Service Outage Detected"}
            </span>
          </div>
        </motion.div>

        {/* FILTER */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {["All", "Operational", "Degraded", "Outage"].map((f) => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              whileTap={{ scale: 0.93 }}
              className={`
                px-5 py-2 rounded-xl text-sm font-semibold border transition
                ${
                  filter === f
                    ? "bg-[var(--accent)] text-black shadow-md"
                    : "bg-[var(--background)]/60 backdrop-blur-md border-[var(--border)]"
                }
              `}
            >
              {f}
            </motion.button>
          ))}
        </div>

        {/* LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((s, i) => {
            const S = getStatus(s.status);
            const Icon = S.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className="
                  p-7 rounded-2xl cursor-pointer
                  backdrop-blur-xl bg-[var(--background)]/60
                  border border-[var(--border)]
                  shadow-[0_4px_18px_-4px_rgba(0,0,0,0.25)]
                  hover:shadow-[0_8px_30px_-6px_var(--accent)/40]
                  transition-all
                "
                onClick={() => setSelected(s)}
              >
                <h3 className="text-xl font-bold mb-2">{s.name}</h3>
                <p className="text-sm opacity-70 mb-4">{s.description}</p>
                <div className="flex items-center gap-2">
                  <Icon size={20} className={S.class} />
                  <span className={`font-semibold ${S.class}`}>
                    {s.status}
                  </span>
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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-6 z-[100]"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="w-full max-w-lg p-7 rounded-2xl
                backdrop-blur-xl bg-[var(--background)]/70
                border border-[var(--border)]
                shadow-[0_6px_25px_rgba(0,0,0,0.25)]
              "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-2xl font-bold">{selected.name}</h3>
                <button onClick={() => setSelected(null)}>
                  <X size={22} className="opacity-70 hover:opacity-100" />
                </button>
              </div>
              <p className="opacity-80">{selected.detail}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
