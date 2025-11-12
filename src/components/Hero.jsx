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
        bg-black text-white
        py-28 md:py-18
        flex items-center
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* === LEFT TEXT === */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="block text-[#E2C07C]">{t.title1}</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
            {t.desc}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact"
              className="px-7 py-3 rounded-xl bg-[#E2C07C] text-black font-semibold hover:brightness-110 hover:scale-[1.03] transition-all duration-300"
            >
              {t.btn1}
            </Link>
            <Link
              href="/projects"
              className="px-7 py-3 rounded-xl border border-[#E2C07C]/70 text-[#E2C07C] font-semibold hover:bg-[#E2C07C]/10 hover:scale-[1.03] transition-all duration-300"
            >
              {t.btn2}
            </Link>
          </div>
        </motion.div>

        {/* === RIGHT IMAGE === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center md:justify-end"
        >
          {/* subtle background circle for depth */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.08 }}
            transition={{ duration: 1.5 }}
            className="absolute -z-10 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[#E2C07C]/30 rounded-full blur-[120px]"
          />

          <Image
            src="/Combine.png"
            alt="Collage"
            width={700}
            height={700}
            className="object-contain w-full h-auto max-w-xl"
            priority
          />
        </motion.div>
      </div>

      {/* === Bottom fade transition === */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
