import AboutUS from "./pages/AboutUs/AboutUS";
import Home from "./pages/Home/Home";
import Footer from "./pages/constant/Footer/Footer";
import Nav from "./pages/constant/Nav/Nav";
import Scroll from "./pages/constant/scroll/Scroll";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-light pb-3">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUS />} />
        </Routes>
        <Scroll />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
