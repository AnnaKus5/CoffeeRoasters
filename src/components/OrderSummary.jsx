import { useState } from "react"
import Button from "./Button.jsx"

export default function OrderSummary({ activeSelection, userPreferences, setDisplayPopUp }) {

    
    const preferences = activeSelection.preferences.selectedByUser
    const bean = activeSelection.bean.selectedByUser
    const quantity = activeSelection.quantity.selectedByUser
    const grind = activeSelection.grind.selectedByUser
    const deliveries = activeSelection.deliveries.selectedByUser
    const space = "_____"
    
    let isButtonActive
    
    if (preferences === "Capsule") {
        isButtonActive = userPreferences.filter(select => select.name !== "grind").every(section => section.select !== "")
    } else {
        isButtonActive = userPreferences.every(section => section.select !== "")
    }

    const capsulesContent = (
        <p className={`font-bold font-serif text-white text-lg leading-10`}>
            I drink my coffee using <span className="text-darkCyan">Capsules</span>, with a <span className="text-darkCyan">{bean ? bean : space}</span> type of bean, <span className="text-darkCyan">{quantity ? quantity : space}</span> sent to me <span className="text-darkCyan">{deliveries ? deliveries : space}</span>.
        </p>
    )

    const beansContent = (
        <p className= {`font-bold font-serif text-white text-lg leading-10`}>
            I drink my coffee as <span className=" text-darkCyan">{preferences ? preferences : space}</span>, with a <span className=" text-darkCyan" >{bean ? bean : space}</span> type of bean. <span className=" text-darkCyan">{quantity ? quantity : space}</span> ground ala <span className=" text-darkCyan">{grind ? grind : space}</span>, sent to me <span className=" text-darkCyan">{deliveries ? deliveries : space}</span>.
        </p>
    )

    function handleClick() {
        if (isButtonActive) {
            setDisplayPopUp(true)
        }
    }

    return (
        <div className={`text-center mb-[120px]`}>
            <div className="mx-6 mb-14 bg-navyBlue px-6 py-8 rounded-lg text-left">
                <p className=" text-white opacity-50 mb-2">ORDER SUMMARY</p>
                {preferences === "Capsule" ? capsulesContent : beansContent}
            </div>
            <Button 
                isButtonActive={isButtonActive}
                handleClick={handleClick}/>   
        </div>
    )
}