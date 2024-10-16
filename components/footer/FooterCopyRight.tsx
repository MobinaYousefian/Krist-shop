import {InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon} from "@radix-ui/react-icons";

export const FooterCopyRight = () => {
    return (
        <div className={"w-full flex flex-col sm:flex-row items-center sm:justify-between sm:items-start"}>
            <p className={"opacity-75 text-xs"}>
                @2023 Krist all rights are reserved
            </p>
            <div className={"flex items-start my-4 sm:my-0"}>
                <InstagramLogoIcon className={"text-slate-50 sm:w-6 sm:h-6 mr-1.5 opacity-95 cursor-pointer"}/>
                <TwitterLogoIcon className={"text-slate-50 sm:w-6 sm:h-6 mr-1.5 opacity-95 cursor-pointer"}/>
                <LinkedInLogoIcon className={"text-slate-50 sm:w-6 sm:h-6 mr-1.5 opacity-95 cursor-pointer"}/>
            </div>
        </div>
    )
}