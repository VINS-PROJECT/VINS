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
  const itemsPerPage = 6;

  const categories = useMemo(
    () => ["All", ...new Set(articles.map((a) => a.category))],
    []
  );

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchCat = category === "All" || article.category === category;
      const matchSearch =
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.desc.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [category, search]);

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const displayedArticles = filteredArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const latestArticle = filteredArticles[0];
  useEffect(() => setCurrentPage(1), [search, category]);

  return (
    <main
      className="
      min-h-screen pt-28 pb-32 relative overflow-hidden
      transition-colors duration-500
      bg-[var(--background)] text-[var(--foreground)]
    "
    >
      {/* Ambient Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 1.5 }}
        className="
        absolute inset-0
        dark:bg-[radial-gradient(circle_at_30%_20%,rgba(216,199,154,0.10),transparent_70%),
        radial-gradient(circle_at_80%_80%,rgba(216,199,154,0.08),transparent_60%)]
        bg-[radial-gradient(circle_at_30%_20%,rgba(216,199,154,0.12),transparent_70%),
        radial-gradient(circle_at_80%_80%,rgba(216,199,154,0.10),transparent_60%)]
      "
      />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1
            className="
            text-5xl md:text-6xl font-extrabold tracking-tight
            bg-clip-text text-transparent
          "
            style={{
              backgroundImage: `linear-gradient(
                to right,
                ${BRAND},
                ${BRAND}CC,
                ${BRAND}99
              )`,
            }}
          >
            Articles & Insights
          </h1>

          <div
            className="w-32 h-[3px] mx-auto mt-4 mb-6 rounded-full"
            style={{ backgroundColor: BRAND }}
          />

          <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto text-lg leading-relaxed">
            Deep insights & stories on design, engineering, and digital
            craftsmanship.
          </p>
        </motion.div>

        {/* FEATURED */}
        {latestArticle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20 relative group rounded-3xl overflow-hidden shadow-xl"
            style={{
              border: `1px solid ${BRAND}33`,
              background: "var(--background)",
              boxShadow:
                "0 0 25px -4px rgba(216,199,154,0.15), 0 8px 40px -8px rgba(0,0,0,0.2)",
            }}
          >
            <div className="relative w-full h-[350px] md:h-[420px]">
              <Image
                src={latestArticle.image}
                alt={latestArticle.title}
                fill
                className="object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            <div className="absolute bottom-0 p-8 md:p-12 text-white">
              <div className="flex items-center gap-2 text-sm mb-2">
                <Tag className="w-4 h-4" style={{ color: BRAND }} />
                Featured • {latestArticle.category}
              </div>

              <h2 className="text-3xl md:text-4xl font-bold drop-shadow">
                {latestArticle.title}
              </h2>

              <p className="text-gray-200 mt-4 max-w-xl line-clamp-3">
                {latestArticle.desc}
              </p>

              <Link
                href={`/article/${latestArticle.slug}`}
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl font-semibold transition"
                style={{ backgroundColor: BRAND, color: "#000" }}
              >
                Read Featured <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}

        {/* FILTERS */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
          {/* CATEGORIES */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className="px-6 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300"
                style={{
                  background: category === cat ? BRAND : "transparent",
                  color: category === cat ? "#000" : "var(--foreground)",
                  border: `1px solid ${
                    category === cat ? BRAND : BRAND + "44"
                  }`,
                  boxShadow:
                    category === cat
                      ? "0 0 18px rgba(216,199,154,0.35)"
                      : "none",
                  transform: category === cat ? "scale(1.05)" : "scale(1.0)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* SEARCH */}
          <div className="relative w-full md:w-[320px]">
            <Search
              className="absolute left-3 top-3 w-4 h-4 text-gray-400"
              style={{ color: "gray" }}
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
              w-full pl-10 pr-4 py-3 rounded-lg text-sm
              bg-[var(--background)] text-[var(--foreground)]
              border focus:ring-2 outline-none
              transition-all duration-300
            "
              style={{
                borderColor: `${BRAND}55`,
                boxShadow: "none",
              }}
            />
          </div>
        </div>

        {/* GRID */}
        {displayedArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {displayedArticles.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="
                group rounded-3xl overflow-hidden transition-all backdrop-blur-sm
              "
                style={{
                  background: "var(--background)",
                  border: `1px solid ${BRAND}33`,
                }}
              >
                <div className="relative h-44">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                </div>

                <div className="p-6">
                  <div
                    className="flex items-center gap-2 text-xs mb-2"
                    style={{ color: BRAND }}
                  >
                    <Tag className="w-3 h-3" /> {article.category}
                  </div>

                  <h3 className="text-lg font-semibold">{article.title}</h3>

                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 line-clamp-3">
                    {article.desc}
                  </p>

                  <div className="flex items-center justify-between mt-4 text-xs text-gray-500 dark:text-gray-300">
                    <span className="flex items-center gap-1">
                      <Calendar
                        className="w-3 h-3"
                        style={{ color: BRAND }}
                      />
                      {article.date}
                    </span>

                    <Link
                      href={`/article/${article.slug}`}
                      className="flex items-center gap-1 hover:underline"
                      style={{ color: BRAND }}
                    >
                      Read More <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-20">
            No articles found.
          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-14 text-sm">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className="px-4 py-2 rounded-lg transition"
                  style={{
                    border: `1px solid ${
                      currentPage === page ? BRAND : BRAND + "33"
                    }`,
                    backgroundColor:
                      currentPage === page ? BRAND + "33" : "transparent",
                    color: currentPage === page ? BRAND : "var(--foreground)",
                  }}
                >
                  {page}
                </button>
              )
            )}
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
    </main>
  );
}
