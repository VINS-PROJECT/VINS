"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { siteInfo } from "@/config/site-info";

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
    <footer
      className="
      relative
      overflow-hidden
      bg-black
      text-white
      border-t border-white/10
      "
    >

      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute inset-0 bg-[var(--accent)]/5" />

        <div className="absolute top-[-20%] left-[10%] w-[500px] h-[500px] bg-[var(--accent)]/20 blur-[140px] rounded-full" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

      </div>

      <div className="container-main py-16 space-y-14">

        {/* MAIN GRID */}

        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* BRAND */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >

            <Link href="/" className="flex items-center gap-3 group">

              <motion.div whileHover={{ scale: 1.05 }}>
                <Image src="/TP K.svg" alt="VINS" width={36} height={36} />
              </motion.div>

              <span className="text-lg font-semibold text-[var(--accent)]">
                VINS
              </span>

            </Link>

            <p className="text-sm text-white/70 max-w-xs">
              Turning ideas into meaningful digital experiences through
              thoughtful design and structured execution.
            </p>

            {/* SOCIAL */}

            <div className="flex gap-3 pt-2">

              {socials.map(({ icon, url }) => (

                <motion.a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="
                  p-2
                  rounded-lg
                  border border-white/10
                  text-white/70
                  hover:text-[var(--accent)]
                  hover:border-[var(--accent)]/40
                  transition
                  "
                >

                  <Icon icon={icon} width="20" height="20" />

                </motion.a>

              ))}

            </div>

          </motion.div>

          {/* NAVIGATION */}

          <div className="space-y-4">

            <h4 className="text-sm font-medium text-white">
              Navigation
            </h4>

            <div className="flex flex-col gap-2 text-sm text-white/70">

              {[
                ["Home", "/"],
                ["Articles", "/articles"],
                ["Works", "/works/projects"],
                ["Career", "/career"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (

                <Link
                  key={href}
                  href={href}
                  className="group relative w-fit hover:text-white transition"
                >
                  {label}

                  <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[var(--accent)] transition-all group-hover:w-full" />

                </Link>

              ))}

            </div>

          </div>

          {/* CONTACT */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >

            <h4 className="text-sm font-medium text-white">
              Contact
            </h4>

            <div className="space-y-2 text-sm text-white/70">

              <p className="flex items-center gap-2 hover:text-[var(--accent)] transition">
                <Icon icon="mdi:email-outline" width="16" />
                vin.simorangkir81@gmail.com
              </p>

              <p className="flex items-center gap-2 hover:text-[var(--accent)] transition">
                <Icon icon="mdi:phone-outline" width="16" />
                +62 822-8251-2619
              </p>

            </div>

          </motion.div>

        </div>

        {/* BOTTOM */}

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between text-xs text-white/60">

          <span>
            © {new Date().getFullYear()} VINS — All Rights Reserved.
          </span>

          <span className="font-mono tracking-wider">
            Version {siteInfo.version}
          </span>

        </div>

      </div>

    </footer>
  );
}