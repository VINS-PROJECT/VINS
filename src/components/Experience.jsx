"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { professional, organizational } from "@/data/experience";

export default function Experience() {
  const [filter, setFilter] = useState("all");
  const scrollRef = useRef(null);

  const allData = [...professional, ...organizational];

  const filtered =
    filter === "all"
      ? allData
      : allData.filter((d) => d.type === filter);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Experience
            </h2>
            <p className="text-gray-500 text-sm">
              What I’ve worked on so far.
            </p>
          </div>

          {/* FILTER */}
          <div className="flex gap-2 flex-wrap">
            {[
              { key: "all", label: "All" },
              { key: "professional", label: "Professional" },
              { key: "organization", label: "Organization" },
            ].map((f) => (
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

        </div>

        {/* SCROLL */}
        <div className="relative">

          {/* LEFT ARROW (DESKTOP ONLY) */}
          <button
            onClick={() => scroll("left")}
            className="
            hidden md:flex
            absolute left-0 top-1/2 -translate-y-1/2 z-10
            bg-white border border-gray-200
            rounded-full p-2 shadow-sm
            "
          >
            <ChevronLeft size={18} />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll("right")}
            className="
            hidden md:flex
            absolute right-0 top-1/2 -translate-y-1/2 z-10
            bg-white border border-gray-200
            rounded-full p-2 shadow-sm
            "
          >
            <ChevronRight size={18} />
          </button>

          {/* CARDS */}
          <div
            ref={scrollRef}
            className="
            flex gap-4 md:gap-6
            overflow-x-auto scroll-smooth
            px-2 md:px-10
            scrollbar-hide
            cursor-grab active:cursor-grabbing
            "
          >
            {filtered.map((item, i) => (
              <div
                key={i}
                className="
                min-w-[260px] sm:min-w-[300px] md:min-w-[320px]
                max-w-[320px]
                bg-white
                border border-gray-200
                rounded-2xl
                p-5 md:p-6
                shadow-sm
                hover:shadow-md hover:-translate-y-1
                transition
                "
              >
                {/* HEADER */}
                <p className="text-xs text-gray-400">
                  {item.period}
                </p>

                <h3 className="text-sm md:text-base font-semibold mt-1">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.company}
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  {item.location}
                </p>

                {/* DESC */}
                <ul className="mt-3 text-xs md:text-sm text-gray-600 list-disc pl-4 space-y-1">
                  {item.desc.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}