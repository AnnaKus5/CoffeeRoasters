import Button from "./Button";
import SubscriptionStep from "./SubscriptionStep";

//rename component

export default function SubscriptionStepsContainer() {
    return (
        <div className="mt-[700px] mx-6 text-center mb-28 md:mt-[350px] md:text-left xmd:ml-[165px]">
            <h4 className="text-center font-serif text-[30px] text-grey mb-20 md:text-left">How it works?</h4>
            <div className="md:flex justify-between xmd:justify-center">
                <SubscriptionStep number="01" title="Pick your coffee" description="Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out." />
                <SubscriptionStep number="02" title="Choose the frequency" description="Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal." />
                <SubscriptionStep number="03" title="Receive and enjoy!" description="We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
                world-class coffees curated to provide a distinct tasting experience." />
            </div>
            <Button />
        </div>
    )
}