import React from 'react';

function Header() {

    return (
    <>
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 py-4">
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 tracking-tight">
            AfroElegance
        </h1>

        <nav aria-label="Primary navigation" className="flex-1">
            <ul className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-6 list-none m-0 p-0">
            <li>
                <a href="#" className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors">
                Home
                </a>
            </li>
            <li>
                <a href="#" className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors">
                Shop
                </a>
            </li>
            <li>
                <a href="#" className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors">
                Contact
                </a>
            </li>
            </ul>
        </nav>

        <div className="ml-4">
            <ul className="list-none m-0 p-0">
            <li>
                <a href="#" className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors">
                Cart
                </a>
            </li>
            </ul>
        </div>
        </header>

        <section id='home' className='min-h-screen bg-cover flex items-center justify-center relative inset-0 bg-center md:bg-right bg-[url("./assets/afrobg.jpg")]'>
            <div className='items-center justify-center h-full'>
                <h1 className='text-8xl sm:text-5xl text-center font-serif font-bold text-white'>Discover your style</h1>
                <h4 className='font-semibold text-3xl font-stretch-100%'>Explore our beautiful clothings</h4>
            </div>
        </section>
    </>
    );
};

export default Header;