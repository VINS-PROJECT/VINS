"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { articles as allArticles } from "@/data/articles";

export default function ArticleSection() {

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  const featured = allArticles[0];
  const articles = allArticles.slice(1, 4);

  return (
    <section
      ref={ref}
      className="section-space bg-[var(--background)] text-[var(--foreground)]"
    >

      <div className="container-main">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-xl mb-20"
        >

          <span className="text-xs tracking-[0.35em] uppercase text-[var(--accent)]">
            ARTICLES
          </span>

          <h2 className="mt-4 heading-lg">
            Latest articles
          </h2>

          <p className="mt-5 text-muted">
            Insights, ideas, and notes about design,
            development, and building digital products.
          </p>

          <div className="mt-8 h-px w-16 bg-[var(--border)]" />

        </motion.div>

        {/* GRID */}

        <div className="grid md:grid-cols-2 gap-16">

          {/* FEATURED ARTICLE */}

          {featured && (

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="group"
            >

              <Link href={`/article/${featured.slug}`}>

                <div className="overflow-hidden rounded-2xl">

                  <Image
                    src={featured.image}
                    alt={featured.title}
                    width={900}
                    height={600}
                    className="
                    w-full
                    object-cover
                    transition duration-700
                    group-hover:scale-105
                    "
                  />

                </div>

                <div className="mt-5 text-sm text-muted">
                  {featured.date}
                </div>

                <h3
                  className="
                  mt-1
                  text-xl
                  font-semibold
                  leading-snug
                  group-hover:text-[var(--accent)]
                  transition
                  "
                >
                  {featured.title}
                </h3>

              </Link>

            </motion.div>

          )}

          {/* OTHER ARTICLES */}

          <div className="space-y-8">

            <div className="text-sm uppercase tracking-wide text-muted">
              More articles
            </div>

            {articles.map((item, i) => (

              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
              >

                <Link
                  href={`/article/${item.slug}`}
                  className="
                  block
                  border-b border-[var(--border)]
                  pb-5
                  group
                  "
                >

                  <div className="text-sm text-muted">
                    {item.date}
                  </div>

                  <h4
                    className="
                    mt-1
                    font-medium
                    group-hover:text-[var(--accent)]
                    transition
                    "
                  >
                    {item.title}
                  </h4>

                </Link>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}