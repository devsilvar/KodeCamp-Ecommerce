import React, { useState, useEffect } from "react";
import Spinner from "../Components/Spinner";
import toast, { Toaster } from "react-hot-toast";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { ValidateEmail } from "../Utils/ValidateEmail";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  collection,
  addDoc,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db, auth } from "../Config/Firebase";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignUp = () => {
  const navigate = useNavigate();
  const [passwordtoggle, setpasswordtoggle] = useState(false);
  const [SignUpSection, setSignUpSection] = useState(false);
  const [Loader, setLoader] = useState(false);
  const [Password, setPassword] = useState({ value: true, toggle: true });
  const [passwordvalue, setpasswordvalue] = useState(true);
  const [errorMsg, seterrorMsg] = useState("");
  const [form, setform] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    Password1: "",
    Password2: "",
  });

  const notify = () =>
    toast.success("You've succesfully Registered your Account ");

  const handleSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    console.log("heelo");
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.Password1
      );

      await setDoc(doc(db, "users", res.user.uid), {
        firstName: form.firstname,
        lastName: form.lastname,
        Email: form.email,
        phoneNumber: form.phonenumber,
        timeStamp: serverTimestamp(),
      });
      setLoader(false);
      console.log("I am Done");
      navigate("/login");
      setTimeout(() => {
        notify();
      }, 2000);
    } catch (e) {
      console.error("Error adding document: ", e);
      setLoader(false);
    }

    console.log(form);
  };

  // useEffect(() => {
  //   handleSubmit();
  // }, []);

  useEffect(() => {
    setSignUpSection(true);
  }, []);

  function ChangeForm(e) {
    setform({ ...form, [e.target.id]: e.target.value });
  }

  function toggleSignupSection() {
    setSignUpSection(!SignUpSection);
  }

  function togglePassword() {
    setPassword(!Password.toggle);
    setPasswordvalue(!Password.value);
  }
  const handleFirebase = async (e) => {
    e.preventDefault();
    console.log("heelo");
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912,
        timeStamp: serverTimestamp(),
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const checkForm = () => {
    return (
      form.firstname &&
      form.lastname &&
      ValidateEmail(form.email) &&
      form.phonenumber.length == 11 &&
      form.Password1 == form.Password2 &&
      form.Password1.length != 0
    );
  };
  return (
    <section className="bg-light-gray pt-24">
      <Toaster />
      <div className="lg:w-1/4 w-[90%] mx-auto shadow-2xl bg-white p-5">
        <h2 className="text-2xl font-semibold">Register A new Account</h2>

        <p className="text-gray-400 py-2 text-sm font-Nunito">
          To Register Your account kindly Fill In your Details to create a New
          Kuda Account.
        </p>

        <form action="" onSubmit={handleSubmit}>
          {SignUpSection ? (
            <>
              <label htmlFor="First Name" className="block mb-1">
                First Name
              </label>
              <input
                type="text"
                value={form.firstname}
                onChange={ChangeForm}
                id="firstname"
                placeholder="Enter Your First Name"
                className="border-2 border-gray-400 outline-none b-2 mb-2 w-full rounded-lg px-4 py-2"
              />

              <label htmlFor="Last Name" className="block mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                onChange={ChangeForm}
                value={form.lastname}
                placeholder="Enter Your Last Name"
                className="border-2 border-gray-400 outline-none mb-3 b-2 w-full rounded-lg px-4 py-2"
              />

              <label htmlFor="Email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={ChangeForm}
                placeholder="Enter Your Email"
                className="border-2 border-gray-400 outline-none b-2 w-full rounded-lg px-4 py-2"
              />

              <p className="text-gray-700 text-xs cursor-pointer font-Mulli my-5">
                If you have An Account{" "}
                <span className="font-bold" onClick={() => navigate("/Login")}>
                  {" "}
                  Click here
                </span>{" "}
                to Login
              </p>

              <button
                className="block mt-5 bg-purple-700 p-1 disabled:opacity-25 rounded-full"
                type="button"
                disabled={
                  !(
                    form.firstname &&
                    form.lastname &&
                    ValidateEmail(form.email)
                  )
                }
                onClick={toggleSignupSection}
              >
                <BsFillArrowRightCircleFill
                  type="button"
                  className="text-white block text-4xl shadow-xl "
                />
              </button>
            </>
          ) : (
            <>
              <label htmlFor="First Name" className="block mb-1">
                Phone Number
              </label>
              <input
                type="number"
                id="phonenumber"
                onChange={ChangeForm}
                value={form.phonenumber}
                placeholder="Enter Your First Name"
                className="border-2 border-gray-400 outline-none b-2 mb-2 w-full rounded-lg px-4 py-2"
              />

              <label htmlFor="Last Name" className="block mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={passwordtoggle ? "text" : "password"}
                  id="Password1"
                  value={form.Password1}
                  onChange={ChangeForm}
                  placeholder="••••••••••"
                  className="border-2 border-gray-400 outline-none mb-3 b-2 w-full rounded-lg px-4 py-2"
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

              <label htmlFor="Password" className="block mb-1">
                Confirm Password
              </label>
              <input
                type={passwordtoggle ? "text" : "password"}
                id="Password2"
                value={form.Password2}
                onChange={ChangeForm}
                placeholder="••••••••••"
                className="border-2 border-gray-400 outline-none b-2 w-full rounded-lg px-4 py-2"
              />
              <sub className="errors mt-2 text-red-500">
                {form.Password2.length == 0
                  ? ""
                  : form.Password1 == form.Password2
                  ? ""
                  : "Passwords Do not Match"}
              </sub>
              <sub className="errors text-red-600">
                {errorMsg ? errorMsg : ""}
              </sub>

              <p className="text-gray-700 text-xs cursor-pointer font-Mulli my-5">
                If you have An Account{" "}
                <span className="font-bold" onClick={() => navigate("/Login")}>
                  {" "}
                  Click here
                </span>{" "}
                to Login
              </p>

              <div className="flex justify-between items-center my-4">
                <button
                  className="block bg-purple-700 p-1 disabled:opacity-25 rounded-full"
                  type="button"
                  onClick={toggleSignupSection}
                >
                  <BsFillArrowLeftCircleFill className="block text-white text-4xl disabled:opacity-10  shadow-xl " />
                </button>

                <button
                  disabled={!checkForm()}
                  type="submit"
                  className=" flex py-2 px-4 rounded-3xl disabled:opacity-30 gap-2 bg-purple-700 text-white font-Mulli"
                >
                  Register {Loader && <Spinner />}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default SignUp;
