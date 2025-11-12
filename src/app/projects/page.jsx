"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowLeft, ArrowRight, LayoutGrid, List } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function ProjectsPage() {
  const allProjects = [
    {
      id: 1,
      title: "Namura Property Website",
      desc: "Modern property listing platform with 3D previews and smart search.",
      image: "/projects/namura.png",
      category: "Frontend",
      tech: "Next.js",
      slug: "namura-property",
      year: 2024,
    },
    {
      id: 2,
      title: "MagangHub Platform",
      desc: "Platform connecting students and companies seamlessly.",
      image: "/projects/maganghub.png",
      category: "Fullstack",
      tech: "Node.js",
      slug: "maganghub",
      year: 2023,
    },
    {
      id: 3,
      title: "Portfolio Revamp 2025",
      desc: "High-performance multilingual portfolio redesign.",
      image: "/projects/portfolio2025.png",
      category: "Design",
      tech: "Next.js",
      slug: "portfolio-2025",
      year: 2025,
    },
    {
      id: 4,
      title: "AI Resume Analyzer",
      desc: "AI-powered resume optimization tool using OpenAI.",
      image: "/projects/airesume.png",
      category: "Fullstack",
      tech: "OpenAI API",
      slug: "ai-resume-analyzer",
      year: 2024,
    },
    {
      id: 5,
      title: "Brand Identity Kit",
      desc: "Logo and identity package for digital branding.",
      image: "/projects/brandkit.png",
      category: "Design",
      tech: "Figma",
      slug: "brand-identity-kit",
      year: 2023,
    },
    {
      id: 6,
      title: "Dashboard Admin UI",
      desc: "Analytics dashboard with modular and elegant components.",
      image: "/projects/dashboard.png",
      category: "Frontend",
      tech: "React",
      slug: "dashboard-admin-ui",
      year: 2022,
    },
  ];

  // === STATES ===
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [tech, setTech] = useState("All Technologies");
  const [sort, setSort] = useState("Newest");
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;

  // === FILTER OPTIONS ===
  const categories = ["All Categories", ...new Set(allProjects.map((p) => p.category))];
  const technologies = ["All Technologies", ...new Set(allProjects.map((p) => p.tech))];
  const sortOptions = ["Newest", "Oldest", "A–Z"];

  // === FILTER + SORT LOGIC ===
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let data = allProjects.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
      const matchesCategory = category === "All Categories" || p.category === category;
      const matchesTech = tech === "All Technologies" || p.tech === tech;
      return matchesSearch && matchesCategory && matchesTech;
    });

    if (sort === "Newest") data = data.sort((a, b) => b.year - a.year);
    if (sort === "Oldest") data = data.sort((a, b) => a.year - b.year);
    if (sort === "A–Z") data = data.sort((a, b) => a.title.localeCompare(b.title));

    return data;
  }, [search, category, tech, sort]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const currentItems = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  useEffect(() => setCurrentPage(1), [search, category, tech, sort]);

  const resetFilter = () => {
    setSearch("");
    setCategory("All Categories");
    setTech("All Technologies");
    setSort("Newest");
  };

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  // === UI ===
  return (
    <main className="min-h-screen bg-black text-gray-200 pt-28 pb-24 relative overflow-hidden">
      {/* Glow Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(226,192,124,0.12),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(209,170,96,0.1),transparent_60%)]"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* === HEADER === */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-10">
          <div>
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#E2C07C] via-[#d6b270] to-[#b99a5e] bg-clip-text text-transparent">
              Projects
            </h1>
            <div className="mt-2 h-1 w-32 bg-gradient-to-r from-[#E2C07C] to-[#b99a5e]" />
          </div>

          <div className="relative w-full md:w-[400px]">
            <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-24 py-3 rounded-xl bg-white/5 border border-[#E2C07C]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#E2C07C]/40"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-2.5 px-3 py-1.5 text-xs rounded-md border border-[#E2C07C]/30 hover:bg-[#E2C07C]/10 transition"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* === FILTER BAR === */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-3 rounded-lg bg-white/5 border border-[#E2C07C]/20 text-sm focus:ring-2 focus:ring-[#E2C07C]/40"
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <select
            value={tech}
            onChange={(e) => setTech(e.target.value)}
            className="px-4 py-3 rounded-lg bg-white/5 border border-[#E2C07C]/20 text-sm focus:ring-2 focus:ring-[#E2C07C]/40"
          >
            {technologies.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-3 rounded-lg bg-white/5 border border-[#E2C07C]/20 text-sm focus:ring-2 focus:ring-[#E2C07C]/40"
          >
            {sortOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>

          {(search || category !== "All Categories" || tech !== "All Technologies" || sort !== "Newest") && (
            <button
              onClick={resetFilter}
              className="px-4 py-3 rounded-lg border border-[#E2C07C]/30 hover:bg-[#E2C07C]/10 text-sm text-[#E2C07C] transition"
            >
              Reset Filter
            </button>
          )}

          {/* Toggle View */}
          <div className="ml-auto flex gap-2">
            <button
              onClick={() => setView("grid")}
              className={`p-3 rounded-lg border ${view === "grid"
                ? "bg-[#E2C07C]/20 border-[#E2C07C]"
                : "border-[#E2C07C]/30 hover:border-[#E2C07C]/60"}`}
            >
              <LayoutGrid className="w-4 h-4 text-[#E2C07C]" />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-3 rounded-lg border ${view === "list"
                ? "bg-[#E2C07C]/20 border-[#E2C07C]"
                : "border-[#E2C07C]/30 hover:border-[#E2C07C]/60"}`}
            >
              <List className="w-4 h-4 text-[#E2C07C]" />
            </button>
          </div>
        </div>

        {/* === CONTENT === */}
        {currentItems.length > 0 ? (
          <motion.div
            layout
            className={view === "grid" ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col gap-6"}
          >
            {currentItems.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`rounded-2xl border border-[#E2C07C]/20 bg-white/5 backdrop-blur-sm hover:border-[#E2C07C]/50 transition-all duration-500 overflow-hidden ${view === "list" ? "flex gap-6 items-center p-4" : ""}`}
              >
                {/* Image */}
                <div className={`relative ${view === "grid" ? "w-full h-52" : "w-40 h-32 flex-shrink-0"}`}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>

                {/* Text */}
                <div className={`${view === "grid" ? "p-6" : "flex-1"}`}>
                  <h3 className="text-lg font-semibold text-white mb-1">{p.title}</h3>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-2">{p.desc}</p>

                  <div className="flex justify-between items-center text-xs text-[#E2C07C]">
                    <span>{p.category} • {p.tech}</span>
                    <Link
                      href={`/projects/${p.slug}`}
                      className="font-semibold hover:underline text-[#E2C07C]"
                    >
                      Lihat Detail →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 mb-3">No matching projects found.</p>
            <button
              onClick={resetFilter}
              className="px-4 py-2 rounded-lg border border-[#E2C07C] text-[#E2C07C] hover:bg-[#E2C07C]/10 text-sm transition"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* === PAGINATION === */}
        {filtered.length > perPage && (
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg border text-sm flex items-center gap-1 ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed border-gray-600 text-gray-500"
                    : "border-[#E2C07C]/40 text-[#E2C07C] hover:bg-[#E2C07C]/10"
                }`}
              >
                <ArrowLeft className="w-4 h-4" /> Prev
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => changePage(i + 1)}
                  className={`px-4 py-2 rounded-lg border text-sm transition ${
                    i + 1 === currentPage
                      ? "bg-[#E2C07C]/20 border-[#E2C07C] text-[#E2C07C]"
                      : "border-[#E2C07C]/20 text-gray-400 hover:border-[#E2C07C]/50 hover:text-[#E2C07C]"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg border text-sm flex items-center gap-1 ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed border-gray-600 text-gray-500"
                    : "border-[#E2C07C]/40 text-[#E2C07C] hover:bg-[#E2C07C]/10"
                }`}
              >
                Next <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-gray-500">
              Page {currentPage} of {totalPages}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
