import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-pink-200 p-5">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="cursor-pointer">
            <Image
              src="/logo/logo.png" // Replace with the path to your logo image
              alt="Cake Bucket Logo"
              width={100} // Adjust width according to your logo dimensions
              height={100} // Adjust height according to your logo dimensions
            />
          </a>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/gallery" legacyBehavior>
            <a className="text-black hover:text-pink-700">Gallery</a>
          </Link>
          <Link href="/reviews" legacyBehavior>
            <a className="text-black hover:text-pink-700">Reviews</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="text-black hover:text-pink-700">Contact Us</a>
          </Link>
          <Link href="/order" legacyBehavior>
            <a className="text-black hover:text-pink-700">How to Order</a>
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="/gallery" legacyBehavior>
            <a className="block text-black hover:text-pink-700 p-2">Gallery</a>
          </Link>
          <Link href="/reviews" legacyBehavior>
            <a className="block text-black hover:text-pink-700 p-2">Reviews</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="block text-black hover:text-pink-700 p-2">
              Contact Us
            </a>
          </Link>
          <Link href="/order" legacyBehavior>
            <a className="block text-black hover:text-pink-700 p-2">
              How to Order
            </a>
          </Link>
        </div>
      )}
    </nav>
  );
}
