"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle, History } from "lucide-react";

export default function ChangelogPage() {
  const changelogs = [
    {
      version: "v0.0.1",
      date: "January 2025",
      changes: [
        "Initial project setup started.",
        "Preparing full system for portfolio, certificates, articles, and site structure.",
        "Core architecture planning for upcoming modules.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-gray-200 pt-28 pb-24 relative overflow-hidden">
      {/* Glow Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(226,192,124,0.15),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(209,170,96,0.1),transparent_60%)]"
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <History className="w-12 h-12 text-[#E2C07C] mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#E2C07C] via-[#d6b270] to-[#b99a5e] bg-clip-text text-transparent">
            Changelog
          </h1>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Track updates and progress of the website as development begins.
          </p>
        </motion.div>

        {/* Changelog Entry */}
        <div className="space-y-12">
          {changelogs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-[#E2C07C]/20 rounded-xl p-7 backdrop-blur-md hover:border-[#E2C07C]/40 transition-all"
            >
              <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
                <span className="text-xl font-bold text-[#E2C07C]">
                  {log.version}
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4 text-[#E2C07C]" />
                  {log.date}
                </span>
              </div>

              <ul className="space-y-2">
                {log.changes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-4 h-4 mt-1 text-[#E2C07C]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </main>
  );
}
