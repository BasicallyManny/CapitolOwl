import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

//layout component imports
import Navbar from "./homeComponents/navbar";
import Footer from "./homeComponents/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CapitolOwl",
  description: 
  "A comprehensive financial analysis and investment education platform designed to help new investors grow their confidence through interactive data visualization and community-driven learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased content min-h-screen flex flex-col`}
      >
        <Navbar />
        {/* Main content expands to push footer down */}
        <main className="flex justify-center items-center grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
