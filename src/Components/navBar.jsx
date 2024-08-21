import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logo from '../assets/developer-blue.png'
import { FaRegMessage } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { Link } from 'react-router-dom';



function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          <Link to="/" className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
            <FaLaptopCode className='text-3xl text-gray-700 hover:text-blue-500'/>
          </Link>
          <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/about" className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link to="/projects" className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
                <Link to="/contact" className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block ">
            <div className='flex justify-between'>
                <FaRegMessage className='text-gray-700 hover:text-blue-500' />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNav} className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-blue-500">
              {navOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {navOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-gray-800 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#services" className="text-gray-800 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#about" className="text-gray-800 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#contact" className="text-gray-800 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <button className="bg-indigo-600 text-white w-full px-4 py-2 rounded-md hover:bg-indigo-700">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
