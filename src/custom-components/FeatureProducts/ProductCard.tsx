import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import Image from "next/image";
import AddToCartButton from "../Button/AddToCartButton";
import Link from "next/link";
import Rating from "../Rating/Rating";
import { getSubString } from "@/lib/helpers";

const ProductCard = ({ product }: { product: any }) => {
  const { name, description, price, rating, slug, mainImage } = product;

  return (
    <Card className="max-w-[350px] mx-auto lg:h-[520px] h-[550px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] border-[#F8DE7E] cursor-pointer hover:scale-95">
      <Link href={`/products/${slug}`}>
        <CardHeader className="h-[320px] justify-center items-center">
          <Image
            alt="product_image"
            src={mainImage}
            width="200"
            height="200"
            className="overflow-auto"
          />
        </CardHeader>
        <CardContent className="lg:h-[130px] h-[165px] mb-4 py-3">
          <div className="flex justify-between">
            <p className="font-semibold">{getSubString(name, 20)}</p>
            <p className="text-[#F8DE7E] font-semibold ">${price}</p>
          </div>
          <CardDescription className="py-2 h-[76px]">
            {getSubString(description, 80)}
          </CardDescription>
          <div className="my-1">
            <Rating rating={rating} />
          </div>
        </CardContent>
      </Link>
      <CardFooter className="flex justify-between">
        <AddToCartButton product={product} />
      </CardFooter>
    </Card>
  );
};
export default ProductCard;
