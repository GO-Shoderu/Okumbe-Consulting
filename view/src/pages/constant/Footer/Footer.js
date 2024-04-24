import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer mt-5">
      <div className="container">
        <p className="text-center">All Rights Reserved © {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
