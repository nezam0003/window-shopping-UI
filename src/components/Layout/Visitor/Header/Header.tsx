"use client";
import { useEffect } from "react";
import { useNavbarContext } from "@/context/Navbar/NavbarContext";
import useResponsiveMediaQuery from "@/hooks/useResponsiveMediaQuery";
import MobileMenu from "./Mobile.menu";
import DesktopMenu from "./Desktop.menu";

const Navbar = () => {
   const { isOpen, setIsOpen } = useNavbarContext()
   const { isMedium } = useResponsiveMediaQuery()

   useEffect(() => {
      if (isMedium && isOpen) {
         setIsOpen(false);
      }
   }, [isMedium, isOpen, setIsOpen]);

   return (
      <nav className="bg-white shadow-lg">
         <DesktopMenu />
         <MobileMenu />
      </nav>
   );
};

export default Navbar;
