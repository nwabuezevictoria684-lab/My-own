

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Store Information */}
        <div>
          <h2 className="text-2xl font-bold text-orange-400 mb-4">
            Lizzy Provision Store
          </h2>

          <p className="text-gray-300 leading-7">
            Your trusted store for quality provisions, groceries,
            drinks, and everyday household needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-orange-400 mb-4">
            Quick Links
          </h3>

          <div className="space-y-2">
            <a href="/" className="block hover:text-orange-400">
              Home
            </a>

            <a href="/about" className="block hover:text-orange-400">
              About
            </a>

            <a href="/product" className="block hover:text-orange-400">
              Products
            </a>

            <a href="/contact" className="block hover:text-orange-400">
              Contact
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold text-orange-400 mb-4">
            Contact Us
          </h3>

          <p className="text-gray-300 mb-2">
            📞 Phone: 070 310 797 88
          </p>

          <p className="text-gray-300 mb-2">
            📧 Email: lizzyprovisionstore@gmail.com
          </p>

          <p className="text-gray-300">
            📍 Location: Nigeria
          </p>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 text-center py-5">
        <p className="text-gray-400">
          © 2026 Lizzy Provision Store. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;