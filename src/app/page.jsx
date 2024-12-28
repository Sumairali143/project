"use client"
import React, { useState } from 'react';
import { ShoppingCart, User, MenuIcon } from 'lucide-react';
const MenuItem = ({ name, price, image }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">${price.toFixed(2)}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => setQuantity(Math.max(0, quantity - 1))}
            className="bg-red-500 text-white px-2 py-1 rounded-l"
          >
            -
          </button>
          <span className="bg-gray-200 px-4 py-1">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="bg-green-500 text-white px-2 py-1 rounded-r"
          >
            +
          </button>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const FastFoodPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Cheeseburger', price: 5.99, image: '/placeholder.svg?height=200&width=300' },
    { name: 'Pizza', price: 8.99, image: '/placeholder.svg?height=200&width=300' },
    { name: 'Fries', price: 2.99, image: '/placeholder.svg?height=200&width=300' },
    { name: 'Chicken Wings', price: 7.99, image: '/placeholder.svg?height=200&width=300' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-red-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            FastFood
          </a>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-red-200">
              Home
            </a>
            <a href="#" className="hover:text-red-200">
              Menu
            </a>
            <a href="#" className="hover:text-red-200">
              About
            </a>
            <a href="#" className="hover:text-red-200">
              Contact
            </a>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <a href="/signup" className="hover:text-red-200">
              Sign Up
            </a>
            <a href="/login" className="hover:text-red-200">
              Login
            </a>
            <a href="/Dashborad" className="hover:text-red-200">
              Dashboard
            </a>
            <ShoppingCart className="h-6 w-6" />
            <User className="h-6 w-6" />
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-red-500 text-white p-4">
          <a href="#" className="block py-2">
            Home
          </a>
          <a href="#" className="block py-2">
            Menu
          </a>
          <a href="#" className="block py-2">
            About
          </a>
          <a href="#" className="block py-2">
            Contact
          </a>
          <a href="#" className="block py-2">
            Sign Up
          </a>
          <a href="#" className="block py-2">
            Login
          </a>
          <a href="#" className="block py-2">
            Dashboard
          </a>
        </div>
      )}

      {/* Hero Section */}
      <header className="bg-yellow-400 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Delicious Fast Food
          </h1>
          <p className="text-xl mb-8">Order now and satisfy your cravings!</p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
            Order Now
          </button>
        </div>
      </header>

      {/* Menu Section */}
      <main className="flex-grow container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 pl-1 ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">FastFood</h3>
            <p>Delicious food, delivered fast.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>123 Fast Food Street</p>
            <p>Foodville, FK 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@fastfood.com</p>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 FastFood. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FastFoodPage;

