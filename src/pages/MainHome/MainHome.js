import { Box } from "@mui/material";
import React from "react";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import GoToTop from "../../components/GoToTop";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Pricing from "../../components/Pricing";
import Services from "../../components/Services";
import Testimonials from "../../components/Testimonials";

const MainHome = () => {
  return (
    <Box component="main">
      <Navbar />
      <GoToTop />
      <About />
      <Hero />
      <Services />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </Box>
  );
};

export default MainHome;
