import { useContext } from "react";
import ProductCard from "../Components/ProductCard";
import { ShopContext } from "../Context/ShopContext";

import { AiFillStar } from "react-icons/ai";

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

function Home() {
  const Cart = useContext(ShopContext);
  if (!Cart) return undefined;
  return (
    <>
      {Cart.loading ? (
        <div className="mt-[300px]">
          <Loader />
        </div>
      ) : (
        <div className="pt-32">
          <section className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 md:w-3/5 lg:w-4/5 w-[90%] px-2s mx-auto">
            {Cart.Productss.map((item, index) => {
              return (
                <ProductCard
                  data={item}
                  {...item}
                  reviewStars={reviewStars}
                  key={index}
                />
              );
            })}
          </section>
        </div>
      )}
    </>
  );
}

export default Home;
