import { useState, useEffect } from "react";
import Layout from "../components/Layout";

type Review = {
  name: string;
  cakeType: string;
  rating: number;
  review: string;
};

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/reviews.json"); // Ensure this matches your JSON file name
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const backgroundColors = ["bg-white", "bg-pink-50"];

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto p-4">
          <h1 className="text-5xl font-bold text-center text-pink-700 mb-4">
            Reviews
          </h1>
          <p className="text-center text-gray-700 mb-8">
            We value your feedbacks and they help us give you our best.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`${
                  backgroundColors[index % 2]
                } p-6 rounded-lg shadow-md`}
              >
                <h2 className="text-pink-700 text-2xl font-bold mb-2">
                  {review.name}
                </h2>
                <p className="text-pink-700 mb-1">{review.cakeType}</p>
                <div className="flex items-center mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
