import AboutUs from "../Components/AboutUs";
import Contact from "../Components/Contact";
import Foods from "../Components/Foods";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div className="relative">
      <div className="absolute w-full z-50">
        <Navbar />
      </div>
      <div className="pt-12 md:pt-16">
        <Slider />
      </div>
      <Foods />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
