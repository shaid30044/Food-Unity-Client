import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";

const Slider = () => {
  const [slides, setSlides] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("./slide.json");
        const data = await res.json();
        setSlides(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="relative">
      <div className="carousel w-full">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            id={`slide${slide.id}`}
            className={`relative carousel-item w-full ${
              idx === activeSlide ? "active" : ""
            }`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <img
              src={slide.image}
              alt={slide.altText}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/60 md:text-white/50 text-start w-80 md:w-[600px] lg:w-[800px]">
              <h1 className="text-3xl md:text-7xl lg:text-9xl font-semibold border-l-8 md:border-l-[9px] lg:border-l-[12px] border-blue1/50 pl-2 lg:pl-4">
                {slide.title}
              </h1>
              <p className="md:text-xl lg:text-2xl pt-4 lg:pt-6 pl-4 md:pl-5 lg:pl-10">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 lg:bottom-4 flex justify-center w-full py-2 gap-2">
        {slides.map((slide, index) => (
          <a
            key={slide.id}
            href={`#slide${index}`}
            className={`text-[8px] md:text-[10px] text-white/50 ${
              index === activeSlide ? "active" : ""
            }`}
          >
            <FaCircle />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Slider;
