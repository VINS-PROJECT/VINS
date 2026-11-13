
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { articles } from "@/data/articles";

const categories = [
  { key: "All", label: "All Articles" },
  { key: "Career", label: "Career" },
  { key: "Technology", label: "Technology" },
  { key: "Design", label: "Design" },
  { key: "Personal", label: "Personal" },
];

const ITEMS_PER_PAGE = 6;

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-[var(--color-brand)]" />
      <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
        {children}
      </span>
    </div>
  );
}

function ArticleCard({ article }) {
  return (
    <Link
      href={`/article/${article.slug}`}
      className="group block overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-background)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)]/40"
    >
      <div className="relative h-60 overflow-hidden bg-[var(--color-surface-alt)]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-white/30 bg-white/80 px-3 py-1.5 font-[var(--font-body)] text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--color-secondary)] backdrop-blur-xl">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">
            <Calendar size={13} />
            {article.date}
          </span>

          <ArrowUpRight
            size={17}
            strokeWidth={1.6}
            className="text-[var(--color-muted-light)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-brand)]"
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
          <span className="font-[var(--font-body)] text-xs font-semibold text-[var(--color-foreground)]">
            Read article
          </span>

          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}

export default function ArticlesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

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

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category]);

  const totalPages = Math.ceil(
    filteredArticles.length / ITEMS_PER_PAGE
  );

  const displayedArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const featured = articles[0];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-[var(--color-brand-soft)] opacity-40 blur-[130px]" />

        <div className="absolute left-[-15%] top-[45%] h-[400px] w-[400px] rounded-full bg-[var(--color-surface-alt)] opacity-50 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 sm:px-8 sm:pt-36 lg:px-8 lg:pb-36 lg:pt-44">
        {/* Hero */}
        <section>
          <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end">
            <div>
              <div className="mb-7">
                <SectionLabel>Article</SectionLabel>
              </div>

              <h1 className="max-w-5xl font-[var(--font-heading)] text-[clamp(4rem,9vw,8rem)] font-semibold leading-[0.84] tracking-[-0.08em]">
                Digital
                <br />
                <span className="text-[var(--color-brand)]">
                  Articles.
                </span>
              </h1>
            </div>

            <div className="lg:pb-2">
              <p className="font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                Thoughts, experiments, lessons, and perspectives around
                career, technology, design, and personal growth.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mt-20 sm:mt-24">
          <div className="mb-7 flex items-center justify-between">
            <SectionLabel>Explore</SectionLabel>

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
                  aria-pressed={isActive}
                  className={`group min-h-[110px] px-6 py-6 text-left transition-colors duration-300 ${
                    isActive
                      ? "bg-[var(--color-secondary)]"
                      : "bg-[var(--color-background)] hover:bg-[var(--color-brand-soft)]"
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
                      className={`transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                        isActive
                          ? "text-white/60"
                          : "text-[var(--color-muted-light)] group-hover:text-[var(--color-brand)]"
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

        {/* Featured Article */}
        {featured && (
          <section className="mt-24 sm:mt-32">
            <div className="mb-8 flex items-center justify-between">
              <SectionLabel>Featured</SectionLabel>

              <span className="font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">
                Latest story
              </span>
            </div>

            <Link
              href={`/article/${featured.slug}`}
              className="group grid overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)]/40 lg:grid-cols-2 lg:rounded-[40px]"
            >
              {/* Image */}
              <div className="relative min-h-[320px] overflow-hidden bg-[var(--color-surface-alt)] sm:min-h-[460px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                <div className="absolute left-6 top-6">
                  <span className="rounded-full border border-white/30 bg-white/80 px-4 py-2 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--color-secondary)] backdrop-blur-xl">
                    {featured.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex min-h-[420px] flex-col justify-between p-7 sm:p-10 lg:min-h-[460px] lg:p-12">
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

                  <h2 className="mt-12 max-w-2xl font-[var(--font-heading)] text-[clamp(2.4rem,4.5vw,4.5rem)] font-semibold leading-[0.94] tracking-[-0.06em]">
                    {featured.title}
                  </h2>

                  {featured.desc && (
                    <p className="mt-7 max-w-xl font-[var(--font-body)] text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
                      {featured.desc}
                    </p>
                  )}
                </div>

                <div className="mt-10 flex items-center justify-between">
                  <span className="font-[var(--font-body)] text-sm font-semibold text-[var(--color-foreground)]">
                    Read article
                  </span>

                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-secondary)] text-white transition-colors duration-300 group-hover:bg-[var(--color-brand)]">
                    <ArrowUpRight size={18} strokeWidth={1.6} />
                  </span>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Article Archive */}
        <section className="mt-24 sm:mt-32">
          {/* Header */}
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-5">
                <SectionLabel>All Stories</SectionLabel>
              </div>

              <h2 className="font-[var(--font-heading)] text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
                Explore the archive.
              </h2>
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search
                size={16}
                strokeWidth={1.6}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-muted-light)]"
              />

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search articles..."
                aria-label="Search articles"
                className="w-full rounded-full border border-[var(--color-border)] bg-[var(--color-background)] py-3 pl-11 pr-5 font-[var(--font-body)] text-sm text-[var(--color-foreground)] outline-none transition-colors placeholder:text-[var(--color-muted-light)] focus:border-[var(--color-brand)]"
              />
            </div>
          </div>

          {/* Active Filter */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">
              Showing
            </span>

            <span className="rounded-full bg-[var(--color-brand-soft)] px-3.5 py-1.5 font-[var(--font-body)] text-xs font-semibold text-[var(--color-secondary)]">
              {category === "All" ? "All Articles" : category}
            </span>

            {search && (
              <span className="font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">
                for "{search}"
              </span>
            )}
          </div>

          {/* Grid */}
          {displayedArticles.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {displayedArticles.map((article) => (
                <ArticleCard key={article.id || article.slug} article={article} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="rounded-[28px] border border-[var(--color-border)] px-6 py-24 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-brand-soft)]">
                <Search
                  size={18}
                  className="text-[var(--color-brand)]"
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
                className="mt-6 rounded-full bg-[var(--color-secondary)] px-5 py-2.5 font-[var(--font-body)] text-xs font-semibold text-white transition-colors hover:bg-[var(--color-brand)]"
              >
                Reset filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() =>
                  setCurrentPage((page) => Math.max(1, page - 1))
                }
                className="flex h-10 items-center gap-2 rounded-full border border-[var(--color-border)] px-4 font-[var(--font-body)] text-xs font-semibold text-[var(--color-muted)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] disabled:pointer-events-none disabled:opacity-30"
              >
                <ChevronLeft size={14} />
                Previous
              </button>

              <div className="flex gap-1.5">
                {Array.from({ length: totalPages }).map((_, index) => {
                  const page = index + 1;
                  const active = currentPage === page;

                  return (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      aria-label={`Go to page ${page}`}
                      aria-current={active ? "page" : undefined}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border font-[var(--font-body)] text-xs font-semibold transition-colors ${
                        active
                          ? "border-[var(--color-secondary)] bg-[var(--color-secondary)] text-white"
                          : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
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
                className="flex h-10 items-center gap-2 rounded-full border border-[var(--color-border)] px-4 font-[var(--font-body)] text-xs font-semibold text-[var(--color-muted)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] disabled:pointer-events-none disabled:opacity-30"
              >
                Next
                <ChevronRight size={14} />
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
