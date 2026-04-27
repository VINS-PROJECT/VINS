"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { key: "all", label: "All" },
    { key: "Design", label: "UI/UX" },
    { key: "Frontend", label: "Frontend" },
    { key: "Full Stack", label: "Full Stack" },
  ];

  const filtered =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-10 md:mb-12">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Projects
          </h1>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            A selection of my recent work.
          </p>
        </div>

        {/* FILTER */}
        <div className="flex gap-2 mb-8 md:mb-10 flex-wrap">
          {categories.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                filter === f.key
                  ? "bg-black text-white border-black"
                  : "text-gray-600 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* GRID */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {filtered.map((p) => (
              <Link
                href={`/projects/${p.slug}`}
                key={p.slug}
                className="
                group block
                border border-gray-200
                rounded-2xl overflow-hidden
                bg-white
                shadow-sm
                hover:shadow-md hover:-translate-y-1
                transition-all duration-300
                "
              >
                {/* IMAGE */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="
                    object-cover
                    transition duration-500
                    group-hover:scale-105
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5 md:p-6 space-y-3">

                  <span className="text-xs text-gray-400 uppercase">
                    {p.category}
                  </span>

                  <h3 className="text-base md:text-lg font-semibold group-hover:underline">
                    {p.title}
                  </h3>

                  <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                    {p.desc}
                  </p>

                  {/* TECH */}
                  <div className="flex gap-2 flex-wrap pt-1">
                    {p.tech.slice(0, 3).map((t, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="text-center py-20 text-gray-400 text-sm">
            No projects found.
          </div>
        )}

      </div>
    </section>
  );
}