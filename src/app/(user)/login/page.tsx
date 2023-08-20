"use client";
import Link from "next/link";
import React, { useState } from "react";
import { loginUser } from "../fetchData";

export default function Login() {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<LoginProps>({
    email: "",
    password: "",
  });

  const handleInputs = (e: any) => {
    const value = e.target.value;
    setUserData({ ...userData, [e.target.name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const res = await loginUser(userData);
    if (!res.error) {
      setIsLoading(false);
      setUserData({
        email: "",
        password: "",
      });
      window.location.href = "/";
    } else {
      setIsLoading(false);
      setError(res.error);
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center lg:py-[7rem] py-[9rem] min-h-screen  sm:justify-center  bg-gray-50">
        <div>
          <Link href="/">
            <h3 className="text-4xl font-bold ">
              Buy <span className="text-[#F8DE7E]">Now </span>{" "}
            </h3>
          </Link>
        </div>
        <div className="w-[80%] mx-auto px-6 py-12 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <h3 className="text-2xl font-bold text-center pb-8">Login Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  className="block w-full mt-1 outline-none py-3  px-2 border-[#F8DE7E] border-b-2 bo rounded-md shadow-sm focus:border-[#F8DE7E] focus:ring focus:ring-[#F8DE7E] focus:ring-opacity-50"
                  placeholder="Enter Your Email"
                  value={userData?.email}
                  onChange={handleInputs}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  className="block w-full mt-1 outline-none py-3  px-2 border-[#F8DE7E] border-b-2 bo rounded-md shadow-sm focus:border-[#F8DE7E] focus:ring focus:ring-[#F8DE7E] focus:ring-opacity-50"
                  placeholder="Enter Your Password"
                  value={userData?.password}
                  onChange={handleInputs}
                />
              </div>
            </div>
            <div>
              <p className="py-2 text-red-600 font-bold">{error}</p>
            </div>
            <div className="flex items-center mt-4">
              <input
                className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-[#F8DE7E] rounded-md hover:bg-[#F8DE7E] focus:outline-none focus:bg-[#F8DE7E] cursor-pointer hover:scale-95"
                type="submit"
                value={isLoading ? "Loaging..." : "Login"}
              />
            </div>
          </form>
          <div className="mt-4 text-grey-600">
            Don &apos t have an account?{" "}
            <span>
              <Link className="text-[#F8DE7E] hover:underline" href="/register">
                Register
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
