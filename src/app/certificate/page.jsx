"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Download } from "lucide-react";
import { useTheme } from "next-themes";

export default function CertificatePage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const GOLD = "var(--accent)";

  const certificates = [
    { id: 1, title: "Front-End and Back-End Developer Training", issuer: "Baparekraf Digital Talent", year: 2024, issuedDate: "21 Juli 2024", certificateId: "DCD/BDT/GRAD/XXIV-7/D2024Y076", duration: "940 Jam", category: "Web Development", pdf: "public/File/BaparekrafTraining.pdf" },
    { id: 2, title: "Becoming an Expert Front-End Web Developer", issuer: "Dicoding Indonesia", year: 2024, issuedDate: "28 June 2024", certificateId: "JLX17KKQNX72", duration: "100 Jam", category: "Web Development", pdf: "public/File/DicodingFile1.pdf" },
    { id: 3, title: "Learning to Build Back-End Applications for Beginners", issuer: "Dicoding Indonesia", year: 2024, issuedDate: "1 June 2024", certificateId: "4EXGQ75O9ZRL", duration: "100 Jam", category: "Back-End Development", pdf: "public/File/DicodingFile2.pdf" },
    { id: 4, title: "Introduction to UX/UI Design", issuer: "Coursera", year: 2025, issuedDate: "8 November 2025", certificateId: "YQWIQGV43MOR", duration: "15 Jam", category: "UI/UX", pdf: "public/File/IBMFile1.pdf" },
    { id: 5, title: "Project Initiation: Starting a Successful Project", issuer: "Coursera", year: 2025, issuedDate: "12 November 2025", certificateId: "9H2APOYYVASX", duration: "17 Jam", category: "Project Management", pdf: "public/File/GoogleFile1.pdf" },
    { id: 6, title: "Foundations of Project Management", issuer: "Coursera", year: 2025, issuedDate: "15 November 2025", certificateId: "KDBFPBMTGBA7", duration: "12 Jam", category: "Project Management", pdf: "public/File/GoogleFile2.pdf" },
    { id: 7, title: "AI Foundations & Design Thinking", issuer: "Coursera", year: 2025, issuedDate: "10 November 2025", certificateId: "PJD3D9Q7WVXD", duration: "9 Jam", category: "Artificial Intelligence", pdf: "public/File/CourseFile1.pdf" },
    { id: 8, title: "Figma Pro Pt. 1: Auto Layouts, Grids & Components", issuer: "Coursera", year: 2025, issuedDate: "9 November 2025", certificateId: "VSEWK25EEQWD", duration: "7 Jam", category: "UI/UX", pdf: "public/File/SkillShareFile1.pdf" },
  ];

  /** 📌 AUTO-LAST UPDATE */
  const lastUpdate = useMemo(() => {
    const dates = certificates.map(c => new Date(c.issuedDate));
    const latest = new Date(Math.max(...dates));
    return latest.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }, []);

  const btnStyle = {
    background: GOLD,
    color: "#000",
    padding: "10px 22px",
    borderRadius: "12px",
    fontWeight: 600,
    boxShadow: "0 3px 12px rgba(216,199,154,0.25)",
  };

  // STATES
  const [category, setCategory] = useState("All");
  const [globalSearch, setGlobalSearch] = useState("");
  const [columnFilters, setColumnFilters] = useState({ title: "", issuer: "", year: "", duration: "", category: "" });
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("desc");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  const categories = ["All", "Web Development", "Back-End Development", "UX/UI Design", "Project Management", "Artificial Intelligence"];

  const parseNumber = (v) => Number(String(v).replace(/[^0-9]/g, "")) || 0;

  const handleSort = (col) => {
    if (sortColumn === col) setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    else {
      setSortColumn(col);
      setSortOrder("asc");
    }
  };

  const resetAll = () => {
    setCategory("All");
    setGlobalSearch("");
    setColumnFilters({ title: "", issuer: "", year: "", duration: "", category: "" });
    setSortColumn(null);
    setSortOrder("desc");
    setPage(1);
  };

  /** PROCESSING DATA */
  const processed = useMemo(() => {
    let arr = [...certificates];

    if (category !== "All") arr = arr.filter((c) => c.category === category);

    if (globalSearch.trim()) {
      const q = globalSearch.toLowerCase();
      arr = arr.filter((c) =>
        [c.title, c.issuer, c.year, c.duration, c.category, c.certificateId].some((f) =>
          String(f).toLowerCase().includes(q)
        )
      );
    }

    Object.entries(columnFilters).forEach(([col, val]) => {
      if (val) arr = arr.filter((c) => String(c[col]).toLowerCase().includes(val.toLowerCase()));
    });

    if (sortColumn) {
      arr.sort((a, b) => {
        if (sortColumn === "year") return sortOrder === "asc" ? a.year - b.year : b.year - a.year;

        if (sortColumn === "duration") {
          const na = parseNumber(a.duration);
          const nb = parseNumber(b.duration);
          return sortOrder === "asc" ? na - nb : nb - na;
        }

        return sortOrder === "asc"
          ? String(a[sortColumn]).localeCompare(String(b[sortColumn]))
          : String(b[sortColumn]).localeCompare(String(a[sortColumn]));
      });
    } else arr.sort((a, b) => b.year - a.year);

    return arr;
  }, [category, globalSearch, columnFilters, sortColumn, sortOrder]);

  const total = processed.length;
  const totalPages = Math.ceil(total / pageSize);
  const paged = processed.slice((page - 1) * pageSize, page * pageSize);

  const exportCSV = () => {
    const header = ["Title", "Issuer", "Year", "Duration", "Category", "Certificate ID", "Issued Date"];
    const rows = processed.map((c) => [c.title, c.issuer, c.year, c.duration, c.category, c.certificateId, c.issuedDate]);
    const csv = [header, ...rows].map((r) => r.join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "certificates.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen pt-28 pb-24 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h1
          className="text-5xl font-extrabold text-center mb-3 bg-clip-text text-transparent"
          style={{ backgroundImage: `linear-gradient(to right, ${GOLD}, #b99a5e)` }}
        >
          Certificates
        </h1>

        {/* LAST UPDATE */}
        <p className="text-center text-sm opacity-60 -mt-2 mb-10">
          Last updated: {lastUpdate}
        </p>

        {/* CONTROLS */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-12">

          <div className="flex items-center gap-4">
            <input
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
              placeholder="Search certificates..."
              className="
                px-4 py-3 rounded-xl text-sm w-64
                bg-[var(--card)] border border-[var(--border)]
                text-[var(--foreground)]
              "
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="
                px-4 py-3 rounded-xl text-sm
                bg-[var(--card)] border border-[var(--border)]
                text-[var(--foreground)]
              "
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <button onClick={resetAll} style={btnStyle}>Reset</button>
          </div>

          <div className="flex items-center gap-4">
            <label className="text-sm text-[var(--foreground)]">Rows:</label>

            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="
                px-3 py-2 rounded-xl text-sm
                bg-[var(--card)] border border-[var(--border)]
                text-[var(--foreground)]
              "
            >
              {[6, 10, 20, 50].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>

            <button onClick={exportCSV} style={btnStyle} className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-md">
          <table className="min-w-full text-left">

            <thead className="border-b border-[var(--border)] bg-[var(--card)]">
              <tr>
                <Th label="Title" col="title" sortColumn={sortColumn} sortOrder={sortOrder} onSort={handleSort} />
                <Th label="Issuer" col="issuer" sortColumn={sortColumn} sortOrder={sortOrder} onSort={handleSort} />
                <Th label="Year" col="year" sortColumn={sortColumn} sortOrder={sortOrder} onSort={handleSort} />
                <Th label="Duration" col="duration" sortColumn={sortColumn} sortOrder={sortOrder} onSort={handleSort} />
                <Th label="Category" col="category" sortColumn={sortColumn} sortOrder={sortOrder} onSort={handleSort} />
                <th className="p-3 text-[var(--foreground)]">Action</th>
              </tr>
            </thead>

            <tbody>
              {paged.map((cert, i) => (
                <motion.tr
                  key={cert.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.03 }}
                  viewport={{ once: true }}
                  className="
                    border-b border-[var(--border)]
                    hover:bg-[var(--accent)]/10
                  "
                >
                  <td className="p-3">{cert.title}</td>
                  <td className="p-3">{cert.issuer}</td>
                  <td className="p-3">{cert.year}</td>
                  <td className="p-3">{cert.duration}</td>
                  <td className="p-3">{cert.category}</td>

                  <td className="p-3">
                    <Link
                      href={`/certificate/${cert.id}`}
                      style={btnStyle}
                      className="inline-flex text-sm"
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
          <div className="text-sm text-[var(--foreground)]">
            Showing {((page - 1) * pageSize) + 1} – {Math.min(page * pageSize, total)} of {total}
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => setPage(1)} disabled={page === 1} style={btnStyle}>First</button>
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} style={btnStyle}>Prev</button>

            <span className="px-3 py-1 rounded-xl bg-[var(--card)] border border-[var(--border)]">
              Page {page} / {totalPages}
            </span>

            <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} style={btnStyle}>Next</button>
            <button onClick={() => setPage(totalPages)} disabled={page === totalPages} style={btnStyle}>Last</button>
          </div>
        </div>
      </div>
    </main>
  );
}

/* TABLE HEAD */
function Th({ label, col, sortColumn, sortOrder, onSort }) {
  return (
    <th
      onClick={() => onSort(col)}
      className="p-3 cursor-pointer select-none text-[var(--foreground)]"
    >
      <div className="flex items-center gap-2">
        {label}
        <span className="text-xs opacity-60">
          {sortColumn === col ? (sortOrder === "asc" ? "▲" : "▼") : ""}
        </span>
      </div>
    </th>
  );
}
