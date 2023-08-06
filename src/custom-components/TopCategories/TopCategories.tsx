import React from "react";
import CategoryCard from "./CategoryCard";
import Buttons from "../Button/Button";
import { AllCategoriesQuery } from "@/lib/queries";
import { client } from "@/lib/sanity.client";

const getAllCategories = () => {
  return client.fetch(AllCategoriesQuery);
};

export const revalidate = 60; // revalidate this page every 60 seconds

const TopCategories = async () => {
  const categories = await getAllCategories();
  return (
    <div className="md:w-11/12 w-full mx-auto py-12 px-8 ">
      <h1 className="text-xl font-semibold">Shop Our Top Categories</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 my-8">
        {categories?.slice(0, 4)?.map((category: any, i: number) => (
          <CategoryCard category={category} key={i} />
        ))}
      </div>
      <Buttons text="Browse All Categories" path="/categories" />
    </div>
  );
};

export default TopCategories;
