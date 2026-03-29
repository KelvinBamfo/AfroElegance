import React, { useState } from 'react';
import { useCart } from "../CartSection/CartContext";
import { useToast } from "../data/ToastContext"
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    image: '/items/red-dress.png',
    title: 'Modern Straight Dress',
    description: 'A modern straight dress outfits design to with African colors to enhance beauty and promote African culture.',
    price: 350,
  },
  {
    id: 2,
    image: '/items/dress.png',
    title: 'Elegant Straight-flair Dress',
    description: 'Classic intercultural inspired dress, suitable for for office, meeting and many other events.',
    price: 350,
  },
  {
    id: 3,
    image: '/items/skirt.png',
    title: 'Ndebele Pattern Skirt',
    description: 'Vivid geometric prints inspired by South Africa Ndebele heritage, reimagined for today.',
    price: 350,
  },
  {
    id: 4,
    image: '/items/short3.png',
    title: 'Classy Short',
    description: 'Beautiful Ghanaian cultural colors inspired short.',
    price: 350,
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
        flex flex-col transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
        focus-within:ring-2 focus-within:ring-brand
      "
      tabIndex={-1}
      aria-labelledby={product.title.replace(/\s+/g, '-').toLowerCase()}
    >
      <div className="aspect-square bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3
          id={product.title.replace(/\s+/g, '-').toLowerCase()}
          className="font-heading text-lg font-semibold text-gray-900 mb-2"
        >
          {product.title}
        </h3>

        <p className="text-gray-600 text-sm mt-2 flex-1">{product.description}</p>

        <p className="text-gray-900 font-semibold text-lg mt-4">
          Ghc{product.price}
        </p>

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
