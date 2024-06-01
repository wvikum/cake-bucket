import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-pink-300 p-5">
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
        <div className="space-x-8">
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
      </div>
    </nav>
  );
}
