"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function News() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const featured = {
    title: "Designing systems instead of pages",
    image: "/news1.jpg",
    date: "Feb 2026",
  };

  const others = [
    {
      title: "Why performance matters in UX",
      date: "Jan 2026",
    },
    {
      title: "From idea to product",
      date: "Jan 2026",
    },
    {
      title: "Building scalable frontends",
      date: "Dec 2025",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-32 bg-[var(--background)] text-[var(--foreground)]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--accent)]">
            NEWS
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
            Latest updates
          </h2>

          <p className="mt-4 text-sm md:text-base text-[var(--foreground)]/60">
            Insights, ideas, and small notes about design,
            development, and building digital products.
          </p>

          {/* divider */}
          <div className="mt-8 h-px w-16 bg-[var(--border)] mx-auto" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* FEATURED */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <img
              src={featured.image}
              alt="news"
              className="rounded-xl w-full object-cover"
            />

            <div className="text-sm text-[var(--foreground)]/60">
              {featured.date}
            </div>

            <h3 className="text-xl font-semibold leading-snug">
              {featured.title}
            </h3>
          </motion.div>

          {/* OTHER NEWS */}
          <div className="space-y-6">

            <div className="text-sm uppercase text-[var(--foreground)]/50">
              Other news
            </div>

            {others.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="
                border-b border-[var(--border)]
                pb-4
                cursor-pointer
                group
                "
              >
                <div className="text-sm text-[var(--foreground)]/50">
                  {item.date}
                </div>

                <h4 className="font-medium group-hover:text-[var(--accent)] transition">
                  {item.title}
                </h4>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}