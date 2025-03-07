import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon, HomeIcon, BuildingStorefrontIcon, UserIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-600">Gaurav Food App</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium">
              Home
            </Link>
            <Link href="/restaurants" className="text-gray-700 hover:text-primary-600 font-medium">
              Restaurants
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium">
              Contact
            </Link>
          </nav>

          {/* User and Cart */}
          <div className="flex items-center space-x-4">
            <Link href="/account" className="text-gray-700 hover:text-primary-600">
              <UserIcon className="h-6 w-6" />
            </Link>
            <Link href="/cart" className="relative text-gray-700 hover:text-primary-600">
              <ShoppingCartIcon className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              className="md:hidden text-gray-700"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 py-2 border-t border-gray-200">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <HomeIcon className="h-5 w-5" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/restaurants"
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <BuildingStorefrontIcon className="h-5 w-5" />
                  <span>Restaurants</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 