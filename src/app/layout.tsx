import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Layout/Visitor/Footer/Footer";
import Header from "@/components/Layout/Visitor/Header/Header";
import TopNavbar from "@/components/Layout/Visitor/TopNavbar/TopNavbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Window Shopping",
  description: "Your Desired Online Shopping Place",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <TopNavbar />
        <Header />
        <div className="flex flex-1 overflow-hidden">
          {/* <Sidebar /> */}
          <main className="flex-1 relative overflow-y-auto focus:outline-none bg-white">
            {/* Main content */}
            <div className="conainer mx-auto p-4">{children}</div>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
