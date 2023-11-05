import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../SliderCSS/style.css";
import { Keyboard, Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const Slider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./slide.json");
      const data = await res.json();
      setSlides(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Autoplay, Pagination]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <img
              src={slide.image}
              alt={slide.altText}
              className="object-cover w-full h-full"
            />
            <div className="absolute text-white/60 md:text-white/50 text-start w-80 md:w-[600px] lg:w-[800px]">
              <h1 className="text-3xl md:text-7xl lg:text-9xl font-semibold border-l-8 md:border-l-[9px] lg:border-l-[12px] border-blue1/50 pl-2 lg:pl-4">
                {slide.title}
              </h1>
              <p className="md:text-xl lg:text-2xl pt-4 lg:pt-6 pl-4 md:pl-5 lg:pl-10">
                {slide.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
