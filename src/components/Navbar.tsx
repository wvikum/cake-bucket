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
    <nav className="bg-pink-300 p-0 z-50 relative">
      <div className="container mx-auto flex justify-between items-center h-16 md:h-32">
        <div className="flex-grow flex items-center pl-2 md:pl-0">
          <div className="md:hidden flex items-center w-1/3">
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
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex-grow flex items-center justify-center md:justify-start md:pl-0">
            <Link href="/" legacyBehavior>
              <a className="cursor-pointer">
                <div className="relative w-12 h-12 md:w-32 md:h-32">
                  <Image
                    src="/logo/logo.png"
                    alt="Cake Bucket Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className="md:hidden w-1/3 flex justify-end pr-2">
            <a
              href="tel:0415591993"
              className="bg-pink-700 text-white px-2 py-1 rounded-lg font-bold hover:bg-pink-800 transition duration-300"
            >
              Call Us
            </a>
          </div>
        </div>
        <div className="hidden md:flex space-x-12 transform -translate-x-8">
          <Link href="/gallery" legacyBehavior>
            <a
              className={`text-black hover:text-pink-700 text-lg font-bold ${
                isActive("/gallery") ? "text-pink-900" : ""
              }`}
            >
              Gallery
            </a>
          </Link>
          <Link href="/reviews" legacyBehavior>
            <a
              className={`text-black hover:text-pink-700 text-lg font-bold ${
                isActive("/reviews") ? "text-pink-900" : ""
              }`}
            >
              Reviews
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a
              className={`text-black hover:text-pink-700 text-lg font-bold ${
                isActive("/contact") ? "text-pink-900" : ""
              }`}
            >
              Contact Us
            </a>
          </Link>
          <Link href="/order" legacyBehavior>
            <a
              className={`text-black hover:text-pink-700 text-lg font-bold ${
                isActive("/order") ? "text-pink-900" : ""
              }`}
            >
              How to Order
            </a>
          </Link>
        </div>
        <div className="hidden md:block absolute top-5 right-5">
          <a
            href="tel:0415591993"
            className="bg-pink-700 text-white px-4 py-2 rounded-lg font-bold hover:bg-pink-800 transition duration-300"
          >
            Call Us
          </a>
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
        </div>
      )}
    </nav>
  );
}