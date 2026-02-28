import React from 'react';
import { Link } from 'react-router-dom';

const productCategories = [
  {
    id: 1,
    slug: 'straight-dresses',
    image: '/items/red-dress.png',
    images: [
      '/items/slit-dress.png',
      '/items/dress.png',
      '/items/dress1.png',
      '/items/dress2.png',
      '/items/dress3.png',
      '/items/dress4.png',
    ],
    title: 'Straight Dresses',
  },
  {
    id: 2,
    slug: 'women-shorts',
    image: '/items/shorts.png',
    images: [
      '/items/shorts1.png',
      '/items/shorts2.png',
      '/items/shorts3.png',
    ],
    title: 'Women Shorts',
  },
  {
    id: 3,
    slug: 'skirts',
    image: '/items/skirt.png',
    images: [
      '/items/skirt2.png',
      '/items/skirt3.png',
      '/items/skirt4.png',
    ],
    title: 'Skirts',
  },
  {
    id: 4,
    slug: 'tops',
    image: '/items/top1.png',
    images: [
      '/items/top.png',
      '/items/top2.png',
    ],
    title: 'Tops',
  },
];

const brandRing = 'focus:ring-2 focus:ring-brand focus:outline-none';

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
        <Link to={`/category/${slug}`} className="mt-6 inline-block self-start px-5 py-2 rounded-lg bg-brand text-white font-medium shadow transition-all duration-200 hover:bg-accent hover:shadow-lg" >
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
          />
        ))}
      </div>
    </section>
  );
}

export default ProductCategories