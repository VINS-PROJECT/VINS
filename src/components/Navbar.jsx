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

  /* GLOBAL ICON BTN */
  const iconBtn = `
    flex items-center justify-center
    w-10 h-10 rounded-lg border
    transition-all duration-200 hover:scale-[1.04]
  `;

  const themeClass = isDark
    ? "bg-white/5 border-white/10 text-gray-200 hover:bg-white/10"
    : "bg-gray-50 border-black/20 text-gray-700 hover:bg-gray-100";

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

          {/* LEFT ICONS */}
          <div className="flex items-center gap-2">

            {/* THEME BUTTON */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle Theme"
              className={`${iconBtn} ${themeClass}`}
            >
              {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </motion.button>

            {/* GITHUB */}
            <a
              href="https://github.com/kevinsimorangkir21"
              target="_blank"
              aria-label="Github"
              className={`${iconBtn} ${themeClass}`}
            >
              <Github className="w-4 h-4" />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com/in/kevinsimorangkir"
              target="_blank"
              aria-label="LinkedIn"
              className={`${iconBtn} ${themeClass}`}
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-2">

            {/* SEARCH */}
            <button aria-label="Search" className={`${iconBtn} ${themeClass}`}>
              <Search className="w-4 h-4" />
            </button>

            {/* MOBILE MENU */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu Toggle"
              className={`${iconBtn} ${themeClass} md:hidden`}
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* NAV LINKS */}
      <div className="px-6 md:px-10 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div whileHover={{ scale: 1.06 }}>
            <Image src="/TP K.svg" alt="VINS" width={40} height={40} />
          </motion.div>
          <span className="font-bold text-lg tracking-widest text-[var(--accent)]">
            VINS
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-9 text-[15px] font-medium">
          {navLinks.map((l) => {
            const active =
              l.href === "/"
                ? pathname === "/"
                : pathname.startsWith(l.href);

            return (
              <Link
                key={l.href}
                href={l.href}
                className={`
                  relative px-1 transition font-medium
                  ${active ? "text-[var(--accent)]" : ""}
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
            href="/contact"
            className="
              w-32 h-10 flex items-center justify-center
              rounded-lg border text-sm font-semibold
              border-[var(--accent)] text-[var(--accent)]
              hover:bg-[var(--accent)]/10 transition-all
            "
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
            className="md:hidden px-6 py-4 backdrop-blur-lg bg-[var(--background)]/90"
          >
            {navLinks.map((l) => {
              const active =
                l.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(l.href);

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    block px-3 py-2 rounded-md text-sm transition
                    ${active ? "text-[var(--accent)] bg-[var(--accent)]/10" : ""}
                    ${
                      isDark
                        ? "text-gray-200 hover:text-[var(--accent)]"
                        : "text-gray-700 hover:text-[var(--accent)]"
                    }
                  `}
                >
                  {l.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="
                block mt-3 w-full h-10 flex items-center justify-center
                rounded-lg border border-[var(--accent)]
                text-[var(--accent)] text-sm font-semibold
                hover:bg-[var(--accent)]/10
              "
            >
              Hire Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
