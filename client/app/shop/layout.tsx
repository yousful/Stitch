
import { Inter } from "next/font/google";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";



const inter = Inter({ subsets: ["latin"] });

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});


function getMetaData (){

}


export default function ShopLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			
				
				{children}
				
			
		</>
	);
}

