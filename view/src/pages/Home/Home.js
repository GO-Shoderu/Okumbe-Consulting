import Footer from "../constant/Footer/Footer";
import Nav from "../constant/Nav/Nav";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import Project from "./sections/Project/Project";
import Service from "./sections/Service/Service";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Service />
      <Project />
      <Footer />
    </div>
  );
};

export default Home;
