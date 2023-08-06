import SingleProduct from "@/custom-components/SingleProduct/SingleProduct";
import { getProductDetail } from "@/lib/queries";
import { client } from "@/lib/sanity.client";
import { useRouter } from "next/router";
import React from "react";

const page = async ({ params: { slug } }: any) => {
  const product = await client.fetch(getProductDetail, { slug });

  return <SingleProduct product={product} />;
};

export default page;
