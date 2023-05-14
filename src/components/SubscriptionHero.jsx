export default function SubscriptionHero () {
    
        return (
            <div className="grid cols-1 content-center mx-5 mt-10 mb-[120px] h-[500px] rounded-lg bg-cover bg-center
            bg-[url('../../public/images/plan/mobile/image-hero-blackcup.jpg')]
            sm:bg-[url('../../public/images/plan/tablet/image-hero-blackcup.jpg')]
            md:bg-[url('../../public/images/plan/desktop/image-hero-blackcup.jpg')] md:h-[600px]" 
             >
                <div className="mx-6 text-center sm:ml-14 sm:w-[400px] sm:text-left sm:mr-56 md:w-[500px]">
                <h1 className="font-serif text-text2xl text-white text-center leading-10 mb-6 sm:text-left sm:text-[48px] xmd:text-text5xl xmd:leading-[72px]">Create a plan</h1>
                <p className="text-white text-center text-[15px] mb-10 sm:text-left md:text-base">Build a subscription plan that best fits your needs. We offer an assortment of the best 
  artisan coffees from around the globe delivered fresh to your door.</p>
                </div>
            </div>
        )
}