"use client";

import { motion } from "framer-motion";

import {
  ShieldCheck,
  Lock,
  Database,
  Cookie,
  Mail,
  Eye,
} from "lucide-react";





const POLICIES = [

  {
    icon: Database,
    title: "Information Collection",
    desc:
      "VINS may collect basic information submitted through forms such as name, email address, and messages for communication purposes only.",
  },


  {
    icon: Lock,
    title: "Data Protection",
    desc:
      "Personal information is handled responsibly and is not sold, shared, or distributed to third parties without permission.",
  },


  {
    icon: Cookie,
    title: "Cookies & Analytics",
    desc:
      "VINS may use cookies or analytics tools in future updates to improve user experience and understand platform performance.",
  },


  {
    icon: Eye,
    title: "Transparency",
    desc:
      "Any future features involving data tracking, including Social Track, will clearly explain what data is used and why.",
  },

];









export default function PrivacyPolicyPage(){



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







        {/* HEADER */}


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

            PRIVACY POLICY


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


            Your Data.


            <br/>


            Your


            <span
              className="
              text-[#C9A646]
              "
            >

              {" "}
              Privacy.


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

            This Privacy Policy explains how VINS Digital Experience
            handles information, protects user data, and maintains
            transparency across the platform.


          </p>






        </motion.section>














        {/* MAIN CARD */}



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
          mb-14


          rounded-[32px]


          bg-neutral-950


          p-10


          text-white
          "
        >





          <ShieldCheck

            size={42}

            className="
            text-[#C9A646]
            "
          />






          <h2
            className="
            mt-8


            text-4xl


            font-semibold


            tracking-[-0.05em]
            "
          >

            Privacy First Approach


          </h2>






          <p
            className="
            mt-5


            max-w-2xl


            leading-8


            text-white/60
            "
          >

            VINS is designed with respect for user privacy.
            Information shared through this website is only used
            to provide better communication and improve the experience.


          </p>





        </motion.section>















        {/* POLICY GRID */}


        <section
          className="
          grid

          gap-5

          md:grid-cols-2
          "
        >




          {POLICIES.map((item,index)=>{


            const Icon = item.icon;



            return (



              <motion.article


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
                  delay:index*.08,
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
                  mt-8


                  text-xl


                  font-semibold
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






              </motion.article>



            );


          })}



        </section>















        {/* CONTACT */}



        <section
          className="
          mt-16


          rounded-[32px]


          border
          border-neutral-200



          p-8


          flex

          flex-col


          gap-5



          md:flex-row
          md:items-center
          md:justify-between
          "
        >





          <div>



            <h3
              className="
              text-2xl


              font-semibold
              "
            >

              Privacy Questions?


            </h3>






            <p
              className="
              mt-2


              text-sm

              text-neutral-500
              "
            >

              Contact the developer for privacy related inquiries.


            </p>



          </div>







          <a

            href="mailto:vin.simorangkir81@gmail.com"


            className="
            inline-flex


            items-center
            gap-2



            rounded-full


            bg-black


            px-6
            py-3


            text-sm


            text-white


            hover:bg-[#C9A646]


            transition
            "
          >


            <Mail size={16}/>


            Contact



          </a>





        </section>





      </div>


    </main>

  );


}