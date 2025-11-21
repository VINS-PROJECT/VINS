"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Search, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* INIT THEME */
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

  /* SCROLL EFFECT */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
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
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${
          scrolled
            ? "backdrop-blur-xl bg-[var(--background)]/70 border-b border-[var(--border)] shadow-sm"
            : "bg-transparent border-b border-transparent"
        }
      `}
    >
      {/* TOP BAR */}
      <div className="px-6 md:px-10 py-2">
        <div className="flex items-center justify-between">
          {/* LEFT ACTIONS */}
          <div className="flex items-center gap-2">
            {/* THEME */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle Theme"
              className={`px-2.5 py-1 rounded-md border text-xs font-semibold transition
                ${
                  isDark
                    ? "bg-white/5 border-white/10 text-gray-200 hover:bg-white/10"
                    : "bg-gray-50 border-black/20 text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </motion.button>

            {/* GITHUB */}
            <a
              href="https://github.com/kevinsimorangkir21"
              target="_blank"
              aria-label="Github"
              className={`p-2 rounded-md border transition
                ${
                  isDark
                    ? "bg-white/5 border-white/10 text-gray-200 hover:bg-white/10"
                    : "bg-gray-50 border-black/20 text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              <Github className="w-4 h-4" />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com/in/kevinsimorangkir"
              target="_blank"
              aria-label="LinkedIn"
              className={`p-2 rounded-md border transition
                ${
                  isDark
                    ? "bg-white/5 border-white/10 text-gray-200 hover:bg-white/10"
                    : "bg-gray-50 border-black/20 text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2">
            <button
              aria-label="Search"
              className={`p-2 rounded-md border transition
                ${
                  isDark
                    ? "bg-white/5 border-white/10 text-gray-200 hover:bg-white/10"
                    : "bg-gray-50 border-black/20 text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              <Search className="w-4 h-4" />
            </button>

            {/* MOBILE MENU */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu Toggle"
              className={`p-2 rounded-md border transition md:hidden
                ${
                  isDark
                    ? "bg-white/5 border-white/10 text-gray-200 hover:bg-white/10"
                    : "bg-gray-50 border-black/20 text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* NAV LINKS */}
      <div className="px-6 md:px-10 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Image src="/TP K.svg" alt="VINS" width={40} height={40} />
          </motion.div>
          <span className="font-bold text-lg tracking-widest text-[var(--accent)]">VINS</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`
                  relative px-1 transition nav-link
                  ${active ? "active text-[var(--accent)]" : ""}
                  ${
                    isDark
                      ? "text-gray-300 hover:text-[var(--accent)]"
                      : "text-gray-800 hover:text-[var(--accent)]"
                  }
                `}
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

        {/* RIGHT BUTTONS */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/File/CV KEVIN SIMORANGKIR.pdf"
            target="_blank"
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-[var(--accent)] text-black hover:brightness-110"
          >
            Resume
          </Link>

          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg border text-sm font-semibold border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)]/10"
          >
            Hire Me
          </Link>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className={`
              md:hidden px-6 py-4 backdrop-blur-lg
              bg-[var(--background)]/90
            `}
          >
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    block px-3 py-2 rounded-md text-sm transition
                    ${active ? "text-[var(--accent)] bg-[var(--accent)]/10" : ""}
                    ${isDark ? "text-gray-200 hover:text-[var(--accent)]" : "text-gray-700 hover:text-[var(--accent)]"}
                  `}
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