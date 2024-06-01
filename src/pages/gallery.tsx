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
        <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={500} // Adjust the width and height as per your design
                height={500} // Adjust the width and height as per your design
                className="w-full h-auto"
                objectFit="cover" // Maintain aspect ratio
                placeholder="blur" // Optional: adds blur-up effect
                blurDataURL="/placeholder.jpg" // Optional: placeholder image
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
