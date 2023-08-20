import { getSubString } from "@/lib/helpers";
import Image from "next/image";
import React from "react";

const RiviewItemsCard = ({ cartItems }: { cartItems: CartItemProps }) => {
  const {
    product_description,
    product_image,
    product_name,
    product_price,
    product_quantity,
  } = cartItems;
  return (
    <div className=" border border-[#F8DE7E]  px-6 py-5 mb-3  rounded-md">
      <p className=" pe-2 text-lg font-bold"> Riview Items</p>
      <div className="flex flex-col sm:flex-row items-center justify-between my-3 ">
        <div className="sm:flex block  gap-3 items-center ">
          <figure>
            <Image
              src={product_image}
              alt="item"
              width="50"
              height="50"
              className="text-center mx-auto object-contain"
            />
          </figure>
          <div className="">
            <p className="text-center sm:text-start text-lg font-bold">
              {product_name}
            </p>
            <p>{getSubString(product_description, 50)}</p>
          </div>
        </div>

        <div className="justify-end">
          <div>
            <p className="text-center sm:text-end text-lg font-bold ">
              ${product_price}
            </p>
            <p>Quantity:{product_quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiviewItemsCard;
