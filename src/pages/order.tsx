import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Image from "next/image";

type FAQ = {
  question: string;
  answer: string;
};

export default function Order() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch("/faqs.json");
        const data = await response.json();
        setFaqs(data);
      } catch (error) {
        console.error("Failed to fetch FAQs:", error);
      }
    };

    fetchFaqs();
  }, []);

  const menuPhotos = [
    { src: "/menu/1.jpg", title: "Birthday Cakes" },
    { src: "/menu/2.jpg", title: "Wedding Cakes" },
    { src: "/menu/3.jpg", title: "Anniversary Cakes" },
    { src: "/menu/4.jpg", title: "Wedding Cakes" },
    { src: "/menu/5.jpg", title: "Anniversary Cakes" },
  ];

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto p-4">
          <h1 className="text-5xl font-bold text-center text-pink-700 mb-8">
            How to Order
          </h1>
          <p className="text-center text-gray-700 mb-8">
            To place an order, simply follow these steps:
          </p>
          <div className="max-w-3xl mx-auto mb-8">
            <table className="w-full bg-pink-50 border border-pink-200 rounded-lg shadow-md">
              <tbody>
                <tr className="border-b border-pink-200">
                  <td className="p-4 text-pink-700 mb-2">
                    1. Browse our menu and select your desired cake type.
                  </td>
                </tr>
                <tr className="border-b border-pink-200">
                  <td className="p-4 text-pink-700 mb-2">
                    2. Customize your cake with your preferred flavors and
                    designs.
                  </td>
                </tr>
                <tr className="border-b border-pink-200">
                  <td className="p-4 text-pink-700 mb-2">
                    3. Contact us via phone or email to place your order.
                  </td>
                </tr>
                <tr className="border-b border-pink-200">
                  <td className="p-4 text-pink-700 mb-2">
                    4. Make a payment to confirm your order.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-pink-700 mb-2">
                    5. Pick up your cake on the scheduled date or opt for
                    delivery.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {menuPhotos.map((photo, index) => (
              <div key={index} className="text-center">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
                <h2 className="text-2xl font-semibold text-pink-700 mt-4">
                  {photo.title}
                </h2>
              </div>
            ))}
          </div>
          <h2 className="text-4xl font-bold text-center text-pink-700 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8 max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-pink-700 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
