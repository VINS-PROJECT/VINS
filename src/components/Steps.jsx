"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Lightbulb, Users } from "lucide-react";

export default function PortfolioSection() {

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  /* ================= SPOTLIGHT ================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  function handleMouseMove(e) {

    const rect = ref.current.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);

  }

  const spotlight = useTransform(
    [smoothX, smoothY],
    ([x, y]) =>
      `radial-gradient(420px at ${x}px ${y}px, rgba(216,199,154,0.18), transparent 70%)`
  );

  const items = [
    {
      title: "Web Development",
      desc: "Building modern, scalable web applications with clean architecture and performance focused technologies.",
      icon: Code,
    },
    {
      title: "UI / UX Design",
      desc: "Designing intuitive interfaces that balance usability, aesthetics, and meaningful user experiences.",
      icon: Palette,
    },
    {
      title: "Product Thinking",
      desc: "Approaching projects with a product mindset solving real problems, not just designing visuals.",
      icon: Lightbulb,
    },
    {
      title: "Team Collaboration",
      desc: "Working closely with founders, designers, and engineers to build impactful digital products.",
      icon: Users,
    },
  ];

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="
      relative
      section-space
      overflow-hidden
      bg-gradient-to-b
      from-[#f7f3e8]
      to-[#f1ead9]
      text-[#2b2b2b]
      "
    >

      {/* SPOTLIGHT BACKGROUND */}

      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: spotlight }}
      />

      <div className="container-main relative">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-24"
        >

          <span className="text-xs tracking-[0.35em] uppercase text-[var(--accent)]">
            CAPABILITIES
          </span>

          <h2 className="mt-4 heading-lg leading-tight">

            What I build

            <br />

            <span className="text-[var(--accent)]">
              and how I work.
            </span>

          </h2>

          <p className="mt-6 text-lg text-[#5a5a5a] max-w-xl mx-auto">
            Combining design, engineering, and product thinking to
            create digital experiences that feel intuitive and perform
            reliably at scale.
          </p>

        </motion.div>

        {/* ================= LIST ================= */}

        <div className="divide-y divide-[#d9d3c5]">

          {items.map((item, i) => (
            <PortfolioItem
              key={item.title}
              item={item}
              delay={i * 0.08}
              inView={inView}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

/* ================= ITEM ================= */

function PortfolioItem({ item, delay, inView }) {

  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-60, 60], [6, -6]);
  const rotateY = useTransform(x, [-60, 60], [-6, 6]);

  function handleMove(e) {

    const rect = ref.current.getBoundingClientRect();

    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;

    x.set(px / 7);
    y.set(py / 7);

  }

  function reset() {

    x.set(0);
    y.set(0);

  }

  const Icon = item.icon;

  return (

    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="
      group
      py-10
      flex flex-col
      md:flex-row
      md:items-center
      md:justify-between
      gap-6
      transition-all
      duration-300
      hover:-translate-y-1
      "
    >

      {/* LEFT */}

      <div className="flex items-center gap-4">

        <div
          className="
          w-12 h-12
          rounded-xl
          border border-[#d9d3c5]
          flex items-center justify-center
          transition-all duration-300
          group-hover:border-[var(--accent)]
          group-hover:bg-[var(--accent)]/10
          group-hover:scale-110
          "
        >
          <Icon size={20} className="text-[var(--accent)]" />
        </div>

        <h3 className="relative text-lg font-medium text-[#1a1a1a]">

          {item.title}

          <span
            className="
            absolute left-0 -bottom-1
            h-[2px]
            w-0
            bg-[var(--accent)]
            transition-all duration-300
            group-hover:w-full
            "
          />

        </h3>

      </div>

      {/* RIGHT */}

      <p className="max-w-md text-[#5a5a5a] text-sm md:text-base leading-relaxed">
        {item.desc}
      </p>

    </motion.div>

  );
}