import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiMenu, FiX, FiPhoneCall } from "react-icons/fi"; // Modern icon library

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (pathname: string) => router.pathname === pathname;

  return (
    <nav className="bg-gradient-to-r from-pink-300 to-pink-400 p-0 z-50 shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center h-16 md:h-36 px-4 md:px-8">
        <div className="flex-grow flex items-center">
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isOpen ? (
                <FiX className="w-8 h-8 text-black" />
              ) : (
                <FiMenu className="w-8 h-8 text-black" />
              )}
            </button>
          </div>
          <div className="flex-grow flex items-center justify-center md:justify-start">
            <Link href="/" legacyBehavior>
              <a className="cursor-pointer">
                <div className="relative w-16 h-16 md:w-36 md:h-36">
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
          <div className="md:hidden flex justify-end">
            <a
              href="tel:0415591993"
              className="text-pink-700 p-2 rounded-full hover:text-pink-800 transition duration-300"
            >
              <FiPhoneCall className="w-6 h-6 animate-bounce" />
            </a>
          </div>
        </div>
        <div className="hidden md:flex space-x-10 pr-28">
          {["/gallery", "/reviews", "/contact", "/order"].map((path, index) => (
            <Link href={path} key={index} legacyBehavior>
              <a
                className={`text-black hover:text-pink-700 text-lg font-bold ${
                  isActive(path) ? "text-pink-900" : ""
                }`}
              >
                {path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </a>
            </Link>
          ))}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-pink-300 to-pink-400 w-full p-4 space-y-2 shadow-md">
          {["/gallery", "/reviews", "/contact", "/order"].map((path, index) => (
            <Link href={path} key={index} legacyBehavior>
              <a
                className={`block text-black hover:text-pink-700 p-2 rounded ${
                  isActive(path) ? "text-pink-900 font-bold" : ""
                }`}
                onClick={toggleMenu}
              >
                {path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </a>
            </Link>
          ))}
        </div>
      )}
      <div className="hidden md:block absolute top-0 right-0 mt-4 mr-6 animate-pulse">
        <a
          href="tel:0415591993"
          className="bg-pink-700 text-white px-4 py-2 rounded-full font-bold hover:bg-pink-800 transition duration-300 flex items-center"
        >
          <FiPhoneCall className="mr-2 animate-ringing" /> Call Us
        </a>
      </div>
    </nav>
  );
}