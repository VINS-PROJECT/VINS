import "./globals.css";

import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import PageTransition from "@/components/PageTransition";

import { Plus_Jakarta_Sans } from "next/font/google";


const jakarta = Plus_Jakarta_Sans({

  subsets: ["latin"],

  weight: [
    "400",
    "500",
    "600",
    "700",
    "800"
  ],

  variable: "--font-jakarta",

  display: "swap",

});


export const metadata = {

  title: {

    default: "VDE 2K26",

    template: "VDE 2K26 | %s",

  },


  icons: {

    icon: "/icon/favicon.ico",

    shortcut: "/icon/TPN.ico",

    apple: "/icon/TPN.ico",

  },

};




export default function RootLayout({ children }) {


  return (

    <html
      lang="id"
      className={jakarta.variable}
      suppressHydrationWarning
    >


      <body
        className="
        antialiased
        bg-[var(--color-background)]
        text-[var(--color-foreground)]
        overflow-x-hidden
        "
      >


        <ClientLayoutWrapper>


          <main
            className="
            relative
            flex
            flex-col
            min-h-screen
            "
          >


            <PageTransition>

              {children}

            </PageTransition>



          </main>



        </ClientLayoutWrapper>



      </body>


    </html>

  );

}
