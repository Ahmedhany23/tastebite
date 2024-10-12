import { NavLink, Link } from "react-router-dom";
import { useState,useContext } from "react";
import profile from "../assets/profile.webp";

import { motion, AnimatePresence } from "framer-motion";

import { FavoritesContext } from "../context/FavoritesContext";
/* icons  */
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";

  /* data links */
  const navlinks = [
    { link: "Homepage", path: "/" },
    { link: "Recipe Page", path: "/recipes" },
    { link: "Pages", path: "/page" },
    { link: "Buy", path: "/buy" },
  ];


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { favoritesCount } = useContext(FavoritesContext);

  return (
    <header className=" py-8 container px-2 mx-auto flex justify-between items-center  ">
      {/* Logo */}
      <h1 className="pacifico text-4xl ">
        <Link to="/">Tastbite</Link>
      </h1>

      {/* Nav Links */}
      <nav className=" hidden md:block">
        <ul className="flex gap-8">
          {navlinks.map((item, idx) => (
            <li key={idx}>
              <NavLink to={item.path}>{item.link}</NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/*profile Image*/}
      <div className="flex flex-wrap items-center gap-5">
        <Link to='/favorites' className="relative">
          <CiHeart className="text-3xl   hover:text-red-500 duration-150 cursor-pointer" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-sm">{favoritesCount}</div>
        </Link>

        <img
          src={profile}
          alt="profile-image"
          loading="eager"
          className="h-8 w-8 rounded-full cursor-pointer"
        />

        {/* Nav Links responive*/}

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ y: "-200%" }}
              animate={{
                y: 0,
              }}
              exit={{
                y: "-100%",
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 25,
              }}
              className="fixed bottom-0 left-0 right-0 w-auto min-h-full bg-white z-10 px-3 py-6 md:static md:hidden"
            >
              <div className=" flex justify-end w-full">
                <IoClose
                  className="text-right cursor-pointer text-3xl "
                  onClick={() => setIsOpen(!isOpen)}
                />
              </div>
              <div className="flex flex-col gap-20 h-full mt-20">
                {navlinks.map((item, idx) => (
                  <NavLink
                    key={idx}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-gray-500 text-3xl h-fit font-poppins font-normal hover:text-black transition duration-200 ${
                        isActive ? "text-black" : ""
                      }`
                    }
                  >
                    <motion.p
                      initial={{ x: "100%" }}
                      animate={{
                        x: 0,
                      }}
                      exit={{
                        x: "100%",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 70,
                        damping: 25,
                      }}
                    >
                      {item.link}
                    </motion.p>
                  </NavLink>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Hamburger Menu */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="block md:hidden"
          >
            <RxHamburgerMenu
              className="text-3xl cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </header>
  );
}
