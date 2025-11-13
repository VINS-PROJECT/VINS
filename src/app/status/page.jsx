"use client";

import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, XCircle, Activity } from "lucide-react";

export default function StatusPage() {
  // === Manual Status Data (bisa dibuat auto nanti) ===
  const services = [
    {
      name: "Website",
      status: "Operational",
      description: "All systems running normally.",
    },
    {
      name: "API Server",
      status: "Operational",
      description: "All API routes are stable.",
    },
    {
      name: "Database",
      status: "Operational",
      description: "Database responses optimal.",
    },
    {
      name: "CDN / Asset Delivery",
      status: "Operational",
      description: "Static assets delivered without issues.",
    },
    {
      name: "Authentication",
      status: "Operational",
      description: "Login, sessions, and tokens stable.",
    },
    {
      name: "Email Delivery",
      status: "Operational",
      description: "Transactional emails are sending normally.",
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "Operational":
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case "Degraded":
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case "Outage":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Activity className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Operational":
        return "text-green-400";
      case "Degraded":
        return "text-yellow-400";
      case "Outage":
        return "text-red-500";
      default:
        return "text-gray-400";
    }
  };

  return (
    <main className="min-h-screen bg-black text-gray-200 pt-28 pb-24 relative overflow-hidden">
      {/* Glow BG */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.3 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(226,192,124,0.18),transparent_70%),radial-gradient(circle_at_80%_80%,rgba(209,170,96,0.12),transparent_60%)]"
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <Activity className="w-12 h-12 text-[#E2C07C] mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#E2C07C] via-[#d6b270] to-[#b99a5e] text-transparent bg-clip-text">
            System Status
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Real-time overview of system health, services, and uptime performance.
          </p>
        </motion.div>

        {/* Global System State */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-[#E2C07C]/30 rounded-xl backdrop-blur-lg">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-lg font-semibold text-green-400">
              All Systems Operational
            </span>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex justify-between items-center bg-white/5 border border-[#E2C07C]/20 px-6 py-5 rounded-xl hover:border-[#E2C07C]/40 transition-all duration-300"
            >
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {service.name}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {getStatusIcon(service.status)}
                <span className={`font-medium ${getStatusColor(service.status)}`}>
                  {service.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Uptime History */}
        <section className="mt-20">
          <h2 className="text-xl font-bold text-[#E2C07C] mb-4">
            Uptime History (Past 30 Days)
          </h2>

          <div className="grid grid-cols-12 gap-2">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="w-full h-4 rounded bg-green-500/70 hover:bg-green-400 transition cursor-pointer"
                title="100% Uptime"
              />
            ))}
          </div>

          <p className="text-gray-400 text-xs mt-3">
            All systems maintained 100% uptime over the last 30 days.
          </p>
        </section>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </main>
  );
}
