"use client";

import { motion } from "framer-motion";

import {
  CheckCircle2,
  Server,
  Globe,
  Database,
  ShieldCheck,
  Activity,
  Clock,
} from "lucide-react";







const SERVICES = [

  {
    name:"Website",
    desc:"VINS Digital Experience",
    status:"Operational",
    icon:Globe,
  },


  {
    name:"Portfolio API",
    desc:"Projects & content data",
    status:"Operational",
    icon:Database,
  },


  {
    name:"Social Track",
    desc:"Analytics ecosystem",
    status:"Development",
    icon:Activity,
  },


  {
    name:"Security",
    desc:"Privacy & protection layer",
    status:"Operational",
    icon:ShieldCheck,
  },


];









const HISTORY = [

  {
    date:"July 2026",
    title:"VINS v5 Production Release",
    desc:"All systems migrated successfully into the new digital experience.",
  },


  {
    date:"June 2026",
    title:"Performance Optimization",
    desc:"Improved loading speed and frontend rendering.",
  },


  {
    date:"May 2026",
    title:"Scheduled Maintenance",
    desc:"Updated internal structure and design system.",
  },

];











export default function SystemStatusPage(){



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
          mb-16

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

            SYSTEM STATUS


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


            Platform

            <br/>

            Health

            <br/>


            <span
              className="
              text-[#C9A646]
              "
            >

              Overview.


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

            Real-time overview of VINS Digital Experience services,
            availability, improvements, and maintenance history.


          </p>





        </motion.div>














        {/* MAIN STATUS */}



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
          mb-10


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

            gap-8


            md:flex-row

            md:items-center
            md:justify-between
            "
          >







            <div>


              <div
                className="
                flex

                items-center
                gap-3
                "
              >



                <CheckCircle2
                  className="
                  text-[#C9A646]
                  "
                />



                <span
                  className="
                  font-semibold
                  "
                >

                  All Systems Operational


                </span>




              </div>







              <h2
                className="
                mt-6

                text-5xl


                font-semibold


                tracking-[-0.06em]
                "
              >

                99.9%


              </h2>





              <p
                className="
                mt-2

                text-white/50
                "
              >

                Current uptime


              </p>




            </div>










            <Server

              size={64}

              className="
              text-[#C9A646]
              "
            />




          </div>




        </motion.section>















        {/* SERVICES */}



        <section
          className="
          grid

          gap-5

          md:grid-cols-2
          "
        >





          {SERVICES.map((service,index)=>{


            const Icon = service.icon;



            return(




              <motion.div


                key={service.name}



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
                  delay:index*.08,
                }}




                className="
                rounded-[28px]


                border
                border-neutral-200


                p-7
                "
              >








                <div
                  className="
                  flex

                  justify-between
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


                    bg-black


                    text-white
                    "
                  >

                    <Icon size={20}/>


                  </div>








                  <span
                    className="
                    h-fit


                    rounded-full


                    bg-[#C9A646]/10


                    px-3
                    py-1



                    text-xs

                    text-[#C9A646]
                    "
                  >


                    {service.status}



                  </span>




                </div>










                <h3
                  className="
                  mt-8


                  text-xl


                  font-semibold
                  "
                >

                  {service.name}


                </h3>





                <p
                  className="
                  mt-2


                  text-sm

                  text-neutral-500
                  "
                >

                  {service.desc}


                </p>




              </motion.div>




            );


          })}





        </section>














        {/* HISTORY */}



        <section
          className="
          mt-20
          "
        >




          <h2
            className="
            mb-8


            text-3xl


            font-semibold


            tracking-[-0.05em]
            "
          >

            Status History


          </h2>






          <div
            className="
            space-y-4
            "
          >




            {HISTORY.map(item=>(



              <div

                key={item.title}


                className="
                flex

                gap-5


                rounded-[24px]


                border
                border-neutral-200



                p-6
                "
              >



                <Clock

                  size={20}

                  className="
                  text-[#C9A646]
                  "
                />




                <div>



                  <span
                    className="
                    text-xs

                    text-neutral-400
                    "
                  >

                    {item.date}


                  </span>




                  <h3
                    className="
                    mt-1

                    font-semibold
                    "
                  >

                    {item.title}


                  </h3>





                  <p
                    className="
                    mt-2

                    text-sm

                    text-neutral-500
                    "
                  >

                    {item.desc}


                  </p>



                </div>



              </div>


            ))}




          </div>






        </section>





      </div>


    </main>

  );


}