import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to determine whether to render the Navbar
  const renderNavbar = () => {
    const { pathname } = location;
    return !['/login', '/signup'].includes(pathname);
  };

  return renderNavbar() && (
    <nav className="text-white">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side logo and company name */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img className="h-12 w-auto text-white" src="./Images/Logo1.png" alt="Logo" />
              <span className="text-white text-xl ml-2 font-sans italic mt-2">Swirl <br /> Marketing</span>
            </Link>
          </div>
          {/* Hamburger menu for small screens */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="mobile-menu-button">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Centered navigation list for medium and large screens */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/partner">Partner</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </div>
          </div>
          {/* Right side login and logout buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <LinkButton to="/login">Log In</LinkButton>
              <LinkButton to="/signup">Sign Up</LinkButton>
            </div>
          </div>
        </div>
        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/partner">Partner</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
              <LinkButton to="/login"  >Login</LinkButton>
              <LinkButton to="/signup">Signup</LinkButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Custom NavLink component
function NavLink({ to, children }) {
  return (
    <Link to={to} className="hover:border-white border-transparent border-b-2  block px-2 py-2 rounded-md text-base font-medium">{children}</Link>
  );
}

// Custom LinkButton component
function LinkButton({ to, children }) {
  return (
    <Link to={to} className="bg-blue-700 hover:bg-blue-600
     text-white font-semibold py-2 px-4 rounded-lg mr-4">{children}</Link>
  );
}

export default Navbar;
