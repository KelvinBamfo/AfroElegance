import React, { useState } from 'react';
import { useCart } from "../CartSection/CartContext";
import { useToast } from "../data/ToastContext"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const products = [
  {
    id: 1,
    title: 'Modern Straight Dress',
    description: 'A modern straight dress outfits design to with African colors to enhance beauty and promote African culture.',
    size: ["S", "M", "L", "XL"],
    price: 500,
    material: '100% Nilon',
    image: '/items/red-dress.png',
  },
  {
    id: 2,
    title: 'Elegant Straight-flair Dress',
    description: 'Stunning short dress which unvails real beauty.',
    size: ["S", "M", "L", "XL"],
    price: 400,
    material: '100% Cotton',
    image: '/items/dress.png',
  },
  {
    id: 3,
    title: 'Highwaist Roses',
    description: 'A skirt made of simplicity and accompanied by freedom.',
    size: ["S", "M", "L", "XL"],
    price: 300,
    material: '100% Cotton',
    image: '/items/skirt.png',
  },
  {
    id: 4,
    title: 'Cool Leaf',
    description: 'An outfit derived from the friendly and lovely African leafs mixed with cool African colors to define true identity.',
    size: ["S", "M", "L", "XL"],
    price: 450,
    material: '100% Cotton',
    image: '/items/short3.png',
  },
];

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);

    showToast("Product added to cart!", () => navigate("/cart"));
  };

  return (
    
    <article
      className="
        bg-white rounded-xl shadow-md overflow-hidden
        flex flex-col h-full transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
        focus-within:ring-2 focus-within:ring-brand
      "
      tabIndex={-1}
      aria-labelledby={product.title.replace(/\s+/g, '-').toLowerCase()}
    >
      <div className="h-64 bg-gray-100 overflow-hidden flex items-center justify-center">
        <Zoom>
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="object-contain max-h-full max-w-full"
        />
        </Zoom>
      </div>
      
      <div className="p-6 m-0 flex flex-col flex-1">
        <Link to={`/product/${product.id}`}>
        <h3
          id={product.title.replace(/\s+/g, '-').toLowerCase()}
          className="font-heading text-lg font-semibold text-gray-900 mb-2"
        >
          {product.title}
        </h3>

        <p className="text-gray-600 text-sm mt-2 flex-1 line-clamp-2">{product.description}</p>

        <p className="text-gray-900 font-semibold text-lg mt-4">
          Ghc{product.price}
        </p>
        </Link>
        
        <button
          onClick={handleAddToCart}
          className="mt-6 bg-gray-200 text-gray-700 hover:scale-105 font-medium py-2 shadow-md rounded-2xl hover:bg-gray-300 hover:bg-accent transition"
        >
          Add to Cart
        </button>
      </div>
    </article>
    
  );
}

function Products() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-0">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
