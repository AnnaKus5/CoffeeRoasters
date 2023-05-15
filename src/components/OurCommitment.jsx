import mobileCommitmentImage from "../images/about/mobile/image-commitment.jpg"
import tabletCommitmentImage from "../images/about/tablet/image-commitment.jpg"
import desktopCommitmentImage from "../images/about/desktop/image-commitment.jpg"

export default function OurCommitment() {
    return (
        <section className="mx-6 mb-[200px] md:flex md:justify-around xmd:justify-center xmd:items-center md:mb-80">
            <img src={mobileCommitmentImage} className="rounded-lg mb-12 md:hidden" />
            <img src={tabletCommitmentImage} className="rounded-lg hidden md:block xmd:hidden" />
            <img src={desktopCommitmentImage} className="rounded-lg hidden xmd:block" />
            <div className="md:w-[340px] xmd:ml-32">
                <h2 className="text-center text-text2xl leading-[48px] font-serif mb-7 xmd:text-left">Our commitment</h2>
                <p className="text-center text-[15px] leading-6 text-darkGreyBlue xmd:text-left">We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
            </div>
        </section>
    )
}