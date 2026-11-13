
import "./globals.css";

import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import PageTransition from "@/components/PageTransition";

import { Inter, Manrope } from "next/font/google";

/* ===========================================================
   FONTS
   VDE 2K27 — Blue Indigo Identity
   =========================================================== */

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  preload: true,
});

/* ===========================================================
   SITE CONFIGURATION
   =========================================================== */

const SITE_URL = "https://kvn-code.asia";

const SITE_NAME = "VDE 2K27";

const SITE_DESCRIPTION =
  "VDE 2K27 — Personal portfolio showcasing projects, experience, design, development, articles, and creative work.";

/* ===========================================================
   METADATA
   =========================================================== */

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_NAME,
    template: `${SITE_NAME} | %s`,
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "Kevin",
    "VINS",
    "VDE 2K27",
    "Personal Portfolio",
    "UI/UX Design",
    "Web Development",
    "Frontend Development",
    "Creative Technology",
    "Software Engineering",
    "Digital Experience",
  ],

  authors: [
    {
      name: "Kevin",
      url: SITE_URL,
    },
  ],

  creator: "Kevin",
  publisher: "Kevin",

  applicationName: SITE_NAME,
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
    icon: [
      {
        url: "/icon/favicon.ico",
        type: "image/x-icon",
      },
    ],

    shortcut: "/icon/TPN.ico",
    apple: "/icon/TPN.ico",
  },

  /* =========================================================
     OPEN GRAPH
     ========================================================= */

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: SITE_NAME,

    title: SITE_NAME,
    description: SITE_DESCRIPTION,

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
     TWITTER / X
     ========================================================= */

  twitter: {
    card: "summary_large_image",

    title: SITE_NAME,
    description: SITE_DESCRIPTION,

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

  /* =========================================================
     CATEGORY
     ========================================================= */

  category: "technology",
};

/* ===========================================================
   VIEWPORT
   Blue Indigo Brand Identity
   =========================================================== */

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",

  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#FFFFFF",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#111827",
    },
  ],

  colorScheme: "light dark",
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
