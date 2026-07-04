"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { articles as allArticles } from "@/data/articles";

export default function ArticleSection() {

  const slides = allArticles.slice(0, 5);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const current = slides[active];

  if (!current) return null;

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-[1450px] mx-auto px-8 lg:px-12">

        {/* ================= HEADER ================= */}
        <div className="flex items-center justify-between mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Discover <span className="text-gray-400">Our Article</span>
          </h2>

          <p
            className="
            text-sm
            text-gray-500
            bg-gray-100
            px-4
            py-1.5
            rounded-full
            "
          >
            Last updated {current.date}
          </p>
        </div>

        {/* GRID: black card + photo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

          {/* ================= LEFT: BLACK CARD ================= */}
          <div
            className="
            relative
            rounded-[32px]
            overflow-hidden
            bg-black
            p-10
            md:p-12
            flex
            flex-col
            justify-between
            min-h-[420px]
            "
          >

            <div
              className="
              absolute
              inset-0
              bg-[url('/pattern.svg')]
              bg-repeat
              opacity-[0.15]
              "
            />

            <Link
              href={`/article/${current.slug}`}
              className="relative z-10 group flex gap-4"
            >
              <div className="w-1 shrink-0 rounded-full bg-[#D4AF37]" />

              <div>
                <p className="text-white/60 text-sm mb-4">
                  {current.date}
                </p>

                <h3
                  className="
                  text-2xl
                  md:text-3xl
                  font-bold
                  text-white
                  leading-snug
                  group-hover:underline
                  "
                >
                  {current.title}
                </h3>

                {current.description && (
                  <p
                    className="
                    text-white/70
                    text-sm
                    md:text-base
                    leading-relaxed
                    mt-4
                    line-clamp-3
                    "
                  >
                    {current.description}
                  </p>
                )}
              </div>
            </Link>

            <div className="relative z-10 flex gap-2 mt-8">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-300
                  ${i === active ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/60"}
                  `}
                />
              ))}
            </div>

          </div>

          {/* ================= RIGHT: PHOTO ================= */}
          <Link
            href={`/article/${current.slug}`}
            className="relative rounded-[32px] overflow-hidden min-h-[420px] block group"
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="
              object-cover
              transition
              duration-500
              group-hover:scale-105
              "
            />
          </Link>

        </div>

      </div>
    </section>
  );
}