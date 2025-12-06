const About = () => {
    return (
        <div id="AboutContainer">
            <div id="aboutTextWrapper" className="flex flex-col items-center justify-center text-white py-5 gap-2.5">
                <h1 className="text-center font-bold text-2xl w-5/6 sm:w-2/3 md:w-3/4 md:text-3xl">
                    Think of us as the bridge between confusion and confidence.
                </h1>
                <p className="text-center text-sm sm:text-base w-1/3 sm:w-2/3 md:w-3/4">
                    Learn, analyze, and invest with clarity
                </p>
            </div>

            <div id="aboutCards" className="flex flex-col md:flex-row justify-center align-middle items-stretch py-5 px-12.5 md:px-5 gap-5">
                {/* Vertical Cards */}
                <div className="flex flex-col gap-5 w-full md:w-2/5">
                    <div className="border-2 border-white rounded-lg p-2.5 space-y-2.5">
                        <h2 className="text-white font-bold text-sm sm:text-base md:text-lg">
                            Start Your Investing Journey
                        </h2>
                        <p className="text-white font-bold text-sm sm:text-base">
                            New to investing? Learn the basics from opening an account to making your first trade.
                        </p>
                    </div>
                    <div className="border-2 border-white rounded-lg p-2.5 space-y-2.5">
                        <h2 className="text-white font-bold text-sm sm:text-base md:text-lg">
                            Share your progress
                        </h2>
                        <p className="text-white font-bold text-sm sm:text-base">
                            Post and share your investment journey. Look at what others are achieving.
                        </p>
                    </div>
                </div>

                {/* Horizontal Card */}
                <div className="flex items-center w-full md:w-1/5">
                    <div className="border-2 border-white rounded-lg p-2.5 space-y-2.5 w-full">
                        <h2 className="text-white font-bold text-sm sm:text-base md:text-lg">
                            Level Up Your Analysis
                        </h2>
                        <p className="text-white font-bold text-sm sm:text-base">
                            Ready to go deeper? Explore intermediate topics like fundamental analysis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default About    