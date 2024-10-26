import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Props Interface
interface CustomCarouselProps {
  images: string[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ images }) => {
  // Custom next and previous buttons
  const NextArrow = ({ onClick }: { onClick?: React.MouseEventHandler }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
    >
      <FaArrowRight />
    </button>
  );

  const PrevArrow = ({ onClick }: { onClick?: React.MouseEventHandler }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
    >
      <FaArrowLeft />
    </button>
  );

  // Slick slider settings
  const settings = {
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // cssEase: "ease-in-out",
    // dotsClass: "custom-dots",
    // draggable: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative">
       <Slider {...settings}>
    {images.map((image, index) => (
      <div key={index}>
        <img
          src={image}
          alt={`Slide ${index + 1}`} 
          className="w-full h-[350px] object-cover"
        />
       <div className="min-w-[300px] flex flex-col z-10 ml-[20px] absolute bottom-[40px]">
       <h1 className="text-sm font-semibold">Latest New & Updates</h1>
        <p className="text-xs mt-2 w-[350px]">Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. sed velit nisi, fermentum erat.Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.</p>
       </div>
       </div>
    ))}
  </Slider>
    </div>
  );
};

export default CustomCarousel;