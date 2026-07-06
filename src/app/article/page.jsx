"use client";

import {

  useState,

  useMemo,

  useEffect,

} from "react";



import Link from "next/link";
import Image from "next/image";


import { motion } from "framer-motion";


import {

  Search,

  Calendar,

  ArrowUpRight,

} from "lucide-react";



import { articles } from "@/data/articles";








export default function ArticlesPage(){



  const [search,setSearch] =
    useState("");



  const [category,setCategory] =
    useState("All");



  const [currentPage,setCurrentPage] =
    useState(1);





  const ITEMS_PER_PAGE = 6;







  const categories = useMemo(()=>{


    return [

      "All",

      ...Array.from(

        new Set(
          articles.map(
            item => item.category
          )
        )

      )

    ];


  },[]);









  const filteredArticles = useMemo(()=>{


    return articles.filter(item=>{


      const keyword =
        search.toLowerCase();



      const matchCategory =

        category === "All"

        ||

        item.category === category;





      const matchSearch =

        item.title
        .toLowerCase()
        .includes(keyword)


        ||

        item.desc
        .toLowerCase()
        .includes(keyword);




      return matchCategory && matchSearch;


    });



  },[search,category]);









  useEffect(()=>{


    setCurrentPage(1);


  },[search,category]);









  const totalPages =
    Math.ceil(
      filteredArticles.length / ITEMS_PER_PAGE
    );






  const displayedArticles =

    filteredArticles.slice(

      (currentPage - 1) * ITEMS_PER_PAGE,


      currentPage * ITEMS_PER_PAGE

    );






  const featured =
    articles[0];










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







        {/* ================= HEADER ================= */}


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

          max-w-3xl
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

            INSIGHTS


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

            Digital

            <br/>


            <span
              className="
              text-[#C9A646]
              "
            >

              Articles


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

            Thoughts about design, technology,
            development, and building meaningful
            digital experiences.


          </p>



        </motion.div>












        {/* FEATURED */}


        {featured && (


          <Link

            href={`/article/${featured.slug}`}


            className="
            group

            mb-16

            grid

            overflow-hidden

            rounded-[32px]

            border
            border-neutral-200


            md:grid-cols-2
            "
          >





            <div
              className="
              relative

              min-h-[360px]

              overflow-hidden

              bg-neutral-100
              "
            >



              <Image

                src={featured.image}

                alt={featured.title}

                fill


                className="
                object-cover

                transition
                duration-700


                group-hover:scale-105
                "

              />



            </div>










            <div
              className="
              flex

              flex-col

              justify-between


              p-8
              lg:p-12
              "
            >




              <div>



                <span
                  className="
                  text-xs

                  uppercase

                  tracking-widest

                  text-[#C9A646]
                  "
                >

                  Featured • {featured.category}


                </span>







                <h2
                  className="
                  mt-10


                  text-4xl

                  font-semibold

                  tracking-[-0.05em]


                  text-neutral-950
                  "
                >

                  {featured.title}


                </h2>








                <p
                  className="
                  mt-6

                  leading-8

                  text-neutral-500

                  line-clamp-3
                  "
                >

                  {featured.desc}


                </p>



              </div>









              <div
                className="
                mt-10

                flex

                items-center
                justify-between
                "
              >



                <span
                  className="
                  flex

                  items-center
                  gap-2


                  text-sm

                  text-neutral-400
                  "
                >

                  <Calendar size={15}/>


                  {featured.date}


                </span>






                <ArrowUpRight

                  className="
                  text-neutral-400

                  transition

                  group-hover:text-[#C9A646]
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  "

                />



              </div>



            </div>



          </Link>


        )}














        {/* FILTER */}



        <div
          className="
          mb-10

          flex

          flex-col

          gap-5


          md:flex-row

          md:items-center
          md:justify-between
          "
        >





          <div
            className="
            flex

            flex-wrap

            gap-2
            "
          >




            {categories.map(item=>(



              <button


                key={item}


                onClick={()=>setCategory(item)}


                className={`
                rounded-full

                border


                px-5
                py-2.5


                text-sm


                transition


                ${
                  category === item

                  ?

                  "bg-black text-white border-black"

                  :

                  "border-neutral-200 text-neutral-500 hover:text-black"

                }


                `}
              >

                {item}


              </button>



            ))}



          </div>








          {/* SEARCH */}


          <div
            className="
            relative

            w-full

            md:w-72
            "
          >



            <Search

              size={16}

              className="
              absolute

              left-4
              top-3.5

              text-neutral-400
              "

            />




            <input


              value={search}


              onChange={
                e=>setSearch(e.target.value)
              }


              placeholder="Search article..."


              className="
              w-full


              rounded-full


              border
              border-neutral-200


              py-3

              pl-11
              pr-5


              text-sm


              outline-none


              focus:border-black
              "

            />



          </div>




        </div>













        {/* GRID */}



        {displayedArticles.length ? (



          <div
            className="
            grid

            gap-6

            md:grid-cols-2
            lg:grid-cols-3
            "
          >





            {displayedArticles.map(article=>(



              <Link


                key={article.id}


                href={`/article/${article.slug}`}



                className="
                group


                overflow-hidden


                rounded-[28px]


                border
                border-neutral-200



                transition


                hover:-translate-y-1

                hover:shadow-[0_24px_60px_rgba(0,0,0,.06)]
                "
              >





                <div
                  className="
                  relative

                  h-56

                  bg-neutral-100
                  "
                >



                  <Image

                    src={article.image}

                    alt={article.title}


                    fill


                    className="
                    object-cover


                    transition


                    group-hover:scale-105
                    "

                  />



                </div>









                <div
                  className="
                  p-7
                  "
                >





                  <span
                    className="
                    text-xs

                    uppercase

                    tracking-widest

                    text-[#C9A646]
                    "
                  >

                    {article.category}


                  </span>









                  <h3
                    className="
                    mt-5

                    text-xl

                    font-semibold

                    tracking-[-0.03em]

                    line-clamp-2
                    "
                  >

                    {article.title}


                  </h3>







                  <p
                    className="
                    mt-4

                    text-sm

                    leading-7

                    text-neutral-500

                    line-clamp-3
                    "
                  >

                    {article.desc}


                  </p>





                </div>



              </Link>



            ))}




          </div>


        ):(



          <div
            className="
            py-24

            text-center

            text-neutral-400
            "
          >

            No articles found.


          </div>


        )}








        {/* PAGINATION */}


        {totalPages > 1 && (



          <div
            className="
            mt-14

            flex

            justify-center

            gap-2
            "
          >




            {Array.from({length:totalPages}).map((_,i)=>(


              <button


                key={i}


                onClick={()=>setCurrentPage(i+1)}



                className={`
                h-10
                w-10

                rounded-full

                border


                ${
                  currentPage === i+1

                  ?

                  "bg-black text-white"

                  :

                  "border-neutral-200"


                }

                `}
              >

                {i+1}


              </button>



            ))}



          </div>


        )}






      </div>


    </main>

  );


}