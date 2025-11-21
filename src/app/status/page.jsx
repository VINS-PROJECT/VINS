"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Activity,
  Dot,
  Info,
  X
} from "lucide-react";

export default function StatusPage() {
  const services = [
    {
      name: "Website",
      status: "Operational",
      description: "All systems running normally.",
      detail:
        "Main website is fully operational with no detected performance issues.",
    },
    {
      name: "API Server",
      status: "Degraded",
      description: "All API routes are stable.",
      detail:
        "API is responding slower than usual due to internal maintenance.",
    },
    {
      name: "Database",
      status: "Operational",
      description: "Database responses optimal.",
      detail: "Database latency is within expected thresholds.",
    },
    {
      name: "CDN / Asset Delivery",
      status: "Operational",
      description: "Static assets delivered without issues.",
      detail:
        "Content delivery network is serving static assets with minimal latency.",
    },
    {
      name: "Email Delivery",
      status: "Degraded",
      description: "Transactional emails are sending normally.",
      detail:
        "Some email queues are slightly delayed depending on the provider region.",
    },
  ];

  const getStatusColor = (status) =>
    status === "Operational"
      ? "#8CE99A"
      : status === "Degraded"
      ? "#FFD43B"
      : "#FF6B6B";

  const getStatusIcon = (status, size = "w-5 h-5") => {
    switch (status) {
      case "Operational":
        return <CheckCircle className={`${size}`} style={{ color: "#8CE99A" }} />;
      case "Degraded":
        return (
          <AlertTriangle className={`${size} animate-pulse`} style={{ color: "#FFD43B" }} />
        );
      case "Outage":
        return (
          <XCircle className={`${size} animate-pulse`} style={{ color: "#FF6B6B" }} />
        );
      default:
        return <Activity className={`${size}`} />;
    }
  };

  // FILTER
  const [filter, setFilter] = useState("All");

  const filteredServices =
    filter === "All"
      ? services
      : services.filter((s) => s.status === filter);

  // MODAL DETAIL
  const [selected, setSelected] = useState(null);

  // RANDOM 30 DAYS UPTIME
  const uptimeData = Array.from({ length: 30 }).map((_, i) => {
    if (i === 5 || i === 17) return "degraded";
    if (i === 11) return "down";
    return "up";
  });

  // GLOBAL STATUS CHECK
  const globalStatus = (() => {
    if (services.some((s) => s.status === "Outage")) return "Outage";
    if (services.some((s) => s.status === "Degraded")) return "Degraded";
    return "Operational";
  })();

  return (
    <main className="min-h-screen pt-28 pb-24 relative bg-[var(--background)] text-[var(--foreground)]">

      {/* Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, var(--accent)25, transparent 70%),
            radial-gradient(circle at 85% 75%, var(--accent)18, transparent 60%)
          `,
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Activity
            className="w-14 h-14 mx-auto mb-4"
            style={{ color: getStatusColor(globalStatus) }}
          />

          <h1
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--accent), var(--accent-dark))",
            }}
          >
            System Status
          </h1>

          <p className="opacity-70 mt-4 max-w-xl mx-auto leading-relaxed">
            Real-time overview of service health, uptime logs, and system performance.
          </p>
        </motion.div>

        {/* GLOBAL STATUS CARD */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-3 px-7 py-3 rounded-xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-xl shadow-[0_0_18px_var(--accent)]"
          >
            <Dot className="w-10 h-10 animate-pulse" style={{ color: getStatusColor(globalStatus) }} />
            <span
              className="text-lg font-semibold tracking-wide"
              style={{ color: getStatusColor(globalStatus) }}
            >
              {globalStatus === "Operational" && "All Systems Operational"}
              {globalStatus === "Degraded" && "Some Systems Degraded"}
              {globalStatus === "Outage" && "System Outage Detected"}
            </span>
          </motion.div>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex gap-3 justify-center mb-10">
          {["All", "Operational", "Degraded", "Outage"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`
                px-4 py-2 rounded-lg border text-sm font-semibold transition
                ${filter === f ? "bg-[var(--accent)] text-black" : "bg-[var(--card)]"}
              `}
            >
              {f}
            </button>
          ))}
        </div>

        {/* SERVICE LIST */}
        <div className="space-y-5">
          {filteredServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex justify-between items-center p-5 rounded-xl bg-[var(--card)] border border-[var(--border)] hover:bg-[var(--accent)]/10 cursor-pointer transition"
              onClick={() => setSelected(service)}
            >
              <div>
                <h3 className="text-lg font-semibold">{service.name}</h3>
                <p className="text-sm opacity-70 mt-1">{service.description}</p>
              </div>

              <div className="flex items-center gap-2">
                {getStatusIcon(service.status)}
                <span
                  className="font-medium"
                  style={{ color: getStatusColor(service.status) }}
                >
                  {service.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* UPTIME HISTORY */}
        <section className="mt-20">
          <h2 className="text-xl font-bold text-[var(--accent)] mb-4">
            Uptime History (Past 30 Days)
          </h2>

          <div className="grid grid-cols-30 gap-1">
            {uptimeData.map((status, i) => (
              <div
                key={i}
                className={`
                  h-4 rounded-sm 
                  ${status === "up" ? "bg-[#8CE99A]" : status === "degraded" ? "bg-yellow-300" : "bg-red-500"}
                `}
                title={`Day ${i + 1} • ${
                  status === "up"
                    ? "Operational"
                    : status === "degraded"
                    ? "Degraded"
                    : "Outage"
                }`}
              />
            ))}
          </div>

          <p className="opacity-70 text-xs mt-3">
            System performance over the last{" "}
            <span className="text-[var(--accent)] font-semibold">30 days</span>.
          </p>
        </section>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="w-full max-w-md bg-[var(--card)] p-6 rounded-2xl border border-[var(--border)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{selected.name}</h3>

                <button onClick={() => setSelected(null)}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center gap-2 mb-3">
                {getStatusIcon(selected.status)}
                <span style={{ color: getStatusColor(selected.status) }}>
                  {selected.status}
                </span>
              </div>

              <p className="opacity-80 leading-relaxed">{selected.detail}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
