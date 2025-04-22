"use client";
import React from "react";
import Navbar from "../NavBar";
import Image from "next/image";
import { FaCircle, FaRegCircle } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="relative w-full  min-h-[850px] flex flex-col px-5 md:px-16 pt-9 pb-36 max-md:pb-24">
        <Image
          src="/Hero/banner.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="relative mt-32 w-full max-md:mt-10">
          <div className="flex flex-col md:flex-row gap-5 w-full">
            <div className="w-full md:w-[69%] px-5 md:px-0">
              <article className="flex flex-col w-full text-white">
                <div className="flex gap-20 mb-6 items-start">
                  <div className="flex flex-col gap-20 items-center space-y-4 pt-3">
                    <Image
                      src="/Hero/back.png"
                      alt="Back Icon"
                      width={11}
                      height={35}
                    />
                    <div className="flex flex-col gap-3">
                      <FaCircle className="text-xs" />
                      <FaRegCircle className="text-xs" />
                      <FaRegCircle className="text-xs" />
                      <FaRegCircle className="text-xs" />
                      <FaRegCircle className="text-xs" />
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div>
                    <h1 className="text-4xl font-bold mb-5">Lorem Ipsum</h1>
                    <p className="text-lg font-medium leading-7 mb-8 max-w-[500px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                    <button className="px-9 py-4 text-lg font-medium bg-white rounded-xl text-yellow-950 hover:bg-yellow-950 hover:text-white transition-colors duration-200 cursor-pointer">
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            </div>

            <div className="w-full md:w-[31%]">
              <div className="relative aspect-square px-5 md:px-16 pt-14 pb-72 max-md:pb-24 text-3xl text-center text-white">
                <Image
                  src="/Hero/bannerCard.png"
                  alt="Feature image"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
