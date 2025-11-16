"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

export default function HTTPVersion505() {
  return (
    <main
      className="
        min-h-screen flex items-center justify-center px-6
        bg-[var(--background)] text-[var(--foreground)]
        relative overflow-hidden transition-colors
      "
    >

      {/* Premium Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 1.3 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% 35%, var(--accent)18 0%, transparent 70%),
            radial-gradient(circle at 20% 80%, var(--accent-dark)12 0%, transparent 65%)
          `,
        }}
      />

      <div className="relative text-center z-10 max-w-md">

        <ShieldAlert className="w-16 h-16 mx-auto mb-6 text-[var(--accent)]" />

        <h1
          className="
            text-5xl font-extrabold bg-clip-text text-transparent
          "
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--accent), var(--accent-dark))",
          }}
        >
          505
        </h1>

        <p className="opacity-70 text-lg mt-4">
          HTTP Version Not Supported.
        </p>

        <Link
          href="/"
          className="
            inline-block mt-8 px-6 py-3 text-sm rounded-xl
            border border-[var(--accent)] text-[var(--accent)]
            hover:bg-[var(--accent)]/10 hover:shadow-[0_0_10px_var(--accent)]
            transition-all
          "
        >
          Back to Home
        </Link>

      </div>

    </main>
  );
}
