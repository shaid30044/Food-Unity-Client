import { useLoaderData } from "react-router-dom";
import Foods from "../Components/Foods";
import Footer from "../Components/Footer";
import Loading from "../Components/Loading";
import Navbar from "../Components/Navbar";

const Home = () => {
  const foods = useLoaderData();

  return (
    <div>
      <Navbar />
      <Foods foods={foods} />
      <Loading />
      <Footer />
    </div>
  );
};

export default Home;
