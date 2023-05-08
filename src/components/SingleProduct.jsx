export default function SingleProduct({ img, name, description }) {
    return (
        <div className="mb-12 sm:flex sm:justify-center xmd:flex-col">
            <img src={img} className="w-48 mx-auto sm:m-0 xmd:mx-auto" alt="" />
            <div className="w-72 mx-auto sm:m-0">
                <p className="text-center font-serif text-lg font-bold mb-4 sm:text-left xmd:text-center">{name}</p>
                <p className="text-center text-[15px] sm:text-left xmd:text-center">{description}</p>
            </div>
        </div>
    )
}