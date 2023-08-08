"use client";
import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import CartItem from "./CartItem";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { calculateItemsTotal } from "@/lib/helpers";
import { clearItems } from "@/redux/features/cartSlice";
import Link from "next/link";
const Cart = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const cartItems = useAppSelector((state) => state?.cartReducer?.cart);
  const dispatch = useAppDispatch();
  const clear = () => {
    dispatch(clearItems());
  };

  return (
    <>
      <li
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="text-xs flex items-center gap-1 cursor-pointer hover:scale-105 relative "
      >
        <FiShoppingCart className="text-base font-black" />
        <p className="text-lg">Cart</p>
        <span className="text-[11px] bg-white sm:bg-[#F8DE7E] absolute right-[-20px] top-[-12px] text-[#F8DE7E] sm:text-white rounded-full px-[9px] py-[3px]">
          {cartItems && cartItems?.length}
        </span>
      </li>
      {isOpen && (
        <div
          className={
            " w-[93.5vw] sm:max-w-2xl right-0 absolute top-0 bg-white h-[90vh] sm:h-screen shadow-xl delay-400 duration-700 ease-in-out transform transition-all p-6 overflow-y-scroll " +
            (isOpen ? " translate-x-0 " : " translate-x-full ")
          }
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <p className="text-lg text-[#F8DE7E] ">Cart</p>
              <p className="text-lg  text-[#F8DE7E] ">
                ({cartItems && cartItems?.length} Items )
              </p>
            </div>
            <CgClose
              size={20}
              className="cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <div>
            {cartItems && cartItems?.length === 0 ? (
              <div className="mt-4">Your Cart is Empty</div>
            ) : (
              cartItems?.map((item: any, i: number) => (
                <CartItem key={i} item={item} />
              ))
            )}
          </div>
          <div className="flex  justify-between items-center fixed w-full bottom-0 pb-6">
            <div className="flex gap-4">
              <Button
                onClick={clear}
                className="border border-[#F8DE7E] bg-white text-[#F8DE7E]  "
              >
                Clear Cart
              </Button>
              <Link href="/checkout">
                <Button className="bg-[#F8DE7E]">Checkout</Button>
              </Link>
            </div>
            <div className="pe-12 ">
              <p>Total: ${calculateItemsTotal(cartItems)} </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
