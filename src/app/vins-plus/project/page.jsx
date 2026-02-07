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

  /* ================= META ================= */
  const lastUpdate = useMemo(() => {
    if (!projects.length) return "-";
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
  const [pageSize, setPageSize] = useState(8);
  const [cardView, setCardView] = useState(false);
  const [loading, setLoading] = useState(false);

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

  /* ================= FILTER ================= */
  const processed = useMemo(() => {
    setLoading(true);
    let arr = [...projects];
    const q = globalSearch.toLowerCase();

    if (q) {
      arr = arr.filter((p) =>
        [p.title, p.category, p.year, p.tech.join(" ")].some((f) =>
          String(f).toLowerCase().includes(q)
        )
      );
    }

    if (sortColumn) {
      arr.sort((a, b) => {
        const A =
          sortColumn === "tech" ? a.tech.join(",") : a[sortColumn];
        const B =
          sortColumn === "tech" ? b.tech.join(",") : b[sortColumn];
        return sortOrder === "asc"
          ? A > B
            ? 1
            : -1
          : A < B
          ? 1
          : -1;
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
  const paged = processed.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors">

      {/* ================= HEADER (VINS+) ================= */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="
            absolute inset-0
            bg-gradient-to-br
            from-[var(--accent)]/25
            via-[var(--accent)]/10
            to-transparent
            -skew-y-6
            origin-top-left
          "
        />
        <div
          aria-hidden
          className="
            absolute bottom-0 left-0 w-full h-24
            bg-gradient-to-t from-[var(--background)] to-transparent
          "
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative pt-32 pb-20 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Projects
          </h1>
          <span className="mt-2 block text-sm font-mono opacity-50">
            /vins+/project
          </span>
          <p className="mt-3 text-sm opacity-65">
            Last updated: {lastUpdate}
          </p>
        </motion.div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        {/* CONTROLS */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 mb-10">
          <div className="flex gap-3">
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search projects…"
              className="
                px-4 py-3 rounded-xl text-sm
                bg-[var(--card)]
                border border-[var(--border)]
                placeholder:text-[var(--foreground)]/40
                outline-none
                focus:border-[var(--accent)]
              "
            />

            <button
              onClick={resetAll}
              className="
                px-4 py-3 rounded-xl
                bg-[var(--accent)] text-black
                font-semibold
              "
            >
              <RefreshCcw size={16} />
            </button>
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
                bg-[var(--card)]
                border border-[var(--border)]
              "
            >
              {[8, 12, 16].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>

            <button
              onClick={() => setCardView((v) => !v)}
              className="
                p-3 rounded-xl
                bg-[var(--card)]
                border border-[var(--border)]
              "
            >
              {cardView ? <Rows size={16} /> : <LayoutGrid size={16} />}
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <AnimatePresence mode="wait">
          {!cardView ? (
            <motion.div
              key="table"
              className="
                overflow-x-auto rounded-3xl
                bg-[var(--card)]
                border border-[var(--border)]
                shadow-xl
              "
            >
              <table className="min-w-full text-sm">
                <thead className="border-b border-[var(--border)]">
                  <tr>
                    <Th col="title" label="Title" {...{ sortColumn, sortOrder, handleSort }} />
                    <Th col="category" label="Category" {...{ sortColumn, sortOrder, handleSort }} />
                    <Th col="year" label="Year" {...{ sortColumn, sortOrder, handleSort }} />
                    <th className="p-4 text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {paged.map((p) => (
                    <tr
                      key={p.id}
                      className="border-b border-[var(--border)] hover:bg-[var(--background)]/40"
                    >
                      <td className="p-4 font-medium">{p.title}</td>
                      <td className="p-4 opacity-80">{p.category}</td>
                      <td className="p-4">{p.year}</td>
                      <td className="p-4 text-center">
                        <Link
                          href={`/vins-plus/project/${p.slug}`}
                          className="inline-flex w-9 h-9 items-center justify-center rounded-lg bg-[var(--accent)] text-black"
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
            <motion.div
              key="cards"
              className="grid sm:grid-cols-2 gap-6"
            >
              {paged.map((p) => (
                <article
                  key={p.id}
                  className="
                    p-6 rounded-2xl
                    bg-[var(--card)]
                    border border-[var(--border)]
                    shadow-lg
                  "
                >
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <p className="text-xs opacity-60">
                    {p.category} • {p.year}
                  </p>

                  <Link
                    href={`/vins-plus/project/${p.slug}`}
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--accent)] text-black text-sm font-semibold"
                  >
                    <Eye size={14} /> View
                  </Link>
                </article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* PAGINATION */}
        <div className="flex justify-between items-center mt-10 text-sm">
          <span className="opacity-60">
            Page {page} / {totalPages}
          </span>

          <div className="flex gap-2">
            <PageBtn disabled={page === 1} onClick={() => setPage(page - 1)}>
              <ChevronLeft />
            </PageBtn>
            <PageBtn disabled={page === totalPages} onClick={() => setPage(page + 1)}>
              <ChevronRight />
            </PageBtn>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= SMALL ================= */
function Th({ label, col, sortColumn, sortOrder, handleSort }) {
  const active = sortColumn === col;
  const Icon = !active ? ArrowUpDown : sortOrder === "asc" ? ArrowUp : ArrowDown;

  return (
    <th onClick={() => handleSort(col)} className="p-4 cursor-pointer">
      <div className="flex items-center gap-2">
        {label}
        <Icon size={14} className={active ? "text-[var(--accent)]" : "opacity-40"} />
      </div>
    </th>
  );
}

function PageBtn({ children, onClick, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="
        px-3 py-2 rounded-xl
        bg-[var(--card)]
        border border-[var(--border)]
        disabled:opacity-40
      "
    >
      {children}
    </button>
  );
}
