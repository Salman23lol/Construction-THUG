import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

// Sample blog/news data
const blogPosts = [
  {
    title: "The Future of Construction Technology",
    description:
      "Explore the latest advancements in construction technology and how they're transforming the industry. From smart buildings to innovative materials, learn what's next for construction.",
    imgUrl:
      "https://shyamsteel.com/wp-content/uploads/2023/01/SS-BLOG1-Image-scaled.jpg",
    date: "September 15, 2024",
  },
  {
    title: "Top 10 Sustainable Building Practices",
    description:
      "Discover the top sustainable building practices that are making a difference. Learn about green materials, energy-efficient designs, and more.",
    imgUrl:
      "https://buildingrenewable.com/wp-content/uploads/2023/01/Sustainable-Construction-The-Top-10-Methods-to-Build-With.jpg",
    date: "August 10, 2024",
  },
  {
    title: "How to Choose the Right Contractor",
    description:
      "Choosing the right contractor is crucial for any construction project. This guide provides tips on what to look for and questions to ask to ensure you select the best contractor for your needs.",
    imgUrl:
      "https://www.sagecustomcontractors.com/wp-content/uploads/2015/06/Sage-Custom-Contracting-Blog-3-560x270.png",
    date: "July 25, 2024",
  },
  // Additional blog posts
  {
    title: "Understanding Building Codes and Regulations",
    description:
      "A comprehensive overview of building codes and regulations that affect construction projects. Learn why compliance is important and how to navigate these requirements.",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYtY7DB8ydQBjNEvOcOdbhMcp-RXgYhUns2g&s",
    date: "June 15, 2024",
  },
  {
    title: "Innovative Materials in Modern Construction",
    description:
      "Explore some of the most innovative materials used in modern construction. From advanced composites to eco-friendly alternatives, find out what's shaping the future of building.",
    imgUrl:
      "https://www.teslaoutsourcingservices.com/blog/wp-content/uploads/2021/07/innovation_in_construction_materials_2019.jpg",
    date: "May 22, 2024",
  },
  {
    title: "The Impact of 3D Printing on Architecture",
    description:
      "3D printing is revolutionizing architecture and construction. Learn about its applications, benefits, and the future potential of 3D printed structures.",
    imgUrl:
      "https://blog.zaxe.com/wp-content/uploads/2024/03/Revolutionizing-Architecture-Eng.jpg",
    date: "April 18, 2024",
  },
];

// Slick slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const BlogNews = () => {
  return (
    <div className="w-full h-auto my-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-10 flex flex-col items-center">
          <h1 className="text-xl font-semibold text-orange-600">Blog & News</h1>
          <h1 className="text-3xl font-medium p-1">Latest Updates</h1>
          <p className="w-full max-w-md">
            Stay up-to-date with our latest blog posts and news articles.
          </p>
        </div>

        {/* Slick Slider Container */}
        <Slider {...settings} className="w-full">
          {blogPosts.map((post, index) => (
            <div key={index} className="px-2 h-[460px]"> {/* Wrapper div for gap */}
              <div
                className="p-4 bg-white shadow-lg rounded-lg relative flex flex-col group transition-all"
              >
                <img
                  src={post.imgUrl}
                  alt={post.title}
                  className="w-full h-52 object-fill rounded-lg mb-4 duration-300 ease-in-out group-hover:scale-[104%]"
                />
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">{post.description}</p>
                <div className="w-full flex items-center justify-between">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <Link className="px-3 py-1 rounded-sm text-white text-sm bg-orange-600 bg-opacity-50 hover:bg-opacity-40">Learn More</Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BlogNews;
