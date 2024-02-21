"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { useEffect } from "react";
import Aos from "aos";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/img/brain-circuit.svg" />
      </head>
      <body className={inter.className + " bg-slate-800"}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
