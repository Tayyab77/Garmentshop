import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto w-full flex flex-wrap items-center justify-between">
        <div className="text-white text-lg font-bold mb-4 sm:mb-0">
          <a href="/">Your Logo</a>
        </div>
        <ul className="flex flex-wrap space-x-16"> {/* Increased spacing to space-x-6 */}
          <li>
            <a href="/" className="text-white">Home</a>
          </li>
          <li>
            <a href="/about" className="text-white">About</a>
          </li>
          <li>
            <a href="/services" className="text-white">Services</a>
          </li>
          <li>
            <a href="/contact" className="text-white">Contact</a>
          </li>
        </ul>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-2 py-1 border rounded-md"
          />
          {/* Add a search button or icon here if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
