"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">

      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-[var(--accent)]/10 blur-[140px] rounded-full top-[-120px] left-[-120px]" />
        <div className="absolute w-[400px] h-[400px] bg-[var(--accent)]/10 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />
      </div>

      <div className="relative z-10 pt-32 pb-32">
        <div className="max-w-6xl mx-auto px-6 space-y-32">

          {/* ================= HERO PRIVY STYLE ================= */}

          {/* ================= COMPANY HERO ================= */}

<section>

  <div
    className="
    relative overflow-hidden
    rounded-3xl
    p-10 md:p-14
    text-black
    bg-gradient-to-br
    from-[#efe6cf]
    via-[#e5d6b1]
    to-[#cbb98a]
    "
  >

    {/* glow overlay */}
    <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,white,transparent)]" />

    <div className="relative grid md:grid-cols-2 gap-10 items-center">

      {/* TEXT */}

      <div>

        <p className="text-sm opacity-60 mb-4">
          Tentang Perusahaan
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
          Membangun Kepercayaan Digital
          untuk Masa Depan yang Aman
        </h2>

        <p className="mt-5 text-sm opacity-70 leading-relaxed">
          Kami percaya bahwa kepercayaan adalah fondasi dari setiap pengalaman digital.
          Oleh karena itu kami membangun sistem yang aman, transparan, dan dapat
          diandalkan untuk memastikan setiap interaksi digital berjalan
          dengan lancar dan terpercaya.
        </p>

        <button
          className="
          mt-6
          px-5 py-3
          rounded-full
          bg-black/80
          text-white
          text-sm
          hover:bg-black
          transition
          "
        >
          Jelajahi Tentang Kami
        </button>

      </div>


      {/* LOGO */}

      <div className="flex justify-center md:justify-end">

        <div
          className="
          text-6xl md:text-7xl
          font-semibold
          opacity-60
          text-black
          "
        >
          VINS
        </div>

      </div>

    </div>

  </div>

</section>


          {/* ================= APA ITU VINS ================= */}

          <section className="grid md:grid-cols-2 gap-12">

            <div>
              <h3 className="text-sm font-semibold tracking-wide">
                APA ITU VINS?
              </h3>
            </div>

            <p className="text-[var(--foreground)]/70 leading-relaxed">
              VINS adalah platform yang berfokus pada pengembangan solusi
              digital dengan pendekatan desain yang terstruktur dan teknologi
              yang scalable. Kami menggabungkan pengalaman desain, rekayasa
              perangkat lunak, serta pemikiran produk untuk membangun sistem
              yang dapat digunakan secara luas dan berkelanjutan.
            </p>

          </section>

          {/* ================= PROFILE ================= */}

          <section>

            <h2 className="text-2xl font-semibold mb-10 text-center">
              Personal <span className="text-[var(--accent)]">Profile</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">

              {[
                ["Full Name", "Kevin Simorangkir"],
                ["Specialization", "UI/UX, Project Management"],
                ["Education", "S.Kom – Informatics"],
                ["Location", "Lampung, Indonesia"],
                ["Experience", "1+ Years"],
                ["Focus", "Design Systems & UX Architecture"],
              ].map(([label, value], i) => (

                <motion.div
                  key={label}
                  whileHover={{ scale: 1.02 }}
                  transition={{ delay: i * 0.03 }}
                  className="
                  group relative p-5 rounded-xl
                  border border-[var(--border)]
                  bg-[var(--card)]/70 backdrop-blur-xl
                  transition-all duration-300
                  hover:border-[var(--accent)]
                  "
                >

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[var(--accent)]/5 rounded-xl transition" />

                  <p className="relative text-xs text-[var(--accent)] mb-1">
                    {label}
                  </p>

                  <p className="relative text-sm text-[var(--foreground)]/80">
                    {value}
                  </p>

                </motion.div>

              ))}

            </div>

          </section>

        </div>
      </div>
    </main>
  );
}