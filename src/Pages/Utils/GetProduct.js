import { useEffect } from "react";
import FetchClientData from "./FetchClientData";
import { FetchClient } from "../../App";
// let products;
// if (localStorage.products) {
//   //check if we have any students in the local storage
//   //if we have, send the data in the locastorge into the student variable
//   products = JSON.parse(localStorage.getItem("products"));
// } else {
//   //if we do not have anything like student in out local storage/Database create a student array
//   products = [];
//   // create a databse location called Students
//   localStorage.setItem("products", JSON.stringify(products));
// }

export const GetProduct = (id) => {
  //  const { Products, loading, setloading } = FetchClientData();
  let products = JSON.parse(localStorage.getItem("products"));
  // localStorage.setItem("products", JSON.stringify(products));

  let newArr = products.find((item) => item.id == Number(id));

  if (newArr == undefined) {
    return loading;
  }
  return newArr;
};
