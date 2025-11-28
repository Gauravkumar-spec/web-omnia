// "use client"
// import {
//     Card,
//     CardAction,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"
// import Header from "./Header"
// import Button from "./Miscellaneous/button"


// export default function Hero() {

//     return (
//         <>
//             <div className="relative bg-[url('/background.jpg')] h-auto bg-cover bg-center border border-[#333e41] rounded-4xl">
//                 <div className="relative bg-[#1c1d23]/70 inset-0 flex flex-wrap rounded-4xl">
//                     <Header />
//                     <div className="flex flex-wrap xl:flex-nowrap container mx-[2rem] justify-between py-[2rem] ">
//                         <div className="flex sm:mt-10 flex-col text-left px-2">
//                             <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
//                                 Omnia Automation <br /> and Beyond
//                             </h1>

//                             <p className="text-basis lg:text-xl font-medium my-4 opacity-90">
//                                 Omnia brings the power of data science and artificial intelligence <br /> to
//                                 craft your business.
//                             </p>
//                             <div className="mt-5">
//                                 <>
//                                     {/* <button className="px-6 py-3  border-2 flex items-center  sm:text-lg font-bold rounded-3xl glass transition-colors duration-500 text-white "> */}
//                                     <Button route="/about" content="More Details" />
//                                     {/* </button> */}
//                                 </>
//                             </div>
//                         </div>
//                         <div className="relative xl:-top-6">
//                             <Card className="h-120 w-130 bg-[#333e41]/50 border border-[#333e41] rounded-4xl">
//                                 <div className="relative h-120 w-119 ml-10 bg-[#2e373a] border-r-0 rounded-l-4xl">
//                                     <CardHeader className="border border-[#333e41] border-r-0 text-white rounded-l-4xl mt-2 ml-8 h-10 flex items-center">
//                                         <CardTitle>Card Title</CardTitle>
//                                     </CardHeader>
//                                 </div>
//                                 <div className="absolute top-25">
//                                     <CardContent className="bg-[url('/background.jpg')] bg-cover h-50 w-105 ml-5 rounded-4xl text-white flex flex-col justify-center gap-12">
//                                         <div className="absolute inset-0 bg-[#1c1d23]/70 h-50 w-105 ml-5 rounded-4xl"></div>
//                                             <h1 className="relative text-lg font-bold">Ready to Elevate Your Digital Presence?</h1>
//                                             <CardDescription><p className="relative font-bold"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat lectus sed justo malesuada</p></CardDescription>
//                                     </CardContent>
//                                     <CardFooter>
//                                         <div className="ml-12 mt-6 text-white font-bold border border-[#333e41] rounded-4xl h-30 flex items-center">
//                                             <CardContent>
//                                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat lectus sed justo malesuada, nec fermentum felis gravida.
//                                             </CardContent>
//                                         </div>
//                                     </CardFooter>
//                                 </div>
//                             </Card>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <hr className="w-[100%] my-20 border-[#25262c]" />
//         </>
//     );
// }

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
import {motion} from "framer-motion"

export default function Hero() {
    return (
        <>
            <div className="relative bg-[url('/background.jpg')] bg-cover bg-center border border-[#333e41] rounded-4xl">
                <div className="absolute bg-[#1c1d23]/70 inset-0 rounded-4xl"></div>
                <div className="relative">
                    {/* HEADER */}
                    <Header />

                    {/* HERO MAIN GRID */}
                    <div className="container mx-auto px-4 py-8 grid lg:grid-cols-2 gap-12">

                        {/* LEFT SIDE — TEXT */}
                        <div className="flex flex-col justify-center lg:items-start md:items-start sm:items-center text-left text-white">
                            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, ease:"easeIn"}}>
                            <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
                                Omnia Automation and Beyond
                            </h1>
                            </motion.div>
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
                            {/* <Card className="w-full bg-[#333e41]/50 border border-[#333e41] rounded-4xl relative overflow-hidden">

                <div className="bg-[#2e373a] border-b border-[#333e41] p-4 rounded-t-4xl">
                  <CardHeader className="p-0">
                    <CardTitle className="text-white">Card Title</CardTitle>
                  </CardHeader>
                </div>

                <CardContent className="relative bg-[url('/background.jpg')] bg-cover text-white p-6">
                  <div className="absolute inset-0 bg-[#1c1d23]/70 rounded-b-4xl"></div>
                  <div className="relative z-10 space-y-4">
                    <h1 className="text-xl font-bold">
                      Ready to Elevate Your Digital Presence?
                    </h1>

                    <CardDescription className="font-bold">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                      feugiat lectus sed justo malesuada.
                    </CardDescription>
                  </div>
                </CardContent>

                <CardFooter className="p-6 text-white">
                  <div className="border border-[#333e41] rounded-4xl p-4 font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    feugiat lectus sed justo malesuada, nec fermentum felis gravida.
                  </div>
                </CardFooter>

              </Card> */}
                            <Card className="w-full lg:w-9/10 bg-[#333e41]/50 border border-[#333e41] rounded-4xl p-5 shadow-xl space-y-5">

                                {/* Trusted By Row */}
                                <div className="flex items-center justify-between bg-[#2e373a] border-b border-[#333e41] px-4 py-2 rounded-2xl text-gray-200 text-sm">
                                    <span>Trusted By</span>
                                    <span className="font-semibold">950+</span>
                                    <svg width="16" height="16" className="opacity-70">
                                        <path d="M4 6l4 4 4-4" stroke="white" strokeWidth="2" fill="none" />
                                    </svg>
                                </div>

                                {/* Main Highlight Card */}
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

                                {/* Bottom Stats */}
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

            {/* DIVIDER */}
            <hr className="w-full my-20 border-[#25262c]" />
        </>
    );
}
