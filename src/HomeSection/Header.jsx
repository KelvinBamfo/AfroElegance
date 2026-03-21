import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
];

function Header({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Lock background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="bg-white shadow-md dark:bg-neutral-900 transition-colors relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-3 h-16 md:h-20">

          {/* Logo + Mobile Toggle */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <NavLink
              to="/"
              aria-label="AfroElegance Home"
              className="text-2xl md:text-3xl font-extrabold tracking-tight font-sans text-yellow-700 dark:text-yellow-400"
              onClick={closeMenu}
            >
              AfroElegance
            </NavLink>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-100"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                <svg className="w-6 h-6 text-yellow-700 dark:text-yellow-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-yellow-700 dark:text-yellow-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation */}
          <nav
            id="mobile-menu"
            className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-neutral-900 transform ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-auto md:h-auto md:bg-transparent z-30`}
            aria-label="Main navigation"
          >
            <ul className="flex flex-col md:flex-row md:items-center mt-20 md:mt-0 space-y-6 md:space-y-0 md:space-x-8 text-base font-medium px-6 md:px-0">

              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md transition-colors ${
                        isActive
                          ? "bg-yellow-200 text-yellow-900"
                          : "text-yellow-900 dark:text-yellow-400 hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-200 dark:hover:text-white"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}

              {/* Cart */}
              <li className="md:ml-6">
                <NavLink
                  to="/cart"
                  onClick={closeMenu}
                  className="relative flex items-center px-3 py-2 rounded-md text-slate-700 dark:text-slate-100 hover:bg-yellow-50 hover:text-yellow-800 dark:hover:bg-yellow-900 dark:hover:text-yellow-200 transition-colors"
                >
                  <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                </NavLink>
              </li>

            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 transition-opacity duration-300 md:hidden z-20"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}

export default Header;
