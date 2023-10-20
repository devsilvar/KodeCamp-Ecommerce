import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineUserDelete } from "react-icons/ai";
import { States } from "./Utils/Countries";
import { IoTrashBin } from "react-icons/io5";
import { DeliveryPrice } from "./Utils/StateDelivery";
import { DeliveryDate } from "./Utils/DeliveryDate";

const Checkout = ({ Products }) => {
  const [states, setstates] = useState(States);
  const [FormData, setFormData] = useState({
    fname: "",
    lname: "",
    Address: "",
    City: "",
    State: "",
    Zip: "",
    email: "",
    number: "",
  });
  const Cart = useContext(ShopContext);
  let TotalPrice = Cart.totalCart();
  // let removeCart = Cart.clearCart()
  TotalPrice = Number(TotalPrice);
  const TaxFee = 5.99;

  const FormValues = (e) => {
    setFormData({ ...FormData, [e.target.id]: e.target.value });
    console.log(FormData);
    console.log(DeliveryPrice(FormData.State));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FormData);
  };

  const checkForm = () => {
    return (
      FormData.fname &&
      FormData.lname &&
      FormData.email &&
      FormData.Address &&
      FormData.State &&
      FormData.number
    );
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-6  lg:w-4/6  w-5/6 lg:gap-9 gap-2  mx-auto pt-24">
      <div className="col-span-4 order-last lg:order-first">
        <h2 className="font-bold text-3xl">Who is Getting This Order</h2>
        <hr className="w-full my-5" />
        <h3 className=" my-5 text-xl text-gray-500">Shipping Information</h3>

        <form action="" onSubmit={handleSubmit}>
          <div className="lg:flex flex-row  gap-7">
            <div className="lg:w-2/4 w-full ">
              <div className="mb-4">
                <label htmlFor="" className="block font-bold">
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  onChange={FormValues}
                  value={FormData.fname}
                  className="input-primary"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="" className="block font-bold">
                  Last Name
                </label>
                <input
                  type="text"
                  onChange={FormValues}
                  value={FormData.lname}
                  id="lname"
                  className="input-primary"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="" className="block font-bold">
                  Address
                </label>
                <input
                  type="text"
                  onChange={FormValues}
                  value={FormData.Address}
                  id="Address"
                  className="input-primary"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="" className="block font-bold">
                  City
                </label>
                <input
                  type="text"
                  id="City"
                  onChange={FormValues}
                  value={FormData.City}
                  className="input-primary"
                />
              </div>
              <div className="flex gap-4 mb-4">
                <div>
                  <label htmlFor="" className="block font-bold">
                    State
                  </label>
                  <select
                    name=""
                    id="State"
                    onChange={FormValues}
                    value={FormData.State}
                    className="input-primary text-[15px] font-bold"
                  >
                    {states.map((item, index) => {
                      return (
                        <option id="State" key={index}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label htmlFor="" className="block font-bold">
                    ZIP CODE
                  </label>
                  <input
                    type="text"
                    onChange={FormValues}
                    value={FormData.Zip}
                    id="Zip"
                    className="input-primary px-1"
                  />
                </div>
              </div>
              <div className="flex mt-4 gap-3">
                <input type="checkbox" name="" id="" />
                <span>Save this as my billing Adress</span>
              </div>
            </div>
            <div className="lg:w-2/4 w-full  lg:my-0 my-10">
              <p className="text-lg text-gray-500">Package Delivery Date:</p>
              <hr className="w-5/6 border-gray-300 lg:my-0 my-5" />
              {DeliveryDate(FormData.State)}
            </div>
          </div>
          {/* </form> */}

          <hr className="w-full mt-5 text-gray-700 border-gray-300" />
          <h2 className="text-2xl font-bold my-5">Your Contact Information</h2>
          {/* <form action="" className="w-full"> */}
          <div className="mb-4">
            <label htmlFor="" className="block font-bold">
              Email Adress
            </label>
            <input
              type="email"
              onChange={FormValues}
              value={FormData.email}
              id="email"
              className="input-primary"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="" className="block font-bold">
              Phone Number
            </label>
            <input
              type="number"
              id="number"
              onChange={FormValues}
              value={FormData.number}
              className="input-primary"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={!checkForm()}
              className="disabled:bg-opacity-30 font-bold bg-teal-700 py-3 rounded-md text-white text-[16px] input-primary"
            >
              Continue to Payment Information
            </button>
          </div>
        </form>
      </div>
      <div className="lg:col-span-2 col-span-6  ">
        <h2 className="font-bold text-2xl">Order Summary</h2>
        <div className="border border-gray-400 rounded-md px-2 my-5">
          <h2 className="text-lg font-bold">Shipping</h2>

          <div>
            {Products.map((item, index) => {
              if (Cart.getProductQuantity(item.id) > 0) {
                return (
                  <div
                    className="flex gap-3 my-2 items-center border-b-2 py-2 "
                    key={index}
                  >
                    <div className="  w-1/6  border-gray-300 p-1 rounded-md h-[50px]">
                      <img
                        src={item.image}
                        width={70}
                        className="w-full h-full"
                        alt={item.title}
                      />
                    </div>
                    <p className="text-sm w-3/6">{item.title}</p>

                    <div className="flex-row">
                      <p className="text-sm"> ₦{item.price}</p>
                      <p className="font-bold text-sm w-full">
                        Qty {Cart.getProductQuantity(item.id)}
                      </p>
                      <IoTrashBin
                        role="button"
                        onClick={() => Cart.clearCart(item.id)}
                        className="text-red-600"
                        type="button"
                      />
                    </div>
                  </div>
                );
              }
            })}
          </div>

          <p className="">
            Delivery Fees{" "}
            <span className="font-bold">
              {" "}
              ₦{DeliveryPrice(FormData.State)}{" "}
            </span>{" "}
          </p>
          <p>
            Tax Fees: <span className="font-bold"> ₦1200</span>
          </p>

          <hr className="border-2 mt-4 border-gray-300 " />
          <div className="my-5">
            <p className="font-sans text-lg">
              SubTotal: ₦
              {(TotalPrice + DeliveryPrice(FormData.State) + TaxFee).toFixed(2)}{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
