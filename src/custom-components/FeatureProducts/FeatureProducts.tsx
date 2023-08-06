import React from "react";
import ProductsSlider from "./ProductsSlider";
import { client } from "@/lib/sanity.client";
import { AllProductsQuery } from "@/lib/queries";

const getAllProducts = () => {
  return client.fetch(AllProductsQuery);
};

export const revalidate = 60; // revalidate this page every 60 seconds

const FeatureProducts = async () => {
  const products = await getAllProducts();
  return (
    <div className="md:w-11/12 w-full mx-auto py-12 px-8 ">
      <h1 className="text-xl font-semibold">Best Deals For You</h1>
      <ProductsSlider products={products} />
    </div>
  );
};

export default FeatureProducts;
