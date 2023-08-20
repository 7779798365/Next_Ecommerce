"use client";
import Image from "next/image";
import React from "react";
import Quantity from "../Quantity/Quantity";
import { BsFillTrashFill } from "react-icons/bs";
import { getSubString } from "@/lib/helpers";
import { useAppDispatch } from "@/redux/hooks";
import { removeItem } from "@/redux/features/cartSlice";
import { deleteItem } from "@/app/(user)/fetchData";

const CartItem = ({ item }: { item: CartItemProps }) => {
  const dispatch = useAppDispatch();

  const remove = () => {
    deleteItem(item?.product_id);
    dispatch(removeItem(item?.id));
  };

  return (
    <div className="pt-8 grid grid-cols-3 sm:grid-cols-6  items-center gap-4 text-center ">
      <div className="mx-auto">
        <Image
          alt="cart image"
          src={item?.product_image}
          width={50}
          height={50}
          className="rounded-lg"
        />
      </div>

      <p className="text-xs col-span-2 ">
        {getSubString(item?.product_description, 40)}
      </p>
      <Quantity quantity={item?.product_quantity} id={item?.product_id} />
      <p className="text-end">
        ${item?.product_price * item?.product_quantity}
      </p>
      <div onClick={remove} className="flex justify-center">
        <BsFillTrashFill size={20} color="#F8DE7E" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default CartItem;
