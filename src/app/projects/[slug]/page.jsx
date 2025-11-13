"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";

export default function ProjectDetail({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-black text-gray-200 pt-28 pb-24 relative overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(226,192,124,0.15),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(209,170,96,0.1),transparent_60%)]"
      />

      <div className="relative max-w-6xl mx-auto px-6 z-10">

        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-[#E2C07C] hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>

        {/* Top Content */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-full md:w-1/2 h-72 rounded-2xl overflow-hidden border border-[#E2C07C]/30 shadow-[0_0_20px_rgba(226,192,124,0.2)]"
          >
            <Image src={project.image} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </motion.div>

          <div className="flex-1">
            <h1 className="text-4xl font-extrabold mb-3">{project.title}</h1>
            <p className="text-sm text-gray-400 mb-5">{project.category} • {project.year}</p>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs px-3 py-1.5 rounded-md bg-[#E2C07C]/10 text-[#E2C07C] border border-[#E2C07C]/30">
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={project.links.live}
                target="_blank"
                className="flex items-center gap-2 px-5 py-2 rounded-lg border border-[#E2C07C] text-[#E2C07C]"
              >
                <ExternalLink className="w-4 h-4" /> Visit Site
              </a>

              <a
                href={project.links.github}
                target="_blank"
                className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[#E2C07C] text-black"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </div>

        </div>

        {/* Overview */}
        <h2 className="text-2xl font-bold text-[#E2C07C] mb-4">Overview</h2>
        <p className="text-gray-300 leading-relaxed whitespace-pre-line mb-12">
          {project.desc}
        </p>

        {/* Features */}
        <h2 className="text-2xl font-bold text-[#E2C07C] mb-4">Key Features</h2>
        <ul className="space-y-2 text-gray-300 mb-12">
          {project.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-[#E2C07C] mt-1">•</span> {f}
            </li>
          ))}
        </ul>

        {/* Gallery */}
        <h2 className="text-2xl font-bold text-[#E2C07C] mb-6">Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {project.gallery.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative w-full h-56 rounded-xl overflow-hidden border border-[#E2C07C]/20"
            >
              <Image src={src} alt={`Gallery ${i}`} fill className="object-cover" />
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
