import { Link } from "react-router-dom"

export default function Navigation({ footer }) {



    return (
        <nav className={`${footer ? "" : "hidden sm:block"}`}>
            <ul className={`${footer ? "text-center mb-12 mx-auto" : "hidden"} sm:flex justify-between w-72`}>
                <li className={`${footer ? "mb-6 hover:text-lightCream md:mb-0 md:mt-2" : ""} text-sm font-sans font-bold text-grey hover:text-black cursor-pointer`}>
                    <Link to="/">HOME</Link>
                </li>
                <li className={`${footer ? "mb-6 hover:text-lightCream md:mb-0 md:mt-2" : ""} text-sm font-sans font-bold text-grey hover:text-black cursor-pointer`}>
                    <Link to="aboutus" >ABOUT US</Link>
                </li>
                <li className={`${footer ? "hover:text-lightCream md:mt-2" : ""} text-sm font-sans font-bold text-grey hover:text-black cursor-pointer`}>
                    <Link to="subscription">CREATE YOUR PLAN</Link>
                </li>
            </ul>
        </nav>
    )
} 