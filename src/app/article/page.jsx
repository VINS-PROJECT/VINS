"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, Calendar, Tag, ArrowRight } from "lucide-react";

import { articles } from "@/data/articles";

export default function ArticlesPage() {
  const BRAND = "#D8C79A";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 6;

  /* ================= CATEGORIES ================= */
  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(articles.map((a) => a.category)))];
  }, []);

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
    <main className="min-h-screen pt-28 pb-32 relative bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      {/* ================= AMBIENT BACKDROP ================= */}
      {/* <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, ${BRAND}22, transparent 65%),
            radial-gradient(circle at 80% 80%, ${BRAND}18, transparent 60%)
          `,
        }}
      /> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, ${BRAND}, ${BRAND}AA)`,
            }}
          >
            Articles & Insights
          </h1>

          <div
            className="w-20 h-[3px] mx-auto mt-5 rounded-full"
            style={{ backgroundColor: BRAND }}
          />

          <p className="mt-6 opacity-70 max-w-2xl mx-auto text-base sm:text-lg">
            Curated thoughts on design, engineering, and digital craftsmanship.
          </p>
        </motion.div>

        {/* ================= FEATURED ================= */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-24 rounded-[2rem] overflow-hidden border"
            style={{ borderColor: `${BRAND}33` }}
          >
            <div className="relative h-[320px] sm:h-[420px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
            </div>

            <div className="absolute bottom-0 p-8 sm:p-12 text-white max-w-3xl">
              <span
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1 rounded-full mb-4"
                style={{ backgroundColor: BRAND, color: "#000" }}
              >
                FEATURED • {featured.category}
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                {featured.title}
              </h2>

              <p className="mt-4 text-gray-200 line-clamp-3">
                {featured.desc}
              </p>

              <Link
                href={`/article/${featured.slug}`}
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl font-semibold transition hover:-translate-y-0.5"
                style={{ backgroundColor: BRAND, color: "#000" }}
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}

        {/* ================= FILTER BAR ================= */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14">
          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => {
              const active = category === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className="px-5 py-2 rounded-full text-sm font-semibold transition"
                  style={{
                    backgroundColor: active ? BRAND : "transparent",
                    color: active ? "#000" : "var(--foreground)",
                    border: `1px solid ${active ? BRAND : BRAND + "44"}`,
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-[320px]">
            <Search className="absolute left-3 top-3 w-4 h-4 opacity-60" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="
                w-full pl-10 pr-4 py-3 rounded-xl text-sm
                bg-[var(--background)]
                border outline-none transition
                focus:ring-2
              "
              style={{
                borderColor: `${BRAND}55`,
                "--tw-ring-color": BRAND,
              }}
            />
          </div>
        </div>

        {/* ================= GRID ================= */}
        {displayedArticles.length ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedArticles.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="
                  group rounded-[1.75rem] overflow-hidden
                  border bg-[var(--card)]
                  transition
                  hover:-translate-y-1 hover:shadow-xl
                "
                style={{ borderColor: `${BRAND}33` }}
              >
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                </div>

                <div className="p-6">
                  <span
                    className="flex items-center gap-2 text-xs mb-2"
                    style={{ color: BRAND }}
                  >
                    <Tag className="w-3 h-3" />
                    {article.category}
                  </span>

                  <h3 className="text-lg font-semibold line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-sm opacity-70 mt-2 line-clamp-3">
                    {article.desc}
                  </p>

                  <div className="flex items-center justify-between mt-4 text-xs opacity-70">
                    <span className="flex items-center gap-1">
                      <Calendar
                        className="w-3 h-3"
                        style={{ color: BRAND }}
                      />
                      {article.date}
                    </span>

                    <Link
                      href={`/article/${article.slug}`}
                      className="flex items-center gap-1 font-medium"
                      style={{ color: BRAND }}
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
          <div className="flex justify-center gap-3 mt-16">
            {Array.from({ length: totalPages }).map((_, i) => {
              const page = i + 1;
              const active = page === currentPage;

              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className="px-4 py-2 rounded-lg font-medium transition"
                  style={{
                    backgroundColor: active ? BRAND : "transparent",
                    color: active ? "#000" : "var(--foreground)",
                    border: `1px solid ${BRAND}44`,
                  }}
                >
                  {page}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
