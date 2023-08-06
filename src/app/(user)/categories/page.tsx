import AllCategories from "@/custom-components/AllCategories/AllCategories";
import ProductBanner from "@/custom-components/ProductBanner/ProductBanner";
import { AllCategoriesQuery } from "@/lib/queries";
import { client } from "@/lib/sanity.client";
import React from "react";

const getAllCategories = () => {
  return client.fetch(AllCategoriesQuery);
};

export const revalidate = 60; // revalidate this page every 60 seconds

const page = async () => {
  const categories = await getAllCategories();
  return (
    <div className="pt-[10rem]">
      <ProductBanner text="View All Products " path="/products" />
      <AllCategories categories={categories} />
    </div>
  );
};

export default page;
