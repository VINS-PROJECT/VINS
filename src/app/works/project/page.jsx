"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import {
  Eye,
  ChevronLeft,
  ChevronRight,
  Search
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

  /* ================= FEATURED ================= */

  const featured = useMemo(() => {

    return [...projects]
      .filter((p) => p.featured)
      .sort(
        (a, b) =>
          new Date(b.updatedAt) - new Date(a.updatedAt)
      )[0];

  }, [projects]);

  /* ================= CATEGORIES ================= */

  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  }, [projects]);

  /* ================= STATE ================= */

  const [category, setCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const [globalSearch, setGlobalSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize] = useState(6);

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

    /* SEARCH */

    if (q) {
      arr = arr.filter((p) =>
        [
          p.title,
          p.category,
          p.year,
          (p.tech ?? []).join(" ")
        ]
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    }

    /* CATEGORY */

    if (category !== "All") {
      arr = arr.filter((p) => p.category === category);
    }

    arr.sort((a, b) => b.year - a.year);

    setTimeout(() => {
      setProcessed(arr);
      setLoading(false);
    }, 200);

  }, [projects, globalSearch, category]);

  /* ================= PAGINATION ================= */

  const total = processed.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const paged = processed.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

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

      </section>


      {/* FEATURED PROJECT */}

      {featured && (

        <motion.section
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          className="max-w-6xl mx-auto px-6 mb-16"
        >

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div className="relative h-64 rounded-2xl overflow-hidden">

              <Image
                src={featured.image || "/placeholder.jpg"}
                alt={featured.title}
                fill
                className="object-cover"
              />

            </div>

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

                {(featured.tech ?? []).slice(0,4).map((t,i)=>(
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-md bg-[var(--accent)]/20 text-[var(--accent)]"
                  >
                    {t}
                  </span>
                ))}

              </div>

              <span className="inline-block mt-3 text-xs text-[var(--accent)]">
                {featured.status}
              </span>

              <Link
                href={`/works/project/${featured.slug}`}
                className="inline-flex mt-6 items-center gap-2 px-5 py-3 rounded-xl bg-[var(--accent)] text-black font-semibold"
              >
                <Eye size={16}/>
                View Project
              </Link>

            </div>

          </div>

        </motion.section>

      )}


      {/* FILTERS */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="flex flex-col md:flex-row justify-between gap-6 mb-10">

          {/* CATEGORY */}

          <div className="flex flex-wrap gap-2">

            {categories.map((cat)=>{

              const active = category === cat;

              return (
                <button
                  key={cat}
                  onClick={()=>{
                    setCategory(cat);
                    setPage(1);
                  }}
                  className={`
                    px-4 py-2 rounded-full text-xs transition
                    ${
                      active
                        ? "bg-[var(--accent)] text-black"
                        : "border border-[var(--border)] hover:border-[var(--accent)]"
                    }
                  `}
                >
                  {cat}
                </button>
              );

            })}

          </div>

          {/* SEARCH */}

          <div className="relative w-full md:w-[260px]">

            <Search className="absolute left-3 top-3 w-4 h-4 opacity-50"/>

            <input
              value={searchInput}
              onChange={(e)=>setSearchInput(e.target.value)}
              placeholder="Search projects..."
              className="
              w-full pl-10 pr-4 py-3 rounded-xl text-sm
              bg-[var(--card)]
              border border-[var(--border)]
              focus:border-[var(--accent)]
              outline-none
              "
            />

          </div>

        </div>


        {/* EMPTY STATE */}

        {!loading && paged.length === 0 && (

          <div className="text-center py-20 opacity-60">
            No projects found.
          </div>

        )}


        {/* LOADING */}

        {loading && (

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {Array.from({length:6}).map((_,i)=>(
              <div
                key={i}
                className="h-56 rounded-2xl bg-[var(--card)] animate-pulse"
              />
            ))}

          </div>

        )}


        {/* GRID */}

        <AnimatePresence mode="wait">

          {!loading && (

            <motion.div
              key="cards"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >

              {paged.map((p)=> (

                <article
                  key={p.id}
                  className="group rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] transition"
                >

                  <div className="relative h-44">

                    <Image
                      src={p.image || "/placeholder.jpg"}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition"
                    />

                  </div>

                  <div className="p-6">

                    <h3 className="text-lg font-semibold group-hover:text-[var(--accent)]">
                      {p.title}
                    </h3>

                    <p className="text-xs opacity-60 mt-1">
                      {p.category} • {p.year}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3">

                      {(p.tech ?? []).slice(0,3).map((t,i)=>(
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-md bg-[var(--accent)]/10 text-[var(--accent)]"
                        >
                          {t}
                        </span>
                      ))}

                    </div>

                    <Link
                      href={`/works/project/${p.slug}`}
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