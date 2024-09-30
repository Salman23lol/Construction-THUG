import React from "react";

const About = () => {
  return (
    <div className="w-full flex items-center justify-center p-8 my-10">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="w-full max-w-md h-auto">
          <img
            src="https://procrewschedule.com/wp-content/uploads/2020/04/construction-workers-discussing-building-plans.jpg"
            className="w-full h-full rounded"
          />
        </div>
        <div className="w-auto flex flex-col items-start">
          <h2 className="text-lg font-medium text-orange-600">About US</h2>
          <h1 className="w-full max-w-72 text-3xl flex flex-col items-start gap-1">
            <h1 className="w-full max-w-72 font-medium">Crafing Structuer's That</h1>
            <span className="bg-pink-500 bg-opacity-50 rounded text-white p-1 px-2 text-2xl">
              Last Life Time
            </span>
          </h1>
          <p className="text-sm font-medium w-full max-w-md mt-2 p-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro modi
            harum obcaecati placeat natus ipsa dolores sequi voluptates impedit
            quod aut nostrum, qui nisi odit adipisci ut, velit esse illo tenetur
            hic? A nobis asperiores beatae recusandae? Sequi, esse a!
          </p>
          <p className="text-sm font-medium w-full max-w-md mt-2 p-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            voluptatibus consequuntur, nisi necessitatibus eum quibusdam quos,
            non voluptatum cum consectetur explicabo eveniet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
