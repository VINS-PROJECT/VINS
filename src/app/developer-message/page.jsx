"use client";

import { motion } from "framer-motion";

import {
  Code2,
  Heart,
  Rocket,
  Sparkles,
  CalendarDays,
} from "lucide-react";





const PRINCIPLES = [

  {
    icon: Sparkles,
    title: "Design With Purpose",
    desc:
      "Every interface should not only look beautiful, but also solve real problems and create meaningful experiences.",
  },


  {
    icon: Code2,
    title: "Build With Quality",
    desc:
      "Clean structure, scalable code, and thoughtful engineering decisions are the foundation of every product.",
  },


  {
    icon: Rocket,
    title: "Always Improving",
    desc:
      "VINS continues to evolve through iterations, experiments, feedback, and continuous learning.",
  },

];







export default function DeveloperMessagePage(){



  return (

    <main
      className="
      section-space

      bg-white
      "
    >



      <div
        className="
        container-main

        max-w-5xl
        "
      >








        {/* ================= HEADER ================= */}


        <motion.section


          initial={{
            opacity:0,
            y:30,
          }}


          animate={{
            opacity:1,
            y:0,
          }}


          className="
          mb-20
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

            FROM THE DEVELOPER


          </span>









          <h1
            className="
            max-w-4xl


            text-5xl
            md:text-7xl


            font-semibold


            tracking-[-0.06em]


            text-neutral-950
            "
          >


            Building

            <br/>


            Digital Products


            <br/>


            <span
              className="
              text-[#C9A646]
              "
            >

              With Purpose.


            </span>



          </h1>









          <div
            className="
            mt-8

            flex

            items-center
            gap-2


            text-sm

            text-neutral-400
            "
          >

            <CalendarDays size={15}/>


            Last updated — July 2026


          </div>




        </motion.section>















        {/* ================= MESSAGE CARD ================= */}



        <motion.article


          initial={{
            opacity:0,
            y:40,
          }}


          animate={{
            opacity:1,
            y:0,
          }}



          transition={{
            delay:.15,
          }}



          className="
          rounded-[32px]


          border
          border-neutral-200


          bg-white


          p-8
          md:p-12



          leading-8


          text-neutral-600
          "
        >








          <p>


            Hello, I'm Kevin Simorangkir — the creator behind
            VINS Digital Experience.



          </p>





          <br/>





          <p>

            VINS started as a personal portfolio, but it continues
            evolving into a digital ecosystem that represents my journey
            in design, technology, creativity, and product development.


          </p>





          <br/>





          <p>


            This platform is built with a simple philosophy:
            every digital product should combine visual clarity,
            meaningful experiences, and reliable technology.


          </p>





          <br/>





          <p>


            Every update, redesign, bug fix, and experiment documented
            here represents continuous improvement — because great
            products are never truly finished, they keep evolving.


          </p>








          <div
            className="
            mt-10


            flex

            items-center
            gap-3
            "
          >




            <div
              className="
              flex

              h-12
              w-12


              items-center
              justify-center



              rounded-full



              bg-[#C9A646]/10



              text-[#C9A646]
              "
            >

              <Heart size={20}/>


            </div>







            <div>



              <h3
                className="
                font-semibold

                text-neutral-950
                "
              >

                Kevin Simorangkir


              </h3>




              <p
                className="
                text-sm

                text-neutral-400
                "
              >

                Designer • Developer • Creator


              </p>




            </div>



          </div>






        </motion.article>















        {/* ================= PRINCIPLES ================= */}



        <section
          className="
          mt-20

          grid

          gap-5

          md:grid-cols-3
          "
        >




          {PRINCIPLES.map((item,index)=>{


            const Icon = item.icon;



            return (



              <motion.div


                key={item.title}



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
                  delay:index * .1,
                }}




                className="
                rounded-[28px]



                border
                border-neutral-200



                p-7



                transition



                hover:-translate-y-1


                hover:shadow-[0_24px_60px_rgba(0,0,0,.06)]
                "
              >






                <div
                  className="
                  mb-8


                  flex


                  h-12
                  w-12



                  items-center
                  justify-center



                  rounded-full



                  bg-black



                  text-white
                  "
                >

                  <Icon size={20}/>


                </div>








                <h3
                  className="
                  text-xl

                  font-semibold

                  tracking-[-0.04em]
                  "
                >

                  {item.title}


                </h3>







                <p
                  className="
                  mt-4


                  text-sm

                  leading-7


                  text-neutral-500
                  "
                >

                  {item.desc}


                </p>




              </motion.div>




            );


          })}





        </section>





      </div>


    </main>

  );


}