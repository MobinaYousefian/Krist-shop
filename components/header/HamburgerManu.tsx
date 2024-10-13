import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {menu} from "@/lib/headerMenuData";

export const HamburgerManu = () => {
    return (
        <Sheet>
            <SheetTrigger className={"p-3"}>
                <Image src={"radix-icons/hamburger-menu.svg"} alt={"hamburger-menu"} width={20} height={20} className={"sm:w-7"}/>
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
                                                                    <li className={`text-sm font-medium py-3 sm:py-4 hover:text-rose-700 transition-all ${i < item.subMenu.length - 1 && "border-b"}`}>
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
                <Button asChild className={"mt-7 px-4 mx-auto"}>
                    <Link href={"/auth"}>Login | Sign Up</Link>
                </Button>
            </SheetContent>
        </Sheet>
    )
}