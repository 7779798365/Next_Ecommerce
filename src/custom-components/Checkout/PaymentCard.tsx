import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import getStripePromise from "@/lib/stripe";

const PaymentCard = ({
  subTotal,
  products,
}: {
  subTotal: number | string | undefined;
  products: CheckoutItem[] | undefined;
}) => {
  const handleCheckout = async () => {
    if (products) {
      const stripe = await getStripePromise();
      const response = await fetch("/api/checkout-session/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        cache: "no-cache",
        body: JSON.stringify(products),
      });

      const data = await response.json();
      if (data.session) {
        stripe?.redirectToCheckout({ sessionId: data.session.id });
      }
    }
  };

  return (
    <Card className="w-full border-[#F8DE7E] px-6">
      <CardHeader>
        <p className="text-lg font-bold py-4"> Payment Details</p>
        <div className="border border-[#F8DE7E] flex justify-between items-center rounded-3xl overflow-hidden  ">
          <input
            type="text"
            placeholder="Enter Coupon Code"
            className="px-4 outline-none me-3 w-[60%] "
          />
          <button className="bg-[#F8DE7E] text-white rounded-3xl px-4 py-2 ">
            App Coupon
          </button>
        </div>
      </CardHeader>
      <hr className="py-3 w-[90%] mx-auto" />
      <CardContent>
        <p className="font-bold">Payment Options</p>
        <div className="pt-4">
          <span className="flex gap-2 py-1">
            <input type="radio" />
            <p className="text-sm">Cash On Delivery</p>
          </span>
          <span className="flex gap-2  py-1">
            <input type="radio" />
            <p className="text-sm">Mobile Money Payment</p>
          </span>
          <span className="flex gap-2  pt-1">
            <input type="radio" />
            <p className="text-sm">Credit Card (Visa/Master)</p>
          </span>
        </div>
      </CardContent>
      <hr className="py-3 w-[90%] mx-auto" />
      <CardFooter className="block">
        <div className="w-full">
          <span className="flex justify-between items-center py-2">
            <p className="font-bold">SubTotal</p>
            <p className="font-bold">${subTotal ? subTotal : "00"}</p>
          </span>
          <span className="flex justify-between items-center py-2">
            <p className="font-bold">Tax(10%)</p>
            <p className="font-bold">$00</p>
          </span>
          <span className="flex justify-between items-center py-2">
            <p className="font-bold">Coupon Discount</p>
            <p className="font-bold">-$00</p>
          </span>
          <span className="flex justify-between items-center py-2">
            <p className="font-bold">Shipping Cost</p>
            <p className="font-bold">-$00</p>
          </span>
          <hr className=" w-[100%] mx-auto" />
          <span className="flex justify-between items-center py-2">
            <p className="font-bold">Total</p>
            <p className="font-bold">${subTotal ? subTotal : "00"}</p>
          </span>
        </div>
        <div className="w-full">
          <button
            onClick={handleCheckout}
            className="bg-[#F8DE7E] text-white rounded-3xl px-4 py-2 my-2 text-center w-full cursor-pointer hover:scale-95  "
          >
            Pay(${subTotal ? subTotal : "00"})
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PaymentCard;
