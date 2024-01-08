import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 bg-opacity-50 mt-10 md:mt-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <Image src={logo} width={100} height={50} alt="Logo" />
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-gray-400">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Instagram size={24} />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            About Us
          </a>
          <a href="#" className="hover:text-gray-400">
            Services
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
          <a href="#" className="hover:text-gray-400">
            Impressum
          </a>
          <a href="#" className="hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="/adminLogin" className="hover:text-gray-400">
            admin
          </a>
        </div>
        <p className="text-sm mt-4 md:mt-0">&copy; 2024 AXEX Labs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
