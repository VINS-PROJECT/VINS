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


      {!hideLayout && <Navbar />}



      <main
        className="
        min-h-screen

        bg-white
        text-neutral-950

        selection:bg-[#C9A646]
        selection:text-white
        "
      >

        {children}

      </main>



      {!hideLayout && <Footer />}



    </>
  );
}