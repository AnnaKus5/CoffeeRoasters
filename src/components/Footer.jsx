import Navigation from "./Navigation"
import SocialMediaIcons from "./SocialMediaIcons"

export default function Footer() {
    return (
        <footer className="bg-darkGreyBlue mx-6 mb-12 pt-12 pb-14 md:pb-0 sm:mx-10 sm:mt-10 md:flex md:justify-between md:mx-20 justify-between">
            <img className="h-5 sm:h-7 mb-12 mx-auto md:mx-20" src="public\images\shared\desktop\logo.svg"></img>
            <Navigation footer={true}/>
            <SocialMediaIcons />
        </footer>
    )
}