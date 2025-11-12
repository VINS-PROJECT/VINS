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
        relative overflow-hidden py-32 md:py-40
        bg-gradient-to-b from-[#080c12] via-[#0a0f15] to-[#0b0f17]
        text-white transition-all duration-500
      "
    >
      {/* === Glow background === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.1),transparent_60%)]"
      />

      <div className="max-w-6xl mx-auto px-6 md:flex md:items-center md:gap-16 relative z-10">
        {/* === Left (Photo) === */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div className="relative w-80 h-96 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img
              src="/images/profile-portfolio.png"
              alt="Portfolio Photo"
              className="w-full h-full object-cover rounded-[2.5rem]"
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 text-2xl font-signature text-gray-300 italic"
          >
            — Anin Dev
          </motion.p>
        </motion.div>

        {/* === Right (Accordion-style) === */}
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
                cursor-pointer p-5 rounded-2xl transition-all duration-300
                ${
                  active === i
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
                }
              `}
              whileHover={{ scale: active === i ? 1 : 1.02 }}
            >
              <div className="flex items-center justify-between">
                <h3
                  className={`text-lg font-semibold ${
                    active === i ? "text-white" : "text-gray-200"
                  }`}
                >
                  {sec.title}
                </h3>
                {active === i ? (
                  <ArrowUpRight className="w-5 h-5 text-white" />
                ) : (
                  <ArrowRight className="w-4 h-4 text-gray-400" />
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

      {/* === Bottom gradient blend === */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0b0f17] to-transparent pointer-events-none" />
    </section>
  );
}
