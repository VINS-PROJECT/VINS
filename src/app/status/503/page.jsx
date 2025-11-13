"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function ServiceUnavailable503() {
  return (
    <main className="min-h-screen bg-black text-gray-200 flex items-center justify-center px-6 relative">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1.3 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(226,192,124,0.18),transparent_70%)]"
      />

      <div className="relative text-center z-10">
        <Clock className="w-16 h-16 text-[#E2C07C] mx-auto mb-6" />

        <h1 className="text-5xl font-extrabold text-[#E2C07C]">503</h1>
        <p className="text-gray-400 mt-4 text-lg">
          Service Unavailable — try again later.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 text-sm rounded-xl border border-[#E2C07C] text-[#E2C07C] hover:bg-[#E2C07C]/10 transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
