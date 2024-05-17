"use client";

import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";

type Location = {
  city: { name: string };
  state: { name: string };
};

const HeaderLocation = () => {
  const [location, setLocation] = useState<Location>();
  useEffect(() => {
    const fetchApiData = async () => {
      const res = await fetch(
        `https://api.geoapify.com/v1/ipinfo?&apiKey=${process.env.NEXT_PUBLIC_GEO_APIFY_KEY}`
      );
      const data = await res.json();
      if (res.ok) {
        setLocation({
          city: {
            name: data.city.name,
          },
          state: {
            name: data.state.name,
          },
        });
      }
    };
    fetchApiData();
  }, []);

  return (
    <div
      className="flex items-center cursor-pointer w-full text-nowrap truncate flex-grow top-header-link space-x-1"
      title={location?.city.name}
    >
      <div>
        <CiLocationOn strokeWidth={1.3} className="h-5 w-5" />
      </div>
      <div className="text-xs flex flex-col">
        <p className="font-medium text-slate-500">Delivering to</p>
        <p
          className={`${
            location ? "opacity-100" : "opacity-0"
          } font-semibold sm:text-sm`}
        >{`${location?.city.name}`}</p>
      </div>
    </div>
  );
};

export default HeaderLocation;
