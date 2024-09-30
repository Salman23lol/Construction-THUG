import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

// Slick slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  centerMode: false, // Disable centerMode to manage spacing manually
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
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

// Array of services
const services = [
  {
    title: "Civil Construction",
    description:
      "Our civil construction services cover a wide range of infrastructure projects, including the development of highways, bridges, tunnels, and large-scale public works. We are experts in handling complex engineering challenges, ensuring the highest safety standards and efficiency. With a dedicated team of engineers, architects, and construction professionals, we deliver quality projects that enhance transportation networks and public infrastructure, contributing to sustainable growth and modernization in urban and rural areas.",
    imgUrl:
      "https://media.istockphoto.com/id/170616024/photo/concrete-highrise-construction-site.jpg?s=612x612&w=0&k=20&c=7-lJj9c_WVakkqoM6WTCNu9Q-E7bV6goRzS0NBnKsCc=",
  },
  {
    title: "Residential Building",
    description:
      "Our residential building services provide comprehensive solutions for custom homes, renovations, and apartment complexes. We work closely with homeowners to bring their vision to life, combining architectural excellence with functionality and style. Whether it's designing a luxurious home or upgrading an existing space, our team ensures a seamless process from concept to completion. We prioritize sustainability and innovative building techniques to create homes that are not only beautiful but energy-efficient and built to last.",
    imgUrl:
      "https://images.adsttc.com/media/images/622f/6787/5950/fa06/9469/4e63/newsletter/mapu-5-012.jpg?1647273914",
  },
  {
    title: "Industrial Projects",
    description:
      "We specialize in industrial construction projects that require precision, safety, and expertise. Our team is equipped to handle the demands of building factories, warehouses, power plants, and other large-scale industrial facilities. We adhere to stringent regulations and industry standards, ensuring that every project is completed on time and within budget. Our industrial construction services are designed to support the growth of manufacturing, energy, and logistics sectors, driving economic development through innovative and sustainable solutions.",
    imgUrl: "https://media.mehrnews.com/d/2018/07/13/4/2831167.jpg",
  },
  {
    title: "Commercial Development",
    description:
      "We offer expert commercial development services that cater to a wide array of businesses, including office buildings, retail centers, hotels, and mixed-use developments. Our approach combines architectural creativity with a deep understanding of market trends to deliver spaces that are both functional and aesthetically pleasing. We focus on maximizing value for clients by incorporating sustainable design, modern technology, and flexible spaces that can adapt to future needs. Whether it's a small retail project or a large commercial.",
    imgUrl:
      "https://afnbc.ca/wp-content/uploads/2023/07/ABC-what-is-commercial-development.jpeg",
  },
];

const OurServices = () => {
  return (
    <div className="w-full h-[42rem] p-6 my-8">
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-medium text-center p-2 text-orange-600">
          Our Services
        </h1>
        <h1 className="text-3xl font-medium text-center">
          Construction Services
        </h1>
        <p className="text-center w-full max-w-md">
          We offer a diverse array of construction services, spanning
          residential, commercial, and industrial projects.
        </p>
      </div>

      {/* Slick Slider Container */}
      <div className="mt-10 h-auto">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div
              key={index}
              className="px-4" // Added padding to create space around each item
            >
              <div
                className="w-full h-96 bg-orange-600 bg-opacity-50 rounded relative overflow-hidden"
              >
                <div className="w-full h-full group relative">
                  <img
                    src={service.imgUrl}
                    alt={service.title}
                    className="w-full h-full object-cover rounded transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-3"
                  />

                  {/* Title that slides down and disappears on hover */}
                  <h1 className="text-xl font-medium absolute bottom-0 left-0 p-4 z-50 w-full bg-gray-700 bg-opacity-70 text-white transition-transform duration-500 ease-in-out transform group-hover:translate-y-full">
                    {service.title}
                  </h1>

                  {/* The div that appears when hovered */}
                  <div className="w-full h-full bg-gray-700 bg-opacity-70 absolute bottom-0 rounded transition-all duration-500 ease-in-out transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-90">
                    <div className="w-full h-full flex flex-col items-start justify-top p-3 text-white">
                      <h1 className="text-2xl font-medium">{service.title}</h1>
                      <p className="text-base mt-2">{service.description}</p>
                      <Link className="px-3 py-1 rounded bg-orange-600 hover:bg-opacity-90 text-sm my-3">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="w-full flex items-center justify-center mt-4">
        <Link className="px-4 py-2 rounded bg-pink-500 bg-opacity-70 hover:bg-opacity-60 shadow-lg text-white my-6">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default OurServices;
