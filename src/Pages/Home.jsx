import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export const reviewStars = (num) => {
  let stars = [];
  for (let i = 0; i < num; i++) {
    stars.push(<AiFillStar key={i} />);
  }

  return (
    <div
      className="flex  text-teal-500"
      key={new Date().toLocaleTimeString().toString()}
    >
      {stars}
    </div>
  );
};

function Home({ Loading, Products, setLoading }) {
  return (
    <>
      {!Loading ? (
        <div className="text-3xl h-[50vh] text-center mx-auto">
          {" "}
          <h2> Loading... </h2>
        </div>
      ) : (
        <>
          <div className="pt-32">
            <section className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 w-4/5 mx-auto">
              {Products.map((item, index) => {
                return (
                  <ProductCard
                    data={item}
                    {...item}
                    reviewStars={reviewStars}
                    key={index}
                    Loading={Loading}
                    setLoading={setLoading}
                  />
                );
              })}
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
