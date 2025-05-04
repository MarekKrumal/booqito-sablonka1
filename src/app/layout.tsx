import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Escape Games Olomouc",
  description:
    "Nejlepší úniková hra v Olomouci - zažijte nezapomenutelné dobrodružství",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="cs">
      <head />
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <footer className="bg-black text-gray-400 text-center py-8 font-body">
          <p>© Escape Games Olomouc 2025</p>
        </footer>
      </body>
    </html>
  );
}
