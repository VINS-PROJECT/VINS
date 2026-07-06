"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Download,
  Briefcase,
} from "lucide-react";


import { certificates } from "@/data/certificates";






export default function AboutPage(){



  const [filter,setFilter] = useState("all");




  const categories = [

    "all",

    "Web Development",

    "Back-End Development",

    "UI/UX",

    "Project Management",

    "Artificial Intelligence",

  ];





  const filtered =

    filter === "all"

    ?

    certificates

    :

    certificates.filter(
      item => item.category === filter
    );








  return (

    <section
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








        {/* ================= HERO ================= */}


        <div
          className="
          grid

          gap-16

          lg:grid-cols-2
          lg:items-center
          "
        >






          {/* TEXT */}


          <motion.div

            initial={{
              opacity:0,
              y:30,
            }}


            animate={{
              opacity:1,
              y:0,
            }}


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

              ABOUT ME


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

              Kevin

              <br/>


              <span
                className="
                text-[#C9A646]
                "
              >

                Simorangkir


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

              I'm an Informatics Engineering graduate passionate
              about creating meaningful digital experiences through
              UI/UX design, frontend engineering, and creative technology.


            </p>







            <p
              className="
              mt-5

              max-w-xl

              leading-8

              text-neutral-500
              "
            >

              Combining creativity, product thinking,
              and technology to transform ideas into
              scalable digital solutions.


            </p>











            {/* CTA BUTTONS */}



            <div
              className="
              mt-10

              flex
              flex-wrap

              gap-3
              "
            >






              {/* CONTACT */}


              <Link

                href="/contact"


                className="
                inline-flex

                items-center
                gap-2


                rounded-full


                bg-black


                px-7
                py-4


                text-sm

                text-white


                transition


                hover:bg-[#C9A646]
                "
              >

                Contact Me

                <ArrowUpRight size={16}/>


              </Link>








              {/* RESUME */}



              <a

                href="https://drive.google.com/uc?export=download&id=1twRdA1e9g_7DthwC3mh_rf2PjKWxxPDY"

                target="_blank"

                rel="noopener noreferrer"



                className="
                inline-flex

                items-center
                gap-2


                rounded-full


                border
                border-neutral-300


                px-7
                py-4


                text-sm


                transition


                hover:border-black
                "
              >


                Resume


                <Download size={16}/>


              </a>









              {/* PORTFOLIO */}



              <a

                href="https://drive.google.com/file/d/1sfyJTJatmMH8Rfb2fa5wTuUh2Zz2SxPK/view?usp=sharing"


                target="_blank"


                rel="noopener noreferrer"



                className="
                inline-flex

                items-center
                gap-2


                rounded-full


                border
                border-neutral-300


                px-7
                py-4


                text-sm



                transition


                hover:border-[#C9A646]

                hover:text-[#C9A646]
                "
              >


                Portfolio


                <Briefcase size={16}/>


              </a>





            </div>




          </motion.div>












          {/* IMAGE */}


          <motion.div


            initial={{
              opacity:0,
              x:40,
            }}



            animate={{
              opacity:1,
              x:0,
            }}



            className="
            relative

            h-[520px]

            overflow-hidden

            rounded-[32px]

            border
            border-neutral-200

            bg-neutral-100
            "
          >



            <Image

              src="/profile.jpg"

              alt="Kevin Simorangkir"

              fill

              priority


              className="
              object-cover
              "

            />



          </motion.div>






        </div>












        {/* SKILLS */}


        <SectionTitle

          title="Skills & Tools"

          desc="Technologies and creative tools I use."

        />




        <div
          className="
          flex

          flex-wrap

          gap-3
          "
        >



          {[

            "React",

            "Next.js",

            "Tailwind CSS",

            "JavaScript",

            "Figma",

            "Node.js",

            "MySQL",

            "Git",

            "Photoshop",

          ].map((skill)=>(



            <span

              key={skill}


              className="
              rounded-full

              bg-neutral-100


              px-5
              py-3


              text-sm

              text-neutral-600
              "
            >

              {skill}


            </span>


          ))}



        </div>









        {/* CERTIFICATE */}


        <SectionTitle

          title="Certificates"

          desc="Continuous learning and professional growth."

        />







        <div
          className="
          mb-10

          flex

          flex-wrap

          gap-2
          "
        >



          {categories.map((cat)=>(


            <button

              key={cat}


              onClick={()=>setFilter(cat)}



              className={`
              rounded-full

              border


              px-5
              py-2.5


              text-sm

              transition



              ${
                filter === cat

                ?

                "bg-black text-white border-black"

                :

                "border-neutral-200 text-neutral-500 hover:text-black"
              }

              `}
            >

              {cat}


            </button>


          ))}



        </div>










        <div
          className="
          grid

          gap-5

          md:grid-cols-2
          "
        >


          {filtered.map((cert)=>(


            <a

              key={cert.id}


              href={cert.pdf}


              target="_blank"


              rel="noopener noreferrer"



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



              <span
                className="
                text-xs

                tracking-widest

                uppercase

                text-[#C9A646]
                "
              >

                {cert.category}


              </span>




              <h3
                className="
                mt-5

                text-xl

                font-semibold
                "
              >

                {cert.title}


              </h3>




              <p
                className="
                mt-2

                text-sm

                text-neutral-500
                "
              >

                {cert.issuer}


              </p>



            </a>


          ))}


        </div>





      </div>


    </section>

  );

}









function SectionTitle({title,desc}){


  return (

    <div
      className="
      mt-24
      mb-10
      "
    >

      <h2
        className="
        text-4xl

        font-semibold

        tracking-[-0.05em]
        "
      >

        {title}

      </h2>



      <p
        className="
        mt-3

        text-neutral-500
        "
      >

        {desc}

      </p>



    </div>

  );

}