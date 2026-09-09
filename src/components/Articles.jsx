"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { articles as allArticles } from "@/data/articles";

const AUTOPLAY_INTERVAL = 5000;

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

export default function Articles() {
  const slides = allArticles.slice(0, 5);

  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (slides.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  const current = slides[active];

  if (!current) return null;

  const previousSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      id="articles"
      className="relative overflow-hidden bg-[var(--color-background)]"
    >
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[15%] h-[400px] w-[400px] rounded-full bg-[var(--color-brand-soft)] opacity-30 blur-[120px]" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[360px] w-[360px] rounded-full bg-[var(--color-surface-alt)] opacity-60 blur-[100px]" />
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
          variants={containerVariants}
          className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          {/* Heading */}

          <motion.div variants={itemVariants}>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--color-brand)]" />

              <span className="font-[var(--font-body)] text-[10px] font-semibold tracking-[0.24em] text-[var(--color-muted)] sm:text-xs">
                INSIGHTS
              </span>
            </div>

            <h2 className="font-[var(--font-heading)] text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-[var(--color-foreground)]">
              Ideas,
              <br />
              <span className="text-[var(--color-brand)]">
                written down.
              </span>
            </h2>
          </motion.div>

          {/* Intro */}

          <motion.div
            variants={itemVariants}
            className="max-w-sm lg:pb-2"
          >
            <p className="font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
              Thoughts, lessons, experiments, and perspectives from my journey
              across design, technology, and digital products.
            </p>

            <Link
              href="/article"
              className="group mt-5 inline-flex items-center gap-2 font-[var(--font-body)] text-sm font-medium text-[var(--color-foreground)]"
            >
              View all articles

              <ArrowUpRight
                size={15}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* =====================================================
            ARTICLE FEATURE
            ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.75,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 lg:mt-24"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.slug}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid overflow-hidden rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)] lg:grid-cols-[1.05fr_0.95fr] lg:rounded-[36px]"
            >
              {/* =================================================
                  IMAGE
                  ================================================= */}

              <Link
                href={`/article/${current.slug}`}
                className="group relative min-h-[360px] overflow-hidden bg-[var(--color-surface-alt)] sm:min-h-[480px] lg:min-h-[620px]"
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
                />

                {/* Image overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-70" />

                {/* Category / date */}

                <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                  <span className="rounded-full border border-white/50 bg-white/80 px-4 py-2 font-[var(--font-body)] text-[10px] font-medium text-[var(--color-foreground)] shadow-sm backdrop-blur-xl sm:text-xs">
                    {current.date}
                  </span>
                </div>

                {/* Image arrow */}

                <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[var(--color-foreground)] opacity-100 shadow-lg backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:bottom-7 sm:right-7">
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.7}
                  />
                </div>
              </Link>

              {/* =================================================
                  CONTENT
                  ================================================= */}

              <div className="flex min-h-[480px] flex-col justify-between p-7 sm:p-9 lg:min-h-[620px] lg:p-12 xl:p-14">
                {/* Top */}

                <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-5">
                  <span className="font-[var(--font-body)] text-[10px] font-semibold tracking-[0.2em] text-[var(--color-muted-light)]">
                    FEATURED ARTICLE
                  </span>

                  <span className="font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(slides.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Main */}

                <div className="py-12 sm:py-14 lg:py-16">
                  <Link href={`/article/${current.slug}`}>
                    <h3 className="max-w-2xl font-[var(--font-heading)] text-[clamp(2.2rem,4.5vw,4.4rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-[var(--color-foreground)] transition-colors duration-300 hover:text-[var(--color-brand-hover)]">
                      {current.title}
                    </h3>
                  </Link>

                  {current.description && (
                    <p className="mt-7 max-w-xl font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
                      {current.description}
                    </p>
                  )}

                  <Link
                    href={`/article/${current.slug}`}
                    className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-foreground)] px-6 py-3.5 font-[var(--font-body)] text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-brand-hover)] hover:shadow-lg"
                  >
                    Read Article

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>

                {/* =================================================
                    CONTROLS
                    ================================================= */}

                <div className="flex items-center justify-between gap-6 border-t border-[var(--color-border)] pt-6">
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
                          aria-current={isActive ? "true" : undefined}
                          className="group relative flex h-5 items-center"
                        >
                          <span
                            className={`block h-1.5 rounded-full transition-all duration-500 ${
                              isActive
                                ? "w-8 bg-[var(--color-brand)]"
                                : "w-1.5 bg-[var(--color-border-strong)] group-hover:bg-[var(--color-muted)]"
                            }`}
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
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] transition-all duration-300 hover:-translate-x-0.5 hover:border-[var(--color-foreground)]"
                      >
                        <ChevronLeft
                          size={17}
                          strokeWidth={1.7}
                        />
                      </button>

                      <button
                        type="button"
                        onClick={nextSlide}
                        aria-label="Next article"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] transition-all duration-300 hover:translate-x-0.5 hover:border-[var(--color-foreground)]"
                      >
                        <ChevronRight
                          size={17}
                          strokeWidth={1.7}
                        />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* =====================================================
            ARTICLE NAVIGATION
            ===================================================== */}

        {slides.length > 1 && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="mt-6 hidden overflow-x-auto lg:block"
          >
            <div className="grid min-w-[800px] grid-cols-5 divide-x divide-[var(--color-border)] rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface)]">
              {slides.map((article, index) => {
                const isActive = index === active;

                return (
                  <button
                    key={article.slug || index}
                    type="button"
                    onClick={() => setActive(index)}
                    className={`group relative min-w-0 px-5 py-5 text-left transition-colors duration-300 ${
                      isActive
                        ? "bg-[var(--color-brand-soft)]"
                        : "hover:bg-[var(--color-surface-alt)]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-[var(--font-body)] text-[10px] font-medium tracking-[0.15em] text-[var(--color-muted-light)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)]" />
                      )}
                    </div>

                    <p
                      className={`mt-4 line-clamp-2 font-[var(--font-heading)] text-sm font-semibold leading-5 tracking-[-0.02em] transition-colors ${
                        isActive
                          ? "text-[var(--color-foreground)]"
                          : "text-[var(--color-muted)] group-hover:text-[var(--color-foreground)]"
                      }`}
                    >
                      {article.title}
                    </p>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}