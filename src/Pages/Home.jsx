import Foods from "../Components/Foods";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Foods />
      <Footer />
    </div>
  );
};

export default Home;
