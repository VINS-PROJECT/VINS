"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function AboutPage() {

  const profile = [
    ["Full Name", "Kevin Simorangkir"],
    ["Specialization", "UI/UX, Product Design"],
    ["Education", "Bachelor of Informatics"],
    ["Location", "Lampung, Indonesia"],
    ["Experience", "1+ Years"],
    ["Focus", "Design Systems & UX Architecture"],
  ];

  const skills = [
    { name: "UI/UX Design", level: 90 },
    { name: "Frontend Development", level: 85 },
    { name: "Product Thinking", level: 80 },
    { name: "Design Systems", level: 85 },
    { name: "Interaction Design", level: 75 },
  ];

  const tech = [
    { name: "Figma", icon: "logos:figma" },
    { name: "Next.js", icon: "logos:nextjs-icon" },
    { name: "React", icon: "logos:react" },
    { name: "Tailwind", icon: "logos:tailwindcss-icon" },
    { name: "Framer Motion", icon: "logos:framer" },
    { name: "Node.js", icon: "logos:nodejs-icon" },
  ];

  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">

      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute w-[520px] h-[520px] bg-[var(--accent)]/10 blur-[160px] rounded-full top-[-120px] left-[-120px]" />

        <div className="absolute w-[420px] h-[420px] bg-[var(--accent)]/10 blur-[140px] rounded-full bottom-[-100px] right-[-100px]" />

      </div>

      <div className="relative z-10 pt-36 pb-32">

        <div className="max-w-6xl mx-auto px-6 space-y-28">

          {/* HERO */}

          <section>

            <motion.div
              initial={{ opacity:0, y:30 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.6 }}
              className="
              relative overflow-hidden
              rounded-3xl
              p-12 md:p-16
              text-black
              bg-gradient-to-br
              from-[#efe6cf]
              via-[#e5d6b1]
              to-[#cbb98a]
              "
            >

              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,white,transparent)]" />

              <div className="relative grid md:grid-cols-2 gap-10 items-center">

                <div>

                  <p className="text-sm opacity-60 mb-4">
                    About VINS
                  </p>

                  <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
                    Building digital trust
                    for the next generation
                  </h2>

                  <p className="mt-5 text-sm opacity-70 leading-relaxed">
                    VINS focuses on building reliable digital systems
                    through thoughtful design and scalable technology.
                    Combining product thinking, engineering, and design
                    to create meaningful digital experiences.
                  </p>

                  <Link
                    href="/contact"
                    className="
                    inline-block mt-6
                    px-6 py-3
                    rounded-full
                    bg-black/80
                    text-white
                    text-sm
                    hover:bg-black
                    transition
                    "
                  >
                    Contact
                  </Link>


                  {/* COUNTERS */}

                  <div className="flex gap-8 mt-8 text-sm">

                    <div>
                      <p className="text-xl font-semibold">10+</p>
                      <p className="opacity-60">Projects</p>
                    </div>

                    <div>
                      <p className="text-xl font-semibold">1+</p>
                      <p className="opacity-60">Years Experience</p>
                    </div>

                    <div>
                      <p className="text-xl font-semibold">6</p>
                      <p className="opacity-60">Technologies</p>
                    </div>

                  </div>

                </div>

                <div className="flex justify-center md:justify-end">

                  <div className="text-6xl md:text-7xl font-semibold opacity-60 text-black">
                    VINS
                  </div>

                </div>

              </div>

            </motion.div>

          </section>


          {/* ABOUT */}

          <section className="grid md:grid-cols-2 gap-12">

            <div>

              <h2 className="text-2xl font-semibold">
                About <span className="text-[var(--accent)]">VINS</span>
              </h2>

            </div>

            <p className="text-[var(--foreground)]/70 leading-relaxed max-w-lg">

              VINS is a digital platform focused on developing scalable
              solutions with structured design and modern technology.
              By combining design experience, software engineering,
              and product thinking, VINS builds systems that are
              reliable, efficient, and adaptable.

            </p>

          </section>


          {/* PROFILE */}

          <section>

            <h2 className="text-2xl font-semibold text-center mb-14">
              Personal <span className="text-[var(--accent)]">Profile</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">

              {profile.map(([label, value], i) => (

                <motion.div
                  key={label}
                  initial={{ opacity:0, y:20 }}
                  whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y:-4 }}
                  className="
                  group relative p-5 rounded-xl
                  border border-[var(--border)]
                  bg-[var(--card)]/70 backdrop-blur-xl
                  hover:border-[var(--accent)]
                  transition
                  "
                >

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[var(--accent)]/5 rounded-xl transition" />

                  <p className="relative text-xs text-[var(--accent)] mb-1">
                    {label}
                  </p>

                  <p className="relative text-sm text-[var(--foreground)]/80">
                    {value}
                  </p>

                </motion.div>

              ))}

            </div>

          </section>


          {/* SKILLS */}

          <section>

            <h2 className="text-2xl font-semibold text-center mb-14">
              Skills <span className="text-[var(--accent)]">Visualization</span>
            </h2>

            <div className="max-w-3xl mx-auto space-y-8">

              {skills.map((skill, i) => (

                <div key={skill.name}>

                  <div className="flex justify-between text-sm mb-2">
                    <span>{skill.name}</span>
                    <span className="opacity-60">{skill.level}%</span>
                  </div>

                  <div className="h-2 rounded-full bg-[var(--border)] overflow-hidden">

                    <motion.div
                      initial={{ width:0 }}
                      whileInView={{ width:`${skill.level}%` }}
                      transition={{ duration:1, delay:i*0.1 }}
                      viewport={{ once:true }}
                      className="
                      h-full
                      bg-gradient-to-r
                      from-[var(--accent)]
                      to-[#e5d6b1]
                      "
                    />

                  </div>

                </div>

              ))}

            </div>

          </section>


          {/* TECH STACK */}

          <section>

            <h2 className="text-2xl font-semibold text-center mb-14">
              Tech <span className="text-[var(--accent)]">Stack</span>
            </h2>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">

              {tech.map((item) => (

                <motion.div
                  key={item.name}
                  whileHover={{ y:-4 }}
                  transition={{ duration:0.2 }}
                  className="
                  group flex flex-col items-center
                  p-6 rounded-xl
                  border border-[var(--border)]
                  bg-[var(--card)]/60 backdrop-blur-xl
                  hover:border-[var(--accent)]
                  transition
                  "
                >

                  <Icon icon={item.icon} width="36" />

                  <span className="text-xs mt-3 opacity-70 group-hover:opacity-100">
                    {item.name}
                  </span>

                </motion.div>

              ))}

            </div>

          </section>

        </div>

      </div>

    </main>
  );
}