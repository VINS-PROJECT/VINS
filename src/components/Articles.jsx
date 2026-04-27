"use client";

import Link from "next/link";
import Image from "next/image";

import { articles as allArticles } from "@/data/articles";

export default function ArticleSection() {

  const featured = allArticles[0];
  const articles = allArticles.slice(1, 4);

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12 md:mb-16">

          {/* LEFT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Latest Articles
            </h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Thoughts on design, development, and building digital products.
            </p>
          </div>

          {/* BUTTON */}
          <Link
            href="/article"
            className="
            w-fit
            px-5 py-2.5
            text-sm font-medium
            border border-gray-200
            rounded-full
            hover:bg-black hover:text-white
            transition
            "
          >
            View all
          </Link>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">

          {/* FEATURED */}
          {featured && (
            <Link href={`/article/${featured.slug}`} className="group">

              <div className="rounded-2xl overflow-hidden border border-gray-200">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  width={900}
                  height={600}
                  className="
                  w-full object-cover
                  transition duration-500
                  group-hover:scale-105
                  "
                />
              </div>

              <p className="text-sm text-gray-400 mt-4">
                {featured.date}
              </p>

              <h3 className="text-lg md:text-xl font-semibold mt-1 leading-snug group-hover:underline">
                {featured.title}
              </h3>

            </Link>
          )}

          {/* LIST */}
          <div className="space-y-6">

            <p className="text-xs uppercase tracking-wide text-gray-400">
              More articles
            </p>

            {articles.map((item) => (
              <Link
                key={item.slug}
                href={`/article/${item.slug}`}
                className="
                block pb-4 border-b border-gray-200
                group
                "
              >
                <p className="text-xs text-gray-400">
                  {item.date}
                </p>

                <h4 className="font-medium mt-1 group-hover:underline">
                  {item.title}
                </h4>
              </Link>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}