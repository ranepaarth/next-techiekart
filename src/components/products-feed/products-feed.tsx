"use client";

import Product from "@/components/products-feed/product";
import { fetchApiDataAction } from "@/server-action/fetch-api-data";
import Image from "next/image";
import React, { useEffect, useState, useTransition } from "react";
import { BiLoaderAlt } from "react-icons/bi";

const ProductsFeed = () => {
  const [data, setData] = useState<FakeStoreApiData>();

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const data = await fetchApiDataAction();
      setData(data);
    });
  }, []);

  if (isPending) {
    return <div className="w-full text-slate-700 text-2xl flex justify-center"><BiLoaderAlt className="animate-spin" strokeWidth={2.5} /></div>;
  }

  return (
    <section className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-20 lg:-mt-32 xl:-mt-52 grid-flow-row-dense mx-auto">
      {data &&
        data
          .slice(0, 4)
          .map((product) => <Product product={product} key={product.id} />)}

      <div className="col-span-full">
        <Image
          src="/products-feed-banner.webp"
          alt="Great Discount"
          width={1440}
          height={720}
          quality={90}
          className="w-full object-contain"
        />
      </div>

      <div className="md:col-span-2">
        {data?.slice(4, 5).map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>

      {data?.slice(5, data.length).map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </section>
  );
};

export default ProductsFeed;
