// import "./AboutAnimation.js";
"use client"
import Button from "./Miscellaneous/button";
import Border from "./Miscellaneous/Border"
import GradientLink from "./Miscellaneous/GradientLink";
import React, { useEffect, useState } from "react";
export default function AboutUs() {

  return (
    <>
      <div className="flex justify-center w-full my-10">
        <Border content="About Us" />
      </div>
      <div className="w-19/20 flex justify-center px-4 sm:px-6 mb-20">
        <div className="flex flex-row justify-around items-center flex-wrap gap-10 lg:flex-nowrap">
          <div className="lg:w-1/2 about-para mb-15 pt-1.5">
            <h1 className="text-2xl leading-[100%] sm:text-[50px] font-bold">
              Mission is to bring the power of OmniaGPT to every business.
            </h1>
            <p className="text-l mt-4">
              Our OmniaGPT boasts a powerful AI Explain feature that makes it
              easy for you to understand and respond to customer inquiries. It
              effortlessly translates complex messages in real-time, breaking them
              down into simple explanations. Plus, we use customer data to
              fine-tune the OmniaGPT model, ensuring it's perfectly aligned with
              your business needs.
            </p>
            <div className="my-5 w-max">
              <span>Impressive Work since 2023</span>
            </div>
            <Button content="Get Started" />
          </div>
          <div className="lg:w-1/2 sm:w-full relative pt-2.5 bg-[url('/Background_06.jpg')] bg-cover bg-center rounded-4xl">
          <div className="absolute bg-[#1c1d23]/70 inset-0"></div>
            <div className="relative flex justify-center">
              <img src="/assets/Untitled.png" className="h-[30rem] object-contain" />
            </div>
          </div>
        </div>
      </div>
      <hr className="w-[100%] my-20 border-[#25262c]" />
    </>
  );
}