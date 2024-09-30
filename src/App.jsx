import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Aboutus from "./Pages/About/Aboutus";
import Services from "./Pages/Services/Services";
import Projects from "./Pages/Projects/Projects";
import BlogNewsPage from "./Pages/BlogNews/BlogNewsPage";
import ContactUsPage from "./Pages/ContactUs/ContactUsPage";
import Dashboard from "./Pages/Dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog-news" element={<BlogNewsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />

          <Route path="/dashboard/admin-panel" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
