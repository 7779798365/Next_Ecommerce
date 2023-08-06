import { Link } from "lucide-react";
import React from "react";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-[#f8de7e52] text-[#2D3748]  py-16 text-bold ">
      {/* <div className="w-[80%] mx-auto"> */}
      <div className="w-[90%] mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-16  ">
        <section className="md:mx-auto mx-0">
          {/* <Link href="/"> */}
          <p className="text-xl font-semibold">
            Buy <span className="text-[#F8DE7E]">Now </span>{" "}
          </p>
          {/* </Link> */}
          <p className="uppercase lg:text-xs text-base font-semibold py-4">
            @{new Date().getFullYear()} Aneeq Khatri. All Rights Reserved{" "}
          </p>
          <div className="flex items-center gap-4 flex-wrap ">
            <div>
              <FaDiscord className="bg-black/20 border-white border-2 text-[2rem] p-2 rounded-full" />
            </div>
            <div>
              <FaInstagram className=" bg-black/20 border-white border-2 text-[2rem] p-2 rounded-full" />
            </div>
            <div>
              <FaYoutube className="bg-black/20 border-white border-2 text-[2rem] p-2 rounded-full" />
            </div>
          </div>
        </section>
        <section className="md:mx-auto mx-0">
          <p className="uppercase  text-base font-semibold">Company</p>
          <div className="pt-4">
            <ul className="list-none  ">
              <li className="text-[14px] pb-2 ">About us</li>
              <li className="text-[14px] pb-2 ">Contact us</li>
              <li className="text-[14px] pb-2 ">Testimonials</li>
            </ul>
          </div>
        </section>
        <section className="md:mx-auto mx-0">
          <p className="uppercase  text-base font-semibold">Support</p>
          <div className="pt-4">
            <ul className="list-none  ">
              <li className="text-[14px] pb-2 ">Help Center</li>
              <li className="text-[14px] pb-2 ">Terms of Service </li>
              <li className="text-[14px] pb-2 ">Privacy policy</li>
            </ul>
          </div>
        </section>
        <section className="md:mx-auto mx-0">
          <p className="uppercase  text-base font-semibold">
            Get the best deals
          </p>
          <div className="pt-4 flex items-center gap-x-2">
            <input
              className="block h-8 w-full px-4 "
              type="email"
              placeholder="Your Email"
            />
            <button className="bg-[#F8DE7E] p-2 rounded-sm ">
              <BiMailSend className="text-white" />
            </button>
          </div>
        </section>
      </div>

      {/* </div> */}
    </footer>
  );
};

export default Footer;
