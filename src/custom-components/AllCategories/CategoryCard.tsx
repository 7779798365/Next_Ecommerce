import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ data }: { data: Category }) => {
  const { id, name, image } = data;
  return (
    <Link href={`/categories/${id}`}>
      <div className="border border-[#F8DE7E] h-[295px] py-8 flex flex-col justify-center items-center hover:bg-[#F8DE7E] cursor-pointer">
        <Image
          src={image}
          alt="category"
          width="200"
          height="200"
          className="object-contain"
        />
        <p className="text-lg font-bold">{name}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
