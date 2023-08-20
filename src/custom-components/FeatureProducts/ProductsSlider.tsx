"use client";
import React from "react";
import { SwiperOptions } from "swiper/types/swiper-options";
import { A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CSSProperties } from "react";
import ProductCard from "./ProductCard";
import "swiper/swiper.min.css";

const slideStyles: CSSProperties = {
  boxSizing: "border-box",
  maxWidth: "350px",
};

const ProductsSlider = ({ products }: { products: Product[] }) => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, A11y, Autoplay],
    spaceBetween: 20,
    slidesPerView: "auto",
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };
  return (
    <div className="h-full w-full my-8">
      <Swiper {...sliderSettings} className="h-full w-full">
        {products.map((product: Product, i: number) => (
          <SwiperSlide key={i} style={slideStyles}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
