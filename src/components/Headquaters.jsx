import SingleHeadquater from "./SingleHeadquater";
import ukImage from "../../public/images/about/desktop/illustration-uk.svg"
import canadaImage from "../../public/images/about/desktop/illustration-canada.svg"
import australiaImage from "../../public/images/about/desktop/illustration-australia.svg"

export default function Headquaters () {

    const ukAddress = ["68 Asfordby Rd", "Alcaston", "SY6 1YA", "+44 1241 918425"]
    const canadaAddress = ["1528  Eglinton Avenue", "Toronto", "Ontario M4P 1A6", "+1 416 485 2997"]
    const australiaAddress = ["36 Swanston Street", "Kewell", "Victoria", "+61 4 9928 3629"]
    

    return (
        <div className="sm:mx-10 xmd:mx-40">
            <h4 className="mb-[72px] font-serif text-center text-lg text-grey sm:text-left">Our headquarters</h4>
            <div className="sm:flex xmd:justify-between">
                <SingleHeadquater img={ukImage} header="United Kingdom" content={ukAddress}/>
                <SingleHeadquater img={canadaImage} header="Canada" content={canadaAddress}/>
                <SingleHeadquater img={australiaImage} header="Australia" content={australiaAddress}/>
            </div>
        </div>
    )
}