import { useState } from "react"
import SelectSection from "./SelectSection"
import SubscriptionStepsSidebar from "./SubscriptionsStepsSidebar"
import OrderSummary from "./OrderSummary"

export default function SubscriptionConfiguration({activeSelection, setActiveSelection, userPreferences, weekCostShipment, twoWeekCostShipment, monthCostShipment, setDisplayPopUp, waitForSelect, setWaitForSelect}) {    

    const content = [
        {
            name: "preferences",
            active: activeSelection.preferences.isActive,
            disable: activeSelection.preferences.isDisable,
            header: "How do you drink your coffee?",
            options: [
                { id: 1, header: "Capsule", description: "Compatible with Nespresso systems and similar brewers" },
                { id: 2, header: "Filter", description: "For pour over or drip methods like Aeropress, Chemex, and V60" },
                { id: 3, header: "Espresso", description: "Dense and finely ground beans for an intense, flavorful experience" }
            ]
        },
        {
            name: "bean",
            active: activeSelection.bean.isActive,
            disable: activeSelection.bean.isDisable,
            header: "What type of coffee?",
            options: [
                { id: 1, header: "Single Origin", description: "Distinct, high quality coffee from a specific family-owned farm" },
                { id: 2, header: "Decaf", description: "Just like regular coffee, except the caffeine has been removed" },
                { id: 3, header: "Blended", description: "Combination of two or three dark roasted beans of organic coffees" }
            ]
        },
        {
            name: "quantity",
            active: activeSelection.quantity.isActive,
            disable: activeSelection.quantity.isDisable,
            header: "How much would you like?",
            options: [
                { id: 1, header: "250g", description: "Perfect for the solo drinker. Yields about 12 delicious cups." },
                { id: 2, header: "500g", description: "Perfect option for a couple. Yields about 40 delectable cups." },
                { id: 3, header: "1000g", description: "Perfect for offices and events. Yields about 90 delightful cups." }
            ]
        },
        {
            name: "grind",
            active: activeSelection.grind.isActive,
            disable: activeSelection.grind.isDisable,
            header: "Want us to grind them?",
            options: [
                { id: 1, header: "Wholebean", description: "Best choice if you cherish the full sensory experience" },
                { id: 2, header: "Filter", description: "For drip or pour-over coffee methods such as V60 or Aeropress" },
                { id: 3, header: "Cafetiére", description: "Course ground beans specially suited for french press coffee" }
            ]
        },
        {
            name: "deliveries",
            active: activeSelection.deliveries.isActive,
            disable: activeSelection.deliveries.isDisable,
            header: "How often should we deliver?",
            options: [
                { id: 1, header: "Every week", description: `${weekCostShipment} per shipment. Includes free first-class shipping.` },
                { id: 2, header: "Every 2 weeks", description: `${twoWeekCostShipment} per shipment. Includes free priority shipping.` },
                { id: 3, header: "Every month", description: `${monthCostShipment} per shipment. Includes free priority shipping.` }
            ]
        }
    ]

    const selectElements = content.map(step => {
        return (
            <SelectSection 
            key={step.name} 
            name={step.name} 
            active={step.active}
            isDisable={step.disable} 
            header={step.header} 
            options={step.options} 
            id={step.id} 
            activeSelection={activeSelection}
            setActiveSelection={setActiveSelection}
            setWaitForSelect={setWaitForSelect} />
        )
    })

    return (
        <div className="xmd:flex xmd:justify-center">
            <SubscriptionStepsSidebar
                waitForSelect={waitForSelect}
                setWaitForSelect={setWaitForSelect}
                setActiveSelection={setActiveSelection} />
            <section className="xmd:w-1/2">
                {selectElements}
                <OrderSummary 
                activeSelection={activeSelection} 
                userPreferences={userPreferences}
                weekCostShipment={weekCostShipment}
                twoWeekCostShipment={twoWeekCostShipment}
                monthCostShipment={monthCostShipment}
                setDisplayPopUp={setDisplayPopUp}
                />
            </section>
        </div>
    )
}