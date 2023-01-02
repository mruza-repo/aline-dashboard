export default function WeOffer(){
    return(
        <>
        <section className="lg:mx-32 mx-20 mt-1 my-10 bg-black text-white h-[356px]">
            <div className="flex justify-center">
                <h4 className="mt-10 font-semibold text-4xl underline"> 
                    What we offer
                </h4>
            </div>
            <div className="flex flex-row justify-around gap-x-32 px-24 mt-16">
                <div>
                    <p className="mb-5 text-3xl font-medium">
                    99.9% Uptime
                    </p>
                    <p className="text-lg font-light">
                    All our services are  highly scaleable and able manage any kind of load
                    </p>
                </div>
                <div>
                    <p className="mb-5 text-3xl font-medium">
                    24/7 Support
                    </p>
                    <p className="text-lg font-light">
                    Best in class support for all our valuable customer, we are there to support you all the time                    </p>
                </div>
                <div>
                    <p className="mb-5 text-3xl font-medium">
                    Security
                    </p>
                    <p className="text-lg font-light">
                    We follow industry level encryption in order to keep your data safe
                    </p>
                </div>

            </div>
        </section>
        </>
    )
}