import Image from "next/image";

export const CartButton = () => {
    return (
        <button className={"block"}>
            <Image src={"/svgs/shopping_cart_24dp.svg"} alt={"Cart"} width={20} height={20} className={"sm:w-6 sm:h-6 cursor-pointer"}/>
        </button>
    )
}