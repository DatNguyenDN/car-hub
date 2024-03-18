"use client";

import CustomButton from "@/components/ui/CustomButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Hero() {
  const handleScroll = () => {};
  return (
    <div className="p-[5%] flex xl:flex-row flex-col justify-center gap-5 relative z-0 max-w-[1440px] mx-au">
      <div className="flex-1 pt-36 padding-x">
        <h1 className=" 2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabo">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="text-[27px] text-black-100 font-light mt">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          handleClick={handleScroll}
          containerStyles="mt-5"
        />
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen;">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z">
          <Image src="/hero.png" alt="hero" fill className="object-contain  " />
        </div>

        {/* <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" /> */}
      </div>
    </div>
  );
}
