"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen bg-[#F3F5FA] p-5 overflow-hidden">

      {/* HERO CONTAINER */}

      <div
        className="
        relative
        h-[calc(100vh-40px)]
        overflow-hidden
        rounded-[36px]
        bg-black
        "
      >

        {/* ================= BACKGROUND ================= */}

        <div
          className="
          absolute
          inset-0
          bg-[url('/pattern.svg')]
          bg-repeat
          opacity-[0.08]
          "
        />

        <div
          className="
          absolute
          -top-40
          -left-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-white/10
          blur-[180px]
          "
        />

        <div
          className="
          absolute
          bottom-0
          right-0
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#D4AF37]/10
          blur-[180px]
          "
        />

        {/* ================= CONTENT ================= */}

        <div
          className="
          relative
          z-10
          h-full
          max-w-[1450px]
          mx-auto
          grid
          lg:grid-cols-[38%_62%]
          items-center
          px-8
          lg:px-12
          "
        >

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="max-w-[460px] lg:ml-8"
          >

            {/* TITLE */}

            <h1
              className="
              mt-2
              text-[32px]
              sm:text-[38px]
              lg:text-[42px]
              xl:text-[48px]
              font-extrabold
              leading-[1.05]
              tracking-[-0.03em]
              text-white
              "
            >
              Building
              <br />
              <span className="text-[#D4AF37]">
                Beautiful
              </span>
              <br />
              Digital Products
              <br />
              for Modern
              <br />
              Businesses.
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
              mt-7
              max-w-[440px]
              text-[17px]
              leading-8
              text-gray-300
              "
            >
              I'm Kevin Simorangkir, a UI/UX Designer &
              Frontend Developer passionate about creating
              premium digital experiences with modern
              technologies and beautiful interfaces.
            </p>

            {/* CTA */}

            <div className="mt-9 flex gap-4">

              <Link
                href="/projects"
                className="
                rounded-full
                bg-[#D4AF37]
                px-6
                py-3
                text-[15px]
                font-semibold
                text-white
                hover:bg-[#C19A2E]
                transition
                "
              >
                View Projects
              </Link>

              <Link
                href="/contact"
                className="
                rounded-full
                border
                border-white/20
                bg-white/10
                backdrop-blur-xl
                px-6
                py-3
                text-[15px]
                font-semibold
                text-white
                hover:bg-white/20
                transition
                "
              >
                Contact Me
              </Link>

            </div>

          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .9 }}
            className="
            relative
            h-full
            hidden
            lg:flex
            items-end
            justify-end
            "
          >
                    {/* Glow Behind Image */}

            <div
              className="
                absolute
                bottom-0
                right-16
                h-[520px]
                w-[520px]
                rounded-full
                bg-[#D4AF37]/20
                blur-[150px]
              "
            />

            {/* Decorative Blur */}

            <div
              className="
                absolute
                top-40
                right-40
                h-20
                w-20
                rounded-full
                bg-white/10
                blur-3xl
              "
            />

            {/* Hero Image */}

            <div
              className="
                relative
                z-20
                h-[92%]
                w-full
                flex
                items-end
                justify-end
              "
            >

              {/* GANTI hero.png DENGAN FOTO PNG KAMU */}

              <Image
                src="/hero.png"
                alt="Kevin Simorangkir"
                fill
                className="
                  object-contain
                  object-bottom
                  select-none
                  pointer-events-none
                  drop-shadow-[0_35px_70px_rgba(0,0,0,.45)]
                "
              />

            </div>

          </motion.div>

        </div>

        {/* Bottom Gradient */}

        <div
          className="
            absolute
            bottom-0
            inset-x-0
            h-40
            bg-gradient-to-t
            from-black
            via-black/80
            to-transparent
          "
        />

      </div>

    </section>
  );
}