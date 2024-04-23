import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content d-flex align-items-center justify-content-center">
        <div className="text-center text-white">
          <h1>OKUMBE CONSULTING</h1>
          <p className="lead">
            Expert Cost Consulting Solutions for Every Construction Endeavor
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
