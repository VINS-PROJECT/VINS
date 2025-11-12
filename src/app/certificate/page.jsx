"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Award, ExternalLink, Filter, RefreshCcw, ArrowUpDown } from "lucide-react";

export default function CertificatePage() {
  const certificates = [
    {
      id: 1,
      title: "Frontend Web Development",
      issuer: "Dicoding Indonesia",
      year: 2022,
      category: "Web Development",
      image: "/certificates/frontend.png",
      link: "https://www.dicoding.com/certificates/frontend123",
      desc: "Completed an in-depth course covering responsive design, CSS frameworks, and JavaScript fundamentals.",
    },
    {
      id: 2,
      title: "React & Next.js Developer",
      issuer: "BuildWithAngga",
      year: 2023,
      category: "Framework",
      image: "/certificates/react.png",
      link: "https://buildwithangga.com/certificates/react-dev",
      desc: "Learned React ecosystem and built multiple web apps using Next.js and TailwindCSS.",
    },
    {
      id: 3,
      title: "UI/UX Design Essentials",
      issuer: "Coursera — California Institute of the Arts",
      year: 2023,
      category: "Design",
      image: "/certificates/uiux.png",
      link: "https://coursera.org/verify/uiux123",
      desc: "Explored the principles of user experience and interface design, with Figma prototyping workflow.",
    },
    {
      id: 4,
      title: "Google Cloud Fundamentals",
      issuer: "Google Cloud",
      year: 2024,
      category: "Cloud",
      image: "/certificates/gcloud.png",
      link: "https://googlecloud.com/certificates/fundamentals",
      desc: "Introduced to cloud deployment, networking, and basic architecture of scalable web applications.",
    },
    {
      id: 5,
      title: "Advanced JavaScript Patterns",
      issuer: "Udemy",
      year: 2024,
      category: "Web Development",
      image: "/certificates/js.png",
      link: "https://udemy.com/certificate/js-patterns",
      desc: "Deep dive into modern JavaScript techniques, async handling, and architecture best practices.",
    },
  ];

  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("desc"); // desc = newest first

  const categories = ["All", "Web Development", "Framework", "Design", "Cloud"];

  // === Filter & Sort Logic ===
  const filteredCertificates = useMemo(() => {
    let filtered = certificates;
    if (category !== "All") {
      filtered = filtered.filter((c) => c.category === category);
    }
    return filtered.sort((a, b) =>
      sortOrder === "desc" ? b.year - a.year : a.year - b.year
    );
  }, [category, sortOrder]);

  const resetFilters = () => {
    setCategory("All");
    setSortOrder("desc");
  };

  return (
    <main className="min-h-screen bg-black text-gray-200 pt-28 pb-24 relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(226,192,124,0.12),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(209,170,96,0.1),transparent_60%)]"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#E2C07C] via-[#d6b270] to-[#b99a5e] bg-clip-text text-transparent">
            Certificates & Achievements
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Recognition of professional growth, learning milestones, and
            achievements throughout{" "}
            <span className="text-[#E2C07C] font-semibold">Anin’s</span> journey.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-3">
            <Filter className="w-4 h-4 text-[#E2C07C]" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white/5 border border-[#E2C07C]/30 text-sm text-gray-200 hover:border-[#E2C07C]/50 focus:outline-none focus:ring-1 focus:ring-[#E2C07C]"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <button
              onClick={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")}
              className="px-4 py-2 rounded-lg border border-[#E2C07C]/30 text-sm flex items-center gap-2 hover:border-[#E2C07C]/50 transition"
            >
              <ArrowUpDown className="w-4 h-4 text-[#E2C07C]" />
              {sortOrder === "desc" ? "Newest → Oldest" : "Oldest → Newest"}
            </button>

            {(category !== "All" || sortOrder !== "desc") && (
              <button
                onClick={resetFilters}
                className="px-4 py-2 rounded-lg border border-[#E2C07C]/30 text-sm flex items-center gap-2 hover:border-[#E2C07C]/50 transition text-gray-300"
              >
                <RefreshCcw className="w-4 h-4 text-[#E2C07C]" /> Reset
              </button>
            )}
          </div>
        </div>

        {/* Certificate Grid */}
        {filteredCertificates.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p>No certificates found for this category.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredCertificates.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  bg-white/5 border border-[#E2C07C]/20
                  rounded-2xl overflow-hidden backdrop-blur-sm
                  hover:border-[#E2C07C]/50 hover:shadow-[0_0_25px_-8px_rgba(226,192,124,0.35)]
                  transition-all duration-500 group
                "
              >
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between h-[260px]">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-[#E2C07C] mb-1 font-medium">
                      {cert.issuer} • {cert.year}
                    </p>
                    <p className="text-sm text-gray-400 mb-3 line-clamp-3">
                      {cert.desc}
                    </p>

                    <span className="inline-block text-xs px-3 py-1 rounded-md bg-[#E2C07C]/10 border border-[#E2C07C]/30 text-[#E2C07C] font-medium">
                      {cert.category}
                    </span>
                  </div>

                  {/* Button */}
                  <Link
                    href={cert.link}
                    target="_blank"
                    className="
                      mt-4 inline-flex items-center justify-center gap-2
                      px-4 py-2 rounded-lg border border-[#E2C07C] text-[#E2C07C]
                      hover:bg-[#E2C07C]/10 transition-all text-sm font-semibold
                    "
                  >
                    View Certificate <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <Award className="w-10 h-10 text-[#E2C07C] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">
            Lifelong Learning Commitment
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Each certificate represents continuous growth — a step toward
            mastering design, development, and creativity in technology.
          </p>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </main>
  );
}
