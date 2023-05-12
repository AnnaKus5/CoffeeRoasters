export default function Quality() {
    return (
        <div className="relative bg-navyBlue mx-6 mb-32 rounded-[10px] h-[509px] xmd:mx-20 xmd:grid xmd:grid-cols-2">
            <img className="absolute -top-[78px] left-0 right-0 mx-auto rounded-lg w-[279px] sm:hidden" src="../../public/images/about/mobile/image-quality.jpg" />
            <img className="absolute hidden sm:block -top-40 left-0 right-0 mx-auto rounded-lg xmd:hidden" src="../../public/images/about/tablet/image-quality.jpg" />
            <img className="absolute hidden rounded-lg xmd:block xmd:-top-[88px] xmd:right-[85px]" src="../../public/images/about/desktop/image-quality.jpg" alt="" />
            <div className="pt-36 md:pt-56 xmd:pt-[88px] xmd:ml-[85px]">
                <h3 className="mb-6 text-center font-serif text-textxl leading-7 text-lightCream md:text-text2xl md:leading-normal xmd:text-left xmd:text-text5xl" >Uncompromising quality</h3>
                <p className="mx-6 font-[15px] leading-[25px] text-center text-lightCream md:mx-[74px] xmd:mx-0 xmd:text-left">Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast
                    consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
            </div>
        </div >
    )
}