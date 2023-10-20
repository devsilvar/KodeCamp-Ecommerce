import React, { useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const Modals = ({ Products, setisOpen, isOpen }) => {
  const Cart = useContext(ShopContext);
  let cc = Cart.totalCart();
  console.log(Number(cc));

  const checkOut = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    setisOpen(!isOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className=" modal top-20 w-4/5 md:w-4/5 lg:w-1/4 me-3  z-20 text-black fixed right-2 ">
        <div className="relative  h-[400px]">
          <div className="flex top-0 z-50 bg-white justify-between p-3 border-b-8 border-teal-200 w-full md:w-2/5 md:ms-auto lg:w-full absolute left-0 right-0  ms-auto">
            {" "}
            <p className="font-bold">Carts</p>
            <FaTimes onClick={() => setisOpen(!isOpen)} />
          </div>

          <div className=" pt-16 pb-16 bg-white h-[400px] px-5 overflow-auto w-full md:w-2/5 md:ms-auto lg:w-full">
            {Products.map((item, index) => {
              if (Cart.getProductQuantity(item.id) > 0) {
                return (
                  <>
                    <div
                      className=" flex gap-2 mx-auto mb-5 w-full justify-center items-center "
                      key={index}
                    >
                      <img
                        src={item.image}
                        className="w-[70px] h-[70px]"
                        alt="Logo"
                      />
                      {/* <p className="text-xs">{item.title}</p> */}
                      <div className="flex-row">
                        <h2 className="text-sm font-bold">
                          {item.title.substring(0, 20)}
                        </h2>
                        <p>{item.price}</p>
                      </div>

                      <div className="flex items-center gap-4 my-4 ">
                        <button
                          onClick={() => Cart.removeCart(item.id)}
                          className="text-teal-600 rounded-full w-9 h-9 bg-gray-200 pb-1 text-2xl"
                        >
                          -{" "}
                        </button>

                        <p>{Cart.getProductQuantity(item.id)}</p>

                        <button
                          onClick={() => Cart.AddCart(item.id)}
                          className="text-teal-600 rounded-full w-9 h-9 pb-1 bg-gray-200 text-2xl"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </>
                );
              } else {
              }
            })}
          </div>
          {/* <div className=" border-t-8 border-teal-200 shadow-lg fixed lg:bottom-44 bottom-24  w-full bg-white z-10">
            <div className="flex md:w-1/5 w-4/5 lg:w-1/5 justify-around items-center">
              <h3 className=" text-bold text-xl p-3 ">
                Total: ${Math.ceil(Cart.totalCart())}
              </h3>

              <button className="bg-teal-700 py-2 px-3 text-white text-xs rounded-3xl">
                Checkout
              </button>
            </div>
          </div> */}
          <div className="flex justify-between  w-full md:w-2/5 md:ms-auto lg:w-full  p-3 bg-green-300 border-t-8 border-teal-200 absolute bottom-0 left-0 right-0 ms-auto">
            <div className="flex justify-between w-full items-center">
              <h3 className="flex text-bold text-xl gap-3 font-bold ">
                Total: <p> ₦{Math.ceil(cc)}</p>
              </h3>
              <Link to="/checkout">
                <button
                  onClick={() => setisOpen(!isOpen)}
                  disabled={!cc}
                  className="bg-teal-700 py-2 px-3 disabled:bg-opacity-20 text-white text-sm rounded-3xl"
                >
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modals;
