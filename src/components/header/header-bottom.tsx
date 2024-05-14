import React from "react";
import { IoMenu } from "react-icons/io5";

const BottomHeader = () => {
  return (
    <div className="bg-slate-700 flex items-center text-white px-6  text-sm text-nowrap overflow-auto scrollbar-hide">
      <p className="flex items-center font-bold bottom-header-link">
        <IoMenu className="w-5 h-5 mr-1" strokeWidth={2.5} />
        All
      </p>
      <p className="font-medium bottom-header-link">Amazon miniTV</p>
      <p className="font-medium bottom-header-link">Sell</p>
      <p className="font-medium bottom-header-link">Best Sellers</p>
      <p className="font-medium bottom-header-link">Today&apos;s deal</p>
      <p className="font-medium bottom-header-link">Mobiles</p>
      <p className="font-medium bottom-header-link">Electronics</p>
      <p className="font-medium bottom-header-link">Prime</p>
      <p className="font-medium bottom-header-link">Customer Service</p>
      <p className="font-medium bottom-header-link">Home Kitchen</p>
      <p className="font-medium bottom-header-link">Fashion</p>
    </div>
  );
};

export default BottomHeader;
