import { Link } from "react-router-dom";

/* icons */
import {
  PiInstagramLogoLight,
  PiTwitterLogoLight,
  PiYoutubeLogoThin,
} from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";

export default function Footer() {
  return (
    <footer className="bg-[#F9F9F9] pt-20  mt-auto ">
      <div className=" container  mx-auto flex flex-col gap-14">
        {/* first section */}
        <div className="flex flex-col md:flex-row md:justify-between  items-start mx-2 sm:mx-0 ">
          {/* logo & description */}
          <div>
            <p className="pacifico text-3xl ">Tastebite</p>
            <p className="block text-sm text-gray-400 sm:max-w-[300px] mt-3">
              &quot;On the other hand, we denounce with righteous indgnation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment&quot;
            </p>
          </div>
          {/* Links */}
          <div className="flex mt-20  flex-wrap md:mt-0 flex-row gap-20 lg:gap-36 ">
            <ul className="flex flex-col gap-3">
              <li>
                <p className="font-medium">Tastebite</p>
              </li>
              <li>
                <p className="text-gray-500 hover:text-gray-600 duration-100">
                  <Link>About us</Link>
                </p>
              </li>
              <li>
                <p className="text-gray-500 hover:text-gray-600 duration-100">
                  <Link>Careers</Link>
                </p>
              </li>
              <li>
                <p className="text-gray-500 hover:text-gray-600 duration-100">
                  <Link>Contact Us</Link>
                </p>
              </li>
              <li>
                <p className="text-gray-500 hover:text-gray-600 duration-100">
                  <Link>Feedback</Link>
                </p>
              </li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li>
                <p className="font-medium">Legal</p>
              </li>
              <li>
                <p className="text-gray-500 hover:text-gray-600 duration-100 ">
                  <Link>Terms</Link>
                </p>
              </li>
              <li>
                <p className="text-gray-500 hover:text-gray-600 duration-100">
                  <Link>Conditions</Link>
                </p>
              </li>
              <li>
                <p className="text-gray-500 hover:text-gray-600 duration-100">
                  <Link>Cookies</Link>
                </p>
              </li>
              <li>
                <p className="text-gray-500 hover:text-gray-600 duration-100">
                  <Link>Copyright</Link>
                </p>
              </li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li>
                <p className="font-medium">Follow</p>
              </li>
              <li>
                <p className="text-gray-500 hover:text-gray-600 duration-100 ">
                  <Link>Facebook</Link>
                </p>
              </li>
              <li>
                <p className="text-gray-500 hover:text-gray-600 duration-100 ">
                  <Link>Twitter</Link>
                </p>
              </li>
              <li>
                <p className="text-gray-500 hover:text-gray-600 duration-100 ">
                  <Link>Instagram</Link>
                </p>
              </li>
              <li>
                <p className="text-gray-500 hover:text-gray-600 duration-100 ">
                  <Link>Youtube</Link>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* second section */}
        <div>
          {/* divider */}
          <div className="w-full h-[2px] bg-[#f2f2f2]" />
          <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between items-center py-10">
            <p className="text-gray-500 hover:text-gray-600 duration-100">
              © 2020 Tastebite - All rights reserved
            </p>
            {/* icons link*/}
            <ul className="flex gap-10 items-center">
              <li>
                <Link>
                  <SlSocialFacebook className="text-xl" />
                </Link>
              </li>
              <li>
                <Link>
                  <PiTwitterLogoLight className="text-xl" />
                </Link>
              </li>
              <li>
                <Link>
                  <PiInstagramLogoLight className="text-xl" />
                </Link>
              </li>

              <li>
                <Link>
                  <PiYoutubeLogoThin className="text-xl" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
