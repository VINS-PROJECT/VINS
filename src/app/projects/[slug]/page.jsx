"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";

// ✅ Dummy project data — nanti bisa diganti dengan data API atau file JSON
const projectsData = [
  {
    slug: "namura-property",
    title: "Namura Property Website",
    year: 2024,
    category: "Frontend",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    desc: `
      Namura Property is a modern real estate platform designed to help users discover and explore properties seamlessly.
      The website integrates 3D previews, advanced search filters, and responsive layouts for a smooth user experience.
      Built using the latest Next.js 15 framework with dynamic rendering and high SEO optimization.
    `,
    features: [
      "Interactive 3D property viewer",
      "Dynamic filter with real-time updates",
      "Fully responsive design for all devices",
      "Integrated dark and light theme",
    ],
    image: "/projects/namura.png",
    gallery: [
      "/projects/namura-1.png",
      "/projects/namura-2.png",
      "/projects/namura-3.png",
    ],
    links: {
      github: "https://github.com/anin/namura-property",
      live: "https://namura-property.vercel.app",
    },
  },
  {
    slug: "maganghub",
    title: "MagangHub Platform",
    year: 2023,
    category: "Fullstack",
    tech: ["React", "Node.js", "MongoDB"],
    desc: `
      MagangHub bridges the gap between students and companies.
      It includes job listings, internship management, and candidate tracking.
      Built using React on the frontend and Node.js on the backend with MongoDB for scalable storage.
    `,
    features: [
      "Company & student dashboards",
      "Smart internship matching algorithm",
      "Authentication & role-based access",
      "Performance analytics dashboard",
    ],
    image: "/projects/maganghub.png",
    gallery: [
      "/projects/maganghub-1.png",
      "/projects/maganghub-2.png",
      "/projects/maganghub-3.png",
    ],
    links: {
      github: "https://github.com/anin/maganghub",
      live: "https://maganghub.vercel.app",
    },
  },
];

export default function ProjectDetail({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-black text-gray-200 pt-28 pb-24 relative overflow-hidden">
      {/* === Ambient Glow === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(226,192,124,0.15),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(209,170,96,0.1),transparent_60%)]"
      />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        {/* === Back Button === */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-[#E2C07C] hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>

        {/* === Header Section === */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full md:w-1/2 h-72 rounded-2xl overflow-hidden border border-[#E2C07C]/30"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1"
          >
            <h1 className="text-4xl font-extrabold text-white mb-3">
              {project.title}
            </h1>
            <p className="text-sm text-gray-400 mb-5">
              {project.category} • {project.year}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1.5 rounded-md bg-[#E2C07C]/10 text-[#E2C07C] border border-[#E2C07C]/30"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-lg border border-[#E2C07C] text-[#E2C07C] hover:bg-[#E2C07C]/10 transition font-semibold text-sm"
              >
                <ExternalLink className="w-4 h-4" /> Visit Site
              </a>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[#E2C07C] text-black hover:brightness-110 transition font-semibold text-sm"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </motion.div>
        </div>

        {/* === Description Section === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-[#E2C07C] mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {project.desc.trim()}
          </p>
        </motion.div>

        {/* === Features === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-[#E2C07C] mb-4">
            Key Features
          </h2>
          <ul className="space-y-2 text-gray-300">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#E2C07C] mt-1">•</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* === Gallery === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <h2 className="text-2xl font-bold text-[#E2C07C] mb-6">Gallery</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {project.gallery.map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative w-full h-56 overflow-hidden rounded-xl border border-[#E2C07C]/20"
              >
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* === Bottom Glow === */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </main>
  );
}
