import {Button} from "@/components/ui/button";
import {ArrowRightIcon} from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className={"w-full bg-[#f3f3f3] flex flex-col items-center sm:flex-row sm:justify-between sm:px-12 md:px-20 lg:px-36 xl:px-56"}>
            <div className={"py-10 text-slate-900"}>
                <p className={"font-semibold text-xl lg:text-2xl lg:mb-1"}>Classic Exclusive</p>
                <p className={"font-black text-[1.75rem] lg:text-3xl lg:mb-1"}>Women&#39;s collection</p>
                <p className={"font-medium mb-4 sm:mb-6 lg:text-lg"}>UPTO 40% OFF</p>
                <Link href={"/shop"}>
                    <Button className={"h-8 text-xs px-3 sm:h-9 sm:px-4 lg:h-10 lg:px-6 lg:text-sm group"}>
                        Shop Now
                        <ArrowRightIcon className={"w-4 ml-1.5 group-hover:translate-x-0.5 duration-75"}/>
                    </Button>
                </Link>
            </div>
            <div className={"bg-[url('/hero-girl.png')] bg-cover w-full max-w-xs h-[472px] sm:w-1/2"}/>
        </section>
    )
}