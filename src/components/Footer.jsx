"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { ArrowUpRight } from "lucide-react";

const socials = [
  {
    label: "LinkedIn",
    icon: "mdi:linkedin",
    url: "https://www.linkedin.com/in/kevinsimorangkir/",
  },
  {
    label: "GitHub",
    icon: "mdi:github",
    url: "https://github.com/kevinsimorangkir21/",
  },
  {
    label: "Instagram",
    icon: "mdi:instagram",
    url: "https://www.instagram.com/kvinsimorangkir/",
  },
];

const navigationLinks = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["About", "/about"],
  ["Articles", "/article"],
  ["VINS AI", "/ai"],
];

const updateLinks = [
  ["Changelog", "/changelog"],
  ["Roadmap", "/roadmap"],
  ["System Status", "/status"],
  ["Developer Message", "/developer-message"],
];

const legalLinks = [
  ["Privacy Policy", "/privacy"],
  ["Terms of Use", "/terms"],
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-foreground)] text-white">
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-15%] top-[-20%] h-[500px] w-[500px] rounded-full bg-[var(--color-brand)] opacity-[0.06] blur-[120px]" />

        <div className="absolute bottom-[-20%] left-[-10%] h-[400px] w-[400px] rounded-full bg-[var(--color-brand)] opacity-[0.04] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        {/* =====================================================
            MAIN FOOTER
            ===================================================== */}

        <div className="grid gap-14 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.75fr_0.75fr_0.75fr] lg:gap-12 lg:py-20">
          {/* =================================================
              BRAND
              ================================================= */}

          <div>
            <Link
              href="/"
              className="inline-flex"
              aria-label="VINS Home"
            >
              <Image
                src="/"
                alt="VINS Digital Experience"
                width={140}
                height={45}
                className="h-9 w-auto"
              />
            </Link>

            <p className="mt-7 max-w-sm font-[var(--font-body)] text-sm leading-7 text-white/45">
              A personal digital experience built around design, technology,
              creativity, and the continuous process of turning ideas into
              something meaningful.
            </p>

            {/* Socials */}

            <div className="mt-7 flex items-center gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-white"
                >
                  <Icon
                    icon={social.icon}
                    width={17}
                    height={17}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* =================================================
              NAVIGATION
              ================================================= */}

          <FooterColumn
            title="Explore"
            links={navigationLinks}
          />

          {/* =================================================
              UPDATES
              ================================================= */}

          <FooterColumn
            title="Updates"
            links={updateLinks}
          />

          {/* =================================================
              LEGAL
              ================================================= */}

          <FooterColumn
            title="Legal"
            links={legalLinks}
          />
        </div>

        {/* =====================================================
            COPYRIGHT
            ===================================================== */}

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col gap-2 font-[var(--font-body)] text-[11px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} Kevin Simorangkir. All rights
              reserved.
            </span>

            <span>
              Designed &amp; built with intention.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   FOOTER COLUMN
   ========================================================= */

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-6 font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
        {title}
      </h3>

      <nav className="flex flex-col gap-3.5">
        {links.map(([label, href]) => (
          <Link
            key={label}
            href={href}
            className="group inline-flex w-fit items-center gap-1 font-[var(--font-body)] text-sm text-white/65 transition-colors duration-300 hover:text-[var(--color-brand-light)]"
          >
            <span>{label}</span>

            <ArrowUpRight
              size={12}
              strokeWidth={1.7}
              className="translate-y-0 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
            />
          </Link>
        ))}
      </nav>
    </div>
  );
}