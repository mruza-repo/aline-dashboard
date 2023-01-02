export default function ServiceSection() {
    return (
        <>
            <section className="lg:mx-32 mx-20 mt-1 my-10">
                <div className="mb-5">
                    <h4 className="text-3xl font-semibold underline">
                        Our Services:
                    </h4>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="min-w-[55%]">
                        <div>
                            <h4 className="text-xl max-w-3xl">
                                We provide a wide range of services which are required by every business owner to make them reach their target audience easier.
                            </h4>
                        </div>
                        <div className="mt-10">
                            <div className="grid grid-cols-2 gap-x-16 gap-y-12 justify-center">
                                <div>
                                    <p className="text-2xl font-medium border-t-4 border-t-black mb-5 pt-2">
                                        Blog
                                    </p>
                                    <p>
                                    A plug and play blog model where you can easily show case your blogs on your website 
                                    </p>
                                </div>
                                <div>
                                    <p className="text-2xl font-medium border-t-4 border-t-black mb-5 pt-2">
                                    Scheduling
                                    </p>
                                    <p>
                                    User can easily schedule an appointments or consultation with secure payment option.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-2xl font-medium border-t-4 border-t-black mb-5 pt-2">
                                    Live chat
                                    </p>
                                    <p>
                                    Real time interaction with customers who are visiting your website, Chat with them like never before
                                    </p>
                                </div>
                                <div>
                                    <p className="text-2xl font-medium border-t-4 border-t-black mb-5 pt-2">
                                    Survey Forms
                                    </p>
                                    <p>
                                    These forms helps you in getting information from your customers, like what they really feel about your services.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-2xl font-medium border-t-4 border-t-black mb-5 pt-2">
                                    CRM
                                    </p>
                                    <p>
                                    Customer Relation Management lets you organise all our customer needs with easy and also helps you in getting new customers
                                    </p>
                                </div>
                                <div>
                                    <p className="text-2xl font-medium border-t-4 border-t-black mb-5 pt-2">
                                    Marketing Tools
                                    </p>
                                    <p>
                                    There are a tone of tools like URL trimmer, QR code generator, email/sms/social media marketing, customer analytics like from where the users are coming and what are interested in, etc.,
                                    </p>
                                </div>
                                <div>
                                    <p className="text-2xl font-medium border-t-4 border-t-black mb-5 pt-2">
                                    And lot more..
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="min-w-[45%]">
                        <div className=" px-10 flex justify-center">
                            <img src="/assets/images/service-section-image.jpeg" className="max max-h-[756px]" alt="" />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}