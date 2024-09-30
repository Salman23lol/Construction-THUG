import React from "react";
import { FaUser } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="text-center flex flex-col items-center">
        <h1 className="text-xl font-semibold text-orange-600">Admin Panel</h1>
        <h1 className="text-3xl font-medium pb-1">Construction Thug</h1>
        <p className="w-full max-w-md">
          You can have almot full control over site
        </p>
      </div>
      <div className="w-full flex items-center justify-center gap-10 mt-16">
        <h1 className="text-lg text-gray-600 flex items-center">
          <FaUser className="text-2xl mr-1" />
          <strong className="ml-1 font-semibold">360legntkiller</strong>
        </h1>
        <button className="px-5 py-1 text-lg text-white rounded bg-orange-600 bg-opacity-80 hover:bg-opacity-60">
          Log out
        </button>
      </div>
    </>
  );
};

export default Home;
