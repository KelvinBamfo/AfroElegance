import React from "react";

function Body() {
  return (
    <>
      <div
        id="home"
        className="
          relative
          bg-[url('images/bak.png')]
          bg-cover bg-top md:bg-center bg-no-repeat
          min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]
          flex items-center justify-center
          pt-16 md:pt-20
        "
      >
        <div className="absolute inset-0 bg-black/25 md:bg-black/30 pointer-events-none"/>
        <section className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-3xl">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-tight font-heading">
            Discover your style
          </h1>

          <p className="text-white/90 text-lg md:text-2xl font-light mt-4 md:mt-6 max-w-xl mx-auto">
            Explore our beautiful clothings
          </p>

          <a
            href="#shop"
            className="inline-block mt-8 px-8 py-3 md:px-10 md:py-4 bg-linear-to-r from-yellow-700 via-yellow-600 to-amber-500 text-white font-semibold rounded-full shadow-lg hover:brightness-105 transition duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            Shop collection
          </a>
        </section>
      </div>
    </>
  );
}

export default Body;