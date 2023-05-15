export default function SelectBox ({header, description, active, id, name, setSelectOptionsState, activeSelection, setActiveSelection, setWaitForSelect}) {

    function handleClick(e) {
        const id = e.target.getAttribute("data-id")
        const preferences = e.target.getAttribute("data-preferences")
        setSelectOptionsState(() => {
            const newState = {
                1: false,
                2: false,
                3: false
            }
            newState[id] = true
            return newState
        })

        setWaitForSelect(() => {
            if (name === "quantity" && activeSelection.grind.isDisable) {
                return "deliveries"
            }
            return activeSelection[preferences].next
        })

        setActiveSelection(prev => {
            const newState = {...prev}
            let nextSelect = newState[preferences].next
            newState[preferences].selectedByUser = header
            if (header === "Capsule" && name === "preferences") {
                newState.grind.isDisable = true
            } 
            if (name === "preferences" && header !== "Capsule") {
                newState.grind.isDisable = false
            }
            if (name === "quantity" && newState.grind.isDisable) {
                nextSelect = "deliveries"
            }
            if (newState[nextSelect]) {
                newState[nextSelect].isActive = true
            }
            return newState
        })

    }

    // archivePlan = useRef()
    // archivePlan.current.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'nearest',
    //     inline: 'center'
    // })



    return (
        <div onClick={(e) => handleClick(e)} data-id={id} data-preferences={name} className={`mb-4 px-6 py-6 rounded-lg ${active ? '' : 'hover:bg-paleOrange'} ${active ? 'bg-darkCyan' : 'bg-lightGrey'} sm:mx-[10px] sm:h-[250px] sm:py-0 xmd:w-56`}>
            <h3 data-id={id} data-preferences={name} className="font-serif text-lg sm:leading-6 sm:mt-8 sm:mb-6">{header}</h3>
            <p data-id={id} data-preferences={name}>{description}</p>
        </div>
    )
}