
export default function NewsLetter() {
    return (
        <>
            <section className="lg:mx-32 mx-20 mt-1 my-10 bg-gray-300 h-[356px]">
                <div className="flex flex-row justify-between h-full">
                    <div className="basis-2/3 px-20 flex flex-col justify-center  h-full">
                        <p className="text-5xl font-bold">
                            Interested to here from us, <br/> Subscribe to our news letter
                        </p>
                        <div className="mt-10">
                            <div className="flex flex-row">
                                <input placeholder="Enter your mail" type="text" className="border border-black text-3xl p-2 w-[29rem]" />
                                <button  className="bg-black text-white text-lg font-bold px-5">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center px-20">
                        <img src="/assets/images/subscribe-image.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}