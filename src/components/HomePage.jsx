import ChooseUsContainer from "./ChooseUsContainer";
import HeroSection from "./HeroSection";
import ProductsContainer from "./ProductsContainer";
import SubscriptionStepsContainer from "./SubscriptionStepsContainer";

export default function HomePage () {
    return(
        <>
        <HeroSection />
        <ProductsContainer />
        <ChooseUsContainer />
        <SubscriptionStepsContainer />
        </>
    )
}