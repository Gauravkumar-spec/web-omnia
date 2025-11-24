import Card from "./Miscellaneous/card"
import Border from "./Miscellaneous/Border"
export default function Services() {
    return (
        <>
            <div className="flex justify-center w-full my-10">
                <Border className="h-7 w-40" content="Our Services" />
            </div>
            <section className="">
                <div className="container px-6 mx-auto">
                    <div className="flex items-center xl:gap-7 gap-20 flex-col xl:flex-row">
                        <div className="max-w-2xl space-y-4 text-left xl:w-1/2 w-full">
                            <h2 className="text-5xl sm:text-[52px] font-bold">
                                Services We Offer
                            </h2>
                            <p className="">
                                Unlock the power of data with our ETL as a Service, ensuring seamless data integration and transformation.
                                Elevate customer interactions with our personalized chatbots and AI-based services.
                                Optimize operations with our managed DevOps and SRE expertise.
                                Engage your audience effortlessly using our innovative WhatsApp bots.
                                Transform your business with our comprehensive, cutting-edge solutions.

                            </p>
                            <img src="/services.jpg" className="rounded-4xl"></img>
                        </div>
                        <div className="p-6 xl:w-1/2 w-full flex flex-col gap-6 rounded-2xl ">
                            <Card title="ETL as a service" content="Empowering Your Data Journey: Seamless ETL Solutions Tailored Just for You!"></Card>
                            <Card title="Personalised Chatbots/AI Based Services" content="Revolutionizing Customer Support: Unleash the Future with Omnia ChatBot"></Card>
                            <Card title="Managed DevOps/SRE" content="Empowering Growth, One DevOps Solution at a Time: Your Path to Seamless Operations and Reliability!"></Card>
                            <Card title="WhatsApp Bots" content="WhatsApp Assist: Unleash the Future with Omnia WhatsAppBots!"></Card>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="w-[100%] my-20 border-[#25262c]" />
        </>
    );
}
