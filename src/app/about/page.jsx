"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { certificates } from "@/data/certificates";

export default function AboutPage() {
  const [filter, setFilter] = useState("all");

  const categories = [
    "all",
    "Web Development",
    "Back-End Development",
    "UI/UX",
    "Project Management",
    "Artificial Intelligence",
  ];

  const filtered =
    filter === "all"
      ? certificates
      : certificates.filter((c) => c.category === filter);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="space-y-5">
            <h1 className="text-3xl md:text-4xl font-semibold">
              About Me
            </h1>

            <p className="text-gray-600 leading-relaxed">
              I'm a passionate UI/UX designer and frontend developer based in Indonesia. With a strong focus on crafting engaging digital experiences, I specialize in creating visually stunning and user friendly websites that leave a lasting impression.
            </p>

            <p className="text-gray-600 leading-relaxed">
              My work combines creativity with technical expertise to deliver seamless and intuitive interfaces that resonate with users.
            </p>

            {/* 🔥 CTA BUTTONS */}
            <div className="flex flex-wrap gap-3 mt-4">

              {/* CONTACT */}
              <Link
                href="/contact"
                className="px-5 py-2 bg-black text-white rounded-full text-sm"
              >
                Contact Me
              </Link>

              {/* DOWNLOAD CV */}
              <a
                href="https://drive.google.com/uc?export=download&id=1twRdA1e9g_7DthwC3mh_rf2PjKWxxPDY"
                target="_blank"
                rel="noopener noreferrer"
                className="
                px-5 py-2
                border border-gray-300
                rounded-full text-sm
                hover:bg-gray-100 transition
                "
              >
                Download CV
              </a>

              {/* VIEW PROJECTS */}
              <Link
                href="https://drive.google.com/file/d/1sfyJTJatmMH8Rfb2fa5wTuUh2Zz2SxPK/view?usp=sharing"
                className="
                px-5 py-2
                border border-gray-300
                rounded-full text-sm
                hover:bg-gray-100 transition
                "
              >
                View Portfolio
              </Link>

            </div>
          </div>

          {/* IMAGE */}
          <div className="relative h-[320px] rounded-2xl overflow-hidden border border-gray-200">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>

        </div>

        {/* SKILLS */}
        <div className="mt-20">
          <h2 className="text-xl font-semibold mb-6">
            Skills & Tools
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Next.js",
              "Tailwind",
              "JavaScript",
              "Figma",
              "Node.js",
              "MongoDB",
              "Python",
            ].map((skill) => (
              <span
                key={skill}
                className="text-sm px-3 py-1 bg-gray-100 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* EXPERIENCE */}
        {/* <div className="mt-20">
          <h2 className="text-xl font-semibold mb-6">
            Experience Highlights
          </h2>

          <div className="space-y-6">

            <div>
              <p className="text-sm text-gray-400">2025</p>
              <h3 className="font-medium">
                Frontend Developer — Freelance
              </h3>
              <p className="text-gray-600 text-sm">
                Built responsive web interfaces using modern frameworks
                with a focus on performance and usability.
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">2024</p>
              <h3 className="font-medium">
                UI/UX & Data Projects
              </h3>
              <p className="text-gray-600 text-sm">
                Worked on design systems and data analysis projects,
                combining visual clarity with structured thinking.
              </p>
            </div>

          </div>
        </div> */}

        {/* CERTIFICATES */}
        <div className="mt-20">

          {/* HEADER */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold">
              Certificates
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Proof of continuous learning and skill development.
            </p>
          </div>

          {/* FILTER */}
          <div className="flex gap-2 flex-wrap mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm rounded-full border transition ${
                  filter === cat
                    ? "bg-black text-white border-black"
                    : "text-gray-600 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((cert) => (
              <a
                key={cert.id}
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="
                group block
                border border-gray-200
                rounded-2xl p-5
                bg-white
                hover:shadow-sm hover:-translate-y-1
                transition-all duration-300
                "
              >
                <h3 className="font-medium group-hover:underline">
                  {cert.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {cert.issuer}
                </p>

                <div className="text-xs text-gray-400 mt-3 space-y-1">
                  <p>{cert.issuedDate}</p>
                  <p>{cert.duration}</p>
                  <p>ID: {cert.certificateId}</p>
                </div>

                <span className="text-xs text-gray-400 mt-4 inline-block underline">
                  View Certificate →
                </span>
              </a>
            ))}
          </div>

        </div>

        {/* CTA BOTTOM */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-semibold">
            Let’s build something together
          </h2>

          <div className="flex justify-center gap-3 mt-6 flex-wrap">

            <Link
              href="/contact"
              className="px-6 py-3 bg-black text-white rounded-full"
            >
              Get in Touch
            </Link>

            <a
              href="/cv.pdf"
              target="_blank"
              className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
            >
              Download CV
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}