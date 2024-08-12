"use client"
import Link from 'next/link'
import React, { FC, useState } from 'react'
import { MenuIcon, SingleUserCircle, ShoppingCart, ArrowRightEndtIcon } from "@/components/Icon/svg";
import { useNavbarContext } from '@/context/Navbar/NavbarContext';
import { useLang } from '@/hooks/useLang';
import DrawerCart from '@/components/Cart/DrawerCart';

const initialState = {
    isOpenDrawer: false
}

const DesktopMenu: FC<any> = (props) => {
    const { t } = useLang();
    const { isOpen, setIsOpen } = useNavbarContext()

    const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(initialState.isOpenDrawer)

    const handleActions = (action: string, recordId?: any) => {
        if (action === 'show_cart') {
            setIsOpenDrawer(true);
        }
    };

    const handleHideCartDrawer = () => {
        setIsOpenDrawer(false);
    };

    const handleCallbackFunc = (event: any, action: string, recordId?: any, data?: any) => {
        if (event === null || event === undefined || event === '') {
            event = event ? event : 'singleAction';
        }
        if (event == 'singleAction' && action == 'show_cart') {
            handleActions("show_cart")
        }
        else if (event == 'singleAction' && action == 'hide_drawer') {
            handleHideCartDrawer()
        }
    }

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 text-gray-900 hover:text-emerald-600 focus:outline-none focus:text-gray-900"
                        >
                            <MenuIcon aria-hidden="true" />
                        </button>
                    </div>
                    <div className="flex-shrink-0 flex items-center">
                        <Link
                            href="/"
                            className="text-xl font-bold text-gray-900 cursor-pointer"
                        >
                            {t("Window Shopping BD")}
                        </Link>
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        <Link
                            href="/men"
                            className="text-gray-900 hover:text-blue-600 cursor-pointer"
                        >
                            Men
                        </Link>
                        <Link
                            href="/women"
                            className="text-gray-900 hover:text-blue-600 cursor-pointer"
                        >
                            Women
                        </Link>
                        <Link
                            href="/kids"
                            className="text-gray-900 hover:text-blue-600 cursor-pointer"
                        >
                            Kids
                        </Link>
                        <Link
                            href="/sale"
                            className="text-gray-900 hover:text-blue-600 cursor-pointer"
                        >
                            Sale
                        </Link>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>
                            <Link href="/auth/login" className='flex items-center hover:text-blue-600'>
                                <ArrowRightEndtIcon />
                                {t("Login")}
                            </Link>
                        </div>
                        <div>
                            <Link href="/auth/register" className='flex items-center hover:text-blue-600'>
                                <SingleUserCircle />
                                {t("Sign up")}
                            </Link>
                        </div>
                        <div className='cursor-pointer hover:text-red-600' >
                            <div onClick={() => handleCallbackFunc(null, 'show_cart')}>
                                <ShoppingCart />
                            </div>
                        </div>
                        <DrawerCart
                            isOpenDrawer={isOpenDrawer}
                            handleCallbackFunc={handleCallbackFunc}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DesktopMenu