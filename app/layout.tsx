import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { PT_Serif } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900", "1000"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Matsu-theme for shadcn/ui",
  description: "A theme for shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${ptSerif.variable} ${geistMono.variable} antialiased relative`}
      >
        <div className="texture"></div>
        {children}
      </body>
    </html>
  );
}
