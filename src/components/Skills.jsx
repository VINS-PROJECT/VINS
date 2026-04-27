"use client";

import { Code, Palette, Lightbulb, Users } from "lucide-react";

const items = [
  {
    title: "Frontend Development",
    desc: "Building responsive and performant websites using modern technologies.",
    icon: Code,
  },
  {
    title: "UI / UX Design",
    desc: "Designing intuitive interfaces with a focus on user experience and functionality.",
    icon: Palette,
  },
  {
    title: "Problem Solving",
    desc: "Approaching challenges with creativity and a focus on effective solutions.",
    icon: Lightbulb,
  },
  {
    title: "Collaboration",
    desc: "Working closely with clients and teams to bring ideas to life and achieve project goals.",
    icon: Users,
  },
];

export default function Skills() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-xl mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            What I Do
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            My core skills and how I approach building products.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="
                flex gap-4
                p-5 md:p-6
                border border-gray-200
                rounded-2xl
                bg-white
                hover:shadow-md hover:-translate-y-1
                transition-all duration-300
                "
              >
                {/* ICON */}
                <div className="
                  w-10 h-10
                  flex items-center justify-center
                  rounded-lg
                  bg-gray-100
                  shrink-0
                ">
                  <Icon size={18} />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="font-medium text-base md:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}