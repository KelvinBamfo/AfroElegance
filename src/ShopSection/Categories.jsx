import React from 'react';
import { Link } from 'react-router-dom';
import productCategories from "../data/productCategories";


function ProductCard({ image, title, description, slug }) {
  return (
    <article
      className={`
        bg-white rounded-xl shadow-md overflow-hidden
        flex flex-col transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
        focus-within:ring-2 focus-within:ring-brand
      `}
      tabIndex={-1}
      aria-labelledby={title.replace(/\s+/g, '-').toLowerCase()}
    >
      <div className="aspect-square bg-gray-100 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <h3
          id={title.replace(/\s+/g, '-').toLowerCase()}
          className="font-heading text-lg font-semibold text-gray-900 mb-2"
        >
          {title}
        </h3>
        <p className="text-gray-600 text-base flex-1">{description}</p>
        <Link to={`/productCategories/${slug}`} className="mt-6 inline-block self-start px-5 py-2 rounded-lg bg-brand text-black font-medium shadow transition-all duration-200 hover:bg-accent hover:shadow-lg" >
          View Details
        </Link>
      </div>
    </article>
  );
}

function ProductCategories() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
        Discover AfroElegance
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {productCategories.map((category) => (
          <ProductCard
            key={category.id}
            image={category.image}
            title={category.title}
            description={category.description}
            slug={category.slug}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductCategories;