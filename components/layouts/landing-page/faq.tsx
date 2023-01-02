export default function FAQ() {
    return (
        <>
            <section className="lg:mx-32 mx-20 mt-1 my-10 ">
                <div className="mb-5">
                    <h4 className="text-3xl font-semibold underline">
                        FAQ:
                    </h4>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="min-w-[35%]">
                        <p className="text-xl font-medium mb-3 mt-5">
                            Frequently asked questions
                        </p>
                        <p>
                            Can’t find answer here?
                            contact our support?
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-12">
                        <div >
                            <p className="text-xl font-medium mb-3">
                                Can I Use it for free?
                            </p>
                            <p className="text-lg font-light">
                                Yes you can, but you would be limited on number features and other metrics, as long as you inside those limits all services are absolutely free of cost.
                            </p>
                        </div>
                        <div >
                            <p className="text-xl font-medium mb-3">
                                Are all services mentioned above are live?
                            </p>
                            <p className="text-lg font-light">
                                No, Only a few are live know we are continuously developing new features and all the services will be in live soon.
                            </p>
                        </div>
                        <div >
                            <p className="text-xl font-medium mb-3">
                                Should I have to pay for individual services?
                            </p>
                            <p className="text-lg font-light">
                                No, you need not to pay for individual services, if you had purchased a subscription based on what the subscription offers you would be able to use those all.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}