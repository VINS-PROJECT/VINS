"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Filter,
} from "lucide-react";
import { certificates } from "@/data/certificates";

export default function CertificatePage() {
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
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const categories = [
    "All",
    "Web Development",
    "Back-End Development",
    "UI/UX",
    "Project Management",
    "Artificial Intelligence",
  ];

  const processed = useMemo(() => {
    let arr = [...certificates];

    if (category !== "All") {
      arr = arr.filter((c) => c.category === category);
    }

    const q = globalSearch.toLowerCase();
    if (q) {
      arr = arr.filter((c) =>
        [c.title, c.issuer, c.category]
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    }

    return arr.sort((a, b) => b.year - a.year);
  }, [category, globalSearch]);

  const total = processed.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const paged = processed.slice((page - 1) * pageSize, page * pageSize);

  const resetAll = () => {
    setCategory("All");
    setGlobalSearch("");
    setPage(1);
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">

      {/* ================= HEADER ================= */}
      <section className="relative text-center px-6 pt-32 pb-20">

        {/* background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[var(--accent)]/10" />
          <div className="absolute w-[400px] h-[400px] bg-[var(--accent)]/20 blur-[120px] rounded-full top-[-100px] left-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Certificates
          </h1>

          <p className="text-sm opacity-60 font-mono">
            /vins+/certificate
          </p>

          <p className="text-xs opacity-50">
            Last updated: {lastUpdate}
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        {/* CONTROLS */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 mb-10">

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              value={globalSearch}
              onChange={(e) => {
                setGlobalSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search certificates…"
              className="
                px-4 py-3 rounded-xl text-sm w-full sm:w-72
                bg-[var(--card)]
                border border-[var(--border)]
                focus:border-[var(--accent)]
                outline-none
              "
            />

            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setPage(1);
              }}
              className="
                px-4 py-3 rounded-xl text-sm
                bg-[var(--card)]
                border border-[var(--border)]
              "
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <button
            onClick={resetAll}
            className="
              px-4 py-3 rounded-xl
              bg-[var(--card)]
              border border-[var(--border)]
              hover:border-[var(--accent)]
              transition flex items-center gap-2
            "
          >
            <Filter size={16} /> Reset
          </button>
        </div>

        {/* EMPTY STATE */}
        {paged.length === 0 && (
          <div className="text-center py-20 opacity-60">
            No certificates found.
          </div>
        )}

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paged.map((c, i) => (
            <Link key={c.id} href={`/vins-plus/certificate/${c.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="
                  group relative cursor-pointer
                  rounded-2xl overflow-hidden
                  border border-[var(--border)]
                  bg-[var(--background)]/60 backdrop-blur-xl
                  p-5 transition-all duration-300

                  hover:border-[var(--accent)]
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]
                "
              >
                {/* glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[var(--accent)]/5 transition" />

                <div className="relative flex flex-col h-full">

                  <h3 className="font-semibold text-base leading-tight group-hover:text-[var(--accent)] transition">
                    {c.title}
                  </h3>

                  <p className="text-xs opacity-60 mt-1">
                    {c.issuer} • {c.year}
                  </p>

                  <span className="
                    inline-block mt-3 px-2 py-1 text-[10px]
                    rounded-md bg-[var(--accent)]/15 text-[var(--accent)]
                  ">
                    {c.category}
                  </span>

                  <div className="mt-3 text-xs opacity-60">
                    Duration: {c.duration}
                  </div>

                  <div className="flex-1" />

                  <span className="mt-4 text-xs opacity-40 group-hover:opacity-100 transition">
                    View details →
                  </span>

                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-between items-center mt-10 text-sm opacity-70">

          <span>
            {(page - 1) * pageSize + 1} –{" "}
            {Math.min(page * pageSize, total)} of {total}
          </span>

          <div className="flex gap-2">

            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-3 py-2 border rounded-xl disabled:opacity-30"
            >
              <ChevronLeft size={16} />
            </button>

            <span className="px-3 py-2 border rounded-xl">
              {page}/{totalPages}
            </span>

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-3 py-2 border rounded-xl disabled:opacity-30"
            >
              <ChevronRight size={16} />
            </button>

          </div>
        </div>

      </section>
    </main>
  );
}