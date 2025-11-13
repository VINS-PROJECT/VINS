"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

export default function HTTPVersion505() {
  return (
    <main className="min-h-screen bg-black text-gray-200 flex items-center justify-center px-6 relative">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.3 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(226,192,124,0.17),transparent_70%)]"
      />

      <div className="relative text-center z-10">
        <ShieldAlert className="w-16 h-16 text-red-500 mx-auto mb-6" />

        <h1 className="text-5xl font-extrabold text-red-500">505</h1>
        <p className="text-gray-400 mt-4 text-lg">
          HTTP Version Not Supported.
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
