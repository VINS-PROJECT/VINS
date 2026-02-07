import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import Providers from "@/components/ThemeProvider";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "VINS - #BornToRise",
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
      suppressHydrationWarning
      className={poppins.variable}
    >
      <body
        className="
          font-sans
          transition-colors duration-500
          antialiased
        "
      >
        <Providers>
          <ClientLayoutWrapper>
            {children}
          </ClientLayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
