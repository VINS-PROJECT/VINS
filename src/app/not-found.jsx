"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-gray-200 flex items-center justify-center px-6 relative overflow-hidden">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.3 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(226,192,124,0.18),transparent_70%)]"
      />

      <div className="relative z-10 text-center">
        <AlertCircle className="w-16 h-16 text-[#E2C07C] mx-auto mb-6" />

        <h1 className="text-5xl font-extrabold text-[#E2C07C]">404</h1>
        <p className="text-gray-400 mt-4 text-lg">
          The page you’re looking for cannot be found.
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
