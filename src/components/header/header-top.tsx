"use client";

import { HeaderProp } from "@/components/header/header";
import HeaderLocation from "@/components/header/header-location";
import React from "react";
import { IoMdSearch } from "react-icons/io";
import { PiShoppingCartSimple } from "react-icons/pi";
import HeaderLogo from "./header-logo";

const TopHeader = ({ showOverlay }: HeaderProp) => {
  return (
    <div className="flex items-center bg-slate-900 px-2 md:px- text-white flex-grow justify-between md:space-x-4 flex-col md:flex-row space-y-2 py-2">
      <div className="flex items-center flex-grow space-x-4 w-full md:w-[60%] lg:w-[70%] px-6">
        <HeaderLogo />

        <div className="hidden lg:inline-flex md:hidden">
          <HeaderLocation />
        </div>

        <div className="flex justify-between rounded-md h-10 bg-amber-500 hover:bg-amber-600 items-center flex-grow  focus-visible:outline-amber-500 outline-2">
          <input
            type="text"
            className="rounded-l-md placeholder:font-semibold flex items-center outline-2 px-2 outline-none text-slate-900 text-sm h-full flex-grow w-[70%] font-semibold focus-within:outline-amber-500 focus-within:z-50"
            placeholder="Search in Anazom"
            onFocus={showOverlay}
          />
          <IoMdSearch className="text-center flex items-center p-2.5 w-10 h-full text-black rounded-r-md cursor-pointer" />
        </div>
      </div>

      <hr className="border-b-[0.1px] w-full border-slate-700 md:hidden block" />

      <div className="flex items-center md:space-x-2 w-full md:w-fit justify-evenly flex-grow">
        <div className="flex flex-col text-xs cursor-pointer top-header-link">
          <p className="text-slate-500">Hello, Paarth Rane</p>
          <p className="font-semibold sm:text-sm">Account & Lists</p>
        </div>
        <div className="flex flex-col text-xs cursor-pointer top-header-link">
          <p className="text-slate-500">Returns</p>
          <p className="font-semibold sm:text-sm">& Orders</p>
        </div>
        <div className="relative cursor-pointer top-header-link">
          <span className="absolute -right-1 md:top-2 md:right-1  font-bold bg-amber-500 text-xs w-5 aspect-square flex items-center justify-center rounded-full text-slate-900">
            5
          </span>
          <PiShoppingCartSimple strokeWidth={2.2} className="text-[2.5rem]" />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
