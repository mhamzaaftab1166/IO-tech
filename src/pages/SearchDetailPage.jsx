import React from "react";
import Image from "next/image";

function SearchPage() {
  return (
    <div className="relative">
      <div className="flex relative flex-col items-end px-20 pt-9 w-full text-xs font-medium leading-none text-center text-white min-h-[850px] pb-[776px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <img
          src="/Hero/banner.png"
          alt="Law firm background"
          className="object-cover absolute inset-0 size-full"
        />
      </div>

      <div className="flex flex-wrap gap-5 mt-20 ml-8 w-full max-w-[1255px] text-yellow-950 max-md:mt-10 max-md:max-w-full max-md:ml-4">
        <div className="flex overflow-hidden flex-col px-8 py-10 my-auto text-xl font-semibold leading-none whitespace-nowrap bg-neutral-50 max-md:px-5">
          <div className="self-center">Team</div>
          <div className="self-start mt-10">Services</div>
        </div>

        <div className="flex flex-col grow shrink-0 items-start max-w-full text-base font-medium basis-0 w-fit">
          <div className="flex items-center gap-3 font-bold leading-loose bg-blend-normal max-md:ml-2.5">
            <button className="flex items-center text-yellow-950 cursor-pointer">
              <Image
                src="/SearchPage/back.png"
                alt="Back"
                width={16}
                height={35}
                className="mr-8"
              />
              Back
            </button>
          </div>

          <div className="mt-14 leading-loose bg-blend-normal break-words max-md:mt-10 max-md:text-sm">
            Law Firm is one of the leading legal offices
          </div>
          <div className="mt-8 text-yellow-950 break-words text-wrap max-md:text-sm">
            <span className="underline underline-offset-2">Read more</span>
          </div>

          <div className="w-full pr-20 max-md:px-4">
            <div className="shrink-0 self-stretch mt-24 mb-24 h-px border border-solid border-neutral-400 border-opacity-50 max-md:mt-10" />
          </div>

          <div className="mt-7 leading-loose bg-blend-normal break-words max-md:text-sm">
            Law Firm is one of the leading legal offices
          </div>
          <div className="mt-6 text-yellow-950 break-words text-wrap max-md:text-sm">
            <span className="underline underline-offset-2">Read more</span>
          </div>

          <div className="w-full pr-20 max-md:px-4">
            <div className="shrink-0 self-stretch mt-24 mb-24 h-px border border-solid border-neutral-400 border-opacity-50 max-md:mt-10" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-20 text-yellow-950 font-medium text-sm flex items-center gap-2 max-md:bottom-4 max-md:right-4 max-md:text-xs max-md:flex-wrap">
        <span className="cursor-pointer">{`<`}</span>
        <span className="cursor-pointer">1</span>
        <span className="cursor-pointer">2</span>
        <span className="cursor-pointer">3</span>
        <span className="border border-yellow-950 rounded-md px-1 py-0.5">
          ...
        </span>
        <span className="cursor-pointer">99</span>
        <span className="cursor-pointer">{`>`}</span>
      </div>
    </div>
  );
}

export default SearchPage;
