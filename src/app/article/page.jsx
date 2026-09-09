"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Search,
} from "lucide-react";

import { articles } from "@/data/articles";

/* =========================================================
   ARTICLE CATEGORIES
   ========================================================= */

const categories = [
  {
    key: "All",
    label: "All Articles",
  },
  {
    key: "Career",
    label: "Career",
  },
  {
    key: "Technology",
    label: "Technology",
  },
  {
    key: "Design",
    label: "Design",
  },
  {
    key: "Personal",
    label: "Personal",
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

export default function ArticlesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 6;

  /* =======================================================
     FILTER
     ======================================================= */

  const filteredArticles = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return articles.filter((article) => {
      const matchCategory =
        category === "All" ||
        article.category?.toLowerCase() === category.toLowerCase();

      const matchSearch =
        !keyword ||
        article.title?.toLowerCase().includes(keyword) ||
        article.desc?.toLowerCase().includes(keyword) ||
        article.category?.toLowerCase().includes(keyword);

      return matchCategory && matchSearch;
    });
  }, [search, category]);

  /* =======================================================
     RESET PAGINATION
     ======================================================= */

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category]);

  /* =======================================================
     PAGINATION
     ======================================================= */

  const totalPages = Math.ceil(
    filteredArticles.length / ITEMS_PER_PAGE
  );

  const displayedArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  /* =======================================================
     FEATURED
     ======================================================= */

  const featured = articles[0];

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <main className="relative overflow-hidden bg-[var(--color-background)] text-[var(--color-foreground)]">

      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-[var(--color-brand-soft)] opacity-40 blur-[130px]" />

        <div className="absolute left-[-15%] top-[45%] h-[400px] w-[400px] rounded-full bg-[var(--color-surface-alt)] opacity-50 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 sm:px-8 sm:pt-36 lg:px-8 lg:pb-36 lg:pt-44">

        {/* =====================================================
            HERO
            ===================================================== */}

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end">

            {/* LEFT */}

            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--color-brand)]" />

                <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)] sm:text-xs">
                  ARTICLE
                </span>
              </div>

              <h1 className="max-w-5xl font-[var(--font-heading)] text-[clamp(4rem,9vw,8rem)] font-semibold leading-[0.84] tracking-[-0.08em]">
                Digital
                <br />

                <span className="text-[var(--color-brand)]">
                  Articles.
                </span>
              </h1>
            </div>

            {/* RIGHT */}

            <div className="lg:pb-2">
              <p className="font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                Thoughts, experiments, lessons, and perspectives around
                career, technology, design, and personal growth.
              </p>
            </div>
          </div>
        </motion.section>

        {/* =====================================================
            CATEGORY MAP
            ===================================================== */}

        <section className="mt-20 sm:mt-24">

          <div className="mb-7 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                EXPLORE
              </span>

              <span className="h-px w-8 bg-[var(--color-border-strong)]" />
            </div>

            <span className="font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">
              {filteredArticles.length} Articles
            </span>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-5">

            {categories.map((item, index) => {
              const isActive = category === item.key;

              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setCategory(item.key)}
                  className={`group relative min-h-[110px] bg-[var(--color-background)] px-6 py-6 text-left transition-all duration-300 hover:bg-[var(--color-surface)] ${
                    isActive
                      ? "bg-[var(--color-foreground)] hover:bg-[var(--color-foreground)]"
                      : ""
                  }`}
                >
                  <div className="flex items-start justify-between">

                    <span
                      className={`font-[var(--font-body)] text-[10px] font-semibold ${
                        isActive
                          ? "text-[var(--color-brand-light)]"
                          : "text-[var(--color-brand)]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.6}
                      className={`transition-all duration-300 ${
                        isActive
                          ? "text-white/50"
                          : "text-[var(--color-border-strong)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-brand)]"
                      }`}
                    />
                  </div>

                  <span
                    className={`mt-8 block font-[var(--font-heading)] text-lg font-semibold tracking-[-0.03em] ${
                      isActive
                        ? "text-white"
                        : "text-[var(--color-foreground)]"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            FEATURED ARTICLE
            ===================================================== */}

        {featured && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={fadeUp}
            className="mt-24 sm:mt-32"
          >

            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--color-brand)]" />

                <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  FEATURED
                </span>
              </div>

              <span className="font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">
                Latest story
              </span>
            </div>

            <Link
              href={`/article/${featured.slug}`}
              className="group grid overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,0,0,0.06)] md:grid-cols-2 lg:rounded-[40px]"
            >

              {/* IMAGE */}

              <div className="relative min-h-[360px] overflow-hidden bg-[var(--color-surface-alt)] sm:min-h-[460px]">

                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                <div className="absolute left-6 top-6">
                  <span className="rounded-full border border-white/30 bg-white/75 px-4 py-2 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--color-foreground)] backdrop-blur-xl">
                    {featured.category}
                  </span>
                </div>
              </div>

              {/* CONTENT */}

              <div className="flex min-h-[460px] flex-col justify-between p-7 sm:p-10 lg:p-12">

                <div>
                  <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-5">

                    <span className="font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">
                      Featured Article
                    </span>

                    <span className="flex items-center gap-2 font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">
                      <Calendar size={14} />
                      {featured.date}
                    </span>

                  </div>

                  <h2 className="mt-14 max-w-2xl font-[var(--font-heading)] text-[clamp(2.4rem,4.5vw,4.5rem)] font-semibold leading-[0.94] tracking-[-0.06em]">
                    {featured.title}
                  </h2>

                  {featured.desc && (
                    <p className="mt-7 max-w-xl font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
                      {featured.desc}
                    </p>
                  )}
                </div>

                <div className="mt-10 flex items-center justify-between">

                  <span className="font-[var(--font-body)] text-sm font-medium text-[var(--color-foreground)]">
                    Read article
                  </span>

                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-foreground)] text-white transition-all duration-300 group-hover:bg-[var(--color-brand-hover)]">
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.6}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>

                </div>

              </div>
            </Link>
          </motion.section>
        )}

        {/* =====================================================
            ARTICLE LIST
            ===================================================== */}

        <section className="mt-24 sm:mt-32">

          {/* HEADER */}

          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--color-brand)]" />

                <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  ALL STORIES
                </span>
              </div>

              <h2 className="font-[var(--font-heading)] text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
                Explore the archive.
              </h2>
            </div>

            {/* SEARCH */}

            <div className="relative w-full lg:w-80">

              <Search
                size={16}
                strokeWidth={1.6}
                className="absolute left-4 top-3.5 text-[var(--color-muted-light)]"
              />

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search articles..."
                aria-label="Search articles"
                className="w-full rounded-full border border-[var(--color-border)] bg-[var(--color-background)] py-3 pl-11 pr-5 font-[var(--font-body)] text-sm text-[var(--color-foreground)] outline-none transition-all placeholder:text-[var(--color-muted-light)] focus:border-[var(--color-foreground)]"
              />

            </div>
          </div>

          {/* ACTIVE FILTER */}

          <div className="mb-8 flex items-center gap-3">

            <span className="font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">
              Showing
            </span>

            <span className="rounded-full bg-[var(--color-surface-alt)] px-3.5 py-1.5 font-[var(--font-body)] text-xs font-medium text-[var(--color-foreground)]">
              {category === "All" ? "All Articles" : category}
            </span>

            {search && (
              <span className="font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">
                for "{search}"
              </span>
            )}

          </div>

          {/* GRID */}

          {displayedArticles.length > 0 ? (
            <motion.div
              layout
              className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            >

              {displayedArticles.map((article, index) => (
                <motion.div
                  layout
                  key={article.id}
                  initial={{
                    opacity: 0,
                    y: 24,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                  }}
                >

                  <Link
                    href={`/article/${article.slug}`}
                    className="group block overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-background)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.05)]"
                  >

                    {/* IMAGE */}

                    <div className="relative h-60 overflow-hidden bg-[var(--color-surface-alt)]">

                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute left-4 top-4">
                        <span className="rounded-full border border-white/30 bg-white/75 px-3 py-1.5 font-[var(--font-body)] text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--color-foreground)] backdrop-blur-xl">
                          {article.category}
                        </span>
                      </div>

                    </div>

                    {/* CONTENT */}

                    <div className="p-6 sm:p-7">

                      <div className="flex items-center justify-between">

                        <span className="flex items-center gap-2 font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">
                          <Calendar size={13} />
                          {article.date}
                        </span>

                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.6}
                          className="text-[var(--color-border-strong)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-brand)]"
                        />

                      </div>

                      <h3 className="mt-7 line-clamp-2 font-[var(--font-heading)] text-xl font-semibold leading-tight tracking-[-0.04em] text-[var(--color-foreground)] sm:text-2xl">
                        {article.title}
                      </h3>

                      {article.desc && (
                        <p className="mt-4 line-clamp-3 font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)]">
                          {article.desc}
                        </p>
                      )}

                      <div className="mt-7 flex items-center gap-2 border-t border-[var(--color-border)] pt-5">

                        <span className="font-[var(--font-body)] text-xs font-medium text-[var(--color-foreground)]">
                          Read more
                        </span>

                        <ArrowRight
                          size={13}
                          strokeWidth={1.6}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />

                      </div>

                    </div>
                  </Link>

                </motion.div>
              ))}

            </motion.div>
          ) : (
            /* EMPTY STATE */

            <div className="rounded-[28px] border border-[var(--color-border)] px-6 py-24 text-center">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-surface-alt)]">
                <Search
                  size={18}
                  className="text-[var(--color-muted)]"
                />
              </div>

              <h3 className="mt-5 font-[var(--font-heading)] text-xl font-semibold tracking-[-0.03em]">
                No articles found.
              </h3>

              <p className="mt-2 font-[var(--font-body)] text-sm text-[var(--color-muted)]">
                Try another keyword or category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="mt-6 rounded-full bg-[var(--color-foreground)] px-5 py-2.5 font-[var(--font-body)] text-xs font-medium text-white transition hover:bg-[var(--color-brand-hover)]"
              >
                Reset filters
              </button>

            </div>
          )}

          {/* ===================================================
              PAGINATION
              =================================================== */}

          {totalPages > 1 && (
            <div className="mt-14 flex items-center justify-center gap-2">

              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() =>
                  setCurrentPage((page) =>
                    Math.max(1, page - 1)
                  )
                }
                className="flex h-10 items-center gap-2 rounded-full border border-[var(--color-border)] px-4 font-[var(--font-body)] text-xs font-medium text-[var(--color-muted)] transition hover:border-[var(--color-foreground)] hover:text-[var(--color-foreground)] disabled:pointer-events-none disabled:opacity-30"
              >
                Previous
              </button>

              <div className="flex gap-1.5">

                {Array.from({
                  length: totalPages,
                }).map((_, index) => {
                  const page = index + 1;
                  const active = currentPage === page;

                  return (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      aria-label={`Go to page ${page}`}
                      aria-current={active ? "page" : undefined}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border font-[var(--font-body)] text-xs font-medium transition-all duration-300 ${
                        active
                          ? "border-[var(--color-foreground)] bg-[var(--color-foreground)] text-white"
                          : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-foreground)] hover:text-[var(--color-foreground)]"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}

              </div>

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((page) =>
                    Math.min(totalPages, page + 1)
                  )
                }
                className="flex h-10 items-center gap-2 rounded-full border border-[var(--color-border)] px-4 font-[var(--font-body)] text-xs font-medium text-[var(--color-muted)] transition hover:border-[var(--color-foreground)] hover:text-[var(--color-foreground)] disabled:pointer-events-none disabled:opacity-30"
              >
                Next
              </button>

            </div>
          )}

        </section>

      </div>
    </main>
  );
}