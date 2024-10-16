import {Search} from "lucide-react";

export const SearchButton = () => {
    return (
        <button className={"block"}>
            <Search size={20} className={"text-slate-700 sm:w-6 sm:h-6 cursor-pointer"}/>
        </button>
    )
}