export default function AdvantageBox ({img, title, description}) {
    return (
        <div className="h-[382px] mx-12 mb-6 bg-darkCyan rounded-lg sm:w-[280px] sm:mx-auto">
            <img className="mx-auto pt-[72px]" src={img}/>
            <div className="mt-14 mx-3">
            <h4 className="font-serif text-lg text-lightCream text-center mb-6">{title}</h4>
            <p className="text-center text-lightCream text-[15px] leading-[25px] mx-6">{description}</p>
            </div>
        </div>
    )
}