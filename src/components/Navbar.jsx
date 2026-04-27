"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/article", label: "Articles" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // 🔥 AUTO CLOSE ON ROUTE CHANGE
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-black/5">

      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/TP K.svg"
            alt="logo"
            width={28}
            height={28}
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link key={link.href} href={link.href} className="relative group">
                <span
                  className={`transition ${
                    active ? "text-black" : "text-gray-500"
                  }`}
                >
                  {link.label}
                </span>

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-black origin-left transition-transform duration-300 ${
                    active
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden z-50"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* 🔥 OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* 🔥 MOBILE MENU */}
      <div
        className={`
        md:hidden
        fixed top-0 right-0 h-full w-[75%] max-w-xs
        bg-white border-l border-gray-200
        z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="px-6 py-20 space-y-6">

          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-base ${
                  active ? "text-black font-medium" : "text-gray-500"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

        </div>
      </div>

    </header>
  );
}