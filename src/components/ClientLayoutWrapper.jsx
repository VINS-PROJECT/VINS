"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

//✔ Import theme from local storage or state
export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("dark");

  // ⏳ load theme dari localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    setMounted(true);
  }, []);

  // 🔥 APPLY MODE KE <html>
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme, mounted]);

  // halaman tanpa navbar/footer
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
      {!shouldHide && <Navbar theme={theme} setTheme={setTheme} />}

      <main className={!shouldHide ? "pt-20" : ""}>{children}</main>

      {!shouldHide && <Footer />}
    </>
  );
}
