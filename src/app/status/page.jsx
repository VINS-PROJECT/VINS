"use client";

import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, XCircle, Activity } from "lucide-react";

export default function StatusPage() {
  const services = [
    { name: "Website", status: "Operational", description: "All systems running normally." },
    { name: "API Server", status: "Degraded", description: "All API routes are stable." },
    { name: "Database", status: "Operational", description: "Database responses optimal." },
    { name: "CDN / Asset Delivery", status: "Operational", description: "Static assets delivered without issues." },
    { name: "Email Delivery", status: "Degraded", description: "Transactional emails are sending normally." },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "Operational":
        return <CheckCircle className="w-5 h-5 text-[#8CE99A]" />;
      case "Degraded":
        return <AlertTriangle className="w-5 h-5 text-yellow-300" />;
      case "Outage":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Activity className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Operational":
        return "text-[#8CE99A]";
      case "Degraded":
        return "text-yellow-300";
      case "Outage":
        return "text-red-500";
      default:
        return "text-gray-400";
    }
  };

  return (
    <main
      className="
        min-h-screen pt-28 pb-24 relative overflow-hidden
        bg-[var(--background)] text-[var(--foreground)]
        transition-colors duration-500
      "
    >
      {/* === Premium Gold Glow BG === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.17 }}
        transition={{ duration: 1.4 }}
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 35% 30%, var(--accent)25, transparent 70%),
            radial-gradient(circle at 80% 75%, var(--accent)18, transparent 60%)
          `,
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* === Header === */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <Activity className="w-14 h-14 text-[var(--accent)] mx-auto mb-4" />

          <h1
            className="
              text-4xl md:text-5xl font-extrabold 
              bg-clip-text text-transparent
            "
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

        {/* === Global Status Box === */}
        <div className="text-center mb-12">
          <div
            className="
              inline-flex items-center gap-3 px-6 py-3 rounded-xl 
              backdrop-blur-md shadow-[0_0_18px_var(--accent)]
              border border-[var(--border)]
              bg-[var(--card)]
            "
          >
            <CheckCircle className="w-5 h-5 text-[#8CE99A]" />
            <span className="text-lg font-semibold text-[#8CE99A]">
              All Systems Operational
            </span>
          </div>
        </div>

        {/* === Services List === */}
        <div className="space-y-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="
                flex justify-between items-center 
                rounded-xl px-6 py-5
                backdrop-blur-sm
                bg-[var(--card)]
                border border-[var(--border)]
                hover:border-[var(--accent)]/40
                hover:bg-[var(--accent)]/10
                transition-all shadow-[0_0_10px_rgba(0,0,0,0.15)]
              "
            >
              {/* Left */}
              <div>
                <h3 className="text-lg font-semibold">{service.name}</h3>
                <p className="opacity-70 text-sm mt-1">{service.description}</p>
              </div>

              {/* Right status */}
              <div className="flex items-center gap-2">
                {getStatusIcon(service.status)}
                <span className={`font-medium ${getStatusColor(service.status)}`}>
                  {service.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* === Uptime History === */}
        <section className="mt-20">
          <h2 className="text-xl font-bold text-[var(--accent)] mb-4">
            Uptime History (Past 30 Days)
          </h2>

          <div className="grid grid-cols-30 gap-1">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="
                  w-full h-4 rounded-sm cursor-pointer
                  bg-[#8CE99A]/80 hover:bg-[#8CE99A]
                  transition shadow-sm
                "
                title="100% Uptime"
              />
            ))}
          </div>

          <p className="opacity-70 text-xs mt-3">
            All systems maintained{" "}
            <span className="text-[#8CE99A] font-semibold">100% uptime</span> over the last 30 days.
          </p>
        </section>
      </div>

      {/* Bottom Fade */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-28 
          bg-gradient-to-t from-[var(--background)] to-transparent
          pointer-events-none
        "
      />
    </main>
  );
}
