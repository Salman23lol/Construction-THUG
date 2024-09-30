import React from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Hero from "./Hero";
import About from "../../Component/Home/About";
import Team from "./Team";
import { Helmet } from "react-helmet";

const Aboutus = () => {
  return (
    <main className="overflow-x-hidden">
       <Helmet>
        <title>About | THUG</title>
        <meta name="description" content="Explore our wide range of services tailored for your needs." />
      </Helmet>
      <Header />
      <Hero />
      <About />
      <Team />
      <Footer />
    </main>
  );
};

export default Aboutus;
