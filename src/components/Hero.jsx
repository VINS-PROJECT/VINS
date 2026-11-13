
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[var(--color-background)]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-[10%] -top-[10%] h-[520px] w-[520px] rounded-full bg-[var(--color-brand-soft)] opacity-70 blur-3xl" />

        <div className="absolute -bottom-[20%] -left-[10%] h-[420px] w-[420px] rounded-full bg-[var(--color-surface-alt)] blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_70%,var(--color-background))]" />
      </div>

      {/* Main Content */}
      <div
        className="
          relative mx-auto grid min-h-screen w-full max-w-[1440px]
          items-center gap-14 px-6 pb-20 pt-32
          sm:px-8
          lg:grid-cols-[1.05fr_0.95fr] lg:gap-20
          lg:px-16 lg:pb-24 lg:pt-32
          xl:px-20
        "
      >
        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-3xl">
          {/* Heading */}
          <h1
            className="
              font-[var(--font-heading)]
              text-[clamp(3.5rem,8vw,7rem)]
              font-semibold leading-[0.9]
              tracking-[-0.065em]
              text-[var(--color-foreground)]
            "
          >
            Design.
            <br />
            Build.
            <br />
            Create{" "}
            <span
              className="
                bg-gradient-to-r
                from-[var(--color-brand)]
                via-[var(--color-brand-hover)]
                to-[var(--color-foreground)]
                bg-clip-text text-transparent
              "
            >
              Impact.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-8 max-w-2xl
              font-[var(--font-body)]
              text-base leading-8
              text-[var(--color-muted)]
              sm:text-[17px]
            "
          >
            I&apos;m Kevin Simorangkir — a digital creator focused on
            transforming ideas into meaningful digital experiences
            through design, technology, and creative solutions.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="/projects"
              className="
                group inline-flex items-center gap-2
                rounded-full
                bg-[var(--color-secondary)]
                px-6 py-3.5
                font-[var(--font-body)]
                text-sm font-medium text-white
                transition-colors duration-300
                hover:bg-[var(--color-brand)]
                active:scale-95
              "
            >
              View Projects

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              href="/contact"
              className="
                group inline-flex items-center gap-2
                rounded-full
                border border-[var(--color-border-strong)]
                bg-[var(--color-background)]
                px-6 py-3.5
                font-[var(--font-body)]
                text-sm font-medium
                text-[var(--color-foreground)]
                transition-colors duration-300
                hover:border-[var(--color-brand)]
                hover:text-[var(--color-brand)]
                active:scale-95
              "
            >
              Let&apos;s Talk

              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative hidden min-h-[600px] items-center justify-center lg:flex">
          {/* Decorative Elements */}
          <div className="pointer-events-none absolute right-0 top-6 h-32 w-32 rounded-full border border-[var(--color-brand-light)]/40" />

          <div className="pointer-events-none absolute bottom-10 left-0 h-20 w-20 rounded-full border border-[var(--color-border)]" />

          {/* Image Container */}
          <div
            className="
              relative h-[600px] w-full max-w-[560px]
              overflow-hidden
              rounded-[32px]
              border border-[var(--color-border)]
              bg-gradient-to-b
              from-[var(--color-surface)]
              to-[var(--color-brand-soft)]
            "
          >
            <div
              className="
                absolute inset-0
                bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.9),transparent_45%)]
              "
            />

            <Image
              src="/hero.png"
              alt="Kevin Simorangkir"
              fill
              priority
              sizes="(max-width: 1024px) 0vw, 560px"
              className="relative z-10 rounded-[32px] object-contain object-bottom"
            />

            {/* Bottom Fade */}
            <div
              className="
                absolute inset-x-0 bottom-0 z-20 h-32
                bg-gradient-to-t
                from-[var(--color-brand-soft)]/70
                to-transparent
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
