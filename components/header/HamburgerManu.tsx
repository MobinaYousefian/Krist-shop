import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Button} from "@/components/ui/button";

const shopSubMenu: {title: string, url: string}[] = [
    {
        title: "electronics",
        url: "/shop/electronics"
    },
    {
        title: "jewelery",
        url: "/shop/jewelery"
    },
    {
        title: "men's clothing",
        url: "/shop/clothing"
    },
]

export const HamburgerManu = () => {
    return (
        <Sheet>
            <SheetTrigger className={"p-3"}>
                <Image src={"radix-icons/hamburger-menu.svg"} alt={"hamburger-menu"} width={20} height={20} className={"sm:w-7"}/>
            </SheetTrigger>
            <SheetContent>
                <Accordion collapsible type={"single"} className={"w-3/4 ml-3"}>
                    {/*item 1*/}
                    <AccordionItem value={"Home"}>
                        <Link href={"/"} className={"flex flex-1 py-4 text-sm font-medium transition-all hover:underline hover:text-rose-700"}>Home</Link>
                    </AccordionItem>
                    {/*item 2*/}
                    <AccordionItem value={"shop"}>
                        <AccordionTrigger className={"hover:text-rose-700"}>
                            Shop
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className={"px-3 sm:px-4"}>
                                {
                                    shopSubMenu.map((item, i) => (
                                        <Link href={item.url} key={item.title} passHref>
                                            <li className={`text-sm font-medium py-3 sm:py-4 hover:text-rose-700 transition-all ${i < shopSubMenu.length-1 && "border-b"}`}>
                                                {item.title}
                                            </li>
                                        </Link>
                                    ))
                                }
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    {/*item 3*/}
                    <AccordionItem value={"contact"}>
                        <Link href={"/contact"} className={"flex flex-1 py-4 text-sm font-medium transition-all hover:underline hover:text-rose-700"}>Contact Us</Link>
                    </AccordionItem>
                    {/*item 4*/}
                    <AccordionItem value={"blog"}>
                        <Link href={"/blog"} className={"flex flex-1 py-4 text-sm font-medium transition-all hover:underline hover:text-rose-700"}>Blog</Link>
                    </AccordionItem>
                    <Button asChild className={"mt-7 px-4 mx-auto"}>
                        <Link href={"/auth"}>Login | Sign Up</Link>
                    </Button>
                </Accordion>
            </SheetContent>
        </Sheet>
    )
}