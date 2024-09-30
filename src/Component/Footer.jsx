import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full py-8 px-4 md:px-16 bg-orange-600 bg-opacity-30 text-gray-800">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-orange-600 py-4 gap-4">
        <div className="w-full flex flex-col items-start gap-2">
          <Link to="/" className="w-40 relative">
            <h1 className="text-2xl font-bold text-orange-600">Construction</h1>
            <span className="text-xs md:text-sm font-bold absolute bottom-5 right-2 text-orange-500 uppercase">
              Thug
            </span>
          </Link>

          <p className="text-sm md:text-md text-gray-600">
            We provide the best construction services in town. Quality and
            precision are our core values.
          </p>
        </div>

        <div className="w-full flex flex-col items-start gap-2">
          <h1 className="text-lg md:text-xl font-semibold text-orange-600">
            Our Services
          </h1>
          <div className="w-full flex flex-col items-start gap-1">
            <p className="text-sm md:text-md text-gray-600">Building Design</p>
            <p className="text-sm md:text-md text-gray-600">
              Architectural Planning
            </p>
            <p className="text-sm md:text-md text-gray-600">Project Management</p>
            <p className="text-sm md:text-md text-gray-600">Renovations</p>
            <p className="text-sm md:text-md text-gray-600">Custom Homes</p>
          </div>
        </div>

        <div className="w-full flex flex-col items-start gap-2">
          <h1 className="text-lg md:text-xl font-semibold text-orange-600">
            Quick Links
          </h1>
          <div className="w-full flex flex-col items-start gap-1">
            <Link to="/about" className="text-sm md:text-md text-gray-600">
              About Us
            </Link>
            <Link to="/projects" className="text-sm md:text-md text-gray-600">
              Projects
            </Link>
            <Link to="/services" className="text-sm md:text-md text-gray-600">
              Services
            </Link>
            <Link to="/careers" className="text-sm md:text-md text-gray-600">
              Careers
            </Link>
            <Link to="/contact" className="text-sm md:text-md text-gray-600">
              Contact Us
            </Link>
          </div>

          {/* New Newsletter Section */}
        </div>

        <div className="w-full flex flex-col items-end gap-2">
          <h1 className="text-lg md:text-xl font-semibold text-orange-600">
            Contact Us
          </h1>
          <div className="w-full flex flex-col items-end gap-1">
            <p className="text-sm md:text-md text-gray-600">
              1234 Build St., Suite 100
            </p>
            <p className="text-sm md:text-md text-gray-600">
              Thug City, TX 75001
            </p>
            <p className="text-sm md:text-md text-gray-600">
              Email: info@constructionthug.com
            </p>
            <p className="text-sm md:text-md text-gray-600">
              Phone: (123) 456-7890
            </p>
          </div>
          <div className="w-full flex flex-col items-start gap-2 mt-4">
            <h1 className="text-lg md:text-xl font-semibold text-orange-600">
              Subscribe to our Newsletter
            </h1>
            <form className="w-full flex flex-col items-start gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-md text-sm md:text-md focus:outline-none focus:border-orange-500"
              />
              <button className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <h1 className="text-base text-center p-4 text-gray-600">
        All rights reserved @ Thug 2024
      </h1>
    </div>
  );
};

export default Footer;
