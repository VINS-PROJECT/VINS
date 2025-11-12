"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Search, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("id");

  // === INITIAL LOAD ===
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
    setLang(localStorage.getItem("lang") || "id");
  }, []);

  // === THEME TOGGLE ===
  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  // === LANGUAGE HANDLER ===
  const handleLangSelect = (code) => {
    setLang(code);
    localStorage.setItem("lang", code);
    window.dispatchEvent(new Event("languageChange"));
  };

  // === SCROLL DETECTION ===
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // === TRANSLATION ===
  const t = {
    id: {
      home: "Beranda",
      projects: "Proyek",
      timeline: "Linimasa",
      certificate: "Sertifikat",
      experience : "Pengalaman",
      article: "Artikel",
      about: "Tentang",
      contact: "Kontak",
      hire: "Hire Me",
      resume: "Resume",
    },
    en: {
      home: "Home",
      projects: "Projects",
      timeline: "Timeline",
      certificate: "Certificate",
      experience : "Experience",
      article: "Articles",
      about: "About",
      contact: "Contact",
      hire: "Hire Me",
      resume: "Resume",
    },
    jp: {
      home: "ホーム",
      projects: "プロジェクト",
      timeline: "タイムライン",
      certificate: "認定証",
      experience : "経験",
      article: "記事",
      about: "概要",
      contact: "連絡先",
      hire: "採用する",
      resume: "履歴書",
    },
    kr: {
      home: "홈",
      projects: "프로젝트",
      timeline: "타임라인",
      certificate: "자격증",
      experience : "경력",
      article: "기사",
      about: "소개",
      contact: "연락처",
      hire: "채용하기",
      resume: "이력서",
    },
  }[lang];

  const navLinks = [
    { href: "/", label: t.home },
    { href: "/projects", label: t.projects },
    { href: "/timeline", label: t.timeline },
    { href: "/certificate", label: t.certificate },
    { href: "/experience", label: t.experience },
    { href: "/article", label: t.article },
    { href: "/about", label: t.about },
    { href: "/contact", label: t.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[60] backdrop-blur-2xl transition-all duration-500 border-b
        ${
          scrolled
            ? "bg-white/80 dark:bg-black/80 border-[#E2C07C]/20 shadow-sm"
            : "bg-transparent border-transparent"
        }`}
    >
      {/* === TOP BAR === */}
      <div
        className={`h-9 flex items-center justify-between px-6 md:px-10 text-xs transition-colors duration-300
          ${
            isDark
              ? "bg-black/60 border-b border-white/10"
              : "bg-white/70 border-b border-neutral-200"
          }`}
      >
        {/* === Left Icons === */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md hover:text-[#E2C07C] transition"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-1 group transition"
          >
            <Github className="w-4 h-4 text-neutral-700 dark:text-neutral-300 group-hover:text-[#E2C07C]" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-1 group transition"
          >
            <Linkedin className="w-4 h-4 text-neutral-700 dark:text-neutral-300 group-hover:text-[#E2C07C]" />
          </a>
        </div>

        {/* === Language Selector === */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 border border-neutral-300/30 dark:border-white/10 rounded-md px-1.5 py-0.5 bg-white/50 dark:bg-black/40">
            {["id", "en", "jp", "kr"].map((code) => (
              <button
                key={code}
                onClick={() => handleLangSelect(code)}
                className={`px-2 py-0.5 rounded text-xs font-medium transition-all duration-300 ${
                  lang === code
                    ? "bg-[#E2C07C] text-white"
                    : "text-neutral-700 dark:text-neutral-300 hover:text-[#E2C07C]"
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <button className="p-1.5 rounded-md hover:text-[#E2C07C] transition">
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:text-[#E2C07C] transition"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* === MAIN NAV === */}
      <nav className="h-16 flex items-center justify-between px-6 md:px-10 transition-colors">
        {/* === LOGO (SVG) === */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-10 h-10 flex items-center justify-center rounded-lg"
          >
            <Image
              src="/TP K.svg" // ⬅️ taruh logo SVG kamu di folder /public
              alt="VINS Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </motion.div>
            <span className="text-[#ffffff]">VINS</span>
        </Link>

        {/* === DESKTOP NAV === */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-all duration-300 ${
                  active
                    ? "text-[#E2C07C]"
                    : "text-neutral-700 dark:text-neutral-300 hover:text-[#E2C07C]"
                }`}
              >
                <span className="relative inline-block pb-1">
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute left-0 bottom-0 h-[2px] bg-[#E2C07C] rounded-full w-full"
                    />
                  )}
                </span>
              </Link>
            );
          })}
        </div>

        {/* === CTA BUTTONS === */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/resume.pdf"
            target="_blank"
            className="px-4 py-2 rounded-lg bg-[#E2C07C] text-black text-sm font-semibold hover:brightness-110 transition-transform hover:scale-[1.03]"
          >
            {t.resume}
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg border border-[#E2C07C] text-[#E2C07C] hover:bg-[#E2C07C]/10 text-sm font-semibold transition-transform hover:scale-[1.03]"
          >
            {t.hire}
          </Link>
        </div>
      </nav>

      {/* === MOBILE MENU === */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 dark:bg-black/95 border-t border-neutral-200 dark:border-white/10 backdrop-blur-lg"
          >
            <div className="flex flex-col px-6 py-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? "bg-[#E2C07C]/20 text-[#E2C07C] font-semibold"
                      : "text-neutral-700 dark:text-neutral-300 hover:bg-[#E2C07C]/10 hover:text-[#E2C07C]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
