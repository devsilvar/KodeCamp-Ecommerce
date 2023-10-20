import React, { useState, useEffect } from "react";
import Logo from "../assets/shop.png";
import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ShopContext } from "../Context/ShopContext";
import Overlay from "./Overlay";
import { Link } from "react-router-dom";
import Modals from "./Modals";
const Navbar = ({ Products }) => {
  const [isOpen, setisOpen] = useState(false);
  const Cart = useContext(ShopContext);

  console.log(Products);

  const ProductCount = Cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  // if (isOpen) {
  //   return (

  //   );
  // }

  return (
    <>
      <nav className="py-4 shadow-sm bg-white fixed w-full z-20 ">
        <div className="flex justify-between w-5/6 z-50 mx-auto">
          <Link to="/">
            <div className="flex gap-2 text-teal-600 font-bold items-center">
              <img src={Logo} width={40} alt="Logo" /> Thrift Shop
            </div>
          </Link>

          <div className="flex items-center">
            <AiOutlineShoppingCart
              className="text-teal-600 text-4xl"
              onClick={() => setisOpen(!isOpen)}
            />
            <p className=" text-center w-5 text-xs h-5 bg-teal-900 text-white rounded-full">
              {ProductCount}
            </p>
          </div>
        </div>
      </nav>
      {isOpen && (
        <>
          <Modals Products={Products} isOpen={isOpen} setisOpen={setisOpen} />
          <Overlay isOpen={isOpen} setisOpen={setisOpen} />
        </>
      )}
    </>
  );
};

export default Navbar;
