"use client";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

import {
  useState,
  useEffect,
} from "react";

import {
  Menu,
  X,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";


/* ===========================================================
   VDE 2K27 — NAVBAR
   Premium Personal Portfolio Navigation
   =========================================================== */

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

    {
      href: "/ai",
      label: "VINS AI",
      ai: true,
    },

  ];


  /* ===========================================================
     SCROLL STATE
     =========================================================== */

  useEffect(() => {

    const onScroll = () => {

      setScrolled(
        window.scrollY > 24
      );

    };

    onScroll();

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        onScroll
      );

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

      if (
        event.key === "Escape" &&
        open
      ) {

        setOpen(false);

      }

    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

  }, [open]);


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
     RENDER
     =========================================================== */

  return (
    <>
      {/* =====================================================
          DESKTOP / GLOBAL NAVBAR
          ===================================================== */}

      <header
        className="
          fixed
          top-0
          inset-x-0
          z-50
          px-4
          pt-4
          sm:px-5
          sm:pt-5
        "
      >

        <div
          className={`
            mx-auto
            flex
            h-[68px]
            max-w-[1280px]
            items-center
            justify-between
            rounded-full
            px-4
            sm:px-6
            lg:px-7

            border

            transition-all
            duration-500
            ease-[cubic-bezier(.2,.8,.2,1)]

            ${
              scrolled
                ? `
                  border-[var(--color-border)]
                  bg-[color-mix(in_srgb,var(--color-background)_88%,transparent)]
                  shadow-[0_18px_60px_rgba(0,0,0,.07)]
                  backdrop-blur-2xl
                `
                : `
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

          <Link
            href="/"
            aria-label="VDE 2K27 — Home"
            className="
              group
              flex
              shrink-0
              items-center
            "
          >

            <Image
              src="/"
              alt="VINS"
              width={140}
              height={35}
              priority
              className="
                h-8
                w-auto
                transition
                duration-300
                group-hover:opacity-75
              "
            />

          </Link>


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

              const isActive =
                active(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={
                    isActive
                      ? "page"
                      : undefined
                  }
                  className={`
                    group
                    relative
                    flex
                    items-center
                    gap-2
                    rounded-full
                    px-4
                    py-2.5
                    text-[13px]
                    font-medium
                    tracking-[-0.01em]
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? `
                          text-[var(--color-foreground)]
                        `
                        : `
                          text-[var(--color-muted)]
                          hover:text-[var(--color-foreground)]
                        `
                    }
                  `}
                >

                  {/* Active background */}

                  <span
                    aria-hidden="true"
                    className={`
                      absolute
                      inset-0
                      -z-10
                      rounded-full
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? `
                            bg-[var(--color-surface-alt)]
                            opacity-100
                          `
                          : `
                            opacity-0
                            group-hover:bg-[var(--color-surface-alt)]
                            group-hover:opacity-100
                          `
                      }
                    `}
                  />


                  {/* Label */}

                  <span>
                    {item.label}
                  </span>


                  {/* AI indicator */}

                  {item.ai && (
                    <Sparkles
                      size={13}
                      strokeWidth={2}
                      className="
                        text-[var(--color-brand)]
                        transition-transform
                        duration-300
                        group-hover:rotate-12
                      "
                    />
                  )}


                  {/* Active indicator */}

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
                        bg-[var(--color-brand)]
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
              bg-[var(--color-foreground)]
              px-5
              py-3
              text-[13px]
              font-semibold
              text-[var(--color-background)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[var(--color-brand)]
              hover:shadow-[0_10px_30px_rgba(173,145,70,.18)]
              lg:flex
            "
          >

            <span>
              Let's Talk
            </span>

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
              transition
              duration-300
              hover:bg-[var(--color-surface-alt)]
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
          shadow-[−20px_0_80px_rgba(0,0,0,.12)]
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

          <Link
            href="/"
            aria-label="VDE 2K27 — Home"
          >

            <Image
              src="/"
              alt="VINS"
              width={130}
              height={40}
              className="
                h-8
                w-auto
              "
            />

          </Link>


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
              transition
              duration-300
              hover:bg-[var(--color-surface-alt)]
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
              gap-1
            "
          >

            {navLinks.map((item) => {

              const isActive =
                active(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={
                    isActive
                      ? "page"
                      : undefined
                  }
                  className={`
                    group
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    px-5
                    py-4
                    text-[15px]
                    font-medium
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? `
                          bg-[var(--color-foreground)]
                          text-[var(--color-background)]
                        `
                        : `
                          text-[var(--color-muted)]
                          hover:bg-[var(--color-surface-alt)]
                          hover:text-[var(--color-foreground)]
                        `
                    }
                  `}
                >

                  <span className="flex items-center gap-2.5">

                    {item.label}

                    {item.ai && (
                      <Sparkles
                        size={14}
                        strokeWidth={2}
                        className="
                          text-[var(--color-brand)]
                        "
                      />
                    )}

                  </span>


                  {isActive && (
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[var(--color-brand)]
                      "
                    />
                  )}

                </Link>
              );

            })}

          </nav>


          {/* =================================================
              AI CARD
              ================================================= */}

          <div
            className="
              mt-8
              rounded-3xl
              border
              border-[var(--color-border)]
              bg-[var(--color-surface)]
              p-5
            "
          >

            <div
              className="
                mb-4
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[var(--color-brand-soft)]
                text-[var(--color-brand)]
              "
            >

              <Sparkles
                size={18}
                strokeWidth={1.8}
              />

            </div>


            <p
              className="
                mb-1
                font-[var(--font-heading)]
                text-base
                font-bold
                tracking-[-0.02em]
              "
            >
              Meet VINS AI
            </p>


            <p
              className="
                mb-4
                text-sm
                leading-6
                text-[var(--color-muted)]
              "
            >
              Explore my portfolio through an
              interactive AI assistant.
            </p>


            <Link
              href="/ai"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-[var(--color-foreground)]
              "
            >

              Ask VINS AI

              <ArrowUpRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />

            </Link>

          </div>


          {/* =================================================
              CONTACT CTA
              ================================================= */}

          <Link
            href="/contact"
            className="
              mt-4
              flex
              items-center
              justify-center
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
            "
          >
            Let's Talk
          </Link>


          {/* =================================================
              FOOTER
              ================================================= */}

          <div
            className="
              mt-auto
              pt-10
            "
          >

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