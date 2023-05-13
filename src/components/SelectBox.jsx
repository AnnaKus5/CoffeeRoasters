export default function SelectBox ({header, description, active, id, setSelectOptionsState}) {

    function handleClick(e) {
        const id = e.target.getAttribute("data-id")
        setSelectOptionsState(() => {
            const newState = {
                1: false,
                2: false,
                3: false
            }
            newState[id] = true
            return newState
        })
    }

    return (
        <div onClick={(e) => handleClick(e)} data-id={id} className={`mb-4 px-6 py-6 rounded-lg ${active ? '' : 'hover:bg-paleOrange'} ${active ? 'bg-darkCyan' : 'bg-lightGrey'}`}>
            <h3 data-id={id} className="font-serif text-lg">{header}</h3>
            <p data-id={id}>{description}</p>
        </div>
    )
}