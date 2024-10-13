import Image from "next/image";

export const CartButton = () => {
    return (
        <button className={"block"}>
            <Image src={"/svgs/cart-outline.svg"} alt={"Cart"} width={20} height={20} className={"sm:w-6 sm:h-6 cursor-pointer"}/>
        </button>
    )
}