import * as React from "react"
import type {Metadata} from "next";
import "./globals.css";
import {Header} from "@/components/header/Header";
import {Footer} from "@/components/footer/Footer";
import dynamic from 'next/dynamic';

const DynamicToaster = dynamic(() => import("../components/ui/toaster"), {
    ssr : false
})

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Krist online shop | Buy whatever you need",
  description: "The last shop you`ll ever visit!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        // className={`${geistSans.variable}`}
    >
    <Header/>
    {children}
    <DynamicToaster/>
    <Footer/>
    </body>
    </html>
  );
}
