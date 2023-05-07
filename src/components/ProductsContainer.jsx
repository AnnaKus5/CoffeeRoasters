import SingleProduct from "./SingleProduct"
import granEspressoImage from "../../public/images/home/desktop/image-gran-espresso.png"
import planaltoImage from "../../public/images/home/desktop/image-planalto.png"
import piccolloImage from "../../public/images/home/desktop/image-planalto.png"
import dancheImage from "../../public/images/home/desktop/image-danche.png"

export default function ProductsContainer() {

    const gradientStyles = {
        backgroundImage: "-webkit-linear-gradient(90deg, rgba(254, 252, 247, 0.0001) 0%, #83888F 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    }
    return (
        <section className="sm:relative sm:mx-10 md:pt-10">
            <h2 className="mb-3 font-serif text-text5xl leading-[72px] text-grey text-center sm:opacity-50 sm:text-text7xl sm:mb-6 sm:absolute sm:-top-12 start-[10%] md:start-[20%] md:text-text10xl md:-top-10 md:leading-none" style={gradientStyles}>our collection</h2>
            <div className="md:flex md:mx-40">
                <SingleProduct img={granEspressoImage} name="Gran Espresso" description="Light and flavorful blend with cocoa and black pepper for an intense experience"/>
                <SingleProduct img={planaltoImage} name="Planalto" description="Brazilian dark roast with rich and velvety body, and hints of fruits and nuts" />
                <SingleProduct img={piccolloImage} name="Piccollo" description="Mild and smooth blend featuring notes of toasted almond and dried cherry " />
                <SingleProduct img={dancheImage} name="Danche" description="Ethiopian hand-harvested blend densely packed with vibrant fruit notes" />
            </div>
        </section>
    )
}

