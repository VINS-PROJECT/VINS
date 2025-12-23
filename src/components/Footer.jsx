"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  Activity,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { siteInfo } from "@/config/site-info";

export default function Footer() {
  const navSections = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/project" },
        { name: "Experience", href: "/experience" },
        { name: "Certificates", href: "/certificate" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Status", href: "/status" },
        { name: "Changelog", href: "/changelog" },
        { name: "Privacy Policy", href: "/policy" },
        { name: "Terms & Conditions", href: "/terms" },
      ],
    },
  ];

  const socials = [
    {
      icon: <Linkedin size={18} />,
      url: "https://www.linkedin.com/in/kevinsimorangkir/",
    },
    {
      icon: <Github size={18} />,
      url: "https://github.com/kevinsimorangkir21/",
    },
    {
      icon: <Instagram size={18} />,
      url: "https://www.instagram.com/vins.ch/",
    },
  ];

  const statusStyles = {
    operational: "bg-emerald-500",
    maintenance: "bg-amber-500",
    outage: "bg-red-500",
  };

  return (
    <footer
      role="contentinfo"
      className="
        hidden md:block
        relative
        bg-[var(--background)]
        text-[var(--foreground)]
        overflow-hidden
      "
    >
      {/* ================= GLASS BACKDROP ================= */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 18% 30%, var(--accent)/0.08, transparent 60%),
            radial-gradient(circle at 82% 70%, var(--accent-dark)/0.10, transparent 65%)
          `,
        }}
      />

      {/* ================= MAIN CONTENT ================= */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="
          relative z-10
          max-w-7xl mx-auto px-6 py-20
          grid md:grid-cols-4 gap-14
        "
      >
        {/* ================= BRAND ================= */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.08, rotate: 4 }}>
              <Image src="/TP K.svg" alt="VINS" width={44} height={44} />
            </motion.div>
            <span className="text-xl font-bold tracking-widest text-[var(--accent)]">
              VINS
            </span>
          </Link>

          {/* STATUS */}
          <div className="flex items-center gap-2 text-xs tracking-wide">
            <Activity size={14} />
            <span
              className={`w-2 h-2 rounded-full ${
                statusStyles[siteInfo.status]
              }`}
            />
            <span className="uppercase font-semibold opacity-80">
              {siteInfo.status}
            </span>
          </div>

          <p className="text-sm opacity-75 leading-relaxed max-w-xs">
            Turning ideas into meaningful digital experiences through thoughtful
            design and structured execution.
          </p>
        </div>

        {/* ================= NAVIGATION ================= */}
        <nav
          className="md:col-span-2 grid grid-cols-2 gap-10"
          aria-label="Footer Navigation"
        >
          {navSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold mb-3 opacity-90">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((l) => (
                  <li key={l.name}>
                    <Link
                      href={l.href}
                      className="
                        text-sm opacity-70
                        hover:opacity-100
                        hover:text-[var(--accent)]
                        transition
                      "
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* ================= CONTACT ================= */}
        <div>
          <h4 className="text-sm font-semibold mb-3 opacity-90">
            Contact
          </h4>

          <p className="text-sm opacity-80 flex items-center gap-2 mb-2">
            <Mail size={15} /> vin.simorangkir81@gmail.com
          </p>

          <p className="text-sm opacity-80 flex items-center gap-2 mb-5">
            <Phone size={15} /> +62 822-8251-2619
          </p>

          {/* SOCIALS */}
          <div className="flex gap-4">
            {socials.map(({ icon, url }) => (
              <motion.a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="
                  p-2 rounded-xl
                  backdrop-blur-lg
                  bg-white/40 dark:bg-white/5
                  border border-white/20 dark:border-white/10
                  opacity-75
                  hover:opacity-100
                  hover:text-[var(--accent)]
                "
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ================= BOTTOM BAR ================= */}
      <div
        className="
          relative z-10
          border-t border-white/20 dark:border-white/10
          backdrop-blur-xl
          bg-white/30 dark:bg-white/5
          py-5
          text-center text-xs
          flex flex-col items-center gap-1
          opacity-70
        "
      >
        <span>
          © {new Date().getFullYear()} VINS — All Rights Reserved.
        </span>
        <span className="font-mono">
          Version {siteInfo.version}
        </span>
      </div>
    </footer>
  );
}
