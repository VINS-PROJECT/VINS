"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Calendar,
  MapPin,
  Trophy,
} from "lucide-react";
import { useState } from "react";

/* ================= WAVE HIGHLIGHT ================= */
function WaveHighlight({ children }) {
  return (
    <span className="relative inline-block leading-tight">
      <span
        className="relative z-10 bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--accent) 10%, var(--accent-dark) 90%)",
          WebkitTextFillColor: "transparent",
        }}
      >
        {children}
      </span>
      <svg
        className="absolute left-0 bottom-0 w-full h-[8px]"
        viewBox="0 0 200 20"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 10 Q 25 6 50 10 T 100 10 T 150 10 T 200 10"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={{ pathOffset: [0, 1] }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </svg>
    </span>
  );
}

export default function ExperiencePage() {
  /* ================= DATA ================= */
  const professional = [
    {
      role: "Creative Media",
      company: "PT Yayasan Media Selaras Cendekiawan",
      period: "January 2025 — August 2025",
      location: "Jawa Barat, Indonesia",
      tech: ["Figma", "Photoshop", "Canva", "Social Media"],
      desc: "Designed the company's social media feed and stories using three themes aligned with the brand color palette, created logos for six departments each with a distinct color, collaborated with the partnership team to develop a customized partner guide, and designed OBS displays, certificates, and posters according to the project management team's requirements.",
    },
    {
      role: "IT Project Manager",
      company: "PT Yayasan Media Selaras Cendekiawan",
      period: "August 2024 — October 2024",
      location: "Jawa Barat, Indonesia",
      tech: ["Scrum", "Leadership", "Task Control", "Notion"],
      desc: "Oversaw a team of three divisions UI/UX, Front End, and Back End ensuring structured progress toward completing the website project by mid-October, managed and allocated the project budget effectively, conducted biweekly evaluations targeting 5%–7% progress per assignment, and submitted weekly reports to superiors detailing workflow, budget usage, progress, and performance percentages.",
    },
    {
      role: "BGESS MBB",
      company: "Telkom Witel Regional Lampung",
      period: "July 2024 — August 2024",
      location: "Lampung, Indonesia",
      tech: ["Figma", "UI Design", "Data Analysis", "SQL", "PHP", "Waterfall"],
      desc: "Performed customer data analysis for Indibiz installations in Lampung Province from January 2023 to June 2024 using SQL and PHP, developed the ‘Kedaton Connect’ website dashboard for Indibiz data analysis following the waterfall method, gained in-depth knowledge of Telkom Indonesia’s corporate structure, and studied the servers, networks, and infrastructure at Telkom Indonesia Regional Lampung.",
    },
    {
      role: "Web Developer",
      company: "Baparekraf Digital Talent x Dicoding",
      period: "February 2024 — July 2024",
      location: "Bandung, Indonesia",
      tech: ["PHP", "Bootstrap", "Waterfall"],
      desc: "Developed an agricultural-themed website ‘Harvesty’ using PHP and Bootstrap, implemented a structured Waterfall workflow from UI to Back End, achieved 100% completion by mid-June, and collaborated closely with the team demonstrating leadership and communication skills.",
    },
  ];

  const organizational = [
    {
      role: "Class Manager",
      organization: "Digistar Class Telkom Indonesia",
      period: "August 2024 — November 2024",
      location: "Hybrid",
      achievements: [
        "Served as liaison between mentees and Digistar Telkom team, evaluated progress, and guided participants to achieve learning objectives.",
      ],
    },
    {
      role: "Human Resources Development",
      organization: "Duta Potensi Pemuda Indonesia",
      period: "April 2024 — December 2024",
      location: "Hybrid",
      achievements: [
        "Designed and implemented programs aligned with organizational goals, including Indonesian Youth Potential Ambassadors 2024.",
      ],
    },
    {
      role: "Event Division",
      organization: "Lampung Leadership Forum",
      period: "October 2023 — December 2023",
      location: "Lampung",
      achievements: [
        "Prepared event flow, coordinated speakers and audience, and ensured smooth execution of LLF 2024.",
      ],
    },
  ];

  const [filter, setFilter] = useState("all");

  return (
    <main className="relative min-h-screen pt-28 pb-24 bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      {/* BACKDROP */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 15%, var(--accent)/0.18, transparent 60%),
            radial-gradient(circle at 80% 85%, var(--accent-dark)/0.18, transparent 60%)
          `,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <WaveHighlight>Experience</WaveHighlight>
          </h1>

          <p className="opacity-65 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            A combined journey of professional work and organizational leadership
            shaping how I collaborate, lead, and deliver results.
          </p>

          {/* STATS */}
          <div className="flex justify-center gap-4 mt-6 text-xs opacity-80">
            <span className="px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--card)]">
              {professional.length} Professional Roles
            </span>
            <span className="px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--card)]">
              {organizational.length} Organizational Roles
            </span>
          </div>
        </motion.div>

        {/* FILTER */}
        <div className="flex justify-center gap-2 mb-16">
          <FilterChip label="All" active={filter === "all"} onClick={() => setFilter("all")} />
          <FilterChip
            label="Professional"
            icon={<Briefcase className="w-3.5 h-3.5" />}
            active={filter === "pro"}
            onClick={() => setFilter("pro")}
          />
          <FilterChip
            label="Organizational"
            icon={<Users className="w-3.5 h-3.5" />}
            active={filter === "org"}
            onClick={() => setFilter("org")}
          />
        </div>

        {/* PROFESSIONAL */}
        {(filter === "all" || filter === "pro") && (
          <Section
            icon={<Briefcase className="w-5 h-5 text-[var(--accent)]" />}
            title="Professional Journey"
            subtitle="Roles, responsibilities, and impact in corporate environments."
            items={professional.map((e) => ({
              title: e.role,
              subtitle: e.company,
              period: e.period,
              location: e.location,
              body: e.desc,
              tech: e.tech,
            }))}
          />
        )}

        {/* ORGANIZATIONAL */}
        {(filter === "all" || filter === "org") && (
          <Section
            icon={<Users className="w-5 h-5 text-[var(--accent)]" />}
            title="Organizational Experience"
            subtitle="Leadership, collaboration, and community engagement."
            items={organizational.map((e) => ({
              title: e.role,
              subtitle: e.organization,
              period: e.period,
              location: e.location,
              list: e.achievements,
            }))}
          />
        )}

        {/* SUMMARY */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-28"
        >
          <Trophy className="w-10 h-10 text-[var(--accent)] mx-auto mb-4" />
          <h3 className="text-xl font-semibold">
            Built Through Real Projects & People
          </h3>
          <p className="opacity-60 max-w-lg mx-auto text-sm mt-2">
            Each role strengthens how I manage projects, collaborate with teams,
            and deliver outcomes with clarity and intention.
          </p>
        </motion.div>
      </div>
    </main>
  );
}

/* ================= REUSABLE ================= */

function FilterChip({ label, icon, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition ${
        active
          ? "bg-[var(--accent)] text-black border-[var(--accent)]"
          : "bg-[var(--card)] border-[var(--border)] hover:border-[var(--accent)]/60"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function Section({ icon, title, subtitle, items }) {
  return (
    <section className="mb-24">
      <div className="flex flex-col gap-2 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--card)] w-fit text-xs font-medium">
          {icon}
          <span className="uppercase tracking-wide text-[10px] opacity-80">
            {title}
          </span>
        </div>
        <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
        <p className="text-xs opacity-70 max-w-xl">{subtitle}</p>
      </div>

      <div className="space-y-8">
        {items.map((item, i) => (
          <TimelineCard key={i} index={i} {...item} />
        ))}
      </div>
    </section>
  );
}

function TimelineCard({
  index,
  title,
  subtitle,
  period,
  location,
  body,
  tech,
  list,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="relative rounded-2xl border border-[var(--border)] bg-[var(--card)]/95 p-6 shadow-sm hover:shadow-[0_16px_44px_rgba(0,0,0,0.28)] transition"
    >
      <div className="hidden md:block absolute -left-4 top-6 w-3 h-3 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]" />

      <header className="mb-3">
        <h3 className="text-base md:text-lg font-semibold">{title}</h3>
        <p className="text-xs md:text-sm opacity-70 font-medium">
          {subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-3 text-[11px] mt-2 opacity-75">
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
            {period}
          </span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
            {location}
          </span>
        </div>
      </header>

      <div className="text-xs md:text-sm opacity-80 leading-relaxed mb-4">
        {list ? (
          <ul className="list-disc ml-4 space-y-1">
            {list.map((l, i) => (
              <li key={i}>{l}</li>
            ))}
          </ul>
        ) : (
          <p>{body}</p>
        )}
      </div>

      {tech && (
        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 rounded-md text-[10px] border border-[var(--border)] bg-[var(--background)]/40"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  );
}
