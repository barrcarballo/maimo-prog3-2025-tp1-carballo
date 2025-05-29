import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar"; // todos los componentes deben tener mayus
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
})

export const metadata = {
  title: "foodiegoodie",
  description: "Recipes cool 4 everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable}${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Navbar/> 
        {children}
        <Footer/>
      </body>
    </html>
  );
}
