import Nav from "../constant/Nav";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import Service from "./sections/Service/Service";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Service />
    </div>
  );
};

export default Home;
