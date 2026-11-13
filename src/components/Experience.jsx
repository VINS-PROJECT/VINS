
"use client";

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
    description:
      "Turning ideas and user needs into clear, intuitive, and purposeful digital experiences.",
    skills: [
      "UI/UX Design",
      "Design Systems",
      "Wireframing",
      "Prototyping",
    ],
    icon: Palette,
    theme: "light",
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "Building responsive and scalable digital experiences where thoughtful design meets reliable technology.",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Responsive Web",
    ],
    icon: Code2,
    theme: "blue",
  },
  {
    number: "03",
    title: "Digital Strategy",
    description:
      "Connecting product thinking, technology, and business goals to create solutions that solve real problems.",
    skills: [
      "Product Thinking",
      "Problem Solving",
      "Leadership",
      "Management",
    ],
    icon: Lightbulb,
    theme: "indigo",
  },
  {
    number: "04",
    title: "Creative Direction",
    description:
      "Shaping visual identities and creative concepts with a consistent point of view and meaningful storytelling.",
    skills: [
      "Branding",
      "Visual Direction",
      "Content",
      "Creative",
    ],
    icon: Layers,
    theme: "light",
  },
];

function CapabilityCard({ item }) {
  const Icon = item.icon;

  const themes = {
    light: {
      card: "bg-[var(--color-background)] border-[var(--color-border)]",
      icon: "bg-[var(--color-brand-soft)] text-[var(--color-brand)]",
      number: "text-[var(--color-muted-light)]",
      title: "text-[var(--color-foreground)]",
      description: "text-[var(--color-muted)]",
      chip: "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)]",
      arrow:
        "border-[var(--color-border)] text-[var(--color-foreground)] group-hover:bg-[var(--color-secondary)] group-hover:text-white group-hover:border-[var(--color-secondary)]",
    },

    blue: {
      card: "bg-[var(--color-brand)] border-[var(--color-brand)]",
      icon: "bg-white/15 text-white",
      number: "text-white/60",
      title: "text-white",
      description: "text-white/80",
      chip: "border-white/20 bg-white/10 text-white/90",
      arrow:
        "border-white/30 text-white group-hover:bg-white group-hover:text-[var(--color-brand)]",
    },

    indigo: {
      card: "bg-[var(--color-secondary)] border-[var(--color-secondary)]",
      icon: "bg-white/10 text-white",
      number: "text-white/50",
      title: "text-white",
      description: "text-white/75",
      chip: "border-white/20 bg-white/10 text-white/85",
      arrow:
        "border-white/25 text-white group-hover:bg-white group-hover:text-[var(--color-secondary)]",
    },
  };

  const style = themes[item.theme];

  return (
    <article
      className={`
        group relative flex min-h-[350px] flex-col
        overflow-hidden rounded-[30px] border
        p-7 transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_18px_45px_rgba(32,26,61,0.08)]
        sm:p-9 lg:min-h-[390px] lg:p-10
        ${style.card}
      `}
    >
      {/* Decorative Shape */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-20 -top-24 h-64 w-64
          rounded-full border border-current
          opacity-[0.07]
          transition-transform duration-500
          group-hover:scale-110
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-10 -top-14 h-40 w-40
          rounded-full border border-current
          opacity-[0.06]
        "
      />

      {/* Card Header */}
      <div className="relative flex items-start justify-between">
        <div
          className={`
            flex h-14 w-14 items-center justify-center
            rounded-[20px] ${style.icon}
          `}
        >
          <Icon size={25} strokeWidth={1.7} />
        </div>

        <span
          className={`
            font-[var(--font-heading)]
            text-sm font-medium tracking-wide
            ${style.number}
          `}
        >
          {item.number}
        </span>
      </div>

      {/* Main Content */}
      <div className="relative mt-9">
        <h3
          className={`
            max-w-sm
            font-[var(--font-heading)]
            text-2xl font-semibold
            tracking-[-0.045em]
            sm:text-[28px]
            ${style.title}
          `}
        >
          {item.title}
        </h3>

        <p
          className={`
            mt-4 max-w-md
            font-[var(--font-body)]
            text-sm leading-7
            sm:text-[15px]
            sm:leading-8
            ${style.description}
          `}
        >
          {item.description}
        </p>
      </div>

      {/* Skills */}
      <div className="relative mt-auto flex flex-wrap gap-2 pt-8">
        {item.skills.map((skill) => (
          <span
            key={skill}
            className={`
              rounded-full border
              px-3.5 py-2
              font-[var(--font-body)]
              text-[11px] font-medium
              sm:text-xs
              ${style.chip}
            `}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Arrow */}
      <div
        className={`
          absolute bottom-7 right-7
          flex h-10 w-10 items-center justify-center
          rounded-full border
          transition-all duration-300
          group-hover:-translate-y-1
          group-hover:translate-x-1
          sm:bottom-9 sm:right-9
          ${style.arrow}
        `}
      >
        <ArrowUpRight size={18} strokeWidth={1.7} />
      </div>
    </article>
  );
}

export default function Skills() {
  return (
    <section
      id="capabilities"
      className="
        relative overflow-hidden
        bg-[var(--color-surface)]
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute -right-40 top-20
            h-[500px] w-[500px]
            rounded-full
            bg-[var(--color-brand-soft)]
            opacity-50 blur-[120px]
          "
        />

        <div
          className="
            absolute -bottom-40 -left-40
            h-[420px] w-[420px]
            rounded-full
            bg-[var(--color-secondary-soft)]
            opacity-50 blur-[110px]
          "
        />
      </div>

      <div
        className="
          relative mx-auto max-w-[1440px]
          px-6 py-24
          sm:px-8 sm:py-28
          lg:px-16 lg:py-36
          xl:px-20
        "
      >
        {/* Section Header */}
        <div
          className="
            grid gap-8
            lg:grid-cols-[0.75fr_1.25fr]
            lg:items-end
          "
        >
          {/* Label */}
          <div>
            <div className="inline-flex items-center gap-3">
              <span
                className="
                  h-[3px] w-8 rounded-full
                  bg-[var(--color-brand)]
                "
              />

              <span
                className="
                  font-[var(--font-body)]
                  text-[11px] font-semibold
                  tracking-[0.2em]
                  text-[var(--color-muted)]
                "
              >
                CAPABILITIES
              </span>
            </div>

            <p
              className="
                mt-5 max-w-xs
                text-sm leading-7
                text-[var(--color-muted)]
              "
            >
              What I do and how I bring ideas to life through
              thoughtful design and technology.
            </p>
          </div>

          {/* Heading */}
          <div>
            <h2
              className="
                font-[var(--font-heading)]
                text-[clamp(3rem,7vw,6.5rem)]
                font-semibold
                leading-[0.92]
                tracking-[-0.07em]
                text-[var(--color-foreground)]
              "
            >
              Ideas into
              <br />

              <span className="text-[var(--color-brand)]">
                experiences.
              </span>
            </h2>

            <p
              className="
                mt-7 max-w-2xl
                font-[var(--font-body)]
                text-base leading-8
                text-[var(--color-muted)]
                sm:text-lg
              "
            >
              A combination of design, technology, strategy,
              and creativity used to build digital experiences
              that are useful, clear, and meaningful.
            </p>
          </div>
        </div>

        {/* Capability Bento Grid */}
        <div
          className="
            mt-16 grid grid-cols-1 gap-5
            sm:grid-cols-2
            lg:mt-20 lg:gap-6
          "
        >
          {capabilities.map((item) => (
            <CapabilityCard
              key={item.number}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
