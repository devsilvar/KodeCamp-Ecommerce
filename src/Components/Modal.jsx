import React, { useState } from "react";
import RotatingCircleLoader from "react-loaders-kit/lib/rotatingCircle/RotatingCircleLoader";

const Loader = ({}) => {
  const [loading, setLoading] = useState(true);

  const loaderProps = {
    loading,
    size: 50,
    duration: 1.2,
    colors: ["#5e22f0", "#5e22f0", "#f6b93b", "#ef5777"],
  };

  console.log();

  return (
    <>
      <div className="mt-20 justify-center w-full flex items-center">
        <RotatingCircleLoader {...loaderProps} />
      </div>
    </>
  );
};

export default Loader;
