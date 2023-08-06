"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { CgMenu, CgClose } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import Cart from "../Cart/Cart";
// import { SectionWrapper } from "../hoc";

const Navbar = () => {
  const [toggle, setToggle] = useState<Boolean>(false);
  return (
    <nav className=" w-[100%] z-50 flex justify-between items-center py-6 fixed bg-white  shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] ">
      <div className=" w-[90%] mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <p className="text-xl font-semibold">
              Buy <span className="text-[#F8DE7E]">Now </span>{" "}
            </p>
          </Link>
          <ul className=" ms-4 md:ms-8 list-none hidden sm:flex md:gap-10 gap-5 items-center font-bold">
            <li className=" text-[14px] md:text-[16px] cursor-pointer hover:scale-105 capitalizep">
              <Link href="/products">All Products</Link>
            </li>
            <li className="text-[14px] md:text-[16px] cursor-pointer hover:scale-105 capitalizep">
              <Link href="/categories">Categories</Link>
            </li>
            <li className="flex items-center border gap-x-1 py-1 px-2">
              <CiSearch />
              <input
                type="search"
                placeholder="Search..."
                className="border-0 w-80 "
              />
            </li>
          </ul>
        </div>

        <div>
          <ul className=" list-none hidden sm:flex gap-10 items-center font-bold">
            {/* <li className="text-[16px] flex items-center gap-1 cursor-pointer hover:scale-105 ">
              <FiShoppingCart className="text-[16px] font-black" />
              <p>Cart</p>
            </li> */}
            <Cart />
          </ul>
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/* <Image
            src={toggle ? CgClose : CgMenu}
            alt="menu"
            width={28}
            height={28}
            className="object-contain bg-black"
            onClick={() => setToggle(!toggle)}
          /> */}
          <div onClick={() => setToggle(!toggle)}>
            {toggle ? <CgClose /> : <CgMenu />}
          </div>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6  absolute top-20  right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-[#F8DE7E]`}
          >
            <ul className=" list-none flex flex-col justify-end  items-start gap-4 flex-1 font-bold">
              <li className="flex items-center border gap-x-1 bg-white ">
                <CiSearch />
                <input
                  type="search"
                  placeholder="Search..."
                  className="border-0"
                />
              </li>
              <li className="text-xs cursor-pointer hover:scale-105 capitalizep">
                <Link href="/products">All Products</Link>
              </li>
              <li className="text-xs cursor-pointer hover:scale-105 capitalizep">
                <Link href="/categories">Categories</Link>
              </li>
              {/* <li className="text-xs flex items-center gap-1 cursor-pointer hover:scale-105 ">
                <FiShoppingCart className="text-base font-black" />
                <p>Cart</p>
              </li> */}
              <Cart />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

// export default SectionWrapper(Navbar, "");
export default Navbar;
