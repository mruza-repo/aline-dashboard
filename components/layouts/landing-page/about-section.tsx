export default function AboutSection(){
    return (
        <>
        <section className="lg:mx-32 mx-20 mt-1 my-10">
            <div className="mb-5">
                <h4 className="text-3xl font-medium underline">
                    About us:
                </h4>
            </div>
            <div className="flex flex-row justify-between">
                <div className="basis-1/3">
                    <img src="/assets/images/about-section-image.jpeg" alt="" className="border border-r-2 shadow-lg" />
                </div>
                <div className="basis-2/3 px-24 ">
                    <p className="text-4xl mb-5 font-medium">
                    We are team of people who wanted to simply the life of business owners.
                    </p>

                    <p className="text-xl">
                    It is very difficult to mange the digital presence these days, that is the reason we are offering our hands to business owner by providing them all the tools which help in making there business activities simple, as we take the heavy load and letting them focus on their business model.
                    </p>

                </div>
                
            </div>
        </section>
       
        </>
    )
}