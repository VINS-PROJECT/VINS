"use client";
import { motion } from "framer-motion";

export default function WorkWith() {
  const partners = [
    "/logos/google.svg",
    "/logos/adobe.svg",
    "/logos/figma.svg",
    "/logos/notion.svg",
    "/logos/github.svg",
    "/logos/dribbble.svg",
    "/logos/slack.svg",
    "/logos/behance.svg",
    "/logos/vercel.svg",
    "/logos/netflix.svg",
  ];

  return (
    <section
      className="
        relative py-24
        bg-gradient-to-b from-[#0a0f15] via-[#0b0f17] to-[#0c111a]
        overflow-hidden
      "
    >
      {/* === Soft Background Glow === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.15),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.1),transparent_60%)]"
      />

      <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
        >
          Worked With
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 mt-4 mb-12 max-w-2xl mx-auto"
        >
          Collaborating with amazing brands and creative partners worldwide.
        </motion.p>

        {/* === Auto-scroll Logo Reel === */}
        <div className="overflow-hidden relative">
          {/* Gradient Fades on Edges */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#0a0f15] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#0c111a] to-transparent z-20 pointer-events-none" />

          {/* Looping Animation */}
          <motion.div
            className="flex items-center gap-16 md:gap-24"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            }}
          >
            {[...partners, ...partners].map((logo, i) => (
              <div key={i} className="flex-shrink-0">
                <img
                  src={logo}
                  alt="Brand logo"
                  className="
                    h-10 md:h-12 object-contain grayscale opacity-60
                    hover:grayscale-0 hover:opacity-100
                    hover:scale-105 transition-all duration-300 ease-out
                  "
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gradient Transition to Next Section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0c111a] to-transparent pointer-events-none" />
    </section>
  );
}
