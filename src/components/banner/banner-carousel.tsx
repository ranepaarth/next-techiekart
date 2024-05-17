"use client";

import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const banners = [
  {
    id: 1,
    src: "/banner-1.jpg",
    alt: "Shop your favorites in clothing, beauty & more",
  },
  { id: 2, src: "/banner-2.jpg", alt: "Tops & dresses" },
  { id: 3, src: "/banner-3.jpg", alt: "Daily needs" },
  { id: 4, src: "/banner-4.jpg", alt: "Exciting launches from top brands" },
  { id: 5, src: "/banner-5.jpg", alt: "Smartphones" },
];

const BannerCarousel = () => {
  return (
    <div className="relative">
      <div className="h-32 absolute -bottom-1 bg-gradient-to-t from-neutral-100 z-20 w-full" />
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
      >
        {banners.map((banner) => (
          <div key={banner.id}>
            <Image
              src={banner.src}
              alt={banner.alt}
              width={1020}
              height={720}
              priority
              quality={80}
              className="w-full aspect-video object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
