import {LogoImage} from "@/components/LogoImage";
import {HamburgerManu} from "@/components/header/HamburgerManu";
import {NavMenu} from "@/components/header/NavMenu";
import {CartButton} from "@/components/header/CartButton";
import {AuthButton} from "@/components/header/AuthButton";
import {SearchButton} from "@/components/header/SearchButton";

export const Header = () => {
    return (
        <header className={"w-full flex justify-between items-center sticky top-0 z-20 bg-[#FFFFFFAD] backdrop-blur-sm shadow py-1.5 px-4 sm:px-6 md:px-8 lg:px-9"}>
            <div className={"py-3 md:py-4"}>
                <LogoImage url={"/logo/kristLogo.svg"} className={"sm:w-16 lg:w-20"}/>
            </div>
            <div className={"hidden md:block"}>
                <NavMenu/>
            </div>
            <div className={"flex items-center"}>
                <div className={"px-2 lg:px-2.5"}>
                    <SearchButton/>
                </div>
                <div className={"px-2 lg:px-2.5"}>
                    <CartButton/>
                </div>
                <div className={"hidden md:block pl-2 lg:pl-2.5"}>
                    <AuthButton size={"sm"}/>
                </div>
                <div className={"md:hidden pl-2"}>
                    <HamburgerManu/>
                </div>
            </div>
        </header>
    )
}