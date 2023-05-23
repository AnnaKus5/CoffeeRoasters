export default function OrderSummaryPopup({ displayPopUp, setDisplayPopUp, weekCostShipment, twoWeekCostShipment, monthCostShipment, preferences, bean, quantity, grind, deliveries }) {

    const prefix = preferences === "Capsule" ? "using" : "as"
    let cost 

    if (deliveries === "Every week") cost = Number(weekCostShipment.slice(1)) * 4
    if (deliveries === "Every 2 weeks") cost = Number(twoWeekCostShipment.slice(1)) * 4
    if (deliveries === "Every month") cost = Number(monthCostShipment.slice(1)) * 4

    function handleClick() {
        setDisplayPopUp(false)
    }

    return (
        <section className={`${displayPopUp ? "block" : "hidden"} fixed top-9 left-6 right-6 bg-white text-center md:top-52 md:left-28 md:right-28 xmd:left-80 xmd:right-80 lg:left-[450px] lg:right-[450px]`}>
            <div className=" mb-10 bg-navyBlue mx-0 h-[88px] text-left flex justify-between">
                <p className="ml-6 text-white font-serif text-lg leading-8 py-7">Order Summary</p>
                <svg width="14" height="13" className="mt-6 mr-6" onClick={handleClick} xmlns="http://www.w3.org/2000/svg"><path d="M12.657.843a1.5 1.5 0 010 2.121L9.12 6.5l3.536 3.536a1.5 1.5 0 11-2.121 2.12L7 8.622l-3.536 3.536a1.5 1.5 0 11-2.12-2.121L4.877 6.5 1.343 2.964A1.5 1.5 0 113.464.844L7 4.377 10.536.843a1.5 1.5 0 012.12 0z" fill="#FFFFFF" fillRule="evenodd"/></svg>
            </div>
            <div className="mx-6 mb-6 text-left">
                <p className="font-bold font-serif text-grey text-lg leading-10">
                    "I drink my coffee {prefix} <span className=" text-darkCyan">{preferences === "Capsule" ? "Capsules" : preferences}</span>, with a <span className=" text-darkCyan" >{bean}</span> type of bean. <span className=" text-darkCyan">{quantity}</span> ground ala <span className=" text-darkCyan">{grind}</span>, sent to me <span className=" text-darkCyan">{deliveries}</span>."
                </p>
                <p className="text-[15px]">
                Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. 
                </p>
            </div>
            <button className="py-4 px-8 mb-6 text-center bg-darkCyan rounded-[6px] text-white text-[18px] font-serif leading-6 sm:ml-0"> Checkout - {cost} / mo</button>
        </section>
    )
}