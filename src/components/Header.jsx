import { useState } from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import MobileNavigation from "./MobileNavigation";

export default function Header() {

    const [isMobileNavActive, setIsMobileNavActive] = useState(false)

    function closeMenu() {
        setIsMobileNavActive(false)
    }

    return (
        <header className={`${isMobileNavActive ? "fixed z-20 w-full top-0 pb-10" : ""} flex justify-between bg-white px-6 pt-8 sm:mx-10 sm:mt-10 md:mx-20`}>
            <Link to="/">
                <img className="h-5 sm:h-7" src="..\images\shared\desktop\logo.svg"></img>
            </Link>
            <img
                onClick={() => setIsMobileNavActive(prev => !prev)}
                className={`${isMobileNavActive ? "hidden" : ""} h-4 sm:hidden`}
                src="..\images\shared\mobile\icon-hamburger.svg" />
            <img onClick={closeMenu} className={`${isMobileNavActive ? "" : "hidden"} h-4`} src="../images/shared/mobile/icon-close.svg"></img>
            <Navigation footer={false} />
            <MobileNavigation isMobileNavActive={isMobileNavActive} closeMenu={closeMenu} />
        </header>
    )
}