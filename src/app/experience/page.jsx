"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Code, Users, Trophy } from "lucide-react";

export default function ExperiencePage() {
  const professionalExp = [
    {
      id: 1,
      role: "Creative Media",
      company: "PT Yayasan Media Selaras Cendekiawan",
      year: "January 2025 — September 2025",
      location: "Jawa Barat, Indonesia",
      tech: ["Figma", "Adobe Photoshop", "Canva", "Social Media"],
      desc: "Designed the company's social media feed and stories using three themes aligned with the brand color palette, created logos for six departments each with a distinct color, collaborated with the partnership team to develop a customized partner guide, and designed OBS displays, certificates, and posters according to the project management team's requirements.",
    },
    {
      id: 2,
      role: "IT Project Manager",
      company: "PT Yayasan Media Selaras Cendekiawan",
      year: "August 2024 — October 2024",
      location: "Jawa Barat, Indonesia",
      tech: ["Project Management", "Agile", "Budgeting"],
      desc: "Oversaw a team of three divisions UI/UX, Front End, and Back End ensuring structured progress toward completing the website project by mid-October, managed and allocated the project budget effectively, conducted biweekly evaluations targeting 5%–7% progress per assignment, and submitted weekly reports to superiors detailing workflow, budget usage, progress, and performance percentages.",
    },
    {
      id: 3,
      role: "BGESS MBB",
      company: "Telkom Witel Regional Lampung",
      year: "Juli 2024 - August 2024",
      location: "Lampung, Indonesia",
      tech: ["UI/UX Design", "Figma", "Prototyping", "Web Development"],
      desc: "Performed customer data analysis for Indibiz installations in Lampung Province from January 2023 to June 2024 using SQL and PHP, developed the ‘Kedaton Connect’ website dashboard for Indibiz data analysis following the waterfall method, gained in depth knowledge of Telkom Indonesia’s corporate structure, and studied the servers, networks, and infrastructure at Telkom Indonesia Regional Lampung along with their functions and tasks. ",
    },
    {
      id: 4,
      role: "Web Developer",
      company: "Baparekraf Digital Talent x Dicoding",
      year: "February 2024 - July 2024",
      location: "Bandung, Indonesia",
      tech: ["PHP", "Bootstrap", "UI Design", "Waterfall Method", "Teamwork"],
      desc: "Learned website development from both Front End and Back End perspectives and developed an agricultural themed website named ‘Harvesty’ using PHP and the CSS Bootstrap framework to address agricultural sector issues, implemented a structured workflow with the Waterfall method from UI design to Back End programming, achieved 100% completion by mid June with weekly progress of 4%–7%, and collaborated closely with the development team, demonstrating leadership, communication skills, and a focus on shared team goals. ",
    },
  ];

  const organizationalExp = [
    {
      id: 1,
      role: "Digistar Class Telkom Indonesia",
      organization: "Telkom Indonesia",
      period: "August 2024 — November 2024",
      location: "Hybrid",
      division: "Class Manager",
      achievements: [
        "Served as the manager of Telkom Indonesia's Digistar Class for Soft and Hard Skills, acting as a liaison between mentees and the Digistar Telkom team, conducted assessments of tasks assigned by the team, evaluated mentees’ progress throughout the learning process, and provided guidance to ensure mentees stayed on track and achieved their learning objectives.",
      ],
    },
    {
      id: 2,
      role: "Staff of Human Resources Development",
      organization: "Duta Potensi Pemuda Indonesia",
      period: "April 2024 — December 2024",
      location: "Hybrid",
      division: "Human Resources Development",
      achievements: [
        "Designed, developed, and implemented programs aligned with the organization’s goals, vision, and mission, including creating the Indonesian Youth Potential Ambassadors 2024 program, developing training to help ambassadors realize and enhance their individual potential, fostering networking and collaboration, and ensuring compliance with organizational policies to achieve unified objectives.",
      ],
    },
    {
      id: 3,
      role: "Staff of Event Division",
      organization: "Lampung Leadership Forum",
      period: "October 2023 — December 2023",
      location: "Lampung, Indonesia",
      division: "Event Division",
      achievements: [
        "Prepared the event flow for LLF 2024, coordinating audience, speakers, and performers for each session, assisted in organizing audience registration including materials and lists, ensured that event concepts, themes, and logistics were executed smoothly, and coordinated with all divisions to align with the event division’s plans." 
      ],
    },
    {
      id: 4,
      role: "Head of Public Relations",
      organization: "PMK ITERA Easter Celebration",
      period: "March 2023 — May 2023",
      location: "Lampung, Indonesia",
      division: "Public Relations",
      achievements: [
        "Ensured and established an efficient communication flow for event preparation and implementation, effectively identified and directed communication to target audiences, built and maintained strong internal and external relationships, and ensured that audiences, speakers, and performers followed the planned event concept.",
      ],
    },
    {
        id: 5,
        role: "Staff of Competition Division",
        organization: "Swarnafest ITERA",
        period: "August 2022 — December 2022",
        location: "Lampung, Indonesia",
        division: "Competition Division",
        achievements: [
          "Determined criteria and scoring mechanisms for each competition, prepared timelines, implementation techniques, promotional materials, and publications targeting schools in Lampung, developed the Swarnafest ITERA 2022 competition information system with a well-structured concept, and ensured the jury team could attend according to the scheduled events. ",
        ],
    },
    {
        id: 6,
        role: "Staff of Back End Development Division",
        organization: "PPLK ITERA",
        period: "June 2022 — August 2022",
        location: "Lampung, Indonesia",
        division: "Back End Development Division",
        achievements: [
          "Designed and developed data handling and back-end interactions for the PPLK ITERA 2022 website, collaborated with the Front End team to integrate interfaces, ensured security and performance of the back-end systems, and managed database interactions to store and retrieve data for each interface. ",
        ],
    }
  ];

  return (
    <main className="min-h-screen bg-black text-gray-200 pt-28 pb-24 relative overflow-hidden">
      {/* === Background Glow === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(226,192,124,0.12),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(209,170,96,0.1),transparent_60%)]"
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* === Professional Experience === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#E2C07C] via-[#d6b270] to-[#b99a5e] bg-clip-text text-transparent">
            Experience & Leadership
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            A combined journey of professional growth and organizational leadership — shaping
            both technical and interpersonal skills.
          </p>
        </motion.div>

        {/* === Professional Section === */}
        <h2 className="text-2xl font-bold text-[#E2C07C] mb-8 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-[#E2C07C]" /> Professional Experience
        </h2>

        <div className="relative border-l border-[#E2C07C]/30 ml-6 mb-24">
          {professionalExp.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-14 pl-10"
            >
              <div className="absolute -left-[22px] w-10 h-10 rounded-full border-2 border-[#E2C07C] bg-[#E2C07C]/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[#E2C07C]" />
              </div>

              <div className="bg-white/5 border border-[#E2C07C]/20 backdrop-blur-md p-6 rounded-2xl hover:border-[#E2C07C]/40 hover:shadow-[0_0_20px_-6px_rgba(226,192,124,0.3)] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h2 className="text-xl font-semibold text-[#E2C07C]">{exp.role}</h2>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 text-[#E2C07C]" /> {exp.year}
                  </div>
                </div>

                <p className="text-gray-300 text-sm font-medium mb-1">{exp.company}</p>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <MapPin className="w-4 h-4 text-[#E2C07C]" /> {exp.location}
                </div>

                <p className="text-sm text-gray-400 leading-relaxed mb-4">{exp.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs border border-[#E2C07C]/30 bg-[#E2C07C]/5 text-[#E2C07C]"
                    >
                      <Code className="w-3 h-3" /> {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* === Organizational Section === */}
        <h2 className="text-2xl font-bold text-[#E2C07C] mb-8 flex items-center gap-2">
          <Users className="w-5 h-5 text-[#E2C07C]" /> Organizational Experience
        </h2>

        <div className="relative border-l border-[#E2C07C]/30 ml-6">
          {organizationalExp.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-14 pl-10"
            >
              <div className="absolute -left-[22px] w-10 h-10 rounded-full border-2 border-[#E2C07C] bg-[#E2C07C]/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-[#E2C07C]" />
              </div>

              <div className="bg-white/5 border border-[#E2C07C]/20 backdrop-blur-md p-6 rounded-2xl hover:border-[#E2C07C]/40 hover:shadow-[0_0_20px_-6px_rgba(226,192,124,0.3)] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h2 className="text-xl font-semibold text-[#E2C07C]">{exp.role}</h2>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 text-[#E2C07C]" /> {exp.period}
                  </div>
                </div>

                <p className="text-gray-300 text-sm font-medium mb-1">{exp.organization}</p>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <MapPin className="w-4 h-4 text-[#E2C07C]" /> {exp.location}
                </div>

                <p className="text-sm text-gray-400 mb-2 italic">
                  Division:{" "}
                  <span className="text-[#E2C07C] font-medium">{exp.division}</span>
                </p>

                <ul className="text-sm text-gray-400 list-disc ml-5 space-y-1 mt-3">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx}>{ach}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* === Summary === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <Trophy className="w-10 h-10 text-[#E2C07C] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Growth Through Experience</h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            Every role, from professional to organizational, has shaped me into a well-rounded
            creative developer — combining leadership, collaboration, and innovation.
          </p>
        </motion.div>
      </div>

      {/* === Bottom Glow === */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </main>
  );
}
