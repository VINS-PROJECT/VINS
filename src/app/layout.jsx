import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import Providers from "@/components/ThemeProvider";
import { elektrakution } from "@/app/fonts";

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
    <html lang="id" suppressHydrationWarning>
      <body
        className={`
          ${elektrakution.variable}
          transition-colors duration-500
        `}
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
