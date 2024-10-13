import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList, NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {menu} from "@/lib/headerMenuData";

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
                                            <ul className={"p-2"}>
                                                {
                                                    item.subMenu.map((subMenu) => (
                                                        <Link href={subMenu.url} key={subMenu.title} passHref>
                                                            <li className={navigationMenuTriggerStyle()}>
                                                                {subMenu.title}
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