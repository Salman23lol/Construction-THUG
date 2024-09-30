import React from "react";
import { Link } from "react-router-dom";

// Sample project data
const projects = [
  {
    title: "Modern Office Building",
    description:
      "A state-of-the-art office building with modern design and sustainable features. Completed on time and within budget.",
    imgUrl:
      "https://i.pinimg.com/736x/a5/d5/90/a5d5907b44cdbcf3691ecb54016979a3.jpg",
    link: "#project1",
  },
  {
    title: "Luxury Residential Complex",
    description:
      "A luxurious residential complex featuring high-end finishes and exceptional amenities. Designed for comfort and elegance.",
    imgUrl:
      "https://www.ocregister.com/wp-content/uploads/2024/03/OCR-L-REALBRIEFS-0303-11.jpg?w=620",
    link: "#project2",
  },
  {
    title: "Community Sports Center",
    description:
      "A vibrant community sports center with various recreational facilities. Promotes health and wellness in the community.",
    imgUrl:
      "https://images.adsttc.com/media/images/633d/ddea/dd0b/8906/1383/fec4/large_jpg/vanke-c-changchun-community-sports-complex-gbbn_12.jpg?1664998963",
    link: "#project3",
  },
  {
    title: "Eco-Friendly Greenhouse",
    description:
      "An innovative greenhouse project focused on sustainability and efficient energy use. Supports local agriculture and research.",
    imgUrl: "https://www.agritecture.com/hubfs/Imported_Blog_Media/Lyle-4.jpg",
    link: "#project4",
  },
  {
    title: "Urban Park Renovation",
    description:
      "Revitalization of a downtown park with new landscaping, playgrounds, and community spaces. Enhances urban living.",
    imgUrl:
      "https://images.adsttc.com/media/images/613f/4bc3/f91c/81c5/5900/00e1/newsletter/3._%E5%9B%9E%E4%BA%AD%C2%A9%E5%90%B4%E5%97%A3%E9%93%AD_(2).jpg?1631538098",
    link: "#project5",
  },
  {
    title: "High-Rise Apartment Tower",
    description:
      "A modern high-rise apartment building offering luxury living with panoramic city views and top-notch amenities.",
    imgUrl:
      "https://images.surferseo.art/5c612cb5-0fc1-42ba-a099-ea672349d73f.jpeg",
    link: "#project6",
  },
];

const OurProjects = () => {
  return (
    <div className="w-full h-auto my-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-10 flex flex-col items-center">
          <h1 className="text-xl font-semibold text-orange-600">
            Our Projects
          </h1>
          <h1 className="text-3xl font-medium p-1">Featured Projects</h1>
          <p className="w-full max-w-md">
            Explore some of our notable projects that showcase our commitment to
            excellence and innovation in construction.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden group transition-all"
            >
              <img
                src={project.imgUrl}
                alt={project.title}
                className="w-full h-48 object-cover duration-300 ease-in-out group-hover:scale-[104%] group-hover:-rotate-2"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-700 mb-4">
                  {project.description}
                </p>

                <Link
                  to={project.link}
                  className="px-3 py-1 rounded-sm text-white bg-orange-600 bg-opacity-60 hover:bg-opacity-50 text-sm my-3"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
