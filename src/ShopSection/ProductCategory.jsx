import React from "react";
import Products from "../ShopSection/Products";


const Category = () => (
  <section
    aria-labelledby="Category"
    className="bg-white py-12 md:py-16"
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        id="featured-heading"
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 text-center md:text-left mb-2"
      >
        Shop by category 
      </h2>
      <p className="text-base sm:text-lg md:text-xl font-normal text-gray-600 leading-relaxed max-w-2xl mx-auto md:mx-0 text-center md:text-left mb-8">
        Find your desired fit 
      </p>
      <div className="mb-10">
        <Products />
      </div>
    </div>
    <style jsx>{`
      .underline-animation {
        position: relative;
      }
      .underline-animation::after {
        content: "";
        display: block;
        position: absolute;
        left: 50%;
        bottom: -2px;
        width: 0;
        height: 2px;
        background: currentColor;
        transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
          left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        border-radius: 1px;
        z-index: 0;
        transform: translateX(-50%);
      }
      .underline-animation:hover::after,
      .underline-animation:focus::after,
      .underline-animation:active::after {
        width: 100%;
        left: 0;
        transform: none;
      }
    `}</style>
  </section>
);

export default Category;