"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function PortfolioSection() {
  const [active, setActive] = useState(0);

  const sections = [
    {
      title: "Projects Delivered",
      desc: "Crafting meaningful designs that bring ideas to life and create lasting impact.",
    },
    {
      title: "Creative Portfolio",
      desc: "Showcasing innovative digital experiences that blend aesthetics and usability.",
    },
    {
      title: "Design Philosophy",
      desc: "Centering empathy, clarity, and timeless principles in every design decision.",
    },
    {
      title: "Innovation & Ideas",
      desc: "Turning conceptual thoughts into tangible solutions that inspire and connect.",
    },
    {
      title: "Collaboration",
      desc: "Working closely with teams to transform visions into powerful outcomes.",
    },
  ];

  return (
    <section
      className="
        relative overflow-hidden py-28 md:py-32
        bg-black
        text-white transition-all duration-500
      "
    >
      {/* === Content === */}
      <div className="max-w-6xl mx-auto px-6 md:flex md:items-center md:gap-16 relative z-10">
        {/* === Left: Photo === */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div className="relative w-80 h-96 rounded-[2.5rem] overflow-hidden border border-[#E2C07C]/20 bg-[#111]">
            <img
              src="/KVNS.jpg"
              alt="KEVINSIMORANGKIR"
              className="w-full h-full object-cover rounded-[2.5rem]"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 text-2xl font-signature text-[#E2C07C]/80 italic"
          >
            — Kevin Simorangkir
          </motion.p>
        </motion.div>

        {/* === Right: Accordion === */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-0 md:w-1/2 flex flex-col gap-5"
        >
          {sections.map((sec, i) => (
            <motion.div
              key={i}
              onClick={() => setActive(i)}
              className={`
                cursor-pointer p-5 rounded-2xl border transition-all duration-400
                ${
                  active === i
                    ? "bg-[#E2C07C]/15 border-[#E2C07C]/40 text-white"
                    : "bg-[#111]/60 border border-white/10 text-gray-300 hover:bg-[#E2C07C]/5 hover:border-[#E2C07C]/20"
                }
              `}
              whileHover={{ scale: active === i ? 1 : 1.02 }}
            >
              <div className="flex items-center justify-between">
                <h3
                  className={`text-lg font-semibold tracking-wide ${
                    active === i ? "text-white" : "text-gray-200"
                  }`}
                >
                  {sec.title}
                </h3>
                {active === i ? (
                  <ArrowUpRight className="w-5 h-5 text-[#E2C07C]" />
                ) : (
                  <ArrowRight className="w-4 h-4 text-[#E2C07C]/70" />
                )}
              </div>

              {active === i && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="mt-3 text-sm leading-relaxed text-white/90"
                >
                  {sec.desc}
                </motion.p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* === Bottom fade biar transisi ke section selanjutnya halus === */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
