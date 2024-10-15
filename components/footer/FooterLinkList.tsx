import {footerLinks} from "@/lib/staticData";
import Link from "next/link";

interface FooterLinkListProp {
    title: string;
    data: footerLinks[];
}
export const FooterLinkList = ({title, data}: FooterLinkListProp) => {
    return (
        <ul>
            <h6 className={"mb-2 font-semibold"}>{title}</h6>
            {
                data.map((footerLink) => (
                    <Link href={footerLink.url} key={footerLink.title}>
                        <li className={"text-xs opacity-75 py-1.5 hover:opacity-100 duration-150"}>
                            {footerLink.title}
                        </li>
                    </Link>
                ))
            }
        </ul>
    )
}