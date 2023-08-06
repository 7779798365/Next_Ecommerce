import ProductCard from "@/custom-components/FeatureProducts/ProductCard";
import ProductBanner from "@/custom-components/ProductBanner/ProductBanner";
import { getCategoryProducts } from "@/lib/queries";
import { client } from "@/lib/sanity.client";
import React from "react";

const page = async ({ params: { id } }: any) => {
  const products = await client.fetch(getCategoryProducts, { id });
  console.log("products>>>>", products);
  return (
    <div className="pt-[10rem]">
      <ProductBanner text="View All Categories" path="/categories" />;
      <div className="max-w-[60%] sm:max-w-[90%] mx-auto mb-20 flex flex-wrap gap-12 justify-between">
        {products?.map((product: any, i: number) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
