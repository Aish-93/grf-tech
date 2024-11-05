import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="border-stone-500 border-solid">
      <div className="flex flex-col max-w-full justify-center items-center min-h-60 container mx-auto px-6 md:px-1 ">
        <div className="flex flex-col">
          <div className="flex listing">
          <a href="#home" className="text-gray-500 hover:text-black px-4 py-2">Home</a>
            <a href="#about" className="text-gray-500 hover:text-black px-4 py-2">About</a>
            <a href="#services" className="text-gray-500 hover:text-black px-4 py-2">Services</a>
            <a href="#contact" className="text-gray-500 hover:text-black px-4 py-2">Contact</a>
          </div>
        </div>
        <div className="flex flex-col">
        <div className="flex justify-center align-middle space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"  className="text-pink-600 hover:text-pink-800">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          
          </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm font-bold text-gray-500">
          <p>&copy; {new Date().getFullYear()} Graphene infoTech. All rights reserved.</p>
        </div>
        </div>
      </div>

   
    </footer>
  );
}

export default Footer;
