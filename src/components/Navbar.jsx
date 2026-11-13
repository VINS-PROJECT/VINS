
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

/* ===========================================================
   VDE 2K27 — NAVBAR
   Ocean Blue + Deep Indigo
   Floating to Full Width Navigation
   =========================================================== */

/* External Logo */
const LOGO_URL =
  process.env.NEXT_PUBLIC_LOGO_URL ||
  "https://your-domain.com/vins-logo.png";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ===========================================================
     NAVIGATION
     =========================================================== */

  const navLinks = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/projects",
      label: "Projects",
    },
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/article",
      label: "Articles",
    },
  ];

  /* ===========================================================
     ACTIVE STATE
     =========================================================== */

  const active = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  /* ===========================================================
     SCROLL STATE
     =========================================================== */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* ===========================================================
     CLOSE MOBILE MENU ON ROUTE CHANGE
     =========================================================== */

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* ===========================================================
     BODY LOCK
     =========================================================== */

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* ===========================================================
     ESCAPE KEY
     =========================================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  /* ===========================================================
     LOGO
     =========================================================== */

  const Logo = ({ mobile = false }) => (
    <Link
      href="/"
      aria-label="VDE 2K27 — Home"
      className="group flex shrink-0 items-center"
    >
      <img
        src={LOGO_URL}
        alt="VINS"
        width={mobile ? 130 : 140}
        height={40}
        className="
          h-8
          w-auto
          max-w-[140px]
          object-contain
          transition-opacity
          duration-300
          group-hover:opacity-75
        "
      />
    </Link>
  );

  /* ===========================================================
     RENDER
     =========================================================== */

  return (
    <>
      {/* =====================================================
          DESKTOP / GLOBAL NAVBAR
          ===================================================== */}

      <header
        className={`
          fixed
          top-0
          inset-x-0
          z-50
          transition-all
          duration-500
          ease-[cubic-bezier(.2,.8,.2,1)]

          ${
            scrolled
              ? "px-0 pt-0"
              : "px-4 pt-4 sm:px-5 sm:pt-5"
          }
        `}
      >
        <div
          className={`
            mx-auto
            flex
            w-full
            items-center
            justify-between
            border
            px-4
            sm:px-6
            lg:px-7

            transition-all
            duration-500
            ease-[cubic-bezier(.2,.8,.2,1)]

            ${
              scrolled
                ? `
                    h-[76px]
                    max-w-none
                    rounded-none
                    border-[var(--color-border)]
                    bg-[color-mix(in_srgb,var(--color-background)_95%,transparent)]
                    shadow-[0_8px_30px_rgba(32,26,61,.08)]
                    backdrop-blur-2xl
                  `
                : `
                    h-[68px]
                    max-w-[1280px]
                    rounded-full
                    border-transparent
                    bg-[color-mix(in_srgb,var(--color-background)_68%,transparent)]
                    backdrop-blur-xl
                  `
            }
          `}
        >
          {/* =================================================
              LOGO
              ================================================= */}

          <Logo />

          {/* =================================================
              DESKTOP NAVIGATION
              ================================================= */}

          <nav
            aria-label="Main navigation"
            className="
              hidden
              items-center
              gap-1
              lg:flex
            "
          >
            {navLinks.map((item) => {
              const isActive = active(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={
                    isActive ? "page" : undefined
                  }
                  className={`
                    group
                    relative
                    flex
                    items-center
                    rounded-full
                    px-4
                    py-2.5
                    text-[13px]
                    font-medium
                    tracking-[-0.01em]
                    transition-all
                    duration-300
                    ease-out
                    active:scale-95

                    ${
                      isActive
                        ? `
                            bg-[var(--color-secondary)]
                            text-white
                            shadow-[0_4px_14px_rgba(32,26,61,.15)]
                          `
                        : `
                            text-[var(--color-muted)]
                            hover:bg-[var(--color-brand-soft)]
                            hover:text-[var(--color-brand)]
                          `
                    }
                  `}
                >
                  {/* Label */}

                  <span>{item.label}</span>

                  {/* Active Indicator */}

                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        -bottom-1
                        left-1/2
                        h-1
                        w-1
                        -translate-x-1/2
                        rounded-full
                        bg-[var(--color-brand-light)]
                      "
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* =================================================
              DESKTOP CTA
              ================================================= */}

          <Link
            href="/contact"
            className="
              group
              hidden
              items-center
              gap-2
              rounded-full
              bg-[var(--color-secondary)]
              px-5
              py-3
              text-[13px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[var(--color-brand)]
              hover:shadow-[0_10px_30px_rgba(15,112,149,.18)]
              active:scale-95
              lg:flex
            "
          >
            <span>Let's Talk</span>

            <ArrowUpRight
              size={14}
              strokeWidth={2}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>

          {/* =================================================
              MOBILE MENU BUTTON
              ================================================= */}

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              text-[var(--color-foreground)]
              transition-all
              duration-300
              hover:bg-[var(--color-brand-soft)]
              hover:text-[var(--color-brand)]
              active:scale-90
              lg:hidden
            "
          >
            <Menu
              size={23}
              strokeWidth={1.8}
            />
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE OVERLAY
          ===================================================== */}

      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={`
          fixed
          inset-0
          z-[60]
          bg-black/35
          backdrop-blur-md
          transition-opacity
          duration-300
          lg:hidden

          ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* =====================================================
          MOBILE DRAWER
          ===================================================== */}

      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={`
          fixed
          right-0
          top-0
          z-[70]
          flex
          h-dvh
          w-[88%]
          max-w-[420px]
          flex-col
          border-l
          border-[var(--color-border)]
          bg-[var(--color-background)]
          shadow-[-20px_0_80px_rgba(0,0,0,.12)]
          transition-transform
          duration-500
          ease-[cubic-bezier(.2,.8,.2,1)]
          lg:hidden

          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* =================================================
            DRAWER HEADER
            ================================================= */}

        <div
          className="
            flex
            h-[76px]
            shrink-0
            items-center
            justify-between
            border-b
            border-[var(--color-border)]
            px-5
          "
        >
          <Logo mobile />

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              text-[var(--color-foreground)]
              transition-all
              duration-300
              hover:bg-[var(--color-brand-soft)]
              hover:text-[var(--color-brand)]
              active:scale-90
            "
          >
            <X
              size={21}
              strokeWidth={1.8}
            />
          </button>
        </div>

        {/* =================================================
            DRAWER CONTENT
            ================================================= */}

        <div
          className="
            flex
            flex-1
            flex-col
            overflow-y-auto
            px-5
            py-6
          "
        >
          {/* Navigation */}

          <nav
            aria-label="Mobile navigation"
            className="
              flex
              flex-col
              gap-2
            "
          >
            {navLinks.map((item) => {
              const isActive = active(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={
                    isActive ? "page" : undefined
                  }
                  className={`
                    group
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    px-5
                    py-4
                    text-[15px]
                    font-medium
                    transition-all
                    duration-300
                    ease-out
                    active:scale-[0.98]

                    ${
                      isActive
                        ? `
                            border-[var(--color-secondary)]
                            bg-[var(--color-secondary)]
                            text-white
                            shadow-[0_8px_24px_rgba(32,26,61,.14)]
                          `
                        : `
                            border-transparent
                            text-[var(--color-muted)]
                            hover:border-[var(--color-border)]
                            hover:bg-[var(--color-brand-soft)]
                            hover:text-[var(--color-brand)]
                          `
                    }
                  `}
                >
                  <span>{item.label}</span>

                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-[var(--color-brand-light)]
                        shadow-[0_0_10px_rgba(59,145,176,.5)]
                      "
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* =================================================
              CONTACT CTA
              ================================================= */}

          <Link
            href="/contact"
            className="
              mt-8
              flex
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[var(--color-brand)]
              px-5
              py-4
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-[var(--color-brand-hover)]
              active:scale-[0.98]
            "
          >
            Let's Talk

            <ArrowUpRight size={16} />
          </Link>

          {/* =================================================
              FOOTER
              ================================================= */}

          <div className="mt-auto pt-10">
            <div
              className="
                mb-4
                h-px
                w-full
                bg-[var(--color-border)]
              "
            />

            <p
              className="
                text-xs
                leading-5
                text-[var(--color-muted-light)]
              "
            >
              VINS Digital Experience
            </p>

            <p
              className="
                mt-1
                text-xs
                text-[var(--color-muted-light)]
              "
            >
              © 2027 Kevin Simorangkir
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
