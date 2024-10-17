"use client"
import {useEffect, useState} from "react";
import {TextCursorIcon} from "lucide-react";

interface TypeWriterAnimationProp {
    texts: string[];
    delay: number;
}

export const TypeWriterAnimation = ({texts, delay} : TypeWriterAnimationProp) => {
    const [typedText, setTypedText] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const currentText = texts[currentIndex];
        const isTyping = typedText.length < currentText.length;

            const typeInterval = setInterval(() => {
                if (isTyping) {
                    setTypedText(prevText => prevText + currentText[prevText.length]);
                } else {
                    const changeTextTimeout = setTimeout(() => {
                        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
                        setTypedText('');
                        clearTimeout(changeTextTimeout);
                    }, 2000);
                }
            }, delay);
        return () => clearInterval(typeInterval);
    }, [texts, delay, typedText, currentIndex]);

    return (
        <p className={"flex items-center"}>
            {typedText}
            <TextCursorIcon size={24} strokeWidth={1} className={"animate-blink"}/>
        </p>
    )
}