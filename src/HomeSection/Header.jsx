import React, { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
];

export default function Header({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md dark:bg-neutral-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3">
          <div className="flex items-center justify-between">
            <a
              href="/"
              aria-label="AfroElegance Home"
              className="text-2xl md:text-3xl font-extrabold tracking-tight font-sans text-yellow-700 dark:text-yellow-400"
            >
              AfroElegance
            </a>
            <button
              type="button"
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close main menu" : "Open main menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6 text-yellow-700 dark:text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-yellow-700 dark:text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          <nav
            id="mobile-menu"
            className={`
              ${menuOpen ? "block" : "hidden"}
              md:block
              transition-all duration-300
            `}
            aria-label="Main navigation"
          >
            <ul
              className={`
                flex flex-col md:flex-row
                md:items-center
                mt-2 md:mt-0
                space-y-2 md:space-y-0 md:space-x-8
                text-base font-medium
              `}
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`
                      block px-3 py-2 rounded-md
                      text-slate-700 dark:text-slate-100
                      hover:bg-yellow-50 hover:text-yellow-800
                      dark:hover:bg-yellow-900 dark:hover:text-yellow-200
                      transition-colors
                      focus:outline-none focus:ring-2 focus:ring-yellow-400
                    `}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="md:ml-8 mt-2 md:mt-0">
                <a
                  href="/cart"
                  className={`
                    relative flex items-center px-3 py-2 rounded-md
                    text-slate-700 dark:text-slate-100
                    hover:bg-yellow-50 hover:text-yellow-800
                    dark:hover:bg-yellow-900 dark:hover:text-yellow-200
                    transition-colors
                    focus:outline-none focus:ring-2 focus:ring-yellow-400
                  `}
                  aria-label={`Cart${cartCount > 0 ? ` with ${cartCount} items` : ""}`}
                >
                  <svg
                    className="w-6 h-6 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9V6a2 2 0 10-4 0v3"
                    />
                  </svg>
                  Cart
                  {cartCount > 0 && (
                    <span
                      className="
                        absolute -top-1 -right-2
                        min-w-[1.25rem] h-5
                        bg-red-600 text-white text-xs font-bold
                        rounded-full flex items-center justify-center
                        px-1.5 py-0.5
                        border-2 border-white dark:border-neutral-900
                        shadow
                        transition-all
                      "
                      aria-label={`${cartCount} items in cart`}
                    >
                      {cartCount}
                    </span>
                  )}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {menuOpen && (
        <button
          className="fixed inset-0 z-10 bg-black/10 md:hidden"
          aria-label="Close menu overlay"
          tabIndex={-1}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}