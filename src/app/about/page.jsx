"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Briefcase,
  Check,
} from "lucide-react";

import { certificates } from "@/data/certificates";

/* =========================================================
   ANIMATION
   ========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
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
   JOURNEY
   ========================================================= */

const journey = [
  {
    number: "01",
    title: "Explore",
    description:
      "Exploring design, technology, and creative problem solving through different digital projects and experiences.",
  },
  {
    number: "02",
    title: "Learn",
    description:
      "Continuously learning through academic experience, projects, experimentation, and professional development.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Turning ideas into interfaces, websites, and digital solutions by combining design thinking with technology.",
  },
  {
    number: "04",
    title: "Create Impact",
    description:
      "Focusing on creating digital experiences that are useful, meaningful, and thoughtfully crafted.",
  },
];

/* =========================================================
   EXPERIENCE
   ========================================================= */

const experiences = [
  {
    period: "NOW",
    title: "Digital Creator",
    description:
      "Exploring the intersection of UI/UX design, frontend development, and creative technology through personal and digital projects.",
    tags: ["UI/UX", "Development", "Creative Technology"],
  },
  {
    period: "ACADEMIC",
    title: "Informatics Engineering",
    description:
      "Building a foundation in technology, software development, problem solving, and digital product creation.",
    tags: ["Technology", "Programming", "Problem Solving"],
  },
];

/* =========================================================
   SKILLS
   ========================================================= */

const skills = [
  "UI/UX Design",
  "Product Design",
  "React",
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "Node.js",
  "MySQL",
  "Git",
  "Figma",
  "Photoshop",
];

/* =========================================================
   CERTIFICATE CATEGORIES
   ========================================================= */

const certificateCategories = [
  "all",
  "Web Development",
  "Back-End Development",
  "UI/UX",
  "Project Management",
  "Artificial Intelligence",
];

/* =========================================================
   PAGE
   ========================================================= */

