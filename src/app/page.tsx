"use client";

import BannerCarousel from "@/components/banner/banner-carousel";
import Header from "@/components/header/header";
import ProductsFeed from "@/components/products-feed/products-feed";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleShowOverLay = () => {
    setShowOverlay((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowOverlay(false);
    });

    return () => window.removeEventListener("scroll", () => {});
  }, [showOverlay]);

  return (
    <div className="bg-neutral-100">
      <Header showOverlay={handleShowOverLay} />
      {showOverlay && (
        <div
          className="h-full z-50 absolute w-full bg-black opacity-50"
          onClick={handleShowOverLay}
        />
      )}
      <main className="max-w-screen-xl mx-auto">
        <BannerCarousel />
        <ProductsFeed />
      </main>
    </div>
  );
};

export default Home;
