"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronRight,
  Github,
  ExternalLink,
  Check,
} from "lucide-react";
import { notFound, useParams } from "next/navigation";
import { useMemo } from "react";
import { projectsData } from "@/data/projects";

/* ================= MOTION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = useMemo(
    () => projectsData.find((p) => p.slug === slug),
    [slug]
  );

  if (!project) return notFound();

  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">

      {/* ================= HEADER (VINS+ STYLE) ================= */}
      <section className="relative overflow-hidden">
        {/* GOLD DIAGONAL */}
        <div
          aria-hidden
          className="
            absolute inset-0
            bg-gradient-to-br
            from-[var(--accent)]/25
            via-[var(--accent)]/10
            to-transparent
            -skew-y-6
            origin-top-left
          "
        />

        {/* FADE */}
        <div
          aria-hidden
          className="
            absolute bottom-0 left-0 w-full h-28
            bg-gradient-to-t from-[var(--background)] to-transparent
          "
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-6xl mx-auto px-6 pt-32 pb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Project Overview
          </h1>

          <p className="opacity-70 mt-3 max-w-3xl">
            Design intent, technical execution, and delivered outcomes.
          </p>

          {/* BREADCRUMB */}
          <nav className="mt-5 flex items-center gap-2 text-sm font-medium">
            <Crumb href="/">Home</Crumb>
            <ChevronRight className="w-4 opacity-50" />
            <Crumb href="/vins-plus/project">Projects</Crumb>
            <ChevronRight className="w-4 opacity-50" />
            <span className="opacity-60 truncate max-w-[260px]">
              {project.title}
            </span>
          </nav>
        </motion.div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="relative max-w-6xl mx-auto px-6 pb-32">

        {/* BACK BUTTON */}
        <Link
          href="/vins-plus/project"
          className="
            inline-flex items-center gap-2 mb-12
            px-4 py-2 rounded-xl
            bg-[var(--card)]
            border border-[var(--border)]
            hover:border-[var(--accent)]/50
            transition
          "
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        {/* ================= HERO ================= */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-14 mb-24"
        >
          {/* IMAGE */}
          <motion.div
            variants={fadeUp}
            className="
              relative rounded-3xl overflow-hidden
              border border-[var(--border)]
              shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            "
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>

          {/* INFO */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col justify-center gap-5"
          >
            <h2 className="text-3xl font-bold">{project.title}</h2>

            <p className="text-lg font-medium text-[var(--accent)]">
              {project.category} • {project.year}
            </p>

            {/* TECH */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="
                    px-3 py-1 text-xs rounded-lg
                    bg-[var(--accent)]/15
                    border border-[var(--accent)]/30
                    text-[var(--accent)]
                  "
                >
                  {t}
                </span>
              ))}
            </div>

            {/* ACTIONS */}
            <LinksGroup links={project.links} />
          </motion.div>
        </motion.section>

        {/* ================= DETAILS ================= */}
        <GlassSection title="Project Details">
          <Detail label="Category" value={project.category} />
          <Detail label="Year" value={project.year} />
          <Detail label="Tech Stack" value={project.tech.join(", ")} />
          <Detail label="Status" value={project.status || "Completed"} />
        </GlassSection>

        {project.desc && (
          <GlassSection title="Description">
            <p className="leading-relaxed opacity-90 whitespace-pre-line">
              {project.desc}
            </p>
          </GlassSection>
        )}

        {project.features && (
          <GlassSection title="Key Features">
            <ul className="space-y-2">
              {project.features.map((f, i) => (
                <li key={i} className="flex gap-2 text-sm opacity-90">
                  <Check className="w-4 h-4 mt-1 text-[var(--accent)]" />
                  {f}
                </li>
              ))}
            </ul>
          </GlassSection>
        )}

        {project.gallery && (
          <GlassSection title="Gallery">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {project.gallery.map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04 }}
                  className="
                    relative h-48 rounded-xl overflow-hidden
                    border border-[var(--border)]
                  "
                >
                  <Image src={src} fill alt="Gallery" className="object-cover" />
                </motion.div>
              ))}
            </div>
          </GlassSection>
        )}
      </section>
    </main>
  );
}

/* ================= SMALL COMPONENTS ================= */

function Crumb({ href, children }) {
  return (
    <Link href={href} className="text-[var(--accent)] hover:underline">
      {children}
    </Link>
  );
}

function Detail({ label, value }) {
  return (
    <p className="text-sm opacity-85">
      <span className="font-semibold text-[var(--accent)]">
        {label}:{" "}
      </span>
      {value}
    </p>
  );
}

function LinksGroup({ links = {} }) {
  const icons = {
    live: <ExternalLink size={16} />,
    github: <Github size={16} />,
    figma: (
      <Image src="/icons/figma.svg" width={14} height={14} alt="Figma" />
    ),
    case: <Check size={16} />,
  };

  const labels = {
    live: "Visit Website",
    github: "GitHub Repository",
    figma: "Figma Design",
    case: "Case Study",
  };

  return (
    <div className="flex flex-wrap gap-3 mt-4">
      {Object.entries(links).map(
        ([key, href]) =>
          href && (
            <ActionBtn
              key={key}
              href={href}
              primary={key === "live"}
              icon={icons[key]}
              label={labels[key]}
            />
          )
      )}
    </div>
  );
}

function ActionBtn({ href, icon, label, primary }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center gap-2
        px-6 py-2.5 rounded-xl font-semibold
        transition
        ${
          primary
            ? "bg-[var(--accent)] text-black hover:brightness-95"
            : "border border-[var(--accent)]/50 text-[var(--accent)] hover:bg-[var(--accent)]/10"
        }
      `}
    >
      {icon} {label}
    </a>
  );
}

function GlassSection({ title, children }) {
  return (
    <section
      className="
        mb-16 p-7 rounded-2xl
        bg-[var(--card)]
        border border-[var(--border)]
        shadow-[0_14px_40px_rgba(0,0,0,0.18)]
      "
    >
      <h2 className="text-xl font-bold mb-4 text-[var(--accent)]">
        {title}
      </h2>
      {children}
    </section>
  );
}
