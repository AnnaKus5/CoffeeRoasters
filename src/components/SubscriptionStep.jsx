export default function SubscriptionStep ({number, title, description}) {
    return (
        <div className="text-center mb-14 md:text-left md:w-[223px] xmd:w-[285px] xmd:mr-[95px]">
            <p className="text-text7xl font-serif text-paleOrange mb-6">{number}</p>
            <h5 className="text-textxl font-serif font-bold mb-6">{title}</h5>
            <p className="md:text-[15px] leading-[25px]">{description}</p>
        </div>
    )
}