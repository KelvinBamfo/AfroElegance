function Body() {

    return (
    <>

    <div className="h-screen bg-cover bg-center bg-no-repeat bg-[url('/images/afroelegance.jpg')]">
        <div className="absolute inset-0 bg-black/40">
            <div className="relative flex items-center justify-center h-screen">
            <section>
                <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-tight font-heading">
                    Discover your style
                </h1>
                <p className="text-white/90 text-lg md:text-2xl font-light mt-4 md:mt-6 max-w-xl mx-auto">
                    Explore our beautiful clothings
                </p>
                <a href="#shop" className="inline-block mt-8 px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-yellow-700 via-yellow-600 to-amber-500 text-white font-semibold rounded-full shadow-lg hover:brightness-105 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400">
                    Shop collection
                </a>
            </section>
            </div>
        </div>
    </div>
    </>
)
};
export default Body;