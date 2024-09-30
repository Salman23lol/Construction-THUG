import React from "react";
import Slider from "react-slick";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

// Sample team member data with social media links
const teamMembers = [
  {
    name: "Alice Johnson",
    title: "Founder & CEO",
    bio: "Alice is the visionary behind our company. With over 20 years of experience in the construction industry, she brings unparalleled expertise and leadership to the team.",
    imgUrl: "https://randomuser.me/api/portraits/women/14.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/alicejohnson",
      twitter: "https://twitter.com/alicejohnson",
      facebook: "https://facebook.com/alicejohnson",
      instagram: "https://instagram.com/alicejohnson",
    },
  },
  {
    name: "Robert Smith",
    title: "Project Manager",
    bio: "Robert manages our large-scale projects with a keen eye for detail and efficiency. His strong organizational skills ensure that every project runs smoothly and on time.",
    imgUrl: "https://randomuser.me/api/portraits/men/21.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/robertsmith",
      twitter: "https://twitter.com/robertsmith",
      facebook: "https://facebook.com/robertsmith",
      instagram: "https://instagram.com/robertsmith",
    },
  },
  {
    name: "Jessica Lee",
    title: "Lead Architect",
    bio: "Jessica leads our architectural team with creativity and innovation. Her designs are known for their aesthetic appeal and functional excellence.",
    imgUrl: "https://randomuser.me/api/portraits/women/23.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/jessicalee",
      twitter: "https://twitter.com/jessicalee",
      facebook: "https://facebook.com/jessicalee",
      instagram: "https://instagram.com/jessicalee",
    },
  },
  {
    name: "Michael Brown",
    title: "Chief Engineer",
    bio: "Michael ensures the structural integrity of our projects. With a background in civil engineering, he tackles complex engineering challenges with precision.",
    imgUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/michaelbrown",
      twitter: "https://twitter.com/michaelbrown",
      facebook: "https://facebook.com/michaelbrown",
      instagram: "https://instagram.com/michaelbrown",
    },
  },
  {
    name: "Emily Davis",
    title: "Marketing Director",
    bio: "Emily drives our marketing strategy with a focus on brand growth and customer engagement. Her expertise in digital marketing helps us connect with clients effectively.",
    imgUrl: "https://randomuser.me/api/portraits/women/30.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/emilydavis",
      twitter: "https://twitter.com/emilydavis",
      facebook: "https://facebook.com/emilydavis",
      instagram: "https://instagram.com/emilydavis",
    },
  },
  {
    name: "James Wilson",
    title: "Construction Supervisor",
    bio: "James oversees the day-to-day operations on site, ensuring that work is completed to the highest standards and in accordance with safety regulations.",
    imgUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/jameswilson",
      twitter: "https://twitter.com/jameswilson",
      facebook: "https://facebook.com/jameswilson",
      instagram: "https://instagram.com/jameswilson",
    },
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

const Team = () => {
  return (
    <div className="w-full h-auto my-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-10 flex flex-col items-center">
          <h1 className="text-xl font-semibold text-orange-600">Our Team</h1>
          <h1 className="text-3xl font-medium p-1">Meet Our Experts</h1>
          <p className="w-full max-w-md">
            Our team consists of dedicated professionals with diverse skills and
            expertise. Get to know the people behind our success.
          </p>
        </div>

        {/* Slick Slider Container */}
        <Slider {...settings} className="w-full">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg relative flex flex-col items-center text-center"
            >
              <div className="w-full flex items-center justify-center">
                <img
                  src={member.imgUrl}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {member.name}
              </h2>
              <h3 className="text-sm text-gray-500 mb-4">{member.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{member.bio}</p>
              <div className="flex space-x-2 mt-2">
                <div className="w-full flex items-center justify-center gap-3">
                  {member.socialLinks.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                  )}
                  {member.socialLinks.twitter && (
                    <a
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      <FaTwitter className="text-xl" />
                    </a>
                  )}
                  {member.socialLinks.facebook && (
                    <a
                      href={member.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      <FaFacebook className="text-xl" />
                    </a>
                  )}
                  {member.socialLinks.instagram && (
                    <a
                      href={member.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      <FaInstagram className="text-xl" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
