"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  RefreshCcw,
  Eye,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { projectsData } from "@/data/projects";

export default function ProjectsPage() {
  const projects = projectsData;

  const btnStyle = `inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold shadow-sm transition-all`;

  // =========================================
  // LAST UPDATED
  // =========================================
  const lastUpdate = useMemo(() => {
    const dates = projects.map((p) =>
      new Date(p.updatedAt || `${p.year}-11-21`).getTime()
    );
    const latest = new Date(Math.max(...dates));

    return latest.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }, [projects]);

  // UI STATES
  const [globalSearch, setGlobalSearch] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("desc");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const onResize = () => setMobileView(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleSort = (col) => {
    if (sortColumn === col) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(col);
      setSortOrder("asc");
    }
  };

  const resetAll = () => {
    setGlobalSearch("");
    setSortColumn(null);
    setSortOrder("desc");
    setPage(1);
  };

  // FILTER + SORT
  const processed = useMemo(() => {
    let arr = [...projects];

    if (globalSearch.trim()) {
      const q = globalSearch.toLowerCase();
      arr = arr.filter((p) =>
        [
          p.title,
          p.desc,
          p.category,
          p.year,
          p.tech.join(", "),
        ].some((f) => String(f).toLowerCase().includes(q))
      );
    }

    if (sortColumn) {
      arr.sort((a, b) => {
        const A =
          sortColumn === "tech"
            ? a.tech.join(", ").toLowerCase()
            : String(a[sortColumn]).toLowerCase();

        const B =
          sortColumn === "tech"
            ? b.tech.join(", ").toLowerCase()
            : String(b[sortColumn]).toLowerCase();

        if (A < B) return sortOrder === "asc" ? -1 : 1;
        if (A > B) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
    } else {
      arr.sort((a, b) => b.year - a.year);
    }

    return arr;
  }, [projects, globalSearch, sortColumn, sortOrder]);

  // PAGINATION
  const total = processed.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const paged = processed.slice((page - 1) * pageSize, page * pageSize);

  return (
    <main className="min-h-screen pt-28 pb-24 bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-3 text-center bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--accent), var(--accent-dark))",
          }}
        >
          Projects
        </motion.h1>

        <p className="text-center text-sm opacity-60 mb-8">
          Last updated: {lastUpdate}
        </p>

        {/* CONTROLS */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div className="flex gap-3 flex-col sm:flex-row items-stretch">
            <input
              value={globalSearch}
              onChange={(e) => {
                setGlobalSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search projects..."
              className="px-4 py-3 rounded-xl text-sm w-full sm:w-72 bg-[var(--card)] border border-[var(--border)] focus:border-[var(--accent)] outline-none"
            />

            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={resetAll}
              className={`${btnStyle} bg-[var(--accent)] text-black hover:opacity-90`}
            >
              <RefreshCcw className="w-4 h-4" /> Reset
            </motion.button>
          </div>

          <div className="flex items-center gap-3">
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPage(1);
              }}
              className="px-3 py-2 rounded-xl text-sm bg-[var(--card)] border border-[var(--border)] w-24"
            >
              {[10, 15, 20, 50].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>

            <button
              onClick={() => setMobileView((v) => !v)}
              className={`sm:hidden ${btnStyle} bg-[var(--card)] hover:border-[var(--accent)] border border-[var(--border)]`}
            >
              {mobileView ? "Table view" : "Card view"}
            </button>
          </div>
        </div>

        {/* TABLE VIEW */}
        {!mobileView ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="overflow-x-auto rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-md"
          >
            <table className="min-w-full text-sm sm:text-base">
              <thead className="border-b border-[var(--border)] bg-[var(--card)]">
                <tr>
                  <Th col="title" label="Title" sortColumn={sortColumn} sortOrder={sortOrder} onSort={handleSort} />
                  <Th col="category" label="Category" sortColumn={sortColumn} sortOrder={sortOrder} onSort={handleSort} />
                  <Th col="tech" label="Tech" sortColumn={sortColumn} sortOrder={sortOrder} onSort={handleSort} />
                  <Th col="year" label="Year" sortColumn={sortColumn} sortOrder={sortOrder} onSort={handleSort} />
                  <th className="p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {paged.map((p, i) => (
                  <motion.tr
                    key={p.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.03 }}
                    viewport={{ once: true }}
                    className="border-b border-[var(--border)] hover:bg-[var(--accent)]/10 transition"
                  >
                    <td className="p-4 font-medium">{p.title}</td>
                    <td className="p-4 opacity-80">{p.category}</td>
                    <td className="p-4 opacity-70">{p.tech.join(", ")}</td>
                    <td className="p-4">{p.year}</td>

                    <td className="p-4">
                      <Link
                        href={`/vins-plus/project/${p.slug}`}
                        className={`${btnStyle} bg-[var(--accent)]/10 hover:bg-[var(--accent)] hover:text-black`}
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        ) : (
          /* CARD VIEW */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {paged.map((p) => (
              <motion.article
                key={p.id}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 shadow-lg hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all"
              >
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="text-sm opacity-70 mt-1">
                  {p.category} • {p.year}
                </p>
                <p className="text-xs opacity-60 mt-2 line-clamp-2">
                  {p.tech.join(", ")}
                </p>

                <Link
                  href={`/vins-plus/project/${p.slug}`}
                  className={`mt-4 inline-flex ${btnStyle} bg-[var(--accent)]/10 hover:bg-[var(--accent)] hover:text-black`}
                >
                  <Eye className="w-4 h-4" /> View
                </Link>
              </motion.article>
            ))}
          </div>
        )}

        {/* PAGINATION */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-7 gap-4">
          <p className="text-sm opacity-70">
            Showing {(page - 1) * pageSize + 1} –{" "}
            {Math.min(page * pageSize, total)} of {total}
          </p>

          <div className="flex items-center gap-2">
            <PaginationBtn label="First" disabled={page === 1} onClick={() => setPage(1)} />
            <PaginationBtn label={<ChevronLeft />} disabled={page === 1} onClick={() => setPage((p) => p - 1)} />

            <span className="px-4 py-2 rounded-lg font-semibold bg-[var(--accent)]/20 border border-[var(--accent)]/40">
              {page} / {totalPages}
            </span>

            <PaginationBtn label={<ChevronRight />} disabled={page === totalPages} onClick={() => setPage((p) => p + 1)} />
            <PaginationBtn label="Last" disabled={page === totalPages} onClick={() => setPage(totalPages)} />
          </div>
        </div>
      </div>
    </main>
  );
}

function Th({ label, col, sortColumn, sortOrder, onSort }) {
  const active = sortColumn === col;
  const Icon = !active ? ArrowUpDown : sortOrder === "asc" ? ArrowUp : ArrowDown;

  return (
    <th
      onClick={() => onSort(col)}
      className="p-4 cursor-pointer select-none hover:text-[var(--accent)] transition group"
    >
      <div className="flex items-center gap-2">
        {label}
        <Icon size={15} strokeWidth={2} className={active ? "text-[var(--accent)]" : "opacity-40 group-hover:opacity-80"} />
      </div>
    </th>
  );
}

function PaginationBtn({ label, onClick, disabled }) {
  return (
    <motion.button
      whileTap={{ scale: disabled ? 1 : 0.9 }}
      onClick={onClick}
      disabled={disabled}
      className={`px-3 py-2 rounded-xl bg-[var(--card)] border border-[var(--border)]
      ${disabled ? "opacity-40 cursor-not-allowed" : "hover:border-[var(--accent)] hover:text-[var(--accent)] transition"}`}
    >
      {label}
    </motion.button>
  );
}
