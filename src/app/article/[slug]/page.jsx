
"use client";

import { use } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  Calendar,
  ArrowLeft,
  ArrowUpRight,
  Clock,
  BookOpen,
} from "lucide-react";

import { articles as allArticles } from "@/data/articles";

export default function ArticleDetail({ params }) {
  const { slug } = use(params);

  const article = allArticles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--color-background)] px-6 text-center text-[var(--color-muted)]">
        <div>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-brand-soft)]">
            <BookOpen
              size={24}
              className="text-[var(--color-brand)]"
            />
          </div>

          <h1 className="mt-6 font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.05em] text-[var(--color-foreground)]">
            Article not found.
          </h1>

          <p className="mt-3 font-[var(--font-body)] text-sm text-[var(--color-muted)]">
            The article you're looking for doesn't exist or may have been moved.
          </p>

          <Link
            href="/articles"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--color-secondary)] px-6 py-3 font-[var(--font-body)] text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand)]"
          >
            <ArrowLeft size={16} />
            Back to Articles
          </Link>
        </div>
      </main>
    );
  }

  const readingTime = Math.max(
    1,
    Math.ceil(
      (article.content || "").trim().split(/\s+/).filter(Boolean).length / 200
    )
  );

  const relatedArticles = allArticles
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-[var(--color-brand-soft)] opacity-40 blur-[130px]" />

        <div className="absolute left-[-15%] top-[45%] h-[400px] w-[400px] rounded-full bg-[var(--color-surface-alt)] opacity-50 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-32 sm:px-8 sm:pt-36 lg:pb-32 lg:pt-44">
        {/* Back Navigation */}
        <Link
          href="/articles"
          className="group mb-12 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-5 py-3 font-[var(--font-body)] text-sm font-medium text-[var(--color-muted)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to Articles
        </Link>

        {/* Article Header */}
        <header>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[var(--color-brand-soft)] px-4 py-2 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand)]">
              {article.category}
            </span>

            <span className="h-1 w-1 rounded-full bg-[var(--color-border-strong)]" />

            <span className="font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">
              Article
            </span>
          </div>

          <h1 className="mt-8 max-w-4xl font-[var(--font-heading)] text-[clamp(2.8rem,7vw,6rem)] font-semibold leading-[0.98] tracking-[-0.07em] text-[var(--color-foreground)]">
            {article.title}
          </h1>

          {/* Article Meta */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 font-[var(--font-body)] text-xs text-[var(--color-muted)]">
              <Calendar
                size={14}
                className="text-[var(--color-brand)]"
              />
              {article.date}
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 font-[var(--font-body)] text-xs text-[var(--color-muted)]">
              <Clock
                size={14}
                className="text-[var(--color-brand)]"
              />
              {readingTime} min read
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative mt-12 overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface-alt)] sm:mt-16 sm:rounded-[36px]">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <article
          className="
            article-content
            mx-auto mt-12 max-w-3xl
            font-[var(--font-body)]
            text-base leading-[2]
            text-[var(--color-muted)]
            sm:mt-16 sm:text-lg
            [&_h2]:mb-5 [&_h2]:mt-12
            [&_h2]:font-[var(--font-heading)]
            [&_h2]:text-2xl [&_h2]:font-semibold
            [&_h2]:leading-tight [&_h2]:tracking-[-0.04em]
            [&_h2]:text-[var(--color-foreground)]
            [&_h3]:mb-4 [&_h3]:mt-9
            [&_h3]:font-[var(--font-heading)]
            [&_h3]:text-xl [&_h3]:font-semibold
            [&_h3]:tracking-[-0.03em]
            [&_h3]:text-[var(--color-foreground)]
            [&_p]:mb-6
            [&_a]:font-medium [&_a]:text-[var(--color-brand)]
            [&_a]:underline [&_a]:underline-offset-4
            [&_strong]:font-semibold
            [&_strong]:text-[var(--color-foreground)]
            [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:space-y-2
            [&_ul]:pl-6
            [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:space-y-2
            [&_ol]:pl-6
            [&_li]:pl-1
            [&_blockquote]:my-8
            [&_blockquote]:rounded-r-2xl
            [&_blockquote]:border-l-4
            [&_blockquote]:border-[var(--color-brand)]
            [&_blockquote]:bg-[var(--color-brand-soft)]
            [&_blockquote]:px-6 [&_blockquote]:py-5
            [&_blockquote]:text-[var(--color-secondary)]
            [&_img]:my-8 [&_img]:rounded-2xl
            [&_hr]:my-10 [&_hr]:border-[var(--color-border)]
          "
          dangerouslySetInnerHTML={{
            __html: (article.content || "").replace(
              /\n/g,
              "<br/><br/>"
            ),
          }}
        />

        {/* Article Footer */}
        <div className="mx-auto mt-14 max-w-3xl border-t border-[var(--color-border)] pt-8">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted-light)]">
                Filed under
              </span>

              <p className="mt-2 font-[var(--font-heading)] text-sm font-semibold text-[var(--color-brand)]">
                {article.category}
              </p>
            </div>

            <Link
              href="/articles"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-secondary)] px-5 py-3 font-[var(--font-body)] text-xs font-semibold text-white transition-colors hover:bg-[var(--color-brand)]"
            >
              More Articles
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-24 border-t border-[var(--color-border)] pt-16 sm:mt-32">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-5">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-[var(--color-brand)]" />
                    <span className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                      Keep Exploring
                    </span>
                  </div>
                </div>

                <h2 className="font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
                  Related Articles.
                </h2>
              </div>

              <Link
                href="/articles"
                className="inline-flex items-center gap-2 font-[var(--font-body)] text-xs font-semibold text-[var(--color-brand)] transition-colors hover:text-[var(--color-secondary)]"
              >
                View all articles
                <ArrowUpRight size={15} />
              </Link>
            </div>

            <div className="grid gap-4">
              {relatedArticles.map((item) => (
                <Link
                  key={item.slug}
                  href={`/article/${item.slug}`}
                  className="group flex items-center justify-between gap-6 rounded-[24px] border border-[var(--color-border)] bg-[var(--color-background)] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-brand)]/40 sm:p-6"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-[var(--font-body)] text-xs font-medium text-[var(--color-brand)]">
                        {item.category}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-[var(--color-border-strong)]" />

                      <span className="font-[var(--font-body)] text-xs text-[var(--color-muted-light)]">
                        {item.date}
                      </span>
                    </div>

                    <h3 className="mt-3 line-clamp-2 font-[var(--font-heading)] text-lg font-semibold tracking-[-0.03em] text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-brand)] sm:text-xl">
                      {item.title}
                    </h3>
                  </div>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-soft)] text-[var(--color-brand)] transition-colors duration-300 group-hover:bg-[var(--color-secondary)] group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
