"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Fuse from "fuse.js";
import {
  Search,
  Moon,
  Sun,
  Home,
  FileText,
  Sparkles,
  User,
  Grid,
  X,
  Command,
} from "lucide-react";
import Image from "next/image";

import { pages, articles } from "@/data/search-index";

export default function Navbar() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  /* =========================================================
     THEME
     ========================================================= */
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark =
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  /* =========================================================
     AUTO HIDE + FLOATING NAV
     ========================================================= */
  const [hidden, setHidden] = useState(false);
  const [floating, setFloating] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 120 && y > lastY.current);
      setFloating(y > 60);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* =========================================================
     SEARCH (REAL RESULTS)
     ========================================================= */
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const fuse = useRef(
    new Fuse([...pages, ...articles], {
      keys: ["title"],
      threshold: 0.35,
    })
  );

  useEffect(() => {
    if (!query) return setResults([]);
    setResults(fuse.current.search(query).map((r) => r.item));
  }, [query]);

  // Cmd / Ctrl + K
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

  /* =========================================================
     SCROLL SPY
     ========================================================= */
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const onSpy = () => {
      const scrollY = window.scrollY + 160;
      sections.forEach((sec) => {
        if (
          scrollY >= sec.offsetTop &&
          scrollY < sec.offsetTop + sec.offsetHeight
        ) {
          setActiveSection(`#${sec.id}`);
        }
      });
    };
    window.addEventListener("scroll", onSpy);
    return () => window.removeEventListener("scroll", onSpy);
  }, []);

  /* =========================================================
     NAV DATA
     ========================================================= */
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/article", label: "Articles" },
    { href: "/vins-plus", label: "VINS+" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const mobileTabs = [
    { href: "/", label: "Home", icon: Home },
    { href: "/article", label: "Articles", icon: FileText },
    { href: "/vins-plus", label: "VINS+", icon: Sparkles },
    { href: "/about", label: "About", icon: User },
    { href: "/contact", label: "More", icon: Grid },
  ];

  const isActive = (href) =>
    pathname === href || activeSection === href.replace("/", "#");

  return (
    <>
      {/* ================= SCROLL PROGRESS ================= */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--accent)] origin-left z-[60]"
      />

      {/* ================= DESKTOP NAV ================= */}
      <motion.header
        initial={{ y: -90 }}
        animate={{ y: hidden ? -90 : 0 }}
        className={`
          hidden md:block fixed top-4 left-1/2 -translate-x-1/2
          w-[92%] z-40
          backdrop-blur-xl
          bg-[var(--background)]/90
          border border-[var(--border)]
          rounded-2xl
          px-8 shadow-xl
          ${floating ? "scale-[1.01]" : ""}
        `}
      >
        <div className="h-16 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/TP K.svg" width={36} height={36} alt="VINS" />
            <div>
              <p className="font-extrabold tracking-widest text-[var(--accent)]">
                VINS
              </p>
              <p className="text-[10px] opacity-60 -mt-1">Enterprise Platform</p>
            </div>
          </Link>

          {/* MENU */}
          <nav className="flex gap-8 text-sm font-medium">
            {navLinks.map((l) => {
              const active = isActive(l.href);
              return (
                <Link key={l.href} href={l.href} className="relative">
                  {active && (
                    <motion.span
                      layoutId="desktop-active"
                      className="absolute -bottom-2 left-0 w-full h-[3px] bg-[var(--accent)] rounded-full"
                    />
                  )}
                  <span
                    className={
                      active
                        ? "text-[var(--accent)]"
                        : "text-[var(--foreground)]/70 hover:text-[var(--accent)]"
                    }
                  >
                    {l.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* ACTION */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="px-3 py-2 rounded-lg border border-[var(--border)] flex items-center gap-2"
            >
              <Search size={16} />
              <span className="text-xs opacity-60">⌘K</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-[var(--card)]"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ================= MOBILE NAV ================= */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] z-40">
        <div className="h-16 flex items-center justify-around rounded-2xl backdrop-blur-xl bg-[var(--background)]/90 border border-[var(--border)] shadow-2xl">
          {mobileTabs.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex-1 flex flex-col items-center justify-center"
              >
                <Icon
                  size={20}
                  className={
                    active
                      ? "text-[var(--accent)]"
                      : "text-[var(--foreground)]/60"
                  }
                />
                <span className="text-[11px] mt-1">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ================= SEARCH MODAL ================= */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="w-[90%] max-w-lg p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] shadow-2xl">
              <div className="flex items-center gap-3">
                <Search size={18} />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search pages & articles…"
                  className="w-full bg-transparent outline-none"
                />
                <X onClick={() => setSearchOpen(false)} />
              </div>

              {results.length > 0 && (
                <ul className="mt-3 space-y-1 max-h-52 overflow-auto">
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

              <p className="text-xs opacity-50 mt-3 flex items-center gap-1">
                <Command size={12} /> Press Esc to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
