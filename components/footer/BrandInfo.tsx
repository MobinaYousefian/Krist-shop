import {LogoImage} from "@/components/LogoImage";
import {LucideMail, MapIcon, PhoneCall} from "lucide-react";
import React, {JSX} from "react";

interface infoList {
    id: number;
    icon: JSX.Element;
    description: string;
}
const infoList: infoList[] = [
    {
        id: 1,
        icon: <PhoneCall size={20} className={"text-slate-50 sm:w-4"}/>,
        description: "(704) 555-0127",
    },
    {
        id: 2,
        icon: <LucideMail size={20} className={"text-slate-50 sm:w-4"}/>,
        description: "krist@example.com",
    },
    {
        id: 3,
        icon: <MapIcon size={20} className={"text-slate-50 sm:w-4"}/>,
        description: "3891 Ranchview Dr. Richardson, California 62639",
    }
];

export const BrandInfo = () => {
    return (
        <div className={"w-full sm:w-1/2 lg:w-1/3 max-w-sm sm:max-w-64 mb-9"}>
            <LogoImage url={"/logo/kristlogo-white.svg"} className={"w-16 md:w-20 lg:w-24"}/>
            {
                infoList.map((info) => (
                    <div className={"flex items-start mt-4 opacity-80"} key={info.id}>
                        {info.icon}
                        <p className={"ml-2 text-xs"}>
                            {info.description}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}