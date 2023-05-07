import SingleProduct from "./SingleProduct"
import granEspressoImage from "../../public/images/home/desktop/image-gran-espresso.png"
import planaltoImage from "../../public/images/home/desktop/image-planalto.png"
import piccolloImage from "../../public/images/home/desktop/image-planalto.png"
import dancheImage from "../../public/images/home/desktop/image-danche.png"

export default function ProductsContainer() {
    return (
        <section>
            <h2 className="mb-3 font-serif text-text5xl leading-[72px] text-grey text-center bg-clip-text bg-gradient-to-b from-transparent to-grey sm:text-text7xl sm:mb-6">our collection</h2>
            <div className="md:flex md:mx-40">
                <SingleProduct img={granEspressoImage} name="Gran Espresso" description="Light and flavorful blend with cocoa and black pepper for an intense experience"/>
                <SingleProduct img={planaltoImage} name="Planalto" description="Brazilian dark roast with rich and velvety body, and hints of fruits and nuts" />
                <SingleProduct img={piccolloImage} name="Piccollo" description="Mild and smooth blend featuring notes of toasted almond and dried cherry " />
                <SingleProduct img={dancheImage} name="Danche" description="Ethiopian hand-harvested blend densely packed with vibrant fruit notes" />
            </div>
        </section>
    )
}