"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
} from "framer-motion";
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

  /* =========================================================
     SCROLL PROGRESS
     ========================================================= */
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
  });

  /* =========================================================
     THEME
     ========================================================= */
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

  /* =========================================================
     FLOATING EFFECT (NO HIDE)
     ========================================================= */
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setFloating(window.scrollY > 64);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* =========================================================
     SEARCH
     ========================================================= */
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const fuse = useMemo(
    () =>
      new Fuse([...pages, ...articles], {
        keys: ["title"],
        threshold: 0.35,
      }),
    []
  );

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

  const isActive = (href) => pathname === href;

  return (
    <>
      {/* ================= SCROLL PROGRESS ================= */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--accent)] origin-left z-[60]"
      />

      {/* ================= DESKTOP NAV ================= */}
      <motion.header
        className={`
          hidden md:block fixed top-4 left-1/2 -translate-x-1/2
          w-[92%] max-w-6xl z-40
          backdrop-blur-xl
          bg-[var(--background)]/90
          border border-[var(--border)]
          rounded-full px-5
          transition-shadow
          ${floating ? "shadow-2xl" : "shadow-lg"}
        `}
      >
        <div className="h-14 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[var(--card)] flex items-center justify-center shadow-sm">
              <Image
                src="/TP K.svg"
                alt="VINS"
                width={20}
                height={20}
                className="object-contain"
                priority
              />
            </div>
            <span className="font-semibold text-[var(--foreground)]">
              VINS
            </span>
          </Link>

          {/* MENU */}
          <nav className="flex items-center gap-1 bg-[var(--card)] rounded-full p-1">
            {navLinks.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`
                    px-4 py-2 text-sm rounded-full transition-all
                    ${
                      active
                        ? "bg-[var(--background)] shadow text-[var(--accent)] font-medium"
                        : "text-[var(--foreground)]/60 hover:text-[var(--foreground)]"
                    }
                  `}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* ACTION */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-full hover:bg-[var(--card)]"
            >
              <Search size={18} />
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[var(--card)]"
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
                className="flex-1 flex flex-col items-center justify-center relative"
              >
                {active && (
                  <motion.span
                    layoutId="mobile-active"
                    className="absolute top-1 w-6 h-[3px] bg-[var(--accent)] rounded-full"
                  />
                )}
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
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
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
