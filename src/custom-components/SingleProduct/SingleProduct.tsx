"use client";
import Image from "next/image";
import React, { useState } from "react";
import Buttons from "../Button/Button";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Rating from "../Rating/Rating";
import { addItem, removeItem } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";

const SingleProduct = ({ product }: { product: any }) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const { name, description, price, rating, mainImage } = product;

  const dispatch = useAppDispatch();
  const addToCart = () => {
    dispatch(addItem(product));
    setIsClick(!isClick);
  };

  const remove = () => {
    dispatch(removeItem(product?.id));
    setIsClick(!isClick);
  };
  return (
    <div className="max-w-[80%] mx-auto py-48 flex items-start sm:flex-nowrap flex-wrap  gap-8 ">
      <div className="sm:w-[50%] w-full  m-auto">
        <Image
          className="w-auto sm:w-[400px]  md:h-auto h-[300px] mx-auto object-contain sm:h-[500px]"
          src={mainImage}
          alt="product"
          width="500"
          height="500"
        />
      </div>
      <div className="sm:w-[50%] w-full">
        <p className="font-bold text-2xl md:text-4xl">{name}</p>
        <p className="my-3 text-[14px] ">{description}</p>
        <p className="my-3">
          <Rating rating={rating} />
        </p>
        <p className="font-bold text-3xl">${price}</p>
        {/* <hr /> */}
        {/* <Quantity quantity={product?.quantity} id={product?.id} /> */}
        <hr className="my-2" />
        <div className="my-8 flex  gap-8">
          <Buttons text="Buy Now" />
          {!isClick ? (
            <Button
              onClick={addToCart}
              className="border bg-white text-[#F8DE7E] border-[#F8DE7E]"
            >
              <ShoppingCart className="mr-2 h-4 w-4 text-[#F8DE7E] " /> Add to
              Cart
            </Button>
          ) : (
            <Button onClick={remove}>Remove from cart</Button>
          )}
        </div>

        <div>
          <p className="font-bold">Free Delivery</p>
          <p className="py-1">
            Enter Your postal Code for Delivery Availability
          </p>
        </div>

        <div>
          <p className="font-bold">Return Delivery</p>
          <p className="py-1">Free 30 Days Delivery Returns Details</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
