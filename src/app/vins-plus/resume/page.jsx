"use client";

import Image from "next/image";
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
          Professional experience, skills and selected works.
        </p>

      </section>


      {/* CONTENT */}

      <section className="max-w-6xl mx-auto px-6 pb-32">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-10"
          >

            <div>

              <h2 className="text-2xl md:text-3xl font-semibold">
                Professional Overview
              </h2>

              <p className="mt-4 opacity-70 max-w-md">
                A structured overview highlighting real-world experience,
                technical capabilities, and product thinking.
              </p>

            </div>


            {/* HIGHLIGHTS */}

            <div className="grid sm:grid-cols-2 gap-4">

              {highlights.map((item, i) => (

                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="
                  group
                  p-5 rounded-2xl
                  border border-[var(--border)]
                  bg-[var(--background)]/60 backdrop-blur-xl
                  hover:border-[var(--accent)]
                  transition
                  "
                >

                  <div className="flex items-center gap-3 mb-3">

                    <div className="
                    w-10 h-10
                    rounded-lg
                    bg-[var(--accent)]/15
                    flex items-center justify-center
                    text-[var(--accent)]
                    ">

                      <Icon icon={item.icon} width="20"/>

                    </div>

                    <h3 className="text-sm font-medium">
                      {item.title}
                    </h3>

                  </div>

                  <p className="text-xs opacity-60">
                    {item.desc}
                  </p>

                </motion.div>

              ))}

            </div>


            {/* CTA */}

            <motion.a
              whileHover={{ scale: 1.04 }}
              href="/resume.pdf"
              className="
              inline-flex items-center gap-2
              px-6 py-3 rounded-xl
              bg-[var(--accent)]
              text-black
              text-sm font-medium
              transition
              "
            >

              <Icon icon="solar:download-line-duotone" width="18"/>

              Download Resume

            </motion.a>

          </motion.div>


          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex justify-center lg:justify-end"
          >

            <motion.div
              whileHover={{ y: -6 }}
              className="relative"
            >

              {/* glow */}

              <div className="absolute inset-0 bg-[var(--accent)]/20 blur-[80px] rounded-3xl"/>


              {/* CARD */}

              <div className="
              relative z-10
              p-8 rounded-3xl
              bg-white/80 dark:bg-white/5
              backdrop-blur-xl
              border border-white/20 dark:border-white/10
              shadow-[0_20px_50px_rgba(0,0,0,0.18)]
              ">

                <Image
                  src="/QR/ResumeQR.png"
                  alt="Resume QR"
                  width={260}
                  height={260}
                  className="object-contain"
                />

                <span className="block text-center mt-4 text-xs opacity-60">
                  Scan to open resume
                </span>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}