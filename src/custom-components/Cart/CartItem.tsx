"use client";
import Image from "next/image";
import React from "react";
import Quantity from "../Quantity/Quantity";
import { BsFillTrashFill } from "react-icons/bs";
import { getSubString } from "@/lib/helpers";
import { useAppDispatch } from "@/redux/hooks";
import { removeItem } from "@/redux/features/cartSlice";

const CartItem = ({ item }: { item: any }) => {
  const dispatch = useAppDispatch();
  const remove = () => {
    dispatch(removeItem(item?.id));
  };

  return (
    <div className="pt-8 grid grid-cols-3 sm:grid-cols-6  items-center gap-4 text-center ">
      <div className="mx-auto">
        <Image
          alt="cart image"
          src={item?.mainImage}
          width={50}
          height={50}
          className="rounded-lg"
        />
      </div>

      <p className="text-xs col-span-2 ">
        {getSubString(item?.description, 40)}
      </p>
      <Quantity quantity={item?.quantity} id={item?.id} />
      <p className="text-end">${item?.price * item?.quantity}</p>
      <div onClick={remove} className="flex justify-center">
        <BsFillTrashFill size={20} color="#F8DE7E" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default CartItem;
