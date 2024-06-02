import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { getRandomImages } from "../utils/getRandomImages";
import Image from "next/image";

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/images");
        const images = await response.json();
        const randomImages = getRandomImages(images, 12);
        setImages(randomImages);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <Layout>
      <div className="w-full p-4 bg-gray-50">
        <h1 className="text-5xl font-bold text-center text-pink-700 mb-8">
          Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 mb-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={200} // Adjust the width and height as per your design
                height={200} // Adjust the width and height as per your design
                className="w-full h-auto"
                objectFit="cover" // Maintain aspect ratio
                placeholder="blur" // Optional: adds blur-up effect
                blurDataURL="/placeholder.jpg" // Optional: placeholder image
              />
            </div>
          ))}
        </div>
        <div className="text-center text-pink-700 mt-8">
          <h2 className="text-4xl font-bold mb-4">
            Click on the icons below for more amazing photos & videos
          </h2>
          <p className="text-2xl mb-4">Our social media</p>
          <div className="flex justify-center space-x-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/social-icons/facebook.svg"
                alt="Facebook"
                width={50}
                height={50}
                className="hover:opacity-80 transition-opacity duration-300"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/social-icons/instagram.svg"
                alt="Instagram"
                width={50}
                height={50}
                className="hover:opacity-80 transition-opacity duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}