import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    
        <div>
          <h2 className="text-xl font-semibold mb-2">AfroElegance</h2>
          <p className="text-sm text-gray-300">
            Discover timeless fashion pieces that define your unique style.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Shop</h2>
          <ul className="space-y-1">
            <li>
              <Link
                to="/Shop"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white"
              >
                All Products
              </Link>
            </li>
            <li>
              <Link
                to="/Shop"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white"
              >
                New Arrivals
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Customer Service</h2>
          <ul className="space-y-1">
            <li>
              <Link
                to="/Contact"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">
                Delivery Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Stay Connected</h2>
          <ul className="space-y-1">
            <li>
              <a
                href="https://wa.me/233502436289"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white"
              >
                <i className="fab fa-whatsapp text-2xl hover:text-green-400"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/share/1GbZy5wYvB/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white"
              >
                <i className="fab fa-facebook-f text-2xl hover:text-blue-500"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/odenehobaakop3?igsh=MWN2NGswaXd4dWJmYQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white"
              >
                <i className="fab fa-instagram text-2xl hover:text-pink-500"></i>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Nana_asare11"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white"
              >
                <i className="fab fa-x-twitter text-2xl hover:text-gray-400"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@sky11bouy?_r=1&_t=ZS-94KjciHTXG8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white"
              >
                <i className="fab fa-tiktok text-2xl hover:text-gray-300"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-gray-900 text-white py-4 text-sm md:flex md:text-center">
          <p className="text-center md:justify-center"> &copy; 2026 AfroElegance. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;