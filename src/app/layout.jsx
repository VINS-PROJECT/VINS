import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import Providers from "@/components/ThemeProvider";

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
      <body className="transition-colors duration-500">
        <Providers>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
