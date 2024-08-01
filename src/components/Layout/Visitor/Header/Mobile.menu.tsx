import { CONSTANT_COMMON } from '@/constants'
import Link from 'next/link'
import React, { FC } from 'react'
import { XIcon, ChevronDownIcon, ChevronLeftIcon } from "@/components/Icon/svg";
import { useNavbarContext } from '@/context/Navbar/NavbarContext';

const MobileMenu: FC<any> = (props) => {
    const { isOpen, setIsOpen, openSubMenus, handleSubMenuToggle, } = useNavbarContext()

    return (
        <>
            <div
                className={`fixed inset-0 z-10 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-500 ease-in`}
            >
                <div
                    className="absolute inset-0 bg-gray-900 opacity-75"
                    onClick={() => setIsOpen(false)}
                ></div>
                <div className="relative bg-white h-full w-3/4 shadow-lg">
                    <div className="flex justify-between items-center bg-gray-100 p-4">
                        <h2 className="text-xl font-bold text-gray-900">
                            Window Shopping BD
                        </h2>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-900 hover:text-red-600"
                        >
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-4">
                        <Link
                            href="/eid-ul-adha"
                            className="block border-b text-gray-900 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:text-blue-600"
                        >
                            EID-UL-ADHA’24
                        </Link>
                        <div className="border-b">
                            <div
                                onClick={() => handleSubMenuToggle(CONSTANT_COMMON.SUB_MENU_ITEM.SHIRT)}
                                className="flex justify-between items-center cursor-pointer text-gray-900 px-3 rounded-md text-base font-medium transition-colors duration-200 hover:text-blue-600"
                            >
                                <span
                                    className={`flex-grow py-2 ${openSubMenus.includes(CONSTANT_COMMON.SUB_MENU_ITEM.SHIRT) ? "" : "border-r-2"
                                        }`}
                                >
                                    Shirt
                                </span>
                                <span className="pl-3 py-2">
                                    {openSubMenus.includes(CONSTANT_COMMON.SUB_MENU_ITEM.SHIRT) ? <ChevronDownIcon /> : <ChevronLeftIcon />}
                                </span>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openSubMenus.includes(CONSTANT_COMMON.SUB_MENU_ITEM.SHIRT) ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <Link
                                    href="/shirt/formal"
                                    className="block border-t border-b text-gray-700 px-8 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:text-blue-600"
                                >
                                    Formal Shirt
                                </Link>
                                <Link
                                    href="/shirt/casual"
                                    className="block border-b text-gray-700 px-8 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:text-blue-600"
                                >
                                    Casual Shirt
                                </Link>
                            </div>
                        </div>
                        <Link
                            href="/t-shirt"
                            className="block border-b text-gray-900 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:text-blue-600"
                        >
                            T-shirt
                        </Link>
                        <Link
                            href="/polo"
                            className="block border-b text-gray-900 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:text-blue-600"
                        >
                            Polo
                        </Link>
                        <div className="border-b">
                            <div
                                onClick={() => handleSubMenuToggle(CONSTANT_COMMON.SUB_MENU_ITEM.PANT)}
                                className="flex justify-between items-center cursor-pointer text-gray-900 px-3 rounded-md text-base font-medium transition-colors duration-200 hover:text-blue-600"
                            >
                                <span
                                    className={`flex-grow py-2 ${openSubMenus.includes(CONSTANT_COMMON.SUB_MENU_ITEM.PANT) ? "" : "border-r-2"
                                        }`}
                                >
                                    Pant
                                </span>
                                <span className="pl-3 py-2">
                                    {openSubMenus.includes(CONSTANT_COMMON.SUB_MENU_ITEM.PANT) ? <ChevronDownIcon /> : <ChevronLeftIcon />}
                                </span>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openSubMenus.includes(CONSTANT_COMMON.SUB_MENU_ITEM.PANT) ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <Link
                                    href="/pant/denim"
                                    className="block border-t border-b text-gray-700 px-8 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:text-blue-600"
                                >
                                    Denim
                                </Link>
                                <Link
                                    href="/pant/formal"
                                    className="block border-b text-gray-700 px-8 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:text-blue-600"
                                >
                                    Formal Pant
                                </Link>
                                <Link
                                    href="/pant/chinos"
                                    className="block border-b text-gray-700 px-8 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:text-blue-600"
                                >
                                    Chinos
                                </Link>
                                <Link
                                    href="/pant/joggers"
                                    className="block border-b text-gray-700 px-8 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:text-blue-600"
                                >
                                    Joggers
                                </Link>
                                <Link
                                    href="/pant/relaxed"
                                    className="block text-gray-700 px-8 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:text-blue-600"
                                >
                                    Relaxed Trouser
                                </Link>
                            </div>
                        </div>
                        <Link
                            href="/blazer"
                            className="block border-b text-gray-900 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:text-blue-600"
                        >
                            Blazer
                        </Link>
                        <div className="border-b">
                            <div
                                onClick={() => handleSubMenuToggle(CONSTANT_COMMON.SUB_MENU_ITEM.ACCESSORIES)}
                                className="flex justify-between items-center cursor-pointer text-gray-900 px-3 rounded-md text-base font-medium transition-colors duration-200 hover:text-blue-600"
                            >
                                <span
                                    className={`flex-grow py-2 ${openSubMenus.includes(CONSTANT_COMMON.SUB_MENU_ITEM.ACCESSORIES) ? "" : "border-r-2"
                                        }`}
                                >
                                    Accessories
                                </span>
                                <span className="pl-3 py-2">
                                    {openSubMenus.includes(CONSTANT_COMMON.SUB_MENU_ITEM.ACCESSORIES) ? <ChevronDownIcon /> : <ChevronLeftIcon />}
                                </span>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openSubMenus.includes(CONSTANT_COMMON.SUB_MENU_ITEM.ACCESSORIES)
                                    ? "max-h-40 opacity-100"
                                    : "max-h-0 opacity-0"
                                    }`}
                            >
                                <Link
                                    href="/accessories/belt"
                                    className="block border-t border-b text-gray-700 px-8 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:text-blue-600"
                                >
                                    Belt
                                </Link>
                                <Link
                                    href="/accessories/inner-wear"
                                    className="block border-b text-gray-700 px-8 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:text-blue-600"
                                >
                                    Inner Wear
                                </Link>
                                <Link
                                    href="/accessories/perfume"
                                    className="block text-gray-700 px-8 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:text-blue-600"
                                >
                                    Perfume
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileMenu