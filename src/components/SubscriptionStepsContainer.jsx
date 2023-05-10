import SubscriptionStep from "./SubscriptionStep";

export default function SubscriptionStepsContainer() {
    return (
        <div>
            <h4>How it works?</h4>
            <div>
                <SubscriptionStep number={1} title="Pick your coffee" description="Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out." />
                <SubscriptionStep number={2} title="Choose the frequency" description="Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal." />
                <SubscriptionStep number={3} title="Receive and enjoy!" description="We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
                world-class coffees curated to provide a distinct tasting experience." />
            </div>
        </div>
    )
}