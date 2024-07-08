"use client"
import { useLang } from '@/hooks/useLang'
import React from 'react'
import "./TopNavbar.style.css"
import Link from 'next/link'

const TopNavbar = () => {
   const { t } = useLang()
   return (
      <div className="h-auto sm:h-10 bg-[#222] ">
         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center h-full">
            <div className="left-top-bar">
               {t("Free shipping for standard order over $100")}
            </div>

            <div className="right-top-bar">
               <Link href="#" className="px-3 hover:text-[#6c7ae0] hover:transition">
                  Help & FAQs
               </Link>

               <Link href="#" className="px-3 hover:text-[#6c7ae0] hover:transition">
                  My Account
               </Link>

               <Link href="#" className="px-3 hover:text-[#6c7ae0] hover:transition">
                  EN
               </Link>

               <Link href="#" className="px-3 hover:text-[#6c7ae0] hover:transition">
                  USD
               </Link>
            </div>
         </div>
      </div>
   )
}

export default TopNavbar