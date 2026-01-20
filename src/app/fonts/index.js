import localFont from "next/font/local";

export const elektrakution = localFont({
  src: [
    {
      path: "./CCElektrakution-W03-Rough.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-elektrakution",
  display: "swap",
});
