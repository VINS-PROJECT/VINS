"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import Fuse from "fuse.js";
import {
  Search,
  Moon,
  Sun,
  X,
  Menu,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

import { pages, articles } from "@/data/search-index";

export default function Navbar() {
  const pathname = usePathname();

  /* ================= THEME ================= */
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  /* ================= SEARCH ================= */
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchInputRef = useRef(null);

  const fuse = useMemo(
    () =>
      new Fuse([...pages, ...articles], {
        keys: ["title", "description", "tags"],
        threshold: 0.35,
      }),
    []
  );

  const results = useMemo(() => {
    if (!query) return [];
    return fuse.search(query).map((r) => r.item).slice(0, 6);
  }, [query, fuse]);

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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className="
          fixed
          top-[calc(env(safe-area-inset-top)+1rem)]
          left-1/2 -translate-x-1/2
          z-50
          w-[92%] max-w-6xl
          bg-[var(--background)]/90
          backdrop-blur-lg
          border border-[var(--border)]
          rounded-full
        "
      >
        <div className="h-14 px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/TP K.svg"
              alt="VINS"
              width={22}
              height={22}
              priority
            />
            <span className="font-semibold tracking-tight">
              VINS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`
                    px-4 py-2 rounded-full text-sm transition
                    ${
                      active
                        ? "text-[var(--accent)] font-medium"
                        : "opacity-70 hover:opacity-100"
                    }
                  `}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-lg hover:bg-[var(--card)] transition"
            >
              <Search size={18} />
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-[var(--card)] transition"
            >
              {mounted && (isDark ? <Sun size={18} /> : <Moon size={18} />)}
            </button>

            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="md:hidden p-2 rounded-lg hover:bg-[var(--card)] transition"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* ================= NAVBAR SPACER ================= */}
      <div className="h-[calc(56px+1rem)] md:h-[calc(56px+1.5rem)]" />

      {/* ================= MOBILE MENU (CLEAN, NO MORPH) ================= */}
      {menuOpen && (
        <div
          className="
            fixed inset-x-0
            top-[calc(env(safe-area-inset-top)+4.5rem)]
            z-40
            md:hidden
            px-4
          "
        >
          <div
            className="
              bg-[var(--background)]
              border border-[var(--border)]
              rounded-xl
              shadow-xl
              overflow-hidden
            "
          >
            {navLinks.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`
                    flex items-center justify-between
                    px-5 py-4 text-sm
                    border-b border-[var(--border)]
                    last:border-none
                    ${
                      active
                        ? "text-[var(--accent)] font-medium"
                        : "opacity-80 hover:opacity-100"
                    }
                  `}
                >
                  {l.label}
                  {active && <ArrowRight size={14} />}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* ================= SEARCH MODAL ================= */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-[20vh] px-4"
          onClick={() => setSearchOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl rounded-2xl bg-[var(--background)] border border-[var(--border)]"
          >
            <div className="flex items-center gap-3 p-4 border-b border-[var(--border)]">
              <Search size={18} className="opacity-50" />
              <input
                ref={searchInputRef}
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search…"
                className="flex-1 bg-transparent outline-none"
              />
              <button onClick={() => setSearchOpen(false)}>
                <X size={16} />
              </button>
            </div>

            {results.length > 0 && (
              <ul className="p-2">
                {results.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSearchOpen(false)}
                    className="
                      flex items-center justify-between
                      px-3 py-3 rounded-lg
                      hover:bg-[var(--card)]
                      transition
                    "
                  >
                    <span>{item.title}</span>
                    <ArrowRight size={14} className="opacity-40" />
                  </Link>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
}
