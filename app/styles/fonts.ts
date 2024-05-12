import { Inter, Roboto_Mono, Ubuntu_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "fallback",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "fallback",
});

const sfMono = Ubuntu_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ubuntu-mono",
  display: "fallback",
});

export { inter, robotoMono };
