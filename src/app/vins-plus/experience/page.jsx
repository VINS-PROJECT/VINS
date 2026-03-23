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
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-24 px-6">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-semibold">
            Experience
          </h1>
          <p className="text-sm opacity-60 mt-2">
            Career journey & leadership growth
          </p>
        </div>

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
          <div className="absolute left-1/2 top-0 w-px h-full bg-[var(--border)] -translate-x-1/2" />

          <div className="space-y-20">
            {data.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`relative flex ${isLeft ? "justify-start" : "justify-end"}`}
                >
                  {/* dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div className="w-4 h-4 bg-[var(--accent)] rounded-full border-4 border-[var(--background)]" />
                  </div>

                  {/* card */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="
                      w-[90%] md:w-[45%]
                      p-6 rounded-2xl
                      border border-[var(--border)]
                      bg-[var(--background)]/70 backdrop-blur
                      shadow-md
                    "
                  >
                    <h3 className="font-semibold text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm opacity-70">
                      {item.company}
                    </p>

                    <div className="flex gap-3 text-xs mt-2 opacity-60">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {item.location}
                      </span>
                    </div>

                    <p className="text-sm mt-3 opacity-70">
                      {item.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </main>
  );
}

function Chip({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-xs flex items-center gap-2
        border transition
        ${
          active
            ? "bg-[var(--accent)] text-black border-[var(--accent)]"
            : "border-[var(--border)] hover:border-[var(--accent)]"
        }
      `}
    >
      {children}
    </button>
  );
}