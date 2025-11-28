"use client"
// import Card from "./Miscellaneous/card"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import Border from "./Miscellaneous/Border"
import { useState, useEffect } from "react"
export default function Services() {
    const [index, setIndex] = useState(0);

    const titles = [
        "ETL as a service",
        "Personalised Chatbots/AI Based Services",
        "Managed DevOps/SRE",
        "WhatsApp Bots",
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (

        <>
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeIn" }}>
                    <div className="flex justify-center w-full my-10">
                        <Border className="h-7 w-40" content="Our Services" />
                    </div>
                </motion.section>
                <section className="">
                    <div className="container px-6 mx-auto">
                        <div className="flex items-center xl:gap-7 gap-20 flex-col xl:flex-row">
                            <div className="max-w-2xl space-y-4 text-left xl:w-1/2 w-full">
                                <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeIn" }}>
                                    <h2 className="text-5xl sm:text-[52px] font-bold">
                                        Services We Offer
                                    </h2>
                                </motion.section>
                                <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: .6, duration: 1, ease: "easeIn" }}>
                                    <p className="">
                                        Unlock the power of data with our ETL as a Service, ensuring seamless data integration and transformation.
                                        Elevate customer interactions with our personalized chatbots and AI-based services.
                                        Optimize operations with our managed DevOps and SRE expertise.
                                        Engage your audience effortlessly using our innovative WhatsApp bots.
                                        Transform your business with our comprehensive, cutting-edge solutions.

                                    </p>
                                </motion.section>
                                <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1, duration: 1, ease: "easeIn" }}>
                                    <img src="/services.jpg" className="rounded-4xl" />
                                </motion.section>
                            </div>
                            <div className="p-6 xl:w-1/2 w-full rounded-2xl ">

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.9 }}
                                        className="text-center text-xl font-semibold text-white"
                                    >
                                        <div className="relative w-[700px] h-[600px] mx-auto">
                                            {/* TV Frame */}
                                            <img
                                                src="/tv.png"
                                                className="absolute inset-0 w-full h-full object-contain -z-1"
                                            />
                                            <Card className="w-[82%] h-[52%] relative bg-[url('/Background_06.jpg')] bg-left top-30 left-16 border-none text-white">
                                                <div className="absolute bg-[#1c1d23]/70 inset-0"></div>

                                                <CardHeader className="relative top-25">
                                                    <CardTitle><h1 className="text-4xl">{titles[index]}</h1></CardTitle>
                                                </CardHeader>
                                            </Card>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </section>
            </motion.section>
            <hr className="w-[100%] my-20 border-[#25262c]" />
        </>
    );
}
