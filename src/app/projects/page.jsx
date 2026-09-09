"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  BarChart3,
  Code2,
  Palette,
} from "lucide-react";

import { projectsData } from "@/data/projects";

/* =========================================================
   FILTERS
   ========================================================= */

const filters = [
  {
    key: "all",
    label: "All Projects",
    shortLabel: "All",
    icon: BriefcaseBusiness,
  },
  {
    key: "creative",
    label: "Creative",
    shortLabel: "Creative",
    description: "UI/UX · Graphic Design",
    icon: Palette,
  },
  {
    key: "development",
    label: "Development",
    shortLabel: "Development",
    description: "Web · Application",
    icon: Code2,
  },
  {
    key: "data",
    label: "Data Analyst",
    shortLabel: "Data",
    description: "Data · Analytics",
    icon: BarChart3,
  },
];

/* =========================================================
   CATEGORY MATCHING
   ========================================================= */

function matchesCategory(project, filter) {
  if (filter === "all") return true;

  const category = String(project.category || "").toLowerCase();

  if (filter === "creative") {
    return (
      category.includes("ui") ||
      category.includes("ux") ||
      category.includes("design") ||
      category.includes("creative") ||
      category.includes("graphic")
    );
  }

  if (filter === "development") {
    return (
      category.includes("web") ||
      category.includes("development") ||
      category.includes("developer") ||
      category.includes("frontend") ||
      category.includes("backend") ||
      category.includes("software") ||
      category.includes("app")
    );
  }

  if (filter === "data") {
    return (
      category.includes("data") ||
      category.includes("analyst") ||
      category.includes("analytics")
    );
  }

  return false;
}

