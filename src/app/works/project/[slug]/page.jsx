"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  ExternalLink,
  Github,
  Check,
} from "lucide-react";

import { useParams, notFound } from "next/navigation";
import { useMemo, useState } from "react";

import { projectsData } from "@/data/projects";

export default function ProjectDetail() {

  const { slug } = useParams();
  const [preview, setPreview] = useState(null);

  const project = useMemo(
    () => projectsData.find((p) => p.slug === slug),
    [slug]
  );

  if (!project) return notFound();

  const related = projectsData
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">

      {/* HERO */}
      <section className="pt-32 pb-20 px-6">

        <div className="max-w-6xl mx-auto">

          {/* ✅ BACK BUTTON (FIXED) */}
          <Link
            href="/projects"
            className="
            inline-flex items-center gap-2
            px-4 py-2 mb-8
            text-sm font-medium
            border border-gray-200
            rounded-full
            text-gray-600
            hover:bg-gray-100 hover:text-black
            transition
            "
          >
            <ArrowLeft size={16}/>
            Back to Projects
          </Link>

          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* TEXT */}
            <div>

              <h1 className="text-4xl md:text-5xl font-bold">
                {project.title}
              </h1>

              <p className="opacity-60 mt-3">
                {project.category} • {project.year}
              </p>

              <p className="mt-6 opacity-80 leading-relaxed">
                {project.desc}
              </p>

              {/* TECH STACK */}
              {(project.tech ?? []).length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((t)=>(
                    <span
                      key={t}
                      className="
                      px-3 py-1 text-xs rounded-lg
                      bg-[var(--accent)]/10
                      border border-[var(--accent)]/20
                      text-[var(--accent)]
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* LINKS */}
              <div className="flex gap-3 mt-8">

                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    className="btn-gold flex items-center gap-2"
                  >
                    <ExternalLink size={16}/>
                    Live Demo
                  </a>
                )}

                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    className="
                    px-6 py-2 rounded-xl
                    border border-[var(--border)]
                    flex items-center gap-2
                    "
                  >
                    <Github size={16}/>
                    Source
                  </a>
                )}

              </div>

            </div>

            {/* IMAGE */}
            <div
              onClick={()=>setPreview(project.image)}
              className="relative h-[380px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <Image
                src={project.image || "/placeholder.jpg"}
                alt={project.title}
                fill
                className="object-cover hover:scale-105 transition"
              />
            </div>

          </div>

        </div>

      </section>


      {/* INFO */}
      <section className="max-w-6xl mx-auto px-6 mb-24">

        <div className="grid md:grid-cols-3 gap-6">

          <InfoCard title="Category" value={project.category} />
          <InfoCard title="Year" value={project.year} />
          <InfoCard title="Status" value={project.status || "Completed"} />

        </div>

      </section>


      {/* FEATURES */}
      {project.features?.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mb-24">

          <h2 className="text-2xl font-semibold mb-8">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {project.features.map((f,i)=>(
              <div
                key={i}
                className="
                flex gap-3 p-6
                rounded-2xl
                border border-[var(--border)]
                bg-[var(--card)]
                "
              >
                <Check className="text-[var(--accent)]"/>
                <p className="text-sm opacity-80">{f}</p>
              </div>
            ))}

          </div>

        </section>
      )}


      {/* GALLERY */}
      {project.gallery?.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mb-32">

          <h2 className="text-2xl font-semibold mb-8">
            Gallery
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

            {project.gallery.map((img,i)=>(
              <div
                key={i}
                onClick={()=>setPreview(img)}
                className="
                relative h-52
                rounded-xl
                overflow-hidden
                cursor-pointer
                "
              >
                <Image
                  src={img}
                  alt="Gallery"
                  fill
                  className="object-cover hover:scale-105 transition"
                />
              </div>
            ))}

          </div>

        </section>
      )}


      {/* RELATED */}
      {related.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-32">

          <h2 className="text-2xl font-semibold mb-8">
            Related Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {related.map((p)=>(
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="
                group border border-[var(--border)]
                rounded-xl p-6
                hover:border-[var(--accent)]
                transition
                "
              >
                <p className="font-medium group-hover:text-[var(--accent)]">
                  {p.title}
                </p>

                <p className="text-xs opacity-60 mt-1">
                  {p.category} • {p.year}
                </p>

              </Link>
            ))}

          </div>

        </section>
      )}


      {/* PREVIEW */}
      {preview && (
        <div
          className="
          fixed inset-0 z-50
          bg-black/80
          flex items-center justify-center
          "
          onClick={()=>setPreview(null)}
        >
          <div className="relative w-[80vw] h-[80vh]">
            <Image
              src={preview}
              alt="Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

    </main>
  );
}


/* INFO CARD */
function InfoCard({ title, value }) {
  return (
    <div className="
    p-6 rounded-2xl
    border border-[var(--border)]
    bg-[var(--card)]
    ">
      <p className="text-xs opacity-50">{title}</p>
      <p className="mt-2 font-semibold">{value}</p>
    </div>
  );
}