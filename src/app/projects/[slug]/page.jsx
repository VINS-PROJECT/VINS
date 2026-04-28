"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetail({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) return notFound();

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* 🔥 BACK BUTTON */}
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
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* HEADER */}
        <div className="space-y-4">
          <span className="text-xs uppercase text-gray-400">
            {project.category}
          </span>

          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            {project.title}
          </h1>

          <p className="text-gray-600 leading-relaxed max-w-2xl">
            {project.desc}
          </p>
        </div>

        {/* IMAGE */}
        <div className="mt-10 rounded-2xl overflow-hidden border border-gray-200">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={700}
            className="w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* INFO */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Year", value: project.year },
            { label: "Role", value: project.role },
            { label: "Team", value: project.team },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 border border-gray-200 rounded-xl bg-gray-50"
            >
              <p className="text-xs text-gray-400">{item.label}</p>
              <p className="font-medium mt-1">{item.value}</p>
            </div>
          ))}
        </div>

        {/* TECH */}
        <div className="mt-10">
          <h2 className="font-semibold mb-3">Tech Stack</h2>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="text-xs bg-gray-100 px-2 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* FEATURES */}
        {project.features?.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-3">
              Key Features
            </h2>

            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        )}

        {/* GALLERY */}
        {project.gallery?.length > 0 && (
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold">
              Gallery
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  className="relative h-48 rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    className="object-cover hover:scale-105 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 🔥 LIGHTBOX MODAL */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl w-full px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt=""
                width={1400}
                height={900}
                className="rounded-xl object-contain w-full"
              />

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-6 text-white text-2xl"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* LINKS */}
        <div className="mt-12 flex gap-3 flex-wrap">
          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              className="px-5 py-2 bg-black text-white rounded-full text-sm"
            >
              Live Demo
            </a>
          )}

          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              className="px-5 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition"
            >
              GitHub
            </a>
          )}

          {project.links?.figma && (
            <a
              href={project.links.figma}
              target="_blank"
              className="px-5 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition"
            >
              Figma
            </a>
          )}
        </div>

      </div>
    </section>
  );
}