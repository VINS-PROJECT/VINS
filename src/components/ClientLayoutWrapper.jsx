"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme, mounted]);

  const hideLayoutPrefixes = [
    "/login",
    "/register",
    "/lupa-kata-sandi",
    "/dashboard",
    "/admin",
    "/perusahaan",
  ];

  const shouldHide = hideLayoutPrefixes.some((path) =>
    pathname.startsWith(path)
  );

  if (!mounted) return null;

  return (
    <>
      {!shouldHide && <Navbar />}

      {/* ❌ JANGAN PAKE pt-20 */}
      <main>{children}</main>

      {!shouldHide && <Footer />}
    </>
  );
}
