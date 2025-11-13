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

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = {
    home: "Home",
    projects: "Projects",
    timeline: "Timeline",
    certificate: "Certificate",
    experience: "Experience",
    article: "Articles",
    about: "About",
    contact: "Contact",
    hire: "Hire Me",
    resume: "Resume",
  };

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
      className={`fixed top-0 left-0 w-full z-[60] backdrop-blur-2xl transition-all duration-500 border-b ${
        scrolled
          ? "bg-white/70 dark:bg-[#050505]/70 border-[#E2C07C]/30 shadow-[0_0_15px_rgba(226,192,124,0.15)]"
          : "bg-transparent border-transparent"
      }`}
    >
      {/* TOPBAR */}
      <div
        className={`h-9 flex items-center justify-between px-6 md:px-10 text-xs transition-all ${
          isDark
            ? "bg-black/50 border-b border-white/10"
            : "bg-white/70 border-b border-neutral-200 backdrop-blur-lg"
        }`}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md hover:text-[#E2C07C] transition"
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

        <div className="flex items-center gap-3">
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

      {/* MAIN NAV */}
      <nav className="h-16 flex items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 6, scale: 1.07 }}
            transition={{ type: "spring", stiffness: 180 }}
            className="w-10 h-10 flex items-center"
          >
            <Image
              src="/TP K.svg"
              alt="VINS Logo"
              width={40}
              height={40}
              className="object-contain translate-y-[1px]"
              priority
            />
          </motion.div>

          <span className="text-xl font-bold tracking-widest bg-gradient-to-r from-[#E2C07C] to-[#c8a469] text-transparent bg-clip-text translate-y-[1px]">
            VINS
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[15px] font-medium tracking-wide transition-all duration-300 ${
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

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/File/CV KEVIN SIMORANGKIR.pdf"
            target="_blank"
            className="px-4 py-2 rounded-lg bg-[#E2C07C] text-black text-sm font-semibold hover:brightness-110 hover:scale-[1.03] transition"
          >
            {t.resume}
          </Link>

          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg border border-[#E2C07C] text-[#E2C07C] hover:bg-[#e2c07c0f] text-sm font-semibold hover:scale-[1.03] transition"
          >
            {t.hire}
          </Link>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 dark:bg-black/95 border-t border-neutral-200 dark:border-white/10 backdrop-blur-lg"
          >
            <div className="flex flex-col px-6 py-4 gap-2">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      active
                        ? "bg-[#E2C07C]/20 text-[#E2C07C] font-semibold"
                        : "text-neutral-700 dark:text-neutral-300 hover:bg-[#E2C07C]/10 hover:text-[#E2C07C]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
