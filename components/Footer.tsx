import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const navLinkClassName =
    "text-[16px] font-[400] text-gray-50 flex items-center justify-center cursor-pointer transition-all hover:font-bold";

  return (
    <footer className="bg-[#002A3A] py-10 px-4">
      <div className="mx-auto max-w-[1440px]">
        {/* Quick Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center p-3 border-b border-b-gray-500">
          <h3 className="text-white text-lg mr-7 font-semibold">Quick Links</h3>
          <ul className="flex flex-col md:flex-row gap-7 text-left">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className={navLinkClassName}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between px-3 py-5">
          {/* Links 1 */}
          <div className="hidden sm:block flex-1 mb-4 md:mb-0">
            <ul className="flex flex-col gap-3 items-start">
              <li className="w-auto p-4 rounded bg-white/5">
                <Link
                  href="#"
                  className="text-[#A9D3FF] hover:text-white transition"
                >
                  Lorem ipsum dolor sit amet
                </Link>
              </li>
              <li className="w-auto p-4 rounded bg-white/5">
                <Link
                  href="#"
                  className="text-[#A9D3FF] hover:text-white transition"
                >
                  Lorem ipsum dolor sit amet
                </Link>
              </li>
              <li className="w-auto p-4 rounded bg-white/5">
                <Link
                  href="#"
                  className="text-[#A9D3FF] hover:text-white transition"
                >
                  Lorem ipsum dolor sit amet
                </Link>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="hidden sm:block flex-1 border-none md:border-l border-gray-500 pl-4 mb-4 md:mb-0">
            <ul className="flex flex-col gap-3 items-start">
              <li className="w-[220px] p-4 rounded bg-white/5">
                <Link
                  href="#"
                  className="text-[#A9D3FF] hover:text-white transition"
                >
                  Lorem
                </Link>
              </li>
              <li className="w-[220px] p-4 rounded bg-white/5">
                <Link
                  href="#"
                  className="text-[#A9D3FF] hover:text-white transition"
                >
                  Ipsum
                </Link>
              </li>
              <li className="w-[220px] p-4 rounded bg-white/5">
                <Link
                  href="#"
                  className="text-[#A9D3FF] hover:text-white transition"
                >
                  Consectetur
                </Link>
              </li>
              <li className="w-[220px] p-4 rounded bg-white/5">
                <Link
                  href="#"
                  className="text-[#A9D3FF] hover:text-white transition"
                >
                  Efficitur
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex-1 border-none md:border-l border-gray-500 pl-4">
            <h3 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h3>
            <p className="text-[#A9D3FF] mb-4">
              Lorem Ipsum, Iso lorem,
              <br />
              Iso Lorem Posum
            </p>
            <p className="text-[#A9D3FF] mb-4">
              +91 00000 00000 <br />
              info@demo.com
            </p>

            {/* Social Icons */}
            <h3 className="text-white">Follow us on</h3>
            <div className="flex space-x-4 mt-4">
              <Link
                href="#"
                className="text-white text-lg p-2 bg-[#23415A] rounded-md"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                className="text-white text-lg p-2 bg-[#23415A] rounded-md"
              >
                <FaTwitter />
              </Link>
              <Link
                href="#"
                className="text-white text-lg p-2 bg-[#23415A] rounded-md"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="#"
                className="text-white text-lg p-2 bg-[#23415A] rounded-md"
              >
                <FaYoutube />
              </Link>
              <Link
                href="#"
                className="text-white text-lg p-2 bg-[#23415A] rounded-md"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-[#A9D3FF]">
          ©2024 Demo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
