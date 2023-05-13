import { useState } from "react"
import SelectBox from "./SelectBox"

export default function SelectSection ({name, active, header, options, setActiveSelection}) {

    const [selectOptionsState, setSelectOptionsState] = useState({
        1: false, 
        2: false,
        3: false
    })


    function handleActiveSelect() {
        setActiveSelection(prev => {
            return {
                ...prev,
                [name]: !prev[name]
            }
        })
    }

    const arrow = (<svg onClick={handleActiveSelect} width="19" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z" fill="#0E8784" fillRule="nonzero"/></svg>)
    const reverseArrow = (<svg onClick={handleActiveSelect} width="19" height="13" className="block, rotate-180"  xmlns="http://www.w3.org/2000/svg"><path d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z" fill="#0E8784" fillRule="nonzero"/></svg>)

    const content = options.map(box => {
        return (
            <SelectBox key={box.header} header={box.header} description={box.description} id={box.id} setSelectOptionsState={setSelectOptionsState} active={selectOptionsState[box.id]} />
        )
    })

    return (
        <div className="mx-6 mb-24">
            <div className="flex justify-between">
            <h2 className="mb-[18px] font-serif text-grey text-lg">{header}</h2>
            {active ? reverseArrow : arrow}
            </div>
            {active ? content : ""}
        </div>
    )
}