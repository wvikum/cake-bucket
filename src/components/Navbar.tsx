import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (pathname: string) => router.pathname === pathname;

  return (
    <nav className="bg-pink-300 p-5 z-50">
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
            <a
              className={`text-black hover:text-pink-700 ${
                isActive("/gallery") ? "text-pink-900 font-bold" : ""
              }`}
            >
              Gallery
            </a>
          </Link>
          <Link href="/reviews" legacyBehavior>
            <a
              className={`text-black hover:text-pink-700 ${
                isActive("/reviews") ? "text-pink-900 font-bold" : ""
              }`}
            >
              Reviews
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a
              className={`text-black hover:text-pink-700 ${
                isActive("/contact") ? "text-pink-900 font-bold" : ""
              }`}
            >
              Contact Us
            </a>
          </Link>
          <Link href="/order" legacyBehavior>
            <a
              className={`text-black hover:text-pink-700 ${
                isActive("/order") ? "text-pink-900 font-bold" : ""
              }`}
            >
              How to Order
            </a>
          </Link>
        </div>
        <div className="hidden md:block">
          <a
            href="tel:0415591993"
            className="bg-pink-700 text-white px-4 py-2 rounded-lg font-bold hover:bg-pink-800 transition duration-300"
          >
            Call Us
          </a>
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
        <div className="md:hidden bg-pink-300 w-full p-2">
          <Link href="/gallery" legacyBehavior>
            <a
              className={`block text-black hover:text-pink-700 p-2 ${
                isActive("/gallery") ? "text-pink-900 font-bold" : ""
              }`}
              onClick={toggleMenu}
            >
              Gallery
            </a>
          </Link>
          <Link href="/reviews" legacyBehavior>
            <a
              className={`block text-black hover:text-pink-700 p-2 ${
                isActive("/reviews") ? "text-pink-900 font-bold" : ""
              }`}
              onClick={toggleMenu}
            >
              Reviews
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a
              className={`block text-black hover:text-pink-700 p-2 ${
                isActive("/contact") ? "text-pink-900 font-bold" : ""
              }`}
              onClick={toggleMenu}
            >
              Contact Us
            </a>
          </Link>
          <Link href="/order" legacyBehavior>
            <a
              className={`block text-black hover:text-pink-700 p-2 ${
                isActive("/order") ? "text-pink-900 font-bold" : ""
              }`}
              onClick={toggleMenu}
            >
              How to Order
            </a>
          </Link>
          <a
            href="tel:0415591993"
            className="block bg-pink-700 text-white px-4 py-2 rounded-lg font-bold hover:bg-pink-800 transition duration-300 mt-2"
          >
            Call Us
          </a>
        </div>
      )}
    </nav>
  );
}
