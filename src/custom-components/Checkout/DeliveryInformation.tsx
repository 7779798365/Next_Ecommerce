import React from "react";

const DeliveryInformation = () => {
  return (
    <div className="mt-5 w-full border border-[#F8DE7E]  px-6 py-5  rounded-md">
      <p className="text-lg font-bold pb-4">Delivery Information</p>
      <div>
        <div className="py-2">
          <p className="font-semibold py-2">full name</p>
          <input
            type="text"
            placeholder="Full Name"
            className="border border-[#F8DE7E] px-3 w-full py-2 rounded "
          />
        </div>
        <div className="py-2">
          <p className="font-semibold py-2">Address</p>
          <input
            type="text"
            placeholder="address"
            className="border border-[#F8DE7E] px-3 w-full py-2 rounded "
          />
        </div>
        <div className="py-2">
          <p className="font-semibold py-2">Phone Number</p>
          <input
            type="text"
            placeholder="phone number"
            className="border border-[#F8DE7E] px-3 w-full py-2 rounded "
          />
        </div>
        <div className="py-2">
          <p className="font-semibold py-2">Email</p>
          <input
            type="email"
            placeholder="email"
            className="border border-[#F8DE7E] px-3 w-full py-2 rounded "
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryInformation;
