"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Download, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { useTheme } from "next-themes";

export default function CertificatePage() {
  const { theme } = useTheme();
  const GOLD = "var(--accent)";

  const certificates = [
    { id: 1, title: "Front-End and Back-End Developer Training", issuer: "Baparekraf Digital Talent", year: 2024, issuedDate: "21 Juli 2024", certificateId: "DCD/BDT/GRAD/XXIV-7/D2024Y076", duration: "940 Jam", category: "Web Development", pdf: "/File/BDT-Training.pdf" },
    { id: 2, title: "Becoming an Expert Front-End Web Developer", issuer: "Dicoding Indonesia", year: 2024, issuedDate: "28 June 2024", certificateId: "JLX17KKQNX72", duration: "100 Jam", category: "Web Development", pdf: "/File/DicodingFile1.pdf" },
    { id: 3, title: "Learning to Build Back-End Applications for Beginners", issuer: "Dicoding Indonesia", year: 2024, issuedDate: "1 June 2024", certificateId: "4EXGQ75O9ZRL", duration: "100 Jam", category: "Back-End Development", pdf: "/File/DicodingFile2.pdf" },
    { id: 4, title: "Introduction to UX/UI Design", issuer: "Coursera", year: 2025, issuedDate: "8 November 2025", certificateId: "YQWIQGV43MOR", duration: "15 Jam", category: "UI/UX", pdf: "/File/IBMFile1.pdf" },
    { id: 5, title: "Project Initiation: Starting a Successful Project", issuer: "Coursera", year: 2025, issuedDate: "12 November 2025", certificateId: "9H2APOYYVASX", duration: "17 Jam", category: "Project Management", pdf: "/File/GoogleFile1.pdf" },
    { id: 6, title: "Foundations of Project Management", issuer: "Coursera", year: 2025, issuedDate: "15 November 2025", certificateId: "KDBFPBMTGBA7", duration: "12 Jam", category: "Project Management", pdf: "/File/GoogleFile2.pdf" },
    { id: 7, title: "AI Foundations & Design Thinking", issuer: "Coursera", year: 2025, issuedDate: "10 November 2025", certificateId: "PJD3D9Q7WVXD", duration: "9 Jam", category: "Artificial Intelligence", pdf: "/File/CourseFile1.pdf" },
    { id: 8, title: "Figma Pro Pt. 1: Auto Layouts, Grids & Components", issuer: "Coursera", year: 2025, issuedDate: "9 November 2025", certificateId: "VSEWK25EEQWD", duration: "7 Jam", category: "UI/UX", pdf: "/File/SkillShareFile1.pdf" },
  ];

  const lastUpdate = useMemo(() => {
    const dates = certificates.map((c) => new Date(c.issuedDate));
    const latest = new Date(Math.max(...dates));
    return latest.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }, []);

  const btnStyle = `inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold shadow-sm`;

  const [category, setCategory] = useState("All");
  const [globalSearch, setGlobalSearch] = useState("");
  const [columnFilters, setColumnFilters] = useState({
    title: "",
    issuer: "",
    year: "",
    duration: "",
    category: "",
  });
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("desc");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [mobileView, setMobileView] = useState(false);
  const [detailId, setDetailId] = useState(null);

  useEffect(() => {
    const onResize = () => setMobileView(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const categories = [
    "All",
    "Web Development",
    "Back-End Development",
    "UI/UX",
    "Project Management",
    "Artificial Intelligence",
  ];

  const parseNumber = (v) => Number(String(v).replace(/[^0-9]/g, "")) || 0;

  const handleSort = (col) => {
    if (sortColumn === col)
      setSortOrder((so) => (so === "asc" ? "desc" : "asc"));
    else {
      setSortColumn(col);
      setSortOrder("asc");
    }
  };

  const resetAll = () => {
    setCategory("All");
    setGlobalSearch("");
    setColumnFilters({
      title: "",
      issuer: "",
      year: "",
      duration: "",
      category: "",
    });
    setSortColumn(null);
    setSortOrder("desc");
    setPage(1);
  };

  const processed = useMemo(() => {
    let arr = [...certificates];

    if (category !== "All")
      arr = arr.filter((c) => c.category === category);

    if (globalSearch.trim()) {
      const q = globalSearch.toLowerCase();
      arr = arr.filter((c) =>
        [
          c.title,
          c.issuer,
          c.year,
          c.duration,
          c.category,
          c.certificateId,
        ].some((f) => String(f).toLowerCase().includes(q))
      );
    }

    Object.entries(columnFilters).forEach(([col, val]) => {
      if (val)
        arr = arr.filter((c) =>
          String(c[col]).toLowerCase().includes(val.toLowerCase())
        );
    });

    if (sortColumn) {
      arr.sort((a, b) => {
        if (sortColumn === "year")
          return sortOrder === "asc" ? a.year - b.year : b.year - a.year;

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
  }, [
    category,
    globalSearch,
    columnFilters,
    sortColumn,
    sortOrder,
  ]);

  const total = processed.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const paged = processed.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages, page]);

  const exportCSV = () => {
    const header = [
      "Title",
      "Issuer",
      "Year",
      "Duration",
      "Category",
      "Certificate ID",
      "Issued Date",
    ];
    const rows = processed.map((c) => [
      c.title,
      c.issuer,
      c.year,
      c.duration,
      c.category,
      c.certificateId,
      c.issuedDate,
    ]);
    const csv = [header, ...rows]
      .map((r) =>
        r
          .map((cell) =>
            `"${String(cell).replace(/"/g, '""')}"`
          )
          .join(",")
      )
      .join("\n");
    const url = URL.createObjectURL(
      new Blob([csv], { type: "text/csv" })
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "certificates.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const openPdf = (pdf) => {
    if (!pdf) return;
    window.open(pdf, "_blank");
  };

  return (
    <main className="min-h-screen pt-20 pb-12 bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <header className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1
              className="text-3xl sm:text-4xl font-extrabold mb-1 bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${GOLD}, #b99a5e)`,
              }}
            >
              Certificates
            </h1>
            <p className="text-xs sm:text-sm opacity-60">
              Last updated: {lastUpdate}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={exportCSV}
              className={`${btnStyle} bg-[var(--accent)] text-black`}
              aria-label="Export CSV"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>
            <button
              onClick={resetAll}
              className={`${btnStyle} bg-[color-mix(in srgb, var(--card) 70%, transparent)]`}
              aria-label="Reset filters"
            >
              Reset
            </button>
          </div>
        </header>

        {/* CONTROLS */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div className="flex-1 flex gap-3 flex-col sm:flex-row items-stretch">
            <input
              value={globalSearch}
              onChange={(e) => {
                setGlobalSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search certificates..."
              className="px-4 py-3 rounded-xl text-sm w-full sm:w-72 bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)]"
            />

            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setPage(1);
              }}
              className="px-4 py-3 rounded-xl text-sm bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)]"
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPage(1);
              }}
              className="px-3 py-2 rounded-xl text-sm bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] w-28"
              aria-label="Rows per page"
            >
              {[6, 10, 20, 50].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-sm opacity-80">
              <span>Sort:</span>
              <button
                onClick={() => handleSort("year")}
                className="px-3 py-2 rounded-xl bg-[var(--card)] border border-[var(--border)]"
              >
                Year{" "}
                {sortColumn === "year"
                  ? sortOrder === "asc"
                    ? "▲"
                    : "▼"
                  : ""}
              </button>
              <button
                onClick={() => handleSort("title")}
                className="px-3 py-2 rounded-xl bg-[var(--card)] border border-[var(--border)]"
              >
                Title{" "}
                {sortColumn === "title"
                  ? sortOrder === "asc"
                    ? "▲"
                    : "▼"
                  : ""}
              </button>
            </div>

            <div className="sm:hidden">
              <button
                onClick={() => setMobileView((v) => !v)}
                className={`${btnStyle} bg-[var(--card)]`}
                aria-expanded={mobileView}
              >
                {mobileView ? "Table view" : "Card view"}
              </button>
            </div>
          </div>
        </div>

        {/* TABLE OR CARD */}
        {!mobileView ? (
          <div className="overflow-x-auto rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-md">
            <table className="min-w-full text-left text-sm sm:text-base">
              <thead className="border-b border-[var(--border)] bg-[var(--card)]">
                <tr>
                  <Th
                    label="Title"
                    col="title"
                    sortColumn={sortColumn}
                    sortOrder={sortOrder}
                    onSort={handleSort}
                  />
                  <Th
                    label="Issuer"
                    col="issuer"
                    sortColumn={sortColumn}
                    sortOrder={sortOrder}
                    onSort={handleSort}
                  />
                  <Th
                    label="Year"
                    col="year"
                    sortColumn={sortColumn}
                    sortOrder={sortOrder}
                    onSort={handleSort}
                  />
                  <Th
                    label="Duration"
                    col="duration"
                    sortColumn={sortColumn}
                    sortOrder={sortOrder}
                    onSort={handleSort}
                  />
                  <Th
                    label="Category"
                    col="category"
                    sortColumn={sortColumn}
                    sortOrder={sortOrder}
                    onSort={handleSort}
                  />
                  <th className="p-3 text-[var(--foreground)]">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {paged.map((cert, i) => (
                  <motion.tr
                    key={cert.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: i * 0.03,
                    }}
                    viewport={{ once: true }}
                    className="border-b border-[var(--border)] hover:bg-[var(--accent)]/10"
                  >
                    <td className="p-3 min-w-[180px]">
                      {cert.title}
                    </td>
                    <td className="p-3 min-w-[120px]">
                      {cert.issuer}
                    </td>
                    <td className="p-3">{cert.year}</td>
                    <td className="p-3">{cert.duration}</td>
                    <td className="p-3 min-w-[120px]">
                      {cert.category}
                    </td>

                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openPdf(cert.pdf)}
                          className={`${btnStyle} px-3 py-2 bg-[var(--accent)] text-black`}
                        >
                          <span className="sr-only">
                            Open PDF
                          </span>
                          <Download className="w-4 h-4" />
                        </button>

                        {/* 🔥 NEW — eye icon here */}
                        <Link
                          href={`/vins-plus/certificate/${cert.id}`}
                          className={`${btnStyle} px-3 py-2 bg-[color-mix(in srgb, var(--card) 70%, transparent)]`}
                          aria-label="View Detail"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                      </div>
                    </td>
                  </motion.tr>
                ))}

                {paged.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="p-6 text-center opacity-70"
                    >
                      No certificates found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {paged.map((cert) => (
              <motion.article
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {cert.title}
                    </h3>
                    <p className="text-xs opacity-70 mt-1">
                      {cert.issuer} • {cert.year}
                    </p>
                    <p className="text-sm mt-2 opacity-80">
                      {cert.duration} • {cert.category}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => openPdf(cert.pdf)}
                      className={`${btnStyle} px-3 py-2 bg-[var(--accent)] text-black`}
                      aria-label="Open certificate PDF"
                    >
                      <Download className="w-4 h-4" />
                    </button>

                    {/* 🔥 NEW — eye icon here */}
                    <Link
                      href={`/vins-plus/certificate/${cert.id}`}
                      className={`${btnStyle} px-3 py-2 bg-[color-mix(in srgb, var(--card) 70%, transparent)]`}
                      aria-label="View Detail"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* PAGINATION */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
          <div className="text-sm text-[var(--foreground)]">
            Showing{" "}
            {total === 0
              ? 0
              : (page - 1) * pageSize + 1}{" "}
            – {Math.min(page * pageSize, total)} of {total}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage(1)}
              disabled={page === 1}
              className={`${btnStyle} px-3 py-2 bg-[var(--card)] border border-[var(--border)]`}
              aria-label="First page"
            >
              First
            </button>
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className={`${btnStyle} px-3 py-2 bg-[var(--card)] border border-[var(--border)]`}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="px-3 py-1 rounded-xl bg-[var(--card)] border border-[var(--border)]">
              Page {page} / {totalPages}
            </span>

            <button
              onClick={() =>
                setPage((p) => Math.min(totalPages, p + 1))
              }
              disabled={page === totalPages}
              className={`${btnStyle} px-3 py-2 bg-[var(--card)] border border-[var(--border)]`}
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setPage(totalPages)}
              disabled={page === totalPages}
              className={`${btnStyle} px-3 py-2 bg-[var(--card)] border border-[var(--border)]`}
              aria-label="Last page"
            >
              Last
            </button>
          </div>
        </div>
      </div>

      {/* DETAIL MODAL */}
      {detailId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-2xl bg-[var(--card)] p-6 rounded-2xl border border-[var(--border)]"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold">
                Certificate Detail
              </h3>
              <button
                onClick={() => setDetailId(null)}
                className="p-2 rounded-full bg-[var(--card)] border border-[var(--border)]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4">
              {(() => {
                const cert = certificates.find(
                  (c) => c.id === detailId
                );
                if (!cert) return <p>Not found</p>;
                return (
                  <div className="space-y-2">
                    <p className="font-semibold">{cert.title}</p>
                    <p className="text-sm opacity-70">
                      Issuer: {cert.issuer}
                    </p>
                    <p className="text-sm opacity-70">
                      Issued: {cert.issuedDate}
                    </p>
                    <p className="text-sm opacity-70">
                      Certificate ID: {cert.certificateId}
                    </p>
                    <p className="text-sm opacity-70">
                      Duration: {cert.duration}
                    </p>
                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={() => openPdf(cert.pdf)}
                        className={`${btnStyle} bg-[var(--accent)] text-black`}
                      >
                        <Download className="w-4 h-4" />
                        Open
                      </button>
                      <Link
                        href={cert.pdf}
                        className={`${btnStyle} bg-[var(--card)]`}
                        target="_blank"
                      >
                        Open in new tab
                      </Link>
                    </div>
                  </div>
                );
              })()}
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}

/* TABLE HEADER COMPONENT */
function Th({ label, col, sortColumn, sortOrder, onSort }) {
  return (
    <th
      onClick={() => onSort(col)}
      className="p-3 cursor-pointer select-none text-[var(--foreground)]"
    >
      <div className="flex items-center gap-2">
        {label}
        <span className="text-xs opacity-60">
          {sortColumn === col
            ? sortOrder === "asc"
              ? "▲"
              : "▼"
            : ""}
        </span>
      </div>
    </th>
  );
}
