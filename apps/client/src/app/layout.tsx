import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserratSans = Montserrat({
  variable: "--font-montserrat-sans-serif",
  subsets: ["latin"],
});

const merriweatherSans = Merriweather({
  variable: "--font-merriweather-sans",
  weight: "400",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A Fonix App",
  description: "Created with excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserratSans.variable} ${merriweatherSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
