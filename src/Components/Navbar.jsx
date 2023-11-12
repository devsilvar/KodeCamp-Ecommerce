import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/shop.png";
import { AuthContext } from "../Context/AuthContext";
import { PiShoppingCartFill } from "react-icons/pi";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { ShopContext } from "../Context/ShopContext";
import Overlay from "./Overlay";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import Modals from "./Modals";
import { NavbarLinksAuth, NavbarLinksNoAuth } from "../Utils/Navdata";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const [isOpen, setisOpen] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const Cart = useContext(ShopContext);
  const [isActive, setisActive] = useState(false);
  const [isSmallNavOpen, setisSmallNavOpen] = useState(false);

  const ProductCount = Cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const collapseNav = (e) => {
    e.preventDefault();
    setisActive(!isActive);
  };
  const auth = getAuth();
  const signout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        localStorage.removeItem("user");

        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setisActive(true) : setisActive(false);
    });
  });

  return (
    <>
      {/* UnAutheticated Main (Desktop) Navbar - Not yet Autheticated */}
      <nav
        className={`${
          isActive ? "shadow-lg" : "bg-none"
        } py-3  bg-white fixed w-full z-20 grayscale-0 flex  `}
      >
        <div className="flex justify-between w-5/6 lg:px-0 px-3  z-50 mx-auto items-center">
          <Link to="/">
            <div className="flex gap-2  text-teal-600 font-bold items-center">
              <img src={Logo} width={40} className="h-[35px]" alt="Logo" />{" "}
              <span className="inline-flex gap-1 font-Nunito font-bold">
                {" "}
                <span> Thrift</span> Shop{" "}
              </span>
            </div>
          </Link>

          <div className="flex items-center ">
            <div className="lg:flex md:flex gap-4 mx-5 hidden">
              {currentUser ? (
                <>
                  <button
                    className="bg-white hover:scale-110 outline-none border-2 font-bold border-teal-700   transition-colors flex my-2 items-end text-teal-700 py-1 px-5 text-md lg:text-base  rounded-3xl"
                    onClick={signout}
                  >
                    {" "}
                    Sign Out
                  </button>
                  <button
                    className="bg-teal-800 hover:scale-110  transition-colors flex my-2 items-end text-white py-1 px-5 text-md lg:text-base  rounded-3xl border-2 border-gray-700"
                    onClick={() => navigate("/userdata")}
                  >
                    Your Data
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="bg-white hover:scale-110 outline-none border-2 font-bold border-teal-700   transition-colors flex my-2 items-end text-teal-700 py-1 px-5 text-md lg:text-base  rounded-3xl"
                    onClick={() => navigate("/Login")}
                  >
                    {" "}
                    Login
                  </button>
                  <button
                    className="bg-teal-800 hover:scale-110  transition-colors flex my-2 items-end text-white py-1 px-5 text-md lg:text-base  rounded-3xl border-2 border-gray-700"
                    onClick={() => navigate("/signup")}
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
            <PiShoppingCartFill
              className="text-teal-600 text-4xl"
              onClick={() => setisOpen(!isOpen)}
            />
            <div className=" text-center w-5 text-xs h-5 bg-teal-900 text-white p-1 flex justify-center items-center rounded-full">
              <p>{ProductCount}</p>
            </div>
          </div>
        </div>

        {/* small Nav */}
        <motion.div className="pe-4 lg:hidden md:hidden">
          <FaBars
            className="text-3xl"
            onClick={() => setisMenuOpen(!isMenuOpen)}
          />
        </motion.div>

        {isMenuOpen ? (
          <>
            <motion.div
              whileInView={{ x: [-100, -20] }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="pt-0 z-50 fixed w-full "
            >
              <ul className="bbb w-[90%] bg-white shadow-xl ps-10 pb-3">
                <AiOutlineClose
                  className="text-3xl m-3 float-right"
                  onClick={() => setisMenuOpen(!isMenuOpen)}
                />

                {!currentUser &&
                  NavbarLinksNoAuth.map((item) => {
                    return (
                      <li key={item} className="py-2">
                        <Link
                          to={item.path}
                          onClick={() => setisMenuOpen(!isMenuOpen)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}

                {currentUser &&
                  NavbarLinksAuth.map((item) => {
                    return (
                      <li key={item} className="py-2">
                        {item.name == "Sign Out" ? (
                          <>
                            <Link onClick={signout}>{item.name}</Link>
                          </>
                        ) : (
                          <>
                            <Link
                              to={item.path}
                              onClick={() => setisMenuOpen(!isMenuOpen)}
                            >
                              {item.name}
                            </Link>
                          </>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </motion.div>
          </>
        ) : (
          ""
        )}
      </nav>
      {/* Modal section dispalying the cart and the Blur Overlay */}
      {isOpen && (
        <>
          <Modals
            Products={Cart.Productss}
            isOpen={isOpen}
            setisOpen={setisOpen}
          />
          <Overlay isOpen={isOpen} setisOpen={setisOpen} />
        </>
      )}
    </>
  );
};

export default Navbar;
