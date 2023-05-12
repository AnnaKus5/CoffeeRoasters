export default function AboutUsHero () {
    
    return (
        <div className="grid cols-1 content-center mx-5 mt-10 mb-[120px] h-[500px] rounded-lg bg-cover bg-center
        bg-[url('../../public/images/about/mobile/image-hero-whitecup.jpg')]
        sm:bg-[url('../../public/images/about/tablet/image-hero-whitecup.jpg')]
        md:bg-[url('../../public/images/about/desktop/image-hero-whitecup.jpg')] md:h-[600px]" 
         >
            <div className="mx-6 sm:ml-14 sm:w-[400px] md:w-[500px] text-center sm:text-left">
            <h1 className="font-serif text-text2xl text-white text-center leading-10 mb-6 sm:text-left xmd:text-text5xl xmd:leading-[72px]">About Us</h1>
            <p className="text-white text-center text-[15px] mb-10 sm:text-left md:text-base">Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
            </div>
        </div>
    )
}