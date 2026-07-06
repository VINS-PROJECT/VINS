"use client";

import { motion } from "framer-motion";

import {
  CheckCircle2,
  Clock,
  Sparkles,
  Rocket,
  Layers,
  Brain,
  Globe,
} from "lucide-react";






const ROADMAP = [

  {
    phase: "01",
    title: "Current Release",
    status: "Live",
    icon: CheckCircle2,

    items: [

      "Portfolio Experience",
      "Projects Showcase",
      "Articles System",
      "Developer Message",
      "Changelog",

    ],

  },



  {
    phase: "02",
    title: "Next Development",
    status: "In Progress",
    icon: Clock,

    items: [

      "Social Track Dashboard",
      "LinkedIn Growth Analytics",
      "Instagram Portfolio Archive",
      "Github Activity Tracker",

    ],

  },



  {
    phase: "03",
    title: "Future Vision",
    status: "Research",

    icon: Rocket,

    items: [

      "VINS+ Personal Ecosystem",
      "AI Assistant Integration",
      "Public Digital Profile",
      "Creative Management System",

    ],

  },


];











export default function RoadmapPage(){



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
        "
      >









        {/* HEADER */}


        <motion.div


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

          max-w-4xl
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

            VINS ROADMAP


          </span>









          <h1
            className="
            text-5xl
            md:text-7xl


            font-semibold


            tracking-[-0.06em]

            text-neutral-950
            "
          >

            Building The

            <br/>


            Future Of


            <br/>



            <span
              className="
              text-[#C9A646]
              "
            >

              VINS.


            </span>




          </h1>









          <p
            className="
            mt-8

            max-w-xl


            leading-8


            text-neutral-500
            "
          >

            A transparent look into upcoming improvements,
            experiments, and ideas planned for the VINS
            Digital Experience ecosystem.


          </p>






        </motion.div>














        {/* ROADMAP GRID */}


        <div
          className="
          grid

          gap-6

          lg:grid-cols-3
          "
        >







          {ROADMAP.map((road,index)=>{


            const Icon = road.icon;



            return (




              <motion.article


                key={road.phase}



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
                  delay:index*.1,
                }}




                className="
                group


                rounded-[32px]


                border
                border-neutral-200


                bg-white


                p-8



                transition


                hover:-translate-y-2


                hover:shadow-[0_30px_70px_rgba(0,0,0,.07)]
                "
              >








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

                    {road.phase}


                  </span>






                  <div
                    className="
                    flex


                    h-12
                    w-12



                    items-center
                    justify-center



                    rounded-full



                    bg-black



                    text-white



                    transition



                    group-hover:bg-[#C9A646]
                    "
                  >


                    <Icon size={20}/>


                  </div>





                </div>









                <div
                  className="
                  mt-16
                  "
                >



                  <span
                    className="
                    rounded-full


                    bg-[#C9A646]/10


                    px-4
                    py-2


                    text-xs


                    font-semibold



                    text-[#C9A646]
                    "
                  >


                    {road.status}



                  </span>









                  <h2
                    className="
                    mt-6


                    text-3xl


                    font-semibold


                    tracking-[-0.05em]
                    "
                  >


                    {road.title}


                  </h2>










                  <ul
                    className="
                    mt-8

                    space-y-4
                    "
                  >



                    {road.items.map(item=>(


                      <li

                        key={item}


                        className="
                        flex

                        gap-3


                        text-sm


                        text-neutral-500
                        "
                      >



                        <Sparkles

                          size={15}

                          className="
                          shrink-0

                          text-[#C9A646]
                          "
                        />



                        {item}




                      </li>



                    ))}



                  </ul>






                </div>






              </motion.article>



            );


          })}




        </div>













        {/* FOOT NOTE */}



        <div
          className="
          mt-20


          rounded-[32px]



          bg-neutral-950



          p-10


          text-white
          "
        >





          <div
            className="
            flex

            flex-col

            gap-6


            md:flex-row

            md:items-center
            md:justify-between
            "
          >




            <div>


              <h3
                className="
                text-3xl

                font-semibold

                tracking-[-0.05em]
                "
              >

                Continuous Improvement


              </h3>






              <p
                className="
                mt-3

                max-w-xl


                text-white/60
                "
              >

                VINS will continue evolving through design,
                engineering, creativity, and technology exploration.


              </p>




            </div>








            <Globe
              size={42}

              className="
              text-[#C9A646]
              "
            />




          </div>




        </div>






      </div>


    </main>

  );


}