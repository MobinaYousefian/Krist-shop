import {Newsletter} from "@/components/footer/Newsletter";
import {BrandInfo} from "@/components/footer/BrandInfo";
import {FooterLinkList} from "@/components/footer/FooterLinkList";
import {footerLinks1, footerLinks2} from "@/lib/staticData";

export const Footer = () => {
    return (
        <footer className={"p-9 md:p-12 lg:px-20 z-20 flex justify-center flex-wrap sm:items-start sm:justify-between bg-slate-950 text-slate-50 dark:bg-slate-50 dark:text-slate-950"}>
            <BrandInfo/>
            <div className={"w-full sm:w-1/2 lg:w-1/3 max-w-sm sm:max-w-96 mb-9 flex items-start justify-between"}>
                <FooterLinkList title={"Information"} data={footerLinks1}/>
                <FooterLinkList title={"Service"} data={footerLinks2}/>
            </div>
            <Newsletter/>
            <div className={"w-full h-0.5 border-b-slate-50 border-b opacity-25 my-7 mb-2"}/>
        </footer>
    )
}