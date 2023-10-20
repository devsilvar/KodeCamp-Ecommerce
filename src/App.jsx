import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";
import Loader from "./Pages/Utils/Modal";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { States } from "./Pages/Utils/Countries";

import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import FetchClientData from "./Pages/Utils/FetchClientData";
import Checkout from "./Pages/Checkout";

export const FetchClient = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});

function App() {
  const [Loading, setLoading] = useState(true);
  const { Products, loading } = FetchClientData();
  const [Product, setProduct] = useState([]);
  const [states, setstates] = useState(States);

  // useEffect(() => {
  //   FetchClient.get().then((res) => {
  //     setProducts(res.data);
  //     console.log(ProductItem());
  //   });
  // }, []);
  console.log(states);

  return (
    <>
      {loading ? (
        <div className="mt-[300px]">
          <Loader />
        </div>
      ) : (
        <>
          <Navbar Products={Products} />
          <Routes>
            <Route
              path="/"
              element={<Home Loading={Loading} Products={Products} />}
            />
            <Route
              path="/ProductDetails/:productId"
              element={<ProductDetails Product={Products} />}
            />
            <Route
              path="/checkout"
              element={<Checkout Products={Products} />}
            />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
