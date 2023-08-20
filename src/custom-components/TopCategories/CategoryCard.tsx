import React from "react";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category }: { category: Category }) => {
  const { slug, name, image } = category;
  return (
    <Link href={`/categories/${slug}`}>
      <div className=" flex items-center h-[135px] border gap-4 py-4 px-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] border-[#F8DE7E] hover:scale-95 cursor-pointer ">
        <div>
          <Image
            src={image}
            width="100"
            height="100"
            alt="category_img"
            className="bg-transparent"
          />
        </div>
        <div>
          <p className="text-lg font-semibold">{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
