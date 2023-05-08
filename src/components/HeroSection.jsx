import Button from "./Button"
import mobileImage from '../../public/images/home/mobile/image-hero-coffeepress.jpg'
import tabletImage from '../../public/images/home/tablet/image-hero-coffeepress.jpg'
import desktopImage from '../../public/images/home/desktop/image-hero-coffeepress.jpg'

export default function HeroSection() {

    const styles = {
        backgroundMobile: ``
    }
    return (
        <div className="grid cols-1 content-center mx-5 mt-10 mb-32 h-[500px] rounded-lg bg-cover bg-center
        bg-[url('../../public/images/home/mobile/image-hero-coffeepress.jpg')]
        sm:bg-[url('../../public/images/home/tablet/image-hero-coffeepress.jpg')]
        md:bg-[url('../../public/images/home/desktop/image-hero-coffeepress.jpg')] md:h-[600px]" 
         >
            <div className="sm:ml-14 sm:w-[400px] md:w-[500px]">
            <h1 className="font-serif text-text5xl text-white text-center leading-10 mb-6 sm:text-left md:text-text7xl md:leading-[72px]">Great coffee made simple.</h1>
            <p className="text-white text-center text-[15px] mb-10 sm:text-left md:text-base">Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
            <Button />

            </div>
        </div>
    )
}