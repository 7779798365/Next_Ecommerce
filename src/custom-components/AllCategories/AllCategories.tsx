import React from "react";
import CategoryCard from "./CategoryCard";

const AllCategories = ({ categories }: { categories: any }) => {
  return (
    <div className="max-w-[90%] mx-auto mb-20 grid sm:grid-cols-2 grid-cols-1 gap-4 ">
      {categories?.map((categoryData: any, i: number) => (
        <CategoryCard data={categoryData} key={i} />
      ))}
    </div>
  );
};

export default AllCategories;
