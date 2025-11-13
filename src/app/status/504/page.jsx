"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TimerOff } from "lucide-react";

export default function GatewayTimeout504() {
  return (
    <main className="min-h-screen bg-black text-gray-200 flex items-center justify-center px-6 relative">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.3 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(226,192,124,0.15),transparent_70%)]"
      />

      <div className="relative text-center z-10">
        <TimerOff className="w-16 h-16 text-orange-400 mx-auto mb-6" />

        <h1 className="text-5xl font-extrabold text-orange-400">504</h1>
        <p className="text-gray-400 mt-4 text-lg">
          Gateway Timeout — the server took too long to respond.
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
