"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  ArrowLeft,
  ChevronRight,
  Tag,
  BookOpen,
} from "lucide-react";

import { articles as allArticles } from "@/data/articles";

export default function ArticleDetail({ params }) {
  const { slug } = use(params); // ⬅ FIX Next.js 15 param Promise

  const article = allArticles.find((a) => a.slug === slug);
  const BRAND = "var(--accent)";

  if (!article) {
    return (
      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[var(--accent)] mb-2">
            Article Not Found
          </h2>
          <Link
            href="/article"
            className="text-[var(--accent)] hover:underline text-sm"
          >
            ← Back to Articles
          </Link>
        </div>
      </main>
    );
  }

  const relatedArticles = allArticles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <main
      className="
        min-h-screen pt-28 pb-24 relative overflow-hidden
        bg-[var(--background)] text-[var(--foreground)]
        transition-colors duration-500
      "
    >
      {/* BG Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="
          absolute inset-0 pointer-events-none
          dark:bg-[radial-gradient(circle_at_20%_20%,rgba(216,199,154,0.14),transparent_55%),
                     radial-gradient(circle_at_80%_70%,rgba(216,199,154,0.10),transparent_60%)]
          bg-[radial-gradient(circle_at_20%_20%,rgba(216,199,154,0.18),transparent_55%),
              radial-gradient(circle_at_80%_70%,rgba(216,199,154,0.14),transparent_60%)]
        "
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* HEADER & BREADCRUMB */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1
            className="text-4xl font-extrabold bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--accent), var(--accent-dark))",
            }}
          >
            Article Overview
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-3xl leading-relaxed">
            Explore insights, knowledge, and perspectives curated for learning.
          </p>

          {/* Breadcrumb */}
          <div className="mt-5 flex items-center gap-2 text-sm font-medium">
            <Link href="/" className="text-[var(--accent)] hover:underline">
              Home
            </Link>

            <ChevronRight className="w-4 h-4 text-[var(--accent)]/70" />

            <Link href="/article" className="text-[var(--accent)] hover:underline">
              Articles
            </Link>

            <ChevronRight className="w-4 h-4 text-[var(--accent)]/70" />

            <span className="text-[var(--foreground)]/80">
              {article.title.length > 45
                ? article.title.slice(0, 45) + "..."
                : article.title}
            </span>
          </div>
        </motion.div>

        {/* BACK BUTTON */}
        <Link
          href="/article"
          className="inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:opacity-80 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Articles
        </Link>

        {/* RESPONSIVE BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            relative w-full
            h-[240px]        /* mobile */
            sm:h-[300px]     /* small screens */
            md:h-[420px]     /* tablets */
            lg:h-[520px]     /* desktop */
            rounded-xl md:rounded-2xl
            overflow-hidden mt-6 mb-10
            border border-[var(--accent)]/30
            shadow-[0_0_25px_rgba(216,199,154,0.25)]
          "
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent dark:from-black/70" />
        </motion.div>

        {/* META INFO */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <span className="flex items-center gap-1">
            <Tag className="w-4 h-4 text-[var(--accent)]" /> {article.category}
          </span>

          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-[var(--accent)]" /> {article.date}
          </span>

          <span className="flex items-center gap-1">
            <BookOpen className="w-4 h-4 text-[var(--accent)]" /> 5 min read
          </span>
        </div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            text-4xl md:text-5xl font-extrabold mb-8
            bg-clip-text text-transparent
          "
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--accent), var(--accent-dark))",
          }}
        >
          {article.title}
        </motion.h1>

        {/* CONTENT */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="
            prose max-w-none text-[var(--foreground)]
            prose-p:text-[var(--foreground)]/80
            prose-strong:text-[var(--accent)]
            prose-h3:text-[var(--accent)]
            dark:prose-invert
            text-lg leading-relaxed
          "
          dangerouslySetInnerHTML={{
            __html: article.content.replace(/\n/g, "<br />"),
          }}
        />

        {/* RELATED ARTICLES */}
        {relatedArticles.length > 0 && (
          <section className="mt-20">
            <h3 className="text-xl font-bold text-[var(--accent)] mb-6">
              Related Articles
            </h3>

            <div className="grid md:grid-cols-3 gap-7">
              {relatedArticles.map((ra, i) => (
                <motion.div
                  key={ra.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="
                    group rounded-xl overflow-hidden transition-all
                    bg-[var(--background)] border border-[var(--accent)]/20
                    hover:border-[var(--accent)]/40 hover:shadow-[0_0_15px_-6px_rgba(216,199,154,0.3)]
                  "
                >
                  <div className="relative h-40">
                    <Image
                      src={ra.image}
                      alt={ra.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent dark:from-black/70" />
                  </div>

                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition line-clamp-2">
                      {ra.title}
                    </h4>

                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {ra.date}
                    </p>

                    <Link
                      href={`/article/${ra.slug}`}
                      className="text-[var(--accent)] text-xs inline-flex items-center gap-1 mt-3 hover:underline"
                    >
                      Read more{" "}
                      <ArrowLeft className="w-3 h-3 rotate-180" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Fade Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none" />
    </main>
  );
}
