"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const tabs = [
  { key: "about", label: "About Me" },
  { key: "project", label: "Project" },
];

export default function AboutProjectSection() {
  const [active, setActive] = useState("about");
  const isAbout = active === "about";

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-[1450px] mx-auto px-8 lg:px-12">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 md:mb-12">

          {/* Pill Tabs */}
          <div className="inline-flex items-center bg-[#F3F5FA] rounded-full p-1.5 w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActive(tab.key)}
                className={`
                px-5
                py-2.5
                rounded-full
                text-sm
                font-semibold
                transition
                ${active === tab.key
                  ? "bg-[#D4AF37] text-white"
                  : "text-gray-500 hover:text-gray-800"}
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em]">
            Discover <span className="text-gray-400">my work</span>.
          </h2>

        </div>

        {/* ================= SWAPPABLE GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

          {/* PHOTO CARD */}
          <motion.div
            layout
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={isAbout ? "order-1" : "order-2"}
          >
            <div
              className="
              relative
              rounded-[32px]
              overflow-hidden
              min-h-[420px]
              h-full
              "
            >
              <Image
                src="/hero.png"
                alt="Kevin Simorangkir"
                fill
                className="object-cover"
              />

              {/* Overlay Gradient */}
              <div
                className="
                absolute
                inset-x-0
                bottom-0
                h-2/3
                bg-gradient-to-t
                from-black/80
                via-black/30
                to-transparent
                "
              />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white/70 text-sm mb-2">
                  20 December 2024
                </p>
                <h3
                  className="
                  text-2xl
                  md:text-3xl
                  font-bold
                  text-white
                  leading-snug
                  "
                >
                  UI/UX Designer & Frontend
                  <br />
                  Developer Building Premium
                  <br />
                  Digital Products
                </h3>

                {/* Dots */}
                <div className="flex gap-2 mt-6">
                  <span className="h-2 w-6 rounded-full bg-white" />
                  <span className="h-2 w-2 rounded-full bg-white/40" />
                  <span className="h-2 w-2 rounded-full bg-white/40" />
                  <span className="h-2 w-2 rounded-full bg-white/40" />
                  <span className="h-2 w-2 rounded-full bg-white/40" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* INFO CARD */}
          <motion.div
            layout
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={isAbout ? "order-2" : "order-1"}
          >
            <div
              className="
              relative
              rounded-[32px]
              overflow-hidden
              bg-black
              p-10
              md:p-12
              min-h-[420px]
              h-full
              flex
              flex-col
              justify-center
              "
            >

              {/* Pattern background */}
              <div
                className="
                absolute
                inset-0
                bg-[url('/pattern.svg')]
                bg-repeat
                opacity-[0.08]
                "
              />

              {/* Decorative shape */}
              <div
                className="
                absolute
                -top-10
                -right-10
                h-56
                w-56
                rounded-full
                bg-[#D4AF37]/20
                blur-[80px]
                "
              />

              <div className="relative z-10 max-w-[380px]">
                <h3
                  className="
                  text-2xl
                  md:text-3xl
                  font-bold
                  text-white
                  leading-snug
                  mb-4
                  "
                >
                  Get to Know About Me
                </h3>

                <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8">
                  I'm a UI/UX Designer & Frontend Developer passionate
                  about creating premium digital experiences. I help
                  businesses turn ideas into thoughtful, modern products
                  through clean design and solid engineering.
                </p>

                <Link
                  href="/about"
                  className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  backdrop-blur-xl
                  px-6
                  py-3
                  text-[15px]
                  font-semibold
                  text-white
                  hover:bg-white/20
                  transition
                  "
                >
                  Get to Know Me
                  <ArrowUpRight size={16} />
                </Link>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}