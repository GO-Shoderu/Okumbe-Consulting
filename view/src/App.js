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
import Mathematise from "./pages/Teams/Mathematise";

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
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/okumbe" element={<Okumbe />} />
          <Route path="/mathematise" element={<Mathematise />} />
        </Routes>
        <Scroll />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
