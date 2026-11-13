
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@iconify/react";

/* ===========================================================
   CONFIGURATION
   =========================================================== */

const LOGO_URL =
  process.env.NEXT_PUBLIC_LOGO_URL ||
  "https://your-domain.com/vins-logo.png";

/* ===========================================================
   SOCIAL LINKS
   =========================================================== */

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

/* ===========================================================
   NAVIGATION LINKS
   =========================================================== */

const navigationLinks = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["About", "/about"],
  ["Articles", "/article"],
];

/* ===========================================================
   UPDATE LINKS
   =========================================================== */

const updateLinks = [
  ["Changelog", "/changelog"],
  ["Roadmap", "/roadmap"],
  ["System Status", "/status"],
  ["Developer Message", "/developer-message"],
];

/* ===========================================================
   LEGAL LINKS
   =========================================================== */

const legalLinks = [
  ["Privacy Policy", "/privacy"],
  ["Terms of Use", "/terms"],
];

/* ===========================================================
   FOOTER
   =========================================================== */

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--color-background)]">
      {/* Main Footer Panel */}
      <div
        className="
          relative
          overflow-hidden
          rounded-t-[36px]
          bg-[var(--color-secondary)]
          text-white
          sm:rounded-t-[44px]
          lg:rounded-t-[56px]
        "
      >
        {/* Background Decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="
              absolute
              -right-40
              -top-48
              h-[500px]
              w-[500px]
              rounded-full
              border
              border-white/[0.06]
            "
          />

          <div
            className="
              absolute
              -right-20
              -top-28
              h-[350px]
              w-[350px]
              rounded-full
              border
              border-white/[0.05]
            "
          />

          <div
            className="
              absolute
              -bottom-40
              -left-32
              h-[420px]
              w-[420px]
              rounded-full
              bg-[var(--color-brand)]
              opacity-[0.12]
              blur-[100px]
            "
          />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16 xl:px-20">
          {/* =================================================
              MAIN FOOTER
              ================================================= */}

          <div
            className="
              grid
              gap-14
              py-16
              sm:grid-cols-2
              lg:grid-cols-[1.5fr_0.8fr_0.8fr_0.7fr]
              lg:gap-12
              lg:py-24
            "
          >
            {/* BRAND */}
            <div>
              <Link
                href="/"
                aria-label="VINS Home"
                className="inline-flex items-center"
              >
                <img
                  src={LOGO_URL}
                  alt="VINS"
                  width={140}
                  height={45}
                  className="
                    h-9
                    w-auto
                    max-w-[150px]
                    object-contain
                    brightness-0
                    invert
                  "
                />
              </Link>

              <p
                className="
                  mt-7
                  max-w-sm
                  font-[var(--font-body)]
                  text-sm
                  leading-8
                  text-white/60
                "
              >
                A personal digital experience built around
                design, technology, creativity, and the
                continuous process of turning ideas into
                something meaningful.
              </p>

              {/* Social Links */}
              <div className="mt-8 flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      bg-white/[0.04]
                      text-white/70
                      transition-colors
                      duration-200
                      hover:border-[var(--color-brand-light)]
                      hover:bg-[var(--color-brand)]
                      hover:text-white
                      active:scale-95
                    "
                  >
                    <Icon
                      icon={social.icon}
                      width={19}
                      height={19}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* EXPLORE */}
            <FooterColumn
              title="Explore"
              links={navigationLinks}
            />

            {/* UPDATES */}
            <FooterColumn
              title="Updates"
              links={updateLinks}
            />

            {/* LEGAL */}
            <FooterColumn
              title="Legal"
              links={legalLinks}
            />
          </div>

          {/* =================================================
              FOOTER BOTTOM
              ================================================= */}

          <div className="border-t border-white/15 py-7">
            <div
              className="
                flex
                flex-col
                gap-4
                font-[var(--font-body)]
                text-xs
                text-white/45
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <p>
                © {new Date().getFullYear()} Kevin Simorangkir.
                All rights reserved.
              </p>

              <p className="flex items-center gap-2">
                Designed &amp; built with intention.
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-light)]" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ===========================================================
   FOOTER COLUMN
   =========================================================== */

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3
        className="
          mb-7
          font-[var(--font-body)]
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.18em]
          text-white/45
        "
      >
        {title}
      </h3>

      <nav className="flex flex-col items-start gap-4">
        {links.map(([label, href]) => (
          <Link
            key={label}
            href={href}
            className="
              group
              inline-flex
              items-center
              gap-2
              font-[var(--font-body)]
              text-sm
              font-medium
              text-white/70
              transition-colors
              duration-200
              hover:text-[var(--color-brand-light)]
            "
          >
            <span>{label}</span>

            <ArrowUpRight
              size={13}
              strokeWidth={1.7}
              className="
                opacity-0
                transition-all
                duration-200
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:opacity-100
              "
            />
          </Link>
        ))}
      </nav>
    </div>
  );
}
