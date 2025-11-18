"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Calendar, MapPin, Code, Trophy } from "lucide-react";

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
      achievements: ["Served as the manager of Telkom Indonesia's Digistar Class for Soft and Hard Skills, acting as a liaison between mentees and the Digistar Telkom team, conducted assessments of tasks assigned by the team, evaluated mentees’ progress throughout the learning process, and provided guidance to ensure mentees stayed on track and achieved their learning objectives."],
    },
    {
      role: "Human Resources Development",
      organization: "Duta Potensi Pemuda Indonesia",
      period: "April 2024 — December 2024",
      location: "Hybrid",
      achievements: ["Designed, developed, and implemented programs aligned with the organization’s goals, vision, and mission, including creating the Indonesian Youth Potential Ambassadors 2024 program, developing training to help ambassadors realize and enhance their individual potential, fostering networking and collaboration, and ensuring compliance with organizational policies to achieve unified objectives."],
    },
    {
      role: "Event Division",
      organization: "Lampung Leadership Forum",
      period: "October 2023 — December 2023",
      location: "Lampung",
      achievements: ["Prepared the event flow for LLF 2024, coordinating audience, speakers, and performers for each session, assisted in organizing audience registration including materials and lists, ensured that event concepts, themes, and logistics were executed smoothly, and coordinated with all divisions to align with the event division’s plans."],
    },
    {
      role: "Head of Public Relations",
      organization: "PMK ITERA Easter Celebration",
      period: "March 2023 — May 2023",
      location: "Lampung",
      achievements: ["Ensured and established an efficient communication flow for event preparation and implementation, effectively identified and directed communication to target audiences, built and maintained strong internal and external relationships, and ensured that audiences, speakers, and performers followed the planned event concept."],
    },
    {
      role: "Competition Division Member",
      organization: "Swarnafest ITERA 2022",
      period: "August 2022 — December 2022",
      location: "Lampung",
      achievements: ["Determined criteria and scoring mechanisms for each competition, prepared timelines, implementation techniques, promotional materials, and publications targeting schools in Lampung, developed the Swarnafest ITERA 2022 competition information system with a well-structured concept, and ensured the jury team could attend according to the scheduled events."],
    },
    {
      role: "Back End Developer",
      organization: "PPLK ITERA 2022",
      period: "June 2022 — August 2022",
      location: "Lampung",
      achievements: ["Designed and developed data handling and back-end interactions for the PPLK ITERA 2022 website, collaborated with the Front End team to integrate interfaces, ensured security and performance of the back-end systems, and managed database interactions to store and retrieve data for each interface."],
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
