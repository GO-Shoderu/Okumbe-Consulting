import data from "../../../../assets/static_data/projects.json";
import img_1 from "../../../../assets/image/Picture1.jpg";
import img_2 from "../../../../assets/image/Picture3.jpg";
import img_3 from "../../../../assets/image/Picture5.png";

import "./Project.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Project = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const getRandomValue = () => (Math.random() < 0.5 ? 500 : 800);

  return (
    <div className="container py-3 mt-4 bg-light">
      <h2
        className="text-primary text-center"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="300"
      >
        FEATURED PROJECTS
      </h2>
      <div className="row justify-content-center">
        <div
          className="col-sm-12 col-md-6 col-lg-4 mt-4"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration={getRandomValue().toString()}
        >
          <div className="card  h-100 d-flex flex-column bg-body-secondary">
            <img
              src={img_1}
              className="card-img-top"
              alt={data.completed_projects[0].name + " image"}
            />
            <div className="card-body d-flex flex-column">
              <h6 className="card-title text-primary text-uppercase">
                {data.completed_projects[0].name}
              </h6>
              <p className="card-text flex-grow-1">
                {data.completed_projects[0].goal}
              </p>
              <p className="card-text flex-grow-1">
                <b>{data.completed_projects[0].price}</b>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-4 mt-4"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration={getRandomValue().toString()}
        >
          <div className="card  h-100 d-flex flex-column bg-body-secondary">
            <img
              src={img_3}
              className="card-img-top"
              alt={data.ongoing_projects[2].name + " image"}
            />
            <div className="card-body d-flex flex-column">
              <h6 className="card-title text-primary text-uppercase">
                {data.ongoing_projects[2].name}
              </h6>
              <p className="card-text flex-grow-1">
                {data.ongoing_projects[2].goal}
              </p>
              <p className="card-text flex-grow-1">
                <b>{data.ongoing_projects[2].price}</b>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-4 mt-4"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration={getRandomValue().toString()}
        >
          <div className="card  h-100 d-flex flex-column bg-body-secondary">
            <img
              src={img_2}
              className="card-img-top"
              alt={data.ongoing_projects[0].name + " image"}
            />
            <div className="card-body d-flex flex-column">
              <h6 className="card-title text-primary text-uppercase">
                {data.ongoing_projects[0].name}
              </h6>
              <p className="card-text flex-grow-1">
                {data.ongoing_projects[0].goal}
              </p>
              <p className="card-text flex-grow-1">
                <b>{data.ongoing_projects[0].price}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div
        className="text-center"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800"
      >
        <Link to="/project" className="btn btn-primary ">
          More
        </Link>
      </div>
    </div>
  );
};

export default Project;
