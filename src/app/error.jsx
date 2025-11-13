"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

export default function Error({ reset }) {
  return (
    <main className="min-h-screen bg-black text-gray-200 flex items-center justify-center px-6 relative overflow-hidden">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.3 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(226,192,124,0.15),transparent_70%)]"
      />

      <div className="relative text-center z-10">
        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />

        <h1 className="text-5xl font-extrabold text-red-500">500</h1>
        <p className="text-gray-400 mt-4 text-lg">
          Something went wrong on the server.
        </p>

        <button
          onClick={() => reset()}
          className="inline-block mt-8 px-6 py-3 text-sm rounded-xl border border-[#E2C07C] text-[#E2C07C] hover:bg-[#E2C07C]/10 transition mr-3"
        >
          Try Again
        </button>

        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 text-sm rounded-xl border border-gray-600 text-gray-300 hover:bg-white/10 transition"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}
