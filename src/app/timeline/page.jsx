"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, Paintbrush, Code, Rocket } from "lucide-react";

export default function TimelineEvolution() {
  const versions = [
    {
      year: 2022,
      title: "AninDev v1 — The Beginning",
      icon: <Globe className="w-5 h-5 text-[#E2C07C]" />,
      img: "/timeline/v1-2022.png",
      desc: `
        The very first AninDev website — a simple static HTML portfolio.
        Built with pure HTML, CSS, and basic JavaScript.
      `,
      highlight: "HTML & CSS Era",
      live: "https://anin-v1.netlify.app",
    },
    {
      year: 2023,
      title: "AninDev v2 — Modernization",
      icon: <Paintbrush className="w-5 h-5 text-[#E2C07C]" />,
      img: "/timeline/v2-2023.png",
      desc: `
        Modern redesign featuring responsive layout, dark mode,
        and cleaner components. Built with React + TailwindCSS.
      `,
      highlight: "React UI Era",
      live: "https://anin-v2.vercel.app",
    },
    {
      year: 2024,
      title: "AninDev v3 — Power of Next.js",
      icon: <Code className="w-5 h-5 text-[#E2C07C]" />,
      img: "/timeline/v3-2024.png",
      desc: `
        Migration to Next.js with server components, i18n support,
        and improved SEO. Introduced the soft gold theme.
      `,
      highlight: "Next.js Revolution",
      live: "https://anin-v3.vercel.app",
    },
    {
      year: 2025,
      title: "AninDev v4 — Interactive Portfolio",
      icon: <Rocket className="w-5 h-5 text-[#E2C07C]" />,
      img: "/timeline/v4-2025.png",
      desc: `
        Built with Next.js 15 + Framer Motion. Fully animated,
        refined dark–gold identity, and modular design system.
      `,
      highlight: "Framer Motion Era",
      live: "https://anindev.com",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-gray-200 pt-28 pb-24 relative">
      
      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(226,192,124,0.07),transparent_70%)]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#E2C07C] to-[#bba06a] bg-clip-text text-transparent">
            Website Evolution Timeline
          </h1>
          <p className="text-gray-400 mt-3">
            A journey through the growth of{" "}
            <span className="text-[#E2C07C] font-medium">VINS</span> from 2022–2025.
          </p>
        </motion.div>

        {/* Timeline Vertical Line */}
        <div className="relative ml-6">
          <div className="absolute left-0 top-0 w-[2px] h-full bg-[#E2C07C]/40" />

          {versions.map((v, i) => (
            <motion.div
              key={v.year}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mb-20 pl-10"
            >
              {/* Icon dot */}
              <div className="absolute -left-[23px] w-10 h-10 rounded-full bg-black border border-[#E2C07C]/40 flex items-center justify-center">
                {v.icon}
              </div>

              {/* Title */}
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-bold text-white">{v.year}</h2>
                <span className="text-[#E2C07C] text-xs px-2 py-0.5 bg-[#E2C07C]/10 rounded-md border border-[#E2C07C]/20">
                  {v.highlight}
                </span>
              </div>

              {/* Card */}
              <div className="grid md:grid-cols-2 gap-6 items-center bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                {/* Image */}
                <div className="relative w-full h-56 rounded-lg overflow-hidden">
                  <Image
                    src={v.img}
                    alt={v.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-[#E2C07C] mb-2">
                    {v.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {v.desc.trim()}
                  </p>

                  <a
                    href={v.live}
                    target="_blank"
                    className="inline-block px-4 py-2 rounded-md border border-[#E2C07C] text-[#E2C07C] hover:bg-[#E2C07C]/10 text-sm transition"
                  >
                    Visit Live →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ending */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Next Version Coming Soon
          </h3>
          <p className="text-gray-400">
            Each version reflects technical growth and visual refinement.
          </p>
        </div>
      </div>
    </main>
  );
}
