"use client";

import { use } from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft, Tag } from "lucide-react";

import { articles as allArticles } from "@/data/articles";

export default function ArticleDetail({ params }) {
  const { slug } = use(params);
  const article = allArticles.find((a) => a.slug === slug);

  const [progress, setProgress] = useState(0);

  /* SCROLL PROGRESS */
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

  if (!article) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        Not found
      </main>
    );
  }

  /* READING TIME */
  const readingTime = Math.ceil(
    article.content.split(" ").length / 200
  );

  const relatedArticles = allArticles
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">

      {/* PROGRESS */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-[var(--border)] z-50">
        <div
          className="h-full bg-[var(--accent)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* HERO */}
      <section className="pt-28 pb-16 px-6 text-center max-w-3xl mx-auto">
        <Link
          href="/article"
          className="text-sm opacity-60 hover:opacity-100 flex items-center justify-center gap-2 mb-8"
        >
          <ArrowLeft size={16} /> Back to Articles
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight"
        >
          {article.title}
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-4 text-xs opacity-60 mt-4">
          <span className="flex items-center gap-1">
            <Tag size={12} /> {article.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={12} /> {article.date}
          </span>
          <span>{readingTime} min read</span>
        </div>
      </section>

      {/* COVER IMAGE */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="relative h-[280px] md:h-[420px] rounded-3xl overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* CONTENT */}
      <section className="max-w-3xl mx-auto px-6">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            prose prose-lg max-w-none
            prose-p:text-[var(--foreground)]/80
            prose-headings:font-semibold
            prose-h2:mt-12
            prose-h3:mt-10
            leading-relaxed
          "
          dangerouslySetInnerHTML={{
            __html: article.content.replace(/\n/g, "<br />"),
          }}
        />
      </section>

      {/* RELATED */}
      {relatedArticles.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 mt-24 pb-24">
          <h3 className="text-xl font-semibold mb-8 text-center">
            Related Articles
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((ra) => (
              <Link
                key={ra.slug}
                href={`/article/${ra.slug}`}
                className="
                  group p-5 rounded-2xl
                  border border-[var(--border)]
                  hover:border-[var(--accent)]
                  transition
                "
              >
                <p className="font-medium line-clamp-2 group-hover:text-[var(--accent)]">
                  {ra.title}
                </p>

                <span className="text-xs opacity-50 mt-2 block">
                  {ra.date}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}