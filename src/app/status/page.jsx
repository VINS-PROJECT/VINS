"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  Clock3,
  Globe2,
  LockKeyhole,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";

/* =========================================================
   SERVICES
   ========================================================= */

const SERVICES = [
  {
    name: "VINS Digital Experience",
    description: "Main portfolio website and public experience.",
    status: "Operational",
    icon: Globe2,
  },
  {
    name: "Project Experience",
    description: "Projects, case studies, and portfolio content.",
    status: "Operational",
    icon: Server,
  },
  {
    name: "Article Experience",
    description: "Articles, insights, and written content.",
    status: "Operational",
    icon: Activity,
  },
  {
    name: "Security",
    description: "Privacy, protection, and secure access layer.",
    status: "Operational",
    icon: ShieldCheck,
  },
];

/* =========================================================
   STATUS HISTORY
   ========================================================= */

const HISTORY = [
  {
    date: "September 14, 2026",
    version: "v1.0.0",
    title: "VDE 2K27 Initial Release",
    description:
      "VINS Digital Experience 2K27 officially launched with the new portfolio architecture, visual system, and core experiences.",
  },
];

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
   PAGE
   ========================================================= */

export default function SystemStatusPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--color-background)] text-[var(--color-foreground)]">

      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-[var(--color-brand-soft)] opacity-30 blur-[130px]" />

        <div className="absolute bottom-[5%] left-[-15%] h-[450px] w-[450px] rounded-full bg-[var(--color-surface-alt)] opacity-60 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-8 sm:pt-36 lg:px-8 lg:pb-36 lg:pt-44">

        {/* =====================================================
            HEADER
            ===================================================== */}

        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl"
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--color-brand)]" />

            <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)] sm:text-xs">
              SYSTEM STATUS
            </span>
          </div>

          <h1 className="font-[var(--font-heading)] text-[clamp(4rem,9vw,8rem)] font-semibold leading-[0.82] tracking-[-0.08em]">
            System
            <br />

            <span className="text-[var(--color-brand)]">
              status.
            </span>
          </h1>

          <div className="mt-10 flex flex-col gap-6 border-t border-[var(--color-border)] pt-7 sm:flex-row sm:items-start sm:justify-between">

            <p className="max-w-xl font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
              A simple overview of the current availability and
              operational state of VINS Digital Experience.
            </p>

            <div className="flex shrink-0 items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-brand)] opacity-40" />

                <span className="relative h-2 w-2 rounded-full bg-[var(--color-brand)]" />
              </span>

              <span className="font-[var(--font-body)] text-xs font-medium text-[var(--color-muted)]">
                Operational
              </span>
            </div>

          </div>
        </motion.header>

        {/* =====================================================
            OVERALL STATUS
            ===================================================== */}

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-20 overflow-hidden rounded-[30px] bg-[var(--color-foreground)] text-white sm:mt-24 lg:rounded-[36px]"
        >

          <div className="grid lg:grid-cols-[1fr_auto]">

            {/* LEFT */}

            <div className="p-7 sm:p-10 lg:p-14">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <CheckCircle2
                    size={19}
                    strokeWidth={1.6}
                    className="text-[var(--color-brand-light)]"
                  />
                </div>

                <span className="font-[var(--font-body)] text-sm font-medium text-white/70">
                  All systems operational
                </span>

              </div>

              <h2 className="mt-10 font-[var(--font-heading)] text-[clamp(3.5rem,7vw,6.5rem)] font-semibold leading-[0.85] tracking-[-0.07em]">
                100%
              </h2>

              <p className="mt-5 max-w-md font-[var(--font-body)] text-sm leading-7 text-white/40">
                All currently listed VDE 2K27 services are
                operating normally.
              </p>

            </div>

            {/* RIGHT */}

            <div className="border-t border-white/10 p-7 sm:p-10 lg:flex lg:w-[320px] lg:flex-col lg:justify-between lg:border-l lg:border-t-0 lg:p-14">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                <Activity
                  size={23}
                  strokeWidth={1.5}
                  className="text-[var(--color-brand-light)]"
                />
              </div>

              <div className="mt-12">

                <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                  CURRENT RELEASE
                </span>

                <p className="mt-3 font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.04em]">
                  VDE 2K27
                </p>

                <p className="mt-1 font-[var(--font-body)] text-xs text-white/40">
                  v1.0.0 · September 14, 2026
                </p>

              </div>

            </div>

          </div>
        </motion.section>

        {/* =====================================================
            SERVICES
            ===================================================== */}

        <section className="mt-24 sm:mt-32">

          <SectionHeading
            number="01"
            label="SERVICES"
            title="What's running."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            {SERVICES.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  variants={fadeUp}
                  transition={{
                    delay: index * 0.06,
                  }}
                  className="group rounded-[28px] border border-[var(--color-border)] bg-[var(--color-background)] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.05)] sm:p-9"
                >

                  <div className="flex items-start justify-between gap-6">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-surface-alt)] text-[var(--color-foreground)] transition-colors duration-300 group-hover:bg-[var(--color-brand-soft)] group-hover:text-[var(--color-brand-hover)]">
                      <Icon
                        size={18}
                        strokeWidth={1.6}
                      />
                    </div>

                    <StatusBadge status={service.status} />

                  </div>

                  <div className="mt-14">

                    <h3 className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.04em]">
                      {service.name}
                    </h3>

                    <p className="mt-3 max-w-md font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)]">
                      {service.description}
                    </p>

                  </div>

                </motion.article>
              );
            })}

          </div>
        </section>

        {/* =====================================================
            DIVIDER
            ===================================================== */}

        <SectionDivider />

        {/* =====================================================
            AVAILABILITY
            ===================================================== */}

        <section>

          <SectionHeading
            number="02"
            label="AVAILABILITY"
            title="Built to stay available."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">

            <AvailabilityCard
              icon={Zap}
              title="Performance"
              value="Optimized"
              description="Focused on fast and responsive digital experiences."
            />

            <AvailabilityCard
              icon={ShieldCheck}
              title="Security"
              value="Protected"
              description="Privacy and security remain part of the experience."
            />

            <AvailabilityCard
              icon={Clock3}
              title="Maintenance"
              value="As needed"
              description="Updates are applied as the platform continues to evolve."
            />

          </div>
        </section>

        {/* =====================================================
            DIVIDER
            ===================================================== */}

        <SectionDivider />

        {/* =====================================================
            STATUS HISTORY
            ===================================================== */}

        <section>

          <SectionHeading
            number="03"
            label="HISTORY"
            title="Release history."
          />

          <div className="mt-8">

            {HISTORY.map((item, index) => (
              <motion.article
                key={item.version}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                variants={fadeUp}
                className="relative pl-9 sm:pl-12"
              >

                {/* TIMELINE */}

                <div className="absolute bottom-0 left-[8px] top-0 w-px bg-[var(--color-border)] sm:left-[11px]" />

                <span className="absolute left-0 top-7 h-[18px] w-[18px] rounded-full border-[4px] border-[var(--color-background)] bg-[var(--color-brand)] shadow-[0_0_0_1px_var(--color-border)] sm:h-[24px] sm:w-[24px]" />

                <div className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:p-9">

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                    <div>

                      <div className="flex flex-wrap items-center gap-3">

                        <span className="rounded-full bg-[var(--color-brand-soft)] px-3 py-1.5 font-[var(--font-body)] text-[10px] font-semibold tracking-[0.12em] text-[var(--color-brand-hover)]">
                          {item.version}
                        </span>

                        <span className="font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">
                          Current
                        </span>

                      </div>

                      <h3 className="mt-5 font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                        {item.title}
                      </h3>

                    </div>

                    <div className="flex items-center gap-2 font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">
                      <Clock3
                        size={14}
                        strokeWidth={1.6}
                      />

                      {item.date}
                    </div>

                  </div>

                  <p className="mt-7 max-w-2xl border-t border-[var(--color-border)] pt-6 font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
                    {item.description}
                  </p>

                </div>

              </motion.article>
            ))}

          </div>
        </section>

        {/* =====================================================
            FOOTER NOTE
            ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-20 flex items-center gap-3 border-t border-[var(--color-border)] pt-7"
        >

          <LockKeyhole
            size={14}
            strokeWidth={1.6}
            className="text-[var(--color-muted-light)]"
          />

          <p className="font-[var(--font-body)] text-xs leading-6 text-[var(--color-muted-light)]">
            Status information is provided as a general overview of
            the VDE 2K27 platform.
          </p>

        </motion.div>

      </div>
    </main>
  );
}

/* =========================================================
   SECTION HEADING
   ========================================================= */

function SectionHeading({
  number,
  label,
  title,
}) {
  return (
    <div>

      <div className="flex items-center gap-3">

        <span className="font-[var(--font-body)] text-xs font-semibold text-[var(--color-brand)]">
          {number}
        </span>

        <span className="h-px w-8 bg-[var(--color-border-strong)]" />

        <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          {label}
        </span>

      </div>

      <h2 className="mt-6 font-[var(--font-heading)] text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
        {title}
      </h2>

    </div>
  );
}

/* =========================================================
   STATUS BADGE
   ========================================================= */

function StatusBadge({ status }) {
  return (
    <span className="flex items-center gap-2 rounded-full border border-[var(--color-border)] px-3 py-1.5 font-[var(--font-body)] text-[10px] font-medium text-[var(--color-muted)]">

      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-brand)] opacity-40" />

        <span className="relative h-1.5 w-1.5 rounded-full bg-[var(--color-brand)]" />
      </span>

      {status}

    </span>
  );
}

/* =========================================================
   AVAILABILITY CARD
   ========================================================= */

function AvailabilityCard({
  icon: Icon,
  title,
  value,
  description,
}) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={fadeUp}
      className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-background)] p-7 sm:p-8"
    >

      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-surface-alt)]">
        <Icon
          size={18}
          strokeWidth={1.6}
          className="text-[var(--color-brand-hover)]"
        />
      </div>

      <p className="mt-10 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted-light)]">
        {title}
      </p>

      <h3 className="mt-2 font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.04em]">
        {value}
      </h3>

      <p className="mt-3 font-[var(--font-body)] text-sm leading-6 text-[var(--color-muted)]">
        {description}
      </p>

    </motion.article>
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