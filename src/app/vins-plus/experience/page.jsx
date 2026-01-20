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

/* ================= ICON STYLE ================= */
const iconProps = {
  size: 14,
  strokeWidth: 1.25,
  absoluteStrokeWidth: true,
};

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
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ pathOffset: [0, 1] }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
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
      desc:
        "Designed social media feeds and stories aligned with brand themes, created logos for six departments, collaborated on partner guides, and produced OBS displays, certificates, and posters.",
    },
    {
      role: "IT Project Manager",
      company: "PT Yayasan Media Selaras Cendekiawan",
      period: "August 2024 — October 2024",
      location: "Jawa Barat, Indonesia",
      tech: ["Scrum", "Leadership", "Notion"],
      desc:
        "Led UI/UX, Front End, and Back End teams, managed budgets, tracked weekly progress, and delivered structured reports to stakeholders.",
    },
    {
      role: "BGESS MBB",
      company: "Telkom Witel Regional Lampung",
      period: "July 2024 — August 2024",
      location: "Lampung, Indonesia",
      tech: ["Figma", "SQL", "PHP", "Waterfall"],
      desc:
        "Analyzed Indibiz customer data and developed a dashboard for business insights following the Waterfall method.",
    },
    {
      role: "Web Developer",
      company: "Baparekraf Digital Talent x Dicoding",
      period: "February 2024 — July 2024",
      location: "Bandung, Indonesia",
      tech: ["PHP", "Bootstrap", "Waterfall"],
      desc:
        "Built an agricultural website using PHP & Bootstrap with a full Waterfall workflow and 100% completion.",
    },
  ];

  const organizational = [
    {
      role: "Class Manager",
      organization: "Digistar Class Telkom Indonesia",
      period: "August 2024 — November 2024",
      location: "Hybrid",
      achievements: [
        "Acted as liaison between mentees and Digistar Telkom team and evaluated participant progress.",
      ],
    },
    {
      role: "Human Resources Development",
      organization: "Duta Potensi Pemuda Indonesia",
      period: "April 2024 — December 2024",
      location: "Hybrid",
      achievements: [
        "Designed and executed programs including Indonesian Youth Potential Ambassadors 2024.",
      ],
    },
    {
      role: "Event Division",
      organization: "Lampung Leadership Forum",
      period: "October 2023 — December 2023",
      location: "Lampung",
      achievements: [
        "Coordinated speakers, audience, and event flow for LLF 2024.",
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
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <WaveHighlight>Experience</WaveHighlight>
          </h1>

          <p className="opacity-65 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Professional work and organizational leadership shaping how I
            collaborate, lead, and deliver results.
          </p>

          {/* STATS */}
          <div className="flex justify-center gap-4 mt-6 text-xs">
            <span className="px-3 py-1 rounded-full bg-[var(--accent)] text-black font-semibold">
              {professional.length} Professional Roles
            </span>
            <span className="px-3 py-1 rounded-full border border-[var(--border)]">
              {organizational.length} Organizational Roles
            </span>
          </div>
        </motion.div>

        {/* FILTER */}
        <div className="flex justify-center gap-2 mb-20">
          <FilterChip label="All" active={filter === "all"} onClick={() => setFilter("all")} />
          <FilterChip
            label="Professional"
            icon={<Briefcase {...iconProps} />}
            active={filter === "pro"}
            onClick={() => setFilter("pro")}
          />
          <FilterChip
            label="Organizational"
            icon={<Users {...iconProps} />}
            active={filter === "org"}
            onClick={() => setFilter("org")}
          />
        </div>

        {(filter === "all" || filter === "pro") && (
          <Section
            icon={<Briefcase {...iconProps} className="text-[var(--accent)]" />}
            title="Professional Journey"
            subtitle="Roles and impact in corporate environments."
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

        {(filter === "all" || filter === "org") && (
          <Section
            icon={<Users {...iconProps} className="text-[var(--accent)]" />}
            title="Organizational Experience"
            subtitle="Leadership and community involvement."
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
          <Trophy size={40} strokeWidth={1.25} className="text-[var(--accent)] mx-auto mb-4" />
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
    <section className="mb-28">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] text-xs font-semibold">
          {icon}
          {title}
        </div>
        <h2 className="text-lg md:text-xl font-semibold mt-2">{title}</h2>
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
      className="
        relative rounded-2xl
        bg-[var(--card)]
        border border-[var(--border)]
        p-6 shadow-sm
        hover:shadow-[0_16px_44px_rgba(0,0,0,0.25)]
        transition
      "
    >
      <header className="mb-3">
        <h3 className="text-base md:text-lg font-semibold">{title}</h3>
        <p className="text-xs md:text-sm opacity-70 font-medium">
          {subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-3 text-[11px] mt-2 opacity-75">
          <span className="inline-flex items-center gap-1">
            <Calendar {...iconProps} className="text-[var(--accent)]" />
            {period}
          </span>
          <span className="inline-flex items-center gap-1">
            <MapPin {...iconProps} className="text-[var(--accent)]" />
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
              className="px-2 py-1 rounded-md text-[10px] font-semibold bg-[var(--accent)]/15 text-[var(--accent)]"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  );
}
