import React from "react";
import Header from "../../Component/Header";
import Hero from "./Hero";
import Footer from "../../Component/Footer";
import OurServices from "../../Component/Home/OurServices";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Service | THUG</title>
        <meta name="description" content="Explore our wide range of services tailored for your needs." />
      </Helmet>
      <main className="overflow-x-hidden">
        <Header />
        <Hero />
        <OurServices />
        <Footer />
      </main>
    </>
  );
};

export default Services