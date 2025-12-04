"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/project" },
    { name: "Experience", href: "/experience" },
    { name: "Certificates", href: "/certificate" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const socials = [
    { icon: <Linkedin size={18} />, url: "https://www.linkedin.com/in/kevinsimorangkir/" },
    { icon: <Github size={18} />, url: "https://github.com/kevinsimorangkir21/" },
    { icon: <Instagram size={18} />, url: "https://www.instagram.com/vins.ch/" },
    { icon: <Twitter size={18} />, url: "#" },
  ];

  return (
    <footer className="w-full bg-[var(--background)] text-[var(--foreground)] border-t border-[var(--border)] pt-20">

      {/* MAIN GRID */}
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-14">

          {/* BRAND */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Image src="/TP K.svg" alt="VINS" width={40} height={40} />
              <span className="text-lg font-bold tracking-widest text-[var(--accent)]">
                VINS
              </span>
            </div>
            <p className="text-sm opacity-70 max-w-[260px] leading-relaxed">
              A creative digital designer crafting valuable digital experiences.
            </p>
          </div>

          {/* NAV */}
          <div className="md:col-span-2 flex flex-wrap gap-y-5 gap-x-10 mt-3">
            {navLinks.map((l, i) => (
              <Link
                key={i}
                href={l.href}
                className="text-sm opacity-75 hover:opacity-100 hover:text-[var(--accent)] transition"
              >
                {l.name}
              </Link>
            ))}
          </div>

          {/* CONTACT */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm mb-2">Contact</h4>

            <p className="flex items-center gap-2 opacity-80 text-sm">
              <Mail size={16} /> hello@vins.id
            </p>

            <p className="flex items-center gap-2 opacity-80 text-sm">
              <Phone size={16} /> +62 8XX-XXXX-XXXX
            </p>

            <div className="flex gap-3 mt-3">
              {socials.map(({ icon, url }, i) => (
                <motion.a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="opacity-70 hover:opacity-100 transition"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[var(--border)] py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs opacity-55">
          © {new Date().getFullYear()} VINS · All rights reserved.
        </div>
      </div>

    </footer>
  );
}
