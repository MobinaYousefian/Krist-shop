import {JSX} from "react";
import {CircleDollarSignIcon, HeadsetIcon, PackageIcon, WalletIcon} from "lucide-react";

interface services {
    icon: JSX.Element,
    title: string,
    description: string,
}
const services: services[] = [
    {
        icon: <PackageIcon strokeWidth={1} size={24} opacity={0.7}/>,
        title: "Free Shipping",
        description: "Free shipping for orders above $150",
    },
    {
        icon: <CircleDollarSignIcon strokeWidth={1} size={24} opacity={0.7}/>,
        title: "Money Guarantee",
        description: "Within 30 days for an exchange",
    },
    {
        icon: <HeadsetIcon strokeWidth={1} size={24} opacity={0.7}/>,
        title: "Online Support",
        description: "24 hours a day, 7 days a week",
    },
    {
        icon: <WalletIcon strokeWidth={1} size={24} opacity={0.7}/>,
        title: "Flexible Payment",
        description: "Pay with multiple credit cards",
    }
];

export const CustomerService = () => {
    return (
        <section className={"bg-white w-4/6 sm:w-3/4 md:w-4/5 mx-auto absolute right-[16%] sm:right-[12%] md:right-[10%] z-10 flex justify-center items-start flex-wrap -mt-14 shadow-lg p-2 lg:py-4 rounded-sm"}>
            {
                services.map((service) => (
                    <div className={"p-4 w-full sm:w-1/2 md:w-1/4 flex-col flex justify-center items-center text-center"} key={service.title}>
                        {service.icon}
                        <p className={"text-xs lg:text-sm font-medium mt-2"}>{service.title}</p>
                        <p className={"text-xs font-light lg:font-normal mt-1"}>{service.description}</p>
                    </div>
                ))
            }
        </section>
    )
}