"use client";

import ProductStars from "@/components/products-feed/product-stars";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type ProductProps = {
  product: Product;
};

const Product = ({ product }: ProductProps) => {
  const { category, description, id, image, price, rating, title } = product;

  const [hasPrime, setHasPrime] = useState(Math.random() < 0.5);

  const [percentage] = useState(Math.round(Math.random() * 99));

  const [afterDiscPrice, setAfterDiscPrice] = useState<string | number>(
    Math.round(price * 25)
  );

  const [beforeDiscPrice, setBeforeDisPrice] = useState<string | number>(
    Math.round((Number(afterDiscPrice) * 100) / (100 - percentage))
  );

  const today = new Date();
  const [tomorrowDate] = useState(
    new Intl.DateTimeFormat("en-IN", {
      dateStyle: "short",
    }).format(new Date(today).setDate(today.getDate() + 1))
  );

  useEffect(() => {
    setAfterDiscPrice(
      new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(afterDiscPrice as number)
    );

    setBeforeDisPrice(
      new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(beforeDiscPrice as number)
    );
  }, []);

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.7,
      }}
      className="bg-white p-10 relative flex flex-col m-5 z-30 rounded-sm cursor-pointer shadow-sm"
    >
      <p className="absolute top-2 right-4 italic text-neutral-400 text-xs">
        {category}
      </p>

      <Image
        src={image}
        height={1020}
        width={720}
        priority
        alt={title}
        className="object-contain aspect-[4/3] h-48"
      />

      <h4 className="my-3 font-medium w-full text-pretty text-sm">{title}</h4>

      <ProductStars rate={rating.rate} />

      <p className="text-xs my-4 line-clamp-2">{description}</p>

      <div className="flex items-center text-2xl space-x-3">
        <p className="text-red-600">
          -{percentage}
          &#37;
        </p>
        <div className="font-semibold text-neutral-900 relative flex items-start">
          <p className="text-sm font-normal mt-1">&#8377;</p>
          <p>{afterDiscPrice}</p>
        </div>
      </div>

      <p className="text-neutral-400 line-through text-xs mb-5">
        M.R.P: &#8377;{beforeDiscPrice}
      </p>

      {hasPrime && (
        <div className="flex items-center space-x-2 mb-4">
          <Image
            src="/prime.png"
            alt="Anazom prime"
            width={480}
            height={360}
            className="w-12"
          />
          <p className="text-xs">
            Free Delivery <strong>Tomorrow {tomorrowDate}</strong>{" "}
          </p>
        </div>
      )}

      <button className="button mt-auto text-sm py-1.5">Add to Cart</button>
    </motion.article>
  );
};

export default Product;