export default function AboutPage() {
  const [filter, setFilter] = useState("all");

  const filteredCertificates =
    filter === "all"
      ? certificates
      : certificates.filter(
          (item) => item.category === filter
        );

  return (
    <main className="relative overflow-hidden bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-[var(--color-brand-soft)] opacity-40 blur-[130px]" />

        <div className="absolute left-[-15%] top-[35%] h-[420px] w-[420px] rounded-full bg-[var(--color-surface-alt)] opacity-60 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 sm:px-8 sm:pt-36 lg:px-8 lg:pb-36 lg:pt-44">

        {/* =====================================================
            01 — PROFILE
            ===================================================== */}

        <section id="profile">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
          >
            {/* TEXT */}

            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--color-brand)]" />

                <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)] sm:text-xs">
                  PROFILE
                </span>
              </div>

              <h1 className="max-w-5xl font-[var(--font-heading)] text-[clamp(4rem,9vw,8rem)] font-semibold leading-[0.84] tracking-[-0.08em] text-[var(--color-foreground)]">
                Kevin
                <br />

                <span className="text-[var(--color-brand)]">
                  Simorangkir.
                </span>
              </h1>

              <p className="mt-9 max-w-2xl font-[var(--font-body)] text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                I'm an Informatics Engineering graduate passionate about
                creating meaningful digital experiences through UI/UX design,
                frontend engineering, and creative technology.
              </p>

              <p className="mt-5 max-w-2xl font-[var(--font-body)] text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                Combining creativity, product thinking, and technology to
                transform ideas into scalable digital solutions.
              </p>

              {/* CTA */}

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-foreground)] px-6 py-3.5 font-[var(--font-body)] text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-hover)] hover:shadow-lg"
                >
                  Let's Talk

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <a
                  href="https://drive.google.com/uc?export=download&id=1twRdA1e9g_7DthwC3mh_rf2PjKWxxPDY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-6 py-3.5 font-[var(--font-body)] text-sm font-medium text-[var(--color-foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-foreground)]"
                >
                  Resume

                  <Download
                    size={15}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </a>
              </div>
            </div>

            {/* IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                x: 35,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[var(--color-surface-alt)] lg:rounded-[40px]">
                <Image
                  src="/profile.jpg"
                  alt="Kevin Simorangkir"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/25 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <div className="rounded-2xl border border-white/30 bg-white/75 px-5 py-4 backdrop-blur-xl">
                    <p className="font-[var(--font-body)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      Digital Experience
                    </p>

                    <p className="mt-1 font-[var(--font-heading)] text-xl font-semibold tracking-[-0.04em]">
                      VDE 2K27
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* =====================================================
            DIVIDER
            ===================================================== */}

        <SectionDivider />

        {/* =====================================================
            02 — JOURNEY
            ===================================================== */}

        <section id="journey">
          <SectionHeader
            number="02"
            eyebrow="JOURNEY"
            title={
              <>
                The path behind
                <br />
                <span>the work.</span>
              </>
            }
            description="A continuous process of exploring, learning, building, and improving."
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-[30px] border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-4 lg:rounded-[36px]">
            {journey.map((item, index) => (
              <motion.article
                key={item.number}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                variants={fadeUp}
                transition={{
                  delay: index * 0.08,
                }}
                className="group bg-[var(--color-background)] p-7 transition-colors duration-300 hover:bg-[var(--color-surface)] sm:p-8 lg:min-h-[300px]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-[var(--font-body)] text-xs font-semibold text-[var(--color-brand)]">
                    {item.number}
                  </span>

                  <ArrowDownRight
                    size={17}
                    strokeWidth={1.5}
                    className="text-[var(--color-border-strong)] transition-all duration-300 group-hover:translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--color-brand)]"
                  />
                </div>

                <div className="mt-24">
                  <h3 className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* =====================================================
            03 — EXPERIENCE
            ===================================================== */}

        <section id="experience">
          <SectionHeader
            number="03"
            eyebrow="EXPERIENCE"
            title={
              <>
                Where ideas meet
                <br />
                <span>experience.</span>
              </>
            }
            description="Selected experiences that shaped the way I design, build, and solve problems."
          />

          <div className="mt-14">
            {experiences.map((item, index) => (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                variants={fadeUp}
                transition={{
                  delay: index * 0.08,
                }}
                className="group grid gap-6 border-t border-[var(--color-border)] py-8 last:border-b sm:grid-cols-[150px_1fr] lg:grid-cols-[180px_1fr_280px]"
              >
                {/* Period */}

                <div>
                  <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-hover)]">
                    {item.period}
                  </span>
                </div>

                {/* Main */}

                <div>
                  <h3 className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-2xl font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}

                <div className="flex flex-wrap content-start gap-2 lg:justify-end">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="h-fit rounded-full bg-[var(--color-surface-alt)] px-3.5 py-2 font-[var(--font-body)] text-[10px] font-medium text-[var(--color-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* =====================================================
            04 — SKILLS
            ===================================================== */}

        <section id="skills">
          <SectionHeader
            number="04"
            eyebrow="SKILLS"
            title={
              <>
                Tools I use
                <br />
                <span>to create.</span>
              </>
            }
            description="A mix of design, development, and creative tools used throughout my work."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="mt-14 grid gap-px overflow-hidden rounded-[30px] border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-3"
          >
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group flex items-center justify-between bg-[var(--color-background)] px-6 py-6 transition-colors duration-300 hover:bg-[var(--color-surface)] sm:px-7"
              >
                <div className="flex items-center gap-4">
                  <span className="font-[var(--font-body)] text-[10px] font-semibold text-[var(--color-brand)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="font-[var(--font-heading)] text-lg font-medium tracking-[-0.02em]">
                    {skill}
                  </span>
                </div>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.6}
                  className="text-[var(--color-border-strong)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-brand)]"
                />
              </div>
            ))}
          </motion.div>
        </section>

        <SectionDivider />

        {/* =====================================================
            05 — CERTIFICATES
            ===================================================== */}

        <section id="certificates">
          <SectionHeader
            number="05"
            eyebrow="CERTIFICATES"
            title={
              <>
                Always
                <br />
                <span>learning.</span>
              </>
            }
            description="Continuous learning and professional development across technology, design, and digital products."
          />

          {/* FILTER */}

          <div className="mt-12 flex flex-wrap gap-2">
            {certificateCategories.map((category) => {
              const isActive = filter === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                  className={`rounded-full border px-4 py-2.5 font-[var(--font-body)] text-xs font-medium transition-all duration-300 sm:px-5 sm:text-sm ${
                    isActive
                      ? "border-[var(--color-foreground)] bg-[var(--color-foreground)] text-white"
                      : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-foreground)] hover:text-[var(--color-foreground)]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* CERTIFICATE GRID */}

          {filteredCertificates.length > 0 ? (
            <motion.div
              layout
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              {filteredCertificates.map((certificate, index) => (
                <motion.a
                  layout
                  key={certificate.id}
                  href={certificate.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.04,
                    duration: 0.4,
                  }}
                  className="group relative overflow-hidden rounded-[26px] border border-[var(--color-border)] bg-[var(--color-background)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.05)] sm:p-7"
                >
                  {/* Top */}

                  <div className="flex items-center justify-between">
                    <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-hover)]">
                      {certificate.category}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-surface-alt)] text-[var(--color-muted)] transition-all duration-300 group-hover:bg-[var(--color-brand-soft)] group-hover:text-[var(--color-brand-hover)]">
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.6}
                      />
                    </span>
                  </div>

                  {/* Content */}

                  <div className="mt-16">
                    <h3 className="max-w-md font-[var(--font-heading)] text-xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-2xl">
                      {certificate.title}
                    </h3>

                    <p className="mt-2 font-[var(--font-body)] text-sm text-[var(--color-muted)]">
                      {certificate.issuer}
                    </p>
                  </div>

                  {/* Bottom */}

                  <div className="mt-8 flex items-center gap-2 border-t border-[var(--color-border)] pt-5">
                    <Check
                      size={13}
                      className="text-[var(--color-brand)]"
                    />

                    <span className="font-[var(--font-body)] text-xs text-[var(--color-muted)]">
                      View Certificate
                    </span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          ) : (
            <div className="mt-8 rounded-[26px] border border-[var(--color-border)] px-6 py-20 text-center">
              <p className="font-[var(--font-body)] text-sm text-[var(--color-muted)]">
                No certificates found in this category.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

/* =========================================================
   SECTION HEADER
   ========================================================= */

function SectionHeader({
  number,
  eyebrow,
  title,
  description,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={fadeUp}
      className="grid gap-8 lg:grid-cols-[180px_1fr_320px] lg:items-end"
    >
      {/* Number */}

      <div className="flex items-center gap-3">
        <span className="font-[var(--font-body)] text-xs font-semibold text-[var(--color-brand)]">
          {number}
        </span>

        <span className="h-px w-8 bg-[var(--color-border-strong)]" />

        <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          {eyebrow}
        </span>
      </div>

      {/* Title */}

      <h2 className="font-[var(--font-heading)] text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-[var(--color-foreground)]">
        {title}
      </h2>

      {/* Description */}

      <p className="max-w-sm font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)] lg:pb-1">
        {description}
      </p>
    </motion.div>
  );
}

/* =========================================================
   DIVIDER
   ========================================================= */

function SectionDivider() {
  return (
    <div className="my-24 h-px bg-[var(--color-border)] sm:my-32 lg:my-36" />
  );
}