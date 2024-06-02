import useSocialLinks from "../hooks/useSocialLinks";
import Image from "next/image";

export default function Footer() {
  const socialLinks = useSocialLinks();

  return (
    <footer className="bg-gradient-to-r from-pink-400 to-pink-100 p-8">
      <div className="container mx-auto text-white">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-start mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <ul>
              <li className="mb-2">
                <a href="tel:0415591993" className="hover:text-pink-300">
                  <i className="fas fa-phone-alt"></i> 0415 591 993
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="mailto:cakebucketsl@gmail.com"
                  className="hover:text-pink-300"
                >
                  <i className="fas fa-envelope"></i> cakebucketsl@gmail.com
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.google.com/maps?q=10+Woodvale+Road,+Boronia+Victoria+3155,+Australia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-300"
                >
                  <i className="fas fa-map-marker-alt"></i> 10 Woodvale Road,
                  Boronia Victoria 3155, Australia
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-end mb-8 md:mb-0">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-300 transition duration-300 ease-in-out transform hover:scale-110 mx-2"
              >
                <Image
                  src={link.icon}
                  alt={`${link.name} icon`}
                  width={40} // Adjust width as necessary
                  height={40} // Adjust height as necessary
                  className="rounded-full"
                />
              </a>
            ))}
          </div>
        </div>
        <hr className="border-t border-pink-300 my-6" />
        <div className="text-center text-black font-semibold">
          &copy; {new Date().getFullYear()} Cake Bucket. All rights reserved.
        </div>
      </div>
    </footer>
  );
}