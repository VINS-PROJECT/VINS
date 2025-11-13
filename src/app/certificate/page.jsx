"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Filter, RefreshCcw, ArrowUpDown } from "lucide-react";

export default function CertificatePage() {
  const certificates = [
    {
      id: 1,
      title: "Front-End and Back-End Developer Training",
      issuer: "Baparekraf Digital Talent",
      issuerLogo: "/Baparekraf.svg",
      year: 2024,
      issuedDate: "21 Juli 2024",
      certificateId: "DCD/BDT/GRAD/XXIV-7/D2024Y076",
      duration: "940 Jam",
      category: "Web Development",
      image: "/certificates/frontend.png",
      pdf: "/certificates/frontend.pdf",
      desc: "Comprehensive training on front-end and back-end web development, covering HTML, CSS, JavaScript, React, Node.js, Express, and database management.",
    },
    {
      id: 2,
      title: "Becoming an Expert Front-End Web Developer",
      issuer: "Dicoding Indonesia",
      issuerLogo: "/Dicoding.svg",
      year: 2024,
      issuedDate: "28 June 2024",
      certificateId: "JLX17KKQNX72",
      duration: "100 Jam",
      category: "Web Development",
      image: "/certificates/react.png",
      pdf: "/certificates/react.pdf",
      desc: "In-depth course on advanced front-end development using React.js, focusing on component architecture, state management, routing, and performance optimization.",
    },
    {
      id: 3,
      title: "Learning to Build Back-End Applications for Beginners",
      issuer: "Dicoding Indonesia",
      issuerLogo: "/Dicoding.svg",
      year: 2024,
      issuedDate: "1 June 2024",
      certificateId: "4EXGQ75O9ZRL",
      duration: "100 Jam",
      category: "Back-End Development",
      image: "/certificates/backend.png",
      pdf: "/certificates/backend.pdf",
      desc: "Fundamental course on back-end application development, covering server-side programming, RESTful APIs, database integration, and security best practices.",
    },
    {
      id: 4,
      title: "Introduction UX/UI Design",
      issuer: "Coursera",
      issuerLogo: "/Coursera.svg",
      year: 2025,
      issuedDate: "8 November 2025",
      certificateId: "YQWIQGV43MOR",
      duration: "15 Jam",
      category: "UX/UI Design",
      image: "/certificates/uxui.png",
      pdf: "/certificates/uxui.pdf",
      desc: "Introduction to the principles and practices of UX/UI design, focusing on user-centered design, wireframing, prototyping, and usability testing.",
    },
    {
        id: 5,
        title: "Project Initiation: Starting a Successful Project",
        issuer: "Coursera",
        issuerLogo: "/Coursera.svg",
        year: 2025,
        issuedDate: "12 November 2025",
        certificateId: "9H2APOYYVASX",
        duration: "17 Jam",
        category: "Project Management",
        image: "/certificates/projectmanagement.png",
        pdf: "/File/CourseraProjectInitiation.pdf",
        desc: "Comprehensive course on project initiation, covering project planning, stakeholder management, risk assessment, and effective communication strategies.",
    },
    {
      id: 6,
      title: "Foundations of Project Management",
      issuer: "Coursera",
      issuerLogo: "/Coursera.svg",
      year: 2025,
      issuedDate: "15 November 2025",
      certificateId: "KDBFPBMTGBA7",
      duration: "12 Jam",
      category: "Project Management",
      image: "/certificates/foundationsprojectmanagement.png",
      pdf: "/File/CourseraFoundationsProjectManagement.pdf",
      desc: "Fundamental course on project management principles, including project lifecycle, resource allocation, and risk management.",
    },
    {
      id: 7,
      title: " AI Foundations & Design Thinking",
      issuer: "Coursera",
      issuerLogo: "/Coursera.svg",
      year: 2025,
      issuedDate: "10 November 2025",
      certificateId: "PJD3D9Q7WVXD",
      duration: "9 Jam",
      category: "Artificial Intelligence",
      image: "/certificates/aifoundationsdesignthinking.png",
      pdf: "/File/CourseraAIFoundationsDesignThinking.pdf",
      desc: "Introductory course on artificial intelligence concepts and design thinking methodologies for innovative problem-solving.",
    },
    {
      id: 8,
      title: "Figma Pro Pt. 1: Auto Layouts, Grids & Components",
      issuer: "Coursera",
      issuerLogo: "/Coursera.svg",
      year: 2025,
      issuedDate: "9 November 2025",
      certificateId: "VSEWK25EEQWD",
      duration: "7 Jam",
      category: "UX/UI Design",
      image: "/certificates/figmapro.png",
      pdf: "/File/CourseraFigmaProPt1.pdf",
      desc: "Advanced course on Figma, focusing on auto layouts, grids, and components for efficient UI design.",
    },
  ];

  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("desc");

  const categories = ["All", "Web Development", "Back-End Development"];

  const filteredCertificates = useMemo(() => {
    let arr = certificates;

    if (category !== "All") {
      arr = arr.filter((c) => c.category === category);
    }

    return arr.sort((a, b) =>
      sortOrder === "desc" ? b.year - a.year : a.year - b.year
    );
  }, [category, sortOrder]);

  return (
    <main className="min-h-screen bg-black text-gray-200 pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#E2C07C] to-[#b99a5e] bg-clip-text text-transparent">
          Certificates
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <Filter className="w-4 h-4 text-[#E2C07C]" />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 rounded-lg bg-white/5 border border-[#E2C07C]/30"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

          <button
            onClick={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")}
            className="px-4 py-2 rounded-lg border border-[#E2C07C]/30 flex items-center gap-2"
          >
            <ArrowUpDown className="w-4 h-4 text-[#E2C07C]" />
            {sortOrder === "desc" ? "Newest" : "Oldest"}
          </button>

          {(category !== "All" || sortOrder !== "desc") && (
            <button
              onClick={() => {
                setCategory("All");
                setSortOrder("desc");
              }}
              className="px-4 py-2 rounded-lg border border-[#E2C07C]/30"
            >
              <RefreshCcw className="w-4 h-4 inline-block mr-2 text-[#E2C07C]" />
              Reset
            </button>
          )}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCertificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-[#E2C07C]/20 rounded-2xl p-5 hover:border-[#E2C07C]/50 transition duration-300"
            >
              <div className="w-14 h-14 mb-4 overflow-hidden rounded-xl border border-[#E2C07C]/40 bg-white/10">
                <Image src={cert.issuerLogo} alt="logo" width={56} height={56} />
              </div>

              <h3 className="text-xl font-semibold text-white">{cert.title}</h3>

              <p className="text-sm text-[#E2C07C] mt-1">
                {cert.issuer} • {cert.year}
              </p>

              <p className="text-gray-400 text-sm mt-2 line-clamp-3">{cert.desc}</p>

              <Link
                href={`/certificate/${cert.id}`}
                className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#E2C07C] text-[#E2C07C] hover:bg-[#E2C07C]/10 transition text-sm font-semibold"
              >
                Detail <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
