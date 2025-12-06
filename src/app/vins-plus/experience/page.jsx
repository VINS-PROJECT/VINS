"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Calendar, MapPin, Trophy } from "lucide-react";
import { useState } from "react";

export default function ExperiencePage() {
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
      desc: "Performed customer data analysis for Indibiz installations in Lampung Province from January 2023 to June 2024 using SQL and PHP, developed the ‘Kedaton Connect’ website dashboard for Indibiz data analysis following the waterfall method, gained in depth knowledge of Telkom Indonesia’s corporate structure, and studied the servers, networks, and infrastructure at Telkom Indonesia Regional Lampung along with their functions and tasks.",
    },
    {
      role: "Web Developer",
      company: "Baparekraf Digital Talent x Dicoding",
      period: "February 2024 — July 2024",
      location: "Bandung, Indonesia",
      tech: ["PHP", "Bootstrap", "Waterfall"],
      desc: "Learned website development from both Front End and Back End perspectives and developed an agricultural themed website named ‘Harvesty’ using PHP and the CSS Bootstrap framework to address agricultural sector issues, implemented a structured workflow with the Waterfall method from UI design to Back End programming, achieved 100% completion by mid June with weekly progress of 4%–7%, and collaborated closely with the development team, demonstrating leadership, communication skills, and a focus on shared team goals.",
    },
  ];

  const organizational = [
    {
      role: "Class Manager",
      organization: "Digistar Class Telkom Indonesia",
      period: "August 2024 — November 2024",
      location: "Hybrid",
      achievements: [
        "Served as the manager of Telkom Indonesia's Digistar Class for Soft and Hard Skills, acting as a liaison between mentees and the Digistar Telkom team, conducted assessments of tasks assigned by the team, evaluated mentees’ progress throughout the learning process, and provided guidance to ensure mentees stayed on track and achieved their learning objectives.",
      ],
    },
    {
      role: "Human Resources Development",
      organization: "Duta Potensi Pemuda Indonesia",
      period: "April 2024 — December 2024",
      location: "Hybrid",
      achievements: [
        "Designed, developed, and implemented programs aligned with the organization’s goals, vision, and mission, including creating the Indonesian Youth Potential Ambassadors 2024 program, developing training to help ambassadors realize and enhance their individual potential, fostering networking and collaboration, and ensuring compliance with organizational policies to achieve unified objectives.",
      ],
    },
    {
      role: "Event Division",
      organization: "Lampung Leadership Forum",
      period: "October 2023 — December 2023",
      location: "Lampung",
      achievements: [
        "Prepared the event flow for LLF 2024, coordinating audience, speakers, and performers for each session, assisted in organizing audience registration including materials and lists, ensured that event concepts, themes, and logistics were executed smoothly, and coordinated with all divisions to align with the event division’s plans.",
      ],
    },
    {
      role: "Head of Public Relations",
      organization: "PMK ITERA Easter Celebration",
      period: "March 2023 — May 2023",
      location: "Lampung",
      achievements: [
        "Ensured and established an efficient communication flow for event preparation and implementation, effectively identified and directed communication to target audiences, built and maintained strong internal and external relationships, and ensured that audiences, speakers, and performers followed the planned event concept.",
      ],
    },
    {
      role: "Competition Division Member",
      organization: "Swarnafest ITERA 2022",
      period: "August 2022 — December 2022",
      location: "Lampung",
      achievements: [
        "Determined criteria and scoring mechanisms for each competition, prepared timelines, implementation techniques, promotional materials, and publications targeting schools in Lampung, developed the Swarnafest ITERA 2022 competition information system with a well-structured concept, and ensured the jury team could attend according to the scheduled events.",
      ],
    },
    {
      role: "Back End Developer",
      organization: "PPLK ITERA 2022",
      period: "June 2022 — August 2022",
      location: "Lampung",
      achievements: [
        "Designed and developed data handling and back-end interactions for the PPLK ITERA 2022 website, collaborated with the Front End team to integrate interfaces, ensured security and performance of the back-end systems, and managed database interactions to store and retrieve data for each interface.",
      ],
    },
  ];

  const [filter, setFilter] = useState<"all" | "pro" | "org">("all");

  const totalPro = professional.length;
  const totalOrg = organizational.length;

  return (
    <main className="min-h-screen pt-28 pb-24 bg-[var(--background)] text-[var(--foreground)] relative">
      {/* Soft background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 15%, var(--accent)/20 0%, transparent 60%),
            radial-gradient(circle at 80% 85%, var(--accent)/18 0%, transparent 60%)
          `,
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--accent), var(--accent-dark))",
            }}
          >
            Experience
          </h1>
          <p className="opacity-65 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            A combined journey of professional work and organizational leadership that shapes how I build, collaborate, and lead.
          </p>

          {/* Quick stats */}
          <div className="flex items-center justify-center gap-4 mt-5 text-xs opacity-80">
            <span className="px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--card)]">
              {totalPro} Professional Roles
            </span>
            <span className="px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--card)]">
              {totalOrg} Organizational Roles
            </span>
          </div>
        </motion.div>

        {/* FILTER TOGGLE */}
        <div className="flex items-center justify-center gap-2 mb-14">
          <FilterChip
            label="All"
            active={filter === "all"}
            onClick={() => setFilter("all")}
          />
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

        {/* PROFESSIONAL SECTION */}
        {(filter === "all" || filter === "pro") && (
          <section className="mb-20">
            <SectionHeader
              icon={<Briefcase className="w-5 h-5 text-[var(--accent)]" />}
              title="Professional Journey"
              subtitle="Roles, responsibilities, and impact in corporate and industry environments."
            />

            <div className="md:grid md:grid-cols-[4px,1fr] gap-6 mt-8">
              {/* Vertical line */}
              <div className="hidden md:block relative">
                <div className="h-full w-[2px] bg-gradient-to-b from-[var(--accent)]/70 via-[var(--border)] to-transparent mx-auto rounded-full" />
              </div>

              <div className="space-y-8">
                {professional.map((exp, i) => (
                  <TimelineCard
                    key={i}
                    index={i}
                    isLeft={false}
                    title={exp.role}
                    subtitle={exp.company}
                    period={exp.period}
                    location={exp.location}
                    body={exp.desc}
                    tech={exp.tech}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ORGANIZATIONAL SECTION */}
        {(filter === "all" || filter === "org") && (
          <section>
            <SectionHeader
              icon={<Users className="w-5 h-5 text-[var(--accent)]" />}
              title="Organizational Experience"
              subtitle="Leadership, collaboration, and event execution across communities and organizations."
            />

            <div className="md:grid md:grid-cols-[4px,1fr] gap-6 mt-8">
              {/* Vertical line */}
              <div className="hidden md:block relative">
                <div className="h-full w-[2px] bg-gradient-to-b from-[var(--accent)]/70 via-[var(--border)] to-transparent mx-auto rounded-full" />
              </div>

              <div className="space-y-8">
                {organizational.map((exp, i) => (
                  <TimelineCard
                    key={i}
                    index={i}
                    isLeft={false}
                    title={exp.role}
                    subtitle={exp.organization}
                    period={exp.period}
                    location={exp.location}
                    body={exp.achievements.join(" ")}
                    tech={[]}
                    isList={true}
                    list={exp.achievements}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SUMMARY */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24"
        >
          <Trophy className="w-10 h-10 text-[var(--accent)] mx-auto mb-4" />
          <h3 className="text-xl font-semibold">
            Built Through Real Projects & People
          </h3>
          <p className="opacity-60 max-w-lg mx-auto text-sm mt-2">
            Each role—whether in companies or organizations—strengthens how I manage projects, work in teams, and deliver results with clarity and intention.
          </p>
        </motion.div>
      </div>
    </main>
  );
}

/* ----------------- SMALL COMPONENTS ----------------- */

function FilterChip({ label, icon, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold
        border transition-all
        ${
          active
            ? "bg-[var(--accent)] text-black border-[var(--accent)]"
            : "bg-[var(--card)] border-[var(--border)] hover:border-[var(--accent)]/60"
        }
      `}
    >
      {icon}
      {label}
    </button>
  );
}

function SectionHeader({ icon, title, subtitle }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--card)] w-fit text-xs font-medium">
        {icon}
        <span className="uppercase tracking-wide text-[10px] opacity-80">
          {title}
        </span>
      </div>
      <h2 className="text-lg md:text-xl font-semibold mt-1">{title}</h2>
      <p className="text-xs opacity-70 max-w-xl">{subtitle}</p>
    </div>
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
  isList,
  list = [],
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="relative rounded-2xl border border-[var(--border)] bg-[var(--card)]/95 
                 shadow-sm hover:shadow-[0_14px_40px_rgba(0,0,0,0.25)] 
                 transition-all duration-300 p-6"
    >
      {/* Bullet for timeline  */}
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

      {/* Description */}
      <div className="text-xs md:text-sm opacity-80 leading-relaxed mb-4">
        {isList ? (
          <ul className="list-disc ml-4 space-y-1">
            {list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{body}</p>
        )}
      </div>

      {/* Tech tags if exist */}
      {tech && tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 rounded-md text-[10px] border border-[var(--border)] 
                         bg-[var(--background)]/40 text-[var(--foreground)]/80"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  );
}
