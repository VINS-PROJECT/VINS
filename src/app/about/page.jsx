"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code,
  Palette,
  Briefcase,
  Target,
  Users,
  Rocket,
  Mail,
} from "lucide-react";

export default function AboutPage() {
  const identity = [
    { label: "Full Name", value: "Kevin Simorangkir" },
    { label: "Specialization", value: "UI/UX Design, Project Management, Data Analysis" },
    { label: "Education", value: "S.Kom – Informatics Engineering" },
    { label: "Location", value: "Lampung, Indonesia" },
    { label: "Experience", value: "1+ Years in Product Development" },
    { label: "Focus Area", value: "Design Systems, Web Engineering, UX Flow Architecture" },
  ];

  const skills = {
    "Frontend Engineering": ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
    "Experience Design": ["Figma", "Canva", "Capcut", "Adobe Photoshop", "Adobe Premiere"],
    "Workflow & Tools": ["Git", "Vercel", "Notion", "Trello"],
    "Project Management": ["Agile", "Leadership"],
    "Data Analysis": ["Excel", "Google Sheets", "SQL Basics"],
  };

  const values = [
    {
      icon: <Target className="w-5 h-5 text-[var(--accent)]" />,
      title: "Purpose With Intent",
      desc: "Every decision guided by clarity, simplicity, and meaningful impact.",
    },
    {
      icon: <Users className="w-5 h-5 text-[var(--accent)]" />,
      title: "Designed Together",
      desc: "Collaboration built on trust, transparency, and shared responsibility.",
    },
    {
      icon: <Rocket className="w-5 h-5 text-[var(--accent)]" />,
      title: "Always Evolving",
      desc: "A continuous pursuit of refinement technically, visually, and personally.",
    },
  ];

  return (
    <main
      className="
        min-h-screen pt-28 pb-40 relative overflow-hidden
        transition-colors duration-500
        bg-[var(--background)] text-[var(--foreground)]
      "
    >
      {/* Ambient Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.16 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
        style={{
          background: `
          radial-gradient(circle at 40% 30%, var(--accent)15, transparent 70%)
        `,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 z-10">

        {/* ===== HERO ===== */}
        <section className="max-w-3xl mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-light tracking-tight"
          >
            Kevin{" "}
            <span className="text-[var(--accent)] font-normal">
              Simorangkir
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-7 text-xl font-light leading-relaxed text-[var(--foreground)]/70"
          >
            I design and engineer digital experiences with a focus on clarity,
            performance, and meaningful interactions. My work combines structured
            thinking and intentional design with a calm, modern aesthetic.
          </motion.p>

        </section>

        {/* ===== IDENTITY TABLE ===== */}
        <section className="mb-28">
          <h2 className="text-2xl font-semibold mb-8 tracking-tight">
            Personal <span className="text-[var(--accent)]">Profile</span>
          </h2>

          <div
            className="
              rounded-2xl overflow-hidden backdrop-blur-sm
              border border-[var(--foreground)]/10
              bg-[var(--foreground)]/[0.03]
            "
          >
            <table className="w-full text-left text-[15px]">
              <tbody>
                {identity.map((row, i) => (
                  <tr key={i} className="border-b border-[var(--foreground)]/10">
                    <td className="py-4 px-6 text-[var(--accent)] font-medium w-48">
                      {row.label}
                    </td>
                    <td className="py-4 px-6 text-[var(--foreground)]/80 font-light">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== SKILLS ===== */}
        <section className="mb-28">
          <h2 className="text-2xl font-semibold mb-10 tracking-tight">
            Professional <span className="text-[var(--accent)]">Expertise</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {Object.entries(skills).map(([title, items], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  p-7 rounded-2xl transition
                  border border-[var(--foreground)]/10
                  bg-[var(--foreground)]/[0.03]
                  hover:bg-[var(--foreground)]/[0.06]
                "
              >
                <h3 className="text-[var(--accent)] font-medium mb-4 flex items-center gap-2">
                  {title.includes("Frontend") && <Code className="w-4 h-4" />}
                  {title.includes("Experience") && <Palette className="w-4 h-4" />}
                  {title.includes("Workflow") && <Briefcase className="w-4 h-4" />}
                  {title}
                </h3>

                <ul className="space-y-2 text-sm text-[var(--foreground)]/70 font-light">
                  {items.map((sk) => (
                    <li key={sk}>• {sk}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== VALUES ===== */}
        <section className="mb-28">
          <h2 className="text-2xl font-semibold mb-10 tracking-tight">
            Core <span className="text-[var(--accent)]">Values</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="
                  p-7 rounded-2xl transition
                  border border-[var(--foreground)]/10
                  bg-[var(--foreground)]/[0.03]
                  hover:bg-[var(--foreground)]/[0.06]
                "
              >
                <div className="mb-3">{v.icon}</div>
                <h4 className="text-[var(--accent)] font-medium mb-2 tracking-tight">
                  {v.title}
                </h4>
                <p className="text-sm font-light text-[var(--foreground)]/70">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== SUMMARY ===== */}
        <section className="max-w-3xl mb-32">
          <h2 className="text-2xl font-semibold mb-6 tracking-tight">
            Career <span className="text-[var(--accent)]">Summary</span>
          </h2>

          <p className="text-lg font-light leading-relaxed text-[var(--foreground)]/70">
            My journey in product development began with early experimentation
            from interfaces and design systems to structured workflow automation.
            I’ve contributed to projects such as REFORA ITERA, Harvesty, SIPAD,
            and Telkom Witel Lampung.
            <br /><br />
            Today, I focus on crafting experiences that are simple,
            intentional, and efficient aligned with user needs and product
            strategy.
          </p>
        </section>

        {/* ===== CONTACT CTA ===== */}
        <section
          className="
            rounded-2xl p-12 text-center backdrop-blur-sm
            border border-[var(--foreground)]/10
            bg-[var(--foreground)]/[0.03]
          "
        >
          <Mail className="w-9 h-9 text-[var(--accent)] mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-3 tracking-tight">
            Let’s Build Something Meaningful
          </h3>
          <p className="text-[var(--foreground)]/70 mb-8 font-light">
            I’m open to collaborations where design, engineering, and clarity
            truly matter.
          </p>
          <Link
            href="/contact"
            className="px-7 py-3 rounded-xl font-medium text-black"
            style={{
              background: "var(--accent)",
            }}
          >
            Contact Me
          </Link>
        </section>

      </div>
    </main>
  );
}
