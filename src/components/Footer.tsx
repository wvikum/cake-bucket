import useSocialLinks from "../hooks/useSocialLinks";

export default function Footer() {
  const socialLinks = useSocialLinks();

  return (
    <footer className="bg-gradient-to-r from-pink-400 to-pink-100 p-8">
      <div className="container mx-auto text-center text-white">
        <p className="mb-6 text-lg font-semibold">
          &copy; {new Date().getFullYear()} Cake Bucket. All rights reserved.
        </p>
        <p className="mb-4 text-2xl font-bold">
          Follow us on social for updates
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <img
                src={link.icon}
                alt={`${link.name} icon`}
                className="h-10 w-10"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
