"use client";

import { useParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

// PDF Viewer
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
  ];

  const cert = certificates.find((c) => c.id === Number(id));

  if (!cert)
    return (
      <main className="min-h-screen flex items-center justify-center bg-[var(--background)] text-[var(--foreground)]">
        Certificate not found.
      </main>
    );

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-28 pb-24 transition-colors">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h1
            className="
              text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent
            "
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--accent), var(--accent-dark))",
            }}
          >
            Certificate Details
          </h1>

          <p className="text-[var(--foreground)]/70 mt-3 text-lg max-w-3xl leading-relaxed">
            Complete certification details, metadata, issuer information, and full preview.
          </p>

          {/* Breadcrumb */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-medium">
            <Link href="/" className="text-[var(--accent)] hover:underline">
              Home
            </Link>

            <ChevronRight className="w-4 h-4 text-[var(--accent)]/60" />

            <Link href="/vins-plus/certificate" className="text-[var(--accent)] hover:underline">
              Certificates
            </Link>

            <ChevronRight className="w-4 h-4 text-[var(--accent)]/60" />

            <span className="text-[var(--foreground)]/70 truncate max-w-[180px] sm:max-w-none">
              {cert.title}
            </span>
          </div>
        </motion.div>

        {/* BACK BUTTON */}
        <Link
          href="/vins-plus/certificate"
          className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--foreground)] mb-10 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        {/* LOGO + TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            flex flex-col md:flex-row items-center md:items-start 
            gap-6 mb-14 text-center md:text-left
          "
        >
          <div className="w-20 h-20 rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--card)] flex items-center justify-center">
            <Image src={cert.issuerLogo} alt="logo" width={80} height={80} />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] leading-snug">
              {cert.title}
            </h1>
            <p className="text-[var(--accent)] tracking-wide font-medium mt-1">
              {cert.issuer} • {cert.year}
            </p>
          </div>
        </motion.div>

        {/* DETAILS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            mb-12 p-6 md:p-8 rounded-xl
            bg-[var(--card)] border border-[var(--border)]
            shadow-lg
          "
        >
          <h2 className="text-xl font-semibold text-[var(--accent)] mb-4">
            Certificate Details
          </h2>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-3 text-[var(--foreground)]/80 text-[15px]">
            <Detail label="Issued Date" value={cert.issuedDate} />
            <Detail label="Publisher" value={cert.issuer} />
            <Detail label="Category" value={cert.category} />
            <Detail label="Duration" value={cert.duration} />
            <Detail label="Certificate ID" value={cert.certificateId} />
          </div>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-12 max-w-4xl">
          <h2 className="text-xl font-semibold text-[var(--accent)] mb-4">Description</h2>

          <p className="text-[var(--foreground)]/80 leading-relaxed text-lg">
            {cert.desc}
          </p>
        </motion.div>

        {/* PDF VIEWER – Fully Responsive */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          ref={pdfWrapperRef}
          className="
            w-full rounded-xl p-4 sm:p-8
            bg-[var(--card)]
            border border-[var(--border)]
            shadow-xl
          "
        >
          <Document file={cert.pdf} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
            {numPages &&
              Array.from({ length: numPages }, (_, i) => (
                <Page
                  key={`page_${i + 1}`}
                  pageNumber={i + 1}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  width={containerWidth}
                  className="
                    mx-auto mb-10 border border-[var(--border)]
                    shadow-md bg-white rounded-lg
                  "
                />
              ))}
          </Document>
        </motion.div>

      </div>
    </main>
  );
}

/* DETAIL FIELD COMPONENT */
function Detail({ label, value }) {
  return (
    <p className="leading-relaxed">
      <span className="text-[var(--accent)] font-medium">{label}:</span>{" "}
      <span className="text-[var(--foreground)]/80">{value}</span>
    </p>
  );
}
