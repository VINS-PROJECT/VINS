"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Moon, Sun, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/vins-plus", label: "VINS+" },
    { href: "/article", label: "Articles" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-2xl px-6 md:px-10 transition-all duration-300 border-b
      ${
        scrolled
          ? "bg-[var(--background)]/85 border-[var(--border)] shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex justify-between items-center h-16">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.08, rotate: 3 }}>
            <Image src="/TP K.svg" alt="VINS" width={40} height={40} />
          </motion.div>
          <span className="font-bold text-lg tracking-widest text-[var(--accent)]">
            VINS
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-7 text-[15px] font-medium">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative transition group
                  ${
                    active
                      ? "text-[var(--accent)]"
                      : "text-gray-600 dark:text-gray-300"
                  }
                  hover:text-[var(--accent)]`}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-[var(--accent)] rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <motion.button
            aria-label="Search"
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
            whileHover={{ scale: 1.12 }}
          >
            <Search size={20} strokeWidth={1.8} />
          </motion.button>

          {/* Theme */}
          <motion.button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
            whileTap={{ scale: 0.85 }}
          >
            {isDark ? (
              <Sun size={20} strokeWidth={2} />
            ) : (
              <Moon size={20} strokeWidth={2} />
            )}
          </motion.button>

          {/* Hamburger Mobile */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition"
            whileTap={{ scale: 0.92 }}
          >
            {menuOpen ? (
              <X size={26} strokeWidth={2.4} />
            ) : (
              <Menu size={26} strokeWidth={2.4} />
            )}
          </motion.button>
        </div>
      </div>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="md:hidden bg-[var(--background)] border border-[var(--border)] rounded-xl p-4 mt-2 shadow-xl"
          >
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block w-full px-3 py-3 rounded-lg font-medium transition
                    ${
                      active
                        ? "bg-[var(--accent)] text-black"
                        : "text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-black"
                    }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
