"use client";
import React from "react";
import ReactStars from "react-stars";

const Rating = ({ rating }: { rating: any }) => {
  return (
    <div className="flex items-center gap-2">
      <ReactStars
        count={5}
        value={rating?.rate}
        half={true}
        size={20}
        edit={false}
        color2="#F8DE7E"
      />
      <p className="mt-[4px] text-[13px]">({rating?.rate})</p>
    </div>
  );
};

export default Rating;
