import Image from "next/image";

export const LogoImage = () => {
    return (
        <Image src={"/logo/kristLogo.svg"} alt={"Krist Logo"} width={48} height={48} className={"sm:w-20"}/>
    )
}