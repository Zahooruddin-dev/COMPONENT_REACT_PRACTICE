import React from "react"
import { useContext } from "react"
import { MenuContext } from "./Menu"
export default function MenuDropdown({ children }) {
    const {open} = useContext(MenuContext)
    const {toggleOpen} = useContext(MenuContext)

    return  (
        open &&
        <div className="menu-dropdown">
            {children}
        </div>

    ) 
}