"use client";
import Image from "next/image";
import React, { useState } from "react";
import Buttons from "../Button/Button";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Rating from "../Rating/Rating";
import { addItem, removeItem } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getCookie } from "cookies-next";
import { addToCartItem, deleteItem } from "@/app/(user)/fetchData";

const SingleProduct = ({ product }: { product: any }) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const { id, name, description, price, rating, mainImage } = product;
  const cartItems = useAppSelector((state) => state?.cartReducer?.cart);
  const userName = getCookie("user_name");
  const dispatch = useAppDispatch();
  // const addToCart = () => {
  //   dispatch(addItem(product));
  //   setIsClick(!isClick);
  // };

  const handleAddToCart = async () => {
    if (userName !== "" && userName !== undefined) {
      const itemInCart = cartItems?.find(
        (item: CartItemProps) => item?.product_id === product?.id
      );

      if (!itemInCart) {
        const res = await addToCartItem(
          id,
          name,
          mainImage,
          description,
          price
        );

        if (res) {
          setIsClick(!isClick);
          window.location.reload();
        }
      } else {
        alert("Item already added");
      }
    } else {
      alert("Please Login First! ");
    }
  };

  const remove = () => {
    deleteItem(id);
    dispatch(removeItem(id));
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
              onClick={handleAddToCart}
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
