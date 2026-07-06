"use client";

import Link from "next/link";

import {
  ArrowLeft,
  Home,
  AlertCircle,
} from "lucide-react";

import { motion } from "framer-motion";







export default function NotFound(){



  return (

    <main
      className="
      relative

      flex

      min-h-screen


      items-center
      justify-center


      overflow-hidden


      bg-white


      px-6
      "
    >







      {/* BACKGROUND */}


      <div
        className="
        absolute

        -top-40
        -right-40


        h-[420px]
        w-[420px]


        rounded-full


        bg-[#C9A646]/10


        blur-[100px]
        "
      />










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
        relative

        z-10


        max-w-xl


        text-center
        "
      >








        {/* BADGE */}


        <div
          className="
          mx-auto
          mb-8


          flex


          h-14
          w-14


          items-center
          justify-center


          rounded-full


          bg-[#C9A646]/10


          text-[#C9A646]
          "
        >


          <AlertCircle size={26}/>


        </div>










        {/* CODE */}



        <h1
          className="
          text-[120px]
          md:text-[160px]


          leading-none


          font-semibold


          tracking-[-0.1em]


          text-neutral-950
          "
        >


          404


        </h1>










        {/* TITLE */}


        <h2
          className="
          mt-6


          text-3xl
          md:text-4xl


          font-semibold


          tracking-[-0.05em]
          "
        >

          Page Not Found


        </h2>









        {/* DESC */}


        <p
          className="
          mx-auto

          mt-5


          max-w-md


          leading-7


          text-neutral-500
          "
        >


          The page you are looking for doesn't exist,
          has been moved, or is currently unavailable
          in VINS Digital Experience.


        </p>










        {/* ACTION */}



        <div
          className="
          mt-10


          flex

          flex-col
          justify-center

          gap-3


          sm:flex-row
          "
        >







          <button

            onClick={()=>window.history.back()}


            className="
            inline-flex


            items-center
            justify-center
            gap-2


            rounded-full


            border
            border-neutral-200


            px-6
            py-3


            text-sm

            font-medium


            transition


            hover:border-black
            "
          >



            <ArrowLeft size={15}/>


            Go Back



          </button>









          <Link

            href="/"


            className="
            inline-flex


            items-center
            justify-center
            gap-2



            rounded-full


            bg-black



            px-6
            py-3



            text-sm

            font-medium



            text-white



            transition



            hover:bg-[#C9A646]
            "
          >



            <Home size={15}/>


            Back Home



          </Link>






        </div>











        {/* SYSTEM */}



        <div
          className="
          mt-14


          inline-flex


          rounded-full


          border
          border-neutral-200


          px-5
          py-2



          text-xs


          text-neutral-400
          "
        >

          VINS System Message • Error 404


        </div>







      </motion.div>





    </main>

  );


}