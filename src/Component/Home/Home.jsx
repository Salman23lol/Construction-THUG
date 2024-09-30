import React from "react";
import Header from "../Header";
import Hero from "./Hero";
import About from "./About";
import Footer from "../Footer";
import OurServices from "./OurServices";
import Testimonials from "./Testimonials";
import BlogNews from "./BlogNews";
import OurProjects from "./OurProjects";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Helmet>
        <title>Home | THUG</title>
        <meta name="description" content="Explore our wide range of services tailored for your needs." />
      </Helmet>
      <Header />
      <Hero />
      <About />
      <OurServices />
      <Testimonials />
      <OurProjects />
      <BlogNews />
      <Footer />
    </main>
  );
};

export default Home;
