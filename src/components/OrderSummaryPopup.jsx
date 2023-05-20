export default function OrderSummaryPopup({ weekCostShipment, twoWeekCostShipment, monthCostShipment, preferences, bean, quantity, grind, deliveries }) {

    const prefix = preferences === "Capsule" ? "using" : "as"
    let cost 

    if (deliveries === "Every week") cost = Number(weekCostShipment.slice(1)) * 4
    if (deliveries === "Every 2 weeks") cost = Number(twoWeekCostShipment.slice(1)) * 4
    if (deliveries === "Every month") cost = Number(monthCostShipment.slice(1) * 4)

    return (
        <section className=" mx-6 text-center">
            <div className=" my-10 bg-navyBlue mx-0 h-[88px] text-left">
                <p className="ml-6 text-white font-serif text-lg leading-8 py-7">Order Summary</p>
            </div>
            <div className="mx-6 mb-6 text-left">
                <p className="font-bold font-serif text-grey text-lg leading-10">
                    "I drink my coffee {prefix} <span className=" text-darkCyan">{preferences === "Capsule" ? "Capsules" : preferences}</span>, with a <span className=" text-darkCyan" >{bean}</span> type of bean. <span className=" text-darkCyan">{quantity}</span> ground ala <span className=" text-darkCyan">{grind}</span>, sent to me <span className=" text-darkCyan">{deliveries}</span>."
                </p>
                <p className="text-[15px]">
                Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. 
                </p>
            </div>
            <button className="py-4 px-8 text-center bg-darkCyan rounded-[6px] text-white text-[18px] font-serif leading-6 sm:ml-0"> Checkout - {cost} / mo</button>
        </section>
    )
}