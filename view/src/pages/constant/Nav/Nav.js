import "./Nav.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [activeLink, setActiveLink] = useState(""); // State to track active link

  const handleNavLinkClick = (link) => {
    setActiveLink(link); // Update active link state when a link is clicked
  };
  return (
    <nav className="navbar navbar-expand-lg py-3 sticky-top bg-light">
      <div className="container-fluid mx-xl-5">
        <a href="./" className="navbar-brand">
          OKUMBE CONSULTING
        </a>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto nav-pills nav-fill ">
            <li className="nav-item mx-3">
              <Link
                to="/"
                className={
                  activeLink === "/"
                    ? "nav-link active text-primary bg-light"
                    : "nav-link"
                }
                onClick={() => handleNavLinkClick("/")}
              >
                Home
              </Link>
            </li>
            <li className="nav-item mx-4 popup-trigger-btn">
              <Link
                to="/about"
                className={
                  activeLink === "/about"
                    ? "nav-link active text-primary bg-light"
                    : "nav-link"
                }
                onClick={() => handleNavLinkClick("/about")}
              >
                About
              </Link>
            </li>
            <li className="nav-item mx-4 popup-trigger-btn">
              <Link
                to="/services"
                className={
                  activeLink === "/services"
                    ? "nav-link active text-primary bg-light"
                    : "nav-link"
                }
                onClick={() => handleNavLinkClick("/services")}
              >
                Services
              </Link>
            </li>
            <li className="nav-item mx-4 popup-trigger-btn">
              <Link
                to="/projects"
                className={
                  activeLink === "/projects"
                    ? "nav-link active text-primary bg-light"
                    : "nav-link"
                }
                onClick={() => handleNavLinkClick("/projects")}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item mx-4 popup-trigger-btn">
              <Link
                to="/teams"
                className={
                  activeLink === "/teams"
                    ? "nav-link active text-primary bg-light"
                    : "nav-link"
                }
                onClick={() => handleNavLinkClick("/teams")}
              >
                Teams
              </Link>
            </li>
            <li className="nav-item mx-4 popup-trigger-btn">
              <Link to="/contact" className="nav-link text-white active">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
