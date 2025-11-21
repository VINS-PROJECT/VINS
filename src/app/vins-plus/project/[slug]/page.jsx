"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { projectsData } from "@/data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) return notFound();

  const GOLD = "var(--accent)";
  const FG = "var(--foreground)";
  const BG = "var(--background)";
  const CARD = "var(--card)";
  const BORDER = "var(--border)";

  return (
    <main
      className="
        min-h-screen 
        pt-28 pb-32 relative overflow-hidden
        bg-[var(--background)] text-[var(--foreground)]
        transition-colors
      "
    >
      {/* Gold Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, ${GOLD}22, transparent 60%),
            radial-gradient(circle at 80% 70%, ${GOLD}15, transparent 65%)
          `,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <h1
            className="
              text-4xl md:text-5xl font-extrabold
              bg-clip-text text-transparent
            "
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--accent), var(--accent-dark))",
            }}
          >
            Project Overview
          </h1>

          <p className="opacity-70 mt-3 max-w-3xl leading-relaxed">
            Explore detailed insights, features, and visual documentation for this project.
          </p>

          {/* Breadcrumb */}
          <div className="mt-5 flex items-center gap-2 text-sm font-medium">
            <Link href="/" className="text-[var(--accent)] hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-[var(--accent)]/60" />

            <Link href="/vins-plus/project" className="text-[var(--accent)] hover:underline">
              Projects
            </Link>

            <ChevronRight className="w-4 h-4 text-[var(--accent)]/60" />

            <span className="opacity-80">
              {project.title.length > 40
                ? project.title.slice(0, 40) + "..."
                : project.title}
            </span>
          </div>
        </motion.div>

        {/* BACK BUTTON */}
        <Link
          href="/vins-plus/project"
          className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--foreground)] transition mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>

        {/* PROJECT HEADER */}
        <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
          {/* Cover Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              relative w-full md:w-1/2 h-80 rounded-2xl overflow-hidden
              border shadow-lg
            "
            style={{
              borderColor: "var(--accent)",
              borderWidth: "1px",
              boxShadow: "0 0 25px -4px var(--accent)",
            }}
          >
            <Image src={project.image} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          {/* Metadata */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
              {project.title}
            </h1>

            <p className="text-[var(--accent)] text-lg font-medium mb-6">
              {project.category} • {project.year}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="
                    text-xs px-3 py-1.5 rounded-md
                    bg-[var(--accent)]/10
                    border border-[var(--accent)]/40
                    text-[var(--accent)]
                  "
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  className="
                    flex items-center gap-2 px-6 py-2.5 rounded-lg 
                    border border-[var(--accent)] text-[var(--accent)]
                    hover:bg-[var(--accent)]/10 transition
                  "
                >
                  <ExternalLink className="w-4 h-4" /> Visit Site
                </a>
              )}

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  className="
                    flex items-center gap-2 px-6 py-2.5 rounded-lg 
                    bg-[var(--accent)] text-black font-semibold
                    hover:brightness-95 transition
                  "
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        {/* DETAILS */}
        <section
          className="
            mb-16 rounded-xl p-6 md:p-8 shadow-lg
            bg-[var(--card)] border border-[var(--border)]
          "
        >
          <h2 className="text-2xl font-semibold text-[var(--accent)] mb-4">
            Project Details
          </h2>

          <div className="grid md:grid-cols-2 gap-y-3 gap-x-12 text-[var(--foreground)]/80 text-[15px]">
            <Detail label="Category" value={project.category} />
            <Detail label="Year" value={project.year} />
            <Detail label="Tech Stack" value={project.tech.join(", ")} />
            <Detail label="Status" value={project.status || "Completed"} />
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[var(--accent)] mb-4">Description</h2>
          <p className="text-[var(--foreground)]/85 leading-relaxed text-lg whitespace-pre-line">
            {project.desc}
          </p>
        </section>

        {/* FEATURES */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-[var(--accent)] mb-4">Key Features</h2>
          <ul className="space-y-2 text-[var(--foreground)]/85 text-lg">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">•</span>
                {f}
              </li>
            ))}
          </ul>
        </section>

        {/* GALLERY */}
        <section>
          <h2 className="text-2xl font-semibold text-[var(--accent)] mb-6">Gallery</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {project.gallery.map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="
                  relative w-full h-56 rounded-xl overflow-hidden
                  border border-[var(--border)]
                  shadow-md
                "
              >
                <Image src={src} alt={`Gallery ${i}`} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function Detail({ label, value }) {
  return (
    <p className="text-[var(--foreground)]/85">
      <span className="text-[var(--accent)] font-medium">{label}:</span> {value}
    </p>
  );
}
