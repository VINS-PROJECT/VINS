"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-[var(--background)]
      "
    >
      <div className="flex flex-col items-center gap-6">

        {/* SPINNER */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
          className="
            w-10 h-10 rounded-full
            border-2 border-[var(--border)]
            border-t-[var(--accent)]
          "
        />

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.3 }}
          className="text-sm"
        >
          Loading experience...
        </motion.p>

      </div>
    </motion.div>
  );
}