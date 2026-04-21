"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function PortfolioPage() {

  const highlights = [
    {
      title: "UI/UX Case Studies",
      desc: "Product thinking, flows, and design decisions.",
      icon: "solar:pen-new-square-line-duotone",
    },
    {
      title: "Frontend Engineering",
      desc: "Scalable architecture and performance builds.",
      icon: "solar:code-line-duotone",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">

      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute inset-0 bg-[var(--accent)]/10" />

        <div className="absolute w-[520px] h-[520px] bg-[var(--accent)]/20 blur-[160px] rounded-full top-[-120px] left-[-120px]" />

        <div className="absolute w-[420px] h-[420px] bg-[var(--accent)]/10 blur-[140px] rounded-full bottom-[-100px] right-[-100px]" />

      </div>


      {/* HERO */}

      <section className="pt-36 pb-24 text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight"
        >
          Portfolio
        </motion.h1>

        <p className="mt-4 max-w-xl mx-auto text-sm opacity-60">
          Selected projects showcasing product thinking,
          design clarity, and scalable engineering.
        </p>

      </section>


      {/* CONTENT */}

      <section className="max-w-4xl mx-auto px-6 pb-32 text-center">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl md:text-3xl font-semibold"
        >
          Selected Works
        </motion.h2>

        <p className="mt-4 opacity-70 max-w-xl mx-auto">
          Built with clarity, scalability, and product-driven thinking.
          Each project reflects real-world implementation and
          practical engineering decisions.
        </p>


        {/* HIGHLIGHTS */}

        <div className="grid sm:grid-cols-2 gap-6 mt-14">

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


        {/* CTA */}

        <Link href="/vins-plus/project">

          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="
            mt-14
            inline-flex items-center gap-2
            px-8 py-4 rounded-xl
            bg-[var(--accent)]
            text-black
            text-sm font-medium
            shadow-lg
            cursor-pointer
            "
          >

            <Icon icon="solar:arrow-right-line-duotone" width="20"/>

            Explore Projects

          </motion.div>

        </Link>

      </section>

    </main>
  );
}