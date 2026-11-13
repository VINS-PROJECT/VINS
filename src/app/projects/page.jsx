
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  BarChart3,
  Code2,
  Palette,
} from "lucide-react";

import { projectsData } from "@/data/projects";

/* ===========================================================
   FILTERS
   =========================================================== */

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

/* ===========================================================
   CATEGORY MATCHING
   =========================================================== */

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

/* ===========================================================
   PAGE
   =========================================================== */

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) =>
      matchesCategory(project, filter)
    );
  }, [filter]);

  const activeFilter = filters.find((item) => item.key === filter);

  return (
    <main className="relative overflow-hidden bg-[var(--color-background)]">
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -right-[15%]
            top-[8%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[var(--color-brand-soft)]
            opacity-40
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            bottom-[15%]
            -left-[15%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[var(--color-surface-alt)]
            opacity-60
            blur-[110px]
          "
        />
      </div>

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="relative">
        <div
          className="
            mx-auto
            max-w-[1440px]
            px-6
            pb-16
            pt-32
            sm:px-8
            sm:pb-20
            sm:pt-36
            lg:px-16
            lg:pb-24
            lg:pt-44
            xl:px-20
          "
        >
          <div
            className="
              grid
              gap-12
              lg:grid-cols-[1fr_auto]
              lg:items-end
            "
          >
            {/* Heading */}
            <div className="max-w-4xl">
              <div className="mb-7 flex items-center gap-3">
                <span
                  className="
                    h-[3px]
                    w-8
                    rounded-full
                    bg-[var(--color-brand)]
                  "
                />

                <span
                  className="
                    font-[var(--font-body)]
                    text-[11px]
                    font-semibold
                    tracking-[0.2em]
                    text-[var(--color-muted)]
                  "
                >
                  SELECTED WORK
                </span>
              </div>

              <h1
                className="
                  font-[var(--font-heading)]
                  text-[clamp(4rem,9vw,8.5rem)]
                  font-semibold
                  leading-[0.86]
                  tracking-[-0.08em]
                  text-[var(--color-foreground)]
                "
              >
                Projects
                <br />

                <span className="text-[var(--color-brand)]">
                  &amp; Ideas.
                </span>
              </h1>

              <p
                className="
                  mt-8
                  max-w-2xl
                  font-[var(--font-body)]
                  text-sm
                  leading-7
                  text-[var(--color-muted)]
                  sm:text-base
                  sm:leading-8
                "
              >
                A collection of digital products, creative work,
                and technical projects shaped through design,
                technology, and problem solving.
              </p>
            </div>

            {/* Project Count */}
            <div
              className="
                flex
                items-end
                gap-4
                rounded-[28px]
                border
                border-[var(--color-border)]
                bg-[var(--color-surface)]
                px-7
                py-6
                lg:min-w-[190px]
              "
            >
              <div>
                <span
                  className="
                    block
                    font-[var(--font-heading)]
                    text-5xl
                    font-semibold
                    leading-none
                    tracking-[-0.06em]
                    text-[var(--color-brand)]
                    sm:text-6xl
                  "
                >
                  {projectsData.length.toString().padStart(2, "0")}
                </span>

                <span
                  className="
                    mt-3
                    block
                    font-[var(--font-body)]
                    text-xs
                    font-medium
                    text-[var(--color-muted)]
                  "
                >
                  Total Projects
                </span>
              </div>

              <div
                className="
                  mb-1
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[var(--color-brand-soft)]
                  text-[var(--color-brand)]
                "
              >
                <BriefcaseBusiness size={18} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT DIRECTORY
          ===================================================== */}

      <section className="relative">
        <div
          className="
            mx-auto
            max-w-[1440px]
            px-6
            pb-24
            sm:px-8
            lg:px-16
            lg:pb-36
            xl:px-20
          "
        >
          {/* FILTER HEADER */}
          <div
            className="
              mb-10
              flex
              flex-col
              gap-5
              rounded-[28px]
              border
              border-[var(--color-border)]
              bg-[var(--color-surface)]
              p-5
              sm:p-6
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* Filter Information */}
            <div>
              <span
                className="
                  font-[var(--font-body)]
                  text-[10px]
                  font-semibold
                  tracking-[0.2em]
                  text-[var(--color-muted-light)]
                "
              >
                EXPLORE WORK
              </span>

              <div className="mt-2 flex items-center gap-2">
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[var(--color-brand)]
                  "
                />

                <span
                  className="
                    font-[var(--font-body)]
                    text-sm
                    font-medium
                    text-[var(--color-foreground)]
                  "
                >
                  {filteredProjects.length}{" "}
                  {filteredProjects.length === 1
                    ? "project"
                    : "projects"}
                </span>
              </div>
            </div>

            {/* Filters */}
            <div className="w-full overflow-x-auto pb-1 lg:w-auto">
              <div
                className="
                  flex
                  min-w-max
                  items-center
                  gap-1.5
                "
              >
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
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        px-4
                        py-3
                        font-[var(--font-body)]
                        text-xs
                        font-semibold
                        transition-colors
                        duration-200
                        sm:px-5
                        sm:text-sm
                        active:scale-95
                        ${
                          isActive
                            ? `
                                bg-[var(--color-secondary)]
                                text-white
                              `
                            : `
                                bg-transparent
                                text-[var(--color-muted)]
                                hover:bg-[var(--color-brand-soft)]
                                hover:text-[var(--color-brand)]
                              `
                        }
                      `}
                    >
                      <Icon size={15} strokeWidth={1.8} />

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

          {/* CATEGORY DESCRIPTION */}
          {filter !== "all" && (
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <h2
                className="
                  font-[var(--font-heading)]
                  text-2xl
                  font-semibold
                  tracking-[-0.04em]
                  text-[var(--color-foreground)]
                "
              >
                {activeFilter?.label}
              </h2>

              <span
                className="
                  h-px
                  w-8
                  bg-[var(--color-border-strong)]
                "
              />

              <p
                className="
                  font-[var(--font-body)]
                  text-xs
                  text-[var(--color-muted)]
                "
              >
                {activeFilter?.description}
              </p>
            </div>
          )}

          {/* PROJECT GRID */}
          {filteredProjects.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.slug}
                  className={index === 0 ? "md:col-span-2" : ""}
                >
                  <ProjectCard
                    project={project}
                    index={projectsData.findIndex(
                      (item) => item.slug === project.slug
                    )}
                    featured={index === 0}
                  />
                </div>
              ))}
            </div>
          ) : (
            <EmptyState onReset={() => setFilter("all")} />
          )}
        </div>
      </section>
    </main>
  );
}

/* ===========================================================
   PROJECT CARD
   =========================================================== */

function ProjectCard({ project, index, featured = false }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block"
    >
      <article
        className="
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-[var(--color-border)]
          bg-[var(--color-surface)]
          transition-colors
          duration-300
          hover:border-[var(--color-brand)]
          lg:rounded-[36px]
        "
      >
        {/* IMAGE */}
        <div
          className={`
            relative
            overflow-hidden
            bg-[var(--color-surface-alt)]
            ${
              featured
                ? "h-[360px] sm:h-[480px] lg:h-[560px]"
                : "h-[280px] sm:h-[360px]"
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
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.035]
            "
          />

          {/* Image Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/30
              via-transparent
              to-black/5
            "
          />

          {/* Project Number */}
          <div
            className="
              absolute
              left-5
              top-5
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/40
              bg-white/15
              font-[var(--font-body)]
              text-xs
              font-semibold
              text-white
              backdrop-blur-xl
              sm:left-7
              sm:top-7
            "
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Open Icon */}
          <div
            className="
              absolute
              right-5
              top-5
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/40
              bg-white/15
              text-white
              backdrop-blur-xl
              transition-colors
              duration-200
              group-hover:border-[var(--color-brand)]
              group-hover:bg-[var(--color-brand)]
              sm:right-7
              sm:top-7
            "
          >
            <ArrowUpRight size={18} strokeWidth={1.8} />
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            {/* Project Information */}
            <div className="max-w-2xl">
              <span
                className="
                  font-[var(--font-body)]
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[var(--color-brand)]
                  sm:text-xs
                "
              >
                {project.category || "Project"}
              </span>

              <h2
                className={`
                  mt-4
                  font-[var(--font-heading)]
                  font-semibold
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-[var(--color-foreground)]
                  transition-colors
                  duration-200
                  group-hover:text-[var(--color-brand)]
                  ${
                    featured
                      ? "text-3xl sm:text-4xl lg:text-5xl"
                      : "text-2xl sm:text-3xl"
                  }
                `}
              >
                {project.title}
              </h2>
            </div>

            {/* Arrow */}
            <div className="hidden shrink-0 sm:flex">
              <span
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[var(--color-border)]
                  text-[var(--color-muted)]
                  transition-colors
                  duration-200
                  group-hover:border-[var(--color-secondary)]
                  group-hover:bg-[var(--color-secondary)]
                  group-hover:text-white
                "
              >
                <ArrowUpRight size={18} strokeWidth={1.8} />
              </span>
            </div>
          </div>

          {/* TECH STACK */}
          {project.tech?.length > 0 && (
            <div
              className="
                mt-7
                flex
                flex-wrap
                gap-2
                border-t
                border-[var(--color-border)]
                pt-6
              "
            >
              {project.tech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-[var(--color-border)]
                    bg-[var(--color-background)]
                    px-3.5
                    py-2
                    font-[var(--font-body)]
                    text-[10px]
                    font-medium
                    text-[var(--color-muted)]
                    sm:text-xs
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}

/* ===========================================================
   EMPTY STATE
   =========================================================== */

function EmptyState({ onReset }) {
  return (
    <div
      className="
        flex
        min-h-[360px]
        flex-col
        items-center
        justify-center
        rounded-[32px]
        border
        border-dashed
        border-[var(--color-border-strong)]
        bg-[var(--color-surface)]
        px-6
        text-center
        lg:rounded-[36px]
      "
    >
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-[22px]
          bg-[var(--color-brand-soft)]
          text-[var(--color-brand)]
        "
      >
        <BriefcaseBusiness size={25} strokeWidth={1.7} />
      </div>

      <h2
        className="
          mt-6
          font-[var(--font-heading)]
          text-2xl
          font-semibold
          tracking-[-0.04em]
          text-[var(--color-foreground)]
        "
      >
        No projects yet.
      </h2>

      <p
        className="
          mt-2
          max-w-sm
          font-[var(--font-body)]
          text-sm
          leading-7
          text-[var(--color-muted)]
        "
      >
        There are currently no projects available in this category.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="
          mt-7
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-[var(--color-secondary)]
          px-5
          py-3
          font-[var(--font-body)]
          text-xs
          font-semibold
          text-white
          transition-colors
          duration-200
          hover:bg-[var(--color-brand)]
          active:scale-95
        "
      >
        View All Projects
        <ArrowUpRight size={15} />
      </button>
    </div>
  );
}
