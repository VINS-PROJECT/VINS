"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Moon,
  Sun,
  Menu,
  X,
  Search as SearchIcon,
  Github,
  Linkedin,
} from "lucide-react";

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

    const savedLang = localStorage.getItem("lang") || "id";
    setLang(savedLang);
  }, []);

  // === THEME TOGGLE ===
  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  // === LANGUAGE SELECT ===
  const handleLangSelect = (code) => {
    setLang(code);
    localStorage.setItem("lang", code);
    window.dispatchEvent(new Event("languageChange"));
  };

  // === SCROLL EFFECT ===
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // === TRANSLATION ===
  const t = {
    id: {
      home: "Beranda",
      projects: "Proyek",
      timeline: "Linimasa",
      certificate: "Sertifikat",
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
      article: "기사",
      about: "소개",
      contact: "연락처",
      hire: "채용하기",
      resume: "이력서",
    },
  }[lang];

  // === NAVIGATION LINKS ===
  const navLinks = [
    { href: "/", label: t.home },
    { href: "/projects", label: t.projects },
    { href: "/timeline", label: t.timeline },
    { href: "/certificate", label: t.certificate },
    { href: "/article", label: t.article },
    { href: "/about", label: t.about },
    { href: "/contact", label: t.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[60] flex flex-col transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
      role="banner"
    >
      {/* === TOP BAR === */}
      <div
        className={`topbar h-9 flex items-center justify-between px-6 md:px-10 text-xs transition-colors duration-200 ${
          isDark
            ? "bg-[#071014]/70 border-b border-white/8"
            : "bg-white/70 border-b border-black/5"
        }`}
      >
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md border border-white/10 bg-transparent text-gray-800 dark:text-gray-200 hover:bg-white/10 transition"
          >
            {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          {/* Socials */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-1 hover:text-cyan-400"
          >
            <Github className="w-4 h-4 text-gray-800 dark:text-gray-200" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-1 hover:text-cyan-400"
          >
            <Linkedin className="w-4 h-4 text-gray-800 dark:text-gray-200" />
          </a>
        </div>

        {/* Right - Language Selector */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 border border-white/10 rounded-md px-1.5 py-0.5 bg-white/50 dark:bg-white/5">
            {["id", "en", "kr", "jp"].map((code) => (
              <button
                key={code}
                onClick={() => handleLangSelect(code)}
                className={`px-2 py-0.5 rounded text-xs font-medium transition ${
                  lang === code
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow"
                    : "text-gray-700 dark:text-gray-300 hover:text-cyan-400"
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Search */}
          <button
            onClick={() => {}}
            className="p-1.5 rounded-md border border-white/10 hover:bg-white/10 transition"
          >
            <SearchIcon className="w-4 h-4 text-gray-800 dark:text-gray-200" />
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-md border border-white/10"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* === MAIN BAR === */}
      <nav
        className={`mainbar h-16 flex items-center justify-between px-6 md:px-10 transition-colors duration-200 ${
          isDark ? "bg-[#071014]/70" : "bg-white/80"
        }`}
        role="navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 6 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold shadow"
          >
            A
          </motion.div>
          <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">
            Anin<span className="text-cyan-400">Dev</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`nav-link text-sm font-medium transition ${
                  active
                    ? "text-cyan-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-cyan-400"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/resume.pdf"
            target="_blank"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold shadow"
          >
            {t.resume}
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold shadow"
          >
            {t.hire}
          </Link>
        </div>
      </nav>

      {/* === MOBILE DROPDOWN === */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className={`md:hidden bg-white/95 dark:bg-[#071014]/95 border-t border-white/8 backdrop-blur`}
          >
            <div className="flex flex-col px-6 py-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md ${
                    pathname === link.href
                      ? "text-cyan-400 bg-white/5"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/8"
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
