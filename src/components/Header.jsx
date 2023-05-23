import Navigation from "./Navigation";
import { Link } from "react-router-dom";

export default function Header({displayPopUp}) {

    return (
        <nav className={`${displayPopUp ? "bg-black opacity-30" : ""} flex justify-between mx-6 mt-8 sm:mx-10 sm:mt-10 md:mx-20`}>
            <Link to="/">
            <img className="h-5 sm:h-7" src="..\images\shared\desktop\logo.svg"></img>
            </Link>
            <img className="h-4 sm:hidden" src="..\images\shared\mobile\icon-hamburger.svg" />
            <Navigation footer={false}/>
        </nav>
    )
}