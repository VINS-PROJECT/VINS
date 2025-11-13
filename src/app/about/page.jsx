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
  const skills = {
    "Frontend Engineering": [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
    ],
    "UI/UX Design": ["Figma", "Adobe XD", "Interface Architecture"],
    "Workflow & Tools": ["Git", "Vercel", "Notion", "Trello"],
  };

  const values = [
    {
      icon: <Target className="w-6 h-6 text-[#C9A769]" />,
      title: "Purpose & Clarity",
      desc: "Every solution should come from a clear strategy and measurable objective.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#C9A769]" />,
      title: "Team Collaboration",
      desc: "I value structured communication, open collaboration, and aligned execution.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-[#C9A769]" />,
      title: "Continuous Improvement",
      desc: "Growth is essential improving processes, skills, and perspectives over time.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-gray-200 pt-24 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HERO — Corporate Intro */}
        <section className="max-w-3xl mx-auto mb-28">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            About <span className="text-[#C9A769]">Kevin Simorangkir</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 leading-relaxed mt-6 text-lg"
          >
            I’m a graduate of Informatics Engineering passionate about data analysis and user experience design. With experience in data programming, UI/UX prototype, and web development, I aim to create meaningful and efficient digital experiences.
          </motion.p>

          <div className="flex gap-4 mt-10">
            <Link
              href="/projects"
              className="px-6 py-3 bg-[#C9A769] text-black font-medium rounded-md hover:opacity-90 transition"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-[#C9A769] text-[#C9A769] rounded-md hover:bg-[#C9A769]/10 transition"
            >
              Contact
            </Link>
          </div>
        </section>

        {/* SKILLSET — Corporate style section */}
        <section className="mb-28">
          <h2 className="text-2xl font-semibold mb-12">
            Professional <span className="text-[#C9A769]">Expertise</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {Object.entries(skills).map(([title, items], i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-[#C9A769] font-medium flex items-center gap-2 mb-4">
                  {title.includes("Frontend") && <Code className="w-5 h-5" />}
                  {title.includes("Design") && <Palette className="w-5 h-5" />}
                  {title.includes("Workflow") && (
                    <Briefcase className="w-5 h-5" />
                  )}
                  {title}
                </h3>

                <ul className="space-y-2 text-gray-300 text-sm">
                  {items.map((skill) => (
                    <li key={skill}>• {skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* VALUES — Corporate, structured, calm */}
        <section className="mb-28">
          <h2 className="text-2xl font-semibold mb-12">
            Core <span className="text-[#C9A769]">Principles</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border border-white/10 rounded-xl p-6"
              >
                <div className="mb-3">{val.icon}</div>
                <h4 className="text-[#C9A769] font-medium mb-2">{val.title}</h4>
                <p className="text-gray-400 text-sm">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CAREER SUMMARY */}
        <section className="max-w-3xl mb-28">
          <h2 className="text-2xl font-semibold mb-6">
            Career <span className="text-[#C9A769]">Summary</span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-base">
            My name is Kevin Simorangkir, and I began learning programming in high school, driven by my passion for building digital experiences from computer games to mobile applications. I’ve contributed to communities and companies, creating projects such as REFORA ITERA, Harvesty, SIPAD, and other design systems. These include Telkom Witel Lampung, Telkom Indonesia, Yayasan Media Selaras, and Baparekraf Digital Talent. Each journey has deepened my curiosity and strengthened my drive to learn, grow, and innovate.
          </p>
        </section>

        {/* CTA — professional corporate */}
        <section className="border border-white/10 rounded-xl p-10 text-center">
          <Mail className="w-10 h-10 text-[#C9A769] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            Let’s Discuss Your Project
          </h3>
          <p className="text-gray-400 mb-6">
            If you’re looking for structured execution, strong communication,
            and professional delivery — I’d be glad to collaborate.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 bg-[#C9A769] text-black font-medium rounded-md hover:opacity-90 transition"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </main>
  );
}
