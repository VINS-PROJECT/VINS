"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 w-full">

        <div className="max-w-3xl space-y-6">

          {/* ROLE */}
          <p className="text-sm text-gray-500">
            UI/UX Designer & Frontend Developer based in Indonesia.
          </p>

          {/* TITLE */}
          <h1 className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-semibold
            leading-tight
            tracking-tight
          ">
            Crafting Engaging Digital Experiences with a Focus on UI/UX and Frontend Development.
          </h1>

          {/* DESC */}
          <p className="text-gray-600 max-w-lg text-sm sm:text-base">
            With a passion for design and development, I create visually stunning and user friendly websites that leave a lasting impression.
          </p>

          {/* CTA */}
          <div className="
            flex
            flex-col sm:flex-row
            gap-3 sm:gap-4
            pt-4
          ">

            <Link
              href="/projects"
              className="
              text-center
              px-6 py-3
              bg-black text-white
              rounded-full
              text-sm
              hover:opacity-90
              transition
              "
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="
              text-center
              px-6 py-3
              border border-gray-300
              rounded-full
              text-sm
              hover:bg-gray-100
              transition
              "
            >
              Contact Me
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}