import {LogoImage} from "@/components/LogoImage";
import Image from "next/image";

interface infoList {
    icon: string;
    description: string;
}
const infoList: infoList[] = [
    {
        icon: "/svgs/phone_in_talk_24dp.svg",
        description: "(704) 555-0127",
    },
    {
        icon: "/svgs/mail_24dp.svg",
        description: "krist@example.com",
    },
    {
        icon: "/svgs/location_on_24dp.svg",
        description: "3891 Ranchview Dr. Richardson, California 62639",
    }
];

export const BrandInfo = () => {
    return (
        <div className={"w-full sm:w-1/2 lg:w-1/3 max-w-sm sm:max-w-64 mb-9"}>
            <LogoImage url={"/logo/kristlogo-white.svg"} className={"w-16 md:w-20 lg:w-24"}/>
            {
                infoList.map((info) => (
                    <div className={"flex items-start mt-4 opacity-80"} key={info.icon}>
                        <Image src={info.icon} alt={"phone call"} width={20} height={20} className={"sm:w-6 sm:h-6"}/>
                        <p className={"ml-1.5 text-xs"}>
                            {info.description}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}