export default function SingleProduct({ img, name, description }) {
    return (
        <div className="mb-12 sm:flex sm:justify-center md:flex-col">
            <img src={img} className="w-48 mx-auto sm:m-0 md:mx-auto" alt="" />
            <div className="w-72 mx-auto sm:m-0">
                <p className="text-center font-serif text-lg font-bold mb-4 sm:text-left md:text-center">{name}</p>
                <p className="text-center text-[15px] sm:text-left md:text-center">{description}</p>
            </div>
        </div>
    )
}