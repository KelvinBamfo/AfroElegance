import React from 'react';

function Help() {
  return (
    <section className="bg-amber-50 py-12 px-6 rounded-lg shadow-md">
      <div className="max-w-4xl mx-auto text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Need help choosing?
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Our fashion experts are here to help you find the perfect fit for you.
        </p>
        <div className="flex justify-center sm:justify-start">
          <a
            href="/products"
            className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-md shadow hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 transition duration-200"
            aria-label="Contact our fashion experts"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Help;