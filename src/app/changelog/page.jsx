"use client";

import { motion } from "framer-motion";

import {
  CalendarDays,
  Sparkles,
  Hammer,
  Bug,
} from "lucide-react";






const CHANGELOGS = [

  {
    version:"v5.0.0",

    date:"2026-07-05",

    changes:[

      {
        text:"Released VINS Digital Experience redesign.",
        type:"update",
      },

      {
        text:"Implemented clean enterprise design system.",
        type:"update",
      },

      {
        text:"Improved performance and page structure.",
        type:"fix",
      },

    ],
  },



  {
    version:"v4.2.0",

    date:"2026-05-20",

    changes:[

      {
        text:"Added article management experience.",
        type:"update",
      },


      {
        text:"Improved portfolio case study layout.",
        type:"update",
      },

    ],
  },




  {
    version:"v3.0.1",

    date:"2026-02-09",

    changes:[

      {
        text:"Fixed responsive issues on mobile devices.",
        type:"fix",
      },

      {
        text:"Fixed minor interface bugs.",
        type:"fix",
      },

    ],
  },





  {
    version:"v3.0.0",

    date:"2026-02-07",

    changes:[

      {
        text:"Introduced VINS+ ecosystem concept.",
        type:"update",
      },

      {
        text:"Updated navigation and project pages.",
        type:"update",
      },

      {
        text:"Fixed project detail rendering issues.",
        type:"fix",
      },

    ],
  },






  {
    version:"v1.0.0",

    date:"2025-12-06",

    changes:[

      {
        text:"Initial portfolio release.",
        type:"update",
      },

    ],
  },

];








const TYPE = {


  update:{
    icon:Sparkles,
    label:"Added",
  },


  fix:{
    icon:Hammer,
    label:"Fixed",
  },


  bug:{
    icon:Bug,
    label:"Bug",
  },


};











export default function ChangelogPage(){



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

        max-w-4xl
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

            PRODUCT UPDATE


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

            Change


            <span
              className="
              text-[#C9A646]
              "
            >

              log


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

            A transparent record of improvements,
            experiments, bug fixes, and updates
            across VINS Digital Experience.


          </p>






        </motion.div>













        {/* TIMELINE */}


        <div
          className="
          relative
          "
        >





          {/* LINE */}


          <div
            className="
            absolute

            left-3
            top-0


            h-full

            w-px


            bg-neutral-200
            "
          />









          <div
            className="
            space-y-10
            "
          >





            {CHANGELOGS.map((log,index)=>(



              <motion.div


                key={log.version}



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
                  delay:index * .05,
                }}



                className="
                relative

                pl-12
                "
              >







                {/* DOT */}



                <span
                  className="
                  absolute

                  left-0
                  top-8


                  h-6
                  w-6



                  rounded-full


                  border-4
                  border-white


                  bg-[#C9A646]


                  shadow-[0_0_0_1px_#e5e5e5]
                  "
                />









                {/* CARD */}



                <div
                  className="
                  rounded-[28px]


                  border
                  border-neutral-200


                  bg-white


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

                    items-center
                    justify-between

                    gap-5
                    "
                  >







                    <h2
                      className="
                      text-2xl


                      font-semibold


                      tracking-[-0.04em]
                      "
                    >

                      {log.version}


                    </h2>









                    <span
                      className="
                      flex

                      items-center
                      gap-2



                      text-sm

                      text-neutral-400
                      "
                    >

                      <CalendarDays size={15}/>


                      {log.date}


                    </span>






                  </div>











                  <div
                    className="
                    space-y-4
                    "
                  >





                    {log.changes.map((item,i)=>{



                      const Icon =
                        TYPE[item.type].icon;




                      return (


                        <div

                          key={i}


                          className="
                          flex

                          items-start
                          gap-3
                          "
                        >





                          <div
                            className="
                            mt-1


                            flex


                            h-7
                            w-7


                            items-center
                            justify-center



                            rounded-full


                            bg-neutral-100
                            "
                          >



                            <Icon

                              size={14}

                              className="
                              text-[#C9A646]
                              "

                            />



                          </div>







                          <div>


                            <span
                              className="
                              text-xs


                              uppercase

                              tracking-widest


                              text-[#C9A646]
                              "
                            >

                              {TYPE[item.type].label}


                            </span>







                            <p
                              className="
                              mt-1


                              text-sm


                              leading-7


                              text-neutral-500
                              "
                            >

                              {item.text}


                            </p>




                          </div>





                        </div>


                      );


                    })}



                  </div>




                </div>






              </motion.div>



            ))}




          </div>




        </div>






      </div>


    </main>

  );


}