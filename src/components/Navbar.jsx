"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/article", label: "Articles" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ===================== HEADER ===================== */}

      <header
        className={`
          fixed
          top-0
          inset-x-0
          z-50
          transition-all
          duration-500
          ease-out
          ${scrolled ? "pt-4" : "pt-8"}
        `}
      >
        <div
          className={`
            mx-auto
            max-w-7xl
            transition-all
            duration-500
            ease-out

            ${
              scrolled
                ? `
                  h-20
                  rounded-full
                  bg-white/90
                  backdrop-blur-xl
                  border
                  border-white/40
                  shadow-[0_20px_60px_rgba(0,0,0,.12)]
                  px-8
                `
                : `
                  h-24
                  bg-transparent
                  px-6
                `
            }
          `}
        >
          <div className="flex h-full items-center justify-between">

            {/* ================= LOGO ================= */}

            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <Image
                src={scrolled ? "/TP K Black.svg" : "/TP K White.svg"}
                alt="Logo"
                width={175}
                height={50}
                priority
                className="w-auto h-10 transition-all duration-300"
              />
            </Link>

            {/* ================= DESKTOP MENU ================= */}

            <nav className="hidden lg:flex items-center gap-2">

              {navLinks.map((item) => {

                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      relative
                      rounded-full
                      px-5
                      py-3
                      text-[16px]
                      font-medium
                      transition-all
                      duration-300

                      ${
                        scrolled
                          ? active
                            ? "bg-slate-100 text-slate-900"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                          : active
                          ? "bg-white/15 text-white"
                          : "text-white hover:bg-white/10"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                );

              })}

            </nav>

            {/* ================= RIGHT SIDE ================= */}

            <div className="hidden lg:flex items-center gap-4">

              <Link
                href="/contact"
                className={`
                  rounded-full
                  px-7
                  py-3
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    scrolled
                      ? `
                        bg-[#0F172A]
                        text-white
                        hover:bg-slate-800
                      `
                      : `
                        border
                        border-white
                        text-white
                        hover:bg-white
                        hover:text-black
                      `
                  }
                `}
              >
                Contact Me
              </Link>

            </div>

            {/* ================= MOBILE BUTTON ================= */}

            <button
              onClick={() => setOpen(!open)}
              className={`
                lg:hidden
                transition

                ${
                  scrolled
                    ? "text-slate-900"
                    : "text-white"
                }
              `}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>
        </div>
      </header>

            {/* ================= OVERLAY ================= */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            fixed
            inset-0
            z-40
            bg-black/40
            backdrop-blur-sm
            lg:hidden
            transition-all
            duration-300
          "
        />
      )}

      {/* ================= MOBILE DRAWER ================= */}

      <aside
        className={`
          fixed
          top-0
          right-0
          z-50
          h-screen
          w-[85%]
          max-w-sm
          bg-white
          shadow-2xl
          transition-all
          duration-500
          ease-out
          lg:hidden

          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* Header */}

        <div className="flex items-center justify-between px-6 pt-8 pb-6 border-b">

          <Image
            src="/TP K Black.svg"
            alt="Logo"
            width={150}
            height={45}
            className="w-auto h-9"
          />

          <button
            onClick={() => setOpen(false)}
            className="
              rounded-full
              p-2
              hover:bg-gray-100
              transition
            "
          >
            <X size={24} />
          </button>

        </div>

        {/* Navigation */}

        <div className="px-6 py-8">

          <div className="space-y-2">

            {navLinks.map((item) => {

              const active = isActive(item.href);

              return (

                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    px-5
                    py-4
                    text-base
                    font-medium
                    transition-all
                    duration-300

                    ${
                      active
                        ? `
                          bg-slate-900
                          text-white
                        `
                        : `
                          text-slate-700
                          hover:bg-slate-100
                        `
                    }
                  `}
                >

                  {item.label}

                  {active && (
                    <span
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-white
                      "
                    />
                  )}

                </Link>

              );

            })}

          </div>

          {/* Divider */}

          <div className="my-8 border-t border-gray-200" />

          {/* CTA */}

          <Link
            href="/contact"
            className="
              flex
              items-center
              justify-center
              rounded-full
              bg-slate-900
              py-4
              text-white
              font-semibold
              transition-all
              duration-300
              hover:bg-slate-800
            "
          >
            Contact Me
          </Link>

          {/* Footer */}

          <div className="mt-10">

            <p className="text-sm text-gray-500">
              © 2026 Kevin Simorangkir
            </p>

            <p className="mt-2 text-xs text-gray-400 leading-6">
              UI/UX Designer • Frontend Developer •
              Project Manager
            </p>

          </div>

        </div>

      </aside>

    </>
  );
}