export default function AdvantageBox({ img, title, description }) {
    return (
        <div className="h-[382px] mx-12 mb-6 bg-darkCyan rounded-lg sm:w-[280px] sm:mx-auto md:flex md:h-40 md:w-[570px] md:items-center xmd:w-[350px] xmd:h-96 xmd:flex-col xmd:justify-center xmd:mx-[30px]">
            <img className="w-[72px] h-fit mx-auto pt-[72px] md:w-[56px] md:ml-[75px] md:pt-0 xmd:mx-auto xmd:mb-14 xmd:w-[72px]" src={img} />
            <div className="mt-14 mx-3 md:mt-0">
                <h4 className="font-serif text-lg text-lightCream text-center mb-6">{title}</h4>
                <p className="text-center text-lightCream text-[15px] leading-[25px] mx-6">{description}</p>
            </div>
        </div>
    )
}