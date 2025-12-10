"use client";

import Image from "next/image";
import STONKS from "@/app/assets/carouselImages/STONKS.png";
import LEARN from "@/app/assets/carouselImages/learn.svg";
import UNDERSTAND from "@/app/assets/carouselImages/understand.svg";
import VISUALIZE from "@/app/assets/carouselImages/visualize.svg";
import CapitolOwlLogo_1 from "@/app/assets/carouselImages/CapitolOwlLogo_1.svg"
import type { StaticImageData } from "next/image";
import { useState } from "react";


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
            description: "Start your making smarter decisions today",
        },
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const goToSlide = (index: number) => {
        setCurrentImage(index)
    }

    return (
        <div id="HeroContainer" className="h-screen w-screen flex flex-col justify-center items-center bg-[#0A0E1A]">
            <div id="carouselContainer" className="w-full h-full flex ">
                {/* LEFT IMAGE AREA */}
                <div id="heroImage" className="w-1/2 h-full relative">

                    <div className="absolute top-0 left-0 w-full h-full">
                        {/* IMAGE OVERLAY */}
                        <Image
                            src={images[currentImage].image}
                            alt="Hero image"
                            fill
                            className="object-cover flex items-center justify-center"
                            style={{
                                maskImage: `linear-gradient(to bottom, black 0%, transparent 100%), linear-gradient(to right, black 0%, transparent 100%), linear-gradient(to top, black 0%, transparent 100%) `,
                                WebkitMaskImage: `linear-gradient(to bottom, black 0%, transparent 100%), linear-gradient(to right, black 0%, transparent 100%), linear-gradient(to top, black 0%, transparent 100%)`,
                                maskComposite: 'intersect',
                                WebkitMaskComposite: 'source-in'
                            }}
                        />

                    </div>

                </div>
                {/* RIGHT SIDE TEXT */}
                <div id="heroRight" className="w-1/2 h-full flex justify-center items-center">
                    {/*HERO TEXT AREA*/}

                    <div id="TextContainer" className="font-extrabold flex flex-col space-y-6 p-7.5">
                        <div id="HeroTitle" className="text-5xl text-white">
                            {images[currentImage].HeroText}
                        </div>
                        <div id="HeroDescription" className="text-xl text-[#9CA3AF]">
                            {images[currentImage].description}
                        </div>
                    </div>

                </div>
            </div>
            {/* DOTS */}
            <div id="carouselDots" className="absolute bottom-8 justify-center items-center text-white">
                {images.map((_, element) => (
                    <button key={element} className="border-[#686868] border-2 w-5 h-6 mx-2" onClick={() => goToSlide(element)}>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Hero;
