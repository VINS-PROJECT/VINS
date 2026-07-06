"use client";

import { use } from "react";

import Image from "next/image";
import Link from "next/link";


import { motion } from "framer-motion";


import {
  Calendar,
  ArrowLeft,
  ArrowUpRight,
  Clock,
} from "lucide-react";


import { articles as allArticles } from "@/data/articles";








export default function ArticleDetail({ params }) {


  // NEXT 16 FIX
  const { slug } = use(params);





  const article =
    allArticles.find(
      item => item.slug === slug
    );






  if(!article){


    return (

      <main
        className="
        flex

        min-h-screen

        items-center
        justify-center


        text-neutral-400
        "
      >

        Article not found

      </main>

    );


  }









  const readingTime = Math.ceil(

    article.content.split(" ").length / 200

  );








  const relatedArticles =

    allArticles

    .filter(
      item => item.slug !== slug
    )

    .slice(0,3);









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







        {/* BACK */}


        <Link

          href="/article"


          className="
          mb-12

          inline-flex

          items-center
          gap-2


          rounded-full


          border
          border-neutral-200


          px-5
          py-3



          text-sm

          text-neutral-500


          transition


          hover:border-black
          hover:text-black
          "
        >


          <ArrowLeft size={16}/>


          Back to Articles


        </Link>










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



        >





          <span
            className="
            text-xs

            uppercase

            tracking-[0.25em]

            font-semibold


            text-[#C9A646]
            "
          >

            {article.category}


          </span>









          <h1
            className="
            mt-6


            text-5xl
            md:text-7xl


            font-semibold


            leading-none


            tracking-[-0.06em]


            text-neutral-950
            "
          >


            {article.title}


          </h1>










          {/* META */}



          <div
            className="
            mt-8


            flex

            flex-wrap

            gap-3
            "
          >




            <span
              className="
              inline-flex

              items-center
              gap-2


              rounded-full


              bg-neutral-100


              px-5
              py-2



              text-sm


              text-neutral-500
              "
            >


              <Calendar size={15}/>

              {article.date}


            </span>







            <span
              className="
              inline-flex

              items-center
              gap-2


              rounded-full


              bg-neutral-100


              px-5
              py-2



              text-sm


              text-neutral-500
              "
            >


              <Clock size={15}/>


              {readingTime} min read



            </span>




          </div>





        </motion.div>













        {/* IMAGE */}



        <motion.div


          initial={{
            opacity:0,
            y:40,
          }}


          animate={{
            opacity:1,
            y:0,
          }}



          transition={{
            delay:.1,
          }}



          className="
          mt-14


          overflow-hidden


          rounded-[32px]


          border
          border-neutral-200


          bg-neutral-100
          "
        >



          <Image

            src={article.image}

            alt={article.title}


            width={1600}

            height={900}



            priority


            className="
            w-full

            object-cover
            "

          />



        </motion.div>













        {/* CONTENT */}



        <article


          className="
          mt-14


          text-lg

          leading-9


          text-neutral-600
          "


          dangerouslySetInnerHTML={{


            __html:

              article.content.replace(

                /\n/g,

                "<br/><br/>"

              ),


          }}


        />














        {/* RELATED */}



        {

        relatedArticles.length > 0 &&


        <section
          className="
          mt-24
          "
        >





          <h2
            className="
            mb-8


            text-4xl

            font-semibold


            tracking-[-0.05em]
            "
          >

            Related Articles


          </h2>







          <div
            className="
            grid

            gap-4
            "
          >




            {relatedArticles.map(item=>(



              <Link

                key={item.slug}

                href={`/article/${item.slug}`}



                className="
                group

                flex

                items-center
                justify-between

                gap-8



                rounded-[24px]


                border
                border-neutral-200



                p-6



                transition



                hover:-translate-y-1

                hover:shadow-[0_20px_50px_rgba(0,0,0,.05)]
                "
              >





                <div>



                  <span
                    className="
                    text-xs

                    text-[#C9A646]
                    "
                  >

                    {item.date}


                  </span>







                  <h3
                    className="
                    mt-2


                    font-semibold


                    text-neutral-950
                    "
                  >

                    {item.title}


                  </h3>




                </div>








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



              </Link>



            ))}




          </div>





        </section>

        }





      </div>


    </main>

  );


}