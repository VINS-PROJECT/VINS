"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Footer() {


  const socials = [

    {
      icon: "mdi:linkedin",
      url: "https://www.linkedin.com/in/kevinsimorangkir/",
    },


    {
      icon: "mdi:github",
      url: "https://github.com/kevinsimorangkir21/",
    },


    {
      icon: "mdi:instagram",
      url: "https://www.instagram.com/vins.ch/",
    },

  ];






  return (

    <footer
      className="
      mt-16

      border-t
      border-neutral-200

      bg-white
      "
    >


      <div
        className="
        mx-auto

        max-w-7xl

        px-6
        py-14

        lg:px-8
        "
      >






        {/* ================= TOP ================= */}


        <div
          className="
          grid

          gap-12

          sm:grid-cols-2
          lg:grid-cols-4
          "
        >






          {/* BRAND */}


          <div>


            <Link href="/">


              <Image

                src="/Logos/VINS Gold.svg"

                alt="VDE 2K26 Logo"

                width={140}

                height={45}

                className="
                h-9
                w-auto
                "

              />


            </Link>






            <p
              className="
              mt-6

              max-w-sm

              text-sm
              leading-7

              text-neutral-500
              "
            >


              Building meaningful digital experiences through
              design, technology, and creative solutions.


            </p>







            {/* SOCIAL */}


            <div
              className="
              mt-6

              flex

              gap-3
              "
            >


              {socials.map((item)=>(


                <a

                  key={item.url}

                  href={item.url}

                  target="_blank"

                  rel="noopener noreferrer"


                  className="
                  flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-full


                  border
                  border-neutral-200


                  text-neutral-500


                  transition


                  hover:border-black
                  hover:text-black
                  "
                >


                  <Icon

                    icon={item.icon}

                    width="18"

                    height="18"

                  />


                </a>


              ))}



            </div>




          </div>










          {/* NAVIGATION */}


          <FooterColumn

            title="Navigation"

            links={[

              [
                "Home",
                "/",
              ],


              [
                "Projects",
                "/projects",
              ],


              [
                "About",
                "/about",
              ],



              [
                "Articles",
                "/article",
              ],



              [
                "Contact",
                "/contact",
              ],


            ]}


          />












          {/* UPDATE */}



          <FooterColumn


            title="Updates"


            links={[


              [
                "Developer Message",
                "/developer-message",
              ],



              [
                "Changelog",
                "/changelog",
              ],



              [
                "Roadmap",
                "/roadmap",
              ],



              [
                "System Status",
                "/status",
              ],



            ]}


          />












          {/* LEGAL */}


          <FooterColumn


            title="Legal"


            links={[


              [
                "Privacy Policy",
                "/privacy",
              ],



              [
                "Terms of Use",
                "/terms",
              ],



            ]}


          />





        </div>












        {/* ================= BOTTOM ================= */}


        <div
          className="
          mt-14

          flex

          flex-col
          gap-4


          border-t
          border-neutral-200


          pt-6


          text-xs

          text-neutral-400



          md:flex-row
          md:items-center
          md:justify-between
          "
        >



          <span>

            © {new Date().getFullYear()} Kevin Simorangkir.
            All rights reserved.


          </span>







          <span>

            VINS Digital Experience · v5.0.0


          </span>




        </div>






      </div>


    </footer>


  );


}









function FooterColumn({ title, links }) {


  return (


    <div>



      <h4
        className="
        mb-5

        text-sm

        font-semibold

        text-neutral-950
        "
      >

        {title}


      </h4>






      <div
        className="
        flex

        flex-col

        gap-3


        text-sm

        text-neutral-500
        "
      >



        {links.map(([label,href])=>(



          <Link


            key={label}


            href={href}



            className="
            transition


            hover:text-[#C9A646]
            "
          >


            {label}



          </Link>



        ))}



      </div>



    </div>


  );


}