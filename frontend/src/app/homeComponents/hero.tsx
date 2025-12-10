"use client";

import STONKS from "@/app/assets/carouselImages/STONKS.png";
import LEARN from "@/app/assets/carouselImages/learn.svg";
import UNDERSTAND from "@/app/assets/carouselImages/understand.svg";
import VISUALIZE from "@/app/assets/carouselImages/visualize.svg";
import CapitolOwlLogo_1 from "@/app/assets/carouselImages/CapitolOwlLogo_1.svg"
import type { StaticImageData } from "next/image";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
    const images: Array<{ image: StaticImageData, HeroText: string, description: string }> = [
        {
            image: STONKS,
            HeroText: "Master Market Analysis with Real Data",
            description: "Interactive charts. Deep insights. Better decisions.",
        },
        {
            image: VISUALIZE,
            HeroText: "Visualize Any Company's Financial Health",
            description: "Revenue trends, debt analysis, stock performance - all in one place",
        },
        {
            image: LEARN,
            HeroText: "Learn from Real Investors",
            description: "Read investment journeys. Share your story. Grow together.",
        },
        {
            image: UNDERSTAND,
            HeroText: "Understand the Numbers That Matter",
            description: "P/E ratios, debt-to-equity, revenue growth - explained simply",
        },
        {
            image: CapitolOwlLogo_1,
            HeroText: "Ready to Invest Smarter?",
            description: "Start making smarter decisions today",
        },
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const imagesLength = useMemo(() => images.length, [images.length]); // Memoize the length
    const goToSlide = (index: number) => {
        setCurrentImage(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentImage, images.length, imagesLength]);

    return (
        <div id="HeroContainer" className="relative h-screen w-screen bg-[#0A0E1A]">
            {/* TEXT CONTENT LAYER */}
            <div className="relative z-20 h-full flex items-center justify-center px-6 md:px-12">
                <AnimatePresence mode="wait">
                    <motion.div 
                        id="TextContainer" 
                        className="font-extrabold flex flex-col space-y-4 md:space-y-6 text-center max-w-4xl" 
                        key={currentImage} 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white">
                            {images[currentImage].HeroText}
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-200">
                            {images[currentImage].description}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* DOTS */}
            <div id="carouselDots" className="absolute bottom-30 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                {images.map((_, index) => (
                    <button 
                        key={index} 
                        className={`h-3 rounded-full transition-all ${
                            index === currentImage
                                ? 'bg-white w-8'
                                : 'bg-white/50 w-3 hover:bg-white/75'
                        }`} 
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;