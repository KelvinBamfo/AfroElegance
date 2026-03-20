import ContactForm from '../ContactSection/ContactForm'

function contact() {
  return (
    <section className="bg-white dark:bg-neutral-900 text-slate-800 dark:text-slate-100 px-4 py-10 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-yellow-700 dark:text-yellow-400 mb-2">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg">
            Have a question about our products or need a different design? We're here for you!
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-yellow-700 dark:text-yellow-400 mb-2">
              Get in Touch
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <i className="fab fa-whatsapp text-2xl text-green-500" aria-hidden="true"></i>
                <a
                  href="https://wa.me/233502436289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-green-400 underline focus:outline-none focus:ring-2 focus:ring-green-400"
                  aria-label="Chat with us on WhatsApp"
                >
                  WhatsApp: +233 50 243 6289
                </a>
              </div>

              <div className="flex items-center gap-3">
                <i className="fas fa-envelope text-lg text-blue-500" aria-hidden="true"></i>
                <a
                  href="mailto:kelvinappiah765@gmail.com"
                  className="text-blue-500 hover:text-blue-300 underline focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label="Send us an email"
                >
                  kelvinappiah765@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <i className="fas fa-phone text-lg text-blue-500" aria-hidden="true"></i>
                <a
                  href="tel:+233502436289"
                  className="text-blue-500 hover:text-blue-300 underline focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label="Call us"
                >
                  +233 50 243 6289
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-400">Address</h3>
            <p className="mt-1">House No 30, Roman Hill, Assin Fosu, Ghana</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-400">Business Hours</h3>
            <ul className="mt-1 space-y-1">
              <li>Monday – Friday: 8am – 5pm</li>
              <li>Saturday: 10am – 3pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default contact;