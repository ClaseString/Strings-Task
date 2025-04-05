import React, { useEffect, useState, useMemo } from 'react'
import { groupNames } from '../data/names';

export default function Home() {
    // 🔀 Mezclar nombres una sola vez
    const shuffledNames = useMemo(() => {
        return [...groupNames].sort(() => 0.5 - Math.random());
    }, []);

    const fullText = shuffledNames.join(', ');
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + fullText[currentIndex]);
            setCurrentIndex((prev) => prev + 1);
        }, 60); // velocidad de escritura (ms por letra)

        if (currentIndex >= fullText.length) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [currentIndex, fullText]);

    return (
        <div className="container mx-auto p-10">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-primary mb-2">
                    String Methods
                </h1>
                <p className="text-base-content text-opacity-70 text-lg">
                    Directo desde el corazón del
                    <span className="text-primary"> Dream Team </span>
                </p>
                <p className="text-base-content text-opacity-80 text-lg">
                    <span className="text-primary">{displayedText}</span>
                    <span className="animate-pulse">|</span>
                </p>
            </div>

            <div
                tabIndex={0}
                className="bg-base-100 text-primary focus:bg-primary focus:text-base-100 collapse w-2/4 m-auto"
            >
                <div className="collapse-title font-semibold">Clase String</div>
                <div className="collapse-content text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. At ut commodi aspernatur error reprehenderit distinctio aliquam labore, vero voluptates voluptatem et in corporis consequatur doloribus illum, sit ratione. Omnis, quod?
                </div>
            </div>
        </div>
    )
}