/* =========================================================
   ANIMATION
   ========================================================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
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

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) =>
      matchesCategory(project, filter)
    );
  }, [filter]);

  return (
    <main className="relative overflow-hidden bg-[var(--color-background)]">
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-15%] top-[8%] h-[500px] w-[500px] rounded-full bg-[var(--color-brand-soft)] opacity-40 blur-[130px]" />

        <div className="absolute bottom-[15%] left-[-15%] h-[400px] w-[400px] rounded-full bg-[var(--color-surface-alt)] opacity-60 blur-[110px]" />
      </div>

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-24 lg:pt-44">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end"
          >
            {/* =================================================
                HEADING
                ================================================= */}

            <motion.div
              variants={itemVariants}
              className="max-w-4xl"
            >
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--color-brand)]" />

                <span className="font-[var(--font-body)] text-[10px] font-semibold tracking-[0.24em] text-[var(--color-muted)] sm:text-xs">
                  SELECTED WORK
                </span>
              </div>

              <h1 className="font-[var(--font-heading)] text-[clamp(4rem,9vw,8.5rem)] font-semibold leading-[0.84] tracking-[-0.08em] text-[var(--color-foreground)]">
                Projects
                <br />
                <span className="text-[var(--color-brand)]">
                  &amp; Ideas.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
                A collection of digital products, creative work, and
                technical projects shaped through design, technology, and
                problem solving.
              </p>
            </motion.div>

            {/* =================================================
                PROJECT COUNT
                ================================================= */}

            <motion.div
              variants={itemVariants}
              className="flex items-end gap-4"
            >
              <div>
                <span className="block font-[var(--font-heading)] text-5xl font-semibold leading-none tracking-[-0.06em] text-[var(--color-foreground)] sm:text-6xl">
                  {projectsData.length}
                </span>

                <span className="mt-2 block font-[var(--font-body)] text-xs text-[var(--color-muted)]">
                  Projects
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PROJECT DIRECTORY
          ===================================================== */}

      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-8 lg:pb-36">
          {/* =================================================
              FILTER HEADER
              ================================================= */}

          <div className="mb-10 border-y border-[var(--color-border)] py-5">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              {/* Label */}

              <div className="flex items-center gap-3">
                <span className="font-[var(--font-body)] text-[10px] font-semibold tracking-[0.2em] text-[var(--color-muted-light)]">
                  EXPLORE WORK
                </span>

                <span className="h-1 w-1 rounded-full bg-[var(--color-brand)]" />

                <span className="font-[var(--font-body)] text-xs text-[var(--color-muted)]">
                  {filteredProjects.length}{" "}
                  {filteredProjects.length === 1
                    ? "project"
                    : "projects"}
                </span>
              </div>

              {/* =================================================
                  FILTERS
                  ================================================= */}

              <div className="flex w-full overflow-x-auto pb-1 lg:w-auto">
                <div className="flex min-w-max items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-1">
                  {filters.map((item) => {
                    const Icon = item.icon;
                    const isActive = filter === item.key;

                    return (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setFilter(item.key)}
                        aria-pressed={isActive}
                        className={`
                          inline-flex items-center gap-2
                          rounded-full
                          px-4 py-2.5
                          font-[var(--font-body)]
                          text-xs
                          font-medium
                          transition-all
                          duration-300
                          sm:px-5
                          sm:text-sm

                          ${
                            isActive
                              ? "bg-[var(--color-foreground)] text-white shadow-sm"
                              : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                          }
                        `}
                      >
                        <Icon
                          size={14}
                          strokeWidth={1.7}
                        />

                        <span className="sm:hidden">
                          {item.shortLabel}
                        </span>

                        <span className="hidden sm:inline">
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              CATEGORY DESCRIPTION
              ================================================= */}

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              transition={{
                duration: 0.3,
              }}
              className="mb-10"
            >
              {filter !== "all" && (
                <div className="flex items-center gap-3">
                  <span className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)]">
                    {filters.find((item) => item.key === filter)?.label}
                  </span>

                  <span className="h-px w-8 bg-[var(--color-border-strong)]" />

                  <span className="font-[var(--font-body)] text-xs text-[var(--color-muted)]">
                    {
                      filters.find(
                        (item) => item.key === filter
                      )?.description
                    }
                  </span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* =================================================
              PROJECT GRID
              ================================================= */}

          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={filter}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="grid gap-6 md:grid-cols-2"
              >
                {filteredProjects.map((project, index) => (
                  <motion.article
                    key={project.slug}
                    variants={itemVariants}
                    className={index === 0 ? "md:col-span-2" : ""}
                  >
                    <ProjectCard
                      project={project}
                      featured={index === 0}
                    />
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <EmptyState />
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   PROJECT CARD
   ========================================================= */

function ProjectCard({ project, featured = false }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block"
    >
      <div
        className={`
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-[var(--color-border)]
          bg-[var(--color-surface)]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:border-[var(--color-border-strong)]
          hover:shadow-[0_24px_70px_rgba(23,23,23,0.07)]
          lg:rounded-[36px]
        `}
      >
        {/* =================================================
            IMAGE
            ================================================= */}

        <div
          className={`
            relative
            overflow-hidden
            bg-[var(--color-surface-alt)]
            ${
              featured
                ? "h-[360px] sm:h-[480px] lg:h-[560px]"
                : "h-[300px] sm:h-[360px]"
            }
          `}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 100vw"
                : "(max-width: 768px) 100vw, 50vw"
            }
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />

          {/* Image Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />

          {/* Number */}

          <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/15 font-[var(--font-body)] text-xs font-medium text-white backdrop-blur-xl sm:left-7 sm:top-7">
            {String(
              projectsData.findIndex(
                (item) => item.slug === project.slug
              ) + 1
            ).padStart(2, "0")}
          </div>

          {/* Open */}

          <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[var(--color-brand)] group-hover:border-[var(--color-brand)] sm:right-7 sm:top-7">
            <ArrowUpRight
              size={17}
              strokeWidth={1.7}
            />
          </div>
        </div>

        {/* =================================================
            CONTENT
            ================================================= */}

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-2xl">
              {/* Category */}

              <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-hover)] sm:text-xs">
                {project.category || "Project"}
              </span>

              {/* Title */}

              <h2
                className={`
                  mt-4
                  font-[var(--font-heading)]
                  font-semibold
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-[var(--color-foreground)]
                  ${
                    featured
                      ? "text-3xl sm:text-4xl lg:text-5xl"
                      : "text-2xl sm:text-3xl"
                  }
                `}
              >
                {project.title}
              </h2>

              {/* Description */}

              {project.desc && (
                <p className="mt-4 max-w-xl font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
                  {project.desc}
                </p>
              )}
            </div>

            {/* Arrow */}

            <div className="hidden shrink-0 sm:flex">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition-all duration-300 group-hover:border-[var(--color-foreground)] group-hover:bg-[var(--color-foreground)] group-hover:text-white">
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                />
              </span>
            </div>
          </div>

          {/* =================================================
              TECH STACK
              ================================================= */}

          {project.tech?.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-2 border-t border-[var(--color-border)] pt-6">
              {project.tech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-[var(--color-background)] px-3.5 py-2 font-[var(--font-body)] text-[10px] font-medium text-[var(--color-muted)] sm:text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

/* =========================================================
   EMPTY STATE
   ========================================================= */

function EmptyState() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="flex min-h-[360px] flex-col items-center justify-center rounded-[30px] border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface)] px-6 text-center lg:rounded-[36px]"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-muted)]">
        <BriefcaseBusiness
          size={22}
          strokeWidth={1.5}
        />
      </div>

      <h2 className="mt-6 font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)]">
        No projects yet.
      </h2>

      <p className="mt-2 max-w-sm font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)]">
        There are currently no projects available in this category.
      </p>

      <button
        type="button"
        onClick={() => window.location.reload()}
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] px-5 py-2.5 font-[var(--font-body)] text-xs font-medium text-[var(--color-foreground)] transition hover:border-[var(--color-foreground)]"
      >
        View All Projects

        <ArrowUpRight
          size={14}
        />
      </button>
    </motion.div>
  );
}