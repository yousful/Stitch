
import type { Metadata } from "next";

import { Barlow as FontSans } from "next/font/google";
import { Playfair_Display, Barlow } from "next/font/google";
import { cn } from "@/lib/utils";
import "../globals.css";
import DashboardSidebar from "@/components/layouts/DashboardSidebar";
import DashboardHeader from '@/components/layouts/DashboardHeader';
import { DashboardProvider } from '@/components/DashboardContext';



const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: [ "400", "500", "600", "700", "800"],
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
          // "min-h-screen bg-background font-sans antialiased",
          barlow.className,
          playfair.className
        )}
      >
         <DashboardProvider>
        <div className='flex gap-x-10'>
          <DashboardSidebar />
          <div className="flex flex-col flex-grow">
            <DashboardHeader/>
            <main className={cn(barlow.className, "flex-grow")}>
              {children}
            </main>
          </div>
        </div>
        </DashboardProvider>
      </body>
    </html>
  );
}


