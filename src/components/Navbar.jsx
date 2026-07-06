"use client";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

import {
  useState,
  useEffect,
} from "react";


import {
  Menu,
  X,
} from "lucide-react";









export default function Navbar(){



  const pathname = usePathname();



  const [open,setOpen] =
    useState(false);



  const [scrolled,setScrolled] =
    useState(false);










  const navLinks = [

    {
      href:"/",
      label:"Home",
    },


    {
      href:"/projects",
      label:"Projects",
    },


    {
      href:"/about",
      label:"About",
    },


    {
      href:"/article",
      label:"Articles",
    },


    {
      href:"/social-track",
      label:"Social Track",
      soon:true,
    },

  ];










  useEffect(()=>{


    const onScroll = ()=>
      setScrolled(
        window.scrollY > 30
      );



    onScroll();



    window.addEventListener(
      "scroll",
      onScroll
    );



    return ()=>
      window.removeEventListener(
        "scroll",
        onScroll
      );


  },[]);










  useEffect(()=>{

    setOpen(false);

  },[pathname]);










  useEffect(()=>{


    document.body.style.overflow =
      open ? "hidden" : "";


    return ()=>{

      document.body.style.overflow="";

    };


  },[open]);










  const active = (href)=>

    href === "/"

      ?

      pathname === "/"

      :

      pathname.startsWith(href);












  return (

    <>










      {/* NAVBAR */}



      <header
        className="
        fixed

        top-0
        inset-x-0

        z-50

        px-5
        pt-5
        "
      >




        <div
          className={`
          mx-auto

          flex

          h-[72px]


          max-w-7xl


          items-center
          justify-between


          rounded-full


          px-7


          transition-all
          duration-500


          ${
            scrolled

            ?

            `
            bg-white/85

            backdrop-blur-xl


            border
            border-neutral-200


            shadow-[0_20px_80px_rgba(0,0,0,.08)]
            `


            :

            `
            bg-white/60

            backdrop-blur-md
            `
          }

          `}
        >









          {/* LOGO */}



          <Link href="/">


            <Image

              src="/Logos/VINS Black.svg"

              alt="VINS Logo"

              width={140}

              height={35}

              priority

              className="
              h-9
              w-auto
              "

            />


          </Link>














          {/* DESKTOP MENU */}


          <nav
            className="
            hidden

            lg:flex

            items-center

            gap-1
            "
          >





            {navLinks.map((item)=>{





              if(item.soon){


                return (

                  <div

                    key={item.href}


                    className="
                    flex

                    cursor-not-allowed


                    items-center
                    gap-2


                    rounded-full


                    px-5
                    py-2.5


                    text-sm
                    font-medium


                    text-neutral-400
                    "
                  >


                    {item.label}




                    <span
                      className="
                      rounded-full


                      bg-[#C9A646]/10


                      px-2
                      py-0.5


                      text-[10px]


                      font-semibold


                      text-[#C9A646]
                      "
                    >

                      Soon


                    </span>



                  </div>


                );


              }









              return (


                <Link


                  key={item.href}

                  href={item.href}


                  className={`
                  relative


                  rounded-full


                  px-5
                  py-2.5


                  text-sm
                  font-medium


                  transition


                  ${
                    active(item.href)

                    ?

                    "text-black"

                    :

                    "text-neutral-500 hover:text-black"
                  }

                  `}
                >


                  {item.label}




                  {active(item.href) && (

                    <span
                      className="
                      absolute


                      left-1/2
                      -bottom-1


                      h-1
                      w-1


                      -translate-x-1/2


                      rounded-full


                      bg-[#C9A646]
                      "
                    />

                  )}



                </Link>



              );


            })}




          </nav>












          {/* CTA */}



          <Link

            href="/contact"


            className="
            hidden

            lg:flex


            rounded-full


            bg-neutral-950


            px-6
            py-3


            text-sm
            font-medium


            text-white


            transition


            hover:bg-[#C9A646]
            "
          >


            Contact Me


          </Link>













          {/* MOBILE BUTTON */}



          <button

            onClick={()=>setOpen(true)}

            className="
            lg:hidden

            text-black
            "
          >


            <Menu size={28}/>


          </button>






        </div>


      </header>















      {/* OVERLAY */}



      {open && (

        <div

          onClick={()=>setOpen(false)}


          className="
          fixed

          inset-0

          z-40


          bg-black/30

          backdrop-blur-sm


          lg:hidden
          "

        />


      )}














      {/* MOBILE DRAWER */}



      <aside

        className={`
        fixed

        top-0
        right-0


        z-50


        h-screen


        w-[85%]
        max-w-sm


        bg-white


        transition-transform
        duration-500


        lg:hidden


        ${
          open

          ?

          "translate-x-0"

          :

          "translate-x-full"
        }

        `}
      >







        <div
          className="
          flex

          items-center
          justify-between


          border-b
          border-neutral-200


          p-6
          "
        >



          <Image

            src="/Logos/VINS Black.svg"

            alt="Logo"

            width={130}

            height={40}

          />




          <button

            onClick={()=>setOpen(false)}


            className="
            rounded-full

            p-2

            hover:bg-neutral-100
            "
          >


            <X/>


          </button>



        </div>









        <div
          className="
          space-y-2

          p-6
          "
        >







          {navLinks.map((item)=>{



            if(item.soon){



              return (

                <div

                  key={item.href}


                  className="
                  flex

                  cursor-not-allowed


                  items-center
                  justify-between


                  rounded-2xl


                  px-5
                  py-4


                  font-medium


                  text-neutral-400
                  "
                >



                  {item.label}




                  <span
                    className="
                    rounded-full


                    bg-[#C9A646]/10


                    px-2
                    py-1


                    text-[10px]


                    text-[#C9A646]
                    "
                  >

                    Soon


                  </span>



                </div>


              );


            }









            return (


              <Link

                key={item.href}

                href={item.href}


                className={`
                flex


                rounded-2xl


                px-5
                py-4


                font-medium


                ${
                  active(item.href)

                  ?

                  "bg-black text-white"

                  :

                  "text-neutral-600 hover:bg-neutral-100"

                }

                `}
              >


                {item.label}


              </Link>


            );


          })}












          <Link

            href="/contact"

            className="
            mt-8


            flex

            justify-center


            rounded-full


            bg-[#C9A646]


            py-4


            font-semibold


            text-white
            "
          >


            Contact Me


          </Link>










          <p
            className="
            pt-12


            text-sm


            text-neutral-400
            "
          >

            © 2026 Kevin Simorangkir


          </p>






        </div>



      </aside>






    </>

  );


}