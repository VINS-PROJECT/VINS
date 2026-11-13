
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { articles as allArticles } from "@/data/articles";

const AUTOPLAY_INTERVAL = 5000;

export default function Articles() {
  const slides = allArticles.slice(0, 5);

  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const current = slides[active];

  /* ===========================================================
     AUTOPLAY
     =========================================================== */

  useEffect(() => {
    if (slides.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  if (!current) return null;

  /* ===========================================================
     NAVIGATION
     =========================================================== */

  const previousSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      id="articles"
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
            -left-[15%]
            top-[15%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[var(--color-brand-soft)]
            opacity-30
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -bottom-[20%]
            -right-[10%]
            h-[360px]
            w-[360px]
            rounded-full
            bg-[var(--color-surface-alt)]
            opacity-60
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
            grid
            gap-8
            lg:grid-cols-[1fr_auto]
            lg:items-end
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
                INSIGHTS
              </span>
            </div>

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
              Ideas,
              <br />

              <span className="text-[var(--color-brand)]">
                written down.
              </span>
            </h2>
          </div>

          {/* Intro */}
          <div className="max-w-sm lg:pb-2">
            <p
              className="
                font-[var(--font-body)]
                text-sm
                leading-7
                text-[var(--color-muted)]
                sm:text-base
                sm:leading-8
              "
            >
              Thoughts, lessons, experiments, and perspectives
              from my journey across design, technology, and
              digital products.
            </p>

            <Link
              href="/article"
              className="
                group
                mt-5
                inline-flex
                items-center
                gap-2
                font-[var(--font-body)]
                text-sm
                font-semibold
                text-[var(--color-brand)]
                transition-colors
                hover:text-[var(--color-secondary)]
              "
            >
              View all articles

              <ArrowUpRight
                size={16}
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
        </div>

        {/* =================================================
            FEATURED ARTICLE
            ================================================= */}

        <div
          className="mt-14 lg:mt-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="
              grid
              overflow-hidden
              rounded-[32px]
              border
              border-[var(--color-border)]
              bg-[var(--color-surface)]
              lg:grid-cols-[1.05fr_0.95fr]
              lg:rounded-[36px]
            "
          >
            {/* IMAGE PANEL */}
            <Link
              href={`/article/${current.slug}`}
              className="
                group
                relative
                min-h-[340px]
                overflow-hidden
                bg-[var(--color-surface-alt)]
                sm:min-h-[460px]
                lg:min-h-[620px]
              "
            >
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.03]
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

              {/* Date */}
              <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
                <span
                  className="
                    inline-flex
                    rounded-full
                    border
                    border-white/50
                    bg-white/85
                    px-4
                    py-2
                    font-[var(--font-body)]
                    text-[10px]
                    font-semibold
                    text-[var(--color-foreground)]
                    shadow-sm
                    backdrop-blur-xl
                    sm:text-xs
                  "
                >
                  {current.date}
                </span>
              </div>

              {/* Image Arrow */}
              <div
                className="
                  absolute
                  bottom-6
                  right-6
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[var(--color-secondary)]
                  transition-colors
                  duration-200
                  group-hover:bg-[var(--color-brand)]
                  group-hover:text-white
                  sm:bottom-8
                  sm:right-8
                "
              >
                <ArrowUpRight
                  size={19}
                  strokeWidth={1.8}
                />
              </div>
            </Link>

            {/* CONTENT PANEL */}
            <div
              className="
                flex
                min-h-[480px]
                flex-col
                justify-between
                p-7
                sm:p-9
                lg:min-h-[620px]
                lg:p-12
                xl:p-14
              "
            >
              {/* Top */}
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
                  FEATURED ARTICLE
                </span>

                <span
                  className="
                    rounded-full
                    bg-[var(--color-brand-soft)]
                    px-3
                    py-1.5
                    font-[var(--font-body)]
                    text-xs
                    font-semibold
                    text-[var(--color-brand)]
                  "
                >
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")}
                </span>
              </div>

              {/* Main */}
              <div className="py-12 sm:py-14 lg:py-16">
                <Link href={`/article/${current.slug}`}>
                  <h3
                    className="
                      max-w-2xl
                      font-[var(--font-heading)]
                      text-[clamp(2.2rem,4.5vw,4.4rem)]
                      font-semibold
                      leading-[0.96]
                      tracking-[-0.06em]
                      text-[var(--color-foreground)]
                      transition-colors
                      duration-200
                      hover:text-[var(--color-brand)]
                    "
                  >
                    {current.title}
                  </h3>
                </Link>

                {current.description && (
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
                )}

                <Link
                  href={`/article/${current.slug}`}
                  className="
                    group
                    mt-8
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
                  Read Article

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

              {/* Controls */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-5
                  border-t
                  border-[var(--color-border)]
                  pt-6
                "
              >
                {/* Indicators */}
                <div className="flex items-center gap-2">
                  {slides.map((slide, index) => {
                    const isActive = index === active;

                    return (
                      <button
                        key={slide.slug || index}
                        type="button"
                        onClick={() => setActive(index)}
                        aria-label={`Go to article ${index + 1}`}
                        aria-current={
                          isActive ? "true" : undefined
                        }
                        className="
                          flex
                          h-6
                          items-center
                          justify-center
                          rounded-full
                        "
                      >
                        <span
                          className={`
                            block
                            h-1.5
                            rounded-full
                            transition-all
                            duration-200
                            ${
                              isActive
                                ? "w-8 bg-[var(--color-brand)]"
                                : "w-1.5 bg-[var(--color-border-strong)] hover:bg-[var(--color-brand)]"
                            }
                          `}
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Navigation */}
                {slides.length > 1 && (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={previousSlide}
                      aria-label="Previous article"
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[var(--color-border)]
                        bg-[var(--color-background)]
                        text-[var(--color-foreground)]
                        transition-colors
                        duration-200
                        hover:border-[var(--color-brand)]
                        hover:bg-[var(--color-brand)]
                        hover:text-white
                        active:scale-95
                      "
                    >
                      <ChevronLeft size={19} />
                    </button>

                    <button
                      type="button"
                      onClick={nextSlide}
                      aria-label="Next article"
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[var(--color-border)]
                        bg-[var(--color-background)]
                        text-[var(--color-foreground)]
                        transition-colors
                        duration-200
                        hover:border-[var(--color-brand)]
                        hover:bg-[var(--color-brand)]
                        hover:text-white
                        active:scale-95
                      "
                    >
                      <ChevronRight size={19} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            ARTICLE NAVIGATION
            ================================================= */}

        {slides.length > 1 && (
          <div className="mt-6 hidden lg:block">
            <div
              className="
                grid
                min-w-0
                grid-cols-5
                overflow-hidden
                rounded-[28px]
                border
                border-[var(--color-border)]
                bg-[var(--color-surface)]
              "
            >
              {slides.map((article, index) => {
                const isActive = index === active;

                return (
                  <button
                    key={article.slug || index}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-pressed={isActive}
                    className={`
                      group
                      relative
                      min-w-0
                      border-r
                      border-[var(--color-border)]
                      p-5
                      text-left
                      last:border-r-0
                      transition-colors
                      duration-200
                      ${
                        isActive
                          ? "bg-[var(--color-brand-soft)]"
                          : "hover:bg-[var(--color-surface-alt)]"
                      }
                    `}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className="
                          font-[var(--font-body)]
                          text-[10px]
                          font-semibold
                          tracking-[0.15em]
                          text-[var(--color-muted-light)]
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {isActive && (
                        <span
                          className="
                            h-2
                            w-2
                            rounded-full
                            bg-[var(--color-brand)]
                          "
                        />
                      )}
                    </div>

                    <p
                      className={`
                        mt-4
                        line-clamp-2
                        font-[var(--font-heading)]
                        text-sm
                        font-semibold
                        leading-5
                        tracking-[-0.02em]
                        ${
                          isActive
                            ? "text-[var(--color-brand)]"
                            : "text-[var(--color-muted)] group-hover:text-[var(--color-foreground)]"
                        }
                      `}
                    >
                      {article.title}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
