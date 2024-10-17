"use client"
import {useHeroAnimationStore} from "@/hooks/zustand/useHeroAnimationStore";
import Image from "next/image";

export const ImageChangeAnimation = () => {
    const imageUrl = useHeroAnimationStore((state) => state.imageUrl);

    return (
        <Image
            src={imageUrl}
            alt={imageUrl.split("/")[1]}
            width={849}
            height={1280}
            className={"w-full h-full transition-opacity fading-image"}
        />
    )
}