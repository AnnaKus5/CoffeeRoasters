import SelectSection from "./SelectSection"
import SubscriptionHero from "./SubscriptionHero"

export default function SubscriptionConfiguration() {

    const userState = {
        preferences: "",
        bean: "",
        quantity: "",
        grind: "",
        deliveries: ""
    }

    const activeSelection = {
        preferences: true,
        bean: false,
        quantity: false,
        grind: false,
        deliveries: false
    }

    const content = [
        {
            name: "preferences",
            active: activeSelection.preferences,
            header: "How do you drink your coffee?",
            options: [
                { header: "Capsule", description: "Compatible with Nespresso systems and similar brewers" },
                { header: "Filter", description: "For pour over or drip methods like Aeropress, Chemex, and V60" },
                { header: "Espresso", description: "Dense and finely ground beans for an intense, flavorful experience" }
            ]
        },
        {
            name: "bean",
            active: activeSelection.bean,
            header: "What type of coffee?",
            options: [
                { header: "Single Origin", description: "Distinct, high quality coffee from a specific family-owned farm" },
                { header: "Decaf", description: "Just like regular coffee, except the caffeine has been removed" },
                { header: "Blended", description: "Combination of two or three dark roasted beans of organic coffees" }
            ]        },
        {
            name: "quantity",
            active: activeSelection.quantity,
            header: "How much would you like?",
            options: [
                { header: "250g", description: "Perfect for the solo drinker. Yields about 12 delicious cups." },
                { header: "500g", description: "Perfect option for a couple. Yields about 40 delectable cups." },
                { header: "1000g", description: "Perfect for offices and events. Yields about 90 delightful cups." }
            ]        },
        {
            name: "grind",
            active: activeSelection.grind,
            header: "Want us to grind them?",
            options: [
                { header: "Wholebean", description: "Best choice if you cherish the full sensory experience" },
                { header: "Filter", description: "For drip or pour-over coffee methods such as V60 or Aeropress" },
                { header: "Cafetiére", description: "Course ground beans specially suited for french press coffee" }
            ]        },
        {
            name: "deliveries",
            active: activeSelection.deliveries,
            header: "How often should we deliver?",
            options: [
                { header: "Every week", description: "$7.20 per shipment. Includes free first-class shipping." },
                { header: "Every 2 weeks", description: "$9.60 per shipment. Includes free priority shipping." },
                { header: "Every month", description: "$12.00 per shipment. Includes free priority shipping." }
            ]        }
    ]

    const selectElements = content.map(step => {
        return (
            <SelectSection key={step.name} name={step.name} active={step.active} header={step.header} options={step.options} />
        )
    })

    return (
        <div>
            <SubscriptionHero />
            <div>
                {selectElements}
            </div>
        </div>
    )
}