import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {menu} from "@/lib/staticData";
import Image from "next/image";

export const NavMenu = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {
                    menu.map((item) => (
                        <NavigationMenuItem key={item.title}>
                            {
                                item.subMenu.length > 0 ?
                                    <>
                                        <NavigationMenuTrigger>
                                            <Link href={item.url}>{item.title}</Link>
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className={"px-3 py-4"}>
                                                {
                                                    item.subMenu.map((subMenu) => (
                                                        <Link href={subMenu.url} key={subMenu.title} passHref>
                                                            <li className={`${navigationMenuTriggerStyle()} pr-12`}>
                                                                <div className={"flex items-center justify-between"}>
                                                                    <Image src={subMenu.icon} alt={"icon"} width={20} height={20} className={"mr-3 opacity-60"}/>
                                                                    <span>{subMenu.title}</span>
                                                                </div>
                                                            </li>
                                                        </Link>
                                                    ))
                                                }
                                            </ul>
                                        </NavigationMenuContent>
                                    </> :
                                    <Link href={item.url} className={navigationMenuTriggerStyle()}>
                                        {item.title}
                                    </Link>
                            }
                        </NavigationMenuItem>
                    ))
                }
            </NavigationMenuList>
        </NavigationMenu>
    )
}