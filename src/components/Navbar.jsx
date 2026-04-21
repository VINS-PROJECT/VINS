"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Search, Menu, X, Clock, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { projectsData } from "@/data/projects";

export default function Navbar() {

  const pathname = usePathname();

  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  /* ================= FEATURED PROJECT ================= */

  const featuredProject = [...projectsData]
    .filter((p) => p.featured)
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))[0];

  /* ================= TIME ================= */

  useEffect(() => {

    const updateTime = () => {

  const now = new Date();

  const time = now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Jakarta"
  });

  const date = now.toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Jakarta"
  });

  setTime(`${time} • ${date}`);

};

    updateTime();
    const interval = setInterval(updateTime, 60000);

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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  /* ================= NAV DATA ================= */

  const navLinks = [
    { href: "/", label: "Home" },

    {
      label: "Works",
      mega: true
    },

    {
      label: "Career",
      dropdown: [
        { href: "/career/experience", label: "Experience" },
        { href: "/career/certificate", label: "Certificate" },
      ],
    },

    { href: "/about", label: "About" },
    { href: "/article", label: "Article" },
  ];

  const announcement =
    "This website is currently under development and has entered Version 4.0.0. The next update, Version 4.1.0, will be available soon. •";

  return (
    <>

      {/* ================= ANNOUNCEMENT ================= */}

      {!scrolled && (
        <div className="fixed top-0 left-0 w-full bg-[var(--accent)] text-black text-sm z-50">
          <div className="flex items-center px-6 py-2">
            <span className="uppercase text-xs tracking-widest font-medium mr-4">
              Announcement
            </span>

            <div className="overflow-hidden whitespace-nowrap flex-1">
              <div className="animate-marquee inline-block">
                {announcement} {announcement}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= NAVBAR ================= */}

      <header
        className={`fixed left-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? "top-0 bg-white/70 backdrop-blur-xl border-b border-black/5 shadow-sm"
            : "top-8 bg-white"
        }`}
      >

        <div className="flex items-center justify-between px-8 py-4">

          {/* LOGO */}

          <Link href="/">
            <Image src="/TP K.svg" alt="logo" width={26} height={26} />
          </Link>

          {/* ================= DESKTOP NAV ================= */}

          <nav className="hidden md:flex items-center gap-6 text-[15px] font-medium">

            {navLinks.map((l, i) => {

              if (!l.dropdown && !l.mega) {

                const active = isActive(l.href);

                return (
                  <Link key={i} href={l.href} className="group relative px-2 py-1">

                    <span
                      className={`transition ${
                        active
                          ? "text-black"
                          : "text-gray-600 group-hover:text-black"
                      }`}
                    >
                      {l.label}
                    </span>

                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--accent)] origin-left transition-transform duration-300 ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />

                  </Link>
                );
              }

              /* ================= MEGA MENU WORKS ================= */

              if (l.mega) {

                return (
                  <div key={i} className="relative group py-3">

                    <button className="flex items-center gap-1 text-gray-600 hover:text-black transition">
                      {l.label}
                      <ChevronDown size={14} />
                    </button>

                    <div
                      className="
                      mega-menu mega-animation
                      absolute left-1/2 -translate-x-1/2
                      top-14
                      w-[760px]
                      "
                    >

                      <div className="grid grid-cols-[2fr_1fr] gap-8">

                        {/* LEFT MENU */}

                        <div>

                          <div className="text-sm font-semibold mb-4">
                            Works
                          </div>

                          <div className="grid grid-cols-2 gap-4">

                            <Link href="/works/project" className="mega-item">
                              Projects
                            </Link>

                            <Link href="/works/upcoming-projects" className="mega-item">
                              Upcoming Projects
                            </Link>

                            <Link href="/works/resume" className="mega-item">
                              Resumes
                            </Link>

                            <Link href="/works/portfolio" className="mega-item">
                              Portfolio
                            </Link>

                          </div>

                        </div>

                        {/* FEATURED PROJECT */}

                        <div className="mega-feature">

                          {featuredProject && (

                            <Link href={`/works/project/${featuredProject.slug}`}>

                              <Image
                                src={featuredProject.image}
                                width={300}
                                height={200}
                                alt={featuredProject.title}
                                className="rounded-lg mb-3 object-cover"
                              />

                              <div className="font-medium text-sm">
                                {featuredProject.title}
                              </div>

                              <div className="text-xs text-gray-500">
                                {featuredProject.category} • {featuredProject.year}
                              </div>

                            </Link>

                          )}

                        </div>

                      </div>

                    </div>

                  </div>
                );
              }

              /* ================= DROPDOWN ================= */

              return (
                <div key={i} className="relative group py-3">

                  <button className="flex items-center gap-1 text-gray-600 hover:text-black transition">
                    {l.label}
                    <ChevronDown size={14} />
                  </button>

                  <div
                    className="
                    mega-animation
                    absolute left-0 top-10
                    bg-white/90 backdrop-blur-xl
                    rounded-xl shadow-xl p-2 w-[190px]
                    "
                  >

                    {l.dropdown.map((d) => (

                      <Link
                        key={d.href}
                        href={d.href}
                        className="block px-4 py-2 rounded-lg hover:bg-gray-100 text-sm transition"
                      >
                        {d.label}
                      </Link>

                    ))}

                  </div>

                </div>
              );

            })}

          </nav>

          {/* ================= RIGHT SIDE ================= */}

          <div className="flex items-center gap-3">

            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <Clock size={14} />
              {time}
            </div>

            <div className="relative hidden md:block">

              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 hover:bg-gray-100 rounded-md transition"
              >
                <Search size={18} />
              </button>

              <AnimatePresence>

                {searchOpen && (
                  <motion.input
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    type="text"
                    placeholder="Search article..."
                    className="absolute right-0 top-10 w-[220px] border rounded-full px-4 py-2 text-sm bg-white shadow focus:outline-none"
                  />
                )}

              </AnimatePresence>

            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-md"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

          </div>

        </div>

      </header>

    </>
  );
}