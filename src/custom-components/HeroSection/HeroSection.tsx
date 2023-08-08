import Image from "next/image";
import React from "react";
import Buttons from "../Button/Button";

const HeroSection = () => {
  return (
    <div className="max-w-[80%] mx-auto pt-[5rem] sm:pt-[10rem] mb-14 ">
      <div className="flex justify-between items-center gap-16 pt-[3rem]  sm:flex-nowrap flex-wrap pb-[6rem] ">
        <div className="sm:w-1/2 w-full sm:order-1 order-2 ">
          <p className=" text-[#F8DE7E]   md:text-7xl text-4xl font-bold">
            Online Shopping Made Easy
          </p>
          <p className=" text-[16px] py-6 pe-2 leading-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis rem
            iure eos ipsum omnis modi sequi cupiditate molestias quo.
          </p>
          <Buttons text=" Shop Now" path="products" />
        </div>
        <div className="sm:w-1/2 w-full sm:order-2 order-1 ">
          <Image
            className="w-[100%] sm:h-[400px] h-[300px]"
            src="/hero-img.jpeg"
            alt="hero-img"
            width={400}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
