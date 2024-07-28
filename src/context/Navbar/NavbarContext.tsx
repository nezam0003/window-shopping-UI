"use client"
import React, { createContext, useState, useContext } from 'react'

const initialState = {
    isOpen: false,
    openSubMenus: []
}

export const NavbarContext = createContext<any>(initialState)

const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(initialState.isOpen);
    const [openSubMenus, setOpenSubMenus] = useState<string[]>(initialState.openSubMenus);

    const handleSubMenuToggle = (menu: string) => {
        setOpenSubMenus((prevOpenSubMenus) =>
            prevOpenSubMenus.includes(menu)
                ? prevOpenSubMenus.filter((subMenu) => subMenu !== menu)
                : [...prevOpenSubMenus, menu]
        );
    };

    const contextValue = { isOpen, openSubMenus, setIsOpen, setOpenSubMenus, handleSubMenuToggle }

    return (
        <NavbarContext.Provider value={contextValue}>
            {children}
        </NavbarContext.Provider>
    )
}

export const useNavbarContext = () => {
    return useContext(NavbarContext)
}

export default NavbarProvider