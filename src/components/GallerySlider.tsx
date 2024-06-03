import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cakeVarieties = [
  { type: "birthday", images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"] },
  { type: "wedding", images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"] },
  { type: "anniversary", images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"] },
  // Add more varieties and their images here
];

export default function GallerySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div
        className="w-full md:w-3/4 lg:w-2/3 p-4 border-4 border-red-300 rounded-lg shadow-lg"
        style={{ boxShadow: "0 0 20px rgba(255, 0, 127, 0.6)" }}
      >
        <Slider {...settings}>
          {cakeVarieties.map((variety, index) => (
            <div key={index} className="p-4">
              <h2 className="text-3xl font-bold text-center text-pink-700 mb-4">
                {variety.type} Cakes
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
                {variety.images.map((image, idx) => (
                  <div key={idx} className="overflow-hidden rounded-lg">
                    <Image
                      src={`/images/${variety.type.toLowerCase()}/${image}`}
                      alt={`${variety.type} Cake ${idx + 1}`}
                      width={200}
                      height={200}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
