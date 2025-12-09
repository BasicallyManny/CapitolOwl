"use client";

import Image from "next/image";
import STONKS from "@/app/assets/carouselImages/STONKS.png";
import type { StaticImageData } from "next/image";


const Hero = () => {
    const images: Array<{image:StaticImageData,HeroText:string,description:string}> = [
        {
            image: STONKS,
            HeroText: "Master Market Analysis with Real Data", 
            description: "Interactive charts. Deep insights. Better decisions." ,    
        },
    ];

    return (
        <div id="HeroContainer" className="h-screen w-screen flex flex-col justify-center items-center bg-[#0A0E1A]">
            <div id="carouselContainer" className="w-full h-full flex ">
                {/* LEFT IMAGE AREA */}
                <div id="heroImage" className="w-1/2 h-full relative">
                    {images.map((element, i) => (
                        <div key={i} className="absolute top-0 left-0 w-full h-full">
                            <Image
                                src={element.image}
                                alt="Hero image"
                                fill
                                className="object-cover fkex items-center justify-center"
                                style={{
                                    filter: "brightness(3.5) contrast(1.2) saturate(1.2)",
                                    maskImage: `linear-gradient(to bottom, black 0%, transparent 100%), linear-gradient(to right, black 0%, transparent 100%), linear-gradient(to top, black 0%, transparent 100%) `,
                                    WebkitMaskImage: `linear-gradient(to bottom, black 0%, transparent 100%), linear-gradient(to right, black 0%, transparent 100%), linear-gradient(to top, black 0%, transparent 100%)`,
                                    maskComposite: 'intersect',
                                    WebkitMaskComposite: 'source-in'
                                }}
                            />
                        </div>
                    ))}
                </div>
                {/* RIGHT SIDE TEXT */}
                <div id="heroRight" className="w-1/2 h-full flex justify-center items-center">
                    {/*HERO TEXT AREA*/}
                    {images.map((images) => (
                        <div id="TextContainer" key={images.HeroText} className="font-extrabold flex flex-col space-y-6 p-7.5">
                            <div id="HeroTitle" className="text-5xl text-white">
                                {images.HeroText}
                            </div>
                            <div id="HeroDescription" className="text-xl text-[#9CA3AF]">
                                {images.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* DOTS */}
            <div id="carouselDots" className="absolute bottom-8 justify-center items-center text-white">
                {images.map(( _,element)=>(
                    <button key={element} className="border-[#686868] border-2 w-5 h-6 mx-2">
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Hero;
