import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { FetchClient } from "../../App";
import Loader from "./Modal";

let products;
if (localStorage.products) {
  //check if we have any students in the local storage
  //if we have, send the data in the locastorge into the student variable
  products = JSON.parse(localStorage.getItem("products"));
} else {
  //if we do not have anything like student in out local storage/Database create a student array
  products = [];
  // create a databse location called Students
  localStorage.setItem("products", JSON.stringify(products));
}

const FetchClientData = () => {
  const [loading, setloading] = useState(false);
  const [Products, setProducts] = useState([]);
  const controller = new AbortController();

  const fetchApi = () => {
    setloading(true);
    FetchClient.get()
      .then((res) => {
        setProducts(res.data);
        localStorage.setItem("products", JSON.stringify(res.data))
        console.log("done");
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  };

  useEffect(() => {
    fetchApi();
    return () => {
      controller.abort();
    };
  }, []);

  return { Products, loading, setloading };
};

export default FetchClientData;

// export const ProductItem = () => {
//   const [Products, setProducts] = useState();

//   useEffect(() => {
//     FetchClient.get().then((res) => {
//       //  products = res.data;
//       setProducts(res.data);
//       //localStorage.setItem("products", JSON.stringify(products));
//     });
//   }, []);
//   let prod = JSON.parse(localStorage.getItem("products"));
//   console.log(Products);
//   return Products;
// };
