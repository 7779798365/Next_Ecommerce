import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductBanner = ({ text, path }: { text: string; path: string }) => {
  return (
    <div className=" max-w-[90%] mx-auto flex items-center justify-between gap-8 py-12 px-12 border mb-12 border-[#F8DE7E] md:flex-nowrap flex-wrap ">
      <div className="md:order-1 order-2">
        <p className="font-bold text-4xl">Best and Quality Products</p>
        <p className="py-2">
          Affordability, Durability, Fast and Convenient Delivery, Free Shipping
          and more
        </p>
        <button className="bg-[#F8DE7E] py-2 px-4 rounded-sm text-white">
          <Link href={path}>{text}</Link>
        </button>
      </div>
      <div className="md:order-2 order-1">
        <Image alt="product" src="/pb.jpg" width="700" height="600" />
      </div>
    </div>
  );
};

export default ProductBanner;
