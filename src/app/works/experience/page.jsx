"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Briefcase,
  Users,
  Calendar,
  MapPin,
} from "lucide-react";

export default function ExperiencePage() {
  const [filter, setFilter] = useState("all");

  const professional = [
    {
      title: "Creative Media",
      company: "PT Yayasan Media Selaras Cendekiawan",
      period: "Jan 2025 — Aug 2025",
      location: "Jawa Barat",
      desc: "Designed social media and brand assets across departments.",
    },
    {
      title: "IT Project Manager",
      company: "PT Yayasan Media Selaras Cendekiawan",
      period: "Aug 2024 — Oct 2024",
      location: "Jawa Barat",
      desc: "Led cross-functional teams and project execution.",
    },
  ];

  const organizational = [
    {
      title: "Class Manager",
      company: "Digistar Telkom",
      period: "Aug 2024 — Nov 2024",
      location: "Hybrid",
      desc: "Managed communication and evaluated participants.",
    },
  ];

  const data =
    filter === "pro"
      ? professional
      : filter === "org"
      ? organizational
      : [...professional, ...organizational];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">

      {/* ================= HEADER ================= */}
      <section className="relative text-center px-6 pt-32 pb-20">

        {/* glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[var(--accent)]/10" />
          <div className="absolute w-[400px] h-[400px] bg-[var(--accent)]/20 blur-[120px] rounded-full top-[-100px] left-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Experience
          </h1>

          <p className="text-sm opacity-60">
            Career journey & leadership growth
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-6 pb-32">

        {/* FILTER */}
        <div className="flex justify-center gap-3 mb-20">
          <Chip active={filter === "all"} onClick={() => setFilter("all")}>
            All
          </Chip>

          <Chip active={filter === "pro"} onClick={() => setFilter("pro")}>
            <Briefcase size={14} /> Professional
          </Chip>

          <Chip active={filter === "org"} onClick={() => setFilter("org")}>
            <Users size={14} /> Organizational
          </Chip>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* line */}
          <div className="
            absolute left-1/2 top-0 w-[2px] h-full
            bg-gradient-to-b from-[var(--accent)]/60 via-[var(--border)] to-transparent
            -translate-x-1/2
          " />

          <div className="space-y-24">
            {data.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`relative flex ${isLeft ? "justify-start" : "justify-end"}`}
                >
                  {/* DOT */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="w-4 h-4 bg-[var(--accent)] rounded-full" />
                      <div className="absolute inset-0 bg-[var(--accent)] blur-md opacity-40" />
                    </div>
                  </div>

                  {/* CARD */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02 }}
                    className="
                      group relative w-[90%] md:w-[45%]
                      p-6 rounded-2xl
                      border border-[var(--border)]
                      bg-[var(--background)]/60 backdrop-blur-xl
                      shadow-lg
                      transition-all duration-300
                      hover:border-[var(--accent)]
                    "
                  >
                    {/* glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[var(--accent)]/5 rounded-2xl transition" />

                    <div className="relative">
                      <h3 className="font-semibold text-lg group-hover:text-[var(--accent)] transition">
                        {item.title}
                      </h3>

                      <p className="text-sm opacity-70">
                        {item.company}
                      </p>

                      <div className="flex gap-3 text-xs mt-2 opacity-60 flex-wrap">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {item.period}
                        </span>

                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {item.location}
                        </span>
                      </div>

                      <p className="text-sm mt-3 opacity-70 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </section>
    </main>
  );
}

/* CHIP */
function Chip({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-xs flex items-center gap-2
        border transition-all duration-200
        ${
          active
            ? "bg-[var(--accent)] text-black border-[var(--accent)] shadow-md"
            : "border-[var(--border)] hover:border-[var(--accent)]"
        }
      `}
    >
      {children}
    </button>
  );
}