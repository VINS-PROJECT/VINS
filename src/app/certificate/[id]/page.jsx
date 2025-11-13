"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

// PDF viewer
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function CertificateDetail() {
  const { id } = useParams();
  const [numPages, setNumPages] = useState(null);

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
      pdf: "/File/BaparekrafTraining.pdf",
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
  ];

  const cert = certificates.find((c) => c.id === Number(id));

  if (!cert)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400 text-xl">
        Certificate not found.
      </div>
    );

  return (
    <main className="min-h-screen bg-black text-gray-200 pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6">

        {/* Back */}
        <Link href="/certificate" className="inline-flex items-center gap-2 text-[#E2C07C] mb-8">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        {/* Header */}
        <div className="flex items-center gap-5 mb-8">
          <div className="w-16 h-16 rounded-xl overflow-hidden border border-[#E2C07C]/40 bg-white/10">
            <Image src={cert.issuerLogo} alt="logo" width={64} height={64} />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{cert.title}</h1>
            <p className="text-[#E2C07C] font-medium">
              {cert.issuer} • {cert.year}
            </p>
          </div>
        </div>

        {/* Identity Section */}
        <div className="mb-8 bg-white/5 border border-[#E2C07C]/20 rounded-xl p-5">
          <h2 className="text-lg font-semibold text-[#E2C07C] mb-3">Certificate Details</h2>

          <div className="grid grid-cols-1 gap-3 text-gray-300 text-sm">
            <p><span className="text-[#E2C07C] font-medium">Issued Date:</span> {cert.issuedDate}</p>
            <p><span className="text-[#E2C07C] font-medium">Publisher:</span> {cert.issuer}</p>
            <p><span className="text-[#E2C07C] font-medium">Category:</span> {cert.category}</p>
            <p><span className="text-[#E2C07C] font-medium">Duration:</span> {cert.duration}</p>
            <p><span className="text-[#E2C07C] font-medium">Certificate ID:</span> {cert.certificateId}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-10">{cert.desc}</p>

        {/* PDF Preview */}
        <div className="w-full border border-[#E2C07C]/30 rounded-xl bg-white p-4 mb-10">
          <Document file={cert.pdf} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
            {Array.from({ length: numPages }, (_, i) => (
              <Page
                key={`page_${i + 1}`}
                pageNumber={i + 1}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                width={800}
              />
            ))}
          </Document>
        </div>

      </div>
    </main>
  );
}
