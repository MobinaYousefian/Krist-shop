import {ShoppingCart} from "lucide-react";

export const CartButton = () => {
    return (
        <button className={"block"}>
            <ShoppingCart size={20} className={"text-slate-700 sm:w-6 sm:h-6 cursor-pointer"}/>
        </button>
    )
}