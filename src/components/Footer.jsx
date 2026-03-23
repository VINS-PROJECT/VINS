"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { siteInfo } from "@/config/site-info";

export default function Footer() {
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

  return (
    <footer
      className="
        relative overflow-hidden
        bg-[var(--background)]
        text-[var(--foreground)]
        border-t border-[var(--border)]
      "
    >
      {/* ===== BACKGROUND (CREAM SOFT) ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[var(--accent)]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent)]/20 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 space-y-12">

        {/* ================= MAIN ================= */}
        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center gap-3">
              <Image src="/TP K.svg" alt="VINS" width={40} height={40} />
              <span className="text-lg font-semibold text-[var(--accent)]">
                VINS
              </span>
            </Link>

            <p className="text-sm text-[var(--foreground)]/65 max-w-xs">
              Turning ideas into meaningful digital experiences through
              thoughtful design and structured execution.
            </p>

            <div className="flex gap-3 pt-2">
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
                    transition
                  "
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* NAVIGATION */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Navigation</h4>

            <div className="flex flex-col gap-2 text-sm">
              <Link href="/">Home</Link>
              <Link href="/vins-plus/project">Projects</Link>
              <Link href="/vins-plus/experience">Experience</Link>
              <Link href="/vins-plus/certificate">Certificates</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h4 className="text-sm font-medium">Contact</h4>

            <p className="text-sm text-[var(--foreground)]/70 flex items-center gap-2">
              <Mail size={14} /> vin.simorangkir81@gmail.com
            </p>

            <p className="text-sm text-[var(--foreground)]/70 flex items-center gap-2">
              <Phone size={14} /> +62 822-8251-2619
            </p>
          </motion.div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-[var(--border)] pt-6 flex flex-col md:flex-row justify-between text-xs text-[var(--foreground)]/60">
          <span>
            © {new Date().getFullYear()} VINS — All Rights Reserved.
          </span>

          <span className="font-mono">
            Version {siteInfo.version}
          </span>
        </div>

      </div>
    </footer>
  );
}