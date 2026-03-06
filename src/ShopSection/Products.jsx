import React from 'react';
import { useCart } from "../CartSection/CartContext";

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
      <div className="flex flex-col flex-1 p-6">
        <h3
          id={product.title.replace(/\s+/g, '-').toLowerCase()}
          className="font-heading text-lg font-semibold text-gray-900 mb-2"
        >
          {product.title}
        </h3>

        <p className="text-gray-600 text-base">{product.description}</p>

        <p className="text-gray-900 font-semibold text-lg mt-3">
          Ghc{product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="
            mt-6 inline-block self-start px-5 py-2 rounded-lg
            bg-brand text-black font-medium shadow
            transition-all duration-200
            hover:bg-accent hover:shadow-lg
            focus:outline-none focus:ring-2 focus:ring-brand
          "
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
      <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
        Discover AfroElegance
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
