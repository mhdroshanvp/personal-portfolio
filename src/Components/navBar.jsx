import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logo from '../assets/developer-blue.png'
import { FaRegMessage } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { LuUserSquare } from "react-icons/lu";
import { GrNotes } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";
import { AiOutlineFullscreen } from "react-icons/ai";


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
          
          <Link to="/" className="px-3">
            <FaLaptopCode className='text-2xl text-gray-700 hover:text-blue-500'/>
          </Link>
          
          <div className="hidden md:block">

            <div className="ml-10 flex items-baseline space-x-4">
                
                <Link to="/" className="relative group px-4">
                  <IoHomeOutline className='text-1xl text-gray-700 hover:text-blue-500' />
                  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 text-xs bg-gray-800 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Home
                  </span>
                </Link>

                <Link to="/about" className="relative group px-4">
                  <LuUserSquare className='text-1xl text-gray-700 hover:text-blue-500' />
                  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 text-xs bg-gray-800 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    About
                  </span>
                </Link>

                <Link to="/projects" className="relative group px-4">
                  <GrNotes className='text-1xl text-gray-700 hover:text-blue-500' />
                  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 text-xs bg-gray-800 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Projects
                  </span>
                </Link>

                <Link to="/contact" className="relative group px-4">
                  <IoMdContact className='text-1xl text-gray-700 hover:text-blue-500' />
                  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 text-xs bg-gray-800 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Contact
                  </span>
                </Link>
            
            </div>

            </div>
          </div>
          <div className="hidden md:block ">
            
            <div className="relative group px-4">
                  <AiOutlineFullscreen className='text-1xl text-gray-700 hover:text-blue-500' />
                  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 text-sm bg-gray-800 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Fullscreen
                  </span>
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
