"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Calendar, Tag } from "lucide-react";

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

  // 🔥 FIX: featured ambil dari data asli (bukan filtered)
  const featured = articles[0];

  return (
    <main className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-xl mb-12">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Articles
          </h1>

          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Thoughts on design, development, and digital products.
          </p>
        </div>

        {/* FEATURED */}
        {featured && (
          <Link
            href={`/article/${featured.slug}`}
            className="grid md:grid-cols-2 gap-6 mb-14 group"
          >
            <div className="relative h-[220px] md:h-[260px] rounded-2xl overflow-hidden border border-gray-200">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Tag size={12} /> {featured.category}
              </span>

              <h2 className="text-lg md:text-xl font-semibold mt-2">
                {featured.title}
              </h2>

              <p className="text-sm text-gray-600 mt-2">
                {featured.desc}
              </p>

              <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
                <Calendar size={12} />
                {featured.date}
              </div>
            </div>
          </Link>
        )}

        {/* FILTER */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-10">

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const active = category === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm border transition ${
                    active
                      ? "bg-black text-white border-black"
                      : "text-gray-600 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-[260px]">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="
              w-full pl-10 pr-4 py-2.5 text-sm
              border border-gray-200 rounded-xl
              focus:outline-none focus:border-black
              "
            />
          </div>

        </div>

        {/* GRID */}
        {displayedArticles.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedArticles.map((article) => (
              <Link
                key={article.id}
                href={`/article/${article.slug}`}
                className="
                block border border-gray-200 rounded-2xl overflow-hidden
                hover:shadow-sm hover:-translate-y-1 transition
                "
              >
                <div className="relative h-40">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  <span className="text-xs text-gray-400">
                    {article.category}
                  </span>

                  <h3 className="text-base font-semibold mt-1 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                    {article.desc}
                  </p>

                  <div className="text-xs text-gray-400 mt-3 flex items-center gap-1">
                    <Calendar size={12} />
                    {article.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400 text-sm">
            No articles found.
          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: totalPages }).map((_, i) => {
              const page = i + 1;

              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 text-sm rounded-lg border ${
                    page === currentPage
                      ? "bg-black text-white border-black"
                      : "border-gray-200 text-gray-600"
                  }`}
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