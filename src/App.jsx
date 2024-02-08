import { useState, useContext } from "react";
import axios from "axios";
import "./App.css";
import Loader from "./Components/Modal";
import Navbar from "./Components/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import { States } from "./Utils/Countries";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";

import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import { AuthContext } from "./Context/AuthContext";
import SignUp from "./Pages/SignUp";
import UserData from "./Pages/UserData";
import { ShopContext } from "./Context/ShopContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FetchClient = axios.create({
  baseURL: import.meta.env.VITE_PRODUCTS_LINK,
});

function App() {
  const { currentUser } = useContext(AuthContext);
  const Cart = useContext(ShopContext);
  //  const [Loading, setLoading] = useState(true);
  // const { Products, loading } = FetchClientData();
  // const [Product, setProduct] = useState([]);
  // const [states, setstates] = useState(States);

  const RequireAuth = ({ children }) => {
    return currentUser ? (
      children
    ) : (
      <>
        <Navigate to="/login" />{" "}
      </>
    );
  };
  // console.log(Loading);
  console.log(Cart.Productss);
  console.log(currentUser);
  return (
    <>
      {Cart.loading ? (
        <div className="mt-[300px]">
          <Loader />
        </div>
      ) : (
        <>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/ProductDetails/:productId"
              element={<ProductDetails Product={Cart.Productss} />}
            />
            <Route
              path="/checkout"
              element={
                <RequireAuth>
                  {" "}
                  <Checkout Product={Cart.Productss} />
                </RequireAuth>
              }
            />
            {/* <Route path="/userdata" element={<UserData />} /> */}
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <ToastContainer />
        </>
      )}
    </>
  );
}

export default App;
