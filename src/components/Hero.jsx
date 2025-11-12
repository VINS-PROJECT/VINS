"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [lang, setLang] = useState("id");

  useEffect(() => {
    const saved = localStorage.getItem("lang") || "id";
    setLang(saved);
    const listener = () => setLang(localStorage.getItem("lang") || "id");
    window.addEventListener("languageChange", listener);
    return () => window.removeEventListener("languageChange", listener);
  }, []);

  const t = {
    id: {
      title1: "Mendorong Ekonomi Kreator Indonesia",
      desc: "Saya membantu brand, startup, dan kreator membangun identitas digital yang kuat melalui desain, strategi, dan teknologi.",
      btn1: "Hubungi Saya",
      btn2: "Lihat Portofolio",
    },
    en: {
      title1: "Empowering Indonesia’s Creator Economy",
      desc: "I help brands, startups, and creators build strong digital identities through design, strategy, and technology.",
      btn1: "Contact Me",
      btn2: "View Portfolio",
    },
    jp: {
      title1: "インドネシアのクリエイター経済を支援する",
      desc: "デザイン、戦略、テクノロジーを通じてブランドやスタートアップ、クリエイターのデジタルアイデンティティを構築します。",
      btn1: "連絡する",
      btn2: "ポートフォリオを見る",
    },
    kr: {
      title1: "인도네시아의 크리에이터 경제를 강화하다",
      desc: "디자인, 전략 및 기술을 통해 브랜드와 창작자의 디지털 정체성을 구축합니다.",
      btn1: "연락하기",
      btn2: "포트폴리오 보기",
    },
  }[lang];

  return (
    <section
      className="
        relative overflow-hidden
        bg-white dark:bg-[#0b0f15]
        text-gray-900 dark:text-white
        py-28 md:py-18
        flex items-center
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* === LEFT TEXT === */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {t.title1}
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg leading-relaxed max-w-lg">
            {t.desc}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-[1.03] hover:shadow-lg transition-transform"
            >
              {t.btn1}
            </Link>
            <Link
              href="/projects"
              className="px-7 py-3 rounded-xl border border-gray-300 dark:border-white/20 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-50 dark:hover:bg-white/10 transition-all"
            >
              {t.btn2}
            </Link>
          </div>
        </motion.div>

        {/* === RIGHT IMAGE (TRANSPARENT COLLAGE) === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          {/* Soft glow background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ duration: 1.5 }}
            className="absolute -z-10 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full blur-[180px]"
          />
          
          {/* Transparent collage image (no frame, no border) */}
          <Image
            src="/Combine.png"
            alt="Collage Transparent"
            width={700}
            height={700}
            className="object-contain w-full h-auto max-w-xl drop-shadow-[0_0_25px_rgba(59,130,246,0.3)]"
            priority
          />
        </motion.div>
      </div>

      {/* === Subtle gradient overlay bottom === */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-[#0b0f15] to-transparent pointer-events-none" />
    </section>
  );
}
