"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";

import { articles as allArticles } from "@/data/articles";





export default function ArticleSection(){


  const slides = allArticles.slice(0,5);


  const [active,setActive] = useState(0);




  useEffect(()=>{


    if(slides.length <= 1) return;



    const timer = setInterval(()=>{


      setActive(
        prev => (prev + 1) % slides.length
      );


    },5000);



    return ()=>clearInterval(timer);



  },[slides.length]);





  const current = slides[active];


  if(!current) return null;






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

              INSIGHTS


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

              Latest

              <br/>


              <span
                className="
                text-[#C9A646]
                "
              >

                Articles

              </span>


            </h2>



          </div>









          <p
            className="
            rounded-full

            border
            border-neutral-200

            px-5
            py-2

            text-sm

            text-neutral-500
            "
          >

            Updated {current.date}


          </p>





        </div>














        {/* GRID */}



        <div
          className="
          grid

          gap-6

          md:grid-cols-2
          "
        >








          {/* CONTENT CARD */}


          <motion.div


            key={current.slug}


            initial={{
              opacity:0,
              y:30,
            }}


            animate={{
              opacity:1,
              y:0,
            }}


            transition={{
              duration:.5,
            }}




            className="
            flex

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






            <div>


              <span
                className="
                text-sm

                text-neutral-400
                "
              >

                {current.date}


              </span>









              <Link

                href={`/article/${current.slug}`}


                className="
                group
                "
              >



                <h3
                  className="
                  mt-12

                  max-w-xl

                  text-4xl
                  lg:text-5xl

                  font-semibold

                  leading-tight

                  tracking-[-0.05em]

                  text-neutral-950
                  "
                >


                  {current.title}


                </h3>








                {current.description && (


                  <p
                    className="
                    mt-8

                    max-w-lg

                    leading-8

                    text-neutral-500

                    line-clamp-3
                    "
                  >


                    {current.description}



                  </p>


                )}







              </Link>




            </div>










            {/* BOTTOM */}


            <div
              className="
              flex
              items-center
              justify-between

              gap-8
              "
            >





              <div
                className="
                flex
                gap-2
                "
              >



                {slides.map((_,i)=>(


                  <button

                    key={i}

                    onClick={()=>setActive(i)}


                    className={`
                    h-2

                    rounded-full

                    transition-all


                    ${
                      i === active

                      ?

                      `
                      w-8
                      bg-[#C9A646]
                      `

                      :

                      `
                      w-2
                      bg-neutral-300
                      `
                    }

                    `}
                  />


                ))}



              </div>







              <Link

                href={`/article/${current.slug}`}

                className="
                group

                flex

                h-12
                w-12

                items-center
                justify-center

                rounded-full

                bg-neutral-950

                text-white

                transition

                hover:bg-[#C9A646]
                "
              >


                <ArrowUpRight

                  size={18}

                  className="
                  transition

                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  "

                />


              </Link>





            </div>








          </motion.div>












          {/* IMAGE */}


          <Link

            href={`/article/${current.slug}`}


            className="
            group

            relative

            min-h-[520px]

            overflow-hidden

            rounded-[32px]

            border
            border-neutral-200

            bg-neutral-100
            "
          >



            <Image

              src={current.image}

              alt={current.title}

              fill


              className="
              object-cover

              transition-transform
              duration-700

              group-hover:scale-105
              "

            />



          </Link>






        </div>



      </div>



    </section>


  );


}