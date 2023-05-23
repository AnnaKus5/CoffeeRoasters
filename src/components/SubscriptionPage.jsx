import SubscriptionConfiguration from "./SubscriptionConfiguration";
import SubscriptionHero from "./SubscriptionHero";
import OrderSummaryPopup from "./OrderSummaryPopup";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function SubscriptionPage() {

    const {displayPopUp, setDisplayPopUp} = useOutletContext()
    
    const [waitForSelect, setWaitForSelect] = useState("preferences")
    const [activeSelection, setActiveSelection] = useState(
        {
            preferences: { isActive: true, isDisable: false, selectedByUser: "", next: "bean" },
            bean: { isActive: false, isDisable: false, selectedByUser: "", next: "quantity" },
            quantity: { isActive: false, isDisable: false, selectedByUser: "", next: "grind" },
            grind: { isActive: false, isDisable: false, selectedByUser: "", next: "deliveries" },
            deliveries: { isActive: false, isDisable: false, selectedByUser: "", next: false }
        }
    )

    const userPreferences = [
        { name: "preferences", select: activeSelection.preferences.selectedByUser },
        { name: "bean", select: activeSelection.bean.selectedByUser },
        { name: "quantity", select: activeSelection.quantity.selectedByUser },
        { name: "grind", select: activeSelection.grind.selectedByUser },
        { name: "deliveries", select: activeSelection.deliveries.selectedByUser },
    ]


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

    return (
        <>
            <div className={`${displayPopUp ? "bg-black opacity-30" : ""}`}>
                <SubscriptionHero />
                <SubscriptionConfiguration
                    activeSelection={activeSelection}
                    setActiveSelection={setActiveSelection}
                    userPreferences={userPreferences}
                    weekCostShipment={weekCostShipment}
                    twoWeekCostShipment={twoWeekCostShipment}
                    monthCostShipment={monthCostShipment}
                    displayPopUp={displayPopUp}
                    setDisplayPopUp={setDisplayPopUp}
                    waitForSelect={waitForSelect}
                    setWaitForSelect={setWaitForSelect} />
            </div>
            <OrderSummaryPopup
                displayPopUp={displayPopUp}
                setDisplayPopUp={setDisplayPopUp}
                preferences={activeSelection.preferences.selectedByUser}
                bean={activeSelection.bean.selectedByUser}
                quantity={activeSelection.quantity.selectedByUser}
                grind={activeSelection.grind.selectedByUser}
                deliveries={activeSelection.deliveries.selectedByUser}
                weekCostShipment={weekCostShipment}
                twoWeekCostShipment={twoWeekCostShipment}
                monthCostShipment={monthCostShipment}
            />
        </>
    )
}