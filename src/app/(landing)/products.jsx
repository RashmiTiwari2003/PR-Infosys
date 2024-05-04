import Image from "next/image";
import productsData from "@/data/products-data";
import React from "react";

import { Merriweather } from "next/font/google";
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const Products = () => {
  return (
    <div id="products">
      <div className="flex flex-col px-4 py-4 max-w-full min-h-[80vh]">
        <div className="flex flex-col items-center">
          <div className="flex flex-row justify-center w-fit font-semibold">
            <h1
              className={`px-5 mt-12 mb-2 text-xl sm:text-2xl md:text-3xl ${merriweather.className}`}
            >
              Products & Electronics Repair
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap justify-around gap-8 px-4 py-8 justify">
          {productsData.map((product, ind) => (
            <div
              key={ind}
              className="flex flex-col border-2 shadow-md rounded-xl w-80"
            >
              <div className="relative flex justify-center items-center border-2 h-40">
                {/* <img
                  src={product.img}
                  alt="Product"
                  className="-z-10 absolute w-full h-full object-cover"
                /> */}
                <Image
                  src={product.img}
                  width={317}
                  height={160}
                  alt={`product-${ind}`}
                  className="-z-10 absolute w-full h-full object-cover"
                />
                <h1 className="font-bold text-white text-xl">{product.name}</h1>
              </div>
              <div className="flex justify-center items-center border-2 px-2 py-1 min-h-11 text-center">
                {product.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
