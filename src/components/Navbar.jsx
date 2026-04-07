"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Search, Menu, X, Clock, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ================= TIME ================= */

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("id-ID", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  /* ================= SCROLL ================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= NAV ================= */

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/article", label: "Artikel" },
    { href: "/vins-plus", label: "VINS+" },
    { href: "/about", label: "Tentang" },
    { href: "/contact", label: "Kontak" },
  ];

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const news =
    "Artikel terbaru: Designing systems instead of pages • Why performance matters in UX • Building scalable frontends with Next.js •";

  return (
    <>
      {/* ================= NEWS BAR ================= */}

      {!scrolled && (
        <div className="fixed top-0 left-0 w-full bg-[var(--accent)] text-black text-sm z-50">

          <div className="flex items-center justify-between px-6 py-2">

            <div className="flex items-center gap-4 overflow-hidden flex-1">

              <span className="uppercase text-xs tracking-widest font-medium">
                News
              </span>

              <div className="overflow-hidden whitespace-nowrap flex-1">
                <div className="animate-marquee inline-block">
                  {news} {news}
                </div>
              </div>

            </div>

            <div className="flex items-center gap-2 text-xs ml-6">
              <span>ENG</span>
              <span className="opacity-50">|</span>
              <Globe size={14} />
              <span>IDN</span>
            </div>

          </div>

        </div>
      )}

      {/* ================= NAVBAR ================= */}

      <header
        className={`fixed left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "top-0 bg-white/60 backdrop-blur-xl border-b border-black/5"
            : "top-8 bg-white"
        }`}
      >
        <div className="flex items-center justify-between px-8 py-4">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/TP K.svg" alt="logo" width={26} height={26} />
          </Link>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex items-center gap-6 text-[15px] font-medium">

            {navLinks.map((l) => {
              const active = isActive(l.href);

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-4 py-2 rounded-full transition ${
                    active
                      ? "bg-gray-100 text-black"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}

          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <Clock size={14} />
              {time}
            </div>

            <button className="p-2 hover:bg-gray-100 rounded-md">
              <Search size={18} />
            </button>

            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-md"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

          </div>

        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}

      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">

            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35 }}
              className="
              absolute top-0 left-0 bottom-0
              w-[280px]
              bg-white
              shadow-xl
              p-6
              flex flex-col
              "
            >

              {/* HEADER */}
              <div className="flex items-center justify-between mb-8">

                <Image src="/TP K.svg" alt="logo" width={26} height={26} />

                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-md hover:bg-gray-100"
                >
                  <X size={20} />
                </button>

              </div>

              {/* NAV LINKS */}
              <nav className="flex flex-col gap-4 text-[16px] font-medium">

                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-3 rounded-lg hover:bg-gray-100 transition"
                  >
                    {l.label}
                  </Link>
                ))}

              </nav>

            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </>
  );
}