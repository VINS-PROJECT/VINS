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
    title: "UI/UX Designer Intern",
    company: "Telkom Indonesia Kebayoran Baru",
    period: "Nov 2025 — Present",
    location: "Jakarta, Indonesia",
    desc: "Designed user interface for digital products including dashboard and internal tools Conducted user research and created wireframes and prototypes using Figma to improve user experience Collaborated with developers and product team to ensure design implementation aligned with user needs and business goals",
  },
  {
    title: "Creative Media",
    company: "PT Yayasan Media Selaras Cendekiawan",
    period: "Jan 2025 — Aug 2025",
    location: "Jawa Barat, Indonesia",
    desc: "Designed social media content including Instagram feeds stories and branding materials Created logos merchandise and visual assets for multiple departments Ensured consistent visual identity across digital platforms",
  },
  {
    title: "IT Project Manager",
    company: "PT Yayasan Media Selaras Cendekiawan",
    period: "Aug 2024 — Oct 2024",
    location: "Jawa Barat, Indonesia",
    desc: "Led cross functional teams including UI UX Frontend and Backend to deliver website projects Implemented structured project planning monitored progress and ensured project completion aligned with timeline and objectives",
  },
  {
    title: "Data Analyst Intern",
    company: "Telkom Indonesia Witel Lampung",
    period: "Jul 2024 — Aug 2024",
    location: "Lampung, Indonesia",
    desc: "Analyzed customer installation data using SQL and developed a web based dashboard named Kedaton Connect to support monitoring and decision making Processed and visualized data to generate business insights",
  },
  {
    title: "Web Developer Intern",
    company: "Baparekraf Digital Talent Dicoding",
    period: "Feb 2024 — Aug 2024",
    location: "Jakarta, Indonesia",
    desc: "Developed web based applications using HTML CSS JavaScript and PHP Designed user interface and built backend systems including database and API integration Collaborated with team to ensure system functionality and performance",
  },
  {
    title: "Backend Developer",
    company: "PPLK ITERA",
    period: "Jun 2022 — Aug 2022",
    location: "Lampung, Indonesia",
    desc: "Designed and developed backend systems and database integration for PPLK ITERA website Collaborated with frontend team to ensure seamless system integration and performance",
  },
];

const organizational = [
  {
    title: "Class Manager",
    company: "Digistar Telkom Indonesia",
    period: "Aug 2024 — Oct 2024",
    location: "Hybrid",
    desc: "Managed communication between mentees and Telkom team Evaluated participant performance and ensured learning process ran effectively",
  },
  {
    title: "Human Resources Development",
    company: "Duta Potensi Pemuda Indonesia",
    period: "Apr 2024 — Dec 2024",
    location: "Jakarta, Indonesia",
    desc: "Designed and developed human resource programs Provided training and built networking to support participant growth and organizational goals",
  },
  {
    title: "Event Division",
    company: "Lampung Leadership Forum",
    period: "Oct 2023 — Dec 2023",
    location: "Lampung, Indonesia",
    desc: "Prepared event concepts managed audience registration and coordinated with multiple divisions to ensure successful event execution",
  },
  {
    title: "Head of Public Relations",
    company: "PIEC ITERA",
    period: "Mar 2023 — May 2023",
    location: "Lampung, Indonesia",
    desc: "Led communication strategy and managed relationships with stakeholders Ensured effective communication flow during event preparation and execution",
  },
  {
    title: "Competition Division",
    company: "Swarna Fest ITERA",
    period: "Mar 2023 — May 2023",
    location: "Lampung, Indonesia",
    desc: "Designed competition system timeline and evaluation criteria Developed competition information system and coordinated event execution",
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

      {/* HEADER */}
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


      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 pb-32">

        {/* CATEGORY FILTER (ARTICLE STYLE) */}
        <div className="flex justify-center flex-wrap gap-2 mb-20">

          {[
            { label: "All", value: "all" },
            { label: "Professional", value: "pro", icon: <Briefcase size={12}/> },
            { label: "Organizational", value: "org", icon: <Users size={12}/> },
          ].map((cat) => {

            const active = filter === cat.value;

            return (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`
                  px-4 py-2 rounded-full text-xs flex items-center gap-1
                  transition
                  ${
                    active
                      ? "bg-[var(--accent)] text-black"
                      : "border border-[var(--border)] hover:border-[var(--accent)]"
                  }
                `}
              >
                {cat.icon}
                {cat.label}
              </button>
            );

          })}

        </div>


        {/* TIMELINE */}
        <div className="relative">

          {/* line */}
          <div
            className="
            absolute left-1/2 top-0 w-[2px] h-full
            bg-gradient-to-b from-[var(--accent)]/60 via-[var(--border)] to-transparent
            -translate-x-1/2
          "
          />

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