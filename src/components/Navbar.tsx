import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (pathname: string) => router.pathname === pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-pink-300 p-5 fixed w-full transition-all duration-300 ${
        isScrolled ? "p-3" : "p-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="cursor-pointer">
            <Image
              src="/logo/logo.png" // Replace with the path to your logo image
              alt="Cake Bucket Logo"
              width={isScrolled ? 50 : 100} // Adjust width according to your logo dimensions
              height={isScrolled ? 50 : 100} // Adjust height according to your logo dimensions
            />
          </a>
        </Link>
        <div className="flex items-center space-x-8 ml-auto">
          <Link href="/gallery" legacyBehavior>
            <a
              className={`text-lg font-bold ${
                isActive("/gallery")
                  ? "text-pink-900"
                  : "text-black hover:text-pink-700"
              }`}
            >
              Gallery
            </a>
          </Link>
          <Link href="/reviews" legacyBehavior>
            <a
              className={`text-lg font-bold ${
                isActive("/reviews")
                  ? "text-pink-900"
                  : "text-black hover:text-pink-700"
              }`}
            >
              Reviews
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a
              className={`text-lg font-bold ${
                isActive("/contact")
                  ? "text-pink-900"
                  : "text-black hover:text-pink-700"
              }`}
            >
              Contact Us
            </a>
          </Link>
          <Link href="/order" legacyBehavior>
            <a
              className={`text-lg font-bold ${
                isActive("/order")
                  ? "text-pink-900"
                  : "text-black hover:text-pink-700"
              }`}
            >
              How to Order
            </a>
          </Link>
        </div>
        <div className="absolute right-0 top-0 mt-4 mr-4">
          <a
            href="tel:0415591993"
            className="bg-pink-700 text-white px-4 py-2 rounded-lg font-bold hover:bg-pink-800 transition duration-300"
          >
            Call Us
          </a>
        </div>
      </div>
    </nav>
  );
}
