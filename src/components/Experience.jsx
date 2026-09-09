"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Palette,
  Code2,
  Lightbulb,
  Layers,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Product Design",
    shortTitle: "Design",
    description:
      "Turning ideas and user needs into clear, intuitive, and purposeful digital experiences.",
    skills: [
      "UI/UX Design",
      "Design Systems",
      "Wireframing",
      "Prototyping",
    ],
    icon: Palette,
  },
  {
    number: "02",
    title: "Frontend Development",
    shortTitle: "Development",
    description:
      "Building responsive and scalable digital experiences where thoughtful design meets reliable technology.",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Responsive Web",
    ],
    icon: Code2,
  },
  {
    number: "03",
    title: "Digital Strategy",
    shortTitle: "Strategy",
    description:
      "Connecting product thinking, technology, and business goals to create solutions that solve real problems.",
    skills: [
      "Product Thinking",
      "Problem Solving",
      "Leadership",
      "Management",
    ],
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "Creative Direction",
    shortTitle: "Creative",
    description:
      "Shaping visual identities and creative concepts with a consistent point of view and meaningful storytelling.",
    skills: [
      "Branding",
      "Visual Direction",
      "Content",
      "Creative",
    ],
    icon: Layers,
  },
];

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
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Skills() {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-[var(--color-surface)]"
    >
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-180px] top-[120px] h-[420px] w-[420px] rounded-full bg-[var(--color-brand-soft)] opacity-40 blur-[120px]" />

        <div className="absolute bottom-[-180px] left-[-120px] h-[360px] w-[360px] rounded-full bg-[var(--color-surface-alt)] opacity-60 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-28 lg:px-8 lg:py-36">
        {/* =====================================================
            HEADER
            ===================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={itemVariants}
          className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          {/* Label */}

          <div>
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--color-brand)]" />

              <span className="font-[var(--font-body)] text-[10px] font-semibold tracking-[0.24em] text-[var(--color-muted)] sm:text-xs">
                CAPABILITIES
              </span>
            </div>
          </div>

          {/* Heading */}

          <div>
            <h2 className="font-[var(--font-heading)] text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-[var(--color-foreground)]">
              Ideas into
              <br />
              <span className="text-[var(--color-brand)]">experiences.</span>
            </h2>

            <p className="mt-7 max-w-2xl font-[var(--font-body)] text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              A combination of design, technology, strategy, and creativity
              used to build digital experiences that are useful, clear, and
              meaningful.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            CAPABILITY LIST
            ===================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          variants={containerVariants}
          className="mt-20 border-t border-[var(--color-border)] lg:mt-28"
        >
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                variants={itemVariants}
                className="group relative border-b border-[var(--color-border)]"
              >
                {/* Hover Background */}

                <div className="pointer-events-none absolute inset-0 -mx-6 bg-[var(--color-brand-soft)] opacity-0 transition-opacity duration-500 group-hover:opacity-60 sm:-mx-8 lg:-mx-12" />

                <div className="relative grid gap-8 py-10 sm:py-12 lg:grid-cols-[80px_1fr_1.1fr_80px] lg:items-center lg:gap-10 lg:py-14">
                  {/* Number */}

                  <div>
                    <span className="font-[var(--font-heading)] text-sm font-medium tracking-tight text-[var(--color-muted-light)] transition-colors duration-300 group-hover:text-[var(--color-brand-hover)]">
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}

                  <div className="flex items-center gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] transition-all duration-500 group-hover:border-[var(--color-brand)] group-hover:bg-[var(--color-brand)] group-hover:text-white sm:h-14 sm:w-14">
                      <Icon
                        size={21}
                        strokeWidth={1.6}
                      />
                    </div>

                    <div>
                      <p className="mb-1 font-[var(--font-body)] text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted-light)]">
                        {item.shortTitle}
                      </p>

                      <h3 className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.045em] text-[var(--color-foreground)] sm:text-3xl lg:text-[2rem]">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description + Skills */}

                  <div>
                    <p className="max-w-xl font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1.5 font-[var(--font-body)] text-[10px] font-medium text-[var(--color-muted)] transition-colors duration-300 group-hover:border-[var(--color-border-strong)] group-hover:text-[var(--color-foreground)] sm:text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}

                  <div className="hidden justify-end lg:flex">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-background)] transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[var(--color-brand)] group-hover:bg-[var(--color-brand)] group-hover:text-white">
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.6}
                      />
                    </div>
                  </div>

                  {/* Mobile Arrow */}

                  <div className="flex lg:hidden">
                    <ArrowUpRight
                      size={19}
                      strokeWidth={1.6}
                      className="text-[var(--color-muted-light)] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--color-brand)]"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}