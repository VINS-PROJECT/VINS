"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, Calendar, Tag, ArrowRight } from "lucide-react";

import { articles } from "@/data/articles";

export default function ArticlesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 6;

  /* ================= CATEGORIES ================= */
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(articles.map((a) => a.category)))],
    []
  );

  /* ================= FILTER ================= */
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchCategory =
        category === "All" || article.category === category;

      const keyword = search.toLowerCase();
      const matchSearch =
        article.title.toLowerCase().includes(keyword) ||
        article.desc.toLowerCase().includes(keyword);

      return matchCategory && matchSearch;
    });
  }, [search, category]);

  useEffect(() => setCurrentPage(1), [search, category]);

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const displayedArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const featured = filteredArticles[0];

  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">

      {/* ===== SOFT BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-[var(--accent)]/10 blur-[140px] rounded-full top-[-120px] left-[-120px]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 pt-32 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ================= HEADER ================= */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20 max-w-2xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Articles{" "}
              <span className="text-[var(--accent)]">& Insights</span>
            </h1>

            <p className="mt-4 text-[var(--foreground)]/70">
              Curated thoughts on design, engineering, and digital craftsmanship.
            </p>
          </motion.div>

          {/* ================= FEATURED ================= */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                relative mb-24
                rounded-3xl overflow-hidden
                border border-[var(--border)]
                shadow-lg
              "
            >
              <div className="relative h-[320px] sm:h-[420px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 p-8 sm:p-10 max-w-2xl">
                <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full mb-3 bg-[var(--accent)] text-black">
                  Featured • {featured.category}
                </span>

                <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">
                  {featured.title}
                </h2>

                <p className="mt-3 text-sm text-gray-200 line-clamp-3">
                  {featured.desc}
                </p>

                <Link
                  href={`/article/${featured.slug}`}
                  className="
                    inline-flex items-center gap-2 mt-5
                    text-sm font-medium text-[var(--accent)]
                  "
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}

          {/* ================= FILTER ================= */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14">

            {/* CATEGORY */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const active = category === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`
                      px-4 py-2 rounded-full text-xs font-medium transition
                      ${active
                        ? "bg-[var(--accent)] text-black"
                        : "border border-[var(--border)] hover:border-[var(--accent)]"}
                    `}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* SEARCH */}
            <div className="relative w-full md:w-[280px]">
              <Search className="absolute left-3 top-3 w-4 h-4 opacity-50" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="
                  w-full pl-10 pr-4 py-3 rounded-xl text-sm
                  bg-[var(--card)]
                  border border-[var(--border)]
                  focus:border-[var(--accent)]
                  outline-none transition
                "
              />
            </div>
          </div>

          {/* ================= GRID ================= */}
          {displayedArticles.length ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedArticles.map((article, i) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="
                    group rounded-2xl overflow-hidden
                    border border-[var(--border)]
                    bg-[var(--background)]/60 backdrop-blur-xl
                    transition
                    hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)]
                  "
                >
                  <div className="relative h-44">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <span className="flex items-center gap-2 text-xs mb-2 text-[var(--accent)]">
                      <Tag className="w-3 h-3" />
                      {article.category}
                    </span>

                    <h3 className="text-base font-semibold line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-sm opacity-70 mt-2 line-clamp-3">
                      {article.desc}
                    </p>

                    <div className="flex items-center justify-between mt-4 text-xs opacity-70">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[var(--accent)]" />
                        {article.date}
                      </span>

                      <Link
                        href={`/article/${article.slug}`}
                        className="flex items-center gap-1 font-medium text-[var(--accent)]"
                      >
                        Read <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <p className="text-center opacity-60 py-24">
              No articles found.
            </p>
          )}

          {/* ================= PAGINATION ================= */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-16">
              {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                const active = page === currentPage;

                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`
                      px-3 py-2 rounded-lg text-sm transition
                      ${active
                        ? "bg-[var(--accent)] text-black"
                        : "border border-[var(--border)] hover:border-[var(--accent)]"}
                    `}
                  >
                    {page}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}