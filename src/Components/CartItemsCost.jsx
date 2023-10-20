import React from "react";
import { getProduct } from "../FetchClient";

const CartItemsCost = ({  quantity, realId }) => {
    let products = getProduct(id)
  return <div>{realId == id && `$${quantity * productData.price}`}</div>
};

export default CartItemsCost;
