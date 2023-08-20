"use client";
import React, { useEffect, useState } from "react";
import RiviewItemsCard from "./RiviewItemsCard";
import DeliveryInformation from "./DeliveryInformation";
import PaymentCard from "./PaymentCard";
import { getCartItems } from "@/app/(user)/fetchData";
import { calculateItemsTotal } from "@/lib/helpers";

const Checkout = () => {
  const [data, setData] = useState<CartItemProps[] | undefined>();

  useEffect(() => {
    const getData = async () => {
      const items = await getCartItems();
      setData(items?.data);
    };
    getData();
  }, []);

  const total = data && calculateItemsTotal(data);

  const productsArr = data?.map((item: CartItemProps, index: number) => {
    return {
      product: index + 1,
      name: item.product_name,
      price: item.product_price,
      quantity: item.product_quantity,
    };
  });

  return (
    <div className="max-w-[90%] mx-auto flex flex-col lg:flex-row gap-3  ">
      <div className="w-full  lg:w-[60%]">
        {data ? (
          data?.map((item: CartItemProps) => (
            <RiviewItemsCard key={item?.product_id} cartItems={item} />
          ))
        ) : (
          <p>Loading...</p>
        )}

        <DeliveryInformation />
      </div>
      <div className="w-full  lg:w-[40%]">
        <PaymentCard subTotal={total} products={productsArr} />
      </div>
    </div>
  );
};

export default Checkout;
