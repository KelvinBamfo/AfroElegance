import React, { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/Contact" },
];

function Header({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-white shadow-md dark:bg-neutral-900 transition-colors relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-3 h-16 md:h-20">

          {/* Logo + Mobile Toggle */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link
              to="/"
              aria-label="AfroElegance Home"
              className="text-2xl md:text-3xl font-extrabold tracking-tight font-sans text-yellow-700 dark:text-yellow-400"
              onClick={closeMenu}
            >
              AfroElegance
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-100"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6 text-yellow-700 dark:text-yellow-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-yellow-700 dark:text-yellow-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation */}
          <nav
            id="mobile-menu"
            className={`${menuOpen ? "block" : "hidden"} md:block w-full md:w-auto`}
            aria-label="Main navigation"
          >
            <ul className="flex flex-col md:flex-row md:items-center mt-4 md:mt-0 space-y-3 md:space-y-0 md:space-x-8 text-base font-medium">

              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={closeMenu}
                    className="block px-3 py-2 rounded-md text-yellow-900 dark:text-yellow-400 hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-200 dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* Cart */}
              <li className="md:ml-6">
                <Link
                  to="/cart"
                  onClick={closeMenu}
                  className="relative flex items-center px-3 py-2 rounded-md text-slate-700 dark:text-slate-100 hover:bg-yellow-50 hover:text-yellow-800 dark:hover:bg-yellow-900 dark:hover:text-yellow-200 transition-colors"
                >
                  <svg
                    className="w-6 h-6 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9V6a2 2 0 10-4 0v3"
                    />
                  </svg>
                  Cart
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-2 min-w-5 h-5 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center px-1.5 border-2 border-white dark:border-neutral-900 shadow">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </li>

            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 md:hidden z-10"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}

export default Header;
