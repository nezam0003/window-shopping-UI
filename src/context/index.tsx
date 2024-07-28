"use client"
import NavbarProvider from "./Navbar/NavbarContext"

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <NavbarProvider>
            {children}
        </NavbarProvider>
    )
}

export default ContextProvider