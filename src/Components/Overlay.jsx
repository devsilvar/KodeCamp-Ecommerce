import React from "react";

const Overlay = ({ isOpen, setisOpen }) => {
  return (
    <div
      className="absolute w-full h-[200%] z-10 overlay"
      onClick={() => setisOpen(!isOpen)}
    ></div>
  );
};

export default Overlay;
