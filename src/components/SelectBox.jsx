export default function SelectBox ({header, description}) {
    return (
        <div className="mb-4 px-6 py-6 bg-lightGrey rounded-lg">
            <h3 className="font-serif text-lg">{header}</h3>
            <p>{description}</p>
        </div>
    )
}