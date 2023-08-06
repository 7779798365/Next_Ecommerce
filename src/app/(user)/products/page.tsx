import ProductBanner from "@/custom-components/ProductBanner/ProductBanner";
import AllProducts from "@/custom-components/AllProducts/AllProducts";
import React from "react";

const page = async () => {
  return (
    <div className="pt-[10rem]">
      <ProductBanner text="View All Categories " path="/categories" />
      <AllProducts />
    </div>
  );
};

export default page;
