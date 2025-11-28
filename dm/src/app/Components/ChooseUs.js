"use client"
import Button from "./Miscellaneous/button";
import { useEffect } from "react";
import { useState } from "react";
import Border from "./Miscellaneous/Border"
import {motion} from "framer-motion"

export default function ChooseUs() {

  return (
    <div className="relative">
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 1 }}
>
      <div className="flex flex-col items-center justify-center w-full mb-10">
        <section className="container max-w-2xl mx-auto text-center relative top-6">
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeIn" }}>
          <h1 className="text-4xl font-bold">
            Why Choose Omnia Chatbot?
          </h1>
          </motion.section>
        </section>
      </div>
      <section className="flex flex-wrap py-5 container mx-auto justify-around items-center">
        <div className="md:w-1/2">
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay: .4, duration: 1, ease: "easeIn" }}>
          <Border className="h-7 w-70" content="Choose Us" />
          </motion.section>
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay: .9, duration: 1, ease: "easeIn" }}>
          <h1 className="text-4xl leading-[100%] sm:text-[50px] font-bold mt-3">
            Performance That Speaks for Itself.
          </h1>
          </motion.section>
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay: 1.2, duration: 1, ease: "easeIn" }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat lectus sed justo malesuada, nec fermentum felis gravida. In pretium risus in nulla viverra, a iaculis ex aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras vulputate lacus non sapien ullamcorper, at scelerisque velit ultricies.
          </p>
          </motion.section>
        </div>
        <div className="relative md:w-1/2 w-full bg-[url('/background.jpg')] bg-cover bg-center border border-[#333e41] rounded-xl flex flex-col justify-center">
          <div className="absolute bg-[#1c1d23]/70 inset-0"></div>
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay: 1.5, duration: 1, ease: "easeIn" }}>
          <div className="relative my-6 text-left w-4/5 mx-auto bg-[#333e41]/50 border border-[#394146] pr-10 rounded-4xl flex items-center hover:scale-110 transition-transform duration-300">
            <div className="h-15 w-15 bg-[#333e41] border border-[#394146] rounded-2xl flex items-center justify-center m-5">
              <img src="/svgs/globe.svg" className="w-6 h-6"></img>
            </div>

            <div>
              <h1 className="text-2xl font-bold text-left">Where in the World is Omnia?</h1>
              <p className="text-md max-w-xs text-left">
                Global Reach, Local Impact
              </p>
            </div>
          </div>
          </motion.section>
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay: 2, duration: 1, ease: "easeIn" }}>
          <div className="relative my-6 text-left w-4/5 mx-auto bg-[#333e41]/50 border border-[#394146] pr-10 rounded-4xl flex items-center hover:scale-110 transition-transform duration-300">
            <div className="h-15 w-15 bg-[#333e41] border border-[#394146] rounded-2xl flex items-center justify-center m-5">
              <img src="/svgs/bank.svg" className="w-6 h-6"></img>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-left">Maximized ROI</h1>
              <p className="text-md max-w-xs text-left">
                Omnia's Unbeatable Value Proposition
              </p>
            </div>
          </div>
          </motion.section>
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay: 2.5, duration: 1, ease: "easeIn" }}>
          <div className="relative my-6 text-left w-4/5 mx-auto bg-[#333e41]/50 border border-[#394146] pr-10 rounded-4xl flex items-center hover:scale-110 transition-transform duration-300">
            <div className="h-15 w-15 bg-[#333e41] border border-[#394146] rounded-2xl flex items-center justify-center m-5">
              <img src="/svgs/clock.svg" className="w-6 h-6"></img>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-left">Availibility</h1>
              <p className="text-md max-w-xs text-left">
                24x7, Appointment Automated
              </p>
            </div>
          </div>
          </motion.section>
          <hr className="relative w-4/5 mx-auto opacity-30" />
          <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay: 3, duration: 1, ease: "easeIn" }}>
          <div className="relative my-6 flex flex-row justify-around items-center mb-3">
            <div className="text-lg font-bold">Learn More:</div>
            <Button content="Get Started" />
          </div>
          </motion.section>
        </div>
      </section>
      </motion.section>
      <hr className="w-[100%] my-20 border-[#25262c]" />
    </div>
  );
}
