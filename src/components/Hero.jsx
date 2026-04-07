"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

/* ================= SLIDES ================= */

const slides = [
  {
    image: "/hero1.jpg",
    tag: "UI / UX • Web Development",
    title1: "I Create",
    title2: "Digital Work",
    title3: "That Hits.",
    desc: "Crafting high-impact digital experiences for brands and startups.",

    ctaPrimary: {
      label: "View Portfolio",
      link: "/vins-plus/portfolio",
    },

    ctaSecondary: {
      label: "Contact Me",
      link: "/contact",
    },
  },

  {
    image: "/hero2.jpg",
    tag: "Creative Coding",
    title1: "Design",
    title2: "Meets",
    title3: "Performance.",
    desc: "Building modern websites focused on speed and clarity.",

    ctaPrimary: {
      label: "See Projects",
      link: "/vins-plus/project",
    },

    ctaSecondary: {
      label: "My Experience",
      link: "/vins-plus/experience",
    },
  },

  {
    image: "/hero3.jpg",
    tag: "Product Thinking",
    title1: "Ideas",
    title2: "Into",
    title3: "Experiences.",
    desc: "Transforming concepts into meaningful digital products.",

    ctaPrimary: {
      label: "Certificates",
      link: "/vins-plus/certificate",
    },

    ctaSecondary: {
      label: "About Me",
      link: "/about",
    },
  },
];

/* ================= HERO ================= */

export default function Hero() {
  const [index, setIndex] = useState(0);

  /* AUTO SLIDE */

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND CAROUSEL */}

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt="hero"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* CONTENT */}

      <div className="relative z-10 flex flex-col min-h-screen">

        <div className="flex items-end flex-1 pb-20 pt-48">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 w-full">

            <motion.div
              key={index + "content"}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >

              {/* TAG */}

              <div className="inline-flex px-3 py-1 rounded-full bg-white/10 backdrop-blur text-xs text-white/70">
                {slide.tag}
              </div>

              {/* TITLE */}

              <h1 className="font-semibold leading-[1] tracking-tight text-white">

                <div className="text-[42px] sm:text-[56px] md:text-[72px] lg:text-[96px]">
                  {slide.title1}
                </div>

                <div className="text-[42px] sm:text-[56px] md:text-[72px] lg:text-[96px] text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[#f5e6ca]">
                  {slide.title2}
                </div>

                <div className="text-[42px] sm:text-[56px] md:text-[72px] lg:text-[96px]">
                  {slide.title3}
                </div>

              </h1>

              {/* DESCRIPTION */}

              <p className="max-w-lg text-sm sm:text-base text-white/70 leading-relaxed">
                {slide.desc}
              </p>

              {/* CTA BUTTONS */}

              <div className="flex items-center gap-4 pt-4 flex-wrap">

                <Link
                  href={slide.ctaPrimary.link}
                  className="
                  group inline-flex items-center gap-2
                  px-7 py-3 rounded-full
                  bg-white text-black font-medium
                  shadow-lg shadow-black/30
                  hover:bg-[var(--accent)]
                  hover:scale-[1.03]
                  transition
                  "
                >
                  {slide.ctaPrimary.label}

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href={slide.ctaSecondary.link}
                  className="
                  px-6 py-3 rounded-full
                  border border-white/20
                  text-white/80
                  hover:bg-white/10
                  transition
                  "
                >
                  {slide.ctaSecondary.label}
                </Link>

              </div>

            </motion.div>

          </div>
        </div>

        {/* DOT INDICATOR */}

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">

          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                index === i
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40"
              }`}
            />
          ))}

        </div>

      </div>

    </section>
  );
}