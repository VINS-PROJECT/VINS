"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, Calendar, BookOpen, Tag, ArrowRight } from "lucide-react";

export default function ArticlesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // === Data Artikel Dummy (bisa diganti nanti dengan fetch CMS / API)
  const articles = [
    {
      id: 1,
      title: "Building a High-Performance Portfolio with Next.js 15",
      desc: "Learn how to create blazing-fast personal websites using the latest Next.js features and best optimization techniques.",
      date: "June 2024",
      image: "/articles/next15.png",
      category: "Web Development",
      slug: "nextjs-15-portfolio",
    },
    {
      id: 2,
      title: "Design Systems for Developers",
      desc: "Why front-end engineers should think like designers — a guide to building consistent and scalable UI components.",
      date: "May 2024",
      image: "/articles/design-system.png",
      category: "UI/UX",
      slug: "design-systems-for-devs",
    },
    {
      id: 3,
      title: "Creating Animations with Framer Motion in Next.js",
      desc: "Step-by-step tutorial to implement smooth UI animations that enhance user experience without hurting performance.",
      date: "April 2024",
      image: "/articles/framer-motion.png",
      category: "Animation",
      slug: "framer-motion-nextjs",
    },
    {
      id: 4,
      title: "The Power of Personal Branding in Tech",
      desc: "How developers can build a strong online presence to attract opportunities and collaborations.",
      date: "March 2024",
      image: "/articles/personal-branding.png",
      category: "Career",
      slug: "personal-branding-in-tech",
    },
    {
      id: 5,
      title: "From Designer to Frontend Developer",
      desc: "My journey of transitioning from UI design to full-stack development — and the lessons learned along the way.",
      date: "January 2024",
      image: "/articles/designer-to-dev.png",
      category: "Journey",
      slug: "designer-to-developer",
    },
    {
      id: 6,
      title: "Mastering Responsive Layouts with TailwindCSS",
      desc: "Best practices for building adaptive and clean layouts using Tailwind’s utility-first approach.",
      date: "December 2023",
      image: "/articles/tailwindcss-layouts.png",
      category: "Web Development",
      slug: "responsive-tailwind-layouts",
    },
  ];

  // === Generate Kategori ===
  const categories = useMemo(() => ["All", ...new Set(articles.map((a) => a.category))], [articles]);

  // === Filter Artikel Berdasarkan Search & Kategori ===
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = category === "All" || article.category === category;
      const matchesSearch =
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.desc.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [articles, category, search]);

  // === Pagination ===
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const displayedArticles = filteredArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category]);

  return (
    <main className="min-h-screen bg-black text-gray-200 pt-28 pb-24 relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(226,192,124,0.12),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(209,170,96,0.1),transparent_60%)]"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#E2C07C] via-[#d6b270] to-[#b99a5e] bg-clip-text text-transparent">
            Articles & Insights
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Thoughts, lessons, and explorations from my journey in design, code, and creative technology.
          </p>
        </motion.div>

        {/* Filter + Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                  category === cat
                    ? "bg-[#E2C07C]/20 border-[#E2C07C] text-[#E2C07C]"
                    : "border-[#E2C07C]/20 text-gray-400 hover:border-[#E2C07C]/40 hover:text-[#E2C07C]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-[#E2C07C]/20 focus:border-[#E2C07C] text-sm text-gray-100 placeholder:text-gray-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Articles Grid */}
        {displayedArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {displayedArticles.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl overflow-hidden bg-white/5 border border-[#E2C07C]/20 backdrop-blur-md hover:border-[#E2C07C]/40 hover:shadow-[0_0_20px_-6px_rgba(226,192,124,0.3)] transition-all duration-300"
              >
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-[#E2C07C] mb-2">
                    <Tag className="w-3 h-3" /> {article.category}
                  </div>
                  <h2 className="text-lg font-semibold text-white group-hover:text-[#E2C07C] transition">
                    {article.title}
                  </h2>
                  <p className="text-gray-400 text-sm mt-2 line-clamp-3">{article.desc}</p>

                  <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#E2C07C]" /> {article.date}
                    </span>
                    <Link
                      href={`/article/${article.slug}`}
                      className="flex items-center gap-1 text-[#E2C07C] hover:underline"
                    >
                      Read more <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            No articles found. Try adjusting filters or search terms.
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-12">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg border text-sm font-medium transition ${
                  currentPage === page
                    ? "bg-[#E2C07C]/20 text-[#E2C07C] border-[#E2C07C]"
                    : "border-[#E2C07C]/20 text-gray-400 hover:border-[#E2C07C]/40 hover:text-[#E2C07C]"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </main>
  );
}
