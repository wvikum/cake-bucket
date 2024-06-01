import Layout from "../components/Layout";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto p-4">
          <h1 className="text-5xl font-bold text-center text-pink-700 mb-8">
            Contact Us
          </h1>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-1/2">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-pink-500 text-white p-2 rounded-md w-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h2 className="text-3xl font-semibold text-pink-700 mb-4">
                Better yet, see us in person!
              </h2>
              <p className="mb-4 text-gray-700">
                We love our customers, so feel free to visit during normal
                business hours.
              </p>
              <p className="mb-2 text-gray-700">
                <strong>Cake Bucket</strong>
              </p>
              <p className="mb-2 text-gray-700">
                10 Woodvale Road, Boronia Victoria 3155, Australia
              </p>
              <p className="mb-2 text-gray-700">0415 591 993</p>
              <p className="mb-4 text-gray-700">cakebucketsl@gmail.com</p>
              <h3 className="text-2xl font-semibold text-pink-700 mb-4">
                Hours
              </h3>
              <ul className="mb-4 text-gray-700">
                <li>Mon: 09:00 am – 05:00 pm</li>
                <li>Tue: 09:00 am – 05:00 pm</li>
                <li>Wed: 09:00 am – 05:00 pm</li>
                <li>Thu: 09:00 am – 05:00 pm</li>
                <li>Fri: 09:00 am – 05:00 pm</li>
                <li>
                  Sat: <strong>09:00 am – 05:00 pm</strong>
                </li>
                <li>Sun: 09:00 am – 05:00 pm</li>
              </ul>
              <div className="w-full h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509572!2d144.96305781561658!3d-37.81362774202185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f60c121e3f0!2sBourke%20Street%20Mall!5e0!3m2!1sen!2sau!4v1632807729989!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  aria-hidden="false"
                  tabIndex={0}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
