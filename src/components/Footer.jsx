"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Footer() {

  const socials = [
    {
      icon: "mdi:linkedin",
      url: "https://www.linkedin.com/in/kevinsimorangkir/",
    },
    {
      icon: "mdi:github",
      url: "https://github.com/kevinsimorangkir21/",
    },
    {
      icon: "mdi:instagram",
      url: "https://www.instagram.com/vins.ch/",
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 mt-16 md:mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-12">

        {/* TOP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">

          {/* BRAND */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/TP K.svg" alt="logo" width={28} height={28} />
            </Link>

            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Designer and developer crafting engaging digital experiences with a focus on UI/UX and frontend development. With a passion for design and development, I create visually stunning and user friendly websites that leave a lasting impression.
            </p>

            <div className="flex gap-3 pt-2">
              {socials.map(({ icon, url }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  p-2 rounded-full
                  text-gray-500
                  hover:text-black hover:bg-gray-100
                  transition
                  "
                >
                  <Icon icon={icon} width="18" height="18" />
                </a>
              ))}
            </div>
          </div>

          {/* NAV */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">
              Navigation
            </h4>

            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-black transition">
                Home
              </Link>
              <Link href="/projects" className="hover:text-black transition">
                Projects
              </Link>
              <Link href="/about" className="hover:text-black transition">
                About
              </Link>
              <Link href="/contact" className="hover:text-black transition">
                Contact
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">
              Contact
            </h4>

            <div className="text-sm text-gray-500 space-y-2">
              <p className="hover:text-black transition cursor-default">
                vin.simorangkir81@gmail.com
              </p>
              <p className="hover:text-black transition cursor-default">
                +62 822-8251-2619
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="
          mt-10 pt-6
          border-t border-gray-200
          flex flex-col md:flex-row
          gap-2 md:gap-0
          justify-between
          text-xs text-gray-400
        ">
          <span>
            © {new Date().getFullYear()} Kevin Simorangkir
          </span>

          <span>
            V.5.0.0
          </span>
        </div>

      </div>
    </footer>
  );
}