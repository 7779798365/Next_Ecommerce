"use client";

import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { addItem, removeItem } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCartItem, deleteItem } from "@/app/(user)/fetchData";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

const AddToCartButton = ({ product }: { product: Product }) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const cartItems = useAppSelector((state) => state?.cartReducer?.cart);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const userName = getCookie("user_name");

  const remove = () => {
    deleteItem(product?.id);
    dispatch(removeItem(product?.id));
    setIsClick(!isClick);
  };

  const handleAddToCart = async () => {
    if (userName !== "" && userName !== undefined) {
      const itemInCart = cartItems?.find(
        (item: CartItemProps) => item?.product_id === product?.id
      );

      if (!itemInCart) {
        const res = await addToCartItem(
          product?.id,
          product?.name,
          product?.mainImage,
          product?.description,
          product?.price
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
  return (
    <>
      {!isClick ? (
        <Button onClick={handleAddToCart} className="bg-[#F8DE7E]">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to cart
        </Button>
      ) : (
        <Button onClick={remove}>Remove from cart</Button>
      )}
    </>
  );
};

export default AddToCartButton;
