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
  LayoutGrid,
  Rows,
} from "lucide-react";
import { projectsData } from "@/data/projects";

export default function ProjectsPage() {
  const projects = projectsData;

  const btnStyle =
    "inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 focus:outline-none";

  // LAST UPDATED AUTO
  const lastUpdate = useMemo(() => {
    const dates = projects.map((p) =>
      new Date(p.updatedAt || `${p.year}-11-21`).getTime()
    );
    return new Date(Math.max(...dates)).toLocaleDateString("id-ID", {
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
    setSortOrder(sortColumn === col && sortOrder === "asc" ? "desc" : "asc");
    setSortColumn(col);
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

    const q = globalSearch.trim().toLowerCase();
    if (q) {
      arr = arr.filter((p) =>
        [p.title, p.desc, p.category, p.year, p.tech.join(", ")].some((f) =>
          String(f).toLowerCase().includes(q)
        )
      );
    }

    if (sortColumn) {
      arr.sort((a, b) => {
        let A = a[sortColumn];
        let B = b[sortColumn];

        if (sortColumn === "tech") {
          A = a.tech.join(", ");
          B = b.tech.join(", ");
        }
        if (typeof A === "string") A = A.toLowerCase();
        if (typeof B === "string") B = B.toLowerCase();

        return sortOrder === "asc" ? (A > B ? 1 : -1) : A < B ? 1 : -1;
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
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--accent), var(--accent-dark))",
          }}
        >
          Projects
        </motion.h1>

        <p className="text-center text-sm opacity-65 mb-8">
          Last updated: {lastUpdate}
        </p>

        {/* CONTROLS */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              value={globalSearch}
              onChange={(e) => {
                setGlobalSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search projects..."
              className="px-4 py-3 rounded-xl text-sm bg-[var(--background)]/60 backdrop-blur-xl border border-[var(--border)] focus:border-[var(--accent)] outline-none"
            />

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={resetAll}
              className={`${btnStyle} bg-[var(--accent)] text-black hover:opacity-90 shadow-md`}
            >
              <RefreshCcw size={16} /> Reset
            </motion.button>
          </div>

          <div className="flex items-center gap-3">
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPage(1);
              }}
              className="px-3 py-2 rounded-xl text-sm bg-[var(--background)]/60 border border-[var(--border)] backdrop-blur-xl"
            >
              {[9, 12, 15, 20].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileView((v) => !v)}
              className={`${btnStyle} bg-[var(--background)]/60 border border-[var(--border)] hover:border-[var(--accent)]`}
            >
              {mobileView ? <Rows size={16} /> : <LayoutGrid size={16} />}
            </motion.button>
          </div>
        </div>

        {/* TABLE VIEW */}
        {!mobileView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
            overflow-x-auto rounded-2xl border border-[var(--border)]
            backdrop-blur-xl bg-[var(--background)]/60 shadow-lg"
          >
            <table className="min-w-full text-sm">
              <thead className="border-b border-[var(--border)]">
                <tr>
                  <Th col="title" label="Title" {...{ sortColumn, sortOrder, handleSort }} />
                  <Th col="category" label="Category" {...{ sortColumn, sortOrder, handleSort }} />
                  <Th col="tech" label="Tech" {...{ sortColumn, sortOrder, handleSort }} />
                  <Th col="year" label="Year" {...{ sortColumn, sortOrder, handleSort }} />
                  <th className="p-4 text-center">Action</th>
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
                    className="border-b border-[var(--border)] hover:bg-[var(--accent)]/12 transition"
                  >
                    <td className="p-4 font-medium">{p.title}</td>
                    <td className="p-4 opacity-80">{p.category}</td>
                    <td className="p-4 opacity-70">
                      <div className="flex flex-wrap gap-1">
                        {p.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-[2px] rounded-lg text-[11px]
                            bg-[var(--accent)]/15 text-[var(--accent)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-4">{p.year}</td>

                    <td className="p-4 text-center">
                      <Link
                        href={`/vins-plus/project/${p.slug}`}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--accent)] text-black hover:opacity-90 transition"
                      >
                        <Eye size={16} />
                      </Link>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}

        {/* CARD VIEW */}
        {mobileView && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {paged.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl border border-[var(--border)]
                  backdrop-blur-xl bg-[var(--background)]/60
                  shadow-[0_6px_18px_-6px_rgba(0,0,0,0.25)] transition"
              >
                <h3 className="text-lg font-bold mb-1">{p.title}</h3>
                <p className="text-xs opacity-60">
                  {p.category} • {p.year}
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {p.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-[2px] rounded-lg text-[11px]
                      bg-[var(--accent)]/15 text-[var(--accent)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/vins-plus/project/${p.slug}`}
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--accent)] text-black text-sm font-semibold hover:opacity-90 transition"
                >
                  <Eye size={14} /> View
                </Link>
              </motion.article>
            ))}
          </div>
        )}

        {/* PAGINATION */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4">
          <p className="text-xs opacity-65">
            Showing {(page - 1) * pageSize + 1} – {Math.min(page * pageSize, total)} of {total}
          </p>

          <div className="flex items-center gap-2">
            <PaginationBtn label="First" disabled={page === 1} onClick={() => setPage(1)} />
            <PaginationBtn label={<ChevronLeft />} disabled={page === 1} onClick={() => setPage((p) => p - 1)} />
            <span className="px-4 py-2 rounded-lg font-semibold text-[var(--accent)] border border-[var(--accent)]/40">
              {page}/{totalPages}
            </span>
            <PaginationBtn label={<ChevronRight />} disabled={page === totalPages} onClick={() => setPage((p) => p + 1)} />
            <PaginationBtn label="Last" disabled={page === totalPages} onClick={() => setPage(totalPages)} />
          </div>
        </div>
      </div>
    </main>
  );
}

// ==== SORT HEADER ====
function Th({ label, col, sortColumn, sortOrder, handleSort }) {
  const active = sortColumn === col;
  const Icon = !active ? ArrowUpDown : sortOrder === "asc" ? ArrowUp : ArrowDown;

  return (
    <th
      onClick={() => handleSort(col)}
      className="p-4 cursor-pointer select-none group"
    >
      <div className="flex items-center gap-2">
        {label}
        <Icon
          size={14}
          className={`${active ? "text-[var(--accent)]" : "opacity-40 group-hover:opacity-80"} transition`}
        />
      </div>
    </th>
  );
}

// ==== PAGINATION BUTTON ====
function PaginationBtn({ label, onClick, disabled }) {
  return (
    <motion.button
      whileTap={{ scale: disabled ? 1 : 0.92 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-3 py-2 rounded-xl border border-[var(--border)]
        bg-[var(--background)]/60 backdrop-blur-xl text-sm
        ${disabled ? "opacity-40 cursor-not-allowed" : "hover:text-[var(--accent)] hover:border-[var(--accent)] transition"}
      `}
    >
      {label}
    </motion.button>
  );
}
