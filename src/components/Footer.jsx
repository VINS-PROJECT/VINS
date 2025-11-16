"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const socials = [
    { icon: <Twitter className="w-4 h-4" />, url: "#" },
    { icon: <Linkedin className="w-4 h-4" />, url: "https://www.linkedin.com/in/kevinsimorangkir/" },
    { icon: <Instagram className="w-4 h-4" />, url: "https://www.instagram.com/vins.ch/" },
    { icon: <Github className="w-4 h-4" />, url: "https://github.com/kevinsimorangkir21/" },
    { icon: <Youtube className="w-4 h-4" />, url: "#" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Experience", href: "/experience" },
    { name: "Certificates", href: "/certificate" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Changelog", href: "/changelog" },
    { name: "Status Website", href: "/status" },
  ];

  return (
    <footer
      className="
        relative pt-20 pb-10 border-t
        bg-[var(--background)] text-[var(--foreground)]
        border-[var(--accent)]/20 overflow-hidden
      "
    >
      {/* Gold Soft Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 1.8 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 25% 75%, var(--accent)20 0%, transparent 70%),
            radial-gradient(circle at 75% 25%, var(--accent-dark)12 0%, transparent 70%)
          `,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-14 z-10">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <motion.img
              src="/TP K.svg"
              alt="VINS Logo"
              className="w-10 h-10 opacity-90"
              whileHover={{ rotate: 5, scale: 1.07 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <span className="text-lg font-semibold text-[var(--accent)] tracking-wide">
              VINS
            </span>
          </div>

          <p className="text-sm text-[var(--foreground)]/70 leading-relaxed max-w-xs">
            Crafting meaningful digital experiences with clarity, intention, and timeless direction.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="font-semibold text-[var(--accent)] mb-4 tracking-wide">Explore</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((item, i) => (
              <motion.li key={i} whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <Link
                  href={item.href}
                  className="text-[var(--foreground)]/70 hover:text-[var(--accent)] transition-all"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="font-semibold text-[var(--accent)] mb-4 tracking-wide">Connect</h4>

          <p className="text-sm text-[var(--foreground)]/70 mb-4">
            Let’s connect and create something extraordinary.
          </p>

          <div className="flex gap-3">
            {socials.map(({ icon, url }, i) => (
              <motion.a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10 h-10 flex items-center justify-center rounded-full
                  border border-[var(--accent)]/25
                  text-[var(--foreground)]/70 bg-white/5
                  hover:border-[var(--accent)]/60 hover:text-[var(--accent)]
                  hover:shadow-[0_0_10px_var(--accent)]
                  transition-all duration-300 backdrop-blur-sm
                "
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.92 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* LEGAL */}
      <div className="relative mt-14 text-center z-10">

        <div className="flex flex-wrap justify-center gap-6 text-xs text-[var(--foreground)]/60 mb-6">
          {legalLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="hover:text-[var(--accent)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="w-full max-w-[260px] mx-auto h-[1px] bg-[var(--accent)]/25 mb-6" />

        <p className="text-xs text-[var(--foreground)]/60">
          © {new Date().getFullYear()}{" "}
          <span className="text-[var(--accent)] font-medium">VINS</span>. All rights reserved.
        </p>

        <p className="text-[var(--foreground)]/60 mt-2 text-xs">
          Built with <span className="text-[var(--accent)]">purpose</span> &{" "}
          <span className="text-[var(--accent-dark)]">direction</span>.
        </p>
      </div>
    </footer>
  );
}
