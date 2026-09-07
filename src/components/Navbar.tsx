import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="bg-gray-900 border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
                <div className="flex items-center">
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                     <span className="text-2xl font-bold bg-clip-text text-transparent bg-white from-indigo-600 to-violent-600">
                       Lizzy Provision Store
                     </span>
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="text-white hover:text-indigo-600 font-medium transition-colors">Home</Link>
                    <Link to="/about" className="text-white hover:text-indigo-600 font-medium transition-colors">About</Link>
                    <Link  to="/product" className="text-white hover:text-indogo font-medium transition-colors">Product</Link>
                    <Link to="/contact" className="text-white hover:text-indigo font-medium transition-colors">Contact</Link>
                    
                </div>
              </div>
            </div> 

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-green-600">
                  <ul className="flex flex-col text-center py-4 space-y-4">
                  <li>
                    <Link to="/" onClick={() => setIsOpen(false)}>
                    Home
                    </Link>
                  </li>

                   <li>
                    <Link to="/about" onClick={() => setIsOpen(false)}>
                    About
                    </Link>
                  </li>

                   <li>
                    <Link to="/products"  onClick={() => setIsOpen(false)}>
                    Products
                    </Link>
                  </li>

                   <li>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Contact
                    </Link>
                  </li>

                   <li>
                    <Link to="/gallery" onClick={() => setIsOpen(false)}>
                    Gallery
                    </Link>
                  </li>
                  </ul>
                </div>  
          )}  
        </nav>
       );
    };

    export default Navbar;

