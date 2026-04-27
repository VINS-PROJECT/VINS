import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import PageTransition from "@/components/PageTransition";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: {
    default: "VINS 2026 | UI/UX Designer & Frontend Developer",
    template: "VINS 2026 | %s",
  },
  icons: {
    icon: "/TPN.ico",
    shortcut: "/TPN.ico",
    apple: "/TPN.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={poppins.variable}
      suppressHydrationWarning
    >
      <body
        className="
        font-sans antialiased
        bg-[var(--background)]
        text-[var(--foreground)]
        overflow-x-hidden
      "
      >
        <SmoothScrollProvider>

          <ClientLayoutWrapper>

            <main
              className="
              relative
              flex
              flex-col
              min-h-screen
            "
            >

              {/* PAGE TRANSITION */}
              <PageTransition>
                {children}
              </PageTransition>

            </main>

          </ClientLayoutWrapper>

        </SmoothScrollProvider>
      </body>
    </html>
  );
}