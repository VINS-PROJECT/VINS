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
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-[1450px] mx-auto px-8 lg:px-12">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 md:mb-16">

          <div>
            <h2
              className="
              text-3xl
              md:text-4xl
              font-extrabold
              tracking-[-0.02em]
              "
            >
              My <span className="text-[#D4AF37]">Experience</span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              What I've worked on so far.
            </p>
          </div>

          {/* FILTER — pill style, matching About/Project tabs */}
          <div className="inline-flex items-center bg-[#F3F5FA] rounded-full p-1.5 w-fit gap-1">
            {[
              { key: "all", label: "All" },
              { key: "professional", label: "Professional" },
              { key: "organization", label: "Organization" },
            ].map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={`
                px-5
                py-2.5
                rounded-full
                text-sm
                font-semibold
                transition
                ${filter === f.key
                  ? "bg-[#D4AF37] text-white"
                  : "text-gray-500 hover:text-gray-800"}
                `}
              >
                {f.label}
              </button>
            ))}
          </div>

        </div>

        {/* ================= SCROLL ================= */}
        <div className="relative">

          {/* LEFT ARROW */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="
            hidden md:flex
            absolute left-0 top-1/2 -translate-y-1/2 z-10
            -translate-x-1/2
            bg-black
            text-white
            rounded-full p-2.5
            hover:bg-[#D4AF37]
            transition
            "
          >
            <ChevronLeft size={18} />
          </button>

          {/* RIGHT ARROW */}
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="
            hidden md:flex
            absolute right-0 top-1/2 -translate-y-1/2 z-10
            translate-x-1/2
            bg-black
            text-white
            rounded-full p-2.5
            hover:bg-[#D4AF37]
            transition
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
            px-1
            scrollbar-hide
            cursor-grab active:cursor-grabbing
            "
          >
            {filtered.map((item, i) => (
              <div
                key={i}
                className="
                relative
                min-w-[280px] sm:min-w-[320px] md:min-w-[340px]
                max-w-[340px]
                shrink-0
                bg-black
                rounded-[28px]
                p-6 md:p-7
                overflow-hidden
                hover:-translate-y-1
                transition-transform
                duration-300
                "
              >

                {/* Pattern background */}
                <div
                  className="
                  absolute
                  inset-0
                  bg-[url('/pattern.svg')]
                  bg-repeat
                  opacity-[0.08]
                  "
                />

                {/* Accent rectangle */}
                <div className="relative z-10 flex gap-4">
                  <div className="w-1 shrink-0 rounded-full bg-[#D4AF37]" />

                  <div className="min-w-0">
                    <p className="text-xs text-white/50">
                      {item.period}
                    </p>

                    <h3 className="text-base md:text-lg font-bold text-white mt-1">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#D4AF37] font-medium mt-0.5">
                      {item.company}
                    </p>

                    <p className="text-xs text-white/40 mt-1">
                      {item.location}
                    </p>

                    <ul className="mt-4 text-xs md:text-sm text-white/70 list-disc pl-4 space-y-1.5">
                      {item.desc.map((d, idx) => (
                        <li key={idx}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}