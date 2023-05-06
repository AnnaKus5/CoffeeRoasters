import Navigation from "./Navigation";

export default function Header() {
    return (
        <nav className="flex justify-between mx-6 mt-8 sm:mx-10 sm:mt-10 md:mx-20">
            <img className="h-5 sm:h-7" src="public\images\shared\desktop\logo.svg"></img>
            <img className="h-4 sm:hidden" src="public\images\shared\mobile\icon-hamburger.svg" />
            <Navigation footer={false}/>
        </nav>
    )
}