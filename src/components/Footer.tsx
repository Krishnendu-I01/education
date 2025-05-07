
import { FaFacebookF, FaTwitter, FaInstagram, FaVimeoV } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
        <div>
          <img
            src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/educa1/73d9ef11-footer-logo_1000000000000000000028.png"
            alt="Logo"
            className="h-10 mb-2"
          />
          <p className="text-sm text-gray-600">
            2020 © Educa. All rights reserved.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            Help Center
          </h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Our Company
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Location
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support Center
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            Our Courses
          </h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Basic Marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Business English
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                IT Foundations
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            Social Media
          </h4>
          <div className="flex space-x-4 text-xl text-gray-500">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaVimeoV />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
