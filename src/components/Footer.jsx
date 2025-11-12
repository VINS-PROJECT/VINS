"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const socials = [
    { icon: <Twitter className="w-4 h-4" />, url: "https://twitter.com" },
    { icon: <Linkedin className="w-4 h-4" />, url: "https://linkedin.com" },
    { icon: <Instagram className="w-4 h-4" />, url: "https://instagram.com" },
    { icon: <Github className="w-4 h-4" />, url: "https://github.com" },
    { icon: <Youtube className="w-4 h-4" />, url: "https://youtube.com" },
  ];

  const navLinks = [
    "Home",
    "Projects",
    "About",
    "Contact",
    "Timeline",
    "Certificates",
  ];

  return (
    <footer
      className="
        relative overflow-hidden
        bg-gradient-to-b from-[#0b0f15] via-[#080c12] to-[#070a10]
        text-gray-300 pt-24 pb-12
        border-t border-white/5
      "
    >
      {/* Background glow layer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.1),transparent_70%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.1),transparent_60%)]"
      />

      {/* === Main Content === */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-12 z-10">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <motion.img
              src="/logo.svg"
              alt="AninDev"
              className="w-10 h-10 rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.15)]"
              whileHover={{ rotate: 8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250 }}
            />
            <span className="text-lg font-semibold text-white">
              Anin<span className="text-cyan-400">Dev</span>
            </span>
          </div>

          <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
            A portfolio that blends creativity, precision, and modern technology —
            showcasing meaningful work crafted with detail and purpose.
          </p>
        </div>

        {/* Navigation Links */}
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
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-200"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
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
                  hover:text-cyan-400 hover:border-cyan-400
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

      {/* === Bottom Copyright === */}
      <div className="relative mt-14 text-center text-xs text-gray-500 border-t border-white/5 pt-6">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">AninDev</span> — All rights reserved.
        </p>
        <p className="text-gray-600 mt-2">
          Crafted with <span className="text-cyan-400">passion</span> &{" "}
          <span className="text-blue-400">precision</span>.
        </p>

        {/* Glowing line accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute left-1/2 -translate-x-1/2 top-0 w-32 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 blur-sm"
        />
      </div>

      {/* Subtle overlay gradient for polish */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070a10]/60 to-transparent pointer-events-none" />
    </footer>
  );
}
