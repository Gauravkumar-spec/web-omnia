"use client";

import {
    Card,
    CardDescription,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Header from "./Header";
import Button from "./Miscellaneous/button";
import {animate, motion} from "framer-motion"

export default function Hero() {
    return (
        <>
            <div className="h-[80vh] relative bg-[url('/background.jpg')] bg-cover bg-center border border-[#333e41] rounded-4xl">
                <div className="absolute bg-[#1c1d23]/70 inset-0 rounded-4xl"></div>
                <div className="relative">
                    <Header />

                    <div className="container mx-auto px-4 py-8 grid lg:grid-cols-2 gap-12">

                        <div className="flex flex-col justify-center lg:items-start md:items-start sm:items-center text-left text-white">
                            <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, ease:"easeIn"}}>
                            <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
                                Omnia Automation and Beyond
                            </h1>
                            </motion.section>
                            <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.6, duration:1, ease:"easeIn"}}>
                            <p className="lg:text-xl text-base font-medium my-4 opacity-90">
                                Omnia brings the power of data science and artificial intelligence
                                to craft your business.
                            </p>
                            </motion.section>
                            <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1, duration:1, ease:"easeIn"}}>
                            <div className="mt-6">
                                <Button route="/about" content="More Details" />
                            </div>
                            </motion.section>
                        </div>
                        <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2, duration:1, ease:"easeIn"}}>
                        <div className="flex justify-center lg:justify-end">
                            <Card className="w-full lg:w-9/10 bg-[#333e41]/50 border border-[#333e41] rounded-4xl p-5 shadow-xl space-y-5">

                                <div className="flex items-center justify-between bg-[#2e373a] border-b border-[#333e41] px-4 py-2 rounded-2xl text-gray-200 text-sm">
                                    <span>Trusted By</span>
                                    <span className="font-semibold">950+</span>
                                    <svg width="16" height="16" className="opacity-70">
                                        <path d="M4 6l4 4 4-4" stroke="white" strokeWidth="2" fill="none" />
                                    </svg>
                                </div>
                                <div className="relative rounded-3xl overflow-hidden">
                                    <img
                                        src="/background.jpg"
                                        className="absolute inset-0 w-full h-full object-cover opacity-40"
                                    />

                                    <div className="absolute inset-0 bg-black/40" />

                                    <div className="relative p-6 space-y-3 text-white">
                                        <h2 className="text-lg font-semibold">
                                            Ready to Elevate Your Digital Presence?
                                        </h2>

                                        <p className="text-sm leading-relaxed text-gray-200">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus
                                            luctus nec.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-4 rounded-3xl text-white">
                                    <div className="text-4xl font-bold leading-none">
                                        XX<span className="text-teal-300">+</span>
                                    </div>
                                    <div className="w-px h-10 bg-white/10" />
                                    <div className="text-sm font-medium leading-tight text-gray-200">
                                        Years Experience
                                        <br />
                                        <span className="font-normal text-gray-300">A decade of technology.</span>
                                    </div>
                                </div>

                            </Card>

                        </div>
                        </motion.section>
                    </div>
                </div>
            </div>
            <hr className="w-full my-20 border-[#25262c]" />
        </>
    );
}
