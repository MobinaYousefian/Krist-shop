import Image from "next/image";

export const SearchButton = () => {
    return (
        <button className={"block"}>
            <Image src={"/svgs/search_24dp.svg"} alt={"Search"} width={20} height={20} className={"sm:w-6 sm:h-6 cursor-pointer"}/>
        </button>
    )
}