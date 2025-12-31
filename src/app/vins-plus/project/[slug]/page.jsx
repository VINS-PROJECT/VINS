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
import { projectsData } from "@/data/projects";

/* ================= WAVE HIGHLIGHT ================= */
function WaveHighlight({ children }) {
  return (
    <span className="relative inline-block leading-tight">
      <span
        className="relative z-10 bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--accent) 10%, var(--accent-dark) 90%)",
          WebkitTextFillColor: "transparent",
        }}
      >
        {children}
      </span>

      <svg
        className="absolute left-0 bottom-0 w-full h-[8px]"
        viewBox="0 0 200 20"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 10 Q 25 6 50 10 T 100 10 T 150 10 T 200 10"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={{ pathOffset: [0, 1] }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
        />
      </svg>
    </span>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="relative min-h-screen pt-28 pb-32 bg-[var(--background)] text-[var(--foreground)]">
      {/* BACKDROP */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, var(--accent)/0.18, transparent 55%),
            radial-gradient(circle at 85% 70%, var(--accent-dark)/0.16, transparent 60%)
          `,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold">
            <WaveHighlight>Project Overview</WaveHighlight>
          </h1>

          <p className="opacity-70 mt-3 max-w-3xl">
            Detailed breakdown covering design intent, technical execution,
            and delivered outcomes.
          </p>

          {/* BREADCRUMB */}
          <div className="mt-5 flex items-center gap-2 text-sm font-medium">
            <Crumb href="/">Home</Crumb>
            <ChevronRight className="w-4 opacity-60" />
            <Crumb href="/vins-plus/project">Projects</Crumb>
            <ChevronRight className="w-4 opacity-60" />
            <span className="opacity-70 line-clamp-1">{project.title}</span>
          </div>
        </motion.div>

        {/* BACK BUTTON */}
        <Link
          href="/vins-plus/project"
          className="
            inline-flex items-center gap-2 mb-10
            px-4 py-2 rounded-xl
            backdrop-blur-xl
            bg-white/55 dark:bg-white/5
            border border-white/25 dark:border-white/10
            hover:border-[var(--accent)]/50
            transition
          "
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        {/* HERO CARD */}
        <div className="grid md:grid-cols-2 gap-14 mb-24">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              relative rounded-3xl overflow-hidden
              border border-white/25 dark:border-white/10
              shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            "
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          </motion.div>

          {/* INFO */}
          <div className="flex flex-col justify-center gap-5">
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
                    bg-[var(--accent)]/12
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
          </div>
        </div>

        {/* DETAILS */}
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

        {/* GALLERY */}
        {project.gallery && (
          <GlassSection title="Gallery">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {project.gallery.map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="
                    relative h-48 rounded-xl overflow-hidden
                    border border-white/25 dark:border-white/10
                  "
                >
                  <Image
                    src={src}
                    fill
                    alt="Gallery"
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </GlassSection>
        )}
      </div>
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
      <Image
        src="/icons/figma.svg"
        width={14}
        height={14}
        alt="Figma"
      />
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
      {Object.entries(links).map(([key, href]) =>
        href ? (
          <ActionBtn
            key={key}
            href={href}
            primary={key === "live"}
            icon={icons[key]}
          >
            {labels[key] || "Open Link"}
          </ActionBtn>
        ) : null
      )}
    </div>
  );
}

function ActionBtn({ href, children, icon, primary }) {
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
      {icon} {children}
    </a>
  );
}

function GlassSection({ title, children }) {
  return (
    <section
      className="
        mb-16 p-7 rounded-2xl
        backdrop-blur-xl
        bg-white/55 dark:bg-white/5
        border border-white/25 dark:border-white/10
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
