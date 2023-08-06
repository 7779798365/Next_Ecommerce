import Image from "next/image";
import React from "react";

const RiviewItemsCard = () => {
  return (
    <div className=" border border-[#F8DE7E]  px-6 py-5  rounded-md">
      <p className=" pe-2 text-lg font-bold"> Riview Items</p>
      <div className="flex flex-col sm:flex-row items-center justify-between my-3 ">
        <div className="sm:flex block  gap-3 items-center ">
          <figure>
            <Image
              src="/cc-1.webp"
              alt="item"
              width="100"
              height="100"
              className="text-center mx-auto"
            />
          </figure>
          <div className="">
            <p className="text-center sm:text-start text-lg font-bold">
              New movie is released!
            </p>
            <p>Click the button to watch on Jetflix app.</p>
          </div>
        </div>

        <div className="justify-end">
          <div>
            <p className="text-center sm:text-end text-lg font-bold ">$780</p>
            <p>Quantity:1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiviewItemsCard;
