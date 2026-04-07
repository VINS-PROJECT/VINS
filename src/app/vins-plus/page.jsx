"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function VinsPlusPage() {

  const items = [
    {
      title: "Portfolio",
      desc: "Explore curated works and design systems.",
      href: "/vins-plus/portfolio",
      icon: "solar:layers-line-duotone",
    },
    {
      title: "Project",
      desc: "Detailed case studies and executions.",
      href: "/vins-plus/project",
      icon: "solar:case-round-line-duotone",
    },
    {
      title: "Certificate",
      desc: "Verified achievements and credentials.",
      href: "/vins-plus/certificate",
      icon: "solar:medal-ribbon-line-duotone",
    },
    {
      title: "Resume",
      desc: "Professional journey and capabilities.",
      href: "/vins-plus/resume",
      icon: "solar:document-line-duotone",
    },
    {
      title: "Next Project",
      desc: "Upcoming explorations and experiments.",
      href: "/vins-plus/next-project",
      icon: "solar:rocket-line-duotone",
    },
    {
      title: "Experience",
      desc: "Timeline of roles and collaborations.",
      href: "/vins-plus/experience",
      icon: "solar:buildings-line-duotone",
    },
  ];

  return (
    <section className="min-h-screen pt-36 pb-24 bg-[var(--background)] text-[var(--foreground)]">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}

        <div className="text-center mb-16">

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            VINS<span className="text-[var(--accent)]">+</span>
          </h1>

          <p className="mt-4 text-sm opacity-60">
            Workspace for projects, resources and professional journey
          </p>

        </div>


        {/* FEATURE PANEL */}

        <div
          className="
          relative mb-16
          rounded-3xl
          border border-[var(--border)]
          p-10
          bg-[var(--card)]
          overflow-hidden
          "
        >

          {/* decorative glow asset */}

          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[var(--accent)]/10 blur-3xl rounded-full" />

          <div className="max-w-xl relative z-10">

            <h2 className="text-2xl font-semibold">
              Explore the VINS ecosystem
            </h2>

            <p className="mt-3 text-sm opacity-70">
              A curated hub containing projects, achievements,
              design explorations, and professional experience.
            </p>

          </div>

        </div>


        {/* GRID */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {items.map((item, i) => (

            <Link key={item.title} href={item.href}>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="
                group
                rounded-2xl
                border border-[var(--border)]
                p-6
                transition
                hover:border-[var(--accent)]
                hover:shadow-xl
                bg-[var(--background)]/70 backdrop-blur-xl
                "
              >

                {/* ICON */}

                <div
                  className="
                  w-12 h-12
                  rounded-xl
                  bg-[var(--accent)]/15
                  text-[var(--accent)]
                  flex items-center justify-center
                  mb-4
                  "
                >

                  <Icon icon={item.icon} width="26"/>

                </div>


                {/* TITLE */}

                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>


                {/* DESC */}

                <p className="text-sm opacity-70 mt-2">
                  {item.desc}
                </p>


                {/* FOOTER */}

                <div className="mt-6 text-xs opacity-40 group-hover:opacity-80 transition">
                  Open →
                </div>

              </motion.div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}