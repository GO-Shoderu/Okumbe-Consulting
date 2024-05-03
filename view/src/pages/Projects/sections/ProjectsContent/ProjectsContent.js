import data from "../../../../assets/static_data/services.json";

import img_1 from "../../../../assets/image/scott-graham-5fNmWej4tAA-unsplash.jpg";
import img_2 from "../../../../assets/image/cytonn-photography-GJao3ZTX9gU-unsplash.jpg";
import img_3 from "../../../../assets/image/pexels-tima-miroshnichenko-6693656.jpg";

import img_4 from "../../../../assets/image/pexels-yan-krukau-7691694.jpg";
import img_5 from "../../../../assets/image/pexels-ketut-subiyanto-4623463.jpg";
import img_6 from "../../../../assets/image/pexels-pavel-danilyuk-7869306.jpg";

import img_7 from "../../../../assets/image/pexels-olly-3760067.jpg";
import img_8 from "../../../../assets/image/pexels-august-de-richelieu-4427611.jpg";

import "./ProjectsContent.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ProjectsContent = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const getRandomValue = () => (Math.random() < 0.5 ? 1000 : 1500);
  return (
    <div className="container py-3 mt-4 bg-light">
      <div className="row justify-content-center">
        {data.services.map((service, iter) => (
          <div
            className="col-sm-12 col-md-6 col-lg-4 mt-4"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration={getRandomValue().toString()}
            key={service.name}
          >
            <div className="card  h-100 d-flex flex-column bg-body-secondary">
              {iter === 0 && (
                <img
                  src={img_1}
                  className="card-img-top"
                  alt={service.name + " image"}
                />
              )}
              {iter === 1 && (
                <img
                  src={img_2}
                  className="card-img-top"
                  alt={service.name + " image"}
                />
              )}
              {iter === 2 && (
                <img
                  src={img_3}
                  className="card-img-top"
                  alt={service.name + " image"}
                />
              )}
              {iter === 3 && (
                <img
                  src={img_4}
                  className="card-img-top"
                  alt={service.name + " image"}
                />
              )}
              {iter === 4 && (
                <img
                  src={img_5}
                  className="card-img-top"
                  alt={service.name + " image"}
                />
              )}
              {iter === 5 && (
                <img
                  src={img_6}
                  className="card-img-top"
                  alt={service.name + " image"}
                />
              )}
              {iter === 6 && (
                <img
                  src={img_7}
                  className="card-img-top"
                  alt={service.name + " image"}
                />
              )}
              {iter === 7 && (
                <img
                  src={img_8}
                  className="card-img-top"
                  alt={service.name + " image"}
                />
              )}
              <div className="card-body d-flex flex-column">
                <h6 className="card-title text-primary text-uppercase">
                  {service.name}
                </h6>
                <ul className="card-text flex-grow-1">
                  {service.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {/* <div className="text-center text-sm-start">
                  <a href="./" className="btn btn-primary ">
                    Read More
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <div
        className="text-center"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800"
      >
        <Link to="/contact" className="btn btn-primary ">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ProjectsContent;
