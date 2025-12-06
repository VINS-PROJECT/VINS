"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Download,
  ChevronLeft,
  ChevronRight,
  Eye,
  LayoutGrid,
  Rows,
  Filter,
} from "lucide-react";
import { certificates } from "@/data/certificates"; // <-- RECOMMENDED: pindahkan data ke file terpisah

export default function CertificatePage() {
  const GOLD = "var(--accent)";

  // Last Updated Auto
  const lastUpdate = useMemo(() => {
    const dates = certificates.map((c) => new Date(c.issuedDate));
    const latest = new Date(Math.max(...dates));
    return latest.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }, []);

  const [category, setCategory] = useState("All");
  const [globalSearch, setGlobalSearch] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("desc");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const r = () => setMobileView(innerWidth < 768);
    r();
    addEventListener("resize", r);
    return () => removeEventListener("resize", r);
  }, []);

  const categories = [
    "All",
    "Web Development",
    "Back-End Development",
    "UI/UX",
    "Project Management",
    "Artificial Intelligence",
  ];

  const parseNumber = (v) => Number(v.replace(/\D/g, "")) || 0;

  const handleSort = (col) => {
    setSortOrder(sortColumn === col && sortOrder === "asc" ? "desc" : "asc");
    setSortColumn(col);
  };

  const resetAll = () => {
    setCategory("All");
    setGlobalSearch("");
    setSortColumn(null);
    setSortOrder("desc");
    setPage(1);
  };

  const processed = useMemo(() => {
    let arr = [...certificates];

    if (category !== "All") arr = arr.filter((c) => c.category === category);

    const q = globalSearch.trim().toLowerCase();
    if (q) {
      arr = arr.filter((c) =>
        [c.title, c.issuer, c.category, c.certificateId, c.year]
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    }

    if (sortColumn) {
      arr.sort((a, b) => {
        if (sortColumn === "duration") {
          const A = parseNumber(a.duration);
          const B = parseNumber(b.duration);
          return sortOrder === "asc" ? A - B : B - A;
        }
        const A = String(a[sortColumn]).toLowerCase();
        const B = String(b[sortColumn]).toLowerCase();
        return sortOrder === "asc" ? A.localeCompare(B) : B.localeCompare(A);
      });
    } else arr.sort((a, b) => b.year - a.year);

    return arr;
  }, [category, globalSearch, sortColumn, sortOrder]);

  const total = processed.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const paged = processed.slice((page - 1) * pageSize, page * pageSize);

  return (
    <main className="min-h-screen pt-28 pb-24 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(to right, ${GOLD}, var(--accent-dark))`,
            }}
          >
            Certificates
          </h1>
          <p className="text-xs opacity-60 mt-2">
            Last updated: {lastUpdate}
          </p>
        </motion.div>

        {/* CONTROLS */}
        <div className="mt-6 flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              value={globalSearch}
              onChange={(e) => {
                setGlobalSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search certificates..."
              className="px-4 py-3 rounded-xl text-sm w-full sm:w-72 bg-[var(--background)]/60 border border-[var(--border)] focus:border-[var(--accent)] outline-none"
            />

            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setPage(1);
              }}
              className="px-4 py-3 rounded-xl text-sm bg-[var(--background)]/60 border border-[var(--border)]"
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            {/* View Toggle */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileView((v) => !v)}
              className="px-4 py-3 rounded-xl bg-[var(--background)]/60 border border-[var(--border)] flex items-center gap-2"
            >
              {mobileView ? <LayoutGrid size={18} /> : <Rows size={18} />}
              View
            </motion.button>
          </div>

          <div className="flex gap-3">
            <FilterBtn label="Reset" onClick={resetAll} />
          </div>
        </div>

        {/* TABLE VIEW */}
        {!mobileView ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 overflow-x-auto
            rounded-2xl border border-[var(--border)]
            backdrop-blur-xl bg-[var(--background)]/50 shadow-lg"
          >
            <table className="min-w-full text-sm">
              <thead>
                <tr>
                  <Th label="Title" col="title" {...{ sortColumn, sortOrder, handleSort }} />
                  <Th label="Issuer" col="issuer" {...{ sortColumn, sortOrder, handleSort }} />
                  <Th label="Year" col="year" {...{ sortColumn, sortOrder, handleSort }} />
                  <Th label="Duration" col="duration" {...{ sortColumn, sortOrder, handleSort }} />
                  <Th label="Category" col="category" {...{ sortColumn, sortOrder, handleSort }} />
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {paged.map((c, i) => (
                  <motion.tr
                    key={c.id}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border-b border-[var(--border)] hover:bg-[var(--accent)]/8 transition"
                  >
                    <Td>{c.title}</Td>
                    <Td>{c.issuer}</Td>
                    <Td>{c.year}</Td>
                    <Td>{c.duration}</Td>
                    <Td>{c.category}</Td>
                    <Td center>
                      <ActionRow c={c} />
                    </Td>
                  </motion.tr>
                ))}
                {paged.length === 0 && (
                  <tr>
                    <Td center colSpan={6} className="py-6 opacity-60">
                      No certificates found.
                    </Td>
                  </tr>
                )}
              </tbody>
            </table>
          </motion.div>
        ) : (
          /* CARD VIEW */
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paged.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-5 rounded-2xl border border-[var(--border)]
                backdrop-blur-xl bg-[var(--background)]/50 shadow-lg"
              >
                <h3 className="font-semibold">{c.title}</h3>
                <p className="opacity-70 text-sm">
                  {c.issuer} • {c.year}
                </p>
                <p className="opacity-60 text-xs mt-1">
                  {c.duration} • {c.category}
                </p>
                <div className="mt-4">
                  <ActionRow c={c} row />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* PAGINATION */}
        <Pagination {...{ page, totalPages, setPage }} total={total} pageSize={pageSize} />

      </div>
    </main>
  );
}

