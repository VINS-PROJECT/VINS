"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft, Tag, BookOpen } from "lucide-react";
import { articles as allArticles } from "@/data/articles";

export default function ArticleDetail({ params }) {
  const { slug } = params;
  const article = allArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <main className="min-h-screen bg-black text-gray-300 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#E2C07C] mb-2">
            Article Not Found
          </h2>
          <Link
            href="/article"
            className="text-[#E2C07C] hover:underline text-sm"
          >
            ← Back to Articles
          </Link>
        </div>
      </main>
    );
  }

  const relatedArticles = allArticles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-black text-gray-200 pt-20 pb-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(226,192,124,0.12),transparent_65%),radial-gradient(circle_at_80%_70%,rgba(209,170,96,0.1),transparent_60%)]"
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        <Link
          href="/article"
          className="inline-flex items-center gap-2 text-sm text-[#E2C07C] hover:underline mt-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Articles
        </Link>

        {/* Cover */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden mt-6 mb-10"
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
        </motion.div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-6">
          <span className="flex items-center gap-1">
            <Tag className="w-3 h-3 text-[#E2C07C]" /> {article.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-[#E2C07C]" /> {article.date}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="w-3 h-3 text-[#E2C07C]" /> 5 min read
          </span>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-[#E2C07C] via-[#d6b270] to-[#b99a5e] bg-clip-text text-transparent"
        >
          {article.title}
        </motion.h1>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="prose prose-invert prose-p:text-gray-300 prose-h3:text-[#E2C07C] prose-strong:text-[#E2C07C] max-w-none"
          dangerouslySetInnerHTML={{
            __html: article.content.replace(/\n/g, "<br />"),
          }}
        />

        {/* Related */}
        {relatedArticles.length > 0 && (
          <section className="mt-20">
            <h3 className="text-xl font-bold text-[#E2C07C] mb-6">
              Related Articles
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((ra, i) => (
                <motion.div
                  key={ra.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white/5 border border-[#E2C07C]/20 rounded-xl overflow-hidden hover:border-[#E2C07C]/40 hover:shadow-[0_0_15px_-6px_rgba(226,192,124,0.3)] transition-all duration-300"
                >
                  <div className="relative w-full h-36 overflow-hidden">
                    <Image
                      src={ra.image}
                      alt={ra.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-white group-hover:text-[#E2C07C] transition line-clamp-2">
                      {ra.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">{ra.date}</p>
                    <Link
                      href={`/article/${ra.slug}`}
                      className="text-[#E2C07C] text-xs inline-flex items-center gap-1 mt-3 hover:underline"
                    >
                      Read more <ArrowLeft className="w-3 h-3 rotate-180" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </main>
  );
}
