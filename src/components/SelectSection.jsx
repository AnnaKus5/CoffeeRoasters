import SelectBox from "./SelectBox"

export default function SelectSection ({name, active, header, options}) {

    const content = options.map(box => {
        return (
            <SelectBox key={box.name} header={box.header} description={box.description} />
        )
    })

    return (
        <div className="mx-6 mb-24">
            <div className="flex">
            <h2 className="mb-[18px] font-serif text-grey text-lg">{header}</h2>
            {active ? <img src="../../public/images/plan/desktop/icon-arrow.svg" /> : <img />}
            </div>
            {content}
        </div>
    )
}