
"use client";

import { usePathname } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ===========================================================
   ROUTES WITHOUT PUBLIC LAYOUT
   =========================================================== */

const hideLayoutPrefixes = [
  "/login",
  "/register",
  "/lupa-kata-sandi",
  "/dashboard",
  "/admin",
  "/perusahaan",
];

/* ===========================================================
   CLIENT LAYOUT WRAPPER
   =========================================================== */

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();

  const hideLayout = hideLayoutPrefixes.some((path) => {
    return (
      pathname === path ||
      pathname.startsWith(`${path}/`)
    );
  });

  return (
    <>
      {/* Navbar */}
      {!hideLayout && <Navbar />}

      {/* Main Content */}
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

      {/* Footer */}
      {!hideLayout && <Footer />}
    </>
  );
}