/* ==== SUBS ==== */

function Th({ label, col, sortColumn, sortOrder, handleSort }) {
  const active = sortColumn === col;
  return (
    <th
      onClick={() => handleSort(col)}
      className="p-4 cursor-pointer select-none"
    >
      <span className={`${active ? "text-[var(--accent)]" : "opacity-60"} hover:opacity-100`}>
        {label}
        {active ? (sortOrder === "asc" ? " ▲" : " ▼") : ""}
      </span>
    </th>
  );
}

function Td({ children, center }) {
  return (
    <td className={`p-4 ${center ? "text-center" : ""}`}>
      {children}
    </td>
  );
}

function ActionRow({ c }) {
  return (
    <div className="flex justify-center gap-2">
      <ActionBtn onClick={() => window.open(c.pdf, "_blank")} primary>
        <Download size={16} />
      </ActionBtn>

      <Link href={`/vins-plus/certificate/${c.id}`}>
        <ActionBtn>
          <Eye size={16} />
        </ActionBtn>
      </Link>
    </div>
  );
}

function ActionBtn({ children, primary, ...props }) {
  return (
    <button
      {...props}
      className={`
        w-9 h-9 flex items-center justify-center rounded-xl
        transition shadow
        ${primary
          ? "bg-[var(--accent)] text-black hover:brightness-90"
          : "bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20"}
      `}
    >
      {children}
    </button>
  );
}

function FilterBtn({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-3 rounded-xl bg-[var(--accent)]/15 text-[var(--accent)]
      border border-[var(--accent)]/30 hover:bg-[var(--accent)] hover:text-black transition"
    >
      <Filter size={16} /> {label}
    </button>
  );
}

function Pagination({ page, totalPages, setPage, total, pageSize }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4 opacity-75">
      <span className="text-sm">
        Showing {(page - 1) * pageSize + 1} – {Math.min(page * pageSize, total)} of {total}
      </span>

      <div className="flex gap-2">
        <PaginationBtn disabled={page === 1} onClick={() => setPage(1)}>First</PaginationBtn>
        <PaginationBtn disabled={page === 1} onClick={() => setPage(page - 1)}>
          <ChevronLeft size={16} />
        </PaginationBtn>

        <span className="px-4 py-2 rounded-xl border border-[var(--accent)]/40 text-[var(--accent)]">
          {page}/{totalPages}
        </span>

        <PaginationBtn disabled={page === totalPages} onClick={() => setPage(page + 1)}>
          <ChevronRight size={16} />
        </PaginationBtn>
        <PaginationBtn disabled={page === totalPages} onClick={() => setPage(totalPages)}>
          Last
        </PaginationBtn>
      </div>
    </div>
  );
}

function PaginationBtn({ children, disabled, onClick }) {
  return (
    <motion.button
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      disabled={disabled}
      onClick={onClick}
      className={`px-3 py-2 rounded-xl border border-[var(--border)]
        ${disabled ? "opacity-35 cursor-not-allowed" :
        "hover:border-[var(--accent)] hover:text-[var(--accent)]"}`
      }
    >
      {children}
    </motion.button>
  );
}
