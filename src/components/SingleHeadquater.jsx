export default function SingleHeadquater ({img, header, content}) {

    const address = content.map((line, index) => {
        return (
            <p key={index}>{line}</p>
        )
    })


    return (
        <div className="mx-6 mb-20">
            <img className="mx-auto mb-12 sm:mx-0" src={img} alt="" />
            <h5 className="mb-[22px] text-center font-serif text-textxl sm:text-left sm:text-lg xmd:text-text2xl">{header}</h5>
            <div className="text-center sm:text-left">{address}</div>
        </div>
    )
}