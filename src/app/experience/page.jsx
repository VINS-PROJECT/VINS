"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Calendar, MapPin, Code, Trophy } from "lucide-react";

export default function ExperiencePage() {
  const professional = [
    {
      role: "Creative Media",
      company: "PT Yayasan Media Selaras Cendekiawan",
      period: "January 2025 — September 2025",
      location: "Jawa Barat, Indonesia",
      tech: ["Figma", "Photoshop", "Canva", "Social Media"],
      desc: "Designed social media materials, managed content direction, and produced visual assets for corporate branding.",
    },
    {
      role: "IT Project Manager",
      company: "PT Yayasan Media Selaras Cendekiawan",
      period: "August 2024 — October 2024",
      location: "Jawa Barat, Indonesia",
      tech: ["Scrum", "Leadership", "Task Control"],
      desc: "Led UI/UX, Frontend, Backend divisions in completing project requirements and maintaining delivery timelines.",
    },
    {
      role: "BGESS MBB",
      company: "Telkom Witel Regional Lampung",
      period: "Juli 2024 — August 2024",
      location: "Lampung, Indonesia",
      tech: ["Figma", "UI Design", "Data Analysis"],
      desc: "Performed customer data analysis and developed UI/UX prototypes for internal usage.",
    },
    {
      role: "Web Developer",
      company: "Baparekraf Digital Talent x Dicoding",
      period: "February 2024 — July 2024",
      location: "Bandung, Indonesia",
      tech: ["PHP", "Bootstrap", "Waterfall"],
      desc: "Learned and built web applications with standardized development workflows and system structure.",
    },
  ];

  const organizational = [
    {
      role: "Digistar Class Manager",
      organization: "Telkom Indonesia",
      period: "August 2024 — November 2024",
      location: "Hybrid",
      achievements: ["Managed participants and learning flow for Digistar 2024 program."],
    },
    {
      role: "HRD Staff",
      organization: "DPP Indonesia",
      period: "April 2024 — December 2024",
      location: "Hybrid",
      achievements: ["Developed HR strategy, evaluation systems, and internal documentation."],
    },
    {
      role: "Event Staff",
      organization: "Lampung Leadership Forum",
      period: "October 2023 — December 2023",
      location: "Lampung",
      achievements: ["Prepared event rundown and coordinated operational activities."],
    },
    {
      role: "Head of Public Relations",
      organization: "PMK ITERA Easter Celebration",
      period: "March 2023 — May 2023",
      location: "Lampung",
      achievements: ["Handled PR communication, publication flow, and organizational external contacts."],
    },
  ];

  return (
    <main className="min-h-screen pt-28 pb-24 bg-[var(--background)] text-[var(--foreground)]">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] tracking-tight">
            Professional Experience
          </h1>
          <p className="opacity-60 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            A structured overview of professional and organizational experience.
          </p>
        </motion.div>

        {/* ================================ */}
        {/* CORPORATE GRID — PROFESSIONAL */}
        {/* ================================ */}
        <section className="mb-24">
          <h2 className="text-xl font-semibold text-[var(--accent)] mb-8 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-[var(--accent)]" />
            Professional Journey
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {professional.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="
                  p-6 rounded-xl border border-[var(--border)]
                  bg-[var(--card)] hover:border-[var(--accent)]/40 
                  transition-colors
                "
              >
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">
                  {exp.role}
                </h3>

                <p className="text-sm opacity-70 font-medium">{exp.company}</p>

                <div className="flex items-center gap-2 text-xs opacity-60 mt-2">
                  <Calendar className="w-4 h-4 text-[var(--accent)]" />
                  {exp.period}
                </div>

                <div className="flex items-center gap-2 text-xs opacity-60 mt-1 mb-3">
                  <MapPin className="w-4 h-4 text-[var(--accent)]" />
                  {exp.location}
                </div>

                <p className="text-sm opacity-70 leading-relaxed mb-4">{exp.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-md text-[10px] border border-[var(--border)] text-[var(--foreground)]/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================================ */}
        {/* ORGANIZATIONAL GRID */}
        {/* ================================ */}
        <section>
          <h2 className="text-xl font-semibold text-[var(--accent)] mb-8 flex items-center gap-2">
            <Users className="w-5 h-5 text-[var(--accent)]" />
            Organizational Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {organizational.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="
                  p-6 rounded-xl border border-[var(--border)]
                  bg-[var(--card)] hover:border-[var(--accent)]/40
                  transition-colors
                "
              >
                <h3 className="text-lg font-semibold mb-1">
                  {exp.role}
                </h3>

                <p className="text-sm opacity-70 font-medium">
                  {exp.organization}
                </p>

                <div className="flex items-center gap-2 text-xs opacity-60 mt-2">
                  <Calendar className="w-4 h-4 text-[var(--accent)]" />
                  {exp.period}
                </div>

                <div className="flex items-center gap-2 text-xs opacity-60 mt-1 mb-3">
                  <MapPin className="w-4 h-4 text-[var(--accent)]" />
                  {exp.location}
                </div>

                <ul className="text-sm opacity-70 leading-relaxed list-disc ml-4 space-y-1">
                  {exp.achievements.map((a, idx) => (
                    <li key={idx}>{a}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SUMMARY */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-24"
        >
          <Trophy className="w-10 h-10 text-[var(--accent)] mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Built With Consistent Growth</h3>
          <p className="opacity-60 max-w-lg mx-auto text-sm mt-2">
            A collective set of professional and leadership experiences that shape a strong and reliable foundation.
          </p>
        </motion.div>

      </div>
    </main>
  );
}
