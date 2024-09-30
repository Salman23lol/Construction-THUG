import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full h-[700px] p-6 bg-orange-600 text-white bg-opacity-35 flex items-center justify-center relative">
      <img
        src="https://www.hashmicro.com/blog/wp-content/uploads/2022/10/Tools-16.jpg"
        className="absolute top-0 opacity-40 w-full h-full object-fill"
      />
      <div className="w-full md:p-8 flex flex-col gap-2 items-center justify-center absolute px-6">
        <h2 className="text-xl md:text-2xl font-medium">
          Welcome To Construction{" "}
          <span className="text-orange-600 font-light uppercase">Thug</span>
        </h2>
        <h1 className="w-full text-3xl md:text-5xl font-light text-center">
          Crafting with Precision and excellence.
        </h1>
        <p className="w-full max-w-md text-center">
          We excel at transforming visions into reality through outstanding
          craftmanship and precise attention to detail. With years of expirance
          and a dedication to quality
        </p>
        <div className="w-auto flex items-center gap-4 mt-6">
          <Link className="px-4 py-2 rounded-sm bg-orange-500 bg-opacity-70 hover:bg-opacity-60 shadow-lg">
            Contact Now
          </Link>
          <Link className="px-4 py-2 rounded-sm bg-pink-500 bg-opacity-70 hover:bg-opacity-60 shadow-lg">
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
