"use client";

import { useParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.js`;

export default function CertificateDetail() {
  const { id } = useParams();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [numPages, setNumPages] = useState(null);
  const [containerWidth, setContainerWidth] = useState(900);
  const pdfWrapperRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (pdfWrapperRef.current) {
        setContainerWidth(pdfWrapperRef.current.offsetWidth - 20);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  /* ================= DATA ================= */
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
      pdf: "/File/BDT-Training.pdf",
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
      pdf: "/File/DicodingFile1.pdf",
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
      pdf: "/File/DicodingFile2.pdf",
      desc: "Fundamental course on back-end application development, covering server-side programming, RESTful APIs, database integration, and security best practices.",
    },

    {
      id: 4,
      title: "Introduction to UX/UI Design",
      issuer: "Coursera",
      issuerLogo: "/Coursera.svg",
      year: 2025,
      issuedDate: "8 November 2025",
      certificateId: "YQWIQGV43MOR",
      duration: "15 Jam",
      category: "UX/UI Design",
      image: "/certificates/uxui.png",
      pdf: "/File/IBMFile1.pdf",
      desc: "Introduction to UX/UI design, focusing on user-centered design, wireframing, prototyping, and usability testing.",
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
      pdf: "/File/GoogleFile1.pdf",
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
      pdf: "/File/GoogleFile2.pdf",
      desc: "Fundamental course on project management principles, including project lifecycle, resource allocation, and risk management.",
    },

    {
      id: 7,
      title: "AI Foundations & Design Thinking",
      issuer: "Coursera",
      issuerLogo: "/Coursera.svg",
      year: 2025,
      issuedDate: "10 November 2025",
      certificateId: "PJD3D9Q7WVXD",
      duration: "9 Jam",
      category: "Artificial Intelligence",
      image: "/certificates/aifoundationsdesignthinking.png",
      pdf: "/File/CourseraFile1.pdf",
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
      pdf: "/File/SkillShareFile1.pdf",
      desc: "Advanced course on Figma, focusing on auto layouts, grids, and components for efficient UI design.",
    },
  ]; // tetap sama (tidak diubah)

  const cert = certificates.find((c) => c.id === Number(id));

  if (!cert)
    return (
      <main className="min-h-screen flex items-center justify-center">
        Certificate not found.
      </main>
    );

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">

      {/* ================= HEADER (CENTERED) ================= */}
      <section className="relative text-center px-6 pt-32 pb-20">

        {/* glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[var(--accent)]/10" />
          <div className="absolute w-[400px] h-[400px] bg-[var(--accent)]/20 blur-[120px] rounded-full top-[-100px] left-1/2 -translate-x-1/2" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto space-y-3"
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Certificate Details
          </h1>

          <p className="text-sm opacity-60 font-mono">
            /vins+/certificate
          </p>

          {/* breadcrumb */}
          <div className="flex justify-center gap-2 text-sm mt-3">
            <Link href="/" className="text-[var(--accent)]">Home</Link>
            <ChevronRight size={14} />
            <Link href="/vins-plus/certificate" className="text-[var(--accent)]">
              Certificates
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-32">

        {/* BACK */}
        <Link
          href="/vins-plus/certificate"
          className="inline-flex items-center gap-2 mb-12 text-[var(--accent)]"
        >
          <ArrowLeft size={16} /> Back
        </Link>

        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="relative rounded-3xl overflow-hidden">

            <div className="relative h-[320px] md:h-[420px]">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 p-8">
              <h2 className="text-2xl md:text-4xl text-white font-bold">
                {cert.title}
              </h2>

              <p className="text-white/70 mt-2">
                {cert.issuer} • {cert.year}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= DETAILS ================= */}
        <Glass title="Certificate Info">
          <Detail label="Issued Date" value={cert.issuedDate} />
          <Detail label="Publisher" value={cert.issuer} />
          <Detail label="Category" value={cert.category} />
          <Detail label="Duration" value={cert.duration} />
          <Detail label="Certificate ID" value={cert.certificateId} />
        </Glass>

        {/* DESCRIPTION */}
        <Glass title="Description">
          <p className="leading-relaxed text-lg opacity-80">
            {cert.desc}
          </p>
        </Glass>

        {/* PDF */}
        <Glass title="Preview Certificate">
          <div ref={pdfWrapperRef}>
            <Document
              file={cert.pdf}
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            >
              {numPages &&
                Array.from({ length: numPages }).map((_, i) => (
                  <Page
                    key={i}
                    pageNumber={i + 1}
                    width={containerWidth}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="mx-auto mb-10 rounded-lg shadow-lg"
                  />
                ))}
            </Document>
          </div>
        </Glass>

      </section>
    </main>
  );
}

/* ================= COMPONENT ================= */

function Detail({ label, value }) {
  return (
    <p className="text-sm">
      <span className="text-[var(--accent)] font-semibold">
        {label}:{" "}
      </span>
      {value}
    </p>
  );
}

function Glass({ title, children }) {
  return (
    <section
      className="
        group relative mb-16 p-8 rounded-3xl
        bg-[var(--card)]/70 backdrop-blur-xl
        border border-[var(--border)]
        hover:border-[var(--accent)]/40
        transition
      "
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[var(--accent)]/5 rounded-3xl transition" />

      <h2 className="relative text-xl font-bold mb-5 text-[var(--accent)]">
        {title}
      </h2>

      <div className="relative">{children}</div>
    </section>
  );
}