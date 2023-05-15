export default function SubscriptionStepsSidebar ({waitForSelect, setWaitForSelect, setActiveSelection}) {

    function handleClick(e) {
        const selectedSection = e.target.getAttribute("data-preferences")

        setActiveSelection(prev => {
            return {
                ...prev,
                [selectedSection]: {...prev[selectedSection], isActive: true}
            }
        })

        setWaitForSelect(selectedSection)
    }

    return (
        <aside className="hidden mr-8 xmd:block lg:mr-32">
            <ul className=" w-60">
                <li onClick={(e) => handleClick(e)} data-preferences="preferences" className={`pb-6 border-b border-opacity-25 border-grey font-serif text-lg text-darkGreyBlue leading-8 ${waitForSelect === "preferences" ? "" : "opacity-40"} hover:cursor-pointer`}><span className="mr-7 text-darkCyan">01</span>Preferences</li>
                <li onClick={(e) => handleClick(e)} data-preferences="bean" className={`pb-6 mt-6 border-b border-opacity-25 border-grey font-serif text-lg text-darkGreyBlue leading-8 ${waitForSelect === "bean" ? "" : "opacity-40"} hover:cursor-pointer`}><span className="mr-7 text-grey">02</span>Bean Type</li>
                <li onClick={(e) => handleClick(e)} data-preferences="quantity" className={`pb-6 mt-6 border-b border-opacity-25 border-grey font-serif text-lg text-darkGreyBlue leading-8 ${waitForSelect === "quantity" ? "" : "opacity-40"} hover:cursor-pointer`}><span className="mr-7 text-grey">03</span>Quantity</li>
                <li onClick={(e) => handleClick(e)} data-preferences="grind" className={`pb-6 mt-6 border-b border-opacity-25 border-grey font-serif text-lg text-darkGreyBlue leading-8 ${waitForSelect === "grind" ? "" : "opacity-40"} hover:cursor-pointer`}><span className="mr-7 text-grey">04</span>Grind Option</li>
                <li onClick={(e) => handleClick(e)} data-preferences="deliveries" className={`pb-6 mt-6 font-serif text-lg text-darkGreyBlue leading-8 ${waitForSelect === "deliveries" ? "" : "opacity-40"} hover:cursor-pointer`}><span className="mr-7 text-grey">05</span>Deliveries</li>
            </ul>
        </aside>
    )
}