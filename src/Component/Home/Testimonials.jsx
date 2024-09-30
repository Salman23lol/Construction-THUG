import React from "react";
import Slider from "react-slick";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

// Extended testimonials data array
const testimonials = [
  {
    name: "John Doe",
    title: "CEO, ABC Corp",
    message:
      "Working with this construction company was a fantastic experience. They exceeded our expectations in every way, from project management to final delivery. Their attention to detail and commitment to quality are unmatched. We couldn’t be happier with the outcome and would gladly recommend them to anyone.",
    imgUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Jane Smith",
    title: "Founder, Homes & Spaces",
    message:
      "The team did a phenomenal job on our residential development project. Their professionalism and dedication made the entire process smooth and stress-free. The final result was a beautiful and functional space that our clients absolutely love. We would definitely work with them again on future projects!",
    imgUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
  },
  {
    name: "Michael Brown",
    title: "Managing Director, XYZ Ltd",
    message:
      "I was impressed with the team's technical expertise and commitment to safety during our industrial construction project. They delivered on time, within budget, and the quality of their work was excellent. I would highly recommend their services to anyone in need of reliable construction services.",
    imgUrl: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
  },
  // Additional testimonials
  {
    name: "Emily White",
    title: "Marketing Director, Creative Co.",
    message:
      "Exceptional service and craftsmanship. The project was completed ahead of schedule and the final result was beyond our expectations. Highly recommended for their professionalism and attention to detail.",
    imgUrl: "https://randomuser.me/api/portraits/women/46.jpg",
    rating: 5,
  },
  {
    name: "Chris Green",
    title: "Project Manager, BuildIt Inc.",
    message:
      "We have worked with many contractors, but this company stands out for their dedication and expertise. They tackled every challenge with a positive attitude and delivered a top-notch product.",
    imgUrl: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 4,
  },
  {
    name: "Amanda Lee",
    title: "Design Lead, Innovate Designs",
    message:
      "From concept to completion, their team was professional and efficient. The final design was exactly what we envisioned. They exceeded our expectations in every way.",
    imgUrl: "https://randomuser.me/api/portraits/women/48.jpg",
    rating: 5,
  },
];

// Function to render star rating
const renderStars = (rating) => {
  const totalStars = 5;
  const filledStars = Array(rating).fill(
    <AiFillStar className="text-orange-600" />
  );
  const emptyStars = Array(totalStars - rating).fill(
    <AiOutlineStar className="text-orange-600" />
  );

  return [...filledStars, ...emptyStars];
};

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

const Testimonials = () => {
  return (
    <div className="w-full h-auto my-24 mt-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-10 flex flex-col items-center">
          <h1 className="text-xl font-semibold text-orange-600">
            Testimonials
          </h1>
          <h1 className="text-3xl font-medium p-1">What Our Clients Say</h1>
          <p className="w-full max-w-md">
            Our clients are at the heart of everything we do. Here’s what they
            have to say about working with us.
          </p>
        </div>

        {/* Slick Slider Container */}
        <Slider {...settings} className="w-full flex items-center gap-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full h-full border-x rounded-lg p-4 relative flex flex-col justify-between"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.imgUrl}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h2>
                  <h3 className="text-sm text-gray-500">{testimonial.title}</h3>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-6">
                "{testimonial.message}"
              </p>
              <div className="flex space-x-1">
                {renderStars(testimonial.rating)}
              </div>
              <div className="text-orange-600 font-semibold">
                {testimonial.name}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
