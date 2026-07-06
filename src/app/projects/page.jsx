"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";


import { projectsData } from "@/data/projects";






export default function ProjectsPage(){



  const [filter,setFilter] = useState("all");





  const categories = [

    {
      key:"All",
      label:"All",
    },


    {
      key:"UI/UX Design",
      label:"UI/UX",
    },


    {
      key:"Web Development",
      label:"Web Development",
    },


    {
      key:"Design",
      label:"Design",
    },


  ];







  const filtered =

    filter === "all"

    ?

    projectsData

    :

    projectsData.filter(

      (item)=> item.category === filter

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

          transition={{
            duration:.6,
          }}


          className="
          mb-16
          "
        >





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

            PORTFOLIO


          </span>








          <div
            className="
            flex
            flex-col

            gap-8

            md:flex-row
            md:items-end
            md:justify-between
            "
          >





            <div>


              <h1
                className="
                text-5xl
                md:text-7xl

                font-semibold

                tracking-[-0.06em]

                text-neutral-950
                "
              >

                Selected

                <br />


                <span
                  className="
                  text-[#C9A646]
                  "
                >

                  Projects

                </span>


              </h1>







              <p
                className="
                mt-6

                max-w-lg

                leading-8

                text-neutral-500
                "
              >

                A collection of digital products,
                interfaces, and creative solutions
                that I have designed and developed.


              </p>


            </div>










            {/* FILTER */}


            <div
              className="
              flex

              flex-wrap

              gap-2
              "
            >



              {categories.map((item)=>(



                <button


                  key={item.key}


                  onClick={()=>setFilter(item.key)}


                  className={`
                  rounded-full

                  border

                  px-5
                  py-2.5


                  text-sm
                  font-medium

                  transition


                  ${
                    filter === item.key

                    ?

                    `
                    border-black
                    bg-black
                    text-white
                    `

                    :

                    `
                    border-neutral-200

                    text-neutral-500

                    hover:text-black
                    `
                  }

                  `}
                >

                  {item.label}


                </button>




              ))}




            </div>




          </div>





        </motion.div>














        {/* GRID */}


        {

        filtered.length > 0 ?


        (

          <div
            className="
            grid

            gap-6

            md:grid-cols-2
            "
          >



            {filtered.map((project,index)=>(



              <motion.div


                key={project.slug}


                initial={{
                  opacity:0,
                  y:30,
                }}


                animate={{
                  opacity:1,
                  y:0,
                }}


                transition={{
                  delay:index * .08,
                }}



              >




                <Link

                  href={`/projects/${project.slug}`}



                  className="
                  group

                  block

                  overflow-hidden


                  rounded-[32px]

                  border
                  border-neutral-200


                  bg-white


                  transition-all
                  duration-500


                  hover:-translate-y-1


                  hover:shadow-[0_24px_60px_rgba(0,0,0,.06)]
                  "
                >







                  {/* IMAGE */}



                  <div
                    className="
                    relative

                    h-[320px]

                    overflow-hidden

                    bg-neutral-100
                    "
                  >


                    <Image

                      src={project.image}

                      alt={project.title}

                      fill


                      className="
                      object-cover

                      transition
                      duration-700


                      group-hover:scale-105
                      "

                    />



                  </div>









                  {/* CONTENT */}


                  <div
                    className="
                    p-8
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
                        text-xs

                        font-semibold

                        uppercase

                        tracking-widest

                        text-[#C9A646]
                        "
                      >

                        {project.category}


                      </span>





                      <ArrowUpRight

                        size={18}

                        className="
                        text-neutral-300

                        transition

                        group-hover:text-[#C9A646]
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                        "

                      />




                    </div>









                    <h3
                      className="
                      mt-8

                      text-3xl

                      font-semibold

                      tracking-[-0.04em]

                      text-neutral-950
                      "
                    >

                      {project.title}


                    </h3>









                    <p
                      className="
                      mt-4

                      leading-7

                      text-neutral-500

                      line-clamp-2
                      "
                    >


                      {project.desc}


                    </p>









                    <div
                      className="
                      mt-8

                      flex

                      flex-wrap

                      gap-2
                      "
                    >



                      {project.tech.slice(0,3).map((tech)=>(



                        <span

                          key={tech}


                          className="
                          rounded-full

                          bg-neutral-100

                          px-4
                          py-2

                          text-xs

                          text-neutral-600
                          "
                        >


                          {tech}



                        </span>



                      ))}



                    </div>





                  </div>






                </Link>




              </motion.div>



            ))}



          </div>


        )

        :

        (


          <div
            className="
            py-24

            text-center

            text-sm

            text-neutral-400
            "
          >

            No projects found.


          </div>


        )

        }




      </div>


    </section>

  );


}