import Image from "next/image";
import Link from "next/link";

export const LogoImage = () => {
    return (
        <Link href="/">
            <Image src={"/logo/kristLogo.svg"} alt={"Krist Logo"} width={48} height={48} className={"sm:w-16 lg:w-20"}/>
        </Link>
    )
}