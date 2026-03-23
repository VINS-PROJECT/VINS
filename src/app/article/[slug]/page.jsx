"use client";

import { use } from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  ArrowLeft,
  Tag,
} from "lucide-react";

import { articles as allArticles } from "@/data/articles";

export default function ArticleDetail({ params }) {
  const { slug } = use(params);
  const article = allArticles.find((a) => a.slug === slug);

  const [progress, setProgress] = useState(0);

  /* ================= SCROLL PROGRESS ================= */
  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setProgress((current / total) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= READING TIME ================= */
  const readingTime = Math.ceil(
    article.content.split(" ").length / 200
  );

  if (!article) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        Not found
      </main>
    );
  }

  const relatedArticles = allArticles
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">

      {/* ================= PROGRESS BAR ================= */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-[var(--border)] z-50">
        <div
          className="h-full bg-[var(--accent)] transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="pt-28 pb-28">

        {/* ================= CONTAINER ================= */}
        <div className="max-w-3xl mx-auto px-6">

          {/* BACK */}
          <Link
            href="/article"
            className="text-sm opacity-60 hover:opacity-100 flex items-center gap-2 mb-10"
          >
            <ArrowLeft size={16} /> Back to Articles
          </Link>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-semibold leading-tight"
          >
            {article.title}
          </motion.h1>

          {/* META */}
          <div className="flex flex-wrap items-center gap-4 text-xs opacity-60 mt-4 mb-10">

            <span className="flex items-center gap-1">
              <Tag size={12} /> {article.category}
            </span>

            <span className="flex items-center gap-1">
              <Calendar size={12} /> {article.date}
            </span>

            <span>{readingTime} min read</span>

          </div>

          {/* IMAGE */}
          <div className="relative w-full h-[260px] md:h-[360px] rounded-2xl overflow-hidden mb-12">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="
              prose max-w-none
              text-[var(--foreground)]
              prose-p:text-[var(--foreground)]/80
              prose-headings:font-semibold
              prose-h2:mt-10
              prose-h3:mt-8
              dark:prose-invert
              text-lg leading-relaxed
            "
            dangerouslySetInnerHTML={{
              __html: article.content.replace(/\n/g, "<br />"),
            }}
          />

          {/* ================= DIVIDER ================= */}
          <div className="mt-20 border-t border-[var(--border)]" />

          {/* ================= RELATED ================= */}
          {relatedArticles.length > 0 && (
            <section className="mt-16">
              <h3 className="text-lg font-medium mb-6">
                Related Articles
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {relatedArticles.map((ra) => (
                  <Link
                    key={ra.slug}
                    href={`/article/${ra.slug}`}
                    className="
                      p-4 rounded-xl
                      border border-[var(--border)]
                      hover:border-[var(--accent)]
                      transition
                    "
                  >
                    <p className="text-sm font-medium line-clamp-2">
                      {ra.title}
                    </p>

                    <span className="text-xs opacity-50 mt-1 block">
                      {ra.date}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </main>
  );
}