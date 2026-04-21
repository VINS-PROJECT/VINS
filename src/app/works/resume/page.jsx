"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function ResumePage() {

  const highlights = [
    {
      title: "Frontend Engineering",
      desc: "React, Next.js, scalable UI architecture",
      icon: "solar:code-line-duotone",
    },
    {
      title: "UI / UX Thinking",
      desc: "Design systems & product usability",
      icon: "solar:pen-new-square-line-duotone",
    },
    {
      title: "System Architecture",
      desc: "Maintainable & scalable web systems",
      icon: "solar:diagram-up-line-duotone",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">

      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute inset-0 bg-[var(--accent)]/10" />

        <div className="absolute w-[500px] h-[500px] bg-[var(--accent)]/20 blur-[140px] rounded-full top-[-120px] right-[-120px]" />

        <div className="absolute w-[400px] h-[400px] bg-[var(--accent)]/10 blur-[120px] rounded-full bottom-[-100px] left-[-100px]" />

      </div>


      {/* HERO */}

      <section className="pt-36 pb-24 text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight"
        >
          Resume
        </motion.h1>

        <p className="mt-4 max-w-xl mx-auto text-sm opacity-60">
          Professional experience, technical capabilities,
          and structured product thinking.
        </p>

      </section>


      {/* CONTENT */}

      <section className="max-w-4xl mx-auto px-6 pb-32 text-center">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl md:text-3xl font-semibold"
        >
          Professional Overview
        </motion.h2>

        <p className="mt-4 opacity-70 max-w-xl mx-auto">
          A structured overview highlighting real-world experience,
          technical capabilities, and product thinking across
          frontend engineering and digital product development.
        </p>


        {/* HIGHLIGHTS */}

        <div className="grid sm:grid-cols-3 gap-6 mt-14">

          {highlights.map((item, i) => (

            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="
              p-6 rounded-2xl
              border border-[var(--border)]
              bg-[var(--background)]/70 backdrop-blur-xl
              hover:border-[var(--accent)]
              transition
              "
            >

              <div className="
              w-12 h-12
              mx-auto
              rounded-xl
              bg-[var(--accent)]/15
              flex items-center justify-center
              text-[var(--accent)]
              ">

                <Icon icon={item.icon} width="22"/>

              </div>

              <h3 className="mt-4 text-sm font-medium">
                {item.title}
              </h3>

              <p className="text-xs opacity-60 mt-2">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>


        {/* DOWNLOAD BUTTON */}

        <motion.a
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          href="/resume.pdf"
          download
          className="
          mt-14
          inline-flex items-center gap-2
          px-8 py-4 rounded-xl
          bg-[var(--accent)]
          text-black
          text-sm font-medium
          shadow-lg
          "
        >

          <Icon icon="solar:download-line-duotone" width="20"/>

          Download Resume

        </motion.a>

      </section>

    </main>
  );
}