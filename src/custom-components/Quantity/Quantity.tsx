"use client";

import { useAppDispatch } from "@/redux/hooks";
import {
  incrementQuantity,
  decrementQuantity,
} from "@/redux/features/cartSlice";

const Quantity = ({
  quantity,
  id,
}: {
  quantity: number | string;
  id: number | string;
}) => {
  const dispatch = useAppDispatch();

  const increment = () => {
    dispatch(incrementQuantity(id));
  };
  const decrement = () => {
    dispatch(decrementQuantity(id));
  };

  return (
    <div className="custom-number-input my-4 h-10 w-32">
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          onClick={decrement}
          data-action="decrement"
          className=" bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-l cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="text"
          className="outline-none focus:outline-none text-center w-full bg-gray-100 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 outline-0"
          name="custom-input-number"
          value={quantity}
        ></input>
        <button
          onClick={increment}
          data-action="increment"
          className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-r cursor-pointer"
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
};

export default Quantity;
