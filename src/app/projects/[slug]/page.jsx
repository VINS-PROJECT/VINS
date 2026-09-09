"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  X,
  FileText,
  ExternalLink,
  Github,
  Figma,
  Check,
} from "lucide-react";

import { projectsData } from "@/data/projects";

/* =========================================================
   ANIMATION
   ========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   PAGE
   ========================================================= */

export default function ProjectDetail({ params }) {
  const { slug } = use(params);

  const project = projectsData.find(
    (item) => item.slug === slug
  );

  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return notFound();
  }

  const currentIndex = projectsData.findIndex(
    (item) => item.slug === slug
  );

  const nextProject =
    currentIndex >= 0
      ? projectsData[(currentIndex + 1) % projectsData.length]
      : null;

  return (
    <main className="relative overflow-hidden bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-15%] top-[5%] h-[520px] w-[520px] rounded-full bg-[var(--color-brand-soft)] opacity-40 blur-[130px]" />

        <div className="absolute bottom-[20%] left-[-15%] h-[420px] w-[420px] rounded-full bg-[var(--color-surface-alt)] opacity-60 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-8 sm:pt-36 lg:px-8 lg:pb-36 lg:pt-44">
        {/* =====================================================
            BACK TO PROJECTS
            ===================================================== */}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-5 py-2.5 font-[var(--font-body)] text-xs font-medium text-[var(--color-muted)] transition-all duration-300 hover:-translate-x-0.5 hover:border-[var(--color-foreground)] hover:text-[var(--color-foreground)]"
          >
            <ArrowLeft
              size={15}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />

            Back to Projects
          </Link>
        </motion.div>

        {/* =====================================================
            HERO
            ===================================================== */}

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-14"
        >
          {/* Category */}

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--color-brand)]" />

            <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-brand-hover)] sm:text-xs">
              {project.category || "PROJECT"}
            </span>
          </div>

          {/* Title */}

          <h1 className="mt-7 max-w-5xl font-[var(--font-heading)] text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.86] tracking-[-0.08em] text-[var(--color-foreground)]">
            {project.title}
          </h1>

          {/* Description */}

          {project.desc && (
            <p className="mt-8 max-w-2xl font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
              {project.desc}
            </p>
          )}

          {/* Metadata */}

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-5 border-y border-[var(--color-border)] py-6">
            <MetaItem
              label="Year"
              value={project.year}
            />

            <MetaItem
              label="Role"
              value={project.role}
            />

            <MetaItem
              label="Team"
              value={project.team}
            />
          </div>
        </motion.section>

        {/* =====================================================
            HERO IMAGE
            ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-12 overflow-hidden rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface-alt)] sm:mt-16 lg:rounded-[40px]"
        >
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </motion.div>

        {/* =====================================================
            PROJECT INFORMATION
            ===================================================== */}

        <div className="mx-auto max-w-4xl">
          {/* =================================================
              OVERVIEW
              ================================================= */}

          <ContentSection
            number="01"
            title="Overview"
          >
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <SectionLead>
                A closer look at the project, its purpose, and the experience
                behind it.
              </SectionLead>

              <div>
                <p className="font-[var(--font-body)] text-base leading-8 text-[var(--color-muted)]">
                  {project.overview ||
                    project.description ||
                    project.desc ||
                    "This project explores the process of turning an idea into a structured digital experience."}
                </p>
              </div>
            </div>
          </ContentSection>

          {/* =================================================
              CHALLENGE
              ================================================= */}

          {project.challenge && (
            <ContentSection
              number="02"
              title="Challenge"
            >
              <LongText content={project.challenge} />
            </ContentSection>
          )}

          {/* =================================================
              SOLUTION
              ================================================= */}

          {project.solution && (
            <ContentSection
              number="03"
              title="Solution"
            >
              <LongText content={project.solution} />
            </ContentSection>
          )}

          {/* =================================================
              PROCESS
              ================================================= */}

          {project.process && (
            <ContentSection
              number="04"
              title="Process"
            >
              <ProcessBlock process={project.process} />
            </ContentSection>
          )}

          {/* =================================================
              DESIGN / TECHNICAL
              ================================================= */}

          {(project.design ||
            project.technical ||
            project.implementation ||
            project.designTechnical) && (
            <ContentSection
              number="05"
              title="Design / Technical"
            >
              <LongText
                content={
                  project.designTechnical ||
                  project.design ||
                  project.technical ||
                  project.implementation
                }
              />
            </ContentSection>
          )}

          {/* =================================================
              FUNCTIONAL REQUIREMENTS
              ================================================= */}

          {(project.fr ||
            project.functionalRequirements ||
            project.requirements) && (
            <ContentSection
              number="06"
              title="Functional Requirements"
            >
              <RequirementList
                items={
                  project.fr ||
                  project.functionalRequirements ||
                  project.requirements
                }
              />
            </ContentSection>
          )}

          {/* =================================================
              TECH STACK
              ================================================= */}

          {project.tech?.length > 0 && (
            <ContentSection
              number="07"
              title="Tech Stack"
            >
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 font-[var(--font-body)] text-xs font-medium text-[var(--color-muted)] transition-colors duration-300 hover:border-[var(--color-brand)] hover:text-[var(--color-brand-hover)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </ContentSection>
          )}

          {/* =================================================
              OUTCOME
              ================================================= */}

          {project.outcome && (
            <ContentSection
              number="08"
              title="Outcome"
            >
              <LongText content={project.outcome} />
            </ContentSection>
          )}

          {/* =================================================
              LESSON LEARNED
              ================================================= */}

          {(project.lessonLearned ||
            project.lessons ||
            project.learnings) && (
            <ContentSection
              number="09"
              title="Lesson Learned"
            >
              <LongText
                content={
                  project.lessonLearned ||
                  project.lessons ||
                  project.learnings
                }
              />
            </ContentSection>
          )}

          {/* =================================================
              KEY FEATURES
              ================================================= */}

          {project.features?.length > 0 && (
            <ContentSection
              number="10"
              title="Key Features"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-soft)] text-[var(--color-brand-hover)]">
                        <Check
                          size={13}
                          strokeWidth={2}
                        />
                      </span>

                      <span className="font-[var(--font-body)] text-sm leading-6 text-[var(--color-muted)]">
                        {feature}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ContentSection>
          )}

          {/* =================================================
              GALLERY
              ================================================= */}

          {project.gallery?.length > 0 && (
            <ContentSection
              number="11"
              title="Gallery"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {project.gallery.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface-alt)] text-left"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} — Gallery ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

                    <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/20 text-white opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight
                        size={15}
                      />
                    </span>
                  </button>
                ))}
              </div>
            </ContentSection>
          )}

          {/* =================================================
              PROJECT LINKS
              ================================================= */}

          {(project.links?.live ||
            project.links?.github ||
            project.links?.figma ||
            project.links?.pdf) && (
            <ContentSection
              number="12"
              title="Project Links"
            >
              <div className="flex flex-wrap gap-3">
                {project.links?.live && (
                  <ProjectLink
                    href={project.links.live}
                    label="Live Demo"
                    icon={<ExternalLink size={15} />}
                    primary
                  />
                )}

                {project.links?.github && (
                  <ProjectLink
                    href={project.links.github}
                    label="GitHub"
                    icon={<Github size={15} />}
                  />
                )}

                {project.links?.figma && (
                  <ProjectLink
                    href={project.links.figma}
                    label="Figma"
                    icon={<Figma size={15} />}
                  />
                )}

                {project.links?.pdf && (
                  <ProjectLink
                    href={project.links.pdf}
                    label="Case Study PDF"
                    icon={<FileText size={15} />}
                  />
                )}
              </div>
            </ContentSection>
          )}
        </div>

        {/* =====================================================
            NEXT PROJECT
            ===================================================== */}

        {nextProject && projectsData.length > 1 && (
          <section className="mt-28 border-t border-[var(--color-border)] pt-10 sm:mt-36">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted-light)]">
                  NEXT PROJECT
                </span>

                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group mt-4 block"
                >
                  <h2 className="font-[var(--font-heading)] text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-[var(--color-foreground)] transition-colors duration-300 group-hover:text-[var(--color-brand-hover)]">
                    {nextProject.title}
                  </h2>
                </Link>
              </div>

              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-foreground)] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-brand-hover)]"
                aria-label={`View ${nextProject.title}`}
              >
                <ArrowRight
                  size={20}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </section>
        )}
      </div>

      {/* =====================================================
          LIGHTBOX
          ===================================================== */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-5 backdrop-blur-sm sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white/20 sm:right-8 sm:top-8"
              aria-label="Close image"
            >
              <X
                size={19}
              />
            </button>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative max-h-[90vh] max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Project preview"
                width={1600}
                height={1100}
                className="max-h-[88vh] w-auto rounded-2xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

/* =========================================================
   META ITEM
   ========================================================= */

function MetaItem({ label, value }) {
  if (!value) return null;

  return (
    <div className="min-w-[100px]">
      <span className="block font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted-light)]">
        {label}
      </span>

      <span className="mt-1.5 block font-[var(--font-body)] text-sm font-medium text-[var(--color-foreground)]">
        {value}
      </span>
    </div>
  );
}

/* =========================================================
   CONTENT SECTION
   ========================================================= */

function ContentSection({ number, title, children }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={fadeUp}
      className="border-b border-[var(--color-border)] py-16 sm:py-20"
    >
      <div className="grid gap-8 lg:grid-cols-[180px_1fr]">
        {/* Number */}

        <div className="flex items-start gap-3">
          <span className="font-[var(--font-body)] text-xs font-semibold text-[var(--color-brand)]">
            {number}
          </span>

          <span className="mt-1 hidden h-px w-6 bg-[var(--color-border-strong)] lg:block" />
        </div>

        {/* Content */}

        <div>
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.05em] text-[var(--color-foreground)] sm:text-4xl">
            {title}
          </h2>

          <div className="mt-8">
            {children}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* =========================================================
   SECTION LEAD
   ========================================================= */

function SectionLead({ children }) {
  return (
    <p className="font-[var(--font-heading)] text-xl font-medium leading-7 tracking-[-0.03em] text-[var(--color-foreground)] sm:text-2xl sm:leading-8">
      {children}
    </p>
  );
}

/* =========================================================
   LONG TEXT
   ========================================================= */

function LongText({ content }) {
  if (Array.isArray(content)) {
    return (
      <div className="space-y-5">
        {content.map((item, index) => (
          <p
            key={index}
            className="font-[var(--font-body)] text-base leading-8 text-[var(--color-muted)]"
          >
            {item}
          </p>
        ))}
      </div>
    );
  }

  return (
    <p className="max-w-3xl whitespace-pre-line font-[var(--font-body)] text-base leading-8 text-[var(--color-muted)]">
      {content}
    </p>
  );
}

/* =========================================================
   PROCESS
   ========================================================= */

function ProcessBlock({ process }) {
  if (!Array.isArray(process)) {
    return <LongText content={process} />;
  }

  return (
    <div className="space-y-0">
      {process.map((item, index) => {
        const title =
          typeof item === "string"
            ? item
            : item.title || item.name;

        const description =
          typeof item === "string"
            ? null
            : item.description || item.desc;

        return (
          <div
            key={index}
            className="group grid gap-4 border-b border-[var(--color-border)] py-6 first:pt-0 sm:grid-cols-[80px_1fr]"
          >
            <span className="font-[var(--font-body)] text-xs font-semibold text-[var(--color-brand)]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <h3 className="font-[var(--font-heading)] text-xl font-semibold tracking-[-0.03em] text-[var(--color-foreground)]">
                {title}
              </h3>

              {description && (
                <p className="mt-2 font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)]">
                  {description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* =========================================================
   REQUIREMENTS
   ========================================================= */

function RequirementList({ items }) {
  if (!Array.isArray(items)) {
    return <LongText content={items} />;
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-soft)] font-[var(--font-body)] text-[10px] font-semibold text-[var(--color-brand-hover)]">
            {String(index + 1).padStart(2, "0")}
          </span>

          <p className="font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)]">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   PROJECT LINK
   ========================================================= */

function ProjectLink({
  href,
  label,
  icon,
  primary = false,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group
        inline-flex
        items-center
        gap-2
        rounded-full
        px-5
        py-3
        font-[var(--font-body)]
        text-sm
        font-medium
        transition-all
        duration-300

        ${
          primary
            ? "bg-[var(--color-foreground)] text-white hover:-translate-y-0.5 hover:bg-[var(--color-brand-hover)] hover:shadow-lg"
            : "border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] hover:-translate-y-0.5 hover:border-[var(--color-foreground)]"
        }
      `}
    >
      <span>{icon}</span>

      {label}

      <ArrowUpRight
        size={14}
        strokeWidth={1.7}
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}