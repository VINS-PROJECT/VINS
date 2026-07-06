"use client";

import { use, useState } from "react";

import { notFound } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowLeft,
  ArrowUpRight,
  X,
  FileText,
} from "lucide-react";


import { projectsData } from "@/data/projects";





export default function ProjectDetail({ params }) {


  // NEXT 16 FIX
  const { slug } = use(params);



  const project = projectsData.find(
    (item) => item.slug === slug
  );



  const [selectedImage,setSelectedImage] =
    useState(null);




  if(!project) return notFound();





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
        max-w-5xl
        "
      >





        {/* BACK */}


        <Link

          href="/projects"

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


          Back to Projects


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

            {project.category}


          </span>






          <h1
            className="
            mt-6

            text-5xl
            md:text-7xl

            font-semibold

            tracking-[-0.06em]

            text-neutral-950
            "
          >

            {project.title}


          </h1>







          <p
            className="
            mt-8

            max-w-2xl

            text-lg
            leading-8

            text-neutral-500
            "
          >

            {project.desc}


          </p>




        </motion.div>












        {/* HERO IMAGE */}


        <div
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

            src={project.image}

            alt={project.title}

            width={1600}

            height={900}

            priority

            className="
            w-full

            object-cover

            transition
            duration-700

            hover:scale-105
            "

          />


        </div>











        {/* INFO */}


        <div
          className="
          mt-10

          grid

          gap-4

          md:grid-cols-3
          "
        >



          {[

            {
              label:"Year",
              value:project.year,
            },


            {
              label:"Role",
              value:project.role,
            },


            {
              label:"Team",
              value:project.team,
            },


          ].map((item)=>(



            <div

              key={item.label}

              className="
              rounded-[24px]

              border
              border-neutral-200

              p-6
              "
            >



              <p
                className="
                text-sm

                text-neutral-400
                "
              >

                {item.label}


              </p>




              <p
                className="
                mt-2

                font-semibold
                "
              >

                {item.value}


              </p>




            </div>



          ))}




        </div>











        {/* TECH */}


        <SectionTitle title="Tech Stack"/>


        <div
          className="
          flex
          flex-wrap
          gap-2
          "
        >



          {project.tech.map((item)=>(



            <span

              key={item}

              className="
              rounded-full

              bg-neutral-100

              px-5
              py-2

              text-sm

              text-neutral-600
              "
            >


              {item}



            </span>



          ))}



        </div>









        {/* FEATURES */}


        {project.features?.length > 0 && (

          <>


            <SectionTitle title="Key Features"/>



            <div
              className="
              grid
              gap-3
              "
            >



              {project.features.map((item,index)=>(


                <div

                  key={index}

                  className="
                  rounded-2xl

                  border
                  border-neutral-200

                  px-6
                  py-4

                  text-neutral-600
                  "
                >


                  {item}


                </div>



              ))}



            </div>


          </>

        )}












        {/* GALLERY */}


        {project.gallery?.length > 0 && (

          <>


            <SectionTitle title="Gallery"/>



            <div
              className="
              grid

              gap-5

              md:grid-cols-2
              "
            >



              {project.gallery.map((img,index)=>(



                <button

                  key={index}

                  onClick={()=>setSelectedImage(img)}

                  className="
                  relative

                  h-72

                  overflow-hidden

                  rounded-[28px]

                  bg-neutral-100
                  "
                >



                  <Image

                    src={img}

                    alt="Gallery"

                    fill

                    className="
                    object-cover

                    transition

                    hover:scale-105
                    "

                  />



                </button>




              ))}



            </div>


          </>


        )}












        {/* LINKS */}


        <div
          className="
          mt-14

          flex
          flex-wrap

          gap-3
          "
        >




          {project.links?.live && (

            <ExternalButton

              href={project.links.live}

              label="Live Demo"

            />

          )}







          {project.links?.github && (

            <ExternalButton

              href={project.links.github}

              label="Github"

            />

          )}







          {project.links?.figma && (

            <ExternalButton

              href={project.links.figma}

              label="Figma"

            />

          )}








          {project.links?.pdf && (

            <PDFButton

              href={project.links.pdf}

              label="Case Study PDF"

            />

          )}




        </div>











        {/* LIGHTBOX */}


        {selectedImage && (



          <div

            onClick={()=>setSelectedImage(null)}

            className="
            fixed

            inset-0

            z-50

            flex
            items-center
            justify-center

            bg-black/80

            p-6
            "
          >





            <button

              onClick={()=>setSelectedImage(null)}

              className="
              absolute

              right-8
              top-8

              text-white
              "
            >


              <X/>


            </button>







            <Image

              src={selectedImage}

              alt="preview"

              width={1400}

              height={900}

              className="
              max-h-[85vh]

              w-auto

              rounded-3xl

              object-contain
              "

            />




          </div>



        )}






      </div>



    </section>


  );


}












function SectionTitle({title}){


  return (

    <h2
      className="
      mt-14
      mb-5

      text-2xl

      font-semibold

      tracking-[-0.04em]
      "
    >

      {title}


    </h2>

  );


}









function ExternalButton({
  href,
  label,
}){


  return (

    <a

      href={href}

      target="_blank"

      rel="noopener noreferrer"

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

      transition

      hover:bg-[#C9A646]
      "
    >


      {label}


      <ArrowUpRight size={15}/>


    </a>

  );


}










function PDFButton({
  href,
  label,
}){


  return (

    <a

      href={href}

      target="_blank"

      rel="noopener noreferrer"

      className="
      inline-flex

      items-center
      gap-2


      rounded-full


      border
      border-neutral-200


      bg-white


      px-6
      py-3


      text-sm

      font-medium


      text-neutral-700


      transition


      hover:border-[#C9A646]
      hover:text-[#C9A646]
      "
    >


      <FileText size={15}/>


      {label}


    </a>


  );


}