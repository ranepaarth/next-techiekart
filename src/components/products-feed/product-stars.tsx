import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const ProductStars = ({ rate }: { rate: number }) => {
  const starRating = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {rate >= index + 1 ? (
          <BsStarFill />
        ) : rate >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <div className="flex gap-x-1 items-center">
      <p className="text-sm">{rate}</p>
      <div className="flex text-amber-500">
        {/* {Array(5)
          .fill("")
          .map((_, i) => {
            if (i < Math.round(stars)) {
              return <BsStarFill />;
            }
            return <BsStar />;
          })} */}
        {starRating}
      </div>
    </div>
  );
};

export default ProductStars;
