"use client"
import React from 'react';
import Image from 'next/image';
import BB from './Miscellaneous/BB';
import {motion} from "framer-motion"

export default function Footer() {
    return (
        <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 1 }}
>
        <div className='flex justify-center'>
            <div className="relative w-19/20 bg-[url('/background.jpg')] bg-cover bg-center rounded-4xl my-3 border border-[#333e41]">
            <div className="absolute bg-[#1c1d23]/70 inset-0"></div>
                <BB />
                <div>
                    <div className="pt-4 sm:pt-10 lg:pt-12">
                        <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto relative">
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 pt-10 lg:pt-12 mb-16">
                                <div className="col-span-full lg:col-span-2">
                                    <div className="lg:-mt-2 mb-4">
                                        <Image src="/OmniaLogo.svg" alt="logo" width={200} height="100" />
                                        <a
                                            href="/"
                                            className="inline-flex items-center text-black-800 text-xl md:text-2xl font-bold gap-2"
                                            aria-label="logo"
                                        >
                                            Omnia Automation And Beyond
                                        </a>
                                    </div>

                                    <p className=" sm:pr-8 mb-6">
                                        Your Gateway to Advanced Automation Solutions
                                        You bring the vision. Omnia brings the AI to scale it.
                                    </p>

                                </div>

                                <div>
                                    <div className="font-bold tracking-widest uppercase mb-4">
                                        Products
                                    </div>

                                    <nav className="flex flex-col gap-4">
                                        <div>
                                            <a
                                                href="/Pricing"
                                                className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                                            >
                                                Pricing
                                            </a>
                                        </div>
                                        {/* <div>
                                            <a
                                                href="/partners"
                                                className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                                            >
                                                Partners
                                            </a>
                                        </div> */}

                                        <div>
                                            <a
                                                href="/services"
                                                className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                                            >
                                                Our Services
                                            </a>
                                        </div>
                                    </nav>
                                </div>

                                <div>
                                    <div className="font-bold tracking-widest uppercase mb-4">
                                        Company
                                    </div>

                                    <nav className="flex flex-col gap-4">
                                        <div>
                                            <a
                                                href="about-company"
                                                className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                                            >
                                                About Us
                                            </a>
                                        </div>
                                        <div>
                                            <a
                                                href="/getintouch"
                                                className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                                            >
                                                Contact Us
                                            </a>
                                        </div>
                                    </nav>
                                </div>

                                <div>
                                    <div className="font-bold tracking-widest uppercase mb-4">
                                        Resources
                                    </div>

                                    <nav className="flex flex-col gap-4">
                                        <div>
                                            <a
                                                href="/fandq"
                                                className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                                            >
                                                FAQ
                                            </a>
                                        </div>

                                        <div>
                                            <a
                                                href="/Blogs"
                                                className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                                            >
                                                Blogs
                                            </a>
                                        </div>
                                    </nav>
                                </div>

                                <div>
                                    <div className="font-bold tracking-widest uppercase mb-4">
                                        Legal
                                    </div>

                                    <nav className="flex flex-col gap-4">


                                        <div>
                                            <a
                                                href="/privacy-policy"
                                                className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                                            >
                                                Privacy Policy
                                            </a>
                                        </div>

                                        <div>
                                            <a
                                                href="/refund-policy"
                                                className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                                            >
                                                Refund Policy
                                            </a>
                                        </div>
                                        <div>
                                            <a
                                                href="/terms-and-conditions"
                                                className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                                            >
                                                Terms & Conditions
                                            </a>
                                        </div>

                                        <div>
                                      </div>
                                    </nav>


                                </div>
                            </div>
                            <div className="flex justify-center">
                            <div className="h-12 flex justify-start items-center gap-6">
                                        {[
                                            { href: "https://www.facebook.com/people/Omnia-Automation-and-Beyond/61559960172872/", src: "/assets/images/social_media/facebook.png", alt: "Facebook" },
                                            { href: "https://www.instagram.com/omniaautomation.in?igsh=NzgxZWgyNXQ5b3V4", src: "/assets/images/social_media/instagram.png", alt: "Instagram" },
                                            { href: "https://twitter.com/omniaautomation", src: "/assets/images/social_media/twitter.png", alt: "Twitter" },
                                            { href: "https://www.linkedin.com/company/omnia-automation/", src: "/assets/images/social_media/linkedin.png", alt: "LinkedIn" },
                                            { href: "https://www.youtube.com/@OmniaAIAutomation", src: "/assets/images/social_media/youtube.png", alt: "YouTube" },
                                        ].map((item, i) => (
                                            <a key={i} href={item.href} target="_blank" className="h-12 w-12 flex justify-center items-center">
                                                <Image src={item.src} width={32} height={32} alt={item.alt} />
                                            </a>
                                        ))}
                                    </div>
                                    </div> 
                            <div className="text-sm text-center border-t py-8 mt-2">
                                © 2025 - Omnia Automation & Beyond. All rights reserved.
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
        </motion.section>
    );
}
