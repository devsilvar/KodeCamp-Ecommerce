import React from "react";
import { useContext, createContext, useState, useEffect } from "react";
import FetchClientData from "../Pages/Utils/FetchClientData";
import { GetProduct } from "../Pages/Utils/GetProduct";

export const ShopContext = createContext({
  items: [],
  AddCart: () => {},
  removeCart: () => {},
  clearCart: () => {},
  totalCart: () => {},
  getProductQuantity: () => {},
});

export const ShopProvider = ({ children }) => {
  const [CartProduct, setCartProduct] = useState([]);
  const { Products } = FetchClientData();

  //get the product Array
  function getProductQuantity(id) {
    let newArr = CartProduct.find((item) => item.id == id)?.quantity;
    if (newArr == undefined) {
      return 0;
    }
    return newArr;
  }

  function AddCart(id) {
    //bring the quntity from the function above
    let quantity = getProductQuantity(id);

    //lets check if the quntity is zero or is greater than zero

    if (quantity == 0) {
      setCartProduct([...CartProduct, { id: id, quantity: 1 }]);
    } else {
      setCartProduct(
        CartProduct.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        })
      );
    }
  }

  function removeCart(id) {
    //bring the quntity from the function above
    let quantity = getProductQuantity(id);

    //lets check if the quntity is zero or is greater than zero

    if (quantity == 1) {
      clearCart(id);
    } else {
      setCartProduct(
        CartProduct.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        })
      );
    }
  }

  function clearCart(id) {
    setCartProduct((cart) => cart.filter((item) => item.id !== id));
  }

  // function totalCart() {
  //   let total = 0;
  //   CartProduct.map((item) => {
  //     let productData = getProduct(item.id);
  //     total += productData.price * item.quantity;
  //   });
  //   return total;
  // }


  function totalCart() {

    let total = 0;
    CartProduct.map((item) => {
      if (item.quantity > 0) {
        let productData = Products.find(
          (product) => product.id == Number(item.id)
        );
        console.log(productData);
        total += productData.price * item.quantity;
      }
    });
    return total;
  }

  const ContextValue = {
    items: CartProduct,
    AddCart,
    removeCart,
    clearCart,
    totalCart,
    getProductQuantity,
  };

  return (
    <ShopContext.Provider value={ContextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopProvider;
