import Button from "./Button.jsx"
import OrderSummaryPopup from "./OrderSummaryPopup.jsx"

export default function OrderSummary({ activeSelection, userPreferences, weekCostShipment, twoWeekCostShipment, monthCostShipment  }) {

    const isButtonActive = userPreferences.every(section => section.select !== "")
    let isPopUpView = false

    console.log(isButtonActive)


    const preferences = activeSelection.preferences.selectedByUser
    const bean = activeSelection.bean.selectedByUser
    const quantity = activeSelection.quantity.selectedByUser
    const grind = activeSelection.grind.selectedByUser
    const deliveries = activeSelection.deliveries.selectedByUser
    const space = "_____"

    const capsulesContent = (
        <p className={`font-bold font-serif ${isPopUpView ? "text-black" : "text-white"} text-lg leading-10`}>
            I drink my coffee using <span className="text-darkCyan">Capsules</span>, with a <span className="text-darkCyan">{bean ? bean : space}</span> type of bean, <span className="text-darkCyan">{quantity ? quantity : space}</span> sent to me <span className="text-darkCyan">{deliveries ? deliveries : space}</span>.
        </p>
    )

    const beansContent = (
        <p className= {`font-bold font-serif ${isPopUpView ? "text-black" : "text-white"} text-lg leading-10`}>
            I drink my coffee as <span className=" text-darkCyan">{preferences ? preferences : space}</span>, with a <span className=" text-darkCyan" >{bean ? bean : space}</span> type of bean. <span className=" text-darkCyan">{quantity ? quantity : space}</span> ground ala <span className=" text-darkCyan">{grind ? grind : space}</span>, sent to me <span className=" text-darkCyan">{deliveries ? deliveries : space}</span>.
        </p>
    )

    return (
        <div className="text-center mb-[120px]">
            <div className="mx-6 mb-14 bg-navyBlue px-6 py-8 rounded-lg text-left">
                <p className=" text-white opacity-50 mb-2">ORDER SUMMARY</p>
                {preferences === "Capsule" ? capsulesContent : beansContent}
            </div>
            <Button isButtonActive={isButtonActive}/>
            <OrderSummaryPopup 
            preferences={preferences}
            bean={bean}
            quantity={quantity}
            grind={grind}
            deliveries={deliveries}
            weekCostShipment={weekCostShipment}
            twoWeekCostShipment={twoWeekCostShipment}
            monthCostShipment={monthCostShipment}
            />
        </div>
    )
}