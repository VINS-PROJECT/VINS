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

/* ================= WAVE HIGHLIGHT ================= */
function WaveHighlight({ children }) {
  return (
    <span className="relative inline-block leading-tight">
      <span
        className="relative z-10 bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--accent) 10%, var(--accent-dark) 90%)",
          WebkitTextFillColor: "transparent",
        }}
      >
        {children}
      </span>
      <svg
        className="absolute left-0 bottom-0 w-full h-[8px]"
        viewBox="0 0 200 20"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 10 Q 25 6 50 10 T 100 10 T 150 10 T 200 10"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={{ pathOffset: [0, 1] }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
        />
      </svg>
    </span>
  );
}

/* ================= UTIL ================= */
const debounce = (fn, delay = 300) => {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
};

export default function ProjectsPage() {
  const projects = projectsData;

  const btnStyle =
    "inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300";

  /* ================= LAST UPDATE ================= */
  const lastUpdate = useMemo(() => {
    const dates = projects.map((p) =>
      new Date(p.updatedAt || `${p.year}-01-01`).getTime()
    );
    return new Date(Math.max(...dates)).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }, [projects]);

  /* ================= STATE ================= */
  const [searchInput, setSearchInput] = useState("");
  const [globalSearch, setGlobalSearch] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("desc");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [cardView, setCardView] = useState(false);
  const [loading, setLoading] = useState(false);

  /* ================= DEBOUNCED SEARCH ================= */
  const debouncedSearch = useMemo(
    () =>
      debounce((v) => {
        setGlobalSearch(v);
        setPage(1);
      }, 300),
    []
  );

  useEffect(() => {
    debouncedSearch(searchInput);
  }, [searchInput, debouncedSearch]);

  const handleSort = (col) => {
    setSortOrder(sortColumn === col && sortOrder === "asc" ? "desc" : "asc");
    setSortColumn(col);
  };

  const resetAll = () => {
    setSearchInput("");
    setGlobalSearch("");
    setSortColumn(null);
    setSortOrder("desc");
    setPage(1);
  };

  /* ================= FILTER + SORT ================= */
  const processed = useMemo(() => {
    setLoading(true);

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
        let A = sortColumn === "tech" ? a.tech.join(", ") : a[sortColumn];
        let B = sortColumn === "tech" ? b.tech.join(", ") : b[sortColumn];
        if (typeof A === "string") A = A.toLowerCase();
        if (typeof B === "string") B = B.toLowerCase();
        return sortOrder === "asc" ? (A > B ? 1 : -1) : A < B ? 1 : -1;
      });
    } else {
      arr.sort((a, b) => b.year - a.year);
    }

    setTimeout(() => setLoading(false), 200);
    return arr;
  }, [projects, globalSearch, sortColumn, sortOrder]);

  /* ================= PAGINATION ================= */
  const total = processed.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const paged = processed.slice((page - 1) * pageSize, page * pageSize);

  return (
    <main className="relative min-h-screen pt-28 pb-24 bg-[var(--background)] text-[var(--foreground)]">
      {/* BACKDROP */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 25% 20%, var(--accent)/0.12, transparent 60%),
            radial-gradient(circle at 80% 80%, var(--accent-dark)/0.12, transparent 60%)
          `,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold">
            <WaveHighlight>Projects</WaveHighlight>
          </h1>
          <p className="text-sm opacity-65 mt-3">
            Last updated: {lastUpdate}
          </p>
        </motion.div>

        {/* CONTROLS */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 mb-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search projects…"
              className="
                px-4 py-3 rounded-xl text-sm
                backdrop-blur-xl
                bg-white/70 dark:bg-white/5
                border border-black/10 dark:border-white/10
                focus:border-[var(--accent)] outline-none
              "
            />

            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={resetAll}
              className={`${btnStyle} bg-[var(--accent)] text-black`}
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
              className="
                px-3 py-2 rounded-xl text-sm
                backdrop-blur-xl
                bg-white/70 dark:bg-white/5
                border border-black/10 dark:border-white/10
              "
            >
              {[9, 12, 15, 20].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>

            <button
              onClick={() => setCardView((v) => !v)}
              className={`${btnStyle}
                backdrop-blur-xl
                bg-white/70 dark:bg-white/5
                border border-black/10 dark:border-white/10
              `}
            >
              {cardView ? <Rows size={16} /> : <LayoutGrid size={16} />}
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="skeleton"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {Array.from({ length: pageSize }).map((_, i) => (
                <div
                  key={i}
                  className="h-[160px] rounded-2xl bg-black/5 dark:bg-white/5 animate-pulse"
                />
              ))}
            </motion.div>
          ) : !cardView ? (
            /* ================= TABLE VIEW ================= */
            <motion.div
              key="table"
              className="
                overflow-x-auto rounded-2xl
                backdrop-blur-xl
                bg-white/70 dark:bg-white/5
                border border-black/10 dark:border-white/10
                shadow-xl
              "
            >
              <table className="min-w-full text-sm">
                <thead
                  className="
                    sticky top-0 z-10
                    bg-white/80 dark:bg-[var(--background)]/80
                    backdrop-blur-xl
                    border-b border-black/10 dark:border-white/10
                  "
                >
                  <tr>
                    <Th col="title" label="Title" {...{ sortColumn, sortOrder, handleSort }} />
                    <Th col="category" label="Category" {...{ sortColumn, sortOrder, handleSort }} />
                    <Th col="tech" label="Tech" {...{ sortColumn, sortOrder, handleSort }} />
                    <Th col="year" label="Year" {...{ sortColumn, sortOrder, handleSort }} />
                    <th className="p-4 text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {paged.map((p) => (
                    <tr
                      key={p.id}
                      className="
                        border-b border-black/5 dark:border-white/10
                        hover:bg-black/5 dark:hover:bg-white/5
                        transition
                      "
                    >
                      <td className="p-4 font-medium">{p.title}</td>
                      <td className="p-4 opacity-80">{p.category}</td>
                      <td className="p-4">
                        <div className="flex flex-wrap gap-1">
                          {p.tech.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="
                                px-2 py-[2px] rounded-lg text-[11px]
                                bg-[var(--accent)]/15 dark:bg-[var(--accent)]/20
                                text-[var(--accent)]
                              "
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
                          className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--accent)] text-black"
                        >
                          <Eye size={16} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          ) : (
            /* ================= CARD VIEW ================= */
            <motion.div
              key="card"
              className="grid sm:grid-cols-2 gap-6"
            >
              {paged.map((p) => (
                <motion.article
                  key={p.id}
                  whileHover={{ y: -6 }}
                  className="
                    p-6 rounded-2xl
                    backdrop-blur-xl
                    bg-white/70 dark:bg-white/5
                    border border-black/10 dark:border-white/10
                    shadow-lg transition
                    hover:bg-black/5 dark:hover:bg-white/5
                  "
                >
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <p className="text-xs opacity-60">
                    {p.category} • {p.year}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-2">
                    {p.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="
                          px-2 py-[2px] rounded-lg text-[11px]
                          bg-[var(--accent)]/15 dark:bg-[var(--accent)]/20
                          text-[var(--accent)]
                        "
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/vins-plus/project/${p.slug}`}
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--accent)] text-black text-sm font-semibold"
                  >
                    <Eye size={14} /> View
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* PAGINATION */}
        {total > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between mt-10 gap-4">
            <p className="text-xs opacity-65">
              Showing {(page - 1) * pageSize + 1} –{" "}
              {Math.min(page * pageSize, total)} of {total}
            </p>

            <div className="flex items-center gap-2">
              <PaginationBtn disabled={page === 1} onClick={() => setPage(1)}>
                First
              </PaginationBtn>
              <PaginationBtn disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
                <ChevronLeft />
              </PaginationBtn>

              <span className="px-4 py-2 rounded-lg font-semibold text-[var(--accent)] border border-[var(--accent)]/40">
                {page}/{totalPages}
              </span>

              <PaginationBtn disabled={page === totalPages} onClick={() => setPage((p) => p + 1)}>
                <ChevronRight />
              </PaginationBtn>
              <PaginationBtn disabled={page === totalPages} onClick={() => setPage(totalPages)}>
                Last
              </PaginationBtn>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

/* ================= SMALL COMPONENTS ================= */
function Th({ label, col, sortColumn, sortOrder, handleSort }) {
  const active = sortColumn === col;
  const Icon = !active ? ArrowUpDown : sortOrder === "asc" ? ArrowUp : ArrowDown;

  return (
    <th
      onClick={() => handleSort(col)}
      aria-sort={
        !active ? "none" : sortOrder === "asc" ? "ascending" : "descending"
      }
      className="p-4 cursor-pointer select-none group"
    >
      <div className="flex items-center gap-2">
        {label}
        <Icon
          size={14}
          className={`${
            active
              ? "text-[var(--accent)]"
              : "opacity-40 group-hover:opacity-80"
          } transition`}
        />
      </div>
    </th>
  );
}

function PaginationBtn({ children, onClick, disabled }) {
  return (
    <motion.button
      whileTap={{ scale: disabled ? 1 : 0.92 }}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      className="
        px-3 py-2 rounded-xl text-sm
        backdrop-blur-xl
        bg-white/70 dark:bg-white/5
        border border-black/10 dark:border-white/10
        hover:text-[var(--accent)] hover:border-[var(--accent)]/60
        disabled:opacity-40 disabled:cursor-not-allowed
      "
    >
      {children}
    </motion.button>
  );
}
