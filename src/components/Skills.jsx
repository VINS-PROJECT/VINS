
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  ArrowUpRight,
  UserRound,
  BriefcaseBusiness,
} from "lucide-react";

/* ===========================================================
   TABS
   =========================================================== */

const tabs = [
  {
    key: "about",
    label: "About Me",
    icon: UserRound,
  },
  {
    key: "project",
    label: "My Work",
    icon: BriefcaseBusiness,
  },
];

/* ===========================================================
   CONTENT
   =========================================================== */

const content = {
  about: {
    eyebrow: "ABOUT ME",
    year: "VDE 2K27",
    title: "Designing ideas into meaningful digital experiences.",
    description:
      "I'm Kevin Simorangkir — a designer and developer exploring the intersection of design, technology, and creativity to build digital experiences with purpose.",
    button: "Get to Know Me",
    href: "/about",
    imageLabel: "Creative Developer",
    imageTitle: "Kevin",
    imageSubtitle: "Simorangkir",
    tags: ["Designer", "Developer", "Creative"],
  },

  project: {
    eyebrow: "SELECTED WORK",
    year: "20+ PROJECTS",
    title: "Building digital products that turn ideas into experiences.",
    description:
      "From interfaces and websites to creative digital solutions, I approach every project with curiosity, structure, and attention to the details that make an experience feel right.",
    button: "Explore Projects",
    href: "/projects",
    imageLabel: "Selected Work",
    imageTitle: "Design",
    imageSubtitle: "Build · Create",
    tags: ["UI/UX", "Web Development", "Creative Solutions"],
  },
};

/* ===========================================================
   COMPONENT
   =========================================================== */

