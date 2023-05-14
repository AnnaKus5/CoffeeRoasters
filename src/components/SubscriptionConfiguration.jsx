import { useState } from "react"
import SelectSection from "./SelectSection"
import SubscriptionHero from "./SubscriptionHero"
import SubscriptionStepsSidebar from "./SubscriptionsStepsSidebar"

export default function SubscriptionConfiguration() {

    const [userPreferences, setUserPreferences] = useState(
        {
            preferences: "",
            bean: "",
            quantity: "",
            grind: "",
            deliveries: ""
        }
    )

    const [activeSelection, setActiveSelection] = useState(
        {
            preferences: {isActive: true, isDisable: false, selectedByUser: "", next: "bean"},
            bean: {isActive: false, isDisable: false, selectedByUser: "", next: "quantity"},
            quantity: {isActive: false, isDisable: false, selectedByUser: "", next: "grind"},
            grind: {isActive: false, isDisable: false, selectedByUser: "", next: "deliveries"},
            deliveries: {isActive: false, isDisable: false, selectedByUser: "", next: false}
        }
    )

    let weekCostShipment = "$7.20"
    let twoWeekCostShipment = "$9.60"
    let monthCostShipment = "$12.00"

    if (activeSelection.quantity.selectedByUser === "250g") {
        weekCostShipment = "$7.20"
        twoWeekCostShipment = "$9.60"
        monthCostShipment = "$12.00"
    }
    if (activeSelection.quantity.selectedByUser === "500g") {
        weekCostShipment = "$13.00"
        twoWeekCostShipment = "$17.50"
        monthCostShipment = "$22.00"
    }
    if (activeSelection.quantity.selectedByUser === "1000g") {
        weekCostShipment = "$22.00"
        twoWeekCostShipment = "$32.00"
        monthCostShipment = "$42.00"
    }
    

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
            setActiveSelection={setActiveSelection} />
        )
    })

    return (
        <div className="xmd:flex xmd:justify-center">
            <SubscriptionStepsSidebar
                setActiveSelection={setActiveSelection} />
            <section className="xmd:w-1/2">
                {selectElements}
            </section>
        </div>
    )
}