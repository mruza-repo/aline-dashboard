export default function HeroSection() {
    return (
        <>
            <section className="md:h-[512px] h-[256px] flex flex-col justify-center items-center gap-y-12 lg:mx-32 mx-20">

                <div className="text-center">
                    <h2 className="md:text-6xl text-4xl font-bold max-w-2xl">
                        We will help <u>analyze</u> and find the right solution
                    </h2>
                </div>
                <div>
                    <div className="flex flex-row items-center gap-x-8">
                        <div>
                            <button className="py-3 px-8 font-medium bg-black text-white">
                                Try For Free
                            </button>
                        </div>
                        <div>
                            <p className="font-medium text-xl cursor-pointer">
                                Contact us
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex flex-col justify-center items-center lg:mx-32 mx-20">
                <img src="/assets/images/hero-section-image.png" alt="" />
            </div>
        </>
    )
}