import React from "react";
import Products from "../ShopSection/Products";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Featured = () => (
  <section
    aria-labelledby="featured-heading"
    className="bg-white py-12 md:py-16"
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        id="featured-heading"
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 text-center md:text-left mb-2"
      >
        Featured Collection
      </h2>
      <p className="text-base sm:text-lg md:text-xl font-normal text-gray-600 leading-relaxed max-w-2xl mx-auto md:mx-0 text-center md:text-left mb-8">
        Handpicked pieces that define elegance and sophistication
      </p>
      <div className="mb-5">
        <Products />
      </div>
      <div className="flex justify-center md:justify-start">
        <Link
          to="/shop"
          className="group inline-flex items-center font-semibold text-amber-600 hover:text-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 transition-colors duration-200 underline-animation"
          aria-label="View all products"
        >
          View all products
          <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"/>
        </Link>
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

export default Featured;