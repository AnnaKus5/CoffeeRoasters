import ChooseUs from "./ChooseUs";
import AdvantageBox from "./AdvantageBox";
import coffeeBeanImage from "../../public/images/home/desktop/icon-coffee-bean.svg"
import giftImage from "../../public/images/home/desktop/icon-gift.svg"
import truckImage from "../../public/images/home/desktop/icon-truck.svg"


export default function ChooseUsContainer () {
    return (
        <section className="relative">
            <ChooseUs />
            <div className="absolute left-0 right-0 my-0 mx-auto top-[305px] md:top-[275px] xmd:flex xmd:justify-center xmd:top-[346px]">
                <AdvantageBox img={coffeeBeanImage} title="Best quality" description="Discover an endless variety of the world’s best artisan coffee from each of our roasters."/>
                <AdvantageBox img={giftImage} title="Exclusive benefits" description="Special offers and swag when you subscribe, including 30% off your first shipment."/>
                <AdvantageBox img={truckImage}title="Free shipping" description="We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."/>
            </div>
        </section>
    )
}