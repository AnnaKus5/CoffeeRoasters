import SubscriptionConfiguration from "./SubscriptionConfiguration";
import SubscriptionStep from "./SubscriptionStep";
import SubscriptionStepsContainer from "./SubscriptionStepsContainer";
import SubscriptionHero from "./SubscriptionHero";

export default function SubscriptionPage () {
    return (
        <div>
            {/* <SubscriptionStepsContainer /> */}
            <SubscriptionHero />
            <SubscriptionConfiguration />
        </div>
    )
}