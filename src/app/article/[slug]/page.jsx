"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import { articles as allArticles } from "@/data/articles";

export default function ArticleDetail({ params }) {

  const slug = params.slug;
  const article = allArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <main className="min-h-screen flex items-center justify-center text-sm text-gray-400">
        Article not found
      </main>
    );
  }

  const readingTime = Math.ceil(
    article.content.split(" ").length / 200
  );

  const relatedArticles = allArticles
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  return (
    <main className="py-20 md:py-24 bg-white">

      <div className="max-w-3xl mx-auto px-6">

        {/* BACK */}
        <Link
          href="/article"
          className="
          inline-flex items-center gap-2
          text-sm text-gray-500
          hover:text-black transition
          "
        >
          <ArrowLeft size={16} />
          Back to Articles
        </Link>

        {/* HEADER */}
        <div className="mt-6 space-y-4">

          <span className="text-xs uppercase text-gray-400">
            {article.category}
          </span>

          <h1 className="text-2xl md:text-3xl font-semibold leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-xs text-gray-400">

            <span className="flex items-center gap-1">
              <Calendar size={12} /> {article.date}
            </span>

            <span>{readingTime} min read</span>

          </div>

        </div>

        {/* IMAGE */}
        <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200">
          <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={700}
            className="w-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <article
          className="
          mt-10
          prose max-w-none
          prose-p:text-gray-600
          prose-headings:font-semibold
          leading-relaxed
          "
          dangerouslySetInnerHTML={{
            __html: article.content.replace(/\n/g, "<br />"),
          }}
        />

        {/* RELATED */}
        {relatedArticles.length > 0 && (
          <div className="mt-16">

            <h3 className="text-lg font-semibold mb-6">
              Related Articles
            </h3>

            <div className="space-y-4">
              {relatedArticles.map((ra) => (
                <Link
                  key={ra.slug}
                  href={`/article/${ra.slug}`}
                  className="
                  block border-b border-gray-200 pb-3
                  text-sm
                  hover:text-black
                  transition
                  "
                >
                  <p className="font-medium">
                    {ra.title}
                  </p>

                  <span className="text-xs text-gray-400">
                    {ra.date}
                  </span>
                </Link>
              ))}
            </div>

          </div>
        )}

      </div>

    </main>
  );
}