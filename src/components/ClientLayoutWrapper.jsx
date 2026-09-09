"use client";

import { usePathname } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();

  const hideLayoutPrefixes = [
    "/login",
    "/register",
    "/lupa-kata-sandi",
    "/dashboard",
    "/admin",
    "/perusahaan",
  ];

  const hideLayout = hideLayoutPrefixes.some((path) =>
    pathname.startsWith(path)
  );

  return (
    <>
      {/* =====================================================
          NAVBAR
          ===================================================== */}

      {!hideLayout && <Navbar />}

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <main
        className="
          min-h-screen
          bg-[var(--color-background)]
          text-[var(--color-foreground)]
          selection:bg-[var(--color-brand)]
          selection:text-white
        "
      >
        {children}
      </main>

      {/* =====================================================
          FOOTER
          ===================================================== */}

      {!hideLayout && <Footer />}
    </>
  );
}