"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft, Tag, BookOpen } from "lucide-react";

// Dummy data: bisa diganti dengan fetch API atau CMS seperti Sanity/Contentful
const allArticles = [
  {
    slug: "nextjs-15-portfolio",
    title: "Building a High-Performance Portfolio with Next.js 15",
    date: "June 2024",
    category: "Web Development",
    cover: "/articles/next15.png",
    content: `
      Building your personal portfolio with Next.js 15 offers huge improvements in speed, SEO, and scalability. 
      The App Router and new caching strategies allow faster builds, optimized rendering, and better developer experience.

      ### Key Advantages:
      - **Server Components** for lighter frontend bundles.
      - **Static Generation** combined with incremental revalidation.
      - **Streaming** and **React Suspense** for smoother UX.

      You can easily integrate **Framer Motion** for animations, **TailwindCSS** for styling, 
      and **Vercel Analytics** to track performance. 
      A well-built portfolio not only shows your work, but also your technical finesse.
    `,
  },
  {
    slug: "design-systems-for-devs",
    title: "Design Systems for Developers",
    date: "May 2024",
    category: "UI/UX",
    cover: "/articles/design-system.png",
    content: `
      A design system bridges the gap between designers and developers — it’s the shared language of your product.

      ### Why It Matters:
      - Ensures **visual consistency** across components.
      - Improves **collaboration** between design and dev teams.
      - Reduces **redundant work** and accelerates prototyping.

      Using Figma Tokens and component libraries in code allows you to maintain design parity. 
      Developers should embrace design systems not as limitations, but as creative frameworks.
    `,
  },
  {
    slug: "framer-motion-nextjs",
    title: "Creating Animations with Framer Motion in Next.js",
    date: "April 2024",
    category: "Animation",
    cover: "/articles/framer-motion.png",
    content: `
      Framer Motion is the most powerful yet developer-friendly animation library for React and Next.js.

      ### Common Use Cases:
      - Smooth page transitions.
      - Interactive hover effects.
      - Scroll-based animations.
      
      To start, wrap your elements in **motion.div** and define animation states. 
      Combine it with Next.js layouts to achieve fluid, modern UX without heavy code.
    `,
  },
];

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

  // Ambil artikel lain buat “related”
  const relatedArticles = allArticles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-black text-gray-200 pt-20 pb-24 relative overflow-hidden">
      {/* === Background Glow === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(226,192,124,0.12),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(209,170,96,0.1),transparent_60%)]"
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* === Back Button === */}
        <div className="mt-8">
          <Link
            href="/article"
            className="inline-flex items-center gap-2 text-sm text-[#E2C07C] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Articles
          </Link>
        </div>

        {/* === Cover === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden mt-6 mb-10"
        >
          <Image
            src={article.cover}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </motion.div>

        {/* === Article Meta === */}
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

        {/* === Article Title === */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-[#E2C07C] via-[#d6b270] to-[#b99a5e] bg-clip-text text-transparent"
        >
          {article.title}
        </motion.h1>

        {/* === Content === */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="prose prose-invert prose-p:text-gray-300 prose-h3:text-[#E2C07C] prose-strong:text-[#E2C07C] max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, "<br />") }}
        />

        {/* === Related Articles === */}
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
                      src={ra.cover}
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

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </main>
  );
}
