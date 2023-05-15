import { useRef, useState } from "react"
import SelectBox from "./SelectBox"

export default function SelectSection({ name, active, isDisable, header, options, activeSelection, setActiveSelection, setWaitForSelect }) {

    const [selectOptionsState, setSelectOptionsState] = useState({
        1: false,
        2: false,
        3: false
    })

    const section = useRef("")


    function handleActiveSelect() {
        setActiveSelection(prev => {
            return {
                ...prev,
                [name]: {
                    ...prev[name],
                    isActive: !prev[name].isActive
                }
            }
        })
    }

    const arrow = (<svg onClick={handleActiveSelect} width="19" height="13" className="mt-6" xmlns="http://www.w3.org/2000/svg"><path d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z" fill="#0E8784" fillRule="nonzero" /></svg>)
    const reverseArrow = (<svg onClick={handleActiveSelect} width="19" height="13" className="block mt-6 rotate-180" xmlns="http://www.w3.org/2000/svg"><path d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z" fill="#0E8784" fillRule="nonzero" /></svg>)

    const content = options.map(box => {
        return (
            <SelectBox 
                key={box.header} 
                header={box.header} 
                description={box.description} 
                id={box.id} setSelectOptionsState={setSelectOptionsState} 
                active={selectOptionsState[box.id]} 
                name={name} 
                activeSelection={activeSelection}
                setActiveSelection={setActiveSelection}
                setWaitForSelect={setWaitForSelect}
                section={section} />
        )
    })

    return (
        <div id={name} className="mx-6 mb-24">
            <div className={`flex justify-between ${isDisable ? "opacity-30" : ""}`}>
                <h2 className="mb-[18px] font-serif text-grey text-lg lg:text-text5xl">{header}</h2>
                {active && !isDisable ? reverseArrow : arrow}
            </div>
            <div className="sm:flex ">
            {active && !isDisable ? content : ""}
            </div>
        </div>
    )
}