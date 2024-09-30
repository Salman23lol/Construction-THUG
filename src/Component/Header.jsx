import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { CSSTransition } from "react-transition-group";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-16 bg-gray-100">
      <div className="w-full h-full flex items-center justify-between px-5">
        <Link to="/" className="w-28 relative">
          <h1 className="text-lg">Construction</h1>
          <span className="text-xs absolute bottom-4 right-0 text-orange-600 uppercase">Thug</span>
        </Link>
        <div className="hidden md:flex w-auto h-full items-center gap-8">
          <Link to="/" className="font-light hover:text-orange-600 uppercase">Home</Link>
          <Link to="/about-us" className="font-light hover:text-orange-600 uppercase">About Us</Link>
          <Link to="/services" className="font-light hover:text-orange-600 uppercase">Services</Link>
          <Link to="/projects" className="font-light hover:text-orange-600 uppercase">Our Projects</Link>
          <Link to="/blog-news" className="font-light hover:text-orange-600 uppercase">Blogs</Link>
          <Link to="/contact-us" className="font-light hover:text-orange-600 uppercase">Contact Us</Link>
        </div>
        <button className="md:hidden w-10 h-10 duration-200 ease-in-out hover:bg-orange-600 rounded-sm hover:text-white hover:bg-opacity-60 flex items-center justify-center" onClick={toggleMenu}>
          <AiOutlineMenuFold size={20} />
        </button>
      </div>

      {/* Mobile Menu */}
      <CSSTransition
        in={isMenuOpen}
        timeout={300}
        classNames="menu"
        unmountOnExit
        onEnter={() => document.body.style.overflow = 'hidden'}
        onExited={() => document.body.style.overflow = 'auto'}
      >
        <div className="md:hidden fixed inset-0 bg-gray-100 z-50 p-4">
          <button
            onClick={toggleMenu}
            className="w-10 h-10 duration-200 ease-in-out hover:bg-orange-600 rounded-sm hover:text-white hover:bg-opacity-60 flex items-center justify-center absolute top-4 right-4"
          >
            <IoMdClose size={20} />
          </button>
          <div className="flex flex-col items-center mt-12">
            <Link to="/" className="py-2 text-lg font-light hover:text-orange-600 uppercase" onClick={toggleMenu}>Home</Link>
            <Link to="/about-us" className="py-2 text-lg font-light hover:text-orange-600 uppercase" onClick={toggleMenu}>About Us</Link>
            <Link to="/services" className="py-2 text-lg font-light hover:text-orange-600 uppercase" onClick={toggleMenu}>Services</Link>
            <Link to="/projects" className="py-2 text-lg font-light hover:text-orange-600 uppercase" onClick={toggleMenu}>Our Projects</Link>
            <Link to="/blog-news" className="py-2 text-lg font-light hover:text-orange-600 uppercase" onClick={toggleMenu}>Blogs</Link>
            <Link to="/contact-us" className="py-2 text-lg font-light hover:text-orange-600 uppercase" onClick={toggleMenu}>Contact Us</Link>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Header;
