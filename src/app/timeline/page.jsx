"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, Paintbrush, Code, Rocket } from "lucide-react";

export default function TimelineEvolution() {
  const versions = [
    {
      year: 2022,
      title: "AninDev v1 — The Beginning",
      icon: <Globe className="w-6 h-6 text-[#E2C07C]" />,
      img: "/timeline/v1-2022.png",
      desc: `
        The very first AninDev website — a simple static HTML portfolio.
        Built entirely with pure HTML, CSS, and a sprinkle of JavaScript.
        No framework, just raw creativity. The foundation of your online identity was born here.
      `,
      highlight: "HTML & CSS Era",
      features: ["Static layout", "Basic animations", "Intro to web presence"],
      live: "https://anin-v1.netlify.app",
    },
    {
      year: 2023,
      title: "AninDev v2 — Modernization",
      icon: <Paintbrush className="w-6 h-6 text-[#E2C07C]" />,
      img: "/timeline/v2-2023.png",
      desc: `
        The 2023 redesign brought a modern aesthetic — responsive layout, dark mode, and improved visuals.
        Developed with React and styled with TailwindCSS, marking your transition into modern frontend.
      `,
      highlight: "React UI Era",
      features: ["Dark Mode", "Component-based Design", "Responsive UI"],
      live: "https://anin-v2.vercel.app",
    },
    {
      year: 2024,
      title: "AninDev v3 — Power of Next.js",
      icon: <Code className="w-6 h-6 text-[#E2C07C]" />,
      img: "/timeline/v3-2024.png",
      desc: `
        The site evolved to Next.js 14, introducing server components, i18n support (EN, JP, KR, ID),
        and performance optimization with Turbopack. The design language matured with soft gold tones.
      `,
      highlight: "Next.js Revolution",
      features: [
        "Multilingual support",
        "Next.js 14 (App Router)",
        "SEO-optimized routes",
      ],
      live: "https://anin-v3.vercel.app",
    },
    {
      year: 2025,
      title: "AninDev v4 — Interactive Portfolio",
      icon: <Rocket className="w-6 h-6 text-[#E2C07C]" />,
      img: "/timeline/v4-2025.png",
      desc: `
        The current live version — built with Next.js 15, Framer Motion, and a refined visual system.
        A fully animated, gold-black aesthetic showcasing design maturity and performance excellence.
      `,
      highlight: "Framer Motion Era",
      features: [
        "Dynamic animations",
        "Modular Design System",
        "Dark–Gold Visual Identity",
      ],
      live: "https://anindev.com",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-gray-200 pt-28 pb-24 relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(226,192,124,0.12),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(209,170,96,0.1),transparent_60%)]"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#E2C07C] via-[#d6b270] to-[#b99a5e] bg-clip-text text-transparent">
            Website Evolution Timeline
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            From simple beginnings in <span className="text-[#E2C07C] font-semibold">2022</span> to an
            interactive, elegant experience in <span className="text-[#E2C07C] font-semibold">2025</span> —
            here’s the evolution of <span className="font-semibold text-[#E2C07C]">AninDev</span> website.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-[#E2C07C]/30 ml-6">
          {versions.map((v, i) => (
            <motion.div
              key={v.year}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-24 pl-10"
            >
              {/* Icon Dot */}
              <div className="absolute -left-[22px] w-10 h-10 rounded-full border-2 border-[#E2C07C] bg-[#E2C07C]/10 flex items-center justify-center shadow-[0_0_15px_rgba(226,192,124,0.4)]">
                {v.icon}
              </div>

              {/* Year + Highlight */}
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-3xl font-bold text-white">{v.year}</h2>
                <span className="text-[#E2C07C] text-sm font-semibold">
                  {v.highlight}
                </span>
              </div>

              {/* Content */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-64 rounded-xl overflow-hidden border border-[#E2C07C]/30"
                >
                  <Image
                    src={v.img}
                    alt={v.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-semibold text-[#E2C07C] mb-2">
                    {v.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {v.desc.trim()}
                  </p>
                  <ul className="text-sm text-gray-300 space-y-1 mb-5">
                    {v.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#E2C07C] mt-1.5">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={v.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-lg border border-[#E2C07C] text-[#E2C07C] hover:bg-[#E2C07C]/10 transition text-sm font-medium"
                  >
                    View Live →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ending Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            The Journey Continues
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            Every new version represents growth — technically, visually, and personally.
            The next evolution might just redefine what <span className="text-[#E2C07C] font-semibold">AninDev</span> can be.
          </p>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </main>
  );
}
