"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import Fuse from "fuse.js";
import {
  Search,
  Moon,
  Sun,
  X,
  Menu,
  Command,
} from "lucide-react";
import Image from "next/image";

import { pages, articles } from "@/data/search-index";

export default function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  /* ================= SCROLL PROGRESS ================= */
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
  });

  /* ================= THEME ================= */
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark =
      saved === "dark" ||
      (!saved &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  }, [isDark]);

  /* ================= FLOATING / SHRINK ================= */
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    const onScroll = () => setFloating(window.scrollY > 72);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= SEARCH ================= */
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const fuse = useMemo(() => {
    return new Fuse([...pages, ...articles], {
      keys: ["title"],
      threshold: 0.35,
    });
  }, []);

  const results = useMemo(() => {
    if (!query) return [];
    return fuse.search(query).map((r) => r.item);
  }, [query, fuse]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") setSearchOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ================= NAV ================= */
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/article", label: "Articles" },
    { href: "/vins-plus", label: "VINS+" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ===== Scroll Progress ===== */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--accent)] origin-left z-[60]"
      />

      {/* ===== Navbar ===== */}
      <motion.header
        animate={{
          paddingTop: floating ? 6 : 10,
          paddingBottom: floating ? 6 : 10,
        }}
        transition={{ duration: 0.2 }}
        className={`
          fixed top-4 left-1/2 -translate-x-1/2 z-50
          w-[92%] max-w-6xl
          backdrop-blur-xl
          bg-[var(--background)]/90
          border border-[var(--border)]
          rounded-full px-4
          ${floating ? "shadow-2xl" : "shadow-lg"}
        `}
      >
        <div className="h-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[var(--card)] flex items-center justify-center shadow-sm">
              <Image
                src="/TP K.svg"
                alt="VINS"
                width={20}
                height={20}
                priority
              />
            </div>
            <span className="font-semibold tracking-tight">
              VINS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-[var(--card)] rounded-full p-1 relative">
            {navLinks.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="relative px-4 py-2 text-sm rounded-full"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-[var(--background)] shadow"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      active
                        ? "text-[var(--accent)] font-medium"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    {l.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-full hover:bg-[var(--card)]"
            >
              <Search size={18} />
            </button>

            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[var(--card)]"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="md:hidden p-2 rounded-full hover:bg-[var(--card)]"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="md:hidden mt-3 mb-3 p-2 bg-[var(--card)] rounded-2xl"
            >
              {navLinks.map((l) => {
                const active = isActive(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm ${
                      active
                        ? "bg-[var(--background)] text-[var(--accent)] font-medium"
                        : "opacity-80 hover:opacity-100"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ===== Search Modal ===== */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="w-[90%] max-w-lg p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <Search size={18} />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search pages & articles…"
                  className="w-full bg-transparent outline-none"
                />
                <X
                  className="cursor-pointer opacity-60 hover:opacity-100"
                  onClick={() => setSearchOpen(false)}
                />
              </div>

              {query && results.length === 0 && (
                <p className="text-sm opacity-50 mt-4">
                  No results found.
                </p>
              )}

              {results.length > 0 && (
                <ul className="mt-3 space-y-1 max-h-56 overflow-auto">
                  {results.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setSearchOpen(false)}
                      className="block px-3 py-2 rounded hover:bg-[var(--card)]"
                    >
                      {item.title}
                    </Link>
                  ))}
                </ul>
              )}

              <p className="text-xs opacity-50 mt-4 flex items-center gap-1">
                <Command size={12} /> Press Esc to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
