import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    image: "/testimonial/testimonial1.jpg",
    name: "Vikum Warnakula",
    review: "This cake was amazing! Highly recommend!",
  },
  {
    image: "/testimonial/testimonial2.jpg",
    name: "Thulini Dissanayake",
    review: "Best cake I have ever had!",
  },
  {
    image: "/testimonial/testimonial3.jpg",
    name: "Ryan Cooray",
    review: "Beautiful and delicious!",
  },
  {
    image: "/testimonial/testimonial2.jpg",
    name: "Thulini Dissanayake",
    review: "Best cake I have ever had!",
  },
  {
    image: "/testimonial/testimonial3.jpg",
    name: "Ryan Cooray",
    review: "Beautiful and delicious!",
  },
];

export default function TestimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-3xl font-semibold text-center text-pink-700 mb-4">
        What My Customers Say About Me
      </h2>
      <p className="text-center text-gray-700 mb-8">
        My clients and customers are always pleased with my cakes. Read what my
        clients are saying about how I helped them make a difference in their
        lives.
      </p>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="flex justify-center mb-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <h3 className="text-2xl font-bold text-center  text-pink-700 mb-2">
              {testimonial.name}
            </h3>
            <p className="text-center text-gray-700">{testimonial.review}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
