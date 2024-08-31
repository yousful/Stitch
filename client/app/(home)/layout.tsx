import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Inter as FontSans } from "next/font/google";
import { Playfair_Display, Barlow } from "next/font/google";
import { cn } from "@/lib/utils";
import "../globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// const barlow = Barlow({
//   subsets: ["latin"],
//   variable: "--font-barlow",
// });

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
	title: "Stitch App",
	description: "Stitch App is an online market place for fashion designers, to list their products and get hired",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          playfair.variable
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
