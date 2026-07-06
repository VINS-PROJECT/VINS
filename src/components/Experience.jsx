"use client";

import { motion } from "framer-motion";

import {
  Palette,
  Code2,
  Lightbulb,
  Layers,
  ArrowUpRight,
} from "lucide-react";



const capabilities = [

  {
    number: "01",
    title: "Product Design",
    desc:
      "Designing intuitive interfaces and meaningful digital experiences focused on usability and impact.",
    skills: [
      "UI/UX Design",
      "Design System",
      "Prototype",
    ],
    icon: Palette,
  },


  {
    number: "02",
    title: "Frontend Development",
    desc:
      "Building modern, responsive, and scalable web experiences using creative technologies.",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
    ],
    icon: Code2,
  },


  {
    number: "03",
    title: "Digital Strategy",
    desc:
      "Bridging creativity, technology, and business goals into effective digital solutions.",
    skills: [
      "Product Thinking",
      "Leadership",
      "Management",
    ],
    icon: Lightbulb,
  },


  {
    number: "04",
    title: "Creative Direction",
    desc:
      "Creating visual systems, digital identities, and creative concepts with strong storytelling.",
    skills: [
      "Branding",
      "Content",
      "Creative",
    ],
    icon: Layers,
  },

];







export default function Capabilities() {


  return (

    <section
      className="section-space bg-white"
    >


      <div
        className="
        mx-auto

        max-w-7xl

        px-6
        lg:px-8
        "
      >







        {/* ================= HEADER ================= */}



        <motion.div

          initial={{
            opacity:0,
            y:30,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          viewport={{
            once:true,
          }}

          transition={{
            duration:.7,
          }}


          className="
          mb-20

          max-w-3xl
          "
        >




          <span
            className="
            mb-6

            inline-flex

            rounded-full

            border
            border-neutral-200

            px-5
            py-2

            text-xs
            font-semibold

            tracking-[0.25em]

            text-[#C9A646]
            "
          >

            WHAT I DO

          </span>







          <h2
            className="
            text-5xl
            md:text-7xl

            font-semibold

            leading-none

            tracking-[-0.06em]

            text-neutral-950
            "
          >

            My Digital
            <br />


            <span
              className="
              text-[#C9A646]
              "
            >

              Capabilities

            </span>


          </h2>








          <p
            className="
            mt-8

            max-w-xl

            text-lg

            leading-8

            text-neutral-500
            "
          >

            Combining design thinking, technology,
            and creativity to craft digital products
            with purpose.


          </p>




        </motion.div>














        {/* ================= GRID ================= */}




        <div
          className="
          grid

          gap-6

          md:grid-cols-2
          "
        >



          {capabilities.map((item,index)=>{


            const Icon = item.icon;



            return (


              <motion.article


                key={item.number}


                initial={{
                  opacity:0,
                  y:40,
                }}


                whileInView={{
                  opacity:1,
                  y:0,
                }}


                viewport={{
                  once:true,
                }}


                transition={{
                  delay:index * .08,
                  duration:.6,
                }}




                className="
                group

                rounded-[32px]

                border
                border-neutral-200

                bg-white

                p-8
                lg:p-10


                transition-all
                duration-500


                hover:-translate-y-1

                hover:shadow-[0_24px_60px_rgba(0,0,0,.06)]
                "
              >






                {/* TOP */}



                <div
                  className="
                  flex
                  items-center
                  justify-between
                  "
                >



                  <span
                    className="
                    text-sm
                    text-neutral-400
                    "
                  >

                    {item.number}


                  </span>





                  <div
                    className="
                    flex

                    h-12
                    w-12

                    items-center
                    justify-center

                    rounded-full

                    bg-neutral-100

                    text-neutral-800

                    transition


                    group-hover:bg-[#C9A646]
                    group-hover:text-white
                    "
                  >


                    <Icon size={21}/>


                  </div>



                </div>









                {/* CONTENT */}



                <div
                  className="
                  mt-24
                  "
                >



                  <h3
                    className="
                    text-3xl

                    font-semibold

                    tracking-[-0.04em]

                    text-neutral-950
                    "
                  >

                    {item.title}


                  </h3>







                  <p
                    className="
                    mt-5

                    max-w-md

                    leading-8

                    text-neutral-500
                    "
                  >

                    {item.desc}


                  </p>



                </div>













                {/* SKILLS */}



                <div
                  className="
                  mt-10

                  flex
                  items-center
                  justify-between

                  gap-6
                  "
                >




                  <div
                    className="
                    flex
                    flex-wrap

                    gap-2
                    "
                  >



                    {item.skills.map((skill)=>(


                      <span

                        key={skill}

                        className="
                        rounded-full

                        bg-neutral-100

                        px-4
                        py-2

                        text-xs
                        font-medium

                        text-neutral-600
                        "
                      >

                        {skill}


                      </span>


                    ))}




                  </div>





                  <ArrowUpRight

                    size={18}

                    className="
                    shrink-0

                    text-neutral-300

                    transition-all

                    group-hover:text-[#C9A646]
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    "

                  />




                </div>





              </motion.article>



            );



          })}




        </div>




      </div>


    </section>

  );

}