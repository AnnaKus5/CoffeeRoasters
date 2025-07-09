import { Link } from "react-router-dom"
import Button from "./Button"

export default function HeroSection() {

    // const handleCreatePlanClick = () => {
    //     // window.klaviyo?.track('Clicked Create Plan', {
    //     //   plan_type: 'custom',
    //     //   timestamp: new Date().toISOString(),
    //     // })
    //   }

    const handleCreatePlanClick = () => {
        const klaId = document.cookie
          .split('; ')
          .find(row => row.startsWith('__kla_id='))
          ?.split('=')[1];
      
      
        window._learnq.push(['identify', { $anonymous_id: klaId }]);
      
        window._learnq.push(['track', 'Clicked Create Plan', {
            plan_type: 'custom',
            timestamp: new Date().toISOString(),
          }]);
      };
      
      

    return (
        <div className="grid cols-1 content-center mx-5 mt-10 mb-32 h-[500px] rounded-lg bg-cover bg-center
            bg-[url('/images/home/mobile/image-hero-coffeepress.jpg')]
            sm:bg-[url('/images/home/tablet/image-hero-coffeepress.jpg')]
            md:bg-[url('/images/home/desktop/image-hero-coffeepress.jpg')] md:h-[600px]">
            <div className="sm:ml-14 sm:w-[400px] md:w-[500px] text-center sm:text-left">
                <h1 className="font-serif text-text5xl text-white text-center leading-10 mb-6 sm:text-left md:text-text7xl md:leading-[72px]">Great coffee made simple.</h1>
                <p className="text-white text-center text-[15px] mx-6 mb-10 sm:mx-0 sm:text-left md:text-base">Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
                <Link to="subscription" >
                    <Button handleClick={handleCreatePlanClick} isButtonActive={true} />
                </Link>

            </div>
        </div>
    )
}