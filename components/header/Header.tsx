import {LogoImage} from "@/components/LogoImage";
import {HamburgerManu} from "@/components/header/HamburgerManu";
import {NavMenu} from "@/components/header/NavMenu";

export const Header = () => {
    return (
        <header className={"w-full flex justify-between sticky top-0 z-20 backdrop-blur-md shadow sm:px-2.5 md:px-4"}>
            <div className={"p-3 md:p-4"}>
                <LogoImage/>
            </div>
            <div className={"flex items-center"}>
                <div className={"hidden md:block"}>
                    <NavMenu/>
                </div>
                search
                cart
                <div className={"md:hidden"}>
                    <HamburgerManu/>
                </div>
            </div>
        </header>
    )
}