export default function Navigation ({footer}) {



    return (
        <ul className={`${footer ? "text-center mb-12 mx-auto" : "hidden"} sm:flex justify-between w-72`}>
            <li className={`${footer ? "mb-6 hover:text-lightCream" : ""} text-sm font-sans font-bold text-grey hover:text-black cursor-pointer`}>HOME</li>
            <li className={`${footer ? "mb-6 hover:text-lightCream" : ""} text-sm font-sans font-bold text-grey hover:text-black cursor-pointer`}>ABOUT US</li>
            <li className={`${footer ? "hover:text-lightCream" : ""} text-sm font-sans font-bold text-grey hover:text-black cursor-pointer`}>CREATE YOUR PLAN</li>
        </ul>
    )
} 