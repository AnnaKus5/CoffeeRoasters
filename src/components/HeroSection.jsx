import Button from "./Button"
import mobileImage from '../../public/images/home/mobile/image-hero-coffeepress.jpg'
import tabletImage from '../../public/images/home/tablet/image-hero-coffeepress.jpg'
import desktopImage from '../../public/images/home/desktop/image-hero-coffeepress.jpg'

export default function HeroSection() {
    return (
        <div className="grid cols-1 content-center mx-5 mt-10 mb-32 w-82 h-[500px] rounded-lg bg-cover" style={{ backgroundImage: "url(public/images/home/mobile/image-hero-coffeepress.jpg)" }}>
            <h1 className="font-serif text-text5xl text-white text-center leading-10 mb-6">Great coffee made simple.</h1>
            <p className="text-white text-center text-[15px] mb-10">Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
            <Button />
        </div>
    )
}