export default function AboutProjectSection() {
  const [active, setActive] = useState("about");

  const current = content[active];

  return (
    <section
      id="about-preview"
      className="
        relative
        overflow-hidden
        bg-[var(--color-background)]
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -right-[12%]
            top-[10%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[var(--color-brand-soft)]
            opacity-40
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -bottom-[15%]
            -left-[10%]
            h-[360px]
            w-[360px]
            rounded-full
            bg-[var(--color-surface-alt)]
            opacity-50
            blur-[100px]
          "
        />
      </div>

      <div
        className="
          relative
          mx-auto
          max-w-[1440px]
          px-6
          py-24
          sm:px-8
          sm:py-28
          lg:px-16
          lg:py-36
          xl:px-20
        "
      >
        {/* =================================================
            SECTION HEADER
            ================================================= */}

        <div
          className="
            flex
            flex-col
            gap-9
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* Heading */}
          <div>
            <div className="mb-6 flex items-center gap-3">
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
                EXPLORE
              </span>
            </div>

            <h2
              className="
                max-w-4xl
                font-[var(--font-heading)]
                text-[clamp(3rem,7vw,6.5rem)]
                font-semibold
                leading-[0.92]
                tracking-[-0.07em]
                text-[var(--color-foreground)]
              "
            >
              More than
              <br />

              <span className="text-[var(--color-brand)]">
                just a portfolio.
              </span>
            </h2>
          </div>

          {/* Tabs */}
          <div
            className="
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-1
              rounded-full
              border
              border-[var(--color-border)]
              bg-[var(--color-surface)]
              p-1.5
            "
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = active === tab.key;

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActive(tab.key)}
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
                    ${
                      isActive
                        ? `
                            bg-[var(--color-secondary)]
                            text-white
                          `
                        : `
                            text-[var(--color-muted)]
                            hover:bg-[var(--color-brand-soft)]
                            hover:text-[var(--color-brand)]
                          `
                    }
                  `}
                >
                  <Icon size={15} strokeWidth={1.8} />

                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* =================================================
            MAIN CONTENT
            ================================================= */}

        <div
          className="
            mt-14
            grid
            gap-5
            lg:mt-20
            lg:grid-cols-[0.95fr_1.05fr]
          "
        >
          {/* =================================================
              IMAGE PANEL
              ================================================= */}

          <div
            className="
              group
              relative
              min-h-[480px]
              overflow-hidden
              rounded-[32px]
              border
              border-[var(--color-border)]
              bg-gradient-to-b
              from-[var(--color-surface)]
              to-[var(--color-brand-soft)]
              sm:min-h-[580px]
              lg:rounded-[36px]
            "
          >
            {/* Decorative Shapes */}
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-72
                w-72
                rounded-full
                border
                border-[var(--color-brand-light)]/30
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -left-16
                top-[35%]
                h-36
                w-36
                rounded-full
                bg-[var(--color-brand-soft)]
                blur-3xl
              "
            />

            {/* Profile Image */}
            <Image
              src="/hero.png"
              alt="Kevin Simorangkir"
              fill
              priority={active === "about"}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="
                relative
                z-10
                object-contain
                object-bottom
              "
            />

            {/* Bottom Gradient */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                z-20
                h-64
                bg-gradient-to-t
                from-[var(--color-brand-soft)]
                via-[var(--color-brand-soft)]/40
                to-transparent
              "
            />

            {/* Image Information */}
            <div
              className="
                absolute
                bottom-6
                left-6
                right-6
                z-30
                flex
                items-end
                justify-between
                gap-4
                sm:bottom-8
                sm:left-8
                sm:right-8
              "
            >
              <div
                className="
                  max-w-[85%]
                  rounded-[22px]
                  border
                  border-white/60
                  bg-white/80
                  px-5
                  py-4
                  backdrop-blur-xl
                  sm:px-6
                  sm:py-5
                "
              >
                <p
                  className="
                    font-[var(--font-body)]
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[var(--color-muted)]
                  "
                >
                  {current.imageLabel}
                </p>

                <h3
                  className="
                    mt-2
                    font-[var(--font-heading)]
                    text-2xl
                    font-semibold
                    leading-none
                    tracking-[-0.05em]
                    text-[var(--color-foreground)]
                    sm:text-3xl
                  "
                >
                  {current.imageTitle}
                </h3>

                <p
                  className="
                    mt-1
                    font-[var(--font-heading)]
                    text-sm
                    font-medium
                    tracking-tight
                    text-[var(--color-brand-hover)]
                  "
                >
                  {current.imageSubtitle}
                </p>
              </div>

              <div
                className="
                  hidden
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/60
                  bg-white/80
                  text-[var(--color-brand)]
                  backdrop-blur-xl
                  sm:flex
                "
              >
                <ArrowUpRight size={20} strokeWidth={1.7} />
              </div>
            </div>
          </div>

          {/* =================================================
              INFORMATION PANEL
              ================================================= */}

          <div
            className="
              flex
              min-h-[480px]
              flex-col
              justify-between
              rounded-[32px]
              border
              border-[var(--color-border)]
              bg-[var(--color-surface)]
              p-7
              sm:min-h-[580px]
              sm:p-9
              lg:rounded-[36px]
              lg:p-12
            "
          >
            {/* Panel Header */}
            <div
              className="
                flex
                items-center
                justify-between
                gap-4
                border-b
                border-[var(--color-border)]
                pb-5
              "
            >
              <span
                className="
                  font-[var(--font-body)]
                  text-[10px]
                  font-semibold
                  tracking-[0.2em]
                  text-[var(--color-muted-light)]
                "
              >
                {current.eyebrow}
              </span>

              <span
                className="
                  rounded-full
                  bg-[var(--color-brand-soft)]
                  px-3
                  py-1.5
                  font-[var(--font-body)]
                  text-[10px]
                  font-semibold
                  tracking-wide
                  text-[var(--color-brand)]
                "
              >
                {current.year}
              </span>
            </div>

            {/* Main Information */}
            <div className="py-12 sm:py-14 lg:py-16">
              <h3
                className="
                  max-w-2xl
                  font-[var(--font-heading)]
                  text-[clamp(2.25rem,4.5vw,4.5rem)]
                  font-semibold
                  leading-[0.96]
                  tracking-[-0.06em]
                  text-[var(--color-foreground)]
                "
              >
                {current.title}
              </h3>

              <p
                className="
                  mt-7
                  max-w-xl
                  font-[var(--font-body)]
                  text-sm
                  leading-7
                  text-[var(--color-muted)]
                  sm:text-base
                  sm:leading-8
                "
              >
                {current.description}
              </p>

              <Link
                href={current.href}
                className="
                  group
                  mt-9
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[var(--color-secondary)]
                  px-6
                  py-3.5
                  font-[var(--font-body)]
                  text-sm
                  font-semibold
                  text-white
                  transition-colors
                  duration-200
                  hover:bg-[var(--color-brand)]
                  active:scale-95
                "
              >
                {current.button}

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-200
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>
            </div>

            {/* Tags */}
            <div
              className="
                flex
                flex-wrap
                gap-2
                border-t
                border-[var(--color-border)]
                pt-6
              "
            >
              {current.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    border
                    border-[var(--color-border)]
                    bg-[var(--color-background)]
                    px-4
                    py-2
                    font-[var(--font-body)]
                    text-xs
                    font-medium
                    text-[var(--color-muted)]
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
