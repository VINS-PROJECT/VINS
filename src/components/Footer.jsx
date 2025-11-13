"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const socials = [
    { icon: <Twitter className="w-4 h-4" />, url: "#" },
    { icon: <Linkedin className="w-4 h-4" />, url: "https://www.linkedin.com/in/kevinsimorangkir/" },
    { icon: <Instagram className="w-4 h-4" />, url: "https://www.instagram.com/vins.ch/" },
    { icon: <Github className="w-4 h-4" />, url: "https://github.com/kevinsimorangkir21/" },
    { icon: <Youtube className="w-4 h-4" />, url: "#" },
  ];

  const navLinks = [
    "Home",
    "Projects",
    "About",
    "Contact",
    "Timeline",
    "Certificates",
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Changelog", href: "/changelog" },
    { name: "Status Website", href: "/status" },
  ];

  return (
    <footer
      className="
        relative overflow-hidden
        bg-black text-gray-300
        pt-24 pb-12
        border-t border-[#E2C07C]/20
      "
    >
      {/* === Soft Gold Glow Background === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(226,192,124,0.1),transparent_70%),radial-gradient(circle_at_80%_20%,rgba(209,170,96,0.08),transparent_60%)]"
      />

      {/* === Main Content === */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-12 z-10">
        {/* === Brand Section === */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <motion.img
              src="/TP K.svg"
              alt="VINS"
              className="w-10 h-10 rounded-xl"
              whileHover={{ rotate: 8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250 }}
            />
            <span className="text-[#E2C07C]">VINS</span>
          </div>

          <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
            A portfolio that blends creativity, precision, and modern technology,
            showcasing meaningful work crafted with detail and purpose.
          </p>
        </div>

        {/* === Navigation Links === */}
        <div>
          <h4 className="font-semibold text-white mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#E2C07C] transition-all duration-200"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* === Social Media === */}
        <div>
          <h4 className="font-semibold text-white mb-4">Connect</h4>
          <p className="text-sm text-gray-400 mb-4">
            Let’s collaborate — reach out or connect via social platforms.
          </p>

          <div className="flex gap-3">
            {socials.map(({ icon, url }, i) => (
              <motion.a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10 h-10 flex items-center justify-center rounded-full
                  border border-white/10 text-gray-300
                  hover:text-[#E2C07C] hover:border-[#E2C07C]/60
                  transition-all duration-300 backdrop-blur-sm
                "
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* === Legal / Policy Section === */}
      <div className="relative mt-14 text-center z-10">
        <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-400 mb-6">
          {legalLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="hover:text-[#E2C07C] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Divider Line */}
        <div className="w-full max-w-xs mx-auto h-[1px] bg-[#E2C07C]/20 mb-6" />

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">VINS</span> — All rights reserved.
        </p>
        <p className="text-gray-600 mt-2 text-xs">
          Crafted with <span className="text-[#E2C07C]">passion</span> &{" "}
          <span className="text-[#d6b270]">precision</span>.
        </p>

        {/* Glowing line accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute left-1/2 -translate-x-1/2 top-0 w-32 h-[2px] bg-gradient-to-r from-[#b99a5e] via-[#E2C07C] to-[#b99a5e] blur-sm"
        />
      </div>

      {/* === Subtle overlay for polish === */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
    </footer>
  );
}
