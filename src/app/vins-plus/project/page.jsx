"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import {
  RefreshCcw,
  Eye,
  ChevronLeft,
  ChevronRight,
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

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  const [cardView, setCardView] = useState(true);

  const [loading, setLoading] = useState(false);
  const [processed, setProcessed] = useState([]);

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

  /* ================= PROCESS ================= */

  useEffect(() => {

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

    arr.sort((a, b) => b.year - a.year);

    setTimeout(() => {
      setProcessed(arr);
      setLoading(false);
    }, 200);

  }, [projects, globalSearch]);

  /* ================= PAGINATION ================= */

  const total = processed.length;

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const paged = processed.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const featured = processed[0];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">

      {/* HERO */}

      <section className="pt-36 pb-20 text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Projects
        </motion.h1>

        <span className="block mt-2 text-sm opacity-50 font-mono">
          /vins+/project
        </span>

        <p className="mt-3 text-sm opacity-65">
          Last updated: {lastUpdate}
        </p>

      </section>


      {/* FEATURED */}

      {featured && (

        <section className="max-w-6xl mx-auto px-6 mb-16">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* IMAGE */}

            <div className="relative h-64 rounded-2xl overflow-hidden">

              <Image
                src={featured.image || "/projects/placeholder.jpg"}
                alt={featured.title}
                fill
                className="object-cover"
              />

            </div>

            {/* CONTENT */}

            <div>

              <span className="text-xs opacity-60">
                Featured Project
              </span>

              <h2 className="text-2xl font-semibold mt-2">
                {featured.title}
              </h2>

              <p className="mt-2 opacity-70">
                {featured.category} • {featured.year}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">

                {featured.tech.slice(0,4).map((t,i)=>(
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-md bg-[var(--accent)]/20 text-[var(--accent)]"
                  >
                    {t}
                  </span>
                ))}

              </div>

              <Link
                href={`/vins-plus/project/${featured.slug}`}
                className="inline-flex mt-6 items-center gap-2 px-5 py-3 rounded-xl bg-[var(--accent)] text-black font-semibold"
              >
                <Eye size={16}/>
                View Project
              </Link>

            </div>

          </div>

        </section>

      )}


      {/* CONTENT */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        {/* CONTROLS */}

        <div className="flex flex-col lg:flex-row justify-between gap-4 mb-10">

          <div className="flex gap-3">

            <input
              value={searchInput}
              onChange={(e)=>setSearchInput(e.target.value)}
              placeholder="Search projects..."
              className="px-4 py-3 rounded-xl text-sm bg-[var(--card)] border border-[var(--border)] focus:border-[var(--accent)] outline-none"
            />

            <button
              onClick={()=>{
                setSearchInput("");
                setGlobalSearch("");
              }}
              className="px-4 py-3 rounded-xl bg-[var(--accent)] text-black font-semibold"
            >
              <RefreshCcw size={16}/>
            </button>

          </div>


          <div className="flex items-center gap-3">

            <select
              value={pageSize}
              onChange={(e)=>{
                setPageSize(Number(e.target.value));
                setPage(1);
              }}
              className="px-3 py-2 rounded-xl text-sm bg-[var(--card)] border border-[var(--border)]"
            >
              {[6,9,12].map((n)=>(
                <option key={n}>{n}</option>
              ))}
            </select>

            <button
              onClick={()=>setCardView((v)=>!v)}
              className="p-3 rounded-xl bg-[var(--card)] border border-[var(--border)]"
            >
              {cardView ? <Rows size={16}/> : <LayoutGrid size={16}/>}
            </button>

          </div>

        </div>


        {/* GRID */}

        <AnimatePresence mode="wait">

          {!loading && cardView && (

            <motion.div
              key="cards"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >

              {paged.map((p)=> (

                <article
                  key={p.id}
                  className="group rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] transition"
                >

                  {/* IMAGE */}

                  <div className="relative h-44">

                    <Image
                      src={p.image || "/projects/placeholder.jpg"}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition"
                    />

                  </div>


                  {/* CONTENT */}

                  <div className="p-6">

                    <h3 className="text-lg font-semibold group-hover:text-[var(--accent)]">
                      {p.title}
                    </h3>

                    <p className="text-xs opacity-60 mt-1">
                      {p.category} • {p.year}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3">

                      {p.tech.slice(0,3).map((t,i)=>(
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-md bg-[var(--accent)]/10 text-[var(--accent)]"
                        >
                          {t}
                        </span>
                      ))}

                    </div>

                    <Link
                      href={`/vins-plus/project/${p.slug}`}
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--accent)] text-black text-sm font-semibold"
                    >
                      <Eye size={14}/>
                      View
                    </Link>

                  </div>

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

            <PageBtn
              disabled={page===1}
              onClick={()=>setPage(page-1)}
            >
              <ChevronLeft/>
            </PageBtn>

            <PageBtn
              disabled={page===totalPages}
              onClick={()=>setPage(page+1)}
            >
              <ChevronRight/>
            </PageBtn>

          </div>

        </div>

      </section>

    </main>
  );
}


/* ================= BUTTON ================= */

function PageBtn({ children, onClick, disabled }) {

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="px-3 py-2 rounded-xl bg-[var(--card)] border border-[var(--border)] disabled:opacity-40"
    >
      {children}
    </button>
  );

}