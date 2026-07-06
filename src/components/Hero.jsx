"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#f7efd8,transparent_35%)]" />


      <div
        className="
        relative
        mx-auto
        grid
        min-h-screen
        max-w-[1400px]
        items-center
        gap-20
        px-6
        py-28
        lg:grid-cols-2
        lg:px-20
        "
      >


        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >


          {/* TAG */}

          <div
            className="
            mb-8
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-neutral-200
            bg-white/70
            px-5
            py-2
            backdrop-blur
            "
          >

            <span
              className="
              h-2
              w-2
              rounded-full
              bg-[#C9A646]
              "
            />

            <span
              className="
              text-xs
              font-semibold
              tracking-[0.25em]
              text-neutral-600
              "
            >
              VINS DIGITAL EXPERIENCE
            </span>

          </div>



          {/* TITLE */}

          <h1
            className="
            text-[52px]
            font-semibold
            leading-[0.95]
            tracking-[-0.06em]
            text-neutral-950

            md:text-[78px]
            lg:text-[88px]
            "
          >

            Design.
            <br />

            Build.
            <br />

            Create
            <br />

            <span
              className="
              bg-gradient-to-r
              from-[#C9A646]
              to-[#8b7435]
              bg-clip-text
              text-transparent
              "
            >
              Impact.
            </span>

          </h1>



          {/* DESC */}

          <p
            className="
            mt-8
            max-w-xl
            text-[17px]
            leading-8
            text-neutral-500
            "
          >

            I'm Kevin Simorangkir — a digital creator focused on
            building meaningful experiences through UI/UX design,
            technology, and creative solutions.

          </p>




          {/* ACTION */}

          <div
            className="
            mt-10
            flex
            flex-wrap
            gap-4
            "
          >


            <Link

              href="/projects"

              className="
              group
              flex
              items-center
              gap-2
              rounded-full
              bg-neutral-950
              px-7
              py-4
              text-sm
              font-medium
              text-white
              transition

              hover:bg-[#C9A646]
              "
            >

              View Projects


              <ArrowUpRight
                size={16}
                className="
                transition
                group-hover:translate-x-1
                group-hover:-translate-y-1
                "
              />

            </Link>



            <Link

              href="/about"

              className="
              rounded-full
              border
              border-neutral-300
              px-7
              py-4
              text-sm
              font-medium
              text-neutral-900
              transition

              hover:border-neutral-900
              "
            >

              About Me

            </Link>



          </div>



        </motion.div>





        {/* RIGHT IMAGE */}

        <motion.div

          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}

          className="
          relative
          hidden
          justify-center
          lg:flex
          "
        >


          {/* IMAGE WRAPPER */}

          <div
            className="
            relative
            h-[620px]
            w-full
            overflow-hidden
            rounded-[40px]
            border
            border-neutral-200
            bg-gradient-to-b
            from-neutral-50
            to-[#f6f0df]
            "
          >


            <Image

              src="/hero.png"

              alt="Kevin Simorangkir"

              fill

              priority

              className="
              object-contain
              object-bottom
              "
            />



          </div>





          {/* CARD */}

          <motion.div

            initial={{ opacity:0, y:30 }}

            animate={{ opacity:1, y:0 }}

            transition={{ delay:.4 }}


            className="
            absolute
            -bottom-6
            left-10

            rounded-3xl
            border
            border-white/50

            bg-white/70
            px-8
            py-6

            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            backdrop-blur-xl
            "
          >


            <h3
              className="
              text-4xl
              font-semibold
              tracking-tight
              text-neutral-950
              "
            >
              20+
            </h3>


            <p
              className="
              mt-1
              text-sm
              text-neutral-500
              "
            >
              Digital Projects
            </p>



          </motion.div>




        </motion.div>



      </div>

    </section>
  );
}