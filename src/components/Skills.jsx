"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import {
  ArrowUpRight
} from "lucide-react";



const tabs = [

  {
    key:"about",
    label:"About Me",
  },


  {
    key:"project",
    label:"Project",
  },

];








export default function AboutProjectSection(){


  const [active,setActive] = useState("about");


  const isAbout = active === "about";






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







        {/* HEADER */}


        <div
          className="
          mb-16

          flex
          flex-col

          gap-8

          md:flex-row
          md:items-end
          md:justify-between
          "
        >



          <div>


            <span
              className="
              mb-5

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

              EXPLORE

            </span>





            <h2
              className="
              text-5xl
              md:text-7xl

              font-semibold

              tracking-[-0.06em]

              text-neutral-950
              "
            >

              Discover

              <br/>

              <span
                className="
                text-[#C9A646]
                "
              >

                My Work

              </span>


            </h2>


          </div>








          {/* TAB */}



          <div
            className="
            flex

            rounded-full

            border
            border-neutral-200

            bg-white

            p-1
            "
          >


            {tabs.map((tab)=>(


              <button

                key={tab.key}

                onClick={()=>setActive(tab.key)}


                className={`
                rounded-full

                px-6
                py-3

                text-sm
                font-medium

                transition-all


                ${
                  active === tab.key

                  ?

                  `
                  bg-neutral-950
                  text-white
                  `

                  :

                  `
                  text-neutral-500

                  hover:text-black
                  `
                }


                `}
              >

                {tab.label}


              </button>


            ))}



          </div>



        </div>













        {/* CONTENT GRID */}



        <div
          className="
          grid

          gap-6

          md:grid-cols-2
          "
        >






          {/* IMAGE CARD */}


          <motion.div


            layout


            transition={{
              duration:.5,
              ease:"easeInOut",
            }}



            className={
              isAbout
              ? "order-1"
              : "order-2"
            }


          >



            <div
              className="
              relative

              h-full
              min-h-[520px]

              overflow-hidden

              rounded-[32px]

              border
              border-neutral-200

              bg-neutral-50
              "
            >



              <Image

                src="/hero.png"

                alt="Kevin Simorangkir"

                fill

                className="
                object-contain
                object-bottom
                "

              />








              {/* FLOATING */}



              <div
                className="
                absolute

                left-8
                bottom-8


                rounded-3xl

                border
                border-white/60

                bg-white/80

                p-6

                backdrop-blur-xl

                shadow-[0_20px_60px_rgba(0,0,0,.08)]
                "
              >



                <p
                  className="
                  text-sm

                  text-neutral-500
                  "
                >

                  Creative Developer

                </p>






                <h3
                  className="
                  mt-2

                  text-2xl

                  font-semibold

                  tracking-[-0.04em]
                  "
                >

                  Kevin
                  <br/>

                  Simorangkir


                </h3>



              </div>





            </div>




          </motion.div>













          {/* INFO CARD */}



          <motion.div


            layout


            transition={{
              duration:.5,
              ease:"easeInOut",
            }}



            className={
              isAbout
              ? "order-2"
              : "order-1"
            }

          >




            <div
              className="
              flex
              h-full

              min-h-[520px]

              flex-col
              justify-between


              rounded-[32px]

              border
              border-neutral-200

              bg-white

              p-8
              lg:p-12


              transition

              hover:shadow-[0_24px_60px_rgba(0,0,0,.06)]
              "
            >





              <span
                className="
                text-sm
                text-neutral-400
                "
              >

                2026 Portfolio

              </span>









              <div>


                <h3
                  className="
                  max-w-lg

                  text-4xl
                  lg:text-5xl

                  font-semibold

                  tracking-[-0.05em]

                  text-neutral-950
                  "
                >


                  Creating digital products with purpose.


                </h3>








                <p
                  className="
                  mt-8

                  max-w-lg

                  leading-8

                  text-neutral-500
                  "
                >


                  I'm Kevin Simorangkir, a designer and developer
                  focused on crafting meaningful digital experiences
                  through design, technology, and creative strategy.


                </p>








                <Link

                  href="/about"


                  className="
                  group

                  mt-10

                  inline-flex

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


                  Get to Know Me


                  <ArrowUpRight

                    size={16}

                    className="
                    transition

                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    "

                  />



                </Link>




              </div>






            </div>






          </motion.div>





        </div>



      </div>



    </section>


  );


}