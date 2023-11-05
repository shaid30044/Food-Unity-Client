import Lottie from "react-lottie";
import about from "../assets/about.json";

const AboutUs = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: about,
  };

  return (
    <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-4 bg-blue3 px-4 md:px-10 lg:px-20 py-20 lg:py-40">
      <div className="h-">
        <Lottie options={defaultOptions} />
      </div>
      <div>
        <span className="text-4xl font-bold text-dark1 border-b-8 border-blue1 pb-2">
          About Us
        </span>
        <p className="text-lg text-justify text-dark2 leading-8 pt-10">
          <span className="text-xl font-medium text-dark1">
            Food<span className="text-blue1"> Unity</span>
          </span>{" "}
          connects neighbors to share surplus food, reduce waste, and ensure no
          one in the community goes hungry. Join us in the movement of food
          sharing and community building. Welcome to{" "}
          <span className="text-xl font-medium text-dark1">
            Food<span className="text-blue1"> Unity</span>
          </span>
          , where sharing food fosters connections and makes a difference.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
