import AboutUS from "./pages/AboutUs/AboutUS";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Teams from "./pages/Teams/Teams";
import ContactUs from "./pages/ContactUs/ContactUs";
import Footer from "./pages/constant/Footer/Footer";
import Nav from "./pages/constant/Nav/Nav";
import Scroll from "./pages/constant/scroll/Scroll";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Okumbe from "./pages/Teams/Okumbe";
import Projects from "./pages/Projects/Projects";
import Matheatsie from "./pages/Teams/Matheatsie";
import ECard from "./pages/ECard/Ecard";
import Banner from "./pages/constant/Banner/Banner";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-light pb-3">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUS />} />
          <Route path="/service" element={<Services />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/okumbe" element={<Okumbe />} />
          <Route path="/matheatsie" element={<Matheatsie />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/ecard" element={<ECard />} />
        </Routes>
        <Scroll />
        <Banner />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
