import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  // Function to determine whether to render the Navbar
  const renderNavbar = () => {
    const { pathname } = location;
    return !['/login', '/signup'].includes(pathname);
  };

  return (
     
    renderNavbar() && (  
    <nav className="text-white ">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* Left side logo and company name */}
            <Link to="/" className="flex items-center">
              <img className="h-12 w-auto text-white" src="./Images/Logo1.png" alt="Logo"  />
              <span className="text-white text-xl ml-2 font-sans italic mt-2">Swirl <br /> Marketing</span>
            </Link>
          </div>
          <div className="md:hidden">
            {/* Hamburger menu for small screens */}
            <button className="mobile-menu-button">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            {/* Centered navigation list for medium and large screens */}
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:text-white px-3 py-2 rounded-md border-b-2 border-transparent hover:border-white">Home</Link>
              <Link to="/services" className="hover:text-white px-3 py-2 rounded-md border-b-2 border-transparent hover:border-white">Services</Link>
              <Link to="/partner" className="hover:text-white px-3 py-2 rounded-md border-b-2 border-transparent hover:border-white">Partner</Link>
              <Link to="/about" className="hover:text-white px-3 py-2 rounded-md border-b-2 border-transparent hover:border-white">About Us</Link>
              <Link to="/contact" className="hover:text-white px-3 py-2 rounded-md border-b-2 border-transparent hover:border-white">Contact Us</Link>
            </div>
          </div>
          <div className="hidden md:block">
            {/* Right side login and logout buttons */}
            <div className="ml-4 flex items-center md:ml-6">
              {/* Link to Login page */}
              <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mr-4">Log In</Link>
              {/* Link to SignUp page */}
              <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    )
  );
}

export default Navbar;
