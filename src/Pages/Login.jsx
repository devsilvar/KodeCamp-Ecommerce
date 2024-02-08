import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ValidateEmail } from "../Utils/ValidateEmail";
import { Toaster } from "react-hot-toast";
import { auth } from "../Config/Firebase";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "../Components/Spinner";
import { checkErrorMessage } from "../Utils/CheckErrorMsg";
import { AuthContext } from "../Context/AuthContext";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const [Loader, setLoader] = useState(false);
  const [passwordtoggle, setpasswordtoggle] = useState(false);
  const [error, seterror] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState("");
  const [LogForm, setLogForm] = useState({ email: "", Password: "" });

  function ChangeForm(e) {
    setLogForm({ ...LogForm, [e.target.id]: e.target.value });
  }

  const checkForm = () => {
    return ValidateEmail(LogForm.email) && LogForm.Password.length != 0;
  };

  useEffect(() => {
    {
      setTimeout(() => {
        alert("You Need to Login To Purchase a Products");
      }, 1000);
    }
  }, []);

  const handleLogin = (e) => {
    seterror(false);
    setLoader(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, LogForm.email, LogForm.Password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });

        navigate("/");
        setLoader(false);
      })
      .catch((error) => {
        seterror(true);
        setErrorMsg(checkErrorMessage(error.code));

        setLoader(false);
        console.log(error.code);
        if (error.code == "auth/wrong-password") {
          toast.error("Invalid Password");
        }
      });
    console.log(LogForm);
  };

  return (
    <section className="bg-light-gray pt-24">
      <Toaster />
      <ToastContainer />
      <div className="lg:w-1/4 w-[90%] mx-auto shadow-2xl bg-white p-5">
        <h2 className="text-2xl font-semibold">Register A new Account</h2>

        <p className="text-gray-400 py-2 text-sm font-Nunito">
          To Login into Your account kindly Fill In your Details below
        </p>

        <form action="" onSubmit={handleLogin}>
          <label htmlFor="First Name" className="block mb-1">
            Enter Your Email
          </label>
          <input
            type="text"
            value={LogForm.email}
            onChange={ChangeForm}
            id="email"
            placeholder="Enter Your Email"
            className="border-2 border-gray-400 outline-none b-2 mb-2 w-full rounded-lg px-4 py-2"
          />

          <label htmlFor="First Name" className="block mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={passwordtoggle ? "text" : "password"}
              value={LogForm.Password}
              onChange={ChangeForm}
              id="Password"
              placeholder="••••••••••"
              className="border-2 border-gray-400 outline-none b-2 mb-2 w-full rounded-lg px-4 py-2"
            />
            <div
              onClick={() => setpasswordtoggle(!passwordtoggle)}
              className=""
            >
              {passwordtoggle ? (
                <AiFillEye className="text-purple-700 text-3xl top-2 me-2 right-0 absolute" />
              ) : (
                <AiFillEyeInvisible className="text-purple-700 text-3xl top-2 me-2 right-0 absolute" />
              )}
            </div>
          </div>
          {error && <p className="text-red-700 text-sm"> {ErrorMsg}</p>}

          <p className="text-gray-700 text-xs cursor-pointer font-Mulli my-5">
            If you Do Not have An Account{" "}
            <span className="font-bold" onClick={() => navigate("/signup")}>
              {" "}
              Click here
            </span>{" "}
            to get One
          </p>

          <button
            disabled={!checkForm()}
            type="submit"
            className=" flex items-center gap-2 py-2 px-4 rounded-3xl disabled:opacity-30 bg-purple-700 text-white font-Mulli"
          >
            Login
            {Loader && <Spinner />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
