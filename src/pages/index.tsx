import { useState } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import axios from "axios";
import TestimonialSlider from "../components/TestimonialSlider";

export default function Home() {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the default form submission
    if (!email) {
      setStatusMessage("Please type your email.");
      return;
    }

    try {
      const response = await axios.post("/api/subscribe", { email });
      if (response.status === 200) {
        setStatusMessage("Subscribed successfully!");
      } else {
        setStatusMessage("Failed to subscribe.");
      }
      setEmail("");
    } catch (error: any) {
      setStatusMessage(error.response?.data?.error || "Failed to subscribe.");
    }
  };

  return (
    <Layout>
      <div className="w-full p-3 bg-gray-100">
        <h1 className="text-6xl font-bold text-center text-pink-700 mb-8">
          Cake Bucket
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="relative w-full h-[500px] md:order-2">
            <Image
              src="/featured/featured1.jpg"
              alt="Featured Cake 1"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-lg"
              fetchpriority="high"
            />
          </div>
          <div className="flex flex-col justify-center md:order-1">
            <h2 className="text-3xl font-bold text-pink-700 mb-4">About Us</h2>
            <p className="text-1xl text-gray-700">
              At Cake Bucket, we specialize in creating custom-designed cakes
              for all occasions. Our cakes are made with the finest ingredients
              and designed with care.
            </p>
          </div>
          <div className="relative w-full h-[500px] md:order-3">
            <Image
              src="/featured/featured2.jpg"
              alt="Featured Cake 2"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-lg"
              fetchpriority="high"
            />
          </div>
          <div className="flex flex-col justify-center md:order-4">
            <h2 className="text-3xl font-bold text-pink-700 mb-4">
              Our Commitment
            </h2>
            <p className="text-1xl text-gray-700">
              We are committed to delivering the best cakes for your special
              occasions. Our team works closely with you to ensure every detail
              is perfect.
            </p>
          </div>
          <div className="relative w-full h-[500px] md:order-6">
            <Image
              src="/featured/featured3.jpg"
              alt="Featured Cake 3"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-lg"
              fetchpriority="high"
            />
          </div>
          <div className="flex flex-col justify-center md:order-5">
            <h2 className="text-3xl font-bold text-pink-700 mb-4">
              Our Passion
            </h2>
            <p className="text-1xl text-gray-700">
              At Cake Bucket, our passion is crafting beautiful, delicious cakes
              that bring joy to every celebration. We take pride in our artistry
              and attention to detail, ensuring that each cake is a unique
              masterpiece made with love and care. Whether it’s a birthday,
              wedding, or any special occasion, our goal is to create cakes that
              not only taste amazing but also leave a lasting impression. Join
              us on a journey of delightful flavors and stunning designs, and
              let us be a part of your sweetest moments.
            </p>
          </div>
        </div>
        <div className="bg-pink-100 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold text-center text-pink-700 mb-4">
            Announcements
          </h2>
          <p className="text-center text-pink-700">
            We are excited to introduce our new line of vegan cakes! Pre-order
            now and get a special discount!
          </p>
        </div>
        <TestimonialSlider />
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold text-center text-pink-700 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-center text-pink-700 mb-4">
            Stay updated with our latest offerings, special discounts, and more.
            Subscribe now!
          </p>
          <form onSubmit={handleSubscribe} className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="p-2 border border-pink-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-700 text-gray-900"
              required
            />
            <button
              type="submit"
              className="bg-pink-700 text-white p-2 rounded-r-lg hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-700"
            >
              Subscribe
            </button>
          </form>
          {statusMessage && (
            <p className="text-center text-pink-700 mt-4">{statusMessage}</p>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Add other content here */}
        </div>
      </div>
    </Layout>
  );
}
