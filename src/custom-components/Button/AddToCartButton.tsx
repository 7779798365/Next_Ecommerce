"use client";

import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { addItem, removeItem } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";

const AddToCartButton = ({ product }: { product: any }) => {
  const [isClick, setIsClick] = useState<boolean>(false);
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
    <>
      {!isClick ? (
        <Button onClick={addToCart} className="bg-[#F8DE7E]">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to cart
        </Button>
      ) : (
        <Button onClick={remove}>Remove from cart</Button>
      )}
    </>
  );
};

export default AddToCartButton;
