import Link from 'next/link'
import React, { FC } from 'react'
import { MenuIcon, SingleUserCircle, ShoppingCart, ArrowRightEndtIcon } from "@/components/Icon/svg";
import { useNavbarContext } from '@/context/Navbar/NavbarContext';
import { useLang } from '@/hooks/useLang';

const DesktopMenu: FC<any> = (props) => {
    const { t } = useLang();
    const { isOpen, setIsOpen } = useNavbarContext()

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
                        <div><ShoppingCart /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DesktopMenu