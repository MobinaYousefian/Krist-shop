import Link from "next/link";
import {Button} from "@/components/ui/button";

interface authProps {size: "default" | "sm" | "lg" | "icon" | null }

export const AuthButton = ({size} : authProps) => {
    return (
        <Link href={"/auth"}>
            <Button size={size} className={"mt-7 md:mt-0 px-4 text-xs lg:text-sm"}>
                <span className={"mr-1"}>Login</span> | <span className={"ml-1"}>Sign up</span>
            </Button>
        </Link>
    )
}