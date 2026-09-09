import "./globals.css";

import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import PageTransition from "@/components/PageTransition";

import { Inter, Manrope } from "next/font/google";


/* ===========================================================
   FONTS
   VDE 2K27
   =========================================================== */

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});


/* ===========================================================
   METADATA
   =========================================================== */

export const metadata = {
  metadataBase: new URL("https://kvn-code.asia"),

  title: {
    default: "VDE 2K27",
    template: "VDE 2K27 | %s",
  },

  description:
    "VDE 2K27 — Personal portfolio showcasing projects, experience, design, development, articles, and creative work.",

  keywords: [
    "Kevin",
    "VINS",
    "VDE 2K27",
    "Portfolio",
    "UI/UX Design",
    "Web Development",
    "Frontend Development",
    "Creative Technology",
  ],

  authors: [
    {
      name: "Kevin",
    },
  ],

  creator: "Kevin",

  applicationName: "VDE 2K27",

  generator: "Next.js",

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },


  /* =========================================================
     ICONS
     ========================================================= */

  icons: {
    icon: "/icon/favicon.ico",
    shortcut: "/icon/TPN.ico",
    apple: "/icon/TPN.ico",
  },


  /* =========================================================
     OPEN GRAPH
     ========================================================= */

  openGraph: {
    type: "website",

    locale: "id_ID",

    url: "https://kvn-code.asia",

    siteName: "VDE 2K27",

    title: "VDE 2K27",

    description:
      "Personal portfolio showcasing projects, experience, design, development, articles, and creative work.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VDE 2K27 — Personal Portfolio",
      },
    ],
  },


  /* =========================================================
     TWITTER
     ========================================================= */

  twitter: {
    card: "summary_large_image",

    title: "VDE 2K27",

    description:
      "Personal portfolio showcasing projects, experience, design, development, articles, and creative work.",

    images: ["/og-image.png"],
  },


  /* =========================================================
     ROBOTS
     ========================================================= */

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


/* ===========================================================
   VIEWPORT
   =========================================================== */

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};


/* ===========================================================
   ROOT LAYOUT
   =========================================================== */

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${manrope.variable}`}
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
              min-h-screen
              flex-col
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