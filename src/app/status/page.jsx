"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Activity,
  X
} from "lucide-react";

export default function StatusPage() {
  const services = [
    {
      name: "Website",
      status: "Operational",
      description: "All systems running normally.",
      detail: "Main website is fully operational."
    },
    {
      name: "API Server",
      status: "Degraded",
      description: "Some endpoints may be slower.",
      detail: "API experiencing minor slowdowns."
    },
    {
      name: "Database",
      status: "Operational",
      description: "Database responses optimal.",
      detail: "Latency is within expected thresholds."
    },
    {
      name: "CDN / Asset Delivery",
      status: "Operational",
      description: "Static assets delivered without issues.",
      detail: "CDN fully online."
    },
    {
      name: "Email Delivery",
      status: "Degraded",
      description: "Some delays in email delivery.",
      detail: "Queues slightly delayed in some regions."
    }
  ];

  const getStatusData = (status) => {
    if (status === "Operational")
      return { color: "#65d46e", icon: CheckCircle };
    if (status === "Degraded")
      return { color: "#ffd43b", icon: AlertTriangle };
    return { color: "#ff6b6b", icon: XCircle };
  };

  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const globalStatus = services.some((s) => s.status === "Degraded")
    ? "Degraded"
    : "Operational";

  const filtered = filter === "All"
    ? services
    : services.filter((s) => s.status === filter);

  return (
    <main className="min-h-screen pt-32 pb-32 bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <Activity
            className="w-16 h-16 mx-auto mb-4"
            style={{ color: getStatusData(globalStatus).color }}
          />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 tracking-tight">
            System Status
          </h1>
          <p className="text-base md:text-lg opacity-70 max-w-2xl mx-auto">
            Simple status overview of all monitored services.
          </p>
        </motion.div>

        {/* GLOBAL STATUS */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-[var(--border)] bg-[var(--card)] text-lg font-semibold">
            {(() => {
              const S = getStatusData(globalStatus);
              const Icon = S.icon;
              return (
                <>
                  <Icon size={20} style={{ color: S.color }} />
                  <span style={{ color: S.color }}>
                    {globalStatus === "Operational"
                      ? "All Systems Operational"
                      : "Some Systems Degraded"}
                  </span>
                </>
              );
            })()}
          </div>
        </motion.div>

        {/* FILTER */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {["All", "Operational", "Degraded"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-xl text-sm md:text-base font-semibold border transition
                ${
                  filter === f
                    ? "bg-[var(--accent)] text-black"
                    : "bg-[var(--card)]"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* SERVICE LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((service, i) => {
            const { icon: Icon, color } = getStatusData(service.status);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-7 rounded-2xl bg-[var(--card)] border border-[var(--border)] 
                hover:shadow-lg hover:shadow-[var(--accent)]/10 
                cursor-pointer transition"
                onClick={() => setSelected(service)}
              >
                <div className="flex flex-col gap-3 justify-between h-full">
                  <h3 className="text-xl font-bold">{service.name}</h3>
                  <p className="text-sm opacity-70">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 mt-auto">
                    <Icon size={20} style={{ color }} />
                    <span className="font-medium" style={{ color }}>
                      {service.status}
                    </span>
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
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="w-full max-w-lg bg-[var(--card)] p-7 rounded-2xl border border-[var(--border)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-2xl font-bold">{selected.name}</h3>
                <button onClick={() => setSelected(null)}>
                  <X size={22} />
                </button>
              </div>

              <p className="opacity-80 text-base leading-relaxed">
                {selected.detail}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
