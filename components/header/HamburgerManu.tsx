import {menu} from "@/lib/staticData";
import Image from "next/image";
import Link from "next/link";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {AuthButton} from "@/components/header/AuthButton";

export const HamburgerManu = () => {
    return (
        <Sheet>
            <SheetTrigger className={"flex items-center justify-center"}>
                <Image src={"/svgs/menu_24dp.svg"} alt={"hamburger-menu"} width={22} height={22} className={"sm:w-6 sm:h-6"}/>
            </SheetTrigger>
            <SheetContent>
                <Accordion collapsible type={"single"} className={"w-3/4 ml-3"}>
                    {
                        menu.map((item) => (
                            <>
                                <AccordionItem value={item.title}>
                                    {
                                        item.subMenu.length > 0 ?
                                            <>
                                                <AccordionTrigger className={"hover:text-rose-700"}>
                                                    {item.title}
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <ul className={"px-3 sm:px-4"}>
                                                        {
                                                            item.subMenu.map((subMenu, i) => (
                                                                <Link href={subMenu.url} key={subMenu.title}
                                                                      passHref>
                                                                    <li className={`flex items-center text-sm font-medium py-3.5 sm:py-4 hover:text-rose-700 transition-all ${i < item.subMenu.length - 1 && "border-b"}`}>
                                                                        <Image src={subMenu.icon} alt={"icon"} width={16} height={16} className={"mr-2.5 opacity-60"}/>
                                                                        {subMenu.title}
                                                                    </li>
                                                                </Link>
                                                            ))
                                                        }
                                                    </ul>
                                                </AccordionContent>
                                            </> :
                                            <Link href={item.url}
                                                  className={"flex flex-1 py-4 text-sm font-medium transition-all hover:underline hover:text-rose-700"}>
                                                {item.title}
                                            </Link>
                                    }
                                </AccordionItem>
                            </>
                        ))
                    }
                </Accordion>
                <AuthButton size={"default"}/>
            </SheetContent>
        </Sheet>
    )
}