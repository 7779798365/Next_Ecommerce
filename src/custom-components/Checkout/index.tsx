import React from "react";
import RiviewItemsCard from "./RiviewItemsCard";
import DeliveryInformation from "./DeliveryInformation";
import PaymentCard from "./PaymentCard";

const Checkout = () => {
  return (
    <div className="max-w-[90%] mx-auto flex flex-col lg:flex-row gap-3  ">
      <div className="w-full  lg:w-[60%]">
        <RiviewItemsCard />
        <DeliveryInformation />
      </div>
      <div className="w-full  lg:w-[40%]">
        <PaymentCard />
      </div>
    </div>
  );
};

export default Checkout;
