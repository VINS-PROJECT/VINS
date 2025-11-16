"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RefreshCcw } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function ProjectsPage() {
  const projects = projectsData;

  const GOLD = "var(--accent)";
  const BG = "var(--background)";
  const FG = "var(--foreground)";
  const CARD = "var(--card)";
  const BORDER = "var(--border)";

  const btnStyle = {
    background: GOLD,
    color: "#000",
    padding: "10px 22px",
    borderRadius: "12px",
    fontWeight: 600,
    border: "none",
    boxShadow: "0 4px 14px rgba(216,199,154,0.25)",
  };

  // ==================================================
  // ⭐ AUTO LAST UPDATED
  // ==================================================
  const lastUpdate = useMemo(() => {
    const dates = projects.map((p) => new Date(p.updatedAt || `${p.year}-11-15`).getTime());
    const latest = new Date(Math.max(...dates));

    return latest.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }, [projects]);

  // ==================================================
  // ⭐ AUTO REFRESH INDICATOR
  // ==================================================
  const [counter, setCounter] = useState(15);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((c) => (c > 0 ? c - 1 : 15));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // ==================================================
  // UI STATE
  // ==================================================
  const [globalSearch, setGlobalSearch] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("desc");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // SORT
  const handleSort = (col) => {
    if (sortColumn === col) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(col);
      setSortOrder("asc");
    }
  };

  // RESET
  const resetAll = () => {
    setGlobalSearch("");
    setSortColumn(null);
    setSortOrder("desc");
    setPage(1);
  };

  // ==================================================
  // ⭐ FILTER + SORT
  // ==================================================
  const processed = useMemo(() => {
    let arr = [...projects];

    if (globalSearch.trim() !== "") {
      const q = globalSearch.toLowerCase();
      arr = arr.filter((p) =>
        [p.title, p.desc, p.category, p.year, p.tech.join(", ")].some((f) =>
          String(f).toLowerCase().includes(q)
        )
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

  // ==================================================
  // ⭐ PAGINATION
  // ==================================================
  const total = processed.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const paged = processed.slice((page - 1) * pageSize, page * pageSize);

  return (
    <main
      className="
        min-h-screen pt-28 pb-24
        bg-[var(--background)]
        text-[var(--foreground)]
        transition-colors
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h1
          className="
            text-4xl md:text-5xl font-extrabold text-center mb-4
            bg-clip-text text-transparent
          "
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--accent), var(--accent-dark))",
          }}
        >
          Projects
        </h1>

        {/* ⭐ LAST UPDATED */}
        <p className="text-center text-sm opacity-60 mb-1">
          Last updated: {lastUpdate}
        </p>

        {/* ⭐ AUTO REFRESH INDICATOR */}
        <p className="text-center text-xs opacity-40 mb-10">
          Auto refresh indicator: refreshing in {counter}s
        </p>

        {/* FILTER BAR */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

          <div className="flex items-center gap-4">
            {/* SEARCH */}
            <input
              value={globalSearch}
              onChange={(e) => {
                setGlobalSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search projects..."
              className="
                px-4 py-3 rounded-xl text-sm w-72
                bg-[var(--card)]
                border border-[var(--border)]
                text-[var(--foreground)]
                focus:border-[var(--accent)]
                transition
              "
            />

            {/* RESET */}
            <button
              onClick={resetAll}
              style={btnStyle}
              className="flex items-center gap-2 hover:brightness-110 transition"
            >
              <RefreshCcw className="w-4 h-4" />
              Reset
            </button>
          </div>

          {/* ROWS PER PAGE */}
          <div className="flex items-center gap-3">
            <label className="text-sm text-[var(--foreground)]/70">Rows:</label>

            <select
              className="
                px-3 py-2 rounded-xl text-sm
                bg-[var(--card)]
                border border-[var(--border)]
                text-[var(--foreground)]
                transition
              "
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPage(1);
              }}
            >
              {[10, 15, 20, 50].map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>

        </div>

        {/* TABLE */}
        <div
          className="
            overflow-x-auto rounded-xl
            border border-[var(--border)]
            bg-[var(--card)]
            backdrop-blur-md
            shadow-md
          "
        >
          <table className="min-w-full text-left">
            <thead
              className="
                border-b border-[var(--border)]
                bg-[var(--card)]
              "
            >
              <tr>
                {[
                  { col: "title", label: "Title" },
                  { col: "category", label: "Category" },
                  { col: "tech", label: "Technologies" },
                  { col: "year", label: "Year" },
                ].map((h) => (
                  <th
                    key={h.col}
                    className="p-4 cursor-pointer select-none text-[var(--foreground)]"
                    onClick={() => handleSort(h.col)}
                  >
                    <div className="flex items-center gap-2">
                      {h.label}
                      <span className="text-xs opacity-70">
                        {sortColumn === h.col
                          ? sortOrder === "asc"
                            ? "▲"
                            : "▼"
                          : ""}
                      </span>
                    </div>
                  </th>
                ))}

                <th className="p-4 text-[var(--foreground)]">Action</th>
              </tr>
            </thead>

            <tbody>
              {paged.map((p, i) => (
                <motion.tr
                  key={p.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  viewport={{ once: true }}
                  className="
                    border-b border-[var(--border)]
                    hover:bg-[var(--accent)]/10
                    transition
                  "
                >
                  <td className="p-4 font-medium">{p.title}</td>
                  <td className="p-4">{p.category}</td>
                  <td className="p-4 text-sm text-[var(--foreground)]/60">
                    {p.tech.join(", ")}
                  </td>
                  <td className="p-4">{p.year}</td>

                  <td className="p-4">
                    <Link
                      href={`/projects/${p.slug}`}
                      style={btnStyle}
                      className="inline-flex text-sm hover:brightness-110 transition"
                    >
                      Detail
                    </Link>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="flex items-center justify-between mt-6">

          <div className="text-sm text-[var(--foreground)]/70">
            Showing {((page - 1) * pageSize) + 1} —{" "}
            {Math.min(page * pageSize, total)} of {total}
          </div>

          <div className="flex items-center gap-3">
            {[
              { label: "First", action: () => setPage(1), disabled: page === 1 },
              { label: "Prev", action: () => setPage((p) => Math.max(1, p - 1)), disabled: page === 1 },
              { label: "Next", action: () => setPage((p) => Math.min(totalPages, p + 1)), disabled: page === totalPages },
              { label: "Last", action: () => setPage(totalPages), disabled: page === totalPages },
            ].map((btn, i) => (
              <button
                key={i}
                onClick={btn.action}
                disabled={btn.disabled}
                className="px-5 py-2 rounded-xl font-semibold transition-all"
                style={{
                  background: GOLD,
                  color: "#000",
                  opacity: btn.disabled ? 0.6 : 1,
                  cursor: btn.disabled ? "not-allowed" : "pointer",
                  boxShadow: btn.disabled
                    ? "none"
                    : "0 4px 14px rgba(216,199,154,0.35)",
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
