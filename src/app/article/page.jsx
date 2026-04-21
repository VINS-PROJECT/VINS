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

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(articles.map((a) => a.category)))],
    []
  );

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

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);

  const displayedArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const featured = filteredArticles[0];

  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">

      {/* BACKGROUND GLOW */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-[var(--accent)]/10 blur-[140px] rounded-full top-[-120px] left-[-120px]" />
      </div>

      <div className="pt-32 pb-32">

        <div className="container-main">

          {/* HEADER */}

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mb-16"
          >

            <h1 className="heading-lg">

              Articles

              <span className="text-[var(--accent)]">
                {" "} & Insights
              </span>

            </h1>

            <p className="mt-4 text-muted">
              Curated thoughts on design, engineering,
              and digital craftsmanship.
            </p>

          </motion.div>

          {/* FEATURED ARTICLE */}

          {featured && (
            <Link href={`/article/${featured.slug}`}>

              <motion.div
                whileHover={{ y: -4 }}
                className="
                grid md:grid-cols-2 gap-8
                mb-20
                group
                "
              >

                <div className="relative h-[260px] rounded-2xl overflow-hidden">

                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />

                </div>

                <div className="flex flex-col justify-center">

                  <span className="text-xs text-[var(--accent)] flex items-center gap-1">
                    <Tag size={12} /> {featured.category}
                  </span>

                  <h2 className="text-2xl font-semibold mt-2">
                    {featured.title}
                  </h2>

                  <p className="mt-3 text-sm opacity-70">
                    {featured.desc}
                  </p>

                  <div className="flex items-center gap-2 mt-4 text-xs opacity-70">
                    <Calendar size={12} />
                    {featured.date}
                  </div>

                </div>

              </motion.div>

            </Link>
          )}

          {/* FILTER */}

          <div className="flex flex-col md:flex-row justify-between gap-6 mb-14">

            <div className="flex flex-wrap gap-2">

              {categories.map((cat) => {

                const active = category === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`
                      px-4 py-2 rounded-full text-xs transition
                      ${
                        active
                          ? "bg-[var(--accent)] text-black"
                          : "border border-[var(--border)] hover:border-[var(--accent)]"
                      }
                    `}
                  >
                    {cat}
                  </button>
                );
              })}

            </div>

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
                outline-none
                "
              />

            </div>

          </div>

          {/* GRID */}

          {displayedArticles.length ? (

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {displayedArticles.map((article) => (

                <motion.article
                  key={article.id}
                  whileHover={{ y: -6 }}
                  className="
                  group rounded-2xl overflow-hidden
                  border border-[var(--border)]
                  bg-[var(--background)]
                  hover:border-[var(--accent)]
                  transition
                  "
                >

                  <div className="relative h-44">

                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition"
                    />

                  </div>

                  <div className="p-5">

                    <span className="text-xs text-[var(--accent)] flex items-center gap-1">
                      <Tag size={12} /> {article.category}
                    </span>

                    <h3 className="text-base font-semibold mt-2 line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-sm opacity-70 mt-2 line-clamp-3">
                      {article.desc}
                    </p>

                    <div className="flex justify-between mt-4 text-xs opacity-70">

                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {article.date}
                      </span>

                      <Link
                        href={`/article/${article.slug}`}
                        className="flex items-center gap-1 text-[var(--accent)]"
                      >
                        Read <ArrowRight size={12} />
                      </Link>

                    </div>

                  </div>

                </motion.article>

              ))}

            </div>

          ) : (

            <div className="text-center py-24 opacity-60">
              <p>No articles found</p>
            </div>

          )}

          {/* PAGINATION */}

          {totalPages > 1 && (

            <div className="flex justify-center gap-2 mt-16">

              {Array.from({ length: totalPages }).map((_, i) => {

                const page = i + 1;

                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`
                      px-3 py-2 rounded-lg text-sm
                      ${
                        page === currentPage
                          ? "bg-[var(--accent)] text-black"
                          : "border border-[var(--border)]"
                      }
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