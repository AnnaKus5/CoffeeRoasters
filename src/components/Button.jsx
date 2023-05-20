export default function Button ({isButtonActive}) {
    return (
            <button className={`py-4 px-8 text-center ${isButtonActive ? "bg-darkCyan cursor-pointer" : "bg-lightGrey cursor-default" } rounded-[6px] text-white text-[18px] font-serif leading-6 sm:ml-0`}>Create your plan</button>
    )
}