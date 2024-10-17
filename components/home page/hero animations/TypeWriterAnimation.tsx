"use client"
import {useEffect, useState} from "react";
import {TextCursorIcon} from "lucide-react";
import {useHeroAnimationStore} from "@/hooks/zustand/useHeroAnimationStore";

interface TypeWriterAnimationProp {
    texts: string[];
    delay: number;
}
const images = ["/hero-boy.jpg", "/hero-girl.png"];

export const TypeWriterAnimation = ({texts, delay} : TypeWriterAnimationProp) => {
    const setImageUrl = useHeroAnimationStore((state) => state.setImageUrl);

    const [typedText, setTypedText] = useState<string>('');
    const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);


    useEffect(() => {
        const currentText = texts[currentTextIndex];
        const isTyping = typedText.length < currentText.length;

            const typeInterval = setInterval(() => {
                if (isTyping) {
                    setTypedText(prevText => prevText + currentText[prevText.length]);
                } else {
                    const changeTextTimeout = setTimeout(() => {
                        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
                        setTypedText('');
                        /* changing the hero image when the text changes: */
                        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                        setImageUrl(images[currentImageIndex]);
                        /* clear this timeout */
                        clearTimeout(changeTextTimeout);
                    }, 2000);
                }
            }, delay);
        return () => clearInterval(typeInterval);
    }, [texts, delay, typedText, currentTextIndex, currentImageIndex, setImageUrl]);

    return (
        <p className={"flex items-center"}>
            {typedText}
            <TextCursorIcon size={24} strokeWidth={1} className={"animate-blink"}/>
        </p>
    )
}