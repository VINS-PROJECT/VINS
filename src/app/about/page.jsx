"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Code,
  Palette,
  Rocket,
  Briefcase,
  Target,
  Users,
  Mail,
} from "lucide-react";

export default function AboutPage() {
  const skills = {
    "Frontend Development": [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
    ],
    "UI/UX Design": ["Figma", "Adobe XD", "Prototyping", "Wireframing"],
    "Tools & Workflow": ["Git", "Vercel", "Notion", "Trello", "Slack"],
  };

  const values = [
    {
      icon: <Target className="w-6 h-6 text-[#E2C07C]" />,
      title: "Purpose-Driven",
      desc: "I believe every project should have a story and intention — not just visuals, but meaning.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#E2C07C]" />,
      title: "Collaborative",
      desc: "I enjoy working with cross-functional teams and creating synergy between design and development.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-[#E2C07C]" />,
      title: "Continuous Growth",
      desc: "Always learning, adapting, and pushing creative boundaries through technology and design.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-gray-200 pt-24 pb-32 relative overflow-hidden">
      {/* === Background Glow === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(226,192,124,0.12),transparent_70%),radial-gradient(circle_at_80%_80%,rgba(209,170,96,0.1),transparent_60%)]"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* === Hero Section === */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-24">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#E2C07C]/30 shadow-[0_0_40px_-10px_rgba(226,192,124,0.3)]"
          >
            <Image
              src="/profile.png" // ganti sesuai nama file kamu di public/
              alt="Anin"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Intro Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#E2C07C] via-[#d6b270] to-[#b99a5e] bg-clip-text text-transparent">
              Hi, I’m Anin.
            </h1>
            <p className="text-gray-400 mt-4 text-lg max-w-2xl leading-relaxed">
              A passionate <span className="text-[#E2C07C] font-medium">Frontend Developer</span> and{" "}
              <span className="text-[#E2C07C] font-medium">Creative Designer</span> who builds experiences that connect
              design, interaction, and performance.  
              My goal is to create interfaces that not only look good but feel intuitive.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="/projects"
                className="px-5 py-2.5 rounded-lg bg-[#E2C07C] text-black font-semibold hover:brightness-110 transition"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-lg border border-[#E2C07C] text-[#E2C07C] hover:bg-[#E2C07C]/10 font-semibold transition"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </section>

        {/* === Skills Grid === */}
        <section className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-10 text-center"
          >
            My <span className="text-[#E2C07C]">Skillset</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-[#E2C07C]/20 rounded-2xl p-6 backdrop-blur-md hover:border-[#E2C07C]/40 transition-all duration-300"
              >
                <h3 className="font-semibold text-[#E2C07C] mb-4 flex items-center gap-2">
                  {category.includes("Frontend") && <Code className="w-5 h-5" />}
                  {category.includes("Design") && <Palette className="w-5 h-5" />}
                  {category.includes("Tools") && <Briefcase className="w-5 h-5" />}
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li key={skill} className="text-gray-300 text-sm">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* === Values / Vision Section === */}
        <section className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-10 text-center"
          >
            My <span className="text-[#E2C07C]">Values & Vision</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-[#E2C07C]/20 rounded-2xl p-6 backdrop-blur-md hover:border-[#E2C07C]/40 hover:shadow-[0_0_20px_-6px_rgba(226,192,124,0.3)] transition-all duration-300"
              >
                <div className="mb-3">{v.icon}</div>
                <h4 className="font-semibold text-[#E2C07C] mb-2">{v.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* === Career Summary === */}
        <section className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Career <span className="text-[#E2C07C]">Overview</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              Over the years, I’ve worked with startups, student organizations, and freelance clients,
              focusing on transforming ideas into impactful digital products.  
              My journey merges technical skill, design thinking, and leadership experience.
            </p>
          </motion.div>
        </section>

        {/* === Contact CTA === */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-white/5 border border-[#E2C07C]/20 rounded-2xl p-10 backdrop-blur-md hover:border-[#E2C07C]/40 transition-all duration-300"
        >
          <Mail className="w-10 h-10 text-[#E2C07C] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Let’s Collaborate</h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Have an idea, project, or collaboration in mind?  
            Let’s bring it to life together.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg bg-[#E2C07C] text-black font-semibold hover:brightness-110 transition"
          >
            Get in Touch
          </Link>
        </motion.section>
      </div>

      {/* === Bottom Gradient === */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </main>
  );
}
