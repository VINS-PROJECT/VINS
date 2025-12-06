"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Github, ExternalLink, Check } from "lucide-react";
import { notFound, useParams } from "next/navigation";
import { projectsData } from "@/data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className="
      min-h-screen pt-28 pb-32 relative overflow-hidden
      bg-[var(--background)] text-[var(--foreground)]
      transition-colors duration-500
    ">
      {/* Accent Glow BG */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
          radial-gradient(circle at 20% 30%, var(--accent)/22 0%, transparent 55%),
          radial-gradient(circle at 85% 70%, var(--accent-dark)/18 0%, transparent 60%)
        `,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 z-10">

        {/* Top Title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight
            bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--accent), var(--accent-dark))",
            }}
          >
            Project Overview
          </h1>

          <p className="opacity-75 mt-3 max-w-3xl">
            Detailed breakdown including tech stack, design execution, and development insights.
          </p>

          {/* BREADCRUMB */}
          <div className="mt-5 flex items-center gap-2 text-sm font-medium">
            <Crumb href="/">Home</Crumb>
            <ChevronRight className="w-4 opacity-60" />

            <Crumb href="/vins-plus/project">Projects</Crumb>
            <ChevronRight className="w-4 opacity-60" />

            <span className="opacity-75 line-clamp-1">
              {project.title}
            </span>
          </div>
        </motion.div>

        {/* Back Button */}
        <Link
          href="/vins-plus/project"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg
          bg-[var(--accent)]/10 text-[var(--accent)]
          hover:bg-[var(--accent)] hover:text-black transition"
        >
          <ArrowLeft size={16} /> Back
        </Link>

        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row items-start gap-12 mb-20">

          {/* Cover */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              relative w-full md:w-[48%] rounded-2xl overflow-hidden
              border border-[var(--accent)]/60 shadow-[0_0_30px_-6px_var(--accent)]
            "
          >
            <div className="relative w-full aspect-[16/10]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />
          </motion.div>

          {/* Info */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold">{project.title}</h2>

            <p className="text-lg font-medium text-[var(--accent)]">
              {project.category} • {project.year}
            </p>

            {/* Tech Badge */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i}
                  className="px-3 py-1 text-xs font-medium rounded-lg
                  bg-[var(--accent)]/12 border border-[var(--accent)]/35
                  text-[var(--accent)]"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              {project.links.live && (
                <ActionBtn href={project.links.live} primary icon={<ExternalLink size={16} />}>
                  Visit Website
                </ActionBtn>
              )}

              {project.links.github && (
                <ActionBtn href={project.links.github} icon={<Github size={16} />}>
                  GitHub Repo
                </ActionBtn>
              )}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <GlassSection title="Project Details">
          <Detail label="Category" value={project.category} />
          <Detail label="Year" value={project.year} />
          <Detail label="Tech Stack" value={project.tech.join(", ")} />
          <Detail label="Status" value={project.status || "Completed"} />
        </GlassSection>

        {/* DESCRIPTION */}
        {project.desc && (
          <GlassSection title="Description">
            <p className="leading-relaxed opacity-90 whitespace-pre-line">
              {project.desc}
            </p>
          </GlassSection>
        )}

        {/* FEATURES */}
        {project.features && project.features.length > 0 && (
          <GlassSection title="Key Features">
            <ul className="space-y-2">
              {project.features.map((f, i) => (
                <li key={i} className="flex gap-2 opacity-90 text-base">
                  <Check className="text-[var(--accent)] mt-1 w-4 h-4" />
                  {f}
                </li>
              ))}
            </ul>
          </GlassSection>
        )}

        {/* GALLERY */}
        {project.gallery && project.gallery.length > 0 && (
          <GlassSection title="Gallery">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {project.gallery.map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="relative h-48 overflow-hidden rounded-xl border border-[var(--accent)]/30"
                >
                  <Image fill src={src} alt={`Gallery ${i}`} className="object-cover" />
                </motion.div>
              ))}
            </div>
          </GlassSection>
        )}

      </div>
    </main>
  );
}

/* SUB COMPONENTS */

function Crumb({ href, children }) {
  return (
    <Link href={href} className="text-[var(--accent)] hover:underline transition">
      {children}
    </Link>
  );
}

function Detail({ label, value }) {
  return (
    <p className="text-sm md:text-base opacity-85">
      <span className="font-semibold text-[var(--accent)]">{label}: </span>
      {value}
    </p>
  );
}

function ActionBtn({ href, children, primary, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold
        transition-all
        ${primary
          ? "bg-[var(--accent)] text-black hover:brightness-95"
          : "border border-[var(--accent)]/60 text-[var(--accent)] hover:bg-[var(--accent)]/10"}
      `}
    >
      {icon} {children}
    </a>
  );
}

function GlassSection({ title, children }) {
  return (
    <section className="
      mb-16 p-7 rounded-2xl border border-[var(--border)]
      backdrop-blur-xl bg-[var(--background)]/50
      shadow-lg
    ">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-[var(--accent)]">{title}</h2>
      {children}
    </section>
  );
}
