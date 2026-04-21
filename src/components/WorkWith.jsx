"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Award, TrendingUp, Zap } from "lucide-react";
import Image from "next/image";

export default function WorkWith() {

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  const stats = [
    { icon: Users, label: "Clients", value: 30, suffix: "+" },
    { icon: Award, label: "Projects", value: 50, suffix: "+" },
    { icon: TrendingUp, label: "Success Rate", value: 98, suffix: "%" },
    { icon: Zap, label: "Experience", value: 5, suffix: "+ Years" },
  ];

  const partners = [
    { src: "/Medsel.svg", name: "Medsel" },
    { src: "/DC.svg", name: "DC" },
    { src: "/YTZ.svg", name: "YTZ" },
    { src: "/RO.svg", name: "RO" },
    { src: "/LLF.svg", name: "LLF" },
  ];

  return (
    <section
      ref={ref}
      className="
      section-space
      relative overflow-hidden
      bg-[var(--background)]
      text-[var(--foreground)]
      "
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute inset-0 bg-[var(--accent)]/8" />

        <div className="absolute w-[420px] h-[420px] bg-[var(--accent)]/20 blur-[160px] rounded-full top-[-120px] left-[-120px]" />

      </div>

      <div className="container-main space-y-24">

        {/* ================= TOP ================= */}

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT TEXT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >

            <span className="text-sm tracking-widest text-[var(--accent)]">
              TRUSTED PARTNERSHIPS
            </span>

            <h2 className="heading-lg leading-tight">
              Trusted by teams
              <br />
              across organizations
            </h2>

            <p className="text-lg text-muted max-w-md">
              Long-term collaborations built on clarity, reliability,
              and shared outcomes — not just delivery.
            </p>

          </motion.div>

          {/* RIGHT STATS */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="
            grid grid-cols-2 gap-6
            border border-[var(--border)]
            rounded-2xl p-8
            bg-[var(--card)]
            shadow-lg shadow-black/5
            "
          >

            {stats.map((stat, i) => (
              <StatItem key={i} stat={stat} inView={inView} />
            ))}

          </motion.div>

        </div>

        {/* ================= PARTNERS ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-8"
        >

          <p className="text-sm uppercase tracking-wide text-[var(--foreground)]/50 text-center">
            Worked with
          </p>

          <div className="relative overflow-hidden">

            <motion.div
              className="flex gap-20 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >

              {[...partners, ...partners].map((p, i) => (

                <div
                  key={i}
                  className="
                  flex items-center justify-center
                  h-16 w-36
                  opacity-60 grayscale
                  hover:opacity-100 hover:grayscale-0
                  transition duration-300
                  "
                >

                  <Image
                    src={p.src}
                    alt={p.name}
                    width={120}
                    height={40}
                    className="object-contain"
                  />

                </div>

              ))}

            </motion.div>

            {/* fade edges */}

            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--background)] to-transparent" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--background)] to-transparent" />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

/* ================= STAT ITEM ================= */

function StatItem({ stat, inView }) {

  const [count, setCount] = useState(0);

  useEffect(() => {

    if (!inView) return;

    const end = stat.value;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (time) => {

      const progress = Math.min((time - startTime) / duration, 1);
      const value = Math.floor(progress * end);

      setCount(value);

      if (progress < 1) requestAnimationFrame(animate);

    };

    requestAnimationFrame(animate);

  }, [inView, stat.value]);

  const Icon = stat.icon;

  return (

    <div
      className="
      group space-y-2
      transition-all duration-300
      hover:-translate-y-1
      "
    >

      <Icon
        size={18}
        className="
        text-[var(--accent)]
        group-hover:scale-110
        transition
        "
      />

      <div className="text-2xl font-semibold">
        {count}
        {stat.suffix}
      </div>

      <div className="text-xs text-[var(--foreground)]/60">
        {stat.label}
      </div>

    </div>

  );
}