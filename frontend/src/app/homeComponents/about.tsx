
import Image from "next/image";
import analysisIMG from '@/app/assets/aboutImages/analysis.png'
import investIMG from '@/app/assets/aboutImages/invest.png'
import shareIMG from '@/app/assets/aboutImages/share.png'
const About = () => {
    return (
        <div id="AboutContainer" className="overflow-hidden">
            {/* Header Text */}
            <div id="aboutTextWrapper" className="flex flex-col items-center justify-center text-white py-5 gap-2.5">
                <h1 className="text-center font-bold text-2xl w-5/6 sm:w-2/3 md:w-3/4 md:text-3xl">
                    Think of us as the bridge between confusion and confidence.
                </h1>
                <p className="text-center text-sm sm:text-base w-3/4 md:w-2/3">
                    Learn, analyze, and invest with clarity
                </p>
            </div>

            {/* Cards Wrapper */}
            <div
                id="aboutCards"
                className="flex flex-col md:flex-row justify-center items-stretch py-5 px-6 md:px-5 gap-5"
            >
                {/* Left Column (md only vertical stack) */}
                <div className="flex flex-col gap-5 w-full md:w-2/5">
                    {/* Card 1 */}
                    <div className="border-2 border-[#2D3B4A] bg-[#131823] rounded-lg p-4 space-y-3">
                        <h2 className="text-white font-bold text-sm sm:text-base md:text-lg">
                            Start Your Investing Journey
                        </h2>
                        <p className="text-white font-bold text-sm sm:text-base">
                            New to investing? Learn the basics from opening an account to making your first trade.
                        </p>

                        <div className="flex w-full items-start">
                            <Image
                                src={investIMG}
                                alt="Investing"
                                width={200}
                                height={200}
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="border-2 border-[#2D3B4A] bg-[#131823] rounded-lg p-4 space-y-3">
                        <h2 className="text-white font-bold text-sm sm:text-base md:text-lg">
                            Share your progress
                        </h2>
                        <p className="text-white font-bold text-sm sm:text-base">
                            Post and share your investment journey. Look at what others are achieving.
                        </p>

                        <div className="flex w-full items-start">
                            <Image
                                src={shareIMG}
                                alt="Sharing progress"
                                width={200}
                                height={200}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column (md: takes 1/5 width, full width on mobile) */}
                <div className="flex w-full md:w-1/5">
                    <div className="flex flex-col gap-5 items-center justify-center border-2 border-[#2D3B4A] bg-[#131823] rounded-lg p-4 space-y-3 w-full h-full">
                        <h2 className="text-white w-full font-bold text-left text-sm sm:text-base md:text-lg">
                            Level Up Your Analysis
                        </h2>
                        <p className="text-white font-bold text-sm sm:text-base">
                            Ready to go deeper? Explore intermediate topics like fundamental analysis.
                        </p>

                        <div className="flex w-full items-center justify-center">
                            <Image
                                src={analysisIMG}
                                alt="Analysis"
                                width={200}
                                height={200}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default About    