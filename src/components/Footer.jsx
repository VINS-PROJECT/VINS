"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter, Mail, Phone, Activity } from "lucide-react";
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
    { icon: <Linkedin size={18} />, url: "https://www.linkedin.com/in/kevinsimorangkir/" },
    { icon: <Github size={18} />, url: "https://github.com/kevinsimorangkir21/" },
    { icon: <Instagram size={18} />, url: "https://www.instagram.com/vins.ch/" },
    { icon: <Twitter size={18} />, url: "#" },
  ];

  const statusStyles = {
    operational: "bg-emerald-500",
    maintenance: "bg-amber-500",
    outage: "bg-red-500",
  };

  return (
    <footer
      role="contentinfo"
      className="relative bg-[var(--background)] text-[var(--foreground)] border-t border-[var(--border)]"
    >
      {/* TOP SCROLL REVEAL */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-14"
      >
        {/* BRAND + STATUS */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div whileHover={{ rotate: 6, scale: 1.08 }}>
              <Image src="/TP K.svg" alt="VINS" width={44} height={44} />
            </motion.div>
            <span className="text-xl font-bold text-[var(--accent)] tracking-widest">
              VINS
            </span>
          </Link>

          {/* STATUS INDICATOR */}
          <div className="flex items-center gap-2 text-xs tracking-wide">
            <Activity size={15} />
            <span className={`w-2 h-2 rounded-full ${statusStyles[siteInfo.status]}`} />
            <span className="uppercase font-semibold opacity-80">
              {siteInfo.status}
            </span>
          </div>

          <p className="text-sm opacity-70 leading-relaxed">
            Crafting meaningful, memorable digital experiences.
          </p>
        </div>

        {/* NAV GROUPS */}
        <nav className="md:col-span-2 grid grid-cols-2 gap-10" aria-label="Footer Navigation">
          {navSections.map((section, i) => (
            <div key={i}>
              <h4 className="text-sm font-semibold mb-3 opacity-90">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((l, idx) => (
                  <li key={idx}>
                    <Link
                      href={l.href}
                      className="text-sm opacity-70 hover:opacity-100 hover:text-[var(--accent)] transition"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* CONTACT */}
        <div>
          <h4 className="text-sm font-semibold mb-3 opacity-90">Contact</h4>

          <p className="text-sm opacity-80 flex items-center gap-2 mb-2">
            <Mail size={16} /> vin.simorangkir81@gmail.com
          </p>

          <p className="text-sm opacity-80 flex items-center gap-2 mb-4">
            <Phone size={16} /> +62 822-8251-2619
          </p>

          {/* SOCIALS */}
          <div className="flex gap-4">
            {socials.map(({ icon, url }, i) => (
              <motion.a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, opacity: 1 }}
                className="opacity-70 hover:text-[var(--accent)] transition"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[var(--border)] py-5 text-center text-xs flex flex-col items-center gap-2 opacity-60">
        <span>© {new Date().getFullYear()} VINS — All Rights Reserved.</span>
        <span className="font-mono">Version {siteInfo.version}</span>
      </div>
    </footer>
  );
}
