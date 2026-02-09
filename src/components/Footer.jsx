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
        { name: "Projects", href: "/vins-plus/project" },
        { name: "Experience", href: "/vins-plus/experience" },
        { name: "Certificates", href: "/vins-plus/certificate" },
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
        block
        bg-[var(--background)]
        text-[var(--foreground)]
        border-t border-[var(--border)]
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* ================= BRAND ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <Link href="/" className="flex items-center gap-3">
            <Image src="/TP K.svg" alt="VINS" width={40} height={40} />
            <span className="text-lg font-semibold tracking-wide text-[var(--accent)]">
              VINS
            </span>
          </Link>

          <div className="flex items-center gap-2 text-xs opacity-70">
            <Activity size={14} />
            <span
              className={`w-2 h-2 rounded-full ${
                statusStyles[siteInfo.status]
              }`}
            />
            <span className="uppercase font-medium">
              {siteInfo.status}
            </span>
          </div>

          <p className="text-sm text-[var(--foreground)]/65 max-w-xs">
            Turning ideas into meaningful digital experiences through
            thoughtful design and structured execution.
          </p>
        </motion.div>

        {/* ================= NAV ================= */}
        <nav
          className="md:col-span-2 grid grid-cols-2 gap-10"
          aria-label="Footer Navigation"
        >
          {navSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-medium mb-3">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((l) => (
                  <li key={l.name}>
                    <Link
                      href={l.href}
                      className="
                        text-sm text-[var(--foreground)]/65
                        hover:text-[var(--accent)]
                        transition-colors
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-sm font-medium mb-3">
            Contact
          </h4>

          <p className="text-sm text-[var(--foreground)]/70 flex items-center gap-2 mb-2">
            <Mail size={14} /> vin.simorangkir81@gmail.com
          </p>

          <p className="text-sm text-[var(--foreground)]/70 flex items-center gap-2 mb-4">
            <Phone size={14} /> +62 822-8251-2619
          </p>

          <div className="flex gap-3">
            {socials.map(({ icon, url }) => (
              <motion.a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="
                  p-2 rounded-lg
                  border border-[var(--border)]
                  text-[var(--foreground)]/60
                  hover:text-[var(--accent)]
                  transition-colors
                "
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-[var(--border)] py-4 text-center text-xs text-[var(--foreground)]/60">
        <span>
          © {new Date().getFullYear()} VINS — All Rights Reserved.
        </span>
        <span className="block mt-1 font-mono">
          Version {siteInfo.version}
        </span>
      </div>
    </footer>
  );
}
