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
    <section className="min-h-screen pt-36 pb-28 bg-[var(--background)] text-[var(--foreground)]">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}

        <motion.div
          initial={{ opacity:0, y:30 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          className="text-center mb-20"
        >

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            VINS<span className="text-[var(--accent)]">+</span>
          </h1>

          <p className="mt-4 text-sm opacity-60 max-w-md mx-auto">
            Workspace for projects, resources, and professional journey
          </p>

        </motion.div>


        {/* FEATURE PANEL */}

        <motion.div
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6, delay:0.1 }}
          className="
          relative mb-20
          rounded-3xl
          border border-[var(--border)]
          p-12
          bg-[var(--card)]
          overflow-hidden
          "
        >

          {/* glow */}

          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--accent)]/10 blur-[120px] rounded-full" />

          <div className="max-w-xl relative z-10">

            <h2 className="text-2xl font-semibold">
              Explore the VINS ecosystem
            </h2>

            <p className="mt-3 text-sm opacity-70">
              A curated hub containing projects, achievements,
              design explorations, and professional experience.
            </p>

          </div>

        </motion.div>


        {/* GRID */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {items.map((item, i) => (

            <Link key={item.title} href={item.href}>

              <motion.div
                initial={{ opacity:0, y:30 }}
                animate={{ opacity:1, y:0 }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y:-8 }}
                className="
                group
                relative
                rounded-2xl
                border border-[var(--border)]
                p-6
                bg-[var(--background)]/70 backdrop-blur-xl
                transition
                hover:border-[var(--accent)]
                hover:shadow-xl
                overflow-hidden
                "
              >

                {/* glow hover */}

                <div className="
                absolute inset-0 opacity-0
                group-hover:opacity-100
                transition
                bg-gradient-to-br
                from-[var(--accent)]/10
                to-transparent
                " />

                {/* ICON */}

                <div
                  className="
                  relative
                  w-12 h-12
                  rounded-xl
                  bg-[var(--accent)]/15
                  text-[var(--accent)]
                  flex items-center justify-center
                  mb-4
                  transition
                  group-hover:scale-110
                  "
                >
                  <Icon icon={item.icon} width="26" />
                </div>


                {/* TITLE */}

                <h3 className="relative font-semibold text-lg">
                  {item.title}
                </h3>


                {/* DESC */}

                <p className="relative text-sm opacity-70 mt-2">
                  {item.desc}
                </p>


                {/* FOOTER */}

                <div className="
                relative mt-6
                text-xs
                opacity-40
                group-hover:opacity-80
                transition
                ">
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