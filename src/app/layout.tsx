import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Layout/Visitor/Footer/Footer";
import Header from "@/components/Layout/Visitor/Header/Header";
import TopNavbar from "@/components/Layout/Visitor/TopNavbar/TopNavbar";
import ContextProvider from "@/context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Window Shopping",
  description: "Your Desired Online Shopping Place",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className={`min-h-screen ${inter.className}`}>
        <ContextProvider>
          <TopNavbar />
          <Header />
          <main className="">
            {children}
          </main>
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
