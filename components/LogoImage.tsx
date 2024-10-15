import Image from "next/image";
import Link from "next/link";

export const LogoImage = ({url, className} : {url: string, className: string}) => {
    return (
        <Link href="/">
            <Image src={url} alt={"Krist Logo"} width={48} height={48} className={className}/>
        </Link>
    )
}