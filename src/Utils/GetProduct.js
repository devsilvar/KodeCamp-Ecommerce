import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

export const GetProduct = (id) => {
  const Cart = useContext(ShopContext);

  let newArr = Cart.Productss.find((item) => item.id == Number(id));

  if (newArr == undefined) {
    return "loading...";
  }
  return newArr;
};
