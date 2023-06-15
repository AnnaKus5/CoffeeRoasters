import Navigation from "./Navigation"
import SocialMediaIcons from "./SocialMediaIcons"


export default function Footer() {
    return (
        <footer className={`bg-darkGreyBlue mx-6 mb-12 pt-12 pb-14 xmd:pb-0 sm:mx-10 sm:mt-10 xmd:flex xmd:justify-between xmd:mx-20 justify-between`}>
            <img className="h-5 sm:h-7 mb-12 mx-auto xmd:mx-20" src="..\images\shared\desktop\logo-white.svg"></img>
            <Navigation footer={true}/>
            <SocialMediaIcons />
        </footer>
    )
}