import React from 'react';
const products = [
  {
    id: 1,
    image: '/images/kente-dress.jpg',
    title: 'Kente Heritage Dress',
    description: 'A modern silhouette crafted from authentic Ghanaian Kente, celebrating tradition and innovation.',
  },
  {
    id: 2,
    image: '/images/beaded-blazer.jpg',
    title: 'Beaded Elegance Blazer',
    description: 'Hand-beaded lapels and a tailored fit—where Afrocentric artistry meets contemporary style.',
  },
  {
    id: 3,
    image: '/images/ndebele-skirt.jpg',
    title: 'Ndebele Pattern Skirt',
    description: 'Vivid geometric prints inspired by South Africa’s Ndebele heritage, reimagined for today.',
  },
  {
    id: 4,
    image: '/images/shweshwe-top.jpg',
    title: 'Shweshwe Luxe Top',
    description: 'Classic Shweshwe fabric, elevated with modern tailoring and subtle gold accents.',
  },
];

const brandRing = 'focus:ring-2 focus:ring-brand focus:outline-none';

function ProductCard({ image, title, description }) {
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
        <button
          className={`
            mt-6 inline-block self-start px-5 py-2 rounded-lg
            bg-brand text-white font-medium shadow
            transition-all duration-200
            hover:bg-accent hover:shadow-lg
            focus:outline-none focus:ring-2 focus:ring-brand
          `}
          aria-label={`View details for ${title}`}
        >
          View Details
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
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Products