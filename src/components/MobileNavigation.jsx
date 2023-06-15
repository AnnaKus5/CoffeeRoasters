import { useState } from "react"
import { Link } from "react-router-dom"

export default function MobileNavigation({ isMobileNavActive, closeMenu }) {

    return (
        <nav className={`${isMobileNavActive ? "" : "hidden"} fixed z-20 left-0 right-0 top-[90px] flex justify-between w-full h-screen bg-gradient-to-b from-white to-transparent sm:hidden`}>
            <ul className="mx-auto mt-10 font-serif text-lg font-bold text-darkGreyBlue text-center">
                <li onClick={closeMenu} className={`mb-8 hover:text-black cursor-pointer`}>
                    <Link to="/">HOME</Link>
                </li>
                <li onClick={closeMenu} className={`mb-8 hover:text-black cursor-pointer`}>
                    <Link to="aboutus" >ABOUT US</Link>
                </li>
                <li onClick={closeMenu} className={`mb-8 hover:text-black cursor-pointer`}>
                    <Link to="subscription">CREATE YOUR PLAN</Link>
                </li>
            </ul>
        </nav>
    )
